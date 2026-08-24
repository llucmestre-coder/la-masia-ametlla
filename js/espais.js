/* ═══════════════════════════════════════════════════════════════
   espais.js — ELEMENT SIGNATURA: «Quin espai necessiteu?»

   La Masia té quatre sales de capacitats molt diferents (20 / 100 /
   110 / 200). Avui aquesta informació és un paràgraf de text pla en
   una pàgina que gairebé ningú visita. Aquí es converteix en una
   resposta de deu segons per a qui organitza una celebració.

   Les capacitats surten de /ca/els-nostres-espais de la seva web.
   No n'hi ha cap d'inventada.

   IDIOMES: aquest fitxer escriu frases senceres a la pàgina, i per
   tant les ha de saber dir en castellà i en anglès. Tot el que es
   veu passa per T(). El que NO canvia mai és el `value` que s'envia
   al restaurant: el formulari sempre els arriba amb «Saló Nou» i
   «Comunió», hi hagi entrat qui hi hagi entrat i en l'idioma que
   sigui. Qui ho llegeix a la cuina és d'aquí.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var cercador = document.getElementById('cercador-espais');
  if (!cercador) return;

  function T(text, valors) {
    if (window.I18N) return window.I18N.t(text, valors);
    return valors
      ? text.replace(/\{(\w+)\}/g, function (tot, nom) {
          return valors[nom] != null ? valors[nom] : tot;
        })
      : text;
  }

  var rang      = document.getElementById('comensals');
  var mostrador = document.getElementById('comensals-valor');
  var resultat  = document.getElementById('cercador-resultat');
  var sales     = Array.prototype.slice.call(document.querySelectorAll('[data-capacitat]'));
  var tipusRadios = Array.prototype.slice.call(
    cercador.querySelectorAll('input[name="tipus"]'));

  /* Els camps del formulari de pressupost que s'omplen sols */
  var campComensals = document.getElementById('comensals-form');
  var campTipus     = document.getElementById('tipus-form');
  var campSala      = document.getElementById('sala-form');

  /* Fins que no es toqui el cercador, el formulari es queda en blanc */
  var usuariHaTriat = false;

  /* ── El desplegable de saló del formulari ─────────────────────
     Només es pot triar quan hi ha un nombre de comensals, i els salons
     on no hi caben queden desactivats. Les capacitats surten de les
     targetes de saló (data-capacitat): no es repeteixen enlloc més.  */

  var ajudaSala = document.getElementById('ajuda-sala');

  function capacitatDe(nom) {
    for (var i = 0; i < sales.length; i++) {
      if (sales[i].dataset.nom === nom) return parseInt(sales[i].dataset.capacitat, 10);
    }
    return null;
  }

  function comensalsDelFormulari() {
    if (!campComensals) return NaN;
    return parseInt(campComensals.value, 10);
  }

  function actualitzaSelectSala() {
    if (!campSala || campSala.tagName !== 'SELECT') return;

    var n = comensalsDelFormulari();
    var teNombre = !isNaN(n) && n > 0;
    var hiCapAlgun = false;

    campSala.disabled = !teNombre;
    campSala.options[0].textContent = teNombre
      ? T('Trieu-ne un…')
      : T('Digueu abans quants sereu');

    Array.prototype.forEach.call(campSala.options, function (op) {
      if (!op.value) return;
      var cap = capacitatDe(op.value);
      if (cap === null) return;

      var hiCap = !teNombre || n <= cap;
      op.disabled = teNombre && !hiCap;
      op.textContent = T(op.disabled
        ? '{sala} — fins a {n} persones (no hi cabeu)'
        : '{sala} — fins a {n} persones', { sala: T(op.value), n: cap });
      if (hiCap && teNombre) hiCapAlgun = true;
    });

    /* Si el que hi havia triat ja no serveix, es buida: val més quedar-se
       sense tria que enviar un saló on no hi caben. */
    var triat = campSala.options[campSala.selectedIndex];
    if (triat && triat.disabled) campSala.value = '';

    if (!ajudaSala) return;
    if (!teNombre) {
      ajudaSala.textContent = '';
    } else if (!hiCapAlgun) {
      ajudaSala.textContent =
        T('Per a {n} persones cal que en parlem: truqueu-nos al 938 43 00 02.',
          { n: n });
    } else {
      ajudaSala.textContent = '';
    }
  }

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
        estat.textContent = T('Massa petit per a {n} persones', { n: n });
      } else if (massaGran) {
        estat.textContent = T('Hi cabeu, però us quedarà gran');
      } else {
        estat.textContent = T('✓ Us encaixa');
        encaixen.push(nom);
      }
    });

    var tipus = tipusTriat();

    /* «per a comunió», «per a bateig»… són cinc frases fetes al
       diccionari, una per tipus. No es munten ajuntant una preposició
       amb el nom: en castellà cal l'article i té gènere («para una
       comunión», «para un bautizo») i en anglès sempre demana «a».

       «Altres» és l'excepció i no en té cap: «per a altres» no vol dir
       res en cap dels tres idiomes. Qui el marca encara no sap com
       se'n diu, del que vol fer, i la resposta del cercador —quina
       sala hi cap— no depèn del nom de la festa. */
    var perA = (tipus && tipus !== 'Altres')
      ? ' ' + T('per a ' + tipus.toLowerCase())
      : '';

    /* Els noms de sala també es diuen en l'idioma de qui mira, encara
       que el que s'enviï al restaurant sigui sempre el nom d'aquí. */
    var noms = encaixen.map(function (x) { return T(x); });
    var frase;

    if (!noms.length) {
      frase = T('Per a <strong>{n} persones</strong>{perA} cal que en parlem: ' +
                'combinem sales o busquem una data amb el restaurant per a ' +
                'vosaltres sols. Truqueu-nos al <strong>938 43 00 02</strong>.',
                { n: n, perA: perA });
    } else if (noms.length === 1) {
      frase = T('Per a <strong>{n} persones</strong>{perA} us recomanem el ' +
                '<strong>{sala}</strong>.',
                { n: n, perA: perA, sala: noms[0] });
    } else {
      var darrer = noms.pop();
      frase = T('Per a <strong>{n} persones</strong>{perA} teniu ' +
                '<strong>{k} espais</strong> possibles: {llista} i {darrer}.',
                { n: n, perA: perA, k: noms.length + 1,
                  llista: noms.join(', '), darrer: darrer });
    }

    resultat.innerHTML = frase;

    /* Omple el formulari NOMÉS si l'usuari ha tocat el cercador.
       Si ho féssim també en carregar la pàgina, qui hi arribés pel botó
       de la barra (que salta directament al formulari) enviaria
       "Comunió · 60 comensals" sense haver-ho triat mai, i els camps
       són seus per editar: no els hem d'escriure res a l'esquena. */
    if (!usuariHaTriat) return;
    if (campComensals) campComensals.value = n;
    if (campTipus && tipus) campTipus.value = tipus;
    /* El saló no es tria sol: el cercador només obre el desplegable i hi
       deixa disponibles els que hi caben. La tria és de qui ho omple. */
    actualitzaSelectSala();
  }

  /* input[type=range] nadiu: fletxes, Inici/Fi i aria-valuenow ja
     funcionen sols. Només cal mantenir el text sincronitzat. */
  rang.addEventListener('input', function () {
    usuariHaTriat = true;
    actualitza();
  });
  tipusRadios.forEach(function (r) {
    r.addEventListener('change', function () {
      usuariHaTriat = true;
      actualitza();
    });
  });

  /* El nombre de comensals també es pot escriure a mà al formulari,
     sense passar pel cercador: el desplegable ha de reaccionar igual. */
  if (campComensals) {
    campComensals.addEventListener('input', actualitzaSelectSala);
  }

  /* Aquestes frases les escriu el JS, i per tant el motor de traducció
     no les pot tocar: quan algú canvia d'idioma, les hem de tornar a
     dir nosaltres. */
  document.addEventListener('idioma-canviat', function () {
    actualitza();
    actualitzaSelectSala();
  });

  /* Primera passada: pinta el resultat i l'estat dels salons, deixa el
     formulari en blanc i el desplegable de saló bloquejat. */
  actualitza();
  actualitzaSelectSala();
})();
