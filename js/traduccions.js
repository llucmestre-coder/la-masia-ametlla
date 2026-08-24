/* ═══════════════════════════════════════════════════════════════
   traduccions.js — Restaurant La Masia
   Castellà i anglès. El català és el que hi ha a l'HTML.
   ═══════════════════════════════════════════════════════════════

   LA CLAU ÉS LA FRASE CATALANA, tal com surt a la pàgina (amb els
   espais i els salts de línia arreglats). Si canvieu una frase de
   l'HTML, canvieu-la també aquí o aquella frase es quedarà en català
   —que és lleig, però no és mentir a ningú.

   CRITERI DE TRADUCCIÓ, que no és el d'un traductor automàtic:

   · TRACTAMENT. El català d'aquesta web parla de vós en plural
     («truqueu-nos», «digueu-nos quants sereu»): és una casa que
     s'adreça a una família, no a un client. El castellà manté el
     «vosotros» pel mateix motiu; «llámenos» sonaria a central
     telefònica i aquí ve gent a fer la comunió del nen. L'anglès fa
     servir el «you» de sempre, planer.

   · ELS PLATS NO ES TRADUEIXEN, S'EXPLIQUEN. Un «arrossejat» no és
     «rice», i un «calçot» no és «spring onion» a seques. El nom de
     casa es manté i, si en anglès no vol dir res, s'hi afegeix el que
     és. El que NO es fa mai és arreglar el que diu la seva carta: les
     «croquetes d'heura» hi són perquè hi són a la carta del 2025
     (vegeu el PENDENT-CLIENT de carta.html), i en castellà i en
     anglès hi diuen exactament el mateix.

   · ELS NOMS PROPIS ES QUEDEN. «Saló Nou», «Saló Bosc», «La Masia»,
     el carrer i el poble no es tradueixen. Un anglès que busqui el
     lloc ha de poder llegir el mateix rètol que hi ha a la porta.

   · ELS CLAUDÀTORS DELS LEGALS NO ES TRADUEIXEN. [RAÓ SOCIAL] i
     companyia es queden en català a les tres versions a posta: són
     marcadors per omplir i han de continuar sortint tots amb una sola
     cerca. Si es traduïssin, se n'oblidaria un.

   · LES RESSENYES SÓN CITACIONS. Es tradueixen perquè si no, un
     anglès no les entén, però la traducció es diu pel seu nom: en
     castellà i en anglès surt una línia que avisa que l'original és
     en català. Al costat, l'enllaç per llegir-les a Google.
   ═══════════════════════════════════════════════════════════════ */

window.TRAD = {

  /* Frases que són iguals a les tres versions i que no s'han oblidat:
     noms propis, adreces i marques. Són aquí perquè el mode de revisió
     (?i18n=debug) no les doni per pendents. */
  igual: [
    'Restaurant La Masia',
    'Restaurant La Masia · L\'Ametlla del Vallès',
    'Carrer de la Torregassa, 77',
    'Carrer de la Torregassa, 77 — L\'Ametlla del Vallès',
    'Carrer de la Torregassa, 77, 08480 L\'Ametlla del Vallès (Barcelona)',
    '08480 L\'Ametlla del Vallès',
    'Instagram',
    'Facebook',
    'Google Maps',
    '@lamasialametlla',
    'Carta 2025',
    'Saló Nou',
    'Saló Bosc',
    'Marina Girbau · Google',
    'P. Pc · Google',
    'David Hernandez · Google',
    '[RAÓ SOCIAL]',
    '[NIF]',
    '[CORREU DE CONTACTE]',
    '[REGISTRE MERCANTIL, SI ESCAU]',
    '[PROVEÏDOR DEL FORMULARI, p. ex. Formspree Inc.]'
  ],

  /* ═══════════════════════════════════════════════════════════════
     CASTELLÀ
     ═══════════════════════════════════════════════════════════════ */
  es: {

    /* ── Barra de dalt, peu i coses de totes les pàgines ── */
    'Vés al contingut': 'Ir al contenido',
    'Restaurant La Masia — inici': 'Restaurant La Masia — inicio',
    'Navegació principal': 'Navegación principal',
    'Obrir el menú': 'Abrir el menú',
    'Idioma de la pàgina': 'Idioma de la página',
    'Idioma': 'Idioma',
    'Inici': 'Inicio',
    'La carta': 'La carta',
    'Celebracions': 'Celebraciones',
    'Contacte': 'Contacto',
    'Informació i reserves': 'Información y reservas',
    'Reservar taula': 'Reservar mesa',
    'Demanar pressupost': 'Pedir presupuesto',
    'Trucar ara': 'Llamar ahora',
    'Trucar': 'Llamar',
    'Reservar': 'Reservar',
    'Trucar — 938 43 00 02': 'Llamar — 938 43 00 02',
    'Cuina catalana i de mercat a l\'entrada de l\'Ametlla del Vallès, des del 1957.':
      'Cocina catalana y de mercado a la entrada de L\'Ametlla del Vallès, desde 1957.',
    'Pàgines': 'Páginas',
    'Contacte i reserves': 'Contacto y reservas',
    'Qui som': 'Quiénes somos',
    'Seguiu-nos': 'Síguenos',
    'Pàgines legals': 'Páginas legales',
    'Avís legal': 'Aviso legal',
    'Privacitat': 'Privacidad',
    'Cookies': 'Cookies',

    /* ── Inici ── */
    'Restaurant La Masia — Cuina catalana i de mercat a l\'Ametlla del Vallès':
      'Restaurant La Masia — Cocina catalana y de mercado en L\'Ametlla del Vallès',
    'Restaurant La Masia, a l\'entrada de l\'Ametlla del Vallès des del 1957. Cuina catalana i de mercat, menú diari, per emportar i quatre salons per a celebracions de fins a 200 persones.':
      'Restaurant La Masia, a la entrada de L\'Ametlla del Vallès desde 1957. Cocina catalana y de mercado, menú diario, comida para llevar y cuatro salones para celebraciones de hasta 200 personas.',
    'Una masia a l\'entrada de l\'Ametlla del Vallès des del 1957. Cuina catalana i de mercat i quatre salons per a celebracions.':
      'Una masía a la entrada de L\'Ametlla del Vallès desde 1957. Cocina catalana y de mercado y cuatro salones para celebraciones.',

    'Des del 1957 · L\'Ametlla del Vallès': 'Desde 1957 · L\'Ametlla del Vallès',
    'Cuina catalana i de mercat': 'Cocina catalana y de mercado',
    'Una masia a l\'entrada del poble, oberta des del 1957. Taula per a cada dia i quatre salons on l\'Ametlla fa les seves celebracions.':
      'Una masía a la entrada del pueblo, abierta desde 1957. Mesa para cada día y cuatro salones donde el pueblo hace sus celebraciones.',
    'Veure la carta': 'Ver la carta',

    'La Masia en xifres': 'La Masia en cifras',
    'Des de l\'any': 'Desde el año',
    'ressenyes a Google': 'reseñas en Google',
    'Fins a 200 comensals': 'Hasta 200 comensales',
    '4 salons': '4 salones',
    'Obert de dilluns a diumenge': 'Abierto de lunes a domingo',
    'Cada dia': 'Cada día',

    'Què veniu a fer?': '¿A qué venís?',
    'Dinar avui o preparar el gran dia': 'Comer hoy o preparar el gran día',
    'La carta i el menú diari': 'La carta y el menú diario',
    'Entrants freds i calents, arrossos, peixos i carns. Menú diari de dilluns a divendres i menjar per emportar tots els dies de la setmana.':
      'Entrantes fríos y calientes, arroces, pescados y carnes. Menú diario de lunes a viernes y comida para llevar todos los días de la semana.',
    'Veure la carta →': 'Ver la carta →',
    'Comunions, bateigs, noces i empresa': 'Comuniones, bautizos, bodas y empresa',
    'Quatre salons de capacitats diferents, del reservat de 20 places al Saló Nou de 200. Digueu-nos quants sereu i us diem quin espai us va bé.':
      'Cuatro salones de capacidades distintas, del reservado de 20 plazas al Saló Nou de 200. Decidnos cuántos seréis y os decimos qué espacio os va bien.',
    'Trobar el vostre espai →': 'Encontrar vuestro espacio →',

    'Seixanta-nou anys a la mateixa casa': 'Sesenta y nueve años en la misma casa',
    'La Masia és a l\'entrada de l\'Ametlla del Vallès, al carrer de la Torregassa. Va obrir el 1957 i des d\'aleshores fa el mateix: cuina catalana i de mercat, feta cada dia.':
      'La Masia está a la entrada de L\'Ametlla del Vallès, en el carrer de la Torregassa. Abrió en 1957 y desde entonces hace lo mismo: cocina catalana y de mercado, hecha cada día.',
    'A la carta hi ha els plats que la casa no ha canviat mai —els canelons de l\'àvia, el filet de vedella a l\'estil Roca— i els que van i venen amb la temporada: els calçots, els rossinyols, les trompetes de la mort.':
      'En la carta están los platos que la casa no ha cambiado nunca —los canelones de la abuela, el solomillo de ternera al estilo Roca— y los que van y vienen con la temporada: los calçots, los rebozuelos, las trompetas de la muerte.',
    'I al costat del menjador, quatre salons on el poble ha celebrat comunions, bateigs i aniversaris de noces durant generacions.':
      'Y al lado del comedor, cuatro salones donde el pueblo ha celebrado comuniones, bautizos y aniversarios de boda durante generaciones.',
    'El menjador de La Masia': 'El comedor de La Masia',
    'Cuina de mercat': 'Cocina de mercado',
    'Gamba de Palamós, cloïsses de Carril, botifarra de La Garriga.':
      'Gamba de Palamós, almejas de Carril, butifarra de La Garriga.',
    'Quatre salons': 'Cuatro salones',
    'Del reservat de 20 places al Saló Nou de 200.':
      'Del reservado de 20 plazas al Saló Nou de 200.',

    'Tres plats que ens demanen sempre': 'Tres platos que nos piden siempre',
    'El plat que més surt a les ressenyes de Google. Mínim 2 persones.':
      'El plato que más sale en las reseñas de Google. Mínimo 2 personas.',
    'Un dels sis arrossos i pastes de la carta, amb la paella de llamàntol.':
      'Uno de los seis arroces y pastas de la carta, junto a la paella de bogavante.',
    'Els de sempre. Hi ha també la versió de verdures amb beixamel.':
      'Los de siempre. También está la versión de verduras con bechamel.',
    'La carta sencera': 'La carta entera',

    'Prova social': 'Prueba social',
    'El que en diu la gent': 'Lo que dice la gente',
    'Mitjana de': 'Media de',
    'ressenyes a Google.': 'reseñas en Google.',
    'El restaurant amb més ressenyes de l\'Ametlla del Vallès.':
      'El restaurante con más reseñas de L\'Ametlla del Vallès.',
    'Veure-les a Google →': 'Verlas en Google →',
    'Valoració: 5 sobre 5': 'Valoración: 5 sobre 5',
    'Valoració: 4 sobre 5': 'Valoración: 4 sobre 5',
    'Traducció de la ressenya original en català':
      'Traducción de la reseña original en catalán',
    '«Restaurant emblemàtic, de tota la vida. Sempre és un plaer anar-hi i degustar els seus plats, en especial el filet a l\'estil Roca i els seus calamars a l\'andalusa (els millors que he provat). El servei també és fantàstic.»':
      '«Restaurante emblemático, de toda la vida. Siempre es un placer ir y degustar sus platos, en especial el solomillo al estilo Roca y sus calamares a la andaluza (los mejores que he probado). El servicio también es fantástico.»',
    '«Un clàssic a L\'Ametlla del Vallès. Restaurant ubicat en un lloc excel·lent amb aparcament propi. El menjador ampli i agradable, tot molt net i endreçat.»':
      '«Un clásico en L\'Ametlla del Vallès. Restaurante ubicado en un sitio excelente con aparcamiento propio. El comedor amplio y agradable, todo muy limpio y ordenado.»',
    '«Un restaurant de tota la vida. Manté la esencia. Cambrers professionals i menjar ben elaborat. Menú en dies laborables. Aparcament per cotxes al mateix restaurant.»':
      '«Un restaurante de toda la vida. Mantiene la esencia. Camareros profesionales y comida bien elaborada. Menú en días laborables. Aparcamiento para coches en el mismo restaurante.»',

    'On som': 'Dónde estamos',
    'A l\'entrada del poble': 'A la entrada del pueblo',
    'Adreça': 'Dirección',
    'Telèfon — reserves': 'Teléfono — reservas',
    'Seguiu-nos a Instagram': 'Síguenos en Instagram',
    'Horaris': 'Horarios',
    'Dilluns a dissabte': 'Lunes a sábado',
    'Trucar per reservar': 'Llamar para reservar',
    'Com arribar': 'Cómo llegar',
    'Mapa: Restaurant La Masia, carrer de la Torregassa 77, L\'Ametlla del Vallès':
      'Mapa: Restaurant La Masia, carrer de la Torregassa 77, L\'Ametlla del Vallès',
    'El mapa el serveix Google. Si el carregueu, Google podrà posar galetes al vostre navegador.':
      'El mapa lo sirve Google. Si lo cargáis, Google podrá poner cookies en vuestro navegador.',
    'Carregar el mapa': 'Cargar el mapa',

    /* ── La carta ── */
    'La carta — Restaurant La Masia, L\'Ametlla del Vallès':
      'La carta — Restaurant La Masia, L\'Ametlla del Vallès',
    'La carta del Restaurant La Masia: entrants freds i calents, arrossos i pastes, plats de temporada, vegetarians, peixos i carns. Menú diari i menjar per emportar cada dia.':
      'La carta del Restaurant La Masia: entrantes fríos y calientes, arroces y pastas, platos de temporada, vegetarianos, pescados y carnes. Menú diario y comida para llevar cada día.',
    'La carta — Restaurant La Masia': 'La carta — Restaurant La Masia',
    'Entrants, arrossos, peixos i carns de cuina catalana i de mercat. Menú diari i menjar per emportar.':
      'Entrantes, arroces, pescados y carnes de cocina catalana y de mercado. Menú diario y comida para llevar.',
    '· La carta': '· La carta',
    'Cuina catalana i de mercat. Els plats de sempre i els que van i venen amb la temporada.':
      'Cocina catalana y de mercado. Los platos de siempre y los que van y vienen con la temporada.',
    'Set apartats, quaranta-set plats': 'Siete apartados, cuarenta y siete platos',
    'Apartats de la carta': 'Apartados de la carta',
    'Tots els plats': 'Todos los platos',
    'Entrants freds': 'Entrantes fríos',
    'Entrants calents': 'Entrantes calientes',
    'Arrossos i pastes': 'Arroces y pastas',
    'De temporada': 'De temporada',
    'Vegetarians i vegans': 'Vegetarianos y veganos',
    'Peixos': 'Pescados',
    'Carns': 'Carnes',
    'Plats de temporada': 'Platos de temporada',
    'Plats vegetarians i vegans': 'Platos vegetarianos y veganos',
    '9 plats': '9 platos',
    '11 plats': '11 platos',
    '6 plats': '6 platos',
    '4 plats': '4 platos',
    '3 plats': '3 platos',
    '7 plats': '7 platos',
    'Sense gluten': 'Sin gluten',

    'Amanida de llagostins i favetes amb panses, pinyons i vinagreta de soja':
      'Ensalada de langostinos y habitas con pasas, piñones y vinagreta de soja',
    'Amanida de canonges amb mango, melmelada de maduixa, fruits secs i parmesà':
      'Ensalada de canónigos con mango, mermelada de fresa, frutos secos y parmesano',
    'Carpaccio de bacallà amb gelée de tomàquet i oli d\'oliva negra':
      'Carpaccio de bacalao con gelée de tomate y aceite de oliva negra',
    'Carpaccio de tonyina amb ruca i soja': 'Carpaccio de atún con rúcula y soja',
    'Carpaccio de gamba de Palamós amb daus de tomàquet, pinyons i alfàbrega':
      'Carpaccio de gamba de Palamós con dados de tomate, piñones y albahaca',
    'Anxoves de Santoña amb oli verge d\'oliva i coca torrada':
      'Anchoas de Santoña con aceite de oliva virgen y coca tostada',
    'Favetes amanides a la menta amb pernil':
      'Habitas aliñadas a la menta con jamón',
    'Pernil Jabugo de glà tallat a mà amb coca torrada':
      'Jamón de bellota de Jabugo cortado a mano con coca tostada',
    'Falses trufes de foie amb trompetes de la mort i confitura de ceba':
      'Falsas trufas de foie con trompetas de la muerte y confitura de cebolla',

    'Entreteniments de la casa': 'Entretenimientos de la casa',
    'Pernil, anxoves, coca torrada, salpicó de marisc, croquetes, calamars a la romana i xurros de patata i tòfona':
      'Jamón, anchoas, coca tostada, salpicón de marisco, croquetas, calamares a la romana y churros de patata y trufa',
    'Cuetes de llagostins amb compota de tomàquet i oli de festuc':
      'Colitas de langostino con compota de tomate y aceite de pistacho',
    'Favetes amb gambes de Palamós i rossinyols':
      'Habitas con gambas de Palamós y rebozuelos',
    'Mongetes del ganxet saltejades amb carn de botifarra i bolets':
      'Alubias del ganxet salteadas con carne de butifarra y setas',
    'Xipirons amb ceba i tomàquet': 'Chipirones con cebolla y tomate',
    'Xipirons fregits': 'Chipirones fritos',
    'Saltejat de calamars i espàrrecs amb tomàquet, oli d\'alfàbrega i olivada negra':
      'Salteado de calamares y espárragos con tomate, aceite de albahaca y olivada negra',
    'Verdures de temporada a la brasa amb romesco casolà':
      'Verduras de temporada a la brasa con romesco casero',
    'Pop amb crema de patata i oli de guindilla':
      'Pulpo con crema de patata y aceite de guindilla',
    'Calamars a la romana': 'Calamares a la romana',
    'Les nostres croquetes de pernil': 'Nuestras croquetas de jamón',

    'Arrossejat d\'escamarlans': 'Arrossejat de cigalas',
    'Paella de peix i marisc': 'Paella de pescado y marisco',
    'Paella de llamàntol': 'Paella de bogavante',
    'Fideuà': 'Fideuá',
    'Canelons de l\'àvia': 'Canelones de la abuela',
    'Macarrons a la bolonyesa gratinats': 'Macarrones a la boloñesa gratinados',

    'Caneló de llamàntol amb pasta fresca i salsa de gamba de Palamós':
      'Canelón de bogavante con pasta fresca y salsa de gamba de Palamós',
    'Només caps de setmana': 'Solo fines de semana',
    'Parmentier de patata amb xips de carxofa i oli de pernil':
      'Parmentier de patata con chips de alcachofa y aceite de jamón',
    'Calçots nets arrebossats amb romesco casolà':
      'Calçots limpios rebozados con romesco casero',
    'Carpaccio de peus de porc gratinats amb parmesà, poma confitada i pinyons':
      'Carpaccio de manitas de cerdo gratinadas con parmesano, manzana confitada y piñones',

    'Canelons de verdures amb beixamel gratinats':
      'Canelones de verduras con bechamel gratinados',
    'Croquetes de verdures': 'Croquetas de verduras',
    'Croquetes d\'heura, pastanaga i shiitake': 'Croquetas de hiedra, zanahoria y shiitake',

    'Tonyina vermella saltejada amb verdures i soja':
      'Atún rojo salteado con verduras y soja',
    'Suprema de lluç del Cantàbric amb crema de porros':
      'Suprema de merluza del Cantábrico con crema de puerros',
    'Suprema de llobarro salvatge al fonoll':
      'Suprema de lubina salvaje al hinojo',
    'Cloïsses a la marinera': 'Almejas a la marinera',
    'De Carril': 'De Carril',
    'Suquet de rap a l\'estil Roca amb cloïsses i llagostins':
      'Suquet de rape al estilo Roca con almejas y langostinos',
    'Escamarlans a la planxa': 'Cigalas a la plancha',
    'Llenguado Barretti': 'Lenguado Barretti',
    'Fruits secs i taronja': 'Frutos secos y naranja',

    'Filet de vedella a l\'estil Roca': 'Solomillo de ternera al estilo Roca',
    'Mínim 2 persones': 'Mínimo 2 personas',
    'Filet de vedella amb foie fresc i salsa d\'Oporto':
      'Solomillo de ternera con foie fresco y salsa de Oporto',
    'Filet de vedella amb salsa de tòfones':
      'Solomillo de ternera con salsa de trufas',
    'Espatlla de cabrit rostida al forn': 'Paletilla de cabrito asada al horno',
    'Mitjanes i costella de xai a la brasa': 'Chuletas y costillar de cordero a la brasa',
    'Magret d\'ànec amb salsa de maduixes': 'Magret de pato con salsa de fresas',
    'Botifarra de La Garriga a la brasa': 'Butifarra de La Garriga a la brasa',

    'Al·lèrgies i intoleràncies:': 'Alergias e intolerancias:',
    'aviseu-nos en reservar o en arribar i us direm plat per plat què podeu menjar. Els distintius d\'aquesta carta són orientatius; la informació bona és la que us donarem a taula.':
      'avisadnos al reservar o al llegar y os diremos plato por plato qué podéis comer. Los distintivos de esta carta son orientativos; la información buena es la que os daremos en la mesa.',

    'El menú diari': 'El menú diario',
    'De dilluns a divendres al migdia. El publiquem aquí mateix, i també a Instagram i a Facebook.':
      'De lunes a viernes al mediodía. Lo publicamos aquí mismo, y también en Instagram y en Facebook.',
    'Veure el menú d\'avui →': 'Ver el menú de hoy →',
    'Plat del menú diari de La Masia': 'Plato del menú diario de La Masia',
    'Per emportar': 'Para llevar',
    'De dilluns a diumenge': 'De lunes a domingo',
    'Podeu endur-vos qualsevol plat de la carta i del menú diari. Truqueu-nos amb una mica d\'antelació i us ho tenim a punt.':
      'Podéis llevaros cualquier plato de la carta y del menú diario. Llamadnos con un poco de antelación y os lo tenemos listo.',
    'Encarregar per telèfon →': 'Encargar por teléfono →',
    'Paella feta a La Masia': 'Paella hecha en La Masia',
    'Cada dia, de dilluns a divendres': 'Cada día, de lunes a viernes',
    'El menú del dia': 'El menú del día',
    'Consulteu el menú d\'avui trucant-nos o a les nostres xarxes.':
      'Consultad el menú de hoy llamándonos o en nuestras redes.',
    'Truqueu-nos al': 'Llamadnos al',
    'i us diem què hi ha avui.': 'y os decimos qué hay hoy.',
    'També a Instagram': 'También en Instagram',
    'També oferim': 'También ofrecemos',
    'Menús per a celebracions i grups': 'Menús para celebraciones y grupos',
    'Per a comunions, bateigs, aniversaris de noces i dinars d\'empresa fem menús a part, adaptats al que necessiteu i al saló que trieu.':
      'Para comuniones, bautizos, aniversarios de boda y comidas de empresa hacemos menús aparte, adaptados a lo que necesitéis y al salón que elijáis.',
    'Veure els salons': 'Ver los salones',

    /* ── Celebracions ── */
    'Celebracions i salons — Restaurant La Masia, L\'Ametlla del Vallès':
      'Celebraciones y salones — Restaurant La Masia, L\'Ametlla del Vallès',
    'Quatre salons per a celebracions a l\'Ametlla del Vallès: comunions, bateigs, aniversaris de noces i dinars d\'empresa. Del reservat de 20 places al Saló Nou de 200. Demaneu pressupost.':
      'Cuatro salones para celebraciones en L\'Ametlla del Vallès: comuniones, bautizos, aniversarios de boda y comidas de empresa. Del reservado de 20 plazas al Saló Nou de 200. Pedid presupuesto.',
    'Celebracions i salons — Restaurant La Masia':
      'Celebraciones y salones — Restaurant La Masia',
    'Quatre salons de fins a 200 places per a comunions, bateigs, aniversaris de noces i empresa, a l\'Ametlla del Vallès.':
      'Cuatro salones de hasta 200 plazas para comuniones, bautizos, aniversarios de boda y empresa, en L\'Ametlla del Vallès.',
    '· Celebracions': '· Celebraciones',
    'Comunions, bateigs, aniversaris de noces i dinars d\'empresa. Quatre salons de capacitats diferents, a l\'entrada de l\'Ametlla del Vallès.':
      'Comuniones, bautizos, aniversarios de boda y comidas de empresa. Cuatro salones de capacidades distintas, a la entrada de L\'Ametlla del Vallès.',

    'Comencem pel principi': 'Empecemos por el principio',
    'Quin espai us cal?': '¿Qué espacio necesitáis?',
    'Moveu el comptador i us diem quin dels nostres salons us encaixa. Sense trucar ni esperar resposta.':
      'Desplazad el marcador y os decimos cuál de nuestros salones os encaja. Sin llamar ni esperar respuesta.',
    'Quants sereu?': '¿Cuántos seréis?',
    'comensals': 'comensales',
    'Quin tipus de celebració?': '¿Qué tipo de celebración?',
    'Comunió': 'Comunión',
    'Bateig': 'Bautizo',
    'Aniversari de noces': 'Aniversario de boda',
    'Empresa': 'Empresa',
    'Àpat familiar': 'Comida familiar',
    'Dinar d\'empresa': 'Comida de empresa',
    'Altres': 'Otros',
    'Moveu el comptador per veure quins salons us encaixen.':
      'Desplazad el marcador para ver qué salones os encajan.',

    'Demaneu-nos preu': 'Pedidnos precio',
    'Us fem una proposta sense compromís': 'Os hacemos una propuesta sin compromiso',
    'Ompliu-ho i us truquem. Si ho preferiu, truqueu-nos vosaltres al':
      'Rellenadlo y os llamamos. Si lo preferís, llamadnos vosotros al',
    '— de dilluns a dissabte de 9:00 a 00:00 i diumenge de 9:00 a 18:00.':
      '— de lunes a sábado de 9:00 a 00:00 y domingo de 9:00 a 18:00.',
    'Veniu a veure els salons': 'Venid a ver los salones',
    'Nom i cognoms': 'Nombre y apellidos',
    'Telèfon': 'Teléfono',
    'Correu': 'Correo',
    '(opcional)': '(opcional)',
    'Tipus de celebració': 'Tipo de celebración',
    'Trieu-ne un…': 'Elegid uno…',
    'Per exemple, 90': 'Por ejemplo, 90',
    'Saló': 'Salón',
    '(digueu abans quants sereu)': '(decid antes cuántos seréis)',
    'Data aproximada': 'Fecha aproximada',
    'Expliqueu-nos què us imagineu': 'Contadnos qué os imagináis',
    'En enviar-ho accepteu la nostra': 'Al enviarlo aceptáis nuestra',
    'política de privacitat': 'política de privacidad',
    '. Les dades només s\'usen per respondre-us.':
      '. Los datos solo se usan para responderos.',
    'Rebut, gràcies': 'Recibido, gracias',
    'Us truquem nosaltres al número que ens heu deixat. Si teniu pressa, truqueu-nos al':
      'Os llamamos nosotros al número que nos habéis dejado. Si tenéis prisa, llamadnos al',

    'Els espais': 'Los espacios',
    'Els nostres quatre salons': 'Nuestros cuatro salones',
    'El Saló Nou amb les taules rodones parades':
      'El Saló Nou con las mesas redondas puestas',
    'Fins a 200 persones': 'Hasta 200 personas',
    'El més gran de la casa. Per a comunions i celebracions de poble senceres.':
      'El más grande de la casa. Para comuniones y celebraciones de pueblo enteras.',
    'Menjador diari': 'Comedor diario',
    'El menjador diari, amb les finestres d\'arc':
      'El comedor diario, con las ventanas de arco',
    'Fins a 110 persones': 'Hasta 110 personas',
    'El menjador de sempre, el que trobareu obert qualsevol dia de la setmana.':
      'El comedor de siempre, el que encontraréis abierto cualquier día de la semana.',
    'El Saló Bosc parat per a un banquet': 'El Saló Bosc puesto para un banquete',
    'Fins a 100 persones': 'Hasta 100 personas',
    'Per a celebracions mitjanes que volen sala pròpia sense ser massa grans.':
      'Para celebraciones medianas que quieren sala propia sin ser demasiado grandes.',
    'Saló privat': 'Salón privado',
    'El saló privat, amb la taula parada': 'El salón privado, con la mesa puesta',
    'Màxim 20 persones': 'Máximo 20 personas',
    'El reservat. Per a dinars d\'empresa, sopars de família i taules tancades.':
      'El reservado. Para comidas de empresa, cenas de familia y mesas cerradas.',

    'Com ho fem': 'Cómo lo hacemos',
    'Els menús els fem amb vosaltres': 'Los menús los hacemos con vosotros',
    'No tenim tres menús tancats en una llista. Ens expliqueu quants sereu, quin dia i què us imagineu, i us preparem una proposta amb preu. Si voleu, veniu a veure els salons abans de decidir res.':
      'No tenemos tres menús cerrados en una lista. Nos contáis cuántos seréis, qué día y qué os imagináis, y os preparamos una propuesta con precio. Si queréis, venid a ver los salones antes de decidir nada.',
    'Comunions i bateigs': 'Comuniones y bautizos',
    'Menús per a adults i per a la canalla, i espai per córrer.':
      'Menús para adultos y para los niños, y espacio para correr.',
    'Aniversaris de noces': 'Aniversarios de boda',
    'Els 25 i els 50 anys de casats, que a la casa es fan des de fa dècades.':
      'Los 25 y los 50 años de casados, que en la casa se celebran desde hace décadas.',
    'Dinars de feina i sopars de Nadal, al reservat o a la sala sencera.':
      'Comidas de trabajo y cenas de Navidad, en el reservado o en la sala entera.',
    'Àpats de família': 'Comidas de familia',
    'Aniversaris i retrobaments, del reservat de 20 al saló de 200.':
      'Cumpleaños y reencuentros, del reservado de 20 al salón de 200.',
    'Ja ho teniu clar?': '¿Ya lo tenéis claro?',
    'Digueu-nos quants sereu i us fem preu':
      'Decidnos cuántos seréis y os hacemos precio',

    /* Frases que munta js/espais.js */
    'Digueu abans quants sereu': 'Decid antes cuántos seréis',
    '{sala} — fins a {n} persones': '{sala} — hasta {n} personas',
    '{sala} — fins a {n} persones (no hi cabeu)': '{sala} — hasta {n} personas (no cabéis)',
    'Per a {n} persones cal que en parlem: truqueu-nos al 938 43 00 02.':
      'Para {n} personas hay que hablarlo: llamadnos al 938 43 00 02.',
    'Massa petit per a {n} persones': 'Demasiado pequeño para {n} personas',
    'Hi cabeu, però us quedarà gran': 'Cabéis, pero se os quedará grande',
    '✓ Us encaixa': '✓ Os encaja',
    /* Aquest tros s'enganxa darrere de «Para 60 personas…», i per això
       aquí diu «en» i no «para»: «Para 60 personas para una comunión»
       repeteix la preposició. També hi va l'article, que en castellà
       té gènere i el català no en demana cap. */
    'per a comunió': 'en una comunión',
    'per a bateig': 'en un bautizo',
    'per a aniversari de noces': 'en un aniversario de boda',
    'per a dinar d\'empresa': 'en una comida de empresa',
    'per a àpat familiar': 'en una comida familiar',
    'Per a <strong>{n} persones</strong>{perA} cal que en parlem: combinem sales o busquem una data amb el restaurant per a vosaltres sols. Truqueu-nos al <strong>938 43 00 02</strong>.':
      'Para <strong>{n} personas</strong>{perA} hay que hablarlo: combinamos salas o buscamos una fecha con el restaurante para vosotros solos. Llamadnos al <strong>938 43 00 02</strong>.',
    'Per a <strong>{n} persones</strong>{perA} us recomanem el <strong>{sala}</strong>.':
      'Para <strong>{n} personas</strong>{perA} os recomendamos el <strong>{sala}</strong>.',
    'Per a <strong>{n} persones</strong>{perA} teniu <strong>{k} espais</strong> possibles: {llista} i {darrer}.':
      'Para <strong>{n} personas</strong>{perA} tenéis <strong>{k} espacios</strong> posibles: {llista} y {darrer}.',

    /* ── Contacte ── */
    'Contacte i reserves — Restaurant La Masia, L\'Ametlla del Vallès':
      'Contacto y reservas — Restaurant La Masia, L\'Ametlla del Vallès',
    'Reserveu taula al Restaurant La Masia: 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès. Horaris, com arribar i preguntes freqüents.':
      'Reservad mesa en el Restaurant La Masia: 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès. Horarios, cómo llegar y preguntas frecuentes.',
    'Contacte i reserves — Restaurant La Masia':
      'Contacto y reservas — Restaurant La Masia',
    'Reserveu taula al 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès.':
      'Reservad mesa en el 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès.',
    '· Contacte': '· Contacto',
    'Reserves i contacte': 'Reservas y contacto',
    'La manera més ràpida': 'La manera más rápida',
    'Truqueu-nos al restaurant': 'Llamadnos al restaurante',
    'Les reserves les confirmem per telèfon. És l\'única manera que tenim de dir-vos del cert que la taula queda apuntada.':
      'Las reservas las confirmamos por teléfono. Es la única manera que tenemos de deciros con certeza que la mesa queda apuntada.',
    'Dilluns': 'Lunes',
    'Dimarts': 'Martes',
    'Dimecres': 'Miércoles',
    'Dijous': 'Jueves',
    'Divendres': 'Viernes',
    'Dissabte': 'Sábado',
    'Diumenge': 'Domingo',
    'O escriviu-nos': 'O escribidnos',
    'Consulta': 'Consulta',
    'Això és una consulta, no una reserva.': 'Esto es una consulta, no una reserva.',
    'Us respondrem, però la taula només queda apuntada quan ens truqueu.':
      'Os responderemos, pero la mesa solo queda apuntada cuando nos llaméis.',
    'Quin dia?': '¿Qué día?',
    'La vostra consulta': 'Vuestra consulta',
    'Enviar la consulta': 'Enviar la consulta',
    'Us respondrem al més aviat possible. Recordeu que per reservar taula cal que ens truqueu al':
      'Os responderemos lo antes posible. Recordad que para reservar mesa hay que llamarnos al',
    'A l\'entrada de l\'Ametlla del Vallès': 'A la entrada de L\'Ametlla del Vallès',
    'Obrir a Google Maps': 'Abrir en Google Maps',
    'Dubtes': 'Dudas',
    'Preguntes que ens feu sovint': 'Preguntas que nos hacéis a menudo',
    'Cal reservar taula?': '¿Hay que reservar mesa?',
    'Per dinar entre setmana no sempre cal, però els caps de setmana i els festius sí que us ho recomanem. Les reserves es fan per telèfon, al':
      'Para comer entre semana no siempre hace falta, pero los fines de semana y los festivos sí que os lo recomendamos. Las reservas se hacen por teléfono, al',
    'Puc reservar per correu electrònic?': '¿Puedo reservar por correo electrónico?',
    'No. Les reserves les confirmem sempre per telèfon, perquè així sabem del cert que la taula queda apuntada. Per correu responem consultes, però no bloquegem taules.':
      'No. Las reservas las confirmamos siempre por teléfono, porque así sabemos con certeza que la mesa queda apuntada. Por correo respondemos consultas, pero no bloqueamos mesas.',
    'Teniu opcions vegetarianes, veganes o sense gluten?':
      '¿Tenéis opciones vegetarianas, veganas o sin gluten?',
    'Sí. La carta té un apartat de plats vegetarians i vegans, i bona part dels plats hi surten marcats com a aptes per a celíacs. Aviseu-nos en reservar o en arribar i us ho concretem plat per plat: la informació bona sobre al·lèrgens és la que us donarem a taula.':
      'Sí. La carta tiene un apartado de platos vegetarianos y veganos, y buena parte de los platos salen marcados como aptos para celíacos. Avisadnos al reservar o al llegar y os lo concretamos plato por plato: la información buena sobre alérgenos es la que os daremos en la mesa.',
    'Fins a quantes persones podeu acollir?': '¿Hasta cuántas personas podéis acoger?',
    'Tenim quatre salons: el privat per a un màxim de 20 persones, el Saló Bosc per a unes 100, el menjador diari per a 110 i el Saló Nou per a unes 200. A':
      'Tenemos cuatro salones: el privado para un máximo de 20 personas, el Saló Bosc para unas 100, el comedor diario para 110 y el Saló Nou para unas 200. En',
    'hi ha un cercador que us diu quin us encaixa.':
      'hay un buscador que os dice cuál os encaja.',
    'Hi ha aparcament?': '¿Hay aparcamiento?',
    'Som a l\'entrada del poble, al carrer de la Torregassa. Si veniu amb un grup gran, truqueu-nos abans i us indiquem on aparcar.':
      'Estamos a la entrada del pueblo, en el carrer de la Torregassa. Si venís con un grupo grande, llamadnos antes y os indicamos dónde aparcar.',
    'Feu menjar per emportar?': '¿Hacéis comida para llevar?',
    'Sí, de dilluns a diumenge. Podeu endur-vos plats de la':
      'Sí, de lunes a domingo. Podéis llevaros platos de la',
    'carta': 'carta',
    'i del menú diari. Truqueu-nos amb una mica d\'antelació i us ho tenim a punt.':
      'y del menú diario. Llamadnos con un poco de antelación y os lo tenemos listo.',
    'On puc veure el menú d\'avui?': '¿Dónde puedo ver el menú de hoy?',
    'Aquí mateix, a la pàgina de la carta': 'Aquí mismo, en la página de la carta',
    '. També el pengem a': '. También lo colgamos en',
    'i a': 'y en',
    '. Si un dia encara no hi és, truqueu-nos al':
      '. Si algún día todavía no está, llamadnos al',
    'i us diem què hi ha.': 'y os decimos qué hay.',

    /* ── Legals ── */
    'Aquesta pàgina és una traducció de cortesia. La versió catalana és la que preval.':
      'Esta página es una traducción de cortesía. La versión catalana es la que prevalece.',
    'Avís legal — Restaurant La Masia': 'Aviso legal — Restaurant La Masia',
    'Avís legal del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Aviso legal del Restaurant La Masia, L\'Ametlla del Vallès.',
    'Última actualització: [DATA DE PUBLICACIÓ]':
      'Última actualización: [DATA DE PUBLICACIÓ]',
    '1. Identificació del titular': '1. Identificación del titular',
    'En compliment de la Llei 34/2002, d\'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s\'informa que aquest lloc web és titularitat de:':
      'En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que este sitio web es titularidad de:',
    'Denominació social:': 'Denominación social:',
    'NIF:': 'NIF:',
    'Domicili:': 'Domicilio:',
    'Telèfon:': 'Teléfono:',
    'Correu electrònic:': 'Correo electrónico:',
    'Dades registrals:': 'Datos registrales:',
    '2. Objecte': '2. Objeto',
    'Aquest lloc web té per objecte donar a conèixer el Restaurant La Masia, la seva carta, els seus espais per a celebracions i les vies de contacte i reserva.':
      'Este sitio web tiene por objeto dar a conocer el Restaurant La Masia, su carta, sus espacios para celebraciones y las vías de contacto y reserva.',
    '3. Condicions d\'ús': '3. Condiciones de uso',
    'L\'accés a aquest lloc web és gratuït i implica l\'acceptació d\'aquest avís legal. L\'usuari es compromet a fer-ne un ús conforme a la llei i a no dur a terme cap activitat que en perjudiqui el funcionament.':
      'El acceso a este sitio web es gratuito e implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso conforme a la ley y a no llevar a cabo ninguna actividad que perjudique su funcionamiento.',
    '4. Propietat intel·lectual i industrial': '4. Propiedad intelectual e industrial',
    'Els continguts d\'aquest lloc web (textos, imatges, logotips, disseny i codi font) estan protegits per la normativa de propietat intel·lectual i industrial. Se\'n prohibeix la reproducció, distribució o comunicació pública sense autorització expressa del titular.':
      'Los contenidos de este sitio web (textos, imágenes, logotipos, diseño y código fuente) están protegidos por la normativa de propiedad intelectual e industrial. Se prohíbe su reproducción, distribución o comunicación pública sin autorización expresa del titular.',
    '5. Responsabilitat': '5. Responsabilidad',
    'El titular no es fa responsable de l\'ús indegut dels continguts d\'aquest lloc web ni dels danys derivats d\'interrupcions del servei o d\'errors de tercers. La informació sobre la carta, els horaris i les capacitats dels espais és orientativa i pot variar; la informació vàlida és la que es confirma per telèfon o a l\'establiment.':
      'El titular no se hace responsable del uso indebido de los contenidos de este sitio web ni de los daños derivados de interrupciones del servicio o de errores de terceros. La información sobre la carta, los horarios y las capacidades de los espacios es orientativa y puede variar; la información válida es la que se confirma por teléfono o en el establecimiento.',
    '6. Al·lèrgens i informació alimentària': '6. Alérgenos e información alimentaria',
    'Els distintius de dieta que apareixen a la carta d\'aquest web són orientatius. La informació vinculant sobre al·lèrgens i intoleràncies és la que facilita el personal del restaurant abans de servir. Aviseu-nos sempre en reservar o en arribar.':
      'Los distintivos de dieta que aparecen en la carta de esta web son orientativos. La información vinculante sobre alérgenos e intolerancias es la que facilita el personal del restaurante antes de servir. Avisadnos siempre al reservar o al llegar.',
    '7. Enllaços a tercers': '7. Enlaces a terceros',
    'Aquest lloc conté enllaços a serveis de tercers (Google Maps, Instagram, Facebook). El titular no es responsabilitza dels continguts ni de les polítiques de privacitat d\'aquests serveis.':
      'Este sitio contiene enlaces a servicios de terceros (Google Maps, Instagram, Facebook). El titular no se responsabiliza de los contenidos ni de las políticas de privacidad de estos servicios.',
    '8. Legislació aplicable': '8. Legislación aplicable',
    'La relació entre el titular i els usuaris es regeix per la normativa espanyola vigent. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin segons la normativa de consumidors.':
      'La relación entre el titular y los usuarios se rige por la normativa española vigente. Cualquier controversia se someterá a los juzgados y tribunales que correspondan según la normativa de consumidores.',

    'Política de privacitat — Restaurant La Masia':
      'Política de privacidad — Restaurant La Masia',
    'Política de privacitat del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Política de privacidad del Restaurant La Masia, L\'Ametlla del Vallès.',
    'Política de privacitat': 'Política de privacidad',
    '1. Responsable del tractament': '1. Responsable del tratamiento',
    'Responsable:': 'Responsable:',
    'Adreça:': 'Dirección:',
    '2. Quines dades tractem i amb quina finalitat':
      '2. Qué datos tratamos y con qué finalidad',
    'Tractem únicament les dades que ens faciliteu voluntàriament a través dels formularis d\'aquest web:':
      'Tratamos únicamente los datos que nos facilitáis voluntariamente a través de los formularios de esta web:',
    'Formulari de consulta:': 'Formulario de consulta:',
    'nom, telèfon, correu electrònic, nombre de persones, data i el text de la consulta. Finalitat: respondre-us.':
      'nombre, teléfono, correo electrónico, número de personas, fecha y el texto de la consulta. Finalidad: responderos.',
    'Formulari de pressupost de celebracions:':
      'Formulario de presupuesto de celebraciones:',
    'nom, telèfon, correu electrònic, tipus de celebració, nombre de comensals i data aproximada. Finalitat: preparar-vos una proposta i contactar-vos.':
      'nombre, teléfono, correo electrónico, tipo de celebración, número de comensales y fecha aproximada. Finalidad: prepararos una propuesta y contactar con vosotros.',
    'No fem perfilat, no prenem decisions automatitzades i no fem servir aquestes dades per enviar-vos publicitat si no ens ho heu demanat expressament.':
      'No hacemos perfilado, no tomamos decisiones automatizadas y no usamos estos datos para enviaros publicidad si no nos lo habéis pedido expresamente.',
    '3. Base jurídica': '3. Base jurídica',
    'El consentiment que atorgueu en enviar el formulari (art. 6.1.a del RGPD) i, quan escaigui, l\'aplicació de mesures precontractuals a petició vostra (art. 6.1.b del RGPD).':
      'El consentimiento que otorgáis al enviar el formulario (art. 6.1.a del RGPD) y, cuando proceda, la aplicación de medidas precontractuales a petición vuestra (art. 6.1.b del RGPD).',
    '4. Durada de la conservació': '4. Plazo de conservación',
    'Conservem les dades el temps necessari per atendre la vostra sol·licitud i, després, durant els terminis legals de prescripció de responsabilitats. Passat aquest període, se suprimeixen.':
      'Conservamos los datos el tiempo necesario para atender vuestra solicitud y, después, durante los plazos legales de prescripción de responsabilidades. Pasado ese periodo, se suprimen.',
    '5. Destinataris': '5. Destinatarios',
    /* El marcador [PROVEÏDOR…] va dins de la frase i es queda en català
       a les tres versions: és un camp per omplir i han de sortir tots
       amb una sola cerca. Vegeu el criteri de dalt de tot. */
    'No cedim les vostres dades a tercers, tret d\'obligació legal. Els formularis d\'aquest web els processa [PROVEÏDOR DEL FORMULARI, p. ex. Formspree Inc.], que actua com a encarregat del tractament.':
      'No cedemos vuestros datos a terceros, salvo obligación legal. Los formularios de esta web los procesa [PROVEÏDOR DEL FORMULARI, p. ex. Formspree Inc.], que actúa como encargado del tratamiento.',
    '6. Els vostres drets': '6. Vuestros derechos',
    'Podeu exercir els drets d\'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat escrivint a [CORREU DE CONTACTE] o a l\'adreça postal indicada, adjuntant una còpia d\'un document identificatiu.':
      'Podéis ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a [CORREU DE CONTACTE] o a la dirección postal indicada, adjuntando una copia de un documento identificativo.',
    'Si considereu que no hem atès correctament els vostres drets, podeu presentar una reclamació davant l\'Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat) o l\'Agència Espanyola de Protecció de Dades (aepd.es).':
      'Si consideráis que no hemos atendido correctamente vuestros derechos, podéis presentar una reclamación ante la Autoridad Catalana de Protección de Datos (apdcat.gencat.cat) o la Agencia Española de Protección de Datos (aepd.es).',
    '7. Seguretat': '7. Seguridad',
    'Apliquem les mesures tècniques i organitzatives raonables per protegir les vostres dades. Aquest lloc web es serveix per HTTPS.':
      'Aplicamos las medidas técnicas y organizativas razonables para proteger vuestros datos. Este sitio web se sirve por HTTPS.',

    'Política de cookies — Restaurant La Masia': 'Política de cookies — Restaurant La Masia',
    'Política de cookies del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Política de cookies del Restaurant La Masia, L\'Ametlla del Vallès.',
    'Política de cookies': 'Política de cookies',
    '1. Què són les cookies': '1. Qué son las cookies',
    'Les cookies són petits fitxers que un lloc web desa al vostre navegador per recordar informació sobre la vostra visita.':
      'Las cookies son pequeños archivos que un sitio web guarda en vuestro navegador para recordar información sobre vuestra visita.',
    '2. Cookies que fem servir': '2. Cookies que usamos',
    'Aquest lloc web no instal·la cookies pròpies ni fa servir eines d\'analítica.':
      'Este sitio web no instala cookies propias ni usa herramientas de analítica.',
    'No us seguim ni elaborem perfils de navegació.':
      'No os seguimos ni elaboramos perfiles de navegación.',
    '3. Contingut incrustat de tercers': '3. Contenido incrustado de terceros',
    'Aquest web': 'Esta web',
    'no carrega res de cap tercer pel seu compte':
      'no carga nada de ningún tercero por su cuenta',
    '. Les tipografies, les imatges i els fulls d\'estil se serveixen des d\'aquest mateix domini. En obrir qualsevol pàgina no s\'envia cap dada vostra enlloc.':
      '. Las tipografías, las imágenes y las hojas de estilo se sirven desde este mismo dominio. Al abrir cualquier página no se envía ningún dato vuestro a ninguna parte.',
    'L\'única excepció és el': 'La única excepción es el',
    'mapa de Google Maps': 'mapa de Google Maps',
    'de l\'apartat «Com arribar», i': 'del apartado «Cómo llegar», y',
    'no es carrega sol': 'no se carga solo',
    ': fins que no premeu el botó «Carregar el mapa» no es fa cap petició a Google. Si el premeu, Google pot instal·lar cookies al vostre navegador per al funcionament i les preferències del mapa. Podeu consultar-ho a policies.google.com/technologies/cookies. Si preferiu no fer-ho, al costat hi teniu l\'adreça escrita.':
      ': hasta que no pulséis el botón «Cargar el mapa» no se hace ninguna petición a Google. Si lo pulsáis, Google puede instalar cookies en vuestro navegador para el funcionamiento y las preferencias del mapa. Podéis consultarlo en policies.google.com/technologies/cookies. Si preferís no hacerlo, al lado tenéis la dirección escrita.',
    'Si seguiu els enllaços cap a Instagram, Facebook o Google Maps, aquests serveis apliquen les seves pròpies polítiques de cookies, alienes a aquest web.':
      'Si seguís los enlaces hacia Instagram, Facebook o Google Maps, estos servicios aplican sus propias políticas de cookies, ajenas a esta web.',
    '4. Com desactivar-les': '4. Cómo desactivarlas',
    'Com que aquest web no n\'instal·la cap, no hi ha res a desactivar. Si heu carregat el mapa i voleu esborrar el que hagi deixat Google, podeu fer-ho des de la configuració del vostre navegador (Chrome, Firefox, Safari, Edge). No afecta la resta del web.':
      'Como esta web no instala ninguna, no hay nada que desactivar. Si habéis cargado el mapa y queréis borrar lo que haya dejado Google, podéis hacerlo desde la configuración de vuestro navegador (Chrome, Firefox, Safari, Edge). No afecta al resto de la web.',
    '5. Canvis en aquesta política': '5. Cambios en esta política',
    'Si en el futur incorporem eines d\'analítica, publicitat o reserva en línia, actualitzarem aquesta pàgina i us demanarem el consentiment previ mitjançant un avís de cookies.':
      'Si en el futuro incorporamos herramientas de analítica, publicidad o reserva en línea, actualizaremos esta página y os pediremos el consentimiento previo mediante un aviso de cookies.',

    /* ── Frases que munta js/main.js i js/menu-diari.js ── */
    'Aquest camp és obligatori': 'Este campo es obligatorio',
    'Reviseu l\'adreça de correu': 'Revisad la dirección de correo',
    'Enviant…': 'Enviando…',
    'No hem pogut enviar el formulari. Torneu-ho a provar o truqueu-nos al {tel}.':
      'No hemos podido enviar el formulario. Volved a probarlo o llamadnos al {tel}.',
    '<strong>Maqueta:</strong> aquest formulari encara no està connectat i no s\'enviaria enlloc. Cal posar l\'identificador de Formspree a l\'<code>action</code>. Mentrestant, el telèfon de la casa és el {tel}.':
      '<strong>Maqueta:</strong> este formulario todavía no está conectado y no se enviaría a ninguna parte. Hay que poner el identificador de Formspree en el <code>action</code>. Mientras tanto, el teléfono de la casa es el {tel}.',
    'Primers': 'Primeros',
    'Segons': 'Segundos',
    'Postres': 'Postres',
    'Encara no hem publicat el menú.': 'Todavía no hemos publicado el menú.',
    'El menú d\'aquesta setmana ja ha passat i encara no hem penjat el de la setmana vinent.':
      'El menú de esta semana ya ha pasado y todavía no hemos colgado el de la semana que viene.',
    'Avui, {data}': 'Hoy, {data}',
    'Pròxim menú · {data}': 'Próximo menú · {data}',
    'El menú del dia es carrega quan la web és en un servidor.':
      'El menú del día se carga cuando la web está en un servidor.',
    'Ara mateix no podem mostrar el menú del dia.':
      'Ahora mismo no podemos mostrar el menú del día.',
    'Truqueu-nos al {tel} i us diem què hi ha avui.':
      'Llamadnos al {tel} y os decimos qué hay hoy.',
    /* -- La casa (la-casa.html) ---------------------------------
       «La casa» es diu igual en castella, pero hi ha de constar: si
       es deixes a la llista `igual` hauria de ser identica als tres
       idiomes, i en angles no ho es. */
    'La casa': 'La casa',
    '· La casa': '· La casa',
    'Menjar per emportar': 'Comida para llevar',
    'La casa — Restaurant La Masia, L\'Ametlla del Vallès':
      'La casa — Restaurant La Masia, L\'Ametlla del Vallès',
    'La casa — Restaurant La Masia': 'La casa — Restaurant La Masia',
    'La Masia de l\'Ametlla del Vallès per dins: qui som des del 1957, la galeria de fotografies de la casa i els quatre espais, del menjador diari al Saló Nou de 200 places.':
      'La Masia de L\'Ametlla del Vallès por dentro: quiénes somos desde 1957, la galería de fotografías de la casa y los cuatro espacios, del comedor diario al Saló Nou de 200 plazas.',
    'Qui som des del 1957, la galeria de la casa i els quatre espais del Restaurant La Masia, a l\'Ametlla del Vallès.':
      'Quiénes somos desde 1957, la galería de la casa y los cuatro espacios del Restaurant La Masia, en L\'Ametlla del Vallès.',
    'Qui som, com és la casa per dins i quins espais hi ha. Des del 1957, al carrer de la Torregassa.':
      'Quiénes somos, cómo es la casa por dentro y qué espacios hay. Desde 1957, en el carrer de la Torregassa.',
    'I al costat del menjador, quatre espais on el poble ha celebrat comunions, bateigs i aniversaris de noces durant generacions. Hi ha famílies que hi han fet la comunió dels fills i, anys després, la dels néts.':
      'Y al lado del comedor, cuatro espacios donde el pueblo ha celebrado comuniones, bautizos y aniversarios de boda durante generaciones. Hay familias que aquí han hecho la comunión de los hijos y, años después, la de los nietos.',
    'Quatre espais': 'Cuatro espacios',
    'La façana de La Masia al capvespre, amb els llums encesos':
      'La fachada de La Masia al atardecer, con las luces encendidas',

    /* Galeria */
    'La casa en fotografies': 'La casa en fotografías',
    'Com és per dins': 'Cómo es por dentro',
    'La façana, les sales i alguns dels plats que hi surten. Premeu qualsevol fotografia per veure-la gran.':
      'La fachada, las salas y algunos de los platos que salen. Pulsad cualquier fotografía para verla grande.',
    'L\'entrada, amb la terrassa parada': 'La entrada, con la terraza puesta',
    'Una taula del menjador': 'Una mesa del comedor',
    'Muntatge de celebració': 'Montaje de celebración',
    'Una de les paelles de la casa': 'Una de las paellas de la casa',
    'Un plat de verdures de temporada': 'Un plato de verduras de temporada',
    'Taula llarga, parada per a un àpat': 'Mesa larga, puesta para una comida',
    'L\'entrada de La Masia de nit, amb les taules de la terrassa':
      'La entrada de La Masia de noche, con las mesas de la terraza',
    'Una taula parada, amb el tovalló doblegat sobre el plat':
      'Una mesa puesta, con la servilleta doblada sobre el plato',
    'Cadires vestides de blanc amb un ram, preparades per a una celebració':
      'Sillas vestidas de blanco con un ramo, preparadas para una celebración',
    'Una paella acabada de fer, a la paella de ferro':
      'Una paella recién hecha, en la paellera de hierro',
    'Amanida amb làmines de carbassó i verdures':
      'Ensalada con láminas de calabacín y verduras',
    'Taula llarga parada amb copes i centres de flors':
      'Mesa larga puesta con copas y centros de flores',
    /* Els controls del visor de la galeria (js/galeria.js) */
    'Galeria de fotografies': 'Galería de fotografías',
    'Tancar la fotografia': 'Cerrar la fotografía',
    'Fotografia anterior': 'Fotografía anterior',
    'Fotografia següent': 'Fotografía siguiente',

    /* Els espais */
    'Quatre sales sota el mateix sostre': 'Cuatro salas bajo el mismo techo',
    'El menjador de cada dia i tres sales més que s\'obren segons quants sereu. Si voleu saber quina us encaixa, el cercador de Celebracions us ho diu en deu segons.':
      'El comedor de cada día y tres salas más que se abren según cuántos seáis. Si queréis saber cuál os encaja, el buscador de Celebraciones os lo dice en diez segundos.',
    'Anar al cercador d\'espais →': 'Ir al buscador de espacios →',
    'El més gran de la casa, i el que fa que a l\'Ametlla se sàpiga on es fan les comunions. Hi caben les taules rodones de deu i queda espai al mig; és la sala de les celebracions de poble senceres.':
      'El más grande de la casa, y el que hace que en L\'Ametlla se sepa dónde se hacen las comuniones. Caben las mesas redondas de diez y queda espacio en medio; es la sala de las celebraciones de pueblo entero.',
    'El menjador de sempre: el que trobareu obert qualsevol dia de la setmana, amb les finestres d\'arc que donen al jardí. Aquí no cal reservar sala, només taula.':
      'El comedor de siempre: el que encontraréis abierto cualquier día de la semana, con las ventanas de arco que dan al jardín. Aquí no hace falta reservar sala, solo mesa.',
    'La sala del mig. Per a celebracions que volen porta pròpia i no omplirien el Saló Nou: bateigs, aniversaris de noces, dinars d\'empresa grans.':
      'La sala del medio. Para celebraciones que quieren puerta propia y no llenarían el Saló Nou: bautizos, aniversarios de boda, comidas de empresa grandes.',
    'El reservat. Una taula tancada i una porta: dinars de feina, sopars de família i tot el que demana parlar sense la sala al costat.':
      'El reservado. Una mesa cerrada y una puerta: comidas de trabajo, cenas de familia y todo lo que pide hablar sin la sala al lado.',
    'Quin espai us encaixa?': '¿Qué espacio os encaja?',
    'Millor en persona': 'Mejor en persona',
    'Veniu a veure la casa': 'Venid a ver la casa',

    /* -- La porta cap a «La casa», a la portada -- */
    'Qui som, la galeria de fotografies i els quatre espais de La Masia, del reservat de 20 places al Saló Nou de 200.':
      'Quiénes somos, la galería de fotografías y los cuatro espacios de La Masia, del reservado de 20 plazas al Saló Nou de 200.',
    'Entrar a la casa →': 'Entrar en la casa →',

    /* -- Per emportar (carta.html#per-emportar) -- */
    'Com funciona →': 'Cómo funciona →',
    'La casa, a casa vostra': 'La casa, en vuestra casa',
    'De dilluns a diumenge. Qualsevol plat de la carta i del menú diari se\'l poden endur, amb els mateixos preus que a taula.':
      'De lunes a domingo. Cualquier plato de la carta y del menú diario os lo podéis llevar, con los mismos precios que en mesa.',
    'Trieu els plats': 'Elegid los platos',
    'Qualsevol plat de la carta o del menú del dia.':
      'Cualquier plato de la carta o del menú del día.',
    'Truqueu-nos': 'Llamadnos',
    'Al 938 43 00 02. Digueu-nos a quina hora ho passareu a buscar.':
      'Al 938 43 00 02. Decidnos a qué hora lo pasaréis a recoger.',
    'Veniu a buscar-ho': 'Venid a recogerlo',
    'Al carrer de la Torregassa, 77. Ho tindrem a punt a l\'hora que ens digueu.':
      'En el carrer de la Torregassa, 77. Lo tendremos listo a la hora que nos digáis.',
    'Veure la carta →': 'Ver la carta →',
    'Veure el menú del dia →': 'Ver el menú del día →',
    'Les comandes es fan per telèfon. Truqueu-nos amb una mica d\'antelació —mitja hora per a un plat, més si sou colla— i us ho preparem.':
      'Los pedidos se hacen por teléfono. Llamadnos con un poco de antelación —media hora para un plato, más si sois cuadrilla— y os lo preparamos.',
    'De dilluns a dissabte de 9:00 a 00:00 i diumenge de 9:00 a 18:00.':
      'De lunes a sábado de 9:00 a 00:00 y domingo de 9:00 a 18:00.',

    /* -- Contacte -- */
    'Veure el mapa': 'Ver el mapa',  },

  /* ═══════════════════════════════════════════════════════════════
     ANGLÈS
     ═══════════════════════════════════════════════════════════════ */
  en: {

    /* ── Barra de dalt, peu i coses de totes les pàgines ── */
    'Vés al contingut': 'Skip to content',
    'Restaurant La Masia — inici': 'Restaurant La Masia — home',
    'Navegació principal': 'Main navigation',
    'Obrir el menú': 'Open the menu',
    'Idioma de la pàgina': 'Page language',
    'Idioma': 'Language',
    'Inici': 'Home',
    'La carta': 'Menu',
    'Celebracions': 'Celebrations',
    'Contacte': 'Contact',
    'Informació i reserves': 'Information & bookings',
    'Reservar taula': 'Book a table',
    'Demanar pressupost': 'Request a quote',
    'Trucar ara': 'Call now',
    'Trucar': 'Call',
    'Reservar': 'Book',
    'Trucar — 938 43 00 02': 'Call — 938 43 00 02',
    'Cuina catalana i de mercat a l\'entrada de l\'Ametlla del Vallès, des del 1957.':
      'Catalan market cooking at the entrance to L\'Ametlla del Vallès, since 1957.',
    'Pàgines': 'Pages',
    'Contacte i reserves': 'Contact & bookings',
    'Qui som': 'About us',
    'Seguiu-nos': 'Follow us',
    'Pàgines legals': 'Legal pages',
    'Avís legal': 'Legal notice',
    'Privacitat': 'Privacy',
    'Cookies': 'Cookies',

    /* ── Inici ── */
    'Restaurant La Masia — Cuina catalana i de mercat a l\'Ametlla del Vallès':
      'Restaurant La Masia — Catalan market cooking in L\'Ametlla del Vallès',
    'Restaurant La Masia, a l\'entrada de l\'Ametlla del Vallès des del 1957. Cuina catalana i de mercat, menú diari, per emportar i quatre salons per a celebracions de fins a 200 persones.':
      'Restaurant La Masia, at the entrance to L\'Ametlla del Vallès since 1957. Catalan market cooking, a daily set menu, takeaway, and four function rooms for celebrations of up to 200 guests.',
    'Una masia a l\'entrada de l\'Ametlla del Vallès des del 1957. Cuina catalana i de mercat i quatre salons per a celebracions.':
      'A Catalan farmhouse at the entrance to L\'Ametlla del Vallès since 1957. Catalan market cooking and four function rooms for celebrations.',

    'Des del 1957 · L\'Ametlla del Vallès': 'Since 1957 · L\'Ametlla del Vallès',
    'Cuina catalana i de mercat': 'Catalan market cooking',
    'Una masia a l\'entrada del poble, oberta des del 1957. Taula per a cada dia i quatre salons on l\'Ametlla fa les seves celebracions.':
      'A Catalan farmhouse at the entrance to the village, open since 1957. A table for every day, and four function rooms where L\'Ametlla holds its celebrations.',
    'Veure la carta': 'See the menu',

    'La Masia en xifres': 'La Masia in figures',
    'Des de l\'any': 'Open since',
    'ressenyes a Google': 'Google reviews',
    'Fins a 200 comensals': 'Up to 200 guests',
    '4 salons': '4 rooms',
    'Obert de dilluns a diumenge': 'Open Monday to Sunday',
    'Cada dia': 'Every day',

    'Què veniu a fer?': 'What brings you here?',
    'Dinar avui o preparar el gran dia': 'Lunch today, or planning the big day',
    'La carta i el menú diari': 'The menu and the daily set menu',
    'Entrants freds i calents, arrossos, peixos i carns. Menú diari de dilluns a divendres i menjar per emportar tots els dies de la setmana.':
      'Cold and hot starters, rice dishes, fish and meat. A daily set menu Monday to Friday, and takeaway every day of the week.',
    'Veure la carta →': 'See the menu →',
    'Comunions, bateigs, noces i empresa':
      'Communions, christenings, weddings and company events',
    'Quatre salons de capacitats diferents, del reservat de 20 places al Saló Nou de 200. Digueu-nos quants sereu i us diem quin espai us va bé.':
      'Four rooms of different sizes, from the 20-seat private room to the 200-seat Saló Nou. Tell us how many you\'ll be and we\'ll tell you which one fits.',
    'Trobar el vostre espai →': 'Find your room →',

    'Seixanta-nou anys a la mateixa casa': 'Sixty-nine years in the same house',
    'La Masia és a l\'entrada de l\'Ametlla del Vallès, al carrer de la Torregassa. Va obrir el 1957 i des d\'aleshores fa el mateix: cuina catalana i de mercat, feta cada dia.':
      'La Masia stands at the entrance to L\'Ametlla del Vallès, on Carrer de la Torregassa. It opened in 1957 and has done the same thing ever since: Catalan market cooking, made fresh every day.',
    'A la carta hi ha els plats que la casa no ha canviat mai —els canelons de l\'àvia, el filet de vedella a l\'estil Roca— i els que van i venen amb la temporada: els calçots, els rossinyols, les trompetes de la mort.':
      'The menu holds the dishes this house has never changed — grandmother\'s cannelloni, the beef fillet Roca style — and the ones that come and go with the season: calçots, chanterelles, black trumpet mushrooms.',
    'I al costat del menjador, quatre salons on el poble ha celebrat comunions, bateigs i aniversaris de noces durant generacions.':
      'And beside the dining room, four function rooms where the village has held its communions, christenings and wedding anniversaries for generations.',
    'El menjador de La Masia': 'The dining room at La Masia',
    'Cuina de mercat': 'Market cooking',
    'Gamba de Palamós, cloïsses de Carril, botifarra de La Garriga.':
      'Palamós prawns, Carril clams, botifarra sausage from La Garriga.',
    'Quatre salons': 'Four rooms',
    'Del reservat de 20 places al Saló Nou de 200.':
      'From the 20-seat private room to the 200-seat Saló Nou.',

    'Tres plats que ens demanen sempre': 'Three dishes people always order',
    'El plat que més surt a les ressenyes de Google. Mínim 2 persones.':
      'The dish that comes up most in the Google reviews. Minimum 2 people.',
    'Un dels sis arrossos i pastes de la carta, amb la paella de llamàntol.':
      'One of the six rice and pasta dishes on the menu, alongside the lobster paella.',
    'Els de sempre. Hi ha també la versió de verdures amb beixamel.':
      'The same as ever. There is a vegetable version with béchamel too.',
    'La carta sencera': 'The full menu',

    'Prova social': 'What our guests say',
    'El que en diu la gent': 'In their own words',
    'Mitjana de': 'Average of',
    'ressenyes a Google.': 'Google reviews.',
    'El restaurant amb més ressenyes de l\'Ametlla del Vallès.':
      'The restaurant with the most reviews in L\'Ametlla del Vallès.',
    'Veure-les a Google →': 'Read them on Google →',
    'Valoració: 5 sobre 5': 'Rating: 5 out of 5',
    'Valoració: 4 sobre 5': 'Rating: 4 out of 5',
    'Traducció de la ressenya original en català':
      'Translated from the original review in Catalan',
    '«Restaurant emblemàtic, de tota la vida. Sempre és un plaer anar-hi i degustar els seus plats, en especial el filet a l\'estil Roca i els seus calamars a l\'andalusa (els millors que he provat). El servei també és fantàstic.»':
      '“An institution, one of the classics. It is always a pleasure to go and taste their dishes, especially the fillet Roca style and their Andalusian-style fried squid (the best I have tried). The service is fantastic too.”',
    '«Un clàssic a L\'Ametlla del Vallès. Restaurant ubicat en un lloc excel·lent amb aparcament propi. El menjador ampli i agradable, tot molt net i endreçat.»':
      '“A classic in L\'Ametlla del Vallès. The restaurant is in an excellent spot with its own car park. The dining room is roomy and pleasant, everything very clean and tidy.”',
    '«Un restaurant de tota la vida. Manté la esencia. Cambrers professionals i menjar ben elaborat. Menú en dies laborables. Aparcament per cotxes al mateix restaurant.»':
      '“A restaurant of the old school. It keeps its essence. Professional waiters and well-made food. Set menu on weekdays. Car parking at the restaurant itself.”',

    'On som': 'Where we are',
    'A l\'entrada del poble': 'At the entrance to the village',
    'Adreça': 'Address',
    'Telèfon — reserves': 'Phone — bookings',
    'Seguiu-nos a Instagram': 'Follow us on Instagram',
    'Horaris': 'Opening hours',
    'Dilluns a dissabte': 'Monday to Saturday',
    'Trucar per reservar': 'Call to book',
    'Com arribar': 'How to get here',
    'Mapa: Restaurant La Masia, carrer de la Torregassa 77, L\'Ametlla del Vallès':
      'Map: Restaurant La Masia, Carrer de la Torregassa 77, L\'Ametlla del Vallès',
    'El mapa el serveix Google. Si el carregueu, Google podrà posar galetes al vostre navegador.':
      'The map is served by Google. If you load it, Google may place cookies in your browser.',
    'Carregar el mapa': 'Load the map',

    /* ── La carta ── */
    'La carta — Restaurant La Masia, L\'Ametlla del Vallès':
      'Menu — Restaurant La Masia, L\'Ametlla del Vallès',
    'La carta del Restaurant La Masia: entrants freds i calents, arrossos i pastes, plats de temporada, vegetarians, peixos i carns. Menú diari i menjar per emportar cada dia.':
      'The menu at Restaurant La Masia: cold and hot starters, rice and pasta, seasonal dishes, vegetarian options, fish and meat. Daily set menu and takeaway every day.',
    'La carta — Restaurant La Masia': 'Menu — Restaurant La Masia',
    'Entrants, arrossos, peixos i carns de cuina catalana i de mercat. Menú diari i menjar per emportar.':
      'Starters, rice dishes, fish and meat — Catalan market cooking. Daily set menu and takeaway.',
    '· La carta': '· Menu',
    'Cuina catalana i de mercat. Els plats de sempre i els que van i venen amb la temporada.':
      'Catalan market cooking. The dishes that never change, and the ones that come and go with the season.',
    'Set apartats, quaranta-set plats': 'Seven sections, forty-seven dishes',
    'Apartats de la carta': 'Menu sections',
    'Tots els plats': 'All dishes',
    'Entrants freds': 'Cold starters',
    'Entrants calents': 'Hot starters',
    'Arrossos i pastes': 'Rice and pasta',
    'De temporada': 'Seasonal',
    'Vegetarians i vegans': 'Vegetarian & vegan',
    'Peixos': 'Fish',
    'Carns': 'Meat',
    'Plats de temporada': 'Seasonal dishes',
    'Plats vegetarians i vegans': 'Vegetarian and vegan dishes',
    '9 plats': '9 dishes',
    '11 plats': '11 dishes',
    '6 plats': '6 dishes',
    '4 plats': '4 dishes',
    '3 plats': '3 dishes',
    '7 plats': '7 dishes',
    'Sense gluten': 'Gluten free',

    /* Els plats: el nom de casa es manté i, quan en anglès no diria res,
       s'hi posa a continuació què és. Cap plat s'ha «arreglat». */
    'Amanida de llagostins i favetes amb panses, pinyons i vinagreta de soja':
      'King prawn and baby broad bean salad with raisins, pine nuts and soy vinaigrette',
    'Amanida de canonges amb mango, melmelada de maduixa, fruits secs i parmesà':
      'Lamb\'s lettuce salad with mango, strawberry jam, nuts and Parmesan',
    'Carpaccio de bacallà amb gelée de tomàquet i oli d\'oliva negra':
      'Salt cod carpaccio with tomato jelly and black olive oil',
    'Carpaccio de tonyina amb ruca i soja': 'Tuna carpaccio with rocket and soy',
    'Carpaccio de gamba de Palamós amb daus de tomàquet, pinyons i alfàbrega':
      'Palamós prawn carpaccio with diced tomato, pine nuts and basil',
    'Anxoves de Santoña amb oli verge d\'oliva i coca torrada':
      'Santoña anchovies with virgin olive oil and toasted coca flatbread',
    'Favetes amanides a la menta amb pernil':
      'Baby broad beans dressed with mint, with cured ham',
    'Pernil Jabugo de glà tallat a mà amb coca torrada':
      'Hand-carved acorn-fed Jabugo ham with toasted coca flatbread',
    'Falses trufes de foie amb trompetes de la mort i confitura de ceba':
      'Foie gras “truffles” with black trumpet mushrooms and onion jam',

    'Entreteniments de la casa': 'The house selection of nibbles',
    'Pernil, anxoves, coca torrada, salpicó de marisc, croquetes, calamars a la romana i xurros de patata i tòfona':
      'Cured ham, anchovies, toasted coca flatbread, seafood salpicón, croquettes, battered squid, and potato and truffle churros',
    'Cuetes de llagostins amb compota de tomàquet i oli de festuc':
      'King prawn tails with tomato compote and pistachio oil',
    'Favetes amb gambes de Palamós i rossinyols':
      'Baby broad beans with Palamós prawns and chanterelles',
    'Mongetes del ganxet saltejades amb carn de botifarra i bolets':
      'Sautéed ganxet beans with botifarra sausage meat and wild mushrooms',
    'Xipirons amb ceba i tomàquet': 'Baby squid with onion and tomato',
    'Xipirons fregits': 'Fried baby squid',
    'Saltejat de calamars i espàrrecs amb tomàquet, oli d\'alfàbrega i olivada negra':
      'Sautéed squid and asparagus with tomato, basil oil and black olive tapenade',
    'Verdures de temporada a la brasa amb romesco casolà':
      'Char-grilled seasonal vegetables with homemade romesco sauce',
    'Pop amb crema de patata i oli de guindilla':
      'Octopus with potato cream and chilli oil',
    'Calamars a la romana': 'Battered fried squid',
    'Les nostres croquetes de pernil': 'Our ham croquettes',

    'Arrossejat d\'escamarlans': 'Arrossejat — fried rice in fish stock — with langoustines',
    'Paella de peix i marisc': 'Fish and seafood paella',
    'Paella de llamàntol': 'Lobster paella',
    'Fideuà': 'Fideuà — the same as paella, made with short noodles',
    'Canelons de l\'àvia': 'Grandmother\'s cannelloni',
    'Macarrons a la bolonyesa gratinats': 'Baked macaroni bolognese',

    'Caneló de llamàntol amb pasta fresca i salsa de gamba de Palamós':
      'Lobster cannellone with fresh pasta and Palamós prawn sauce',
    'Només caps de setmana': 'Weekends only',
    'Parmentier de patata amb xips de carxofa i oli de pernil':
      'Potato parmentier with artichoke crisps and cured ham oil',
    'Calçots nets arrebossats amb romesco casolà':
      'Battered calçots — Catalan sweet spring onions — with homemade romesco sauce',
    'Carpaccio de peus de porc gratinats amb parmesà, poma confitada i pinyons':
      'Pig\'s trotter carpaccio glazed with Parmesan, confit apple and pine nuts',

    'Canelons de verdures amb beixamel gratinats':
      'Baked vegetable cannelloni with béchamel',
    'Croquetes de verdures': 'Vegetable croquettes',
    'Croquetes d\'heura, pastanaga i shiitake': 'Ivy, carrot and shiitake croquettes',

    'Tonyina vermella saltejada amb verdures i soja':
      'Sautéed bluefin tuna with vegetables and soy',
    'Suprema de lluç del Cantàbric amb crema de porros':
      'Supreme of Cantabrian hake with leek cream',
    'Suprema de llobarro salvatge al fonoll':
      'Supreme of wild sea bass with fennel',
    'Cloïsses a la marinera': 'Clams a la marinera',
    'De Carril': 'From Carril',
    'Suquet de rap a l\'estil Roca amb cloïsses i llagostins':
      'Monkfish suquet — Catalan fish stew — Roca style, with clams and king prawns',
    'Escamarlans a la planxa': 'Griddled langoustines',
    'Llenguado Barretti': 'Sole Barretti',
    'Fruits secs i taronja': 'Nuts and orange',

    'Filet de vedella a l\'estil Roca': 'Beef fillet, Roca style',
    'Mínim 2 persones': 'Minimum 2 people',
    'Filet de vedella amb foie fresc i salsa d\'Oporto':
      'Beef fillet with fresh foie gras and Port sauce',
    'Filet de vedella amb salsa de tòfones': 'Beef fillet with truffle sauce',
    'Espatlla de cabrit rostida al forn': 'Oven-roasted shoulder of kid goat',
    'Mitjanes i costella de xai a la brasa': 'Char-grilled lamb loin chops and ribs',
    'Magret d\'ànec amb salsa de maduixes': 'Duck magret with strawberry sauce',
    'Botifarra de La Garriga a la brasa':
      'Char-grilled botifarra sausage from La Garriga',

    'Al·lèrgies i intoleràncies:': 'Allergies and intolerances:',
    'aviseu-nos en reservar o en arribar i us direm plat per plat què podeu menjar. Els distintius d\'aquesta carta són orientatius; la informació bona és la que us donarem a taula.':
      'let us know when you book or when you arrive and we will go through the menu with you dish by dish. The markings on this menu are a guide; the reliable information is what we tell you at the table.',

    'El menú diari': 'The daily set menu',
    'De dilluns a divendres al migdia. El publiquem aquí mateix, i també a Instagram i a Facebook.':
      'Monday to Friday at lunchtime. We post it right here, and on Instagram and Facebook too.',
    'Veure el menú d\'avui →': 'See today\'s set menu →',
    'Plat del menú diari de La Masia': 'A dish from the daily set menu at La Masia',
    'Per emportar': 'Takeaway',
    'De dilluns a diumenge': 'Monday to Sunday',
    'Podeu endur-vos qualsevol plat de la carta i del menú diari. Truqueu-nos amb una mica d\'antelació i us ho tenim a punt.':
      'You can take away any dish from the menu or the daily set menu. Call us a little in advance and we will have it ready.',
    'Encarregar per telèfon →': 'Order by phone →',
    'Paella feta a La Masia': 'Paella made at La Masia',
    'Cada dia, de dilluns a divendres': 'Every day, Monday to Friday',
    'El menú del dia': 'The set menu of the day',
    'Consulteu el menú d\'avui trucant-nos o a les nostres xarxes.':
      'Check today\'s set menu by calling us, or on our social media.',
    'Truqueu-nos al': 'Call us on',
    'i us diem què hi ha avui.': 'and we will tell you what is on today.',
    'També a Instagram': 'Also on Instagram',
    'També oferim': 'We also do',
    'Menús per a celebracions i grups': 'Menus for celebrations and groups',
    'Per a comunions, bateigs, aniversaris de noces i dinars d\'empresa fem menús a part, adaptats al que necessiteu i al saló que trieu.':
      'For communions, christenings, wedding anniversaries and company lunches we put together separate menus, tailored to what you need and to the room you choose.',
    'Veure els salons': 'See the rooms',

    /* ── Celebracions ── */
    'Celebracions i salons — Restaurant La Masia, L\'Ametlla del Vallès':
      'Celebrations and function rooms — Restaurant La Masia, L\'Ametlla del Vallès',
    'Quatre salons per a celebracions a l\'Ametlla del Vallès: comunions, bateigs, aniversaris de noces i dinars d\'empresa. Del reservat de 20 places al Saló Nou de 200. Demaneu pressupost.':
      'Four function rooms for celebrations in L\'Ametlla del Vallès: communions, christenings, wedding anniversaries and company lunches. From the 20-seat private room to the 200-seat Saló Nou. Ask us for a quote.',
    'Celebracions i salons — Restaurant La Masia':
      'Celebrations and function rooms — Restaurant La Masia',
    'Quatre salons de fins a 200 places per a comunions, bateigs, aniversaris de noces i empresa, a l\'Ametlla del Vallès.':
      'Four function rooms seating up to 200, for communions, christenings, wedding anniversaries and company events, in L\'Ametlla del Vallès.',
    '· Celebracions': '· Celebrations',
    'Comunions, bateigs, aniversaris de noces i dinars d\'empresa. Quatre salons de capacitats diferents, a l\'entrada de l\'Ametlla del Vallès.':
      'Communions, christenings, wedding anniversaries and company lunches. Four rooms of different sizes, at the entrance to L\'Ametlla del Vallès.',

    'Comencem pel principi': 'Let\'s start at the beginning',
    'Quin espai us cal?': 'Which room do you need?',
    'Moveu el comptador i us diem quin dels nostres salons us encaixa. Sense trucar ni esperar resposta.':
      'Move the slider and we will tell you which of our rooms fits. No phone call, no waiting for an answer.',
    'Quants sereu?': 'How many of you?',
    'comensals': 'guests',
    'Quin tipus de celebració?': 'What kind of celebration?',
    'Comunió': 'Communion',
    'Bateig': 'Christening',
    'Aniversari de noces': 'Wedding anniversary',
    'Empresa': 'Company',
    'Àpat familiar': 'Family meal',
    'Dinar d\'empresa': 'Company lunch',
    'Altres': 'Other',
    'Moveu el comptador per veure quins salons us encaixen.':
      'Move the slider to see which rooms fit.',

    'Demaneu-nos preu': 'Ask us for a price',
    'Us fem una proposta sense compromís':
      'We will put together a proposal, with no obligation',
    'Ompliu-ho i us truquem. Si ho preferiu, truqueu-nos vosaltres al':
      'Fill this in and we will call you. If you would rather, call us on',
    '— de dilluns a dissabte de 9:00 a 00:00 i diumenge de 9:00 a 18:00.':
      '— Monday to Saturday 9:00–00:00 and Sunday 9:00–18:00.',
    'Veniu a veure els salons': 'Come and see the rooms',
    'Nom i cognoms': 'Full name',
    'Telèfon': 'Phone',
    'Correu': 'Email',
    '(opcional)': '(optional)',
    'Tipus de celebració': 'Type of celebration',
    'Trieu-ne un…': 'Choose one…',
    'Per exemple, 90': 'For example, 90',
    'Saló': 'Room',
    '(digueu abans quants sereu)': '(tell us how many first)',
    'Data aproximada': 'Approximate date',
    'Expliqueu-nos què us imagineu': 'Tell us what you have in mind',
    'En enviar-ho accepteu la nostra': 'By sending this you accept our',
    'política de privacitat': 'privacy policy',
    '. Les dades només s\'usen per respondre-us.':
      '. We only use your details to reply to you.',
    'Rebut, gràcies': 'Got it, thank you',
    'Us truquem nosaltres al número que ens heu deixat. Si teniu pressa, truqueu-nos al':
      'We will call you on the number you left us. If you are in a hurry, call us on',

    'Els espais': 'The rooms',
    'Els nostres quatre salons': 'Our four function rooms',
    'El Saló Nou amb les taules rodones parades':
      'The Saló Nou with the round tables laid',
    'Fins a 200 persones': 'Up to 200 people',
    'El més gran de la casa. Per a comunions i celebracions de poble senceres.':
      'The largest in the house. For communions and celebrations that fill the village.',
    'Menjador diari': 'Main dining room',
    'El menjador diari, amb les finestres d\'arc':
      'The main dining room, with its arched windows',
    'Fins a 110 persones': 'Up to 110 people',
    'El menjador de sempre, el que trobareu obert qualsevol dia de la setmana.':
      'The everyday dining room, the one you will find open any day of the week.',
    'El Saló Bosc parat per a un banquet': 'The Saló Bosc laid for a banquet',
    'Fins a 100 persones': 'Up to 100 people',
    'Per a celebracions mitjanes que volen sala pròpia sense ser massa grans.':
      'For medium-sized celebrations that want a room of their own without being too big.',
    'Saló privat': 'Private room',
    'El saló privat, amb la taula parada': 'The private room, with the table laid',
    'Màxim 20 persones': 'Maximum 20 people',
    'El reservat. Per a dinars d\'empresa, sopars de família i taules tancades.':
      'The snug. For company lunches, family dinners and tables kept to yourselves.',

    'Com ho fem': 'How we do it',
    'Els menús els fem amb vosaltres': 'We build the menus with you',
    'No tenim tres menús tancats en una llista. Ens expliqueu quants sereu, quin dia i què us imagineu, i us preparem una proposta amb preu. Si voleu, veniu a veure els salons abans de decidir res.':
      'We do not have three fixed menus on a list. You tell us how many you will be, which day, and what you have in mind, and we prepare a proposal with a price. If you like, come and see the rooms before deciding anything.',
    'Comunions i bateigs': 'Communions and christenings',
    'Menús per a adults i per a la canalla, i espai per córrer.':
      'Menus for grown-ups and for the children, and room to run around.',
    'Aniversaris de noces': 'Wedding anniversaries',
    'Els 25 i els 50 anys de casats, que a la casa es fan des de fa dècades.':
      'Silver and golden weddings, which this house has been hosting for decades.',
    'Dinars de feina i sopars de Nadal, al reservat o a la sala sencera.':
      'Working lunches and Christmas dinners, in the private room or the whole hall.',
    'Àpats de família': 'Family gatherings',
    'Aniversaris i retrobaments, del reservat de 20 al saló de 200.':
      'Birthdays and reunions, from the 20-seat private room to the 200-seat hall.',
    'Ja ho teniu clar?': 'Ready to go ahead?',
    'Digueu-nos quants sereu i us fem preu':
      'Tell us how many you will be and we will quote you',

    /* Frases que munta js/espais.js */
    'Digueu abans quants sereu': 'Tell us how many first',
    '{sala} — fins a {n} persones': '{sala} — up to {n} people',
    '{sala} — fins a {n} persones (no hi cabeu)': '{sala} — up to {n} people (too small)',
    'Per a {n} persones cal que en parlem: truqueu-nos al 938 43 00 02.':
      'For {n} people we should talk it through: call us on 938 43 00 02.',
    'Massa petit per a {n} persones': 'Too small for {n} people',
    'Hi cabeu, però us quedarà gran': 'You would fit, but it will feel too big',
    '✓ Us encaixa': '✓ This one fits',
    /* Va darrere de «For 60 people…»: si aquí hi digués «for», la frase
       diria «For 60 people for a communion». «at» és el que hi diria
       qualsevol: «for 60 people at a communion». */
    'per a comunió': 'at a communion',
    'per a bateig': 'at a christening',
    'per a aniversari de noces': 'at a wedding anniversary',
    'per a dinar d\'empresa': 'at a company lunch',
    'per a àpat familiar': 'at a family meal',
    'Per a <strong>{n} persones</strong>{perA} cal que en parlem: combinem sales o busquem una data amb el restaurant per a vosaltres sols. Truqueu-nos al <strong>938 43 00 02</strong>.':
      'For <strong>{n} people</strong>{perA} we should talk it through: we can combine rooms, or find a date with the restaurant all to yourselves. Call us on <strong>938 43 00 02</strong>.',
    'Per a <strong>{n} persones</strong>{perA} us recomanem el <strong>{sala}</strong>.':
      'For <strong>{n} people</strong>{perA} we recommend the <strong>{sala}</strong>.',
    'Per a <strong>{n} persones</strong>{perA} teniu <strong>{k} espais</strong> possibles: {llista} i {darrer}.':
      'For <strong>{n} people</strong>{perA} you have <strong>{k} rooms</strong> to choose from: {llista} and {darrer}.',

    /* ── Contacte ── */
    'Contacte i reserves — Restaurant La Masia, L\'Ametlla del Vallès':
      'Contact and bookings — Restaurant La Masia, L\'Ametlla del Vallès',
    'Reserveu taula al Restaurant La Masia: 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès. Horaris, com arribar i preguntes freqüents.':
      'Book a table at Restaurant La Masia: 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès. Opening hours, how to get here, and frequently asked questions.',
    'Contacte i reserves — Restaurant La Masia':
      'Contact and bookings — Restaurant La Masia',
    'Reserveu taula al 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès.':
      'Book a table on 938 43 00 02. Carrer de la Torregassa, 77, L\'Ametlla del Vallès.',
    '· Contacte': '· Contact',
    'Reserves i contacte': 'Bookings and contact',
    'La manera més ràpida': 'The quickest way',
    'Truqueu-nos al restaurant': 'Call the restaurant',
    'Les reserves les confirmem per telèfon. És l\'única manera que tenim de dir-vos del cert que la taula queda apuntada.':
      'We confirm bookings by phone. It is the only way we can tell you for certain that your table is in the book.',
    'Dilluns': 'Monday',
    'Dimarts': 'Tuesday',
    'Dimecres': 'Wednesday',
    'Dijous': 'Thursday',
    'Divendres': 'Friday',
    'Dissabte': 'Saturday',
    'Diumenge': 'Sunday',
    'O escriviu-nos': 'Or write to us',
    'Consulta': 'Enquiry',
    'Això és una consulta, no una reserva.': 'This is an enquiry, not a booking.',
    'Us respondrem, però la taula només queda apuntada quan ens truqueu.':
      'We will reply, but your table is only booked once you call us.',
    'Quin dia?': 'Which day?',
    'La vostra consulta': 'Your enquiry',
    'Enviar la consulta': 'Send the enquiry',
    'Us respondrem al més aviat possible. Recordeu que per reservar taula cal que ens truqueu al':
      'We will get back to you as soon as we can. Remember that to book a table you need to call us on',
    'A l\'entrada de l\'Ametlla del Vallès': 'At the entrance to L\'Ametlla del Vallès',
    'Obrir a Google Maps': 'Open in Google Maps',
    'Dubtes': 'Good to know',
    'Preguntes que ens feu sovint': 'Questions we are often asked',
    'Cal reservar taula?': 'Do I need to book?',
    'Per dinar entre setmana no sempre cal, però els caps de setmana i els festius sí que us ho recomanem. Les reserves es fan per telèfon, al':
      'For lunch during the week it is not always necessary, but at weekends and on public holidays we do recommend it. Bookings are made by phone, on',
    'Puc reservar per correu electrònic?': 'Can I book by email?',
    'No. Les reserves les confirmem sempre per telèfon, perquè així sabem del cert que la taula queda apuntada. Per correu responem consultes, però no bloquegem taules.':
      'No. We always confirm bookings by phone, because that way we know for certain the table is in the book. By email we answer enquiries, but we do not hold tables.',
    'Teniu opcions vegetarianes, veganes o sense gluten?':
      'Do you have vegetarian, vegan or gluten-free options?',
    'Sí. La carta té un apartat de plats vegetarians i vegans, i bona part dels plats hi surten marcats com a aptes per a celíacs. Aviseu-nos en reservar o en arribar i us ho concretem plat per plat: la informació bona sobre al·lèrgens és la que us donarem a taula.':
      'Yes. The menu has a vegetarian and vegan section, and a good many dishes are marked as suitable for coeliacs. Let us know when you book or when you arrive and we will go through it dish by dish: the reliable allergen information is what we give you at the table.',
    'Fins a quantes persones podeu acollir?': 'How many people can you seat?',
    'Tenim quatre salons: el privat per a un màxim de 20 persones, el Saló Bosc per a unes 100, el menjador diari per a 110 i el Saló Nou per a unes 200. A':
      'We have four rooms: the private one seats up to 20, the Saló Bosc about 100, the main dining room 110, and the Saló Nou about 200. On the',
    'hi ha un cercador que us diu quin us encaixa.':
      'page there is a finder that tells you which one fits.',
    'Hi ha aparcament?': 'Is there parking?',
    'Som a l\'entrada del poble, al carrer de la Torregassa. Si veniu amb un grup gran, truqueu-nos abans i us indiquem on aparcar.':
      'We are at the entrance to the village, on Carrer de la Torregassa. If you are coming with a large group, call us first and we will tell you where to park.',
    'Feu menjar per emportar?': 'Do you do takeaway?',
    'Sí, de dilluns a diumenge. Podeu endur-vos plats de la':
      'Yes, Monday to Sunday. You can take away dishes from the',
    'carta': 'menu',
    'i del menú diari. Truqueu-nos amb una mica d\'antelació i us ho tenim a punt.':
      'and from the daily set menu. Call us a little in advance and we will have it ready.',
    'On puc veure el menú d\'avui?': 'Where can I see today\'s set menu?',
    'Aquí mateix, a la pàgina de la carta': 'Right here, on the menu page',
    '. També el pengem a': '. We also post it on',
    'i a': 'and',
    '. Si un dia encara no hi és, truqueu-nos al':
      '. If it is not up yet on a given day, call us on',
    'i us diem què hi ha.': 'and we will tell you what is on.',

    /* ── Legals ── */
    'Aquesta pàgina és una traducció de cortesia. La versió catalana és la que preval.':
      'This page is a courtesy translation. The Catalan version is the one that prevails.',
    'Avís legal — Restaurant La Masia': 'Legal notice — Restaurant La Masia',
    'Avís legal del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Legal notice for Restaurant La Masia, L\'Ametlla del Vallès.',
    'Última actualització: [DATA DE PUBLICACIÓ]':
      'Last updated: [DATA DE PUBLICACIÓ]',
    '1. Identificació del titular': '1. Who owns this website',
    'En compliment de la Llei 34/2002, d\'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s\'informa que aquest lloc web és titularitat de:':
      'In compliance with Spanish Law 34/2002 of 11 July, on information society services and electronic commerce (LSSI-CE), this website is owned by:',
    'Denominació social:': 'Registered name:',
    'NIF:': 'Tax number (NIF):',
    'Domicili:': 'Registered address:',
    'Telèfon:': 'Phone:',
    'Correu electrònic:': 'Email:',
    'Dades registrals:': 'Registry details:',
    '2. Objecte': '2. Purpose',
    'Aquest lloc web té per objecte donar a conèixer el Restaurant La Masia, la seva carta, els seus espais per a celebracions i les vies de contacte i reserva.':
      'The purpose of this website is to present Restaurant La Masia, its menu, its celebration rooms, and the ways to get in touch and book.',
    '3. Condicions d\'ús': '3. Terms of use',
    'L\'accés a aquest lloc web és gratuït i implica l\'acceptació d\'aquest avís legal. L\'usuari es compromet a fer-ne un ús conforme a la llei i a no dur a terme cap activitat que en perjudiqui el funcionament.':
      'Access to this website is free of charge and implies acceptance of this legal notice. Users undertake to use it in accordance with the law and not to carry out any activity that harms its operation.',
    '4. Propietat intel·lectual i industrial': '4. Intellectual and industrial property',
    'Els continguts d\'aquest lloc web (textos, imatges, logotips, disseny i codi font) estan protegits per la normativa de propietat intel·lectual i industrial. Se\'n prohibeix la reproducció, distribució o comunicació pública sense autorització expressa del titular.':
      'The contents of this website (texts, images, logos, design and source code) are protected by intellectual and industrial property law. Their reproduction, distribution or public communication without the owner\'s express authorisation is prohibited.',
    '5. Responsabilitat': '5. Liability',
    'El titular no es fa responsable de l\'ús indegut dels continguts d\'aquest lloc web ni dels danys derivats d\'interrupcions del servei o d\'errors de tercers. La informació sobre la carta, els horaris i les capacitats dels espais és orientativa i pot variar; la informació vàlida és la que es confirma per telèfon o a l\'establiment.':
      'The owner is not liable for improper use of the contents of this website, nor for damage arising from service interruptions or third-party errors. Information about the menu, opening hours and room capacities is indicative and may change; the valid information is what is confirmed by phone or at the restaurant.',
    '6. Al·lèrgens i informació alimentària': '6. Allergens and food information',
    'Els distintius de dieta que apareixen a la carta d\'aquest web són orientatius. La informació vinculant sobre al·lèrgens i intoleràncies és la que facilita el personal del restaurant abans de servir. Aviseu-nos sempre en reservar o en arribar.':
      'The dietary markings shown on the menu on this website are indicative. The binding information on allergens and intolerances is what the restaurant staff give you before serving. Always let us know when you book or when you arrive.',
    '7. Enllaços a tercers': '7. Third-party links',
    'Aquest lloc conté enllaços a serveis de tercers (Google Maps, Instagram, Facebook). El titular no es responsabilitza dels continguts ni de les polítiques de privacitat d\'aquests serveis.':
      'This site contains links to third-party services (Google Maps, Instagram, Facebook). The owner is not responsible for the contents or the privacy policies of those services.',
    '8. Legislació aplicable': '8. Applicable law',
    'La relació entre el titular i els usuaris es regeix per la normativa espanyola vigent. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin segons la normativa de consumidors.':
      'The relationship between the owner and users is governed by current Spanish law. Any dispute will be submitted to the courts designated by consumer protection legislation.',

    'Política de privacitat — Restaurant La Masia':
      'Privacy policy — Restaurant La Masia',
    'Política de privacitat del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Privacy policy of Restaurant La Masia, L\'Ametlla del Vallès.',
    'Política de privacitat': 'Privacy policy',
    '1. Responsable del tractament': '1. Data controller',
    'Responsable:': 'Controller:',
    'Adreça:': 'Address:',
    '2. Quines dades tractem i amb quina finalitat':
      '2. What data we process, and what for',
    'Tractem únicament les dades que ens faciliteu voluntàriament a través dels formularis d\'aquest web:':
      'We only process the data you give us voluntarily through the forms on this website:',
    'Formulari de consulta:': 'Enquiry form:',
    'nom, telèfon, correu electrònic, nombre de persones, data i el text de la consulta. Finalitat: respondre-us.':
      'name, phone, email, number of people, date, and the text of the enquiry. Purpose: to reply to you.',
    'Formulari de pressupost de celebracions:': 'Celebration quote form:',
    'nom, telèfon, correu electrònic, tipus de celebració, nombre de comensals i data aproximada. Finalitat: preparar-vos una proposta i contactar-vos.':
      'name, phone, email, type of celebration, number of guests, and approximate date. Purpose: to prepare a proposal and get in touch with you.',
    'No fem perfilat, no prenem decisions automatitzades i no fem servir aquestes dades per enviar-vos publicitat si no ens ho heu demanat expressament.':
      'We do not carry out profiling, we do not take automated decisions, and we do not use this data to send you advertising unless you have expressly asked us to.',
    '3. Base jurídica': '3. Legal basis',
    'El consentiment que atorgueu en enviar el formulari (art. 6.1.a del RGPD) i, quan escaigui, l\'aplicació de mesures precontractuals a petició vostra (art. 6.1.b del RGPD).':
      'The consent you give when sending the form (Art. 6(1)(a) GDPR) and, where applicable, steps taken at your request prior to entering into a contract (Art. 6(1)(b) GDPR).',
    '4. Durada de la conservació': '4. How long we keep it',
    'Conservem les dades el temps necessari per atendre la vostra sol·licitud i, després, durant els terminis legals de prescripció de responsabilitats. Passat aquest període, se suprimeixen.':
      'We keep your data for as long as we need it to deal with your request and, after that, for the legal limitation periods. Once that period has passed, it is deleted.',
    '5. Destinataris': '5. Recipients',
    'No cedim les vostres dades a tercers, tret d\'obligació legal. Els formularis d\'aquest web els processa [PROVEÏDOR DEL FORMULARI, p. ex. Formspree Inc.], que actua com a encarregat del tractament.':
      'We do not share your data with third parties, except where the law requires it. The forms on this website are processed by [PROVEÏDOR DEL FORMULARI, p. ex. Formspree Inc.], acting as data processor.',
    '6. Els vostres drets': '6. Your rights',
    'Podeu exercir els drets d\'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat escrivint a [CORREU DE CONTACTE] o a l\'adreça postal indicada, adjuntant una còpia d\'un document identificatiu.':
      'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to [CORREU DE CONTACTE] or to the postal address given above, enclosing a copy of an identity document.',
    'Si considereu que no hem atès correctament els vostres drets, podeu presentar una reclamació davant l\'Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat) o l\'Agència Espanyola de Protecció de Dades (aepd.es).':
      'If you believe we have not handled your rights properly, you can lodge a complaint with the Catalan Data Protection Authority (apdcat.gencat.cat) or the Spanish Data Protection Agency (aepd.es).',
    '7. Seguretat': '7. Security',
    'Apliquem les mesures tècniques i organitzatives raonables per protegir les vostres dades. Aquest lloc web es serveix per HTTPS.':
      'We apply reasonable technical and organisational measures to protect your data. This website is served over HTTPS.',

    'Política de cookies — Restaurant La Masia': 'Cookie policy — Restaurant La Masia',
    'Política de cookies del Restaurant La Masia, L\'Ametlla del Vallès.':
      'Cookie policy of Restaurant La Masia, L\'Ametlla del Vallès.',
    'Política de cookies': 'Cookie policy',
    '1. Què són les cookies': '1. What cookies are',
    'Les cookies són petits fitxers que un lloc web desa al vostre navegador per recordar informació sobre la vostra visita.':
      'Cookies are small files that a website stores in your browser to remember information about your visit.',
    '2. Cookies que fem servir': '2. The cookies we use',
    'Aquest lloc web no instal·la cookies pròpies ni fa servir eines d\'analítica.':
      'This website does not install any cookies of its own and does not use analytics tools.',
    'No us seguim ni elaborem perfils de navegació.':
      'We do not track you and we do not build browsing profiles.',
    '3. Contingut incrustat de tercers': '3. Embedded third-party content',
    'Aquest web': 'This website',
    'no carrega res de cap tercer pel seu compte':
      'does not load anything from any third party on its own',
    '. Les tipografies, les imatges i els fulls d\'estil se serveixen des d\'aquest mateix domini. En obrir qualsevol pàgina no s\'envia cap dada vostra enlloc.':
      '. The fonts, the images and the stylesheets are all served from this same domain. Opening any page sends none of your data anywhere.',
    'L\'única excepció és el': 'The only exception is the',
    'mapa de Google Maps': 'Google Maps map',
    'de l\'apartat «Com arribar», i': 'in the “How to get here” section, and it',
    'no es carrega sol': 'does not load on its own',
    ': fins que no premeu el botó «Carregar el mapa» no es fa cap petició a Google. Si el premeu, Google pot instal·lar cookies al vostre navegador per al funcionament i les preferències del mapa. Podeu consultar-ho a policies.google.com/technologies/cookies. Si preferiu no fer-ho, al costat hi teniu l\'adreça escrita.':
      ': until you press the “Load the map” button, no request is made to Google. If you do press it, Google may install cookies in your browser for the map to work and to remember your preferences. You can read about this at policies.google.com/technologies/cookies. If you would rather not, the address is written out right beside it.',
    'Si seguiu els enllaços cap a Instagram, Facebook o Google Maps, aquests serveis apliquen les seves pròpies polítiques de cookies, alienes a aquest web.':
      'If you follow the links to Instagram, Facebook or Google Maps, those services apply their own cookie policies, which have nothing to do with this website.',
    '4. Com desactivar-les': '4. How to turn them off',
    'Com que aquest web no n\'instal·la cap, no hi ha res a desactivar. Si heu carregat el mapa i voleu esborrar el que hagi deixat Google, podeu fer-ho des de la configuració del vostre navegador (Chrome, Firefox, Safari, Edge). No afecta la resta del web.':
      'Since this website installs none, there is nothing to turn off. If you have loaded the map and want to delete whatever Google left behind, you can do so from your browser settings (Chrome, Firefox, Safari, Edge). It does not affect the rest of the site.',
    '5. Canvis en aquesta política': '5. Changes to this policy',
    'Si en el futur incorporem eines d\'analítica, publicitat o reserva en línia, actualitzarem aquesta pàgina i us demanarem el consentiment previ mitjançant un avís de cookies.':
      'If we add analytics, advertising or online booking tools in the future, we will update this page and ask for your consent beforehand through a cookie notice.',

    /* ── Frases que munta js/main.js i js/menu-diari.js ── */
    'Aquest camp és obligatori': 'This field is required',
    'Reviseu l\'adreça de correu': 'Please check the email address',
    'Enviant…': 'Sending…',
    'No hem pogut enviar el formulari. Torneu-ho a provar o truqueu-nos al {tel}.':
      'We could not send the form. Please try again, or call us on {tel}.',
    '<strong>Maqueta:</strong> aquest formulari encara no està connectat i no s\'enviaria enlloc. Cal posar l\'identificador de Formspree a l\'<code>action</code>. Mentrestant, el telèfon de la casa és el {tel}.':
      '<strong>Mock-up:</strong> this form is not connected yet and would not be sent anywhere. The Formspree ID needs to go in the <code>action</code>. In the meantime, the restaurant\'s phone number is {tel}.',
    'Primers': 'First courses',
    'Segons': 'Main courses',
    'Postres': 'Desserts',
    'Encara no hem publicat el menú.': 'We have not posted the set menu yet.',
    'El menú d\'aquesta setmana ja ha passat i encara no hem penjat el de la setmana vinent.':
      'This week\'s set menu has already been and gone, and we have not posted next week\'s yet.',
    'Avui, {data}': 'Today, {data}',
    'Pròxim menú · {data}': 'Next set menu · {data}',
    'El menú del dia es carrega quan la web és en un servidor.':
      'The set menu of the day loads when the site is on a server.',
    'Ara mateix no podem mostrar el menú del dia.':
      'We cannot show the set menu of the day right now.',
    'Truqueu-nos al {tel} i us diem què hi ha avui.':
      'Call us on {tel} and we will tell you what is on today.',
    /* -- La casa (la-casa.html) ---------------------------------
       «La casa» es el nom de la pestanya. En angles no es deixa el
       catala —no es un nom propi, es la paraula «casa»— i «The house»
       es el que diu: la casa, l'edifici, el que es va a veure. */
    'La casa': 'The house',
    '· La casa': '· The house',
    'Menjar per emportar': 'Takeaway',
    'La casa — Restaurant La Masia, L\'Ametlla del Vallès':
      'The house — Restaurant La Masia, L\'Ametlla del Vallès',
    'La casa — Restaurant La Masia': 'The house — Restaurant La Masia',
    'La Masia de l\'Ametlla del Vallès per dins: qui som des del 1957, la galeria de fotografies de la casa i els quatre espais, del menjador diari al Saló Nou de 200 places.':
      'Inside La Masia in L\'Ametlla del Vallès: who we are since 1957, the photo gallery of the house and its four spaces, from the everyday dining room to the Saló Nou, which seats 200.',
    'Qui som des del 1957, la galeria de la casa i els quatre espais del Restaurant La Masia, a l\'Ametlla del Vallès.':
      'Who we are since 1957, the gallery of the house and the four spaces of Restaurant La Masia, in L\'Ametlla del Vallès.',
    'Qui som, com és la casa per dins i quins espais hi ha. Des del 1957, al carrer de la Torregassa.':
      'Who we are, what the house looks like inside and what spaces there are. Since 1957, on Carrer de la Torregassa.',
    'I al costat del menjador, quatre espais on el poble ha celebrat comunions, bateigs i aniversaris de noces durant generacions. Hi ha famílies que hi han fet la comunió dels fills i, anys després, la dels néts.':
      'And next to the dining room, four spaces where the town has held first communions, christenings and wedding anniversaries for generations. There are families who held their children\'s communion here and, years later, their grandchildren\'s.',
    'Quatre espais': 'Four spaces',
    'La façana de La Masia al capvespre, amb els llums encesos':
      'The front of La Masia at dusk, with the lights on',

    /* Galeria */
    'La casa en fotografies': 'The house in photographs',
    'Com és per dins': 'What it looks like inside',
    'La façana, les sales i alguns dels plats que hi surten. Premeu qualsevol fotografia per veure-la gran.':
      'The front of the house, the rooms and some of the dishes that come out of the kitchen. Tap any photograph to see it large.',
    'L\'entrada, amb la terrassa parada': 'The entrance, with the terrace laid out',
    'Una taula del menjador': 'A table in the dining room',
    'Muntatge de celebració': 'A celebration set up',
    'Una de les paelles de la casa': 'One of the house paellas',
    'Un plat de verdures de temporada': 'A plate of seasonal vegetables',
    'Taula llarga, parada per a un àpat': 'A long table, laid for a meal',
    'L\'entrada de La Masia de nit, amb les taules de la terrassa':
      'The entrance to La Masia at night, with the terrace tables',
    'Una taula parada, amb el tovalló doblegat sobre el plat':
      'A laid table, with the napkin folded on the plate',
    'Cadires vestides de blanc amb un ram, preparades per a una celebració':
      'Chairs dressed in white with a posy, ready for a celebration',
    'Una paella acabada de fer, a la paella de ferro':
      'A freshly made paella, in the iron pan',
    'Amanida amb làmines de carbassó i verdures':
      'A salad with shaved courgette and vegetables',
    'Taula llarga parada amb copes i centres de flors':
      'A long table laid with glasses and flower centrepieces',
    /* Els controls del visor de la galeria (js/galeria.js) */
    'Galeria de fotografies': 'Photo gallery',
    'Tancar la fotografia': 'Close the photograph',
    'Fotografia anterior': 'Previous photograph',
    'Fotografia següent': 'Next photograph',

    /* Els espais */
    'Quatre sales sota el mateix sostre': 'Four rooms under the same roof',
    'El menjador de cada dia i tres sales més que s\'obren segons quants sereu. Si voleu saber quina us encaixa, el cercador de Celebracions us ho diu en deu segons.':
      'The everyday dining room and three more rooms that open depending on how many of you there are. If you want to know which one fits, the finder on the Celebrations page tells you in ten seconds.',
    'Anar al cercador d\'espais →': 'Go to the room finder →',
    'El més gran de la casa, i el que fa que a l\'Ametlla se sàpiga on es fan les comunions. Hi caben les taules rodones de deu i queda espai al mig; és la sala de les celebracions de poble senceres.':
      'The biggest room in the house, and the reason everyone in L\'Ametlla knows where first communions happen. Round tables of ten fit with room to spare down the middle; this is the room for parties the whole town comes to.',
    'El menjador de sempre: el que trobareu obert qualsevol dia de la setmana, amb les finestres d\'arc que donen al jardí. Aquí no cal reservar sala, només taula.':
      'The dining room as it has always been: the one you will find open any day of the week, with the arched windows onto the garden. Here you do not book a room, just a table.',
    'La sala del mig. Per a celebracions que volen porta pròpia i no omplirien el Saló Nou: bateigs, aniversaris de noces, dinars d\'empresa grans.':
      'The middle room. For parties that want a door of their own but would not fill the Saló Nou: christenings, wedding anniversaries, large company lunches.',
    'El reservat. Una taula tancada i una porta: dinars de feina, sopars de família i tot el que demana parlar sense la sala al costat.':
      'The private room. One table and a door: working lunches, family dinners and anything that needs talking without the dining room next to you.',
    'Quin espai us encaixa?': 'Which space fits you?',
    'Millor en persona': 'Better in person',
    'Veniu a veure la casa': 'Come and see the house',

    /* -- La porta cap a «La casa», a la portada -- */
    'Qui som, la galeria de fotografies i els quatre espais de La Masia, del reservat de 20 places al Saló Nou de 200.':
      'Who we are, the photo gallery and the four spaces at La Masia, from the private room seating 20 to the Saló Nou seating 200.',
    'Entrar a la casa →': 'Step inside →',

    /* -- Per emportar (carta.html#per-emportar) -- */
    'Com funciona →': 'How it works →',
    'La casa, a casa vostra': 'The house, at your house',
    'De dilluns a diumenge. Qualsevol plat de la carta i del menú diari se\'l poden endur, amb els mateixos preus que a taula.':
      'Monday to Sunday. Any dish from the menu or the set menu of the day can go home with you, at the same prices as at the table.',
    'Trieu els plats': 'Choose the dishes',
    'Qualsevol plat de la carta o del menú del dia.':
      'Anything from the menu or the set menu of the day.',
    'Truqueu-nos': 'Call us',
    'Al 938 43 00 02. Digueu-nos a quina hora ho passareu a buscar.':
      'On 938 43 00 02. Tell us what time you will come and collect it.',
    'Veniu a buscar-ho': 'Come and collect it',
    'Al carrer de la Torregassa, 77. Ho tindrem a punt a l\'hora que ens digueu.':
      'At Carrer de la Torregassa, 77. It will be ready at the time you tell us.',
    'Veure la carta →': 'See the menu →',
    'Veure el menú del dia →': 'See the set menu of the day →',
    'Les comandes es fan per telèfon. Truqueu-nos amb una mica d\'antelació —mitja hora per a un plat, més si sou colla— i us ho preparem.':
      'Orders are taken by phone. Call us a little ahead — half an hour for one dish, longer if there are a few of you — and we will have it ready.',
    'De dilluns a dissabte de 9:00 a 00:00 i diumenge de 9:00 a 18:00.':
      'Monday to Saturday 9:00 to 00:00, and Sunday 9:00 to 18:00.',

    /* -- Contacte -- */
    'Veure el mapa': 'See the map',
  }
};

/* Amb el diccionari carregat, el motor ja pot fer la feina. Va aquí i no
   a i18n.js perquè aquest fitxer es carrega al final del <body>, quan la
   pàgina ja existeix i es pot recórrer. */
if (window.I18N) window.I18N.inicia();
