/* ═══════════════════════════════════════════════════════════════
   menu-diari.js — El menú del dia, A DINS de la web

   Fins ara el menú diari només vivia a Instagram: qui el buscava a
   Google no el trobava. Això el porta a la pàgina.

   ┌─────────────────────────────────────────────────────────────┐
   │  D'ON SURTEN LES DADES — CANVIAR NOMÉS AQUÍ                  │
   │                                                             │
   │  Hi ha tres maneres preparades. Ara mateix està activa la A. │
   │  Per canviar de canal: comenteu la línia de FONT i           │
   │  descomenteu la que toqui. No cal tocar res més del fitxer.  │
   └─────────────────────────────────────────────────────────────┘

   A) FITXER DEL PROJECTE  ·  data/menu-diari.json      ← ACTIVA
      Qui l'actualitza edita el JSON i puja el canvi.
      Bo si ho portem nosaltres. Dolent si ho ha de fer el restaurant.

   B) FULL DE CÀLCUL DE GOOGLE  ·  el més pràctic per al restaurant
      Fan el menú en un full de Google i la web el llegeix sol.
      Passos: Fitxer → Comparteix → Publica al web → CSV.
      Columnes: data | primers | segons | postres  (plats separats per ";")
      Després poseu l'URL a FULL_CALCUL i activeu la font B.

   C) UN ALTRE SISTEMA  ·  qualsevol cosa que retorni el mateix JSON
      Si un dia hi ha un gestor de continguts o una API, només cal que
      respongui amb l'estructura de data/menu-diari.json.

   ⚠️ INSTAGRAM NO ÉS UNA OPCIÓ AUTOMÀTICA. Per llegir-ne les
   publicacions cal un compte de negoci, una app de Meta i un testimoni
   que caduca cada 60 dies. Per a un restaurant no compensa: surt més a
   compte el full de càlcul. Queda documentat al README.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var caixa = document.getElementById('menu-diari');
  if (!caixa) return;

  var TELEFON = '938 43 00 02';
  var FULL_CALCUL = '';   // ← URL del CSV publicat, si s'activa la font B

  /* ── Fonts de dades ─────────────────────────────────────────── */

  function fontFitxer() {
    return fetch('data/menu-diari.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('menu-diari.json: ' + r.status);
        return r.json();
      });
  }

  function fontFullDeCalcul() {
    if (!FULL_CALCUL) return Promise.reject(new Error("Falta l'URL del full"));
    return fetch(FULL_CALCUL, { cache: 'no-cache' })
      .then(function (r) { return r.text(); })
      .then(function (csv) {
        var files = csv.trim().split(/\r?\n/).slice(1);   // fora la capçalera
        var trosseja = function (fila) {
          /* Camps entre cometes amb comes a dins: cal partir amb cura */
          var camps = [], actual = '', dins = false, i;
          for (i = 0; i < fila.length; i++) {
            var c = fila[i];
            if (c === '"') { dins = !dins; continue; }
            if (c === ',' && !dins) { camps.push(actual); actual = ''; continue; }
            actual += c;
          }
          camps.push(actual);
          return camps;
        };
        var llista = function (s) {
          return (s || '').split(';')
            .map(function (x) { return x.trim(); })
            .filter(Boolean);
        };
        return {
          mostra: false,
          dies: files.map(trosseja).filter(function (c) { return c[0]; })
            .map(function (c) {
              return {
                data: c[0].trim(),
                primers: llista(c[1]),
                segons: llista(c[2]),
                postres: llista(c[3])
              };
            })
        };
      });
  }

  /* ← LA LÍNIA QUE ES CANVIA PER TRIAR EL CANAL */
  var FONT = fontFitxer;
  /* var FONT = fontFullDeCalcul; */

  /* ── Utilitats ──────────────────────────────────────────────── */

  var DIES = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous',
              'divendres', 'dissabte'];
  var MESOS = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol',
               'agost', 'setembre', 'octubre', 'novembre', 'desembre'];

  function avuiISO() {
    var d = new Date();
    return d.getFullYear() + '-' +
           String(d.getMonth() + 1).padStart(2, '0') + '-' +
           String(d.getDate()).padStart(2, '0');
  }

  function enLletres(iso) {
    var t = iso.split('-');
    var d = new Date(Number(t[0]), Number(t[1]) - 1, Number(t[2]));
    var mes = MESOS[d.getMonth()];
    /* Apostrofació: d'abril, d'agost, d'octubre — no "de abril" */
    var de = /^[aeiouàèéíòóú]/i.test(mes) ? "d'" : 'de ';
    return DIES[d.getDay()] + ' ' + d.getDate() + ' ' + de + mes;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function grup(titol, plats) {
    if (!plats || !plats.length) return '';
    return '<div class="menu-grup"><h3>' + esc(titol) + '</h3><ul>' +
      plats.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') +
      '</ul></div>';
  }

  /* ── Pintat ─────────────────────────────────────────────────── */

  function senseMenu(missatge) {
    caixa.innerHTML =
      '<div class="menu-buit">' +
        '<p>' + esc(missatge) + '</p>' +
        '<p class="menu-buit-tel">Truqueu-nos al ' +
          '<a href="tel:+34938430002">' + TELEFON + '</a> i us diem què hi ha avui.</p>' +
      '</div>';
  }

  function pinta(dades) {
    var dies = (dades.dies || []).slice().sort(function (a, b) {
      return a.data < b.data ? -1 : 1;
    });
    if (!dies.length) {
      senseMenu('Encara no hem publicat el menú.');
      return;
    }

    var avui = avuiISO();
    var dia = dies.filter(function (d) { return d.data === avui; })[0];
    var esAvui = Boolean(dia);

    /* Si avui no n'hi ha, ensenyem el següent que vingui */
    if (!dia) dia = dies.filter(function (d) { return d.data > avui; })[0];

    if (!dia) {
      senseMenu("El menú d'aquesta setmana ja ha passat i encara no hem penjat el de la setmana vinent.");
      return;
    }

    var cap = esAvui
      ? '<span class="menu-quan">Avui, ' + esc(enLletres(dia.data)) + '</span>'
      : '<span class="menu-quan">Pròxim menú · ' + esc(enLletres(dia.data)) + '</span>';

    var extres = '';
    if (dades.preu) extres += '<span class="menu-preu">' + esc(dades.preu) + '</span>';
    if (dades.inclou) extres += '<span class="menu-inclou">' + esc(dades.inclou) + '</span>';

    /* "mostra": true vol dir que el que es pinta són menús d'exemple i no els
       de la casa. Abans ho deia a la pàgina, però aquell avís parlava de
       `data/menu-diari.json` i era per a nosaltres, no per a qui obre la web.
       Ara només queda a la consola del navegador. COMPTE: això vol dir que un
       menú d'exemple ja no es distingeix a simple vista d'un de real. Quan hi
       entrin els menús de debò, posar "mostra": false. */
    if (dades.mostra && window.console) {
      window.console.info('[menú diari] Són dades D\'EXEMPLE. Vegeu data/menu-diari.json.');
    }

    caixa.innerHTML =
      '<div class="menu-cap">' + cap + extres + '</div>' +
      '<div class="menu-plats">' +
        grup('Primers', dia.primers) +
        grup('Segons', dia.segons) +
        grup('Postres', dia.postres) +
      '</div>' +
      (dades.quan ? '<p class="menu-nota">' + esc(dades.quan) + '</p>' : '');
  }

  /* ── Engegada ───────────────────────────────────────────────── */

  caixa.setAttribute('aria-busy', 'true');

  FONT()
    .then(pinta)
    .catch(function (err) {
      /* Amb file:// el fetch falla sempre: no és cap error del web */
      if (window.location.protocol === 'file:') {
        senseMenu('El menú del dia es carrega quan la web és en un servidor.');
      } else {
        senseMenu('Ara mateix no podem mostrar el menú del dia.');
      }
      if (window.console) window.console.warn('[menú diari]', err.message);
    })
    .then(function () { caixa.removeAttribute('aria-busy'); });
})();
