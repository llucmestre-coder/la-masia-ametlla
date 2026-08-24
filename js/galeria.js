/* ═══════════════════════════════════════════════════════════════
   galeria.js — la galeria de la-casa.html

   MILLORA PROGRESSIVA. A l'HTML la galeria ja és una graella de
   <figure> amb la fotografia i el seu peu: es veu i s'entén sense
   res d'això. El que hi afegeix aquest fitxer és poder-la obrir
   gran, que al mòbil és on de debò fa falta —una foto de 160 px
   d'ample no ensenya una sala.

   Si aquest fitxer no s'executa, no hi falta res: les figures no
   són enllaços a enlloc i no queda cap botó mort a la pàgina.

   IDIOMES: les úniques frases que escriu (les etiquetes dels
   controls) passen per T(), com a la resta de la casa.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var caixa = document.querySelector('[data-galeria]');
  if (!caixa) return;

  /* <dialog> és el que toca aquí: el navegador ja se n'encarrega de
     tancar amb Escape, del fons inert i de tornar el focus on era.
     Si el navegador no el porta, no muntem res i la graella es queda
     com és. */
  if (typeof window.HTMLDialogElement === 'undefined') return;

  function T(text) {
    return window.I18N ? window.I18N.t(text) : text;
  }

  var figures = Array.prototype.slice.call(caixa.querySelectorAll('figure'));
  if (!figures.length) return;

  /* ── El visor ────────────────────────────────────────────────── */

  var visor = document.createElement('dialog');
  visor.className = 'visor';
  visor.innerHTML =
    '<div class="visor-cos">' +
      '<img alt="">' +
      '<p class="visor-peu"></p>' +
    '</div>' +
    '<button type="button" class="visor-boto visor-tanca"></button>' +
    '<button type="button" class="visor-boto visor-anterior"></button>' +
    '<button type="button" class="visor-boto visor-seguent"></button>' +
    '<p class="visor-compte" aria-live="polite"></p>';
  document.body.appendChild(visor);

  var imatge   = visor.querySelector('img');
  var peu      = visor.querySelector('.visor-peu');
  var compte   = visor.querySelector('.visor-compte');
  var btTanca  = visor.querySelector('.visor-tanca');
  var btAnt    = visor.querySelector('.visor-anterior');
  var btSeg    = visor.querySelector('.visor-seguent');

  var actual = 0;

  /* Les fletxes i la creu es dibuixen amb text perquè no calgui cap
     fitxer ni cap tipografia d'icones. El que llegeix un lector de
     pantalla és l'aria-label, no el símbol. */
  btTanca.textContent = '×';
  btAnt.textContent   = '‹';
  btSeg.textContent   = '›';

  function etiqueta() {
    btTanca.setAttribute('aria-label', T('Tancar la fotografia'));
    btAnt.setAttribute('aria-label', T('Fotografia anterior'));
    btSeg.setAttribute('aria-label', T('Fotografia següent'));
    visor.setAttribute('aria-label', T('Galeria de fotografies'));
  }
  etiqueta();
  document.addEventListener('idioma-canviat', function () {
    etiqueta();
    if (visor.open) mostra(actual);
  });

  function mostra(i) {
    actual = (i + figures.length) % figures.length;

    var orig = figures[actual].querySelector('img');
    var text = figures[actual].querySelector('figcaption');

    imatge.src = orig.currentSrc || orig.src;
    /* L'alt de la miniatura ja està traduït per i18n.js: es copia tal
       com es veu ara, no es torna a buscar al diccionari. */
    imatge.alt = orig.alt;
    peu.textContent = text ? text.textContent : '';

    compte.textContent = (actual + 1) + ' / ' + figures.length;
  }

  function obre(i) {
    mostra(i);
    visor.showModal();
    /* El cos no s'ha de poder desplaçar per darrere del visor. */
    document.body.style.overflow = 'hidden';
    btTanca.focus();
  }

  visor.addEventListener('close', function () {
    document.body.style.overflow = '';
    /* Torna el focus a la fotografia que s'estava mirant, no a la que
       es va prémer: si s'ha passat de llarg amb les fletxes, l'usuari
       de teclat ha de reprendre allà on és. */
    var boto = figures[actual].querySelector('button');
    if (boto) boto.focus();
  });

  btTanca.addEventListener('click', function () { visor.close(); });
  btAnt.addEventListener('click', function () { mostra(actual - 1); });
  btSeg.addEventListener('click', function () { mostra(actual + 1); });

  visor.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); mostra(actual - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); mostra(actual + 1); }
  });

  /* Prémer el fons tanca. `visor` és tot el rectangle de la pantalla i
     `.visor-cos` és la fotografia: si el que s'ha premut és el diàleg
     mateix, s'ha premut fora. */
  visor.addEventListener('click', function (e) {
    if (e.target === visor) visor.close();
  });

  /* ── Fer que cada figura s'hi pugui prémer ───────────────────
     La fotografia s'embolica amb un <button>, no amb un <a>: no porta
     enlloc, obre una cosa a la mateixa pàgina. Un enllaç aquí seria
     mentir sobre què passarà en prémer-lo. */

  figures.forEach(function (fig, i) {
    var img = fig.querySelector('img');
    if (!img) return;

    var boto = document.createElement('button');
    boto.type = 'button';
    boto.className = 'galeria-boto';
    img.parentNode.insertBefore(boto, img);
    boto.appendChild(img);

    boto.addEventListener('click', function () { obre(i); });
  });

  caixa.classList.add('galeria-amb-visor');
})();
