// ============================================================
//  LABORATORIO DE IDEAS · el servicio de una semana
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
  const section = document.getElementById("lab");

  if (!section) return;


  // ------------------------------------------------------------
  //  TEXTOS
  // ------------------------------------------------------------

  const TEXTOS = {

    es: {
      eyebrow: "Trabajemos juntos una semana",
      title: "Laboratorio de ideas",
      lead: [
        "¿Tenés un problema, una idea a medio armar o un producto que no termina de despegar?",
        "En *una semana* lo entendemos a fondo y te llevás un diagnóstico, una propuesta de solución y un mockup de cómo se vería."
      ],

      forTitle: "¿Para quién es?",
      forList: [
        "*Marcas* que quieren lanzar algo nuevo y ordenar la idea antes de invertir.",
        "*Startups* que necesiten decidir qué construir primero.",
        "*Consultoras* que buscan sumar diseño de producto a la propuesta para un cliente."
      ],

      getTitle: "¿Qué te llevás?",
      get: [
        {
          title: "Un diagnóstico",
          text: "Lo que les pasa a tus usuarios, basado en investigación y no en suposiciones."
        },
        {
          title: "Una propuesta de solución",
          text: "Una idea concreta para resolverlo y lo que haría falta para llevarla adelante."
        },
        {
          title: "Un mockup",
          text: "Las pantallas o los flujos que muestran cómo se vería la propuesta. Te sirve para presentarla a tu equipo y a otros stakeholders, y tomar decisiones con evidencia antes de invertir en desarrollo."
        }
      ],

      weekTitle: "¿Cómo es la semana?",
      week: [
        { day: "Día 1", title: "Entender", text: "Nos reunimos 30 minutos para charlar sobre tu necesidad. Si te falta material, te paso un cuestionario para conseguirlo." },
        { day: "Día 2", title: "Investigar", text: "Relevo tu web, las interacciones con la marca y todo el material que tengas." },
        { day: "Día 3", title: "Diagnosticar y proponer", text: "Ordeno lo que encontré, defino el problema real y te propongo una solución. La validás por escrito." },
        { day: "Día 4", title: "Diseñar", text: "Armo el mockup de la propuesta." },
        { day: "Día 5", title: "Entregar", text: "Nos reunimos 30 minutos para presentarte el diagnóstico, la propuesta y el mockup." }
      ],

      moreTitle: "Si querés seguir",
      moreIntro: "El laboratorio funciona solo, pero también puede ser el comienzo.",
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
      priceNote: "Una semana de laboratorio, con los tres entregables. Las extensiones se cotizan aparte.",

      trustTitle: "Cómo trabajo",
      trust: [
        "Para hacer las cosas siempre hace falta un proceso. Investigo antes de proponer, te cuento los avances todos los días y cada decisión tiene un porqué que te puedo explicar.",
        "Así trabajé en estos proyectos:"
      ],
      cases: [
        { href: "#fondo", label: "Fondo, de un stream de ciencia a una tienda de souvenirs" },
        { href: "#kombi", label: "Kombi, el asistente de Volkswagen Argentina" },
        { href: "#ele", label: "Ele, un chatbot de divulgación científica" }
      ],

      ctaTitle: "¿Tenés una idea?",
      ctaText: "Contame en qué estás y vemos si el laboratorio te sirve.",
      ctaButton: "Escribime",
      ctaSubject: "Laboratorio de ideas",
      otherProjects: "Ver mis proyectos"
    },

    en: {
      eyebrow: "Let's work together for a week",
      title: "Idea Lab",
      lead: [
        "Do you have a problem, a half-formed idea or a product that isn't taking off?",
        "In *one week*, we get to the bottom of it, and you walk away with a diagnosis, a solution proposal and a mockup of how it would look."
      ],

      forTitle: "Who is it for?",
      forList: [
        "*Brands* that want to launch something new and shape the idea before investing.",
        "*Startups* that need to decide what to build first.",
        "*Consultancies* looking to add product design to a client proposal."
      ],

      getTitle: "What do you get?",
      get: [
        {
          title: "A diagnosis",
          text: "What's happening to your users, based on research, not assumptions."
        },
        {
          title: "A solution proposal",
          text: "A concrete idea to solve it and what it would take to make it happen."
        },
        {
          title: "A mockup",
          text: "The screens or flows that show how the proposal would look. Use it to present the idea to your team and other stakeholders, and make evidence-based decisions before investing in development."
        }
      ],

      weekTitle: "How does the week work?",
      week: [
        { day: "Day 1", title: "Understand", text: "We meet for 30 minutes to talk about what you need. If material is missing, I send you a questionnaire to gather it." },
        { day: "Day 2", title: "Research", text: "I review your website, how people interact with the brand and any material you have." },
        { day: "Day 3", title: "Diagnose and propose", text: "I organize the findings, pin down the real problem and propose a solution. You sign off on it in writing." },
        { day: "Day 4", title: "Design", text: "I build the mockup of the proposal." },
        { day: "Day 5", title: "Deliver", text: "We meet for 30 minutes so I can walk you through the diagnosis, the proposal and the mockup." }
      ],

      moreTitle: "If you want to keep going",
      moreIntro: "The lab works on its own, but it can also be a starting point.",
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
      priceNote: "One week in the lab, with all three deliverables. Add-ons are quoted separately.",

      trustTitle: "How I work",
      trust: [
        "To get things done, you always need a process. I research before I propose, keep you posted every day, and every decision comes with a reason I can explain.",
        "That's how I worked on these projects:"
      ],
      cases: [
        { href: "#fondo", label: "Fondo, from a science stream to a souvenir shop" },
        { href: "#kombi", label: "Kombi, Volkswagen Argentina's assistant" },
        { href: "#ele", label: "Ele, a science communication chatbot" }
      ],

      ctaTitle: "Got an idea?",
      ctaText: "Tell me what you're working on and we'll see if the lab is a good fit.",
      ctaButton: "Write to me",
      ctaSubject: "Idea Lab",
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
      ${text.lead.map((line) => `<p class="sprint-lead">${rich(line)}</p>`).join("")}

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
