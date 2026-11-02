// ============================================================
//  FONDO · la tienda de souvenirs
//
//  CÓMO EDITAR EL CONTENIDO (todo vive en este archivo, arriba de todo)
//
//  TEXTOS        -> el caso (contexto, qué es Fondo, mi rol) en español e inglés.
//                   Dentro de un texto: *palabra* = negrita.
//  ANIMALES      -> un estante por animal: nombre, fecha, y sus objetos.
//                   Para sumar un objeto, agregá una línea en "items".
//                   Si el objeto todavía no tiene mockup, no pongas "thumb":
//                   aparece como un lugar vacío en el estante.
//  EXPLICACIONES -> el texto científico de cada objeto, por idioma, en
//                   EXPLICACIONES["animal/objeto"]. Si falta, el panel
//                   dice "en preparación".
//
//  El idioma se lee de <html lang="..."> (lo cambia script.js con el selector
//  English / Español); esta página se vuelve a dibujar sola cuando cambia.
//  Las postales salen de fondo/postal-fuente.html (ver fondo/herramientas/).
// ============================================================

(() => {
  const section = document.getElementById("fondo");

  if (!section) return;


  // ------------------------------------------------------------
  //  TEXTOS
  // ------------------------------------------------------------

  const TEXTOS = {

    es: {
      title: "Fondo",
      contextTitle: "Contexto",
      context: [
        "Desde el 23 de julio hasta el 11 de agosto de 2025, nadie se atrevió a hablar de otra cosa que no fuera la *expedición en Mar del Plata del buque R/V Falkor (too)* del Schmidt Ocean Institute, con la colaboración del CONICET. 20 días de transmisión en vivo por YouTube y Twitch. Casi 18 millones de visualizaciones. Todo un país siguiendo cómo la tripulación bajaba hasta 3.900 metros.",
        "Se cree que descubrieron más de 40 especies marinas nuevas, además de corales de aguas frías.",
        "En diciembre de 2025, la transmisión ganó el Martín Fierro de Oro de los canales de streaming.",
        "Tiempo después, la ciencia ya no está en boca de todos. *¿Cómo hacemos para que el efecto del stream perdure?*",
        "El stream nos unió: nos hizo parte de algo más grande que nosotros. La comunidad participó en el chat con preguntas, apodos para los animales, chistes y palabras de aliento para la tripulación.",
        "*Necesitamos reconectar con la fascinación y el asombro* del momento para que el vínculo estrecho con la ciencia se mantenga intacto."
      ],
      whatTitle: "¿Qué es Fondo?",
      what: [
        "Es la *tienda de souvenirs* que permite revivir las *vacaciones al cañón submarino de Mar del Plata* y acercar a las personas a los animales que más quisieron.",
        "Reúne *ilustraciones, versos, objetos cotidianos e información* de los animales para recordarnos que la ciencia está en todos lados."
      ],
      roleTitle: "Mi rol",
      role: [
        "Fondo es un proyecto propio. Lo pensé de punta a punta como producto. Partí de lo que pasó en el chat del stream. Definí el concepto de tienda de souvenirs y qué objetos tenía sentido crear para cada animal. Diseñé la experiencia de interacción y navegación con los objetos. Escribí los versos y las explicaciones científicas, chequeadas con fuentes como WoRMS."
      ],
      enter: "Entrar a la tienda",
      storeLabel: "Tienda de souvenirs de Fondo",
      illustration: "Ilustración",
      close: "Cerrar",
      closeLabel: "Cerrar el panel",
      pendingMockup: "Mockup en preparación",
      soon: "Próximamente",
      pendingText: "Explicación científica en preparación.",
      postalName: "Postal",
      postalText: "Para descargar y compartir. Mide 15 × 10 cm a 300 dpi.",
      download: "Descargar la postal (PNG)",
      otherProjects: "Otros proyectos",
      talk: "Charlemos",
      zoom: {
        label: "Zoom",
        in: "Acercar",
        out: "Alejar",
        reset: "Ver el objeto entero",
        hint: "Acercate: hay palabras bordadas en el delantal.",
        hintDetail: "Acercate para ver los detalles.",
        hintFound: "Las encontraste todas.",
        hintOne: "Falta una palabra. Probá alejarte y volver a mirar.",
        hintMany: "Faltan {n} palabras.",
        alt: {
          delantal: "Delantal de jean azul con la estrella Patricio estampada. Tiene tres palabras bordadas: voraz en el frente, vedette en la tira izquierda y del mar en la tira derecha. Usá los botones o el pellizco para acercarte.",
          mate: "Mate enlozado antiguo, amarillo clarito con bordes naranjas y dos asas. En el medio, la estrella Patricio; arriba dice sensible y abajo, a la perturbación. Usá los botones o el pellizco para acercarte.",
          iman: "Imán de madera en forma de corazón con Batatita en violeta. Arriba dice pies ambulacrales y abajo, 4 hileras. Usá los botones o el pellizco para acercarte.",
          remera: "Remera negra con el pulpo Dumbo en rosa y amarillo. Arriba a la izquierda dice cuerpo encima y abajo a la derecha, devora. Usá los botones o el pellizco para acercarte.",
          taza: "Taza blanca con el interior y el asa rosas. Dice Madre solo una, y abajo está Mamá tenazas, una langosta en rosa y naranja. Usá los botones o el pellizco para acercarte.",
          gorra: "Gorra negra de gabardina lavada con Batatita bordada en violeta. Debajo, también bordado en violeta, dice sobre barro y arena. Usá los botones o el pellizco para acercarte."
        }
      },
      thumbAlt: "Mockup de {obj} de {animal}",
      postalAlt: "Postal de {animal}: la ilustración, el nombre del animal, Fondo, el título Recuerdo de mi primera expedición bajo el mar y la fecha {date}."
    },

    en: {
      title: "Fondo",
      contextTitle: "Context",
      context: [
        "From July 23 to August 11, 2025, nobody in Argentina dared to talk about anything else than the *R/V Falkor (too) expedition off Mar del Plata*, run by the Schmidt Ocean Institute with the collaboration of CONICET. 20 days of live streaming on YouTube and Twitch. Almost 18 million views. A whole country following the crew as they went down as far as 3,900 meters.",
        "They are believed to have discovered more than 40 new marine species, along with cold-water corals.",
        "In December 2025, the broadcast won the Martín Fierro de Oro for streaming channels.",
        "Some time later, science is no longer on everyone's lips. *How do we make the effect of the stream last?*",
        "The stream brought us together: it made us part of something bigger than ourselves. The community took part in the chat with questions, nicknames for the animals, jokes and words of encouragement for the crew.",
        "*We need to reconnect with the fascination and wonder* of that moment so the close bond with science stays intact."
      ],
      whatTitle: "What is Fondo?",
      what: [
        "It is the *souvenir shop* that lets you relive the *holidays at the Mar del Plata submarine canyon* and brings people closer to the animals they loved most.",
        "It gathers *illustrations, verses, everyday objects and information* about the animals to remind us that science is everywhere."
      ],
      roleTitle: "My role",
      role: [
        "Fondo is a project of my own. I thought it through from start to finish as a product. I started from what happened in the stream chat. I defined the souvenir shop concept and which objects made sense for each animal. I designed the interaction and navigation experience with the objects. I wrote the verses and the scientific explanations, checked against sources such as WoRMS."
      ],
      enter: "Enter the shop",
      storeLabel: "Fondo souvenir shop",
      illustration: "Illustration",
      close: "Close",
      closeLabel: "Close the panel",
      pendingMockup: "Mockup coming soon",
      soon: "Coming soon",
      pendingText: "Scientific explanation coming soon.",
      postalName: "Postcard",
      postalText: "To download and share. 15 × 10 cm at 300 dpi.",
      download: "Download the postcard (PNG)",
      otherProjects: "Other projects",
      talk: "Let's talk",
      zoom: {
        label: "Zoom",
        in: "Zoom in",
        out: "Zoom out",
        reset: "See the whole object",
        hint: "Zoom in: there are embroidered words on the apron.",
        hintDetail: "Zoom in to see the details.",
        hintFound: "You found them all.",
        hintOne: "One word left. Try zooming out and looking again.",
        hintMany: "{n} words left.",
        alt: {
          delantal: "Blue denim apron with the Patricio starfish printed on it. It has three embroidered words: voraz on the front, vedette on the left strap and del mar on the right strap. Use the buttons or pinch to zoom in.",
          mate: "Old enamel mate, pale yellow with orange edges and two handles. In the middle, the Patricio starfish; above it reads sensible and below, a la perturbación (sensitive to disturbance). Use the buttons or pinch to zoom in.",
          iman: "Heart-shaped wooden magnet with Batatita in purple. Above it reads pies ambulacrales (tube feet) and below, 4 hileras (4 rows). Use the buttons or pinch to zoom in.",
          remera: "Black T-shirt with the dumbo octopus in pink and yellow. Top left it reads cuerpo encima (body on top) and bottom right, devora (devours). Use the buttons or pinch to zoom in.",
          taza: "White mug with a pink inside and handle. It reads Madre solo una (only one mother), and below is Mamá tenazas, a lobster in pink and orange. Use the buttons or pinch to zoom in.",
          gorra: "Washed black cap with Batatita embroidered in purple. Below it, also embroidered in purple, it reads sobre barro y arena (on mud and sand). Use the buttons or pinch to zoom in."
        }
      },
      thumbAlt: "{animal} {obj} mockup",
      postalAlt: "{animal} postcard: the illustration, the animal's name, Fondo, the title Recuerdo de mi primera expedición bajo el mar and the date {date}."
    }

  };


  // ------------------------------------------------------------
  //  ANIMALES (un estante por animal)
  // ------------------------------------------------------------

  const ANIMALES = [

    {
      id: "patricio",
      name: "Patricio",
      species: "Hippasteria phrygiana",
      date: "26-07-2025",
      items: [
        {
          id: "delantal", es: "Delantal de cocina", en: "Kitchen apron",
          kind: "zoom", thumb: "fondo/assets/thumbs/delantal.webp",
          svg: "fondo/assets/delantal-svg.html", ratio: 930 / 1220,
          // Palabras bordadas que se descubren con el zoom (x, y y tamaño en el dibujo)
          words: [
            { text: "voraz", x: 461, y: 478, size: 46 },
            { text: "vedette", x: 383, y: 62, size: 20 },
            { text: "del mar", x: 539, y: 62, size: 20 }
          ]
        },
        {
          id: "mate", es: "Mate", en: "Mate",
          kind: "zoom", thumb: "fondo/assets/thumbs/mate.webp",
          svg: "fondo/assets/mate-svg.html", ratio: 1416 / 1111
        },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-patricio.webp", file: "fondo/assets/postales/postal-patricio.png" }
      ]
    },

    {
      id: "batatita",
      name: "Batatita",
      species: "Benthodytes violeta",
      date: "29-07-2025",
      items: [
        {
          id: "iman", es: "Imán", en: "Magnet",
          kind: "zoom", thumb: "fondo/assets/thumbs/iman.webp",
          svg: "fondo/assets/iman-svg.html", ratio: 1230 / 1278
        },
        {
          id: "gorra", es: "Gorra", en: "Cap",
          kind: "zoom", thumb: "fondo/assets/thumbs/gorra.webp",
          svg: "fondo/assets/gorra-svg.html", ratio: 1305 / 1205
        },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-batatita.webp", file: "fondo/assets/postales/postal-batatita.png" }
      ]
    },

    {
      id: "pulpo-dumbo",
      name: "Pulpo Dumbo",
      species: "Grimpoteuthis sp.",
      date: "05-08-2025",
      items: [
        {
          id: "remera", es: "Remera", en: "T-shirt",
          kind: "zoom", thumb: "fondo/assets/thumbs/remera.webp",
          svg: "fondo/assets/remera-svg.html", ratio: 1230 / 1278
        },
        { id: "toallon", es: "Toallón playero", en: "Beach towel" },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-pulpo-dumbo.webp", file: "fondo/assets/postales/postal-pulpo-dumbo.png" }
      ]
    },

    {
      id: "mama-tenazas",
      name: "Mamá tenazas",
      species: "Thymops birsteini",
      date: "09-08-2025",
      items: [
        {
          id: "taza", es: "Taza", en: "Mug",
          kind: "zoom", thumb: "fondo/assets/thumbs/taza.webp",
          svg: "fondo/assets/taza-svg.html", ratio: 1
        },
        { id: "buzo", es: "Buzo con capucha", en: "Hoodie" },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-mama-tenazas.webp", file: "fondo/assets/postales/postal-mama-tenazas.png" }
      ]
    }

  ];


  // ------------------------------------------------------------
  //  EXPLICACIONES CIENTÍFICAS ("animal/objeto")
  //  Dentro de un texto: *palabra* = negrita. "source" va en gris, abajo.
  // ------------------------------------------------------------

  const EXPLICACIONES = {

    "patricio/mate": {
      es: {
        paragraphs: [
          "*¿Por qué “sensible a la perturbación”?* Es un término técnico real y está bien aplicado a esta estrella.",
          "Sale del índice AMBI (Borja y otros, 2000), que mide la salud del fondo marino según qué animales viven ahí. AMBI ordena las especies del fondo en cinco grupos, desde las más delicadas hasta las oportunistas que proliferan en aguas degradadas. *Hippasteria phrygiana* está en el primero, “muy sensible a la perturbación”.",
          "Eso significa que vive en fondos sanos y es de las primeras en desaparecer cuando el ambiente se altera, sobre todo por exceso de materia orgánica y contaminación. Por eso su presencia indica un fondo marino en buen estado."
        ],
        source: "Fuente: WoRMS, Hippasteria phrygiana; Borja, Franco y Pérez (2000), índice AMBI."
      },
      en: {
        paragraphs: [
          "*Why “sensible a la perturbación” (sensitive to disturbance)?* It is a real technical term, and it applies correctly to this sea star.",
          "It comes from the AMBI index (Borja et al., 2000), which measures the health of the seabed according to which animals live there. AMBI sorts seabed species into five groups, from the most delicate to the opportunists that thrive in degraded waters. *Hippasteria phrygiana* is in the first one, “very sensitive to disturbance”.",
          "This means it lives on healthy seabeds and is among the first to disappear when the environment changes, especially from excess organic matter and pollution. That is why its presence signals a seabed in good condition."
        ],
        source: "Source: WoRMS, Hippasteria phrygiana; Borja, Franco & Pérez (2000), AMBI index."
      }
    },

    "mama-tenazas/taza": {
      es: {
        paragraphs: [
          "*¿Por qué “Madre solo una”?* El 9 de agosto de 2025, a 1.883 metros de profundidad, el robot SuBastian se acercó a una roca del cañón submarino de Mar del Plata. Debajo vivía una langosta patagónica, *Thymops birsteini*, con sus crías: ocho langostitas de pocas semanas de vida.",
          "La madre volvió rápido a su roca, miró de frente a la cámara y atacó al robot una y otra vez con sus tenazas, removiendo hasta el barro del fondo. Mientras tanto, las ocho crías se asomaban a mirar cómo las defendía. En el chat del stream la bautizaron enseguida: “El enfrentamiento del año: ROV contra Mamá Tenazas”.",
          "Los científicos terminaron rápido de tomar su muestra y se alejaron. Un experto del CONICET aclaró que la langosta no sufrió ningún daño y que volvió a su roca a seguir criando a sus pequeños.",
          "Antes de esas crías, la maternidad ya es larga. La hembra de esta especie lleva hasta 380 huevos pegados bajo la cola, de 1,5 a 1,9 mm cada uno, y el desarrollo dura alrededor de un año.",
          "WoRMS registra a esta especie en el mar profundo, entre los 122 y los 1.400 metros. Mamá tenazas estaba a 1.883."
        ],
        source: "Fuentes: Víctor Ingrassia, “La langosta guerrera que defendió a sus crías y atacó al robot de la expedición científica submarina en Mar del Plata”, Infobae, 9 de agosto de 2025; Laptikhovsky y Reyes (2009), Journal of Natural History 43: 35-46, citado en Wikipedia (cantidad y tamaño de los huevos); SeaLifeBase, Thymops birsteini (desarrollo de un año); WoRMS, Thymops birsteini."
      },
      en: {
        paragraphs: [
          "*Why “Madre solo una” (only one mother)?* On 9 August 2025, 1,883 metres deep, the robot SuBastian approached a rock in the Mar del Plata submarine canyon. Under it lived a Patagonian lobsterette, *Thymops birsteini*, with her young: eight little lobsters a few weeks old.",
          "The mother hurried back to her rock, stared straight into the camera and attacked the robot again and again with her claws, even stirring up the mud on the seabed. Meanwhile, the eight young peeked out to watch her defend them. The stream chat named her right away: “The fight of the year: ROV vs. Mamá Tenazas” (Mama Claws).",
          "The scientists quickly finished taking their sample and moved away. A CONICET expert explained that the lobster was not harmed and went back to her rock to keep raising her young.",
          "Before those young, motherhood is already long. The female of this species carries up to 380 eggs stuck under her tail, each 1.5 to 1.9 mm, and their development takes about a year.",
          "WoRMS records this species in the deep sea, between 122 and 1,400 metres. Mamá tenazas was at 1,883."
        ],
        source: "Sources: Víctor Ingrassia, “La langosta guerrera que defendió a sus crías y atacó al robot de la expedición científica submarina en Mar del Plata”, Infobae, 9 August 2025; Laptikhovsky & Reyes (2009), Journal of Natural History 43: 35-46, as cited in Wikipedia (egg number and size); SeaLifeBase, Thymops birsteini (one-year development); WoRMS, Thymops birsteini."
      }
    },

    "pulpo-dumbo/remera": {
      es: {
        paragraphs: [
          "*¿Por qué “cuerpo encima, devora”?* El pulpo Dumbo se traga sus presas enteras. Pasa gran parte de su vida suspendido justo encima del fondo, y cuando encuentra algo para comer se le tira encima y se lo traga de una, sin desgarrarlo ni triturarlo como hacen otros pulpos.",
          "Puede hacerlo porque tiene la rádula, la lengua con dientitos de los moluscos, muy reducida. Esa forma de comer es una particularidad de su género, *Grimpoteuthis*.",
          "Come gusanos marinos y pequeños crustáceos como copépodos, isópodos y anfípodos. También come bivalvos y caracoles que encuentra en el fondo.",
          "Los pulpos Dumbo son los que viven a mayor profundidad que se conocen, hasta unos 4.000 metros. Nadan aleteando con dos aletas que sobresalen como orejas, y por eso llevan el nombre del elefante."
        ],
        source: "Fuentes: Aquarium of the Pacific, ficha “Dumbo Octopus”; National Geographic, “Dumbo Octopus Facts” y “Mesmerizing, rare dumbo octopus filmed in the deep sea” (2018); WoRMS, Grimpoteuthis."
      },
      en: {
        paragraphs: [
          "*Why “cuerpo encima, devora” (body on top, devours)?* The dumbo octopus swallows its prey whole. It spends much of its life hovering just above the seabed, and when it finds something to eat it pounces on it and swallows it in one go, without tearing or grinding it like other octopuses do.",
          "It can do this because its radula, the toothed tongue of molluscs, is greatly reduced. This way of eating is a feature of its genus, *Grimpoteuthis*.",
          "It eats marine worms and small crustaceans such as copepods, isopods and amphipods. It also eats bivalves and snails it finds on the seabed.",
          "Dumbo octopuses are the deepest-living octopuses known, down to about 4,000 metres. They swim by flapping two fins that stick out like ears, which is why they are named after the elephant."
        ],
        source: "Sources: Aquarium of the Pacific, “Dumbo Octopus” species page; National Geographic, “Dumbo Octopus Facts” and “Mesmerizing, rare dumbo octopus filmed in the deep sea” (2018); WoRMS, Grimpoteuthis."
      }
    },

    "batatita/iman": {
      es: {
        paragraphs: [
          "*Benthodytes violeta* tiene cuatro hileras de *pies ambulacrales* en la panza. Son sus piecitos: pies en la panza que le sirven para deambular por el fondo. La palabra viene del latín *ambulare*, caminar, la misma raíz de “deambular”.",
          "Tiene 16 tentáculos en un solo círculo, todos de 2 mm y con forma de escudo. En el lomo lleva ocho pares de apéndices, de 1 a 3 mm, que ocupan solo la mitad delantera del cuerpo. Y donde el lomo se junta con la panza, sus bordes son festoneados, con forma de volado.",
          "Por dentro tiene dos vesículas de Poli en forma de gota, de 30 y 10 mm, y una gónada ramificada con dos penachos. No se le encontraron árboles respiratorios.",
          "Su “esqueleto” son los *osículos*, espículas microscópicas repartidas por el cuerpo, los tentáculos y la gónada. Tienen forma de barrotes, de 200 a 400 µm, y de cruces de tres o cuatro brazos, de 120 a 310 µm. La cruz principal llega a 700 µm, apenas más de medio milímetro, y tiene en el centro una saliente dividida en dos."
        ],
        source: "Fuente: Martinez, M. I., Solís-Marín, F. A. y Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6."
      },
      en: {
        paragraphs: [
          "*Benthodytes violeta* has four rows of *tube feet* (in Spanish, *pies ambulacrales*) on its belly. They are its little feet: feet on its belly that it uses to wander around the seabed. *Ambulacral* comes from the Latin *ambulare*, to walk, the same root as “amble”.",
          "It has 16 tentacles in a single ring, all 2 mm long and shaped like shields. On its back it carries eight pairs of appendages, 1 to 3 mm long, only on the front half of the body. And where its back meets its belly, the edges are scalloped, like a ruffle.",
          "Inside, it has two drop-shaped Polian vesicles, 30 and 10 mm long, and a branched gonad with two tufts. No respiratory trees were found.",
          "Its “skeleton” is made of *ossicles*, microscopic spicules spread through the body, the tentacles and the gonad. They are shaped like rods, 200 to 400 µm long, and like crosses with three or four arms, 120 to 310 µm. The main cross reaches 700 µm, just over half a millimetre, and has a central projection split in two."
        ],
        source: "Source: Martinez, M. I., Solís-Marín, F. A. & Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6."
      }
    },

    "batatita/gorra": {
      es: {
        paragraphs: [
          "*¿Por qué “sobre barro y arena”?* Batatita es un pepino de mar, pariente de las estrellas. Su especie, *Benthodytes violeta*, vive en el cañón submarino de Mar del Plata, entre los 1.508 y los 1.950 metros de profundidad. Los científicos que la describieron la encontraron en el borde del cañón, sobre fondos mezclados de *arena y barro*.",
          "Y no solo vive sobre ese fondo: se cree que se lo come. Todos los ejemplares que estudiaron tenían sedimento del fondo en el tubo digestivo. Por eso, y por sus tentáculos en forma de escudo, los autores piensan que se alimenta de lo que se deposita en el fondo. Nadie la vio comer: es una deducción a partir de lo que tenía adentro.",
          "La especie se describió en 2014 y fue el primer pepino de mar registrado en el cañón de Mar del Plata."
        ],
        source: "Fuente: Martinez, M. I., Solís-Marín, F. A. y Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6. También WoRMS, Benthodytes violeta."
      },
      en: {
        paragraphs: [
          "*Why “sobre barro y arena” (on mud and sand)?* Batatita is a sea cucumber, a relative of sea stars. Its species, *Benthodytes violeta*, lives in the Mar del Plata submarine canyon, between 1,508 and 1,950 metres deep. The scientists who described it found it on the edge of the canyon, on mixed *sand and mud* bottoms.",
          "And it does not just live on that seabed: it is thought to eat it. Every specimen they studied had seabed sediment in its gut. Because of that, and its shield-shaped tentacles, the authors think it feeds on what settles on the bottom. Nobody has seen it eat: it is an inference from what was inside it.",
          "The species was described in 2014, and it was the first sea cucumber recorded in the Mar del Plata canyon."
        ],
        source: "Source: Martinez, M. I., Solís-Marín, F. A. & Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6. Also WoRMS, Benthodytes violeta."
      }
    },

    "patricio/delantal": {
      es: {
        paragraphs: [
          "*¿Por qué “voraz”?* Patricio es una estrella de mar depredadora: según el registro mundial de especies marinas (WoRMS), en la adultez se alimenta cazando a otros animales."
        ],
        source: "Fuente: WoRMS, Hippasteria phrygiana; Le Bourg (2020)."
      },
      en: {
        paragraphs: [
          "*Why “voraz” (voracious)?* Patricio is a predatory sea star: according to the World Register of Marine Species (WoRMS), adults feed by hunting other animals."
        ],
        source: "Source: WoRMS, Hippasteria phrygiana; Le Bourg (2020)."
      }
    }

  };


  // ------------------------------------------------------------
  //  A PARTIR DE ACÁ: el código que arma la página
  // ------------------------------------------------------------

  let lang = "es";

  const dialog = document.createElement("dialog");

  dialog.className = "fondo-dialog";

  document.body.appendChild(dialog);


  function t() {
    return TEXTOS[lang];
  }


  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }


  // *negrita* → <strong>; el resto se escapa
  function rich(text) {
    return escapeHtml(text).replace(/\*(.+?)\*/g, "<strong>$1</strong>");
  }


  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key]);
  }


  function paragraphs(list) {
    return list.map((text) => `<p>${rich(text)}</p>`).join("");
  }


  function itemLabel(item) {
    return item[lang];
  }


  // ------------------------------------------------------------
  //  La página
  // ------------------------------------------------------------

  function thumbHtml(animal, item) {

    if (!item.thumb) {

      return `
        <span class="item-thumb item-thumb--empty">
          <span>${escapeHtml(t().soon)}</span>
        </span>`;
    }

    const alt = item.kind === "postal"
      ? fill(t().postalAlt, { animal: animal.name, date: animal.date })
      : fill(t().thumbAlt, { animal: animal.name, obj: itemLabel(item).toLowerCase() });

    const modifier = item.kind ? ` item-thumb--${item.kind}` : "";

    return `
      <span class="item-thumb${modifier}">
        <img src="${item.thumb}" alt="${escapeHtml(alt)}" loading="lazy">
      </span>`;
  }


  function shelfHtml(animal) {

    const meta = [animal.species ? `<em>${escapeHtml(animal.species)}</em>` : "", escapeHtml(animal.date)]
      .filter(Boolean)
      .join(" · ");

    const items = animal.items.map((item) => `
      <button
        type="button"
        class="item"
        data-animal="${animal.id}"
        data-item="${item.id}">
        ${thumbHtml(animal, item)}
        <span class="item-label">${escapeHtml(itemLabel(item))}</span>
      </button>`).join("");

    return `
      <section class="shelf" aria-labelledby="shelf-${animal.id}">
        <div class="shelf-header">
          <h3 class="shelf-name" id="shelf-${animal.id}">${escapeHtml(animal.name)}</h3>
          <p class="shelf-meta">${meta}</p>
        </div>
        <div class="shelf-row">${items}</div>
        <div class="shelf-board" aria-hidden="true"></div>
      </section>`;
  }


  function render() {

    const text = t();

    section.innerHTML = `
      <h2>${escapeHtml(text.title)}</h2>

      <div class="fondo-text">
        <h3>${escapeHtml(text.contextTitle)}</h3>
        ${paragraphs(text.context)}

        <h3>${escapeHtml(text.whatTitle)}</h3>
        ${paragraphs(text.what)}

        <h3>${escapeHtml(text.roleTitle)}</h3>
        ${paragraphs(text.role)}

        <button type="button" class="conversation-choice fondo-enter">${escapeHtml(text.enter)}</button>
      </div>

      <div class="fondo-store" id="fondo-store" role="region" aria-label="${escapeHtml(text.storeLabel)}">
        ${ANIMALES.map(shelfHtml).join("")}
      </div>

      <div class="conversation-options">
        <a href="#work" class="conversation-choice">${escapeHtml(text.otherProjects)}</a>
        <a href="#contact" class="conversation-choice">${escapeHtml(text.talk)}</a>
      </div>`;
  }


  // "Entrar a la tienda" baja hasta los estantes, sin cambiar de página
  section.addEventListener("click", (event) => {

    const enter = event.target.closest(".fondo-enter");

    if (enter) {

      const store = document.getElementById("fondo-store");

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      store.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

      return;
    }

    const button = event.target.closest(".item");

    if (button) {
      openItem(button.dataset.animal, button.dataset.item);
    }
  });


  // ------------------------------------------------------------
  //  El panel de un objeto
  // ------------------------------------------------------------

  function explanationHtml(animalId, itemId) {

    const entry = EXPLICACIONES[animalId + "/" + itemId];

    const data = entry && entry[lang];

    if (!data) {
      return `<p class="pending">${escapeHtml(t().pendingText)}</p>`;
    }

    return paragraphs(data.paragraphs) +
      (data.source ? `<p class="source">${escapeHtml(data.source)}</p>` : "");
  }


  function zoomHtml(item) {

    const z = t().zoom;

    const slots = item.words
      ? `<p class="apron-found" aria-hidden="true">${item.words.map((w, i) => `<span class="slot" data-slot="${i}">${escapeHtml(w.text)}</span>`).join("")}</p>`
      : "";

    return `
      <div class="zoom-wrap" style="--ratio: ${item.ratio}">

        <div class="zoom-stage" tabindex="0" role="img" aria-label="${escapeHtml(z.alt[item.id] || "")}">
          ${svgCache[item.svg]}
        </div>

        <div class="zoom-controls" role="group" aria-label="${escapeHtml(z.label)}">
          <button type="button" class="zoom-in" aria-label="${escapeHtml(z.in)}">+</button>
          <button type="button" class="zoom-out" aria-label="${escapeHtml(z.out)}">−</button>
          <button type="button" class="zoom-reset" aria-label="${escapeHtml(z.reset)}">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M3 8V3h5M17 8V3h-5M3 12v5h5M17 12v5h-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
          </button>
        </div>

        <p class="zoom-hint" aria-live="polite">${escapeHtml(item.words ? z.hint : z.hintDetail)}</p>

        ${slots}

      </div>`;
  }


  function mediaHtml(animal, item) {

    if (item.kind === "zoom") {
      return `<div class="dialog-media">${zoomHtml(item)}</div>`;
    }

    if (item.kind === "postal") {

      const alt = fill(t().postalAlt, { animal: animal.name, date: animal.date });

      return `
        <div class="dialog-media">
          <figure class="postal-figure">
            <img src="${item.file}" alt="${escapeHtml(alt)}" width="1800" height="1200">
          </figure>
          <a class="ele-link-pill fondo-download" href="${item.file}" download="postal-${animal.id}-fondo.png">
            ${escapeHtml(t().download)}
          </a>
        </div>`;
    }

    return `
      <div class="dialog-media dialog-media--empty">
        <div class="empty-tile">${escapeHtml(t().pendingMockup)}</div>
      </div>`;
  }


  function textHtml(animal, item) {

    if (item.kind === "postal") {
      return `
        <div class="dialog-text">
          <p>${escapeHtml(t().postalText)}</p>
          <p class="source">${escapeHtml(t().illustration)}: Vanesa Bettinelli</p>
        </div>`;
    }

    return `
      <div class="dialog-text">
        ${explanationHtml(animal.id, item.id)}
        <p class="source">${escapeHtml(t().illustration)}: Vanesa Bettinelli</p>
      </div>`;
  }


  // Los SVG de los objetos se descargan la primera vez que se abren
  const svgCache = {};
  const svgRequests = {};

  function loadSvg(path) {

    if (svgCache[path]) return Promise.resolve();

    if (!svgRequests[path]) {

      svgRequests[path] = fetch(path)
        .then((response) => response.text())
        .then((markup) => { svgCache[path] = markup; })
        .catch(() => { delete svgRequests[path]; });
    }

    return svgRequests[path];
  }


  async function openItem(animalId, itemId) {

    const animal = ANIMALES.find((a) => a.id === animalId);

    const item = animal && animal.items.find((i) => i.id === itemId);

    if (!item) return;

    if (item.kind === "zoom") {
      await loadSvg(item.svg);
      if (!svgCache[item.svg]) return;
    }

    dialog.innerHTML = `
      <div class="dialog-bar">
        <h3 class="dialog-title">${escapeHtml(animal.name)} · ${escapeHtml(itemLabel(item))}</h3>
        <button type="button" class="dialog-close" aria-label="${escapeHtml(t().closeLabel)}">×</button>
      </div>
      <div class="dialog-body">
        ${mediaHtml(animal, item)}
        ${textHtml(animal, item)}
      </div>`;

    if (!dialog.open) dialog.showModal();

    dialog.scrollTop = 0;

    if (item.kind === "zoom" && window.FondoZoom) {

      window.FondoZoom.init(dialog.querySelector(".zoom-wrap"), t().zoom, { words: item.words });
    }
  }


  dialog.addEventListener("click", (event) => {

    // Cerrar con la X o tocando afuera del panel
    if (event.target.closest(".dialog-close") || event.target === dialog) {
      dialog.close();
    }
  });


  // ------------------------------------------------------------
  //  Idioma: se vuelve a dibujar cuando script.js cambia <html lang>
  // ------------------------------------------------------------

  function syncLanguage() {

    const next = document.documentElement.lang === "en" ? "en" : "es";

    if (next === lang && section.firstChild) return;

    lang = next;

    if (dialog.open) dialog.close();

    render();
  }


  new MutationObserver(syncLanguage).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });


  syncLanguage();

})();
