# Restaurant La Masia — web

Web estàtica per al Restaurant La Masia (carrer de la Torregassa, 77 — L'Ametlla del
Vallès). **Sense build ni dependències**: s'obre fent doble clic a `index.html`.

> ⚠️ **Aquesta versió és una maqueta.** Totes les fotografies són marcadors de posició
> i el formulari no envia res enlloc. Vegeu «Què falta per publicar» al final.

**Previsualització:** <https://llucmestre-coder.github.io/la-masia-ametlla/>
(bloquejada als cercadors amb `robots.txt` mentre sigui una maqueta).

---

## Què hi ha

| Fitxer | Què és |
|---|---|
| `index.html` | Inici: qui són des del 1957, els dos camins, prova social, on som |
| `carta.html` | La carta sencera (7 apartats, 47 plats), menú diari i per emportar |
| `celebracions.html` | Els 4 salons, el **cercador d'espai** i el formulari de pressupost |
| `contacte.html` | Reserves, horaris, com arribar i preguntes freqüents |
| `avis-legal.html` · `politica-privacitat.html` · `politica-cookies.html` | Legals (`noindex`) |
| `css/styles.css` | Tot l'estil. Els colors i les mides surten dels tokens de `:root` |
| `js/main.js` | Nav, menú mòbil, revelacions, valoració de Google, formularis |
| `js/espais.js` | El cercador d'espai de `celebracions.html` |
| `data/reviews.json` | Valoració de Google (l'actualitza sol el workflow) |
| `PLA.md` | Document intern amb les decisions de disseny (no es publica) |

---

## Com canviar les coses

### Els colors

Tots són a `css/styles.css`, al bloc `:root` de dalt de tot. Canviant-los allà canvia
tota la web. **Cada color està mostrejat d'un píxel real** de la seva carta de 2025 o
del logotip; si en canvieu cap, comproveu el contrast (mínim 4,5:1 per a text).

Dues regles que no es poden saltar:

- El taronja `#FF6D09` només fa de **text** sobre el fons fosc `--nit`. Sobre
  `--olivard` no arriba a AA: allà s'usa l'or `--or`.
- Quan el taronja fa de **fons de botó**, el text a sobre sempre és `--nit`. Mai blanc.

### Els textos

Són directament dins de cada `.html`. Estan en català.

### Les fotografies

Totes són a `assets/` i es diuen `photo-*.jpg`. **Cada una porta a sobre un comentari
`<!-- FOTO REAL PENDENT: ... -->`** que diu exactament quina foto hi va. Per substituir
una foto: guardeu la de debò amb el mateix nom i les mateixes proporcions.

Cerqueu `FOTO REAL PENDENT` a tot el projecte per veure què queda per fer.

### El telèfon i l'adreça

Cerqueu `938430002` i `Torregassa` a tots els `.html`.

### El mapa

Els mapes fan servir una consulta d'adreça, no coordenades:
`https://maps.google.com/maps?q=ADREÇA&output=embed`. Si canvia l'adreça, canvieu el
text de la consulta i prou.

---

## Inventari de fotografies

16 imatges. Format JPG, qualitat alta, sense text ni marca d'aigua a sobre.

| Fitxer | Mida mínima | Orientació | Què hi ha d'anar |
|---|---|---|---|
| `photo-hero.jpg` | 1920×1280 | horitzontal | **La més important.** Façana de la masia al capvespre, amb els llums de dins encesos i el rètol visible. El text va damunt de la meitat esquerra: cal que aquella part no tingui detall important. |
| `photo-carta-hero.jpg` | 1920×900 | horitzontal | Taula parada del menjador, o un detall bonic de sala |
| `photo-celebracions-hero.jpg` | 1920×900 | horitzontal | El Saló Nou muntat per a un banquet, taules vestides |
| `photo-contacte-hero.jpg` | 1920×700 | horitzontal | Entrada i aparcament (ajuda a trobar-los) |
| `photo-casa.jpg` | 1200×1400 | **vertical** | L'edifici de dia, la cuina o l'equip. Si en tenen alguna d'antiga (anys 60-70), aquí hi valdria molt més que una de nova |
| `photo-sala-nou.jpg` | 1200×900 | horitzontal | Saló Nou buit i muntat, angle ampli |
| `photo-sala-menjador.jpg` | 1200×900 | horitzontal | Menjador diari amb taules parades |
| `photo-sala-bosc.jpg` | 1200×900 | horitzontal | Saló Bosc (buscar l'angle que expliqui el nom) |
| `photo-sala-privat.jpg` | 1200×900 | horitzontal | El reservat, amb la taula muntada |
| `photo-plat-roca.jpg` | 1000×750 | horitzontal | Filet de vedella a l'estil Roca |
| `photo-plat-arros.jpg` | 1000×750 | horitzontal | Arrossejat d'escamarlans |
| `photo-plat-canelons.jpg` | 1000×750 | horitzontal | Canelons de l'àvia |
| `photo-galeria-1.jpg` | 1000×750 | horitzontal | Ambient de sala amb gent |
| `photo-galeria-2.jpg` | 1000×1200 | **vertical** | Detall de cuina o de producte |
| `photo-galeria-3.jpg` | 1000×750 | horitzontal | Terrassa o exterior |
| `photo-galeria-4.jpg` | 1000×750 | horitzontal | Una celebració (amb permís dels que hi surten) |

**Prioritat si només se'n poden fer poques:** `photo-hero`, `photo-celebracions-hero`,
`photo-sala-nou` i els tres plats. Amb aquestes sis la web ja es pot ensenyar.

---

## La valoració de Google, automàtica

`data/reviews.json` conté la nota i el nombre de ressenyes. La web els llegeix i, si
el fitxer no es pot llegir, es queda amb els valors escrits a l'HTML (4,4 amb 1.931).

Per actualitzar-los sols dos cops al dia cal, a
`.github/workflows/update-reviews.yml`:

1. Posar el **Place ID** real del negoci a la variable `PLACE_ID`.
2. Desar una clau de Google Cloud amb la Places API activada com a secret
   `GOOGLE_API_KEY` del repositori.

Fins que això no estigui fet, el workflow falla a posta i els números es queden
com estan (que són correctes a data de 31/07/2026).

---

## El formulari

Els dos formularis (consulta i pressupost) estan preparats per a
[Formspree](https://formspree.io) però **ara mateix no envien res**: simulen l'enviament
i ensenyen el missatge d'èxit.

Per activar-los:

1. Doneu d'alta els dos formularis a formspree.io.
2. Substituïu `XXXXXXXX` de l'`action` de cada `<form>` per l'ID real.
3. A `js/main.js`, punt 5, canvieu el bloc del `setTimeout` pel `fetch` que hi ha
   comentat just a sobre.

---

## Què falta per publicar

- [ ] Les 16 fotografies reals (cerqueu `FOTO REAL PENDENT`)
- [ ] Confirmar amb la casa què vol dir l'espiga barrada de la carta
      (cerqueu `PENDENT-CLIENT` a `carta.html`)
- [ ] Dues ressenyes reals més a l'inici (cerqueu `PENDENT-CLIENT` a `index.html`)
- [ ] Dades fiscals als tres legals (cerqueu `[RAÓ SOCIAL]` i `[DATA DE PUBLICACIÓ]`)
- [ ] ID de Formspree als dos formularis (cerqueu `XXXXXXXX`)
- [ ] Place ID i clau de Google al workflow de ressenyes
- [ ] Un logotip en vector, i decidir si se'n fa una versió que digui
      «des del 1957» en comptes de «Desde 1957»
- [ ] **Esborrar `robots.txt`** en publicar al domini real, o la web no
      s'indexarà mai

---

## Compatibilitat

Chrome, Firefox, Safari i Edge actuals. Provat a 375, 768 i 1440 px d'amplada.
Respecta `prefers-reduced-motion`: amb el moviment reduït activat, no hi ha cap
animació. Contrast AA verificat a totes les combinacions de color.
