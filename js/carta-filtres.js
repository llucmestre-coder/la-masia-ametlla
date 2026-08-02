/* ═══════════════════════════════════════════════════════════════
   FILTRES DE LA CARTA
   ═══════════════════════════════════════════════════════════════

   Converteix la fila d'apartats de la carta en un filtre: clicar
   "Entrants freds" deixa el requadre marcat i amaga els altres sis
   apartats, en comptes de baixar fins allà.

   MILLORA PROGRESSIVA
   Al HTML els apartats són enllaços d'àncora normals i tots els grups
   de plats es veuen. Si aquest fitxer no s'executa —JS desactivat, un
   error de xarxa, un navegador vell— la pàgina es queda tal com és:
   els 47 plats a la vista i cada enllaç hi baixa. Res no es trenca.
   Només quan aquest codi arrenca de debò s'amaga res.

   COMPTE amb dues coses si algú hi torna a posar mà:

   1. js/main.js escolta els clics de tots els `a[href^="#"]` al
      `document` per fer el desplaçament suau. Aquí s'atura la
      propagació perquè aquell no vegi el clic: si no, filtraria i
      A MÉS baixaria, que és exactament el que no volem.

   2. Els grups porten la classe `.apareix` (es revelen en entrar a
      pantalla). Un grup que s'ensenya amb el filtre potser mai no ha
      estat observat i es quedaria transparent per sempre. Per això
      aquí se'ls marca tots com a ja vistos d'entrada.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var nav = document.getElementById('carta-filtres');
  if (!nav) return;

  var enllacos = nav.querySelectorAll('a[data-grup]');
  var grups    = document.querySelectorAll('.carta-grup');
  if (!enllacos.length || !grups.length) return;

  /* Punt 2 de la capçalera: cap grup no pot dependre ja de l'observador. */
  for (var i = 0; i < grups.length; i++) grups[i].classList.add('vist');

  /* A partir d'aquí el filtre mana. Ho diem al CSS amb una classe al
     <html> perquè els estils del filtre no s'apliquin mai sense JS. */
  document.documentElement.classList.add('js-filtre-carta');

  /* Un sol nom viu de debò: quin apartat s'està mirant. */
  var actiu = 'tots';

  function pinta() {
    var visibles = 0;

    for (var i = 0; i < grups.length; i++) {
      var esVisible = (actiu === 'tots' || grups[i].id === actiu);
      grups[i].hidden = !esVisible;
      if (esVisible) visibles++;
    }

    for (var j = 0; j < enllacos.length; j++) {
      var tria = enllacos[j].dataset.grup === actiu;
      enllacos[j].classList.toggle('es-actiu', tria);
      /* aria-current diu al lector de pantalla quin filtre s'aplica;
         la classe només pinta. */
      if (tria) { enllacos[j].setAttribute('aria-current', 'true'); }
      else      { enllacos[j].removeAttribute('aria-current'); }
    }

    /* Xarxa de seguretat: si per un id mal escrit no quedés res a la
       vista, val més ensenyar-ho tot que deixar la carta en blanc. */
    if (!visibles) {
      actiu = 'tots';
      pinta();
    }
  }

  nav.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-grup]') : null;
    if (!a || !nav.contains(a)) return;

    e.preventDefault();
    e.stopPropagation();            /* punt 1 de la capçalera */

    actiu = a.dataset.grup;
    pinta();

    /* No es mou la pàgina: la gràcia és justament que no es mogui.
       Però si el filtre s'ha premut amb la fila de botons ja fora de
       pantalla —baixant amb el teclat, per exemple— cal tornar-la a
       ensenyar, o sembla que el clic no hagi fet res. */
    var lloc = nav.getBoundingClientRect();
    if (lloc.top < 0 || lloc.bottom > window.innerHeight) {
      nav.scrollIntoView({ block: 'center' });
    }
  });

  pinta();
})();
