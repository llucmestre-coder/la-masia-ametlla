/* ═══════════════════════════════════════════════════════════════
   espais.js — ELEMENT SIGNATURA: «Quin espai necessiteu?»

   La Masia té quatre sales de capacitats molt diferents (20 / 100 /
   110 / 200). Avui aquesta informació és un paràgraf de text pla en
   una pàgina que gairebé ningú visita. Aquí es converteix en una
   resposta de deu segons per a qui organitza una celebració.

   Les capacitats surten de /ca/els-nostres-espais de la seva web.
   No n'hi ha cap d'inventada.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var cercador = document.getElementById('cercador-espais');
  if (!cercador) return;

  var rang      = document.getElementById('comensals');
  var mostrador = document.getElementById('comensals-valor');
  var resultat  = document.getElementById('cercador-resultat');
  var sales     = Array.prototype.slice.call(document.querySelectorAll('[data-capacitat]'));
  var tipusRadios = Array.prototype.slice.call(
    cercador.querySelectorAll('input[name="tipus"]'));

  /* El camp del formulari de pressupost que es preomple */
  var campComensals = document.getElementById('comensals-form');
  var campTipus     = document.getElementById('tipus-form');
  var campSala      = document.getElementById('sala-form');

  function tipusTriat() {
    var marcat = tipusRadios.filter(function (r) { return r.checked; })[0];
    return marcat ? marcat.value : '';
  }

  function actualitza() {
    var n = parseInt(rang.value, 10);
    mostrador.textContent = String(n);

    var encaixen = [];

    sales.forEach(function (sala) {
      var capacitat = parseInt(sala.dataset.capacitat, 10);
      var nom       = sala.dataset.nom;
      var estat     = sala.querySelector('.sala-estat');
      var hi_cap    = n <= capacitat;

      /* Una sala de 200 per a 8 persones tècnicament "hi cap", però no
         és una recomanació honesta: la marquem com a massa gran. */
      var massaGran = capacitat >= 100 && n < capacitat * 0.2;

      sala.classList.toggle('encaixa', hi_cap && !massaGran);
      sala.classList.toggle('no-encaixa', !hi_cap || massaGran);

      if (!hi_cap) {
        estat.textContent = 'Massa petit per a ' + n + ' persones';
      } else if (massaGran) {
        estat.textContent = 'Hi cabeu, però us quedarà gran';
      } else {
        estat.textContent = '✓ Us encaixa';
        encaixen.push(nom);
      }
    });

    var tipus = tipusTriat();
    var perA  = tipus ? ' per a ' + tipus.toLowerCase() : '';
    var frase;

    if (!encaixen.length) {
      frase = 'Per a <strong>' + n + ' persones</strong>' + perA +
              ' cal que en parlem: combinem sales o busquem una data amb ' +
              'el restaurant per a vosaltres sols. Truqueu-nos al ' +
              '<strong>938 43 00 02</strong>.';
    } else if (encaixen.length === 1) {
      frase = 'Per a <strong>' + n + ' persones</strong>' + perA +
              ' us recomanem el <strong>' + encaixen[0] + '</strong>.';
    } else {
      var darrer = encaixen.pop();
      frase = 'Per a <strong>' + n + ' persones</strong>' + perA +
              ' teniu <strong>' + (encaixen.length + 1) + ' espais</strong> possibles: ' +
              encaixen.join(', ') + ' i ' + darrer + '.';
      encaixen.push(darrer);
    }

    resultat.innerHTML = frase;

    /* Preomple el formulari de pressupost de més avall */
    if (campComensals) campComensals.value = n;
    if (campTipus && tipus) campTipus.value = tipus;
    if (campSala) campSala.value = encaixen.join(', ');
  }

  /* input[type=range] nadiu: fletxes, Inici/Fi i aria-valuenow ja
     funcionen sols. Només cal mantenir el text sincronitzat. */
  rang.addEventListener('input', actualitza);
  tipusRadios.forEach(function (r) { r.addEventListener('change', actualitza); });

  actualitza();
})();
