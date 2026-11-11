// ============================================================
//  SPRINT DE IDEAS · el servicio
//
//  CÓMO EDITAR EL CONTENIDO (todo vive en este archivo, arriba de todo)
//
//  TEXTOS -> toda la página en español e inglés.
//            Dentro de un texto: *palabra* = negrita.
//            [[texto]] = dato pendiente: se ve resaltado en amarillo
//            para que no se escape a producción sin revisar.
//            Cuando lo definas, borrá los corchetes y listo.
//
//  El idioma se lee de <html lang="..."> (lo cambia script.js con el selector
//  English / Español); esta página se vuelve a dibujar sola cuando cambia.
//  Estilos en sprint.css.
// ============================================================

(() => {
  const section = document.getElementById("sprint");

  if (!section) return;


  // ------------------------------------------------------------
  //  TEXTOS
  // ------------------------------------------------------------

  const TEXTOS = {

    es: {
      eyebrow: "Trabajemos juntos",
      title: "Sprint de ideas",
      lead: "Tenés un problema, una idea a medio armar o un producto que no termina de despegar. En *una semana* lo entendemos a fondo y salís con un diagnóstico, tres caminos posibles y uno de ellos listo para mostrar.",

      forTitle: "¿Para quién es?",
      forList: [
        "*Marcas* que quieren lanzar algo nuevo y necesitan ordenar la idea antes de invertir.",
        "*Startups chicas* que tienen que decidir qué construir primero.",
        "*Consultoras* que quieren sumar diseño de producto a una propuesta para su cliente."
      ],

      getTitle: "Qué te llevás",
      get: [
        {
          title: "Un diagnóstico",
          text: "Qué está pasando, a quién le pasa y dónde está la oportunidad. Con lo que vimos en la investigación, no con suposiciones."
        },
        {
          title: "Tres propuestas de solución",
          text: "Tres caminos distintos, con lo que tiene a favor y en contra cada uno y lo que haría falta para llevarlo adelante."
        },
        {
          title: "Un prototipo o un pitch",
          text: "La propuesta que elijamos, lista para mostrar: un prototipo para probar con personas o una presentación para convencer a tu equipo."
        }
      ],

      weekTitle: "Cómo es la semana",
      week: [
        { day: "Día 1", title: "Entender", text: "Charlamos sobre el problema, el negocio y lo que ya probaron. Me pasás todo el material que tengas." },
        { day: "Día 2", title: "Investigar", text: "Miro a las personas, a la competencia y los datos que haya. Si hay conversaciones con clientes, mejor." },
        { day: "Día 3", title: "Diagnosticar", text: "Ordeno lo que encontré y defino dónde está el problema real." },
        { day: "Día 4", title: "Proponer", text: "Te presento tres propuestas y elegimos juntos cuál avanzar." },
        { day: "Día 5", title: "Mostrar", text: "Armo el prototipo o el pitch de la propuesta elegida y te lo entrego." }
      ],

      moreTitle: "Si querés seguir",
      moreIntro: "El sprint funciona solo, pero también puede ser el comienzo.",
      more: [
        {
          title: "Pitch deck",
          text: "Convierto la propuesta en una presentación para inversores, socios o tu propio directorio."
        },
        {
          title: "Equipo para ejecutar",
          text: "Te ayudo a definir qué perfiles necesitás y a armar el equipo para llevar la idea a producto."
        }
      ],

      priceTitle: "Inversión",
      price: "USD [[monto]]",
      priceNote: "Sprint de una semana, con los tres entregables. Las extensiones se cotizan aparte.",

      trustTitle: "Cómo trabajo",
      trust: [
        "Para hacer las cosas siempre hace falta un proceso. Investigo antes de proponer, comparto avances todos los días y cada decisión tiene un porqué que te puedo explicar.",
        "Así trabajé en estos proyectos:"
      ],
      cases: [
        { href: "#fondo", label: "Fondo, de un stream de ciencia a una tienda de souvenirs" },
        { href: "#kombi", label: "Kombi, el asistente de Volkswagen Argentina" },
        { href: "#ele", label: "Ele, un chatbot de divulgación científica" }
      ],

      ctaTitle: "¿Tenés una idea?",
      ctaText: "Contame en qué estás y vemos si un sprint te sirve.",
      ctaButton: "Escribime",
      ctaSubject: "Sprint de ideas",
      otherProjects: "Ver mis proyectos"
    },

    en: {
      eyebrow: "Let's work together",
      title: "Idea sprint",
      lead: "You have a problem, a half-formed idea or a product that isn't taking off. In *one week*, we get to the bottom of it, and you walk away with a diagnosis, three possible paths and one of them ready to show.",

      forTitle: "Who is it for?",
      forList: [
        "*Brands* that want to launch something new and need to shape the idea before investing.",
        "*Small startups* that need to decide what to build first.",
        "*Consultancies* that want to add product design to a client proposal."
      ],

      getTitle: "What you get",
      get: [
        {
          title: "A diagnosis",
          text: "What's going on, who it affects and where the opportunity is. Based on what the research shows, not on assumptions."
        },
        {
          title: "Three solution proposals",
          text: "Three different paths, each with its pros and cons and what it would take to make it happen."
        },
        {
          title: "A prototype or a pitch",
          text: "The proposal we choose, ready to show: a prototype to test with people or a presentation to win over your team."
        }
      ],

      weekTitle: "How the week works",
      week: [
        { day: "Day 1", title: "Understand", text: "We talk about the problem, the business and what you've already tried. You share any material you have." },
        { day: "Day 2", title: "Research", text: "I look at people, competitors and any available data. Customer conversations are a bonus." },
        { day: "Day 3", title: "Diagnose", text: "I organize the findings and pin down the real problem." },
        { day: "Day 4", title: "Propose", text: "I present three proposals and we choose one together." },
        { day: "Day 5", title: "Show", text: "I build the prototype or the pitch for the chosen proposal and hand it over." }
      ],

      moreTitle: "If you want to keep going",
      moreIntro: "The sprint works on its own, but it can also be a starting point.",
      more: [
        {
          title: "Pitch deck",
          text: "I turn the proposal into a deck for investors, partners or your own board."
        },
        {
          title: "A team to build it",
          text: "I help you define the roles you need and put together the team to turn the idea into a product."
        }
      ],

      priceTitle: "Investment",
      price: "USD [[amount]]",
      priceNote: "One-week sprint with all three deliverables. Add-ons are quoted separately.",

      trustTitle: "How I work",
      trust: [
        "To get things done, you always need a process. I research before I propose, share progress every day, and every decision comes with a reason I can explain.",
        "That's how I worked on these projects:"
      ],
      cases: [
        { href: "#fondo", label: "Fondo, from a science stream to a souvenir shop" },
        { href: "#kombi", label: "Kombi, Volkswagen Argentina's assistant" },
        { href: "#ele", label: "Ele, a science communication chatbot" }
      ],

      ctaTitle: "Got an idea?",
      ctaText: "Tell me what you're working on and we'll see if a sprint is a good fit.",
      ctaButton: "Write to me",
      ctaSubject: "Idea sprint",
      otherProjects: "See my work"
    }
  };


  const EMAIL = "micaelacanal7@gmail.com";

  let lang = null;


  // ------------------------------------------------------------
  //  Ayudas
  // ------------------------------------------------------------

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }


  // *negrita* y [[pendiente]]
  function rich(text) {
    return escapeHtml(text)
      .replace(/\*(.+?)\*/g, "<strong>$1</strong>")
      .replace(/\[\[(.+?)\]\]/g, '<mark class="sprint-pending" title="Pendiente">$1</mark>');
  }


  function paragraphs(list) {
    return list.map((text) => `<p>${rich(text)}</p>`).join("");
  }


  function cards(list, modifier) {
    return `
      <ul class="sprint-cards sprint-cards--${modifier}">
        ${list.map((item, index) => `
          <li class="sprint-card">
            ${modifier === "get" ? `<span class="sprint-card-number" aria-hidden="true">${index + 1}</span>` : ""}
            <h4>${rich(item.title)}</h4>
            <p>${rich(item.text)}</p>
          </li>`).join("")}
      </ul>`;
  }


  // ------------------------------------------------------------
  //  Página
  // ------------------------------------------------------------

  function render() {

    const text = TEXTOS[lang];

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(text.ctaSubject)}`;

    section.innerHTML = `
      <p class="sprint-eyebrow">${escapeHtml(text.eyebrow)}</p>
      <h2>${escapeHtml(text.title)}</h2>
      <p class="sprint-lead">${rich(text.lead)}</p>

      <h3>${escapeHtml(text.forTitle)}</h3>
      <ul class="sprint-list">
        ${text.forList.map((item) => `<li>${rich(item)}</li>`).join("")}
      </ul>

      <h3>${escapeHtml(text.getTitle)}</h3>
      ${cards(text.get, "get")}

      <h3>${escapeHtml(text.weekTitle)}</h3>
      <ol class="sprint-week">
        ${text.week.map((step) => `
          <li>
            <span class="sprint-day">${escapeHtml(step.day)}</span>
            <div>
              <h4>${escapeHtml(step.title)}</h4>
              <p>${rich(step.text)}</p>
            </div>
          </li>`).join("")}
      </ol>

      <h3>${escapeHtml(text.moreTitle)}</h3>
      <p>${rich(text.moreIntro)}</p>
      ${cards(text.more, "more")}

      <div class="sprint-price">
        <p class="sprint-price-label">${escapeHtml(text.priceTitle)}</p>
        <p class="sprint-price-amount">${rich(text.price)}</p>
        <p class="sprint-price-note">${rich(text.priceNote)}</p>
      </div>

      <h3>${escapeHtml(text.trustTitle)}</h3>
      ${paragraphs(text.trust)}
      <div class="sprint-cases">
        ${text.cases.map((item) => `<a href="${item.href}" class="conversation-choice">${escapeHtml(item.label)}</a>`).join("")}
      </div>

      <div class="sprint-cta">
        <h3>${escapeHtml(text.ctaTitle)}</h3>
        <p>${rich(text.ctaText)}</p>
        <a class="sprint-cta-button" href="${mailto}">${escapeHtml(text.ctaButton)}</a>
      </div>

      <div class="conversation-options">
        <a href="#work" class="conversation-choice">${escapeHtml(text.otherProjects)}</a>
      </div>`;
  }


  // ------------------------------------------------------------
  //  Idioma: se vuelve a dibujar cuando script.js cambia <html lang>
  // ------------------------------------------------------------

  function syncLanguage() {

    const next = document.documentElement.lang === "en" ? "en" : "es";

    if (next === lang && section.firstChild) return;

    lang = next;

    render();
  }


  new MutationObserver(syncLanguage).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });


  syncLanguage();

})();
