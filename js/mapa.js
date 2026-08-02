/* ═══════════════════════════════════════════════════════════════
   EL MAPA, NOMÉS QUAN EL DEMANEN
   ═══════════════════════════════════════════════════════════════

   Un <iframe> de Google Maps dins de l'HTML contacta amb Google i li
   deixa posar galetes al navegador del visitant EN CARREGAR LA PÀGINA.
   Passa abans que ningú hagi pogut dir-hi res, i aquesta web no té cap
   avís de galetes. O es posa l'avís, o el mapa no es carrega sol.

   Aquí es fa la segona: fins que algú no prem el botó, la pàgina no fa
   cap petició a cap servidor de Google. Qui no el premi mai, no en farà
   cap. I qui no vulgui res de Google té l'adreça escrita al costat i
   l'enllaç per obrir Maps a part, que ja hi era.

   SENSE JAVASCRIPT el bloc es queda com és: la foto, l'adreça i un botó
   que no fa res. Per això just a sota hi ha sempre «Obrir a Google Maps»
   com a enllaç normal — aquell funciona sempre.

   Un cop premut, l'iframe es queda. No es torna a amagar: qui l'ha
   demanat ja l'ha demanat.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var blocs = document.querySelectorAll('.mapa-tancat[data-mapa]');
  if (!blocs.length) return;

  function obre(bloc) {
    var url = bloc.getAttribute('data-mapa');
    if (!url) return;

    var marc = document.createElement('iframe');
    marc.src = url;
    marc.title = bloc.getAttribute('data-mapa-titol') || 'Mapa';
    marc.width = '600';
    marc.height = '420';
    marc.loading = 'lazy';
    marc.referrerPolicy = 'no-referrer-when-downgrade';

    bloc.innerHTML = '';
    bloc.appendChild(marc);
    bloc.classList.remove('mapa-tancat');

    /* Qui hi ha arribat amb el teclat ha de saber on ha anat a parar. */
    marc.setAttribute('tabindex', '-1');
    try { marc.focus({ preventScroll: true }); } catch (e) { /* navegadors vells */ }
  }

  for (var i = 0; i < blocs.length; i++) {
    (function (bloc) {
      var boto = bloc.querySelector('.mapa-boto');
      if (!boto) return;
      boto.addEventListener('click', function () { obre(bloc); });
    })(blocs[i]);
  }
})();
