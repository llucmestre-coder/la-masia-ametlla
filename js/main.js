/* ═══════════════════════════════════════════════════════════════
   main.js — Restaurant La Masia
   Comú a totes les pàgines. Sense dependències externes.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var reduccioMoviment = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
     valors escrits a l'HTML, que són els de la prospecció.         */

  (function carregaValoracio() {
    var objectius = document.querySelectorAll('[data-valoracio]');
    if (!objectius.length || window.location.protocol === 'file:') return;

    fetch('data/reviews.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.rating !== 'number' || typeof d.count !== 'number') return;
        var nota = Number.isInteger(d.rating) ? String(d.rating) : d.rating.toFixed(1);
        objectius.forEach(function (el) {
          if (el.dataset.valoracio === 'nota') el.textContent = nota.replace('.', ',');
          if (el.dataset.valoracio === 'total') el.textContent = d.count.toLocaleString('ca-ES');
        });
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
          mostraError(camp, buit ? 'Aquest camp és obligatori'
                                 : 'Reviseu l’adreça de correu');
          if (!primerFallat) primerFallat = camp;
        }
      });

      if (primerFallat) { primerFallat.focus(); return; }

      /* MAQUETA — no s'envia res enlloc.
         Per activar-lo de debò: doneu d'alta el formulari a formspree.io,
         poseu action="https://formspree.io/f/XXXXXXXX" a l'HTML i
         substituïu aquest bloc per:
           fetch(form.action, { method: 'POST', body: new FormData(form),
                                headers: { Accept: 'application/json' } })
             .then(function () { form.hidden = true; if (ok) ok.classList.add('visible'); }); */
      var enviar = form.querySelector('[type="submit"]');
      enviar.disabled = true;
      enviar.textContent = 'Enviant…';

      window.setTimeout(function () {
        form.hidden = true;
        if (ok) {
          ok.classList.add('visible');
          ok.setAttribute('tabindex', '-1');
          ok.focus();
        }
      }, 600);
    });
  });

  /* ── 6. Any actual al peu ───────────────────────────────────── */

  document.querySelectorAll('[data-any]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
