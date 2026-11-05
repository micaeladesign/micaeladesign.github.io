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
        "Tiempo después, la ciencia ya no está en boca de todos. *¿Cómo hacemos para que el efecto perdure?*",
        "El stream nos unió: nos hizo parte de algo más grande que nosotros. La comunidad participó en el chat con preguntas, apodos para los animales, chistes y palabras de aliento para la tripulación.",
        "*Necesitamos reconectar con la fascinación y el asombro* del momento para que el vínculo estrecho con la ciencia se mantenga intacto."
      ],
      whatTitle: "¿Qué es Fondo?",
      what: [
        "Es una *tienda de souvenirs* que te permite revivir las *vacaciones al cañón submarino de Mar del Plata*.",
        "Reúne *ilustraciones, versos, objetos cotidianos e información* de los animales para recordarnos que la ciencia está en todos lados."
      ],
      roleTitle: "Mi rol",
      role: [
        "Fondo es un proyecto propio. Lo pensé de punta a punta como producto. Partí de lo que pasó en el chat del stream. Definí el concepto de tienda de souvenirs y qué objetos tenía sentido crear para cada animal. Diseñé la experiencia de interacción y navegación con los objetos. Escribí los versos y las explicaciones científicas."
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
          toallon: "Toallón playero azul con el pulpo Dumbo en rosa y amarillo. Abajo dice cirros que captan. Usá los botones o el pellizco para acercarte.",
          buzo: "Buzo azul marino con capucha. En el pecho tiene bordada a Mamá tenazas, una langosta roja, y arriba, en rosa, dice robusta y acorazada. Usá los botones o el pellizco para acercarte.",
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
        "From July 23 to August 11, 2025, Argentina could hardly talk about anything else: the *Schmidt Ocean Institute's R/V Falkor (too) expedition off Mar del Plata*, run together with CONICET. Twenty days streamed live on YouTube and Twitch. Nearly 18 million views. A whole country watching the crew reach depths of 3,900 meters.",
        "More than 40 new marine species are thought to have been discovered, along with cold-water corals.",
        "Time has passed, and science is no longer the talk of the town. *How do we make that feeling last?*",
        "The stream brought us together and made us part of something bigger than ourselves. People flooded the chat with questions, nicknames for the animals, jokes and words of encouragement for the crew.",
        "*We need to reconnect with the wonder and fascination* of that moment, so our close bond with science stays alive."
      ],
      whatTitle: "What is Fondo?",
      what: [
        "It's a *souvenir shop* that lets you relive your *holiday in the Mar del Plata submarine canyon*.",
        "It brings together *illustrations, verses, everyday objects and facts* about the animals, as a reminder that science is everywhere."
      ],
      roleTitle: "My role",
      role: [
        "Fondo is a personal project, and I took it from concept to finished product. It started with what happened in the stream chat. I came up with the souvenir shop concept and decided which objects made sense for each animal. I designed how people interact with the objects and move between them. I wrote the verses and the scientific explanations."
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
          toallon: "Blue beach towel with the dumbo octopus in pink and yellow. Below it reads cirros que captan (cirri that capture). Use the buttons or pinch to zoom in.",
          buzo: "Navy blue hoodie. On the chest it has Mamá tenazas, a red lobster, embroidered, and above it, in pink, reads robusta y acorazada (sturdy and armoured). Use the buttons or pinch to zoom in.",
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
        {
          id: "toallon", es: "Toallón playero", en: "Beach towel",
          kind: "zoom", thumb: "fondo/assets/thumbs/toallon.webp",
          svg: "fondo/assets/toallon-svg.html", ratio: 1052 / 1442
        },
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
        {
          id: "buzo", es: "Buzo con capucha", en: "Hoodie",
          kind: "zoom", thumb: "fondo/assets/thumbs/buzo.webp",
          svg: "fondo/assets/buzo-svg.html", ratio: 1089 / 1424
        },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-mama-tenazas.webp", file: "fondo/assets/postales/postal-mama-tenazas.png" }
      ]
    }

  ];


  // ------------------------------------------------------------
  //  EXPLICACIONES CIENTÍFICAS ("animal/objeto")
  //  Dentro de un texto: *palabra* = negrita. "source" va en gris, abajo.
  // ------------------------------------------------------------

  const EXPLICACIONES = {

    "patricio/delantal": {
      es: {
        paragraphs: [
          "Patricio es una estrella de mar depredadora.",
          "Como las demás estrellas de mar, no tiene dientes. Se arrastra sobre su presa y usa sus pies ambulacrales para abrir hasta los caparazones más duros. Después saca el estómago por la boca, envuelve la comida y la digiere fuera de su cuerpo. Cuando termina, vuelve a meter el estómago y sigue con la próxima presa."
        ],
        source: "Fuentes: WoRMS, Hippasteria phrygiana; Le Bourg (2020); Ask Dr. Universe, “How do starfish eat?”, Washington State University (2022), sobre las estrellas de mar en general."
      },
      en: {
        paragraphs: [
          "*“Voraz vedette del mar”* means “voracious star of the sea.” Patricio is a predatory sea star.",
          "Like every other sea star, it has no teeth. It crawls over its prey and uses its tube feet to pry open even the toughest shells. Then it pushes its stomach out through its mouth, wraps it around the food and digests it outside its body. When it's done, it pulls its stomach back in and moves on to the next meal."
        ],
        source: "Sources: WoRMS, Hippasteria phrygiana; Le Bourg (2020); Ask Dr. Universe, “How do starfish eat?”, Washington State University (2022), about sea stars in general."
      }
    },

    "patricio/mate": {
      es: {
        paragraphs: [
          "Patricio es *muy sensible a la perturbación*. Es un término técnico real: sale del índice AMBI (Borja y otros, 2000), que mide la salud del fondo marino según qué animales viven ahí.",
          "AMBI ordena las especies del fondo en cinco grupos, de las más delicadas a las que proliferan en aguas degradadas. Patricio está en el primero: vive en fondos sanos y es de las primeras en desaparecer cuando el ambiente se altera. Su presencia indica un fondo marino en buen estado."
        ],
        source: "Fuente: WoRMS, Hippasteria phrygiana; Borja, Franco y Pérez (2000), índice AMBI."
      },
      en: {
        paragraphs: [
          "*“Sensible a la perturbación”* means “sensitive to disturbance.” It's a real technical term from the AMBI index (Borja et al., 2000), which gauges the health of the seabed by looking at which animals live there.",
          "AMBI sorts seabed species into five groups, from the most delicate to the opportunists that thrive in polluted water. Patricio belongs to the first: it lives on healthy seabeds and is among the first to vanish when conditions change. Where you find it, the seabed is in good shape."
        ],
        source: "Source: WoRMS, Hippasteria phrygiana; Borja, Franco & Pérez (2000), AMBI index."
      }
    },

    "batatita/iman": {
      es: {
        paragraphs: [
          "Batatita (*Benthodytes violeta*) tiene cuatro hileras de *pies ambulacrales* en la panza: pies que le sirven para deambular por el fondo.",
          "También tiene 16 tentáculos con forma de escudo, ocho pares de apéndices en el lomo y los bordes festoneados, como un volado. Su “esqueleto” son los osículos, unas espículas microscópicas con forma de barrotes y de cruces."
        ],
        source: "Fuente: Martinez, M. I., Solís-Marín, F. A. y Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6."
      },
      en: {
        paragraphs: [
          "*“Pies ambulacrales, 4 hileras”* means “tube feet, 4 rows.” They're the little feet on the belly of Batatita (*Benthodytes violeta*), and it uses them to wander across the seabed.",
          "It also has 16 shield-shaped tentacles, eight pairs of tiny appendages on its back and scalloped edges, like a ruffle. Its “skeleton” is made of ossicles: microscopic spicules shaped like rods and crosses."
        ],
        source: "Source: Martinez, M. I., Solís-Marín, F. A. & Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6."
      }
    },

    "batatita/gorra": {
      es: {
        paragraphs: [
          "Batatita es un pepino de mar. Vive en el borde del cañón submarino de Mar del Plata, entre los 1.508 y los 1.950 metros de profundidad, sobre fondos de *arena y barro*.",
          "Se cree que también come ese fondo: todos los ejemplares estudiados tenían sedimento en el tubo digestivo. Fue el primer pepino de mar registrado en el cañón."
        ],
        source: "Fuente: Martinez, M. I., Solís-Marín, F. A. y Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6. También WoRMS, Benthodytes violeta."
      },
      en: {
        paragraphs: [
          "*“Sobre barro y arena”* means “on mud and sand.” Batatita is a sea cucumber that lives on the edge of the Mar del Plata submarine canyon, between 1,508 and 1,950 meters deep, on sandy, muddy bottoms.",
          "It's thought to eat that seabed too: every specimen studied had sediment in its gut. It was the first sea cucumber ever recorded in the canyon."
        ],
        source: "Source: Martinez, M. I., Solís-Marín, F. A. & Penchaszadeh, P. E. (2014). Benthodytes violeta, a new species of a deep-sea holothuroid (Elasipodida: Psychropotidae) from Mar del Plata Canyon (south-western Atlantic Ocean). Zootaxa 3760(1): 89-95. doi:10.11646/zootaxa.3760.1.6. Also WoRMS, Benthodytes violeta."
      }
    },

    "pulpo-dumbo/remera": {
      es: {
        paragraphs: [
          "El pulpo Dumbo pasa gran parte de su vida suspendido sobre el fondo. Cuando encuentra algo para comer, se tira encima y lo traga, sin desgarrar a la presa como hacen otros pulpos.",
          "Come gusanos marinos, pequeños crustáceos, bivalvos y caracoles.",
          "Vive hasta unos 4.000 metros de profundidad."
        ],
        source: "Fuentes: Aquarium of the Pacific, ficha “Dumbo Octopus”; National Geographic, “Dumbo Octopus Facts” y “Mesmerizing, rare dumbo octopus filmed in the deep sea” (2018); WoRMS, Grimpoteuthis."
      },
      en: {
        paragraphs: [
          "*“Cuerpo encima, devora”* means “body on top, it devours.” The dumbo octopus spends much of its life hovering just above the seabed. When it finds something to eat, it pounces and swallows it, without tearing its prey apart the way other octopuses do.",
          "It eats marine worms, small crustaceans, clams and snails.",
          "It lives as deep as 4,000 meters."
        ],
        source: "Sources: Aquarium of the Pacific, “Dumbo Octopus” species page; National Geographic, “Dumbo Octopus Facts” and “Mesmerizing, rare dumbo octopus filmed in the deep sea” (2018); WoRMS, Grimpoteuthis."
      }
    },

    "pulpo-dumbo/toallon": {
      es: {
        paragraphs: [
          "El pulpo Dumbo es un pulpo *cirrado*: al lado de las ventosas de sus brazos tiene unos filamentos parecidos a pelos, los *cirros*.",
          "No se sabe bien para qué sirven, pero se cree que con ellos crea una pequeña corriente que acerca la comida a la boca."
        ],
        source: "Fuentes: Holly Chetan-Welsh, “Dumbo octopus: The murky world of the deepest octopus species”, Natural History Museum (Londres); Corinne Klein, “Incirrate vs. Cirrate Octopuses”, OctoNation (2022); National Geographic, “Dumbo Octopus Facts”."
      },
      en: {
        paragraphs: [
          "*“Cirros que captan”* means “cirri that catch.” The dumbo is a *cirrate* octopus: next to the suckers on its arms it has hair-like filaments called *cirri*.",
          "Nobody knows exactly what they're for, but scientists think the octopus uses them to create a small current that wafts food towards its mouth."
        ],
        source: "Sources: Holly Chetan-Welsh, “Dumbo octopus: The murky world of the deepest octopus species”, Natural History Museum (London); Corinne Klein, “Incirrate vs. Cirrate Octopuses”, OctoNation (2022); National Geographic, “Dumbo Octopus Facts”."
      }
    },

    "mama-tenazas/taza": {
      es: {
        paragraphs: [
          "El 9 de agosto de 2025, a 1.883 metros de profundidad, el robot SuBastian se acercó a la roca donde una langosta patagónica cuidaba a sus ocho crías.",
          "La madre volvió rápido, miró de frente a la cámara y atacó al robot una y otra vez con sus tenazas. “El enfrentamiento del año: ROV contra Mamá Tenazas”, lo bautizó el chat del stream.",
          "Antes de tener crías, la hembra de esta especie lleva hasta 380 huevos pegados bajo la cola."
        ],
        source: "Fuentes: Víctor Ingrassia, “La langosta guerrera que defendió a sus crías y atacó al robot de la expedición científica submarina en Mar del Plata”, Infobae, 9 de agosto de 2025; Laptikhovsky y Reyes (2009), Journal of Natural History 43: 35-46, citado en Wikipedia; WoRMS, Thymops birsteini."
      },
      en: {
        paragraphs: [
          "*“Madre solo una”* means “there’s no one like Mom.” On August 9, 2025, 1,883 meters down, the robot SuBastian got close to a rock where a Patagonian lobsterette was guarding her eight young.",
          "The mother rushed back, stared straight into the camera and went at the robot again and again with her claws. “Fight of the year: ROV vs. Mamá Tenazas,” the stream chat called it.",
          "Before her young hatch, a female of this species carries up to 380 eggs stuck under her tail."
        ],
        source: "Sources: Víctor Ingrassia, “La langosta guerrera que defendió a sus crías y atacó al robot de la expedición científica submarina en Mar del Plata”, Infobae, 9 August 2025; Laptikhovsky & Reyes (2009), Journal of Natural History 43: 35-46, as cited in Wikipedia; WoRMS, Thymops birsteini."
      }
    },

    "mama-tenazas/buzo": {
      es: {
        paragraphs: [
          "Mamá tenazas anda con la armadura puesta: tiene un exoesqueleto sólido, un esqueleto por fuera, hecho de quitina y carbonato de calcio.",
          "Lo de robusta le viene de familia. Las langostas de su familia, los nefrópidos, suelen tener un cuerpo robusto, antenas largas y dos pinzas distintas: una para triturar y otra para cortar. Con ellas enfrentó al robot para defender a sus crías."
        ],
        source: "Fuentes: WoRMS, Thymops birsteini (familia Nephropidae; el exoesqueleto es un dato heredado de su grupo); A-Z Animals, “Lobster” (sitio de divulgación, sobre las langostas en general); Infobae, 9 de agosto de 2025."
      },
      en: {
        paragraphs: [
          "*“Robusta y acorazada”* means “sturdy and armored.” Mamá tenazas wears her armor at all times: a hard exoskeleton, a skeleton on the outside, made of chitin and calcium carbonate.",
          "The sturdiness runs in the family. Clawed lobsters (Nephropidae) tend to have stout bodies, long antennae and two different claws, one for crushing and one for cutting. Those are the claws she used to fight off the robot and protect her young."
        ],
        source: "Sources: WoRMS, Thymops birsteini (family Nephropidae; the exoskeleton is a trait inherited from her group); A-Z Animals, “Lobster” (a popular-science site, about lobsters in general); Infobae, 9 August 2025."
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
