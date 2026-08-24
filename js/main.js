/* ═══════════════════════════════════════════════════════════════
   main.js — Restaurant La Masia
   Comú a totes les pàgines. Sense dependències externes.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var reduccioMoviment = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Drecera cap al traductor ─────────────────────────────────
     Tot el text que aquest fitxer escriu a la pàgina hi passa. Si
     js/i18n.js no s'hagués carregat, torna el català, que és el que
     hi ha escrit aquí: res no depèn que la traducció existeixi.   */

  function T(text, valors) {
    if (window.I18N) return window.I18N.t(text, valors);
    return valors
      ? text.replace(/\{(\w+)\}/g, function (tot, nom) {
          return valors[nom] != null ? valors[nom] : tot;
        })
      : text;
  }

  var TEL_ENLLAC = '<a href="tel:+34938430002">938 43 00 02</a>';

  /* ── 1. Nav: transparent només mentre siguem damunt del hero ──
     El CSS la deixa opaca per defecte. Aquí la fem transparent i deixem
     que l'observador la torni a omplir en sortir del hero. Si res d'això
     s'executa, la barra es queda opaca i llegible.                     */

  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero, .cap-pagina');

  if (nav && hero && !nav.classList.contains('sempre-solid') &&
      'IntersectionObserver' in window) {
    nav.classList.add('transparent');

    new IntersectionObserver(function (entrades) {
      nav.classList.toggle('transparent', entrades[0].isIntersecting);
    }, { threshold: 0.12 }).observe(hero);
  }

  /* ── 2. Menú mòbil (aria-expanded sincronitzat de debò) ─────── */

  var boto = document.querySelector('.nav-boto-menu');
  var menu = document.querySelector('.menu-mobil');

  if (boto && menu) {
    var obreTanca = function (obert) {
      boto.setAttribute('aria-expanded', String(obert));
      menu.classList.toggle('obert', obert);
      document.body.style.overflow = obert ? 'hidden' : '';
    };

    boto.addEventListener('click', function () {
      obreTanca(boto.getAttribute('aria-expanded') !== 'true');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { obreTanca(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && boto.getAttribute('aria-expanded') === 'true') {
        obreTanca(false);
        boto.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (boto.getAttribute('aria-expanded') !== 'true') return;
      if (!menu.contains(e.target) && !boto.contains(e.target)) obreTanca(false);
    });
  }

  /* ── 3. Revelacions d'un sol tret ───────────────────────────── */

  var revelables = document.querySelectorAll('.apareix');

  /* El contingut és visible per defecte al CSS. Només s'activa el joc
     d'amagar-i-revelar si de debò el podem completar: cal
     IntersectionObserver i que l'usuari no hagi demanat moviment reduït.
     Si aquí no hi entrem, la web es veu sencera i prou. */
  if (revelables.length && !reduccioMoviment && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-anim');

    var obs = new IntersectionObserver(function (entrades) {
      entrades.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('vist');   // once: mai es torna a amagar
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revelables.forEach(function (el) { obs.observe(el); });
  }

  /* ── 3 bis. Enllaços interns ────────────────────────────────
     Es fa a mà i no amb `scroll-behavior: smooth` perquè hi ha
     configuracions de navegador on la propietat CSS no fa res i deixa
     tots els enllaços d'àncora morts. Aquí el moviment és determinista,
     descompta l'alçada de la barra fixa i mou el focus (teclat i lectors
     de pantalla han de saber on han anat a parar).                     */

  (function enllacosInterns() {
    var navFix = document.querySelector('.nav');

    var vesA = function (desti) {
      var marge = (navFix ? navFix.offsetHeight : 0) + 16;
      var final = Math.max(0, desti.getBoundingClientRect().top + window.pageYOffset - marge);

      if (reduccioMoviment || !window.requestAnimationFrame) {
        window.scrollTo(0, final);
      } else {
        var inici = window.pageYOffset;
        var salt = final - inici;
        var durada = Math.min(700, Math.max(280, Math.abs(salt) * 0.45));
        var t0 = null;
        var acabat = false;

        window.requestAnimationFrame(function pas(ara) {
          if (t0 === null) t0 = ara;
          var p = Math.min((ara - t0) / durada, 1);
          var e = p < 0.5 ? 4 * p * p * p             /* easeInOutCubic */
                          : 1 - Math.pow(-2 * p + 2, 3) / 2;
          window.scrollTo(0, inici + salt * e);
          if (p < 1) { window.requestAnimationFrame(pas); } else { acabat = true; }
        });

        /* Xarxa de seguretat: si la pestanya passa a segon pla, el navegador
           deixa de servir fotogrames i l'animació es queda a mitges. En tornar,
           l'usuari ha d'acabar al lloc on va clicar igualment. */
        window.setTimeout(function () {
          if (!acabat) window.scrollTo(0, final);
        }, durada + 250);
      }

      /* Focus al destí sense tornar a saltar-hi */
      if (!desti.hasAttribute('tabindex')) desti.setAttribute('tabindex', '-1');
      desti.focus({ preventScroll: true });
    };

    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;

      var id = a.getAttribute('href');
      if (!id || id === '#') return;

      var desti;
      try { desti = document.querySelector(id); } catch (err) { return; }
      if (!desti) return;

      e.preventDefault();
      vesA(desti);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', id);
      }
    });
  })();

  /* ── 4. Valoració de Google des de data/reviews.json ─────────
     El workflow de GitHub Actions actualitza el fitxer 2 cops al dia.
     Si el fetch falla — o s'obre en local amb file:// — queden els
     valors de `data-valoracio-cru`, que són els de la prospecció.

     ⚠️ ELS SEPARADORS CANVIEN AMB L'IDIOMA. «1.931» en anglès no vol
     dir mil nou-cents trenta-un: vol dir 1,931. I «4,4» s'hi escriu
     «4.4». Per això a l'HTML hi ha el número cru a més del que es
     veu, i aquí es formata sempre segons l'idioma que toqui.      */

  (function carregaValoracio() {
    var objectius = document.querySelectorAll('[data-valoracio]');
    if (!objectius.length) return;

    var lloc = function () { return window.I18N ? window.I18N.bcp : 'ca-ES'; };

    function pinta() {
      objectius.forEach(function (el) {
        var cru = parseFloat(el.getAttribute('data-valoracio-cru'));
        if (isNaN(cru)) return;

        el.textContent = el.dataset.valoracio === 'nota'
          ? cru.toLocaleString(lloc(), { minimumFractionDigits: cru % 1 ? 1 : 0 })
          : cru.toLocaleString(lloc());
      });
    }

    document.addEventListener('idioma-canviat', pinta);
    pinta();

    if (window.location.protocol === 'file:') return;

    fetch('data/reviews.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.rating !== 'number' || typeof d.count !== 'number') return;
        objectius.forEach(function (el) {
          el.setAttribute('data-valoracio-cru',
            el.dataset.valoracio === 'nota' ? d.rating : d.count);
        });
        pinta();
      })
      .catch(function () { /* fallback silenciós: els valors de l'HTML */ });
  })();

  /* ── 5. Formularis: validació amb labels reals i missatges ──── */

  document.querySelectorAll('form[data-validar]').forEach(function (form) {
    var ok = form.parentNode.querySelector('.form-ok');

    var mostraError = function (camp, missatge) {
      var contenidor = camp.closest('.camp');
      contenidor.classList.add('te-error');
      camp.setAttribute('aria-invalid', 'true');
      var span = contenidor.querySelector('.camp-error');
      if (!span) {
        span = document.createElement('span');
        span.className = 'camp-error';
        span.id = camp.id + '-error';
        contenidor.appendChild(span);
      }
      span.textContent = missatge;
      camp.setAttribute('aria-describedby', span.id);
    };

    var netejaError = function (camp) {
      var contenidor = camp.closest('.camp');
      contenidor.classList.remove('te-error');
      camp.removeAttribute('aria-invalid');
      camp.removeAttribute('aria-describedby');
      var span = contenidor.querySelector('.camp-error');
      if (span) span.remove();
    };

    form.querySelectorAll('[required]').forEach(function (camp) {
      camp.addEventListener('input', function () { netejaError(camp); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var primerFallat = null;
      form.querySelectorAll('[required]').forEach(function (camp) {
        netejaError(camp);
        var buit = !camp.value.trim();
        var correuDolent = camp.type === 'email' && camp.value &&
                           !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(camp.value);
        if (buit || correuDolent) {
          mostraError(camp, buit ? T('Aquest camp és obligatori')
                                 : T("Reviseu l'adreça de correu"));
          if (!primerFallat) primerFallat = camp;
        }
      });

      if (primerFallat) { primerFallat.focus(); return; }

      var enviar = form.querySelector('[type="submit"]');
      var textOriginal = enviar.textContent;

      /* ⚠️ SEGURETAT: mentre l'action encara porti el marcador XXXXXXXX, el
         formulari NO pot dir "rebut". Si ho digués, un client ompliria la
         petició de pressupost, veuria que tot ha anat bé i el restaurant no
         rebria res mai. Val més avisar que enganyar. */
      if (/XXXXXXXX/.test(form.getAttribute('action') || '')) {
        mostraAvisDeMaqueta(form);
        return;
      }

      enviar.disabled = true;
      enviar.textContent = T('Enviant…');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (r) {
          if (!r.ok) throw new Error('El servidor ha respost ' + r.status);
          form.hidden = true;
          if (ok) {
            ok.classList.add('visible');
            ok.setAttribute('tabindex', '-1');
            ok.focus();
          }
        })
        .catch(function (err) {
          enviar.disabled = false;
          enviar.textContent = textOriginal;
          mostraFallada(form, err);
        });
    });
  });

  /* Quan l'enviament falla, l'usuari ha de poder resoldre-ho igualment:
     se li dona el telèfon, que és el canal que sempre funciona. */
  function mostraFallada(form, err) {
    var n = form.querySelector('.form-avis');
    if (!n) {
      n = document.createElement('p');
      n.className = 'form-avis';
      n.setAttribute('role', 'alert');
      form.insertBefore(n, form.querySelector('.grup-botons'));
    }
    n.innerHTML = T('No hem pogut enviar el formulari. Torneu-ho a provar o ' +
                    'truqueu-nos al {tel}.', { tel: TEL_ENLLAC });
    if (window.console) window.console.warn('[formulari]', err && err.message);
  }

  function mostraAvisDeMaqueta(form) {
    var n = form.querySelector('.form-avis');
    if (!n) {
      n = document.createElement('p');
      n.className = 'form-avis';
      n.setAttribute('role', 'alert');
      form.insertBefore(n, form.querySelector('.grup-botons'));
    }
    n.innerHTML = T('<strong>Maqueta:</strong> aquest formulari encara no està ' +
                    "connectat i no s'enviaria enlloc. Cal posar l'identificador " +
                    "de Formspree a l'<code>action</code>. Mentrestant, el telèfon " +
                    'de la casa és el {tel}.', { tel: TEL_ENLLAC });
    n.scrollIntoView({ block: 'nearest' });
    if (window.console) {
      window.console.warn('[formulari] action sense configurar: ' +
                          form.getAttribute('action'));
    }
  }

  /* ── 6. Any actual al peu ───────────────────────────────────── */

  document.querySelectorAll('[data-any]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ── 7. El botó flotant s'aparta mentre es baixa ─────────────
     Un botó fix sempre tapa alguna cosa: al mòbil li queia damunt dels
     titulars. S'amaga quan es baixa —que és quan s'està llegint— i
     torna quan es puja, que és quan s'està buscant on prémer.

     Millora progressiva: tot això només posa i treu una classe. Si
     aquest bloc no s'executa, el botó es queda visible sempre, que és
     com estava.                                                    */

  (function botoFlotant() {
    var boto = document.querySelector('.truca-flotant');
    if (!boto) return;

    /* Per sota d'aquesta alçada no s'amaga mai. Amagar-lo als primers
       píxels es llegiria com un parpelleig, i just a dalt és on la gent
       encara no ha decidit res. */
    var DES_DE   = 220;
    /* Els dits fan micro-moviments en llegir; sense marge, el botó
       aniria i vindria tota l'estona. */
    var LLINDAR  = 8;

    var ultim = window.pageYOffset;
    var demanat = false;

    function mira() {
      demanat = false;
      var ara = window.pageYOffset;
      var salt = ara - ultim;

      if (Math.abs(salt) < LLINDAR) return;
      ultim = ara;

      boto.classList.toggle('amagat', salt > 0 && ara > DES_DE);
    }

    /* `passive: true`: aquest oient no atura mai el desplaçament, i
       dir-ho deixa que el navegador no l'hagi d'esperar.
       El `requestAnimationFrame` fa que la feina es faci un cop per
       fotograma i no a cada esdeveniment, que en són desenes. */
    window.addEventListener('scroll', function () {
      if (demanat) return;
      demanat = true;
      window.requestAnimationFrame(mira);
    }, { passive: true });

    /* Si s'hi arriba amb el tabulador mentre és fora, ha de tornar:
       el CSS ja el mostra amb :focus-visible, però convé que l'estat
       quedi net perquè el següent desplaçament no el faci saltar. */
    boto.addEventListener('focus', function () {
      boto.classList.remove('amagat');
      ultim = window.pageYOffset;
    });
  })();
})();
