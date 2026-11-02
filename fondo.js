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
          mate: "Mate enlozado antiguo, color crema con borde azul, con yerba y bombilla. En el medio, la estrella Patricio y arriba, en arco, la frase sensible a la perturbación. Usá los botones o el pellizco para acercarte."
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
          mate: "Old enamel mate, cream with a blue rim, with yerba and a bombilla (metal straw). In the middle, the Patricio starfish and, above it in an arc, the phrase sensible a la perturbación (sensitive to disturbance). Use the buttons or pinch to zoom in."
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
          svg: "fondo/assets/mate-svg.html", ratio: 800 / 760
        },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-patricio.webp", file: "fondo/assets/postales/postal-patricio.png" }
      ]
    },

    {
      id: "batatita",
      name: "Batatita",
      date: "29-07-2025",
      items: [
        { id: "taza", es: "Taza", en: "Mug" },
        { id: "gorra", es: "Gorra", en: "Cap" },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-batatita.webp", file: "fondo/assets/postales/postal-batatita.png" }
      ]
    },

    {
      id: "pulpo-dumbo",
      name: "Pulpo Dumbo",
      date: "05-08-2025",
      items: [
        { id: "remera", es: "Remera", en: "T-shirt" },
        { id: "toallon", es: "Toallón playero", en: "Beach towel" },
        { id: "postal", es: "Postal", en: "Postcard", kind: "postal", thumb: "fondo/assets/thumbs/postal-pulpo-dumbo.webp", file: "fondo/assets/postales/postal-pulpo-dumbo.png" }
      ]
    },

    {
      id: "mama-tenazas",
      name: "Mamá tenazas",
      date: "09-08-2025",
      items: [
        { id: "iman", es: "Imán", en: "Magnet" },
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
