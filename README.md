# Restaurant La Masia — web

Web estàtica per al Restaurant La Masia (carrer de la Torregassa, 77 — L'Ametlla del
Vallès). **Sense build ni dependències**: s'obre fent doble clic a `index.html`.

> ⚠️ **Aquesta versió és una maqueta.** Les fotografies són seves però de poca
> resolució (tretes del seu web actual), tres són d'stock, i els formularis no
> envien res enlloc. Vegeu «Què falta per publicar» al final.

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

### La identitat visual és la SEVA

Aquesta web **no canvia la marca de La Masia**: hereta els colors i la tipografia de
`lamasiarestaurant.com`. El que aporta és què ofereix la web i com ho ofereix.

**Tipografia**

- Titulars: **Petit Formal Script**. La seva web fa servir Lucida Calligraphy,
  que és una lletra **del sistema**: als mòbils (iOS i Android no la porten) queia
  a una serif qualsevol i es perdia el caràcter de la casa. Petit Formal Script és
  la que més s'hi assembla d'entre les webfonts, comparant-les una per una, i es
  veu igual a tot arreu. Els títols hi van **sencers**: no es barreja rodona i
  cursiva dins d'un mateix titular.
- Cos i textos petits: **Lato**. La seva web fa servir Arial, que no és una
  decisió de marca sinó el valor per defecte.
- El cos passa de 12 px a 17 px, per llegibilitat.

> ⚠️ **La cal·ligràfica és fina: no la useu per sota d'uns 22 px.** El menú, les
> preguntes freqüents, els títols del peu i les ressenyes van amb Lato justament
> per això. La regla és una i està al full d'estil, sota `h1, h2, h3, h4`.

**Colors** — tots a `css/styles.css`, al bloc `:root`, amb l'origen anotat al costat:

| Color | D'on surt |
|---|---|
| `#FF4F00` | el taronja de les bandes del seu tema (`bg_web.png`) |
| `#FF6D09` | el taronja del seu logotip |
| `#C43D00` | **derivat**: el seu taronja no passa AA sobre blanc, aquesta és la variant per a text |
| `#303030` · `#282828` · `#434343` · `#414141` | els seus grisos de fons i capçalera |
| `#1C1C1C` · `#666666` · `#A3A3A3` | els seus colors de text |

Dues regles que no es poden saltar:

- El taronja `#FF4F00` **mai** fa de text sobre blanc (3,3:1). Allà s'usa `#C43D00`.
- Sobre fons taronja, el text sempre és fosc (`#1C1C1C`, 5,2:1). Mai blanc.

### Els textos

Són directament dins de cada `.html`. Estan en català.

### Les fotografies

Totes són a `assets/` i es diuen `photo-*.jpg`. Cada una porta a sobre un comentari
que diu **d'on surt**: `FOTO DEL RESTAURANT` (seva) o `FOTO REAL PENDENT` (stock,
per substituir). Per canviar-ne una: deseu la nova amb el mateix nom i les mateixes
proporcions. Detall complet a «Les fotografies», més avall.

### El telèfon i l'adreça

Cerqueu `938430002` i `Torregassa` a tots els `.html`.

### El mapa

Els mapes fan servir una consulta d'adreça, no coordenades:
`https://maps.google.com/maps?q=ADREÇA&output=embed`. Si canvia l'adreça, canvieu el
text de la consulta i prou.

---

## Les fotografies

**11 de les 14 són del restaurant**: baixades del seu web actual i retallades al
format que toca. Són el seu local, els seus salons i els seus plats de debò.

**3 són d'stock** (Pexels, lliures d'ús) perquè d'aquells plats no en tenien cap.
Totes tres estan marcades al codi amb `<!-- FOTO REAL PENDENT: … -->`:

| Fitxer | Què hi ha ara | Què hi ha d'anar |
|---|---|---|
| `photo-plat-roca.jpg` | Stock: filet amb bolets | El seu filet de vedella a l'estil Roca |
| `photo-plat-canelons.jpg` | Stock: canelons gratinats | Els seus canelons de l'àvia |
| `photo-galeria-3.jpg` | Stock: menjar per emportar | Una comanda per emportar de la casa |

> Cerqueu `FOTO REAL PENDENT` al projecte per trobar-les. Les seves porten
> `FOTO DEL RESTAURANT` amb la nota corresponent.

### Què convé demanar-los

Les seves fotos són **de poca resolució** (venen d'un web de fa deu anys) i
algunes no sabem del cert de quina sala són:

| Fitxer | Mida actual | Què cal |
|---|---|---|
| `photo-hero.jpg` | prové d'una de 1200×800 | **La més important.** L'original a més resolució. Millor encara: una de la façana al capvespre amb els llums encesos |
| `photo-contacte-hero.jpg` | prové d'una de 960×295 | La de pitjor qualitat de totes. Substituir |
| `photo-sala-nou.jpg` · `photo-sala-menjador.jpg` · `photo-sala-bosc.jpg` · `photo-sala-privat.jpg` | 1200×900 | **Confirmar quina sala és cadascuna.** S'han assignat pel que sembla a la foto, no perquè ho sapiguem |
| La resta | 1000–1800 px | Els originals, si els tenen |

### Si fan sessió de fotos

Per ordre de rendiment: **façana al capvespre**, **Saló Nou muntat per a un
banquet**, i els **tres plats** de la pàgina d'inici. Amb aquestes cinc, la web
ja fa un salt gros.

Format: JPG horitzontal, mínim 1800 px d'ample (les verticals, 1100×1300).
Sense text ni marca d'aigua a sobre.

## El menú del dia

Surt **a dins de la web**, a `carta.html` (secció «El menú del dia»), no en un
enllaç a Instagram. Això és el que buscarà la gent del poble a Google.

- Les dades: `data/menu-diari.json`
- Qui el pinta: `js/menu-diari.js`

### Com s'actualitza

Editeu `data/menu-diari.json` i afegiu-hi un bloc per dia:

```json
{
  "data": "2026-09-15",
  "primers": ["Escudella", "Amanida de temporada"],
  "segons": ["Fricandó", "Lluç al forn"],
  "postres": ["Crema catalana"]
}
```

La web agafa sola el dia d'avui. Si avui no n'hi ha cap, ensenya **el següent**
que trobi. Si no n'hi ha cap de futur, ensenya un text convidant a trucar —
mai una caixa buida.

El **preu** és el camp `preu` de dalt del fitxer: si es deixa a `null`, no en
surt cap. Igual amb `inclou` i `quan`.

> ⚠️ Ara mateix el fitxer porta **`"mostra": true`** i menús d'exemple, i la web
> ho avisa amb un distintiu taronja. Quan hi poseu els menús de debò, poseu-ho a
> `false` i el distintiu desapareix.

### Quan es decideixi el canal definitiu

Tot està preparat perquè només s'hagi de tocar **una línia**. A dalt de
`js/menu-diari.js` hi ha la constant `FONT` i tres opcions ja escrites:

| Canal | Qui l'actualitza | Què cal fer |
|---|---|---|
| **A · Fitxer del projecte** *(actiu)* | Nosaltres | Res, ja funciona |
| **B · Full de càlcul de Google** | El restaurant, ell sol | Publicar el full com a CSV, posar l'URL a `FULL_CALCUL` i canviar `FONT` a `fontFullDeCalcul` |
| **C · Un altre sistema** | Segons el cas | Que respongui amb la mateixa estructura del JSON |

Per a la B, el full ha de tenir aquestes columnes, amb els plats separats per `;`:

| data | primers | segons | postres |
|---|---|---|---|
| 2026-09-15 | Escudella; Amanida | Fricandó; Lluç al forn | Crema catalana |

**Instagram no és una opció automàtica.** Per llegir-ne les publicacions cal un
compte de negoci, una app de Meta i un testimoni que caduca cada 60 dies. Per a
un restaurant no compensa el manteniment: el full de càlcul fa la mateixa feina
sense dependre de ningú. Instagram es manté com a enllaç secundari.

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

- [ ] Substituir les 3 fotos d'stock per fotos de la casa (`FOTO REAL PENDENT`)
- [ ] Demanar-los els originals a més resolució, sobretot el de la façana
- [ ] Confirmar quina sala és cadascuna de les quatre fotos de salons
- [ ] Confirmar amb la casa què vol dir l'espiga barrada de la carta
      (cerqueu `PENDENT-CLIENT` a `carta.html`)
- [x] ~~Ressenyes reals a l'inici~~ — fetes: tres del seu perfil de Google
      (1/08/2026), amb nom i valoració. Text literal, sense retocar
- [ ] Dades fiscals als tres legals (cerqueu `[RAÓ SOCIAL]` i `[DATA DE PUBLICACIÓ]`)
- [ ] ID de Formspree als dos formularis (cerqueu `XXXXXXXX`)
- [ ] Place ID i clau de Google al workflow de ressenyes
- [ ] Un logotip en vector, i decidir si se'n fa una versió que digui
      «des del 1957» en comptes de «Desde 1957»
- [ ] *(Opcional)* Si volen la seva Lucida Calligraphy exacta a tot arreu, cal
      comprar-ne la llicència web. Ara s'usa Petit Formal Script, que s'hi
      assembla molt i no costa res
- [ ] **Esborrar `robots.txt`** en publicar al domini real, o la web no
      s'indexarà mai

---

## Compatibilitat

Chrome, Firefox, Safari i Edge actuals. Provat a 375, 768 i 1440 px d'amplada.
Respecta `prefers-reduced-motion`: amb el moviment reduït activat, no hi ha cap
animació. Contrast AA verificat a totes les combinacions de color.
