# Restaurant La Masia — web

Web estàtica per al Restaurant La Masia (carrer de la Torregassa, 77 — L'Ametlla del
Vallès). **Sense build ni dependències**: s'obre fent doble clic a `index.html`.

> ⚠️ **Aquesta versió és una maqueta.** Totes les fotografies són seves, però de
> poca resolució (tretes del seu web actual) i en falten tres de plats. Els
> formularis no envien res enlloc i els legals tenen els camps fiscals buits.
> Vegeu «Què falta per publicar» al final.

**Per ensenyar-la:** <https://la-masia-ametlla.pages.dev>
**Còpia tècnica:** <https://llucmestre-coder.github.io/la-masia-ametlla/>

Totes dues surten d'aquest repo i **es redesplacen soles a cada push a `main`**.

> Cloudflare serveix les URL sense extensió: `/carta.html` fa un salt cap a
> `/carta`. Els enllaços del projecte porten `.html` i funcionen igual.

---

## 🚫 LLEGIU AIXÒ ABANS DE PUBLICAR AL DOMINI REAL

A l'arrel del projecte hi ha un fitxer **`robots.txt`** que diu això:

```
User-agent: *
Disallow: /
```

Traduït: **cap cercador ha d'indexar aquesta web**. Hi és a posta, i ara mateix
ha de continuar-hi. Però **el dia que la web passi a `lamasiarestaurant.com`,
aquest fitxer s'ha d'esborrar** o la web nova no sortirà mai a Google.

És l'error més car de tots perquè **no dona cap senyal**: no peta res, la web es
veu perfecta, simplement no hi arriba ningú. Es pot trigar setmanes a notar-ho.

**Per què hi és ara**

1. Les fotografies encara no són les definitives.
2. I la de pes: totes les pàgines porten `<link rel="canonical">` apuntant a
   `lamasiarestaurant.com`, que **és viva**. Si un cercador indexés aquesta
   còpia, hi hauria **dues webs del mateix restaurant competint** als resultats,
   i la maqueta podria sortir per davant de la seva de debò.

**Quan es pot treure** — quan es donin les tres coses alhora:

- [ ] El client ha dit que sí.
- [ ] Els camps buits estan omplerts (`[RAÓ SOCIAL]`, `[NIF]`, `XXXXXXXX`…).
- [ ] La web va al seu domini, i llavors els canonicals ja apunten a ella mateixa.

Llavors: esborrar `robots.txt`, pujar, i demanar la indexació a Search Console
perquè no trigui setmanes a entrar-hi.

> ℹ️ `robots.txt` **no és seguretat**. És públic —qualsevol el pot llegir a
> `/robots.txt`— i és una petició, no un pany: els robots seriosos l'obeeixen i
> els que rasclen dades, no. Tampoc impedeix que ningú obri l'enllaç: **la web
> es pot ensenyar al client igual, amb el fitxer posat**. Per mantenir una
> pàgina concreta fora de l'índex, el que val és `<meta name="robots"
> content="noindex">` dins de la pàgina; els tres legals ja el porten.

---

## Què hi ha

| Fitxer | Què és |
|---|---|
| `index.html` | Inici: els dos camins, la porta cap a «La casa», prova social, on som |
| `la-casa.html` | **Qui som**, la **galeria** i els **quatre espais** explicats un a un |
| `carta.html` | La carta sencera (7 apartats, 47 plats), menú diari i **per emportar** |
| `celebracions.html` | Els 4 salons, el **cercador d'espai** i el formulari de pressupost |
| `contacte.html` | Reserves, horaris, com arribar i preguntes freqüents |
| `avis-legal.html` · `politica-privacitat.html` · `politica-cookies.html` | Legals (`noindex`) |
| `css/styles.css` | Tot l'estil. Els colors i les mides surten dels tokens de `:root` |
| `js/i18n.js` | El motor de traducció. **És idèntic a totes les webs del vertical** |
| `js/traduccions.js` | El diccionari castellà/anglès d'aquest restaurant |
| `js/main.js` | Nav, menú mòbil, revelacions, valoració de Google, formularis |
| `js/espais.js` | El cercador d'espai de `celebracions.html` |
| `js/galeria.js` | La galeria de `la-casa.html` i el visor a pantalla completa |
| `js/carta-filtres.js` | Els apartats de la carta, que filtren en comptes de baixar-hi |
| `js/menu-diari.js` | El menú del dia de `carta.html` |
| `js/mapa.js` | El mapa, que no es carrega fins que es prem el botó |
| `assets/fonts/` | Les tipografies, allotjades aquí. **No esborreu les llicències** |
| `data/reviews.json` | Valoració de Google (l'actualitza sol el workflow) |
| `data/menu-diari.json` | El menú del dia. **Ara és buit a posta**: vegeu «El menú del dia» |
| `robots.txt` | Bloqueja els cercadors mentre sigui maqueta. **Vegeu el bloc de dalt** |
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
`FOTO DEL RESTAURANT` que diu d'on surt. Per canviar-ne una: deseu la nova amb el
mateix nom i les mateixes proporcions. Detall complet a «Les fotografies», més avall.

### El telèfon i l'adreça

Cerqueu `938430002` i `Torregassa` a tots els `.html`.

### El mapa

**No es carrega sol.** Fins que el visitant no prem «Carregar el mapa», la pàgina
no fa cap petició a Google. És a posta: un iframe de Maps deixa galetes en carregar
la pàgina, i aquesta web no té cap avís de galetes. Ho munta `js/mapa.js` llegint
l'atribut `data-mapa` del bloc.

L'adreça va com a consulta, no com a coordenades. Si canvia, canvieu el text de
dins de `data-mapa` i prou.

### Les tipografies

**S'allotgen aquí** (`assets/fonts/`, sis fitxers, 107 KB). La web no demana res
a Google. Lato i Petit Formal Script són SIL Open Font License: es poden allotjar,
i **les llicències del costat no s'han d'esborrar** — és la condició que posa.

### La icona de la pestanya

És **la seva**: la mateixa fotografia de la façana i el mateix enquadrament que
el favicon de `lamasiarestaurant.com`, però des de l'original en alta.
`favicon.ico` (16/32/48), `favicon.png` (192) i `apple-touch-icon.png` (180).

---

## Les fotografies

**Les 11 que hi ha són totes del restaurant**, baixades del seu web actual i
retallades al format que toca. Són el seu local, els seus salons i els seus
plats de debò. **No queda cap foto d'stock** (2/08/2026).

N'hi havia tres, i es van treure i esborrar. Dues eren enganyoses: la de
«Canelons de l'àvia» ensenyava uns canelons amb salsa de tomàquet quan els de
l'àvia van gratinats amb beixamel —ho diu el text de la targeta mateixa— i
qualsevol de la casa ho hauria vist de seguida.

**El que falta: tres fotos de plats.** Mentre no arribin, el bloc «Tres plats
que ens demanen sempre» de l'inici **va sense cap fotografia, a propòsit**: de
tres només en teníem una de real i amb una targeta amb foto i dues sense el
bloc quedava coix.

| On | Què hi ha d'anar |
|---|---|
| `index.html`, bloc «Tres plats» | El seu **filet de vedella a l'estil Roca** (el que més surt a les seves ressenyes) |
| `index.html`, bloc «Tres plats» | Els seus **canelons de l'àvia** |
| `carta.html`, targeta «Per emportar» | Una **comanda per emportar** de la casa. Ara hi ha la seva paella, que encaixa però no és el que la targeta ven |

> No cal cap sessió de fotos per a això: un plat ben parat, llum de finestra i
> el mòbil. Per tornar-hi les imatges, afegiu un `<img>` de 1000×750 a cada
> targeta i traieu la classe `plats-destacats-text` del contenidor.

> Cerqueu `FOTO DEL RESTAURANT` al projecte: cada imatge porta a sobre un
> comentari que diu d'on surt.

### Què convé demanar-los

Les seves fotos són **de poca resolució** (venen d'un web de fa deu anys) i
algunes no sabem del cert de quina sala són:

| Fitxer | Mida actual | Què cal |
|---|---|---|
| `photo-hero.jpg` | prové d'una de 1200×800 | **La més important.** L'original a més resolució. Millor encara: una de la façana al capvespre amb els llums encesos |
| `photo-contacte-hero.jpg` | prové d'una de 960×295 | La de pitjor qualitat de totes. Substituir |
| `photo-sala-nou.jpg` · `photo-sala-menjador.jpg` · `photo-sala-bosc.jpg` · `photo-sala-privat.jpg` | 1200×900 | **Confirmar quina sala és cadascuna.** S'han assignat pel que sembla a la foto, no perquè ho sapiguem |
| La resta | 1000–1800 px | Els originals, si els tenen |

### ⚠️ La galeria de `la-casa.html` només té sis fotografies

Afegit el 24/08/2026 amb la pàgina nova. Les onze imatges que hi ha ja estaven
gairebé totes ocupades —cadascuna fa de capçalera d'una pàgina o de retrat d'un
saló— i **posar la mateixa foto dues vegades a la mateixa pàgina es nota**. Per
això la galeria en té sis i no onze: les que quedaven lliures.

Sis és just, i **és la petició que més canviaria aquesta web**. El que cal són
de vuit a dotze fotografies actuals i horitzontals: sala plena un dissabte,
terrassa a l'estiu, quatre o cinc plats, la cuina, l'equip. Està escrit amb
detall a `REUNIO-CLIENT.md` (punt 9-ter).

**Per afegir-n'hi una**: deseu-la a `assets/` com a `photo-galeria-N.jpg`
(mínim 1200 px d'ample) i copieu una `<figure>` de la secció `#galeria` de
`la-casa.html`, canviant-ne el `src`, l'`alt` i el `<figcaption>`. La graella
i el visor creixen sols; no s'ha de tocar ni el CSS ni el JS. **L'`alt` i el
peu de foto s'han d'afegir també a `js/traduccions.js`**, als dos idiomes.

### Si fan sessió de fotos

Per ordre de rendiment: **façana al capvespre**, **Saló Nou muntat per a un
banquet**, els **tres plats** de la pàgina d'inici i **vuit fotos més per a la
galeria**. Amb aquestes, la web ja fa un salt gros.

Format: JPG horitzontal, mínim 1800 px d'ample (les verticals, 1100×1300).
Sense text ni marca d'aigua a sobre.

## El menú del dia

Surt **a dins de la web**, a `carta.html` (secció «El menú del dia»), no en un
enllaç a Instagram. Això és el que buscarà la gent del poble a Google.

- Les dades: `data/menu-diari.json`
- Qui el pinta: `js/menu-diari.js`

> ⚠️ **Ara mateix el fitxer és buit a posta**, i per això la web hi diu «Encara
> no hem publicat el menú» amb el telèfon. Hi havia cinc dies d'exemple: els
> plats eren de la seva carta, però la combinació de cada dia se l'havia
> inventada la maqueta, i això no s'ensenya com si fos el menú de la casa.
>
> El forat és, de fet, la millor demostració del sistema: se'ls pot ensenyar i
> dir-los «aquí hi anirà el vostre, i el dia que no n'hi hagi surt això —**mai
> el d'ahir**».

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

**WhatsApp tampoc pot ser el canal automàtic.** Una web estàtica no pot llegir
missatges de WhatsApp: caldria l'API de WhatsApp Business (compte de negoci
verificat, app de Meta i un servidor escoltant un *webhook*), i això ja no és una
web estàtica. Ara bé, **com a manera de fer-nos-ho arribar sí que funciona**: ells
envien el menú per WhatsApp i qui ho porta el copia. Això és exactament l'opció A
d'aquí sobre, amb una persona pel mig. Si el que es vol és que no hi hagi ningú
pel mig, la resposta és el full de càlcul.

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

## Els formularis

Els dos (consulta a `contacte.html` i pressupost a `celebracions.html`) funcionen
amb [Formspree](https://formspree.io). **L'enviament de debò ja està programat.**

Per activar-los només cal:

1. Donar d'alta els dos formularis a formspree.io.
2. Substituir `XXXXXXXX` de l'`action` de cada `<form>` per l'identificador real.

I res més: el codi ja fa el `POST`.

### Què passa exactament en enviar-lo

| Situació | Què passa |
|---|---|
| **L'`action` encara porta `XXXXXXXX`** | ⚠️ **No diu que s'hagi enviat.** Surt un avís taronja dient que el formulari encara no està connectat i donant el telèfon. El formulari **no s'amaga** i les dades escrites no es perden |
| **Configurat i tot va bé** | `POST` a Formspree amb tots els camps, el formulari s'amaga i surt «Rebut, gràcies» |
| **Configurat i el servidor falla** | Avís amb el telèfon, el botó es torna a activar i **les dades escrites es conserven** perquè es pugui tornar a provar |

> Això és a posta. Si el formulari digués «rebut» sense estar connectat, un client
> demanaria pressupost per a una comunió, veuria que tot ha anat bé i el restaurant
> no rebria res mai. Val més avisar que enganyar.

### El formulari de celebracions

Va **a dalt de la pàgina**, just sota el cercador d'espai, perquè és l'acció que
importa allà. Al final de la pàgina hi ha un botó que hi torna.

Els camps **tipus** i **quants sereu** comencen **buits** i són **editables**. Si
algú mou el comptador del cercador, s'omplen sols amb el que ha triat; si algú hi
arriba pel botó de la barra (que salta el cercador), els escriu a mà. Mai s'envia
res que la persona no hagi triat.

El camp **saló** és un desplegable que depèn dels comensals:

- Mentre no hi hagi cap nombre de comensals, està **bloquejat** i diu
  «Digueu abans quants sereu».
- Amb un nombre, s'obre i **desactiva els salons on no hi caben**, amb la
  capacitat de cada un a l'etiqueta.
- Si es puja el nombre i el saló ja triat deixa de servir, **es buida sol**.
- Si no hi cap en cap (més de 200), ho diu i dona el telèfon.

> Les capacitats **no estan escrites al formulari**: `js/espais.js` les llegeix
> dels `data-capacitat` de les targetes de saló. Si un dia canvia una capacitat,
> es toca en un sol lloc.

> Abans eren de només lectura i sortien preomplerts amb els valors per defecte del
> cercador. Qui hi arribava sense passar-hi enviava «Comunió · 60 comensals» sense
> haver-ho triat mai, i no ho podia corregir.

---

## Què falta per publicar

- [x] ~~Treure les 3 fotos d'stock~~ — fetes fora i esborrades (2/08/2026).
      Ara totes les imatges de la web són seves
- [ ] ⭐ **Les 3 fotos de plats**: filet a l'estil Roca, canelons de l'àvia i
      una comanda per emportar. Són tres fotos de mòbil i omplen el bloc «Tres
      plats» de l'inici, que ara va sense imatge
- [ ] ⭐ **De 8 a 12 fotos per a la galeria de `la-casa.html`**, que ara en té
      sis i es nota. Vegeu «La galeria de `la-casa.html` només té sis
      fotografies» més amunt
- [ ] **Menú d'empresa**: preguntar-los si en tenen un de diferent del de les
      celebracions familiars (preu tancat, factura, torn curt, sopars de
      Nadal). El recordatori és dins de `celebracions.html`, al bloc «Com ho
      fem», i la pregunta sencera a `REUNIO-CLIENT.md` (punt 9-bis)
- [ ] **Comandes per emportar**: avui el canal és el telèfon i prou. La secció
      `carta.html#per-emportar` porta escrits els tres camins possibles
      (formulari · WhatsApp Business · comanda en línia) i què s'ha de tocar
      per a cadascun. ⚠️ Si s'escull WhatsApp, és **el mateix número** que
      faria servir el menú del dia: es decideix un sol cop
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
- [ ] 🚫 **Esborrar `robots.txt`** en publicar al domini real, o la web **no
      s'indexarà mai** i no ho notarà ningú. Vegeu el bloc del capdamunt
      d'aquest fitxer

---

## Compatibilitat

Chrome, Firefox, Safari i Edge actuals. Comprovat a 320, 360, 390, 600, 768,
900, 1024, 1256 i 1440 px d'amplada, **en els tres idiomes**, sense
desbordaments ni text partit (24/08/2026).
Respecta `prefers-reduced-motion`: amb el moviment reduït activat, no hi ha cap
animació. Contrast AA verificat a totes les combinacions de color.
