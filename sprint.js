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
      eyebrow: "Hagamos un proyecto juntos",
      title: "Laboratorio de ideas",
      lead: [
        "¿Tenés un problema, una idea a medio armar o un producto que no termina de despegar?",
        "En *5 días* y *sin reuniones* te llevás un *plan de acción*.",
        "Si arrancás un lunes, el viernes tenés el informe. Y el lunes siguiente tu equipo ya trabaja en una dirección clara."
      ],

      forTitle: "¿Para quién es?",
      forList: [
        "*Marcas* que quieren ordenar una idea antes de invertir y lanzarla.",
        "*Startups* que necesiten decidir qué construir primero.",
        "*Consultoras* que buscan sumar diseño de producto a la propuesta para un cliente."
      ],

      getTitle: "¿Qué te llevás?",
      getIntro: "Un informe con decisiones, no con opiniones. Cuatro partes:",
      get: [
        {
          title: "Discovery",
          text: "Qué hacen y qué necesitan tus usuarios. Con evidencia, no con suposiciones."
        },
        {
          title: "El problema",
          text: "Lo que realmente hay que resolver, en una frase."
        },
        {
          title: "La solución",
          text: "Una propuesta concreta, con su mockup."
        },
        {
          title: "Plan de acción",
          text: "Qué construir, en qué orden y cómo medir si funciona."
        }
      ],

      weekTitle: "¿Cómo es la semana?",
      week: [
        { day: "Día 1", title: "Entender", text: "Me contás por escrito qué necesitás y me pasás el material que tengas." },
        { day: "Día 2", title: "Investigar", text: "Reviso tu web, cómo interactúan con tu marca y todo tu material." },
        { day: "Día 3", title: "Diagnosticar", text: "Ordeno lo que encontré y defino el problema." },
        { day: "Día 4", title: "Diseñar", text: "Armo la solución, su mockup y el plan de acción." },
        { day: "Día 5", title: "Entregar", text: "Te mando el informe. Tu equipo ya sabe qué hacer." }
      ],

      exampleTitle: "¿Querés ver un ejemplo?",
      exampleBadge: "Demo · cliente ficticio",
      exampleText: "*Brote* es un vivero online inventado para mostrarte cómo trabajo. La marca y los datos son ficticios. El formato es el mismo que recibís vos.",
      examplePages: [
        { src: "assets/lab/brote-portada.webp", caption: "El punto de partida" },
        { src: "assets/lab/brote-problema.webp", caption: "El problema, en una frase" },
        { src: "assets/lab/brote-solucion.webp", caption: "La solución, con su mockup" },
        { src: "assets/lab/brote-proximos-pasos.webp", caption: "El plan de acción" }
      ],
      examplePdf: "assets/lab/ejemplo-brote.pdf",
      exampleButton: "Ver el informe completo (PDF)",

      priceTitle: "Inversión",
      price: "USD 49",
      priceNote: "5 días de trabajo y un informe con tu plan de acción.",

      ctaTitle: "¿Tenés una idea?",
      ctaText: "Dejá tus datos y te escribo con los próximos pasos para empezar.",
      ctaButton: "Enviar",
      ctaSubject: "Laboratorio de ideas",
      form: {
        name: "Nombre",
        email: "Mail",
        company: "Marca o empresa (opcional)",
        sending: "Enviando…",
        success: "¡Gracias! Te escribo en estos días con los próximos pasos.",
        error: "No se pudo enviar. Probá de nuevo o escribime a {email}."
      },
      otherProjects: "Ver mis proyectos"
    },

    en: {
      eyebrow: "Let's build something together",
      title: "Idea Lab",
      lead: [
        "Do you have a problem, a half-formed idea or a product that isn't taking off?",
        "In *5 days*, with *no meetings*, you get an *action plan*.",
        "Start on a Monday and you get the report on Friday. The next Monday, your team is already working in a clear direction."
      ],

      forTitle: "Who is it for?",
      forList: [
        "*Brands* that want to shape an idea before investing in it and launching it.",
        "*Startups* that need to decide what to build first.",
        "*Consultancies* looking to add product design to a client proposal."
      ],

      getTitle: "What do you get?",
      getIntro: "A report with decisions, not opinions. Four parts:",
      get: [
        {
          title: "Discovery",
          text: "What your users do and need. Based on evidence, not assumptions."
        },
        {
          title: "The problem",
          text: "What really needs to be solved, in one sentence."
        },
        {
          title: "The solution",
          text: "A concrete proposal, with its mockup."
        },
        {
          title: "Action plan",
          text: "What to build, in what order and how to measure if it works."
        }
      ],

      weekTitle: "How does the week work?",
      week: [
        { day: "Day 1", title: "Understand", text: "You tell me in writing what you need and share any material you have." },
        { day: "Day 2", title: "Research", text: "I review your website, how people interact with your brand and all your material." },
        { day: "Day 3", title: "Diagnose", text: "I organize what I found and define the problem." },
        { day: "Day 4", title: "Design", text: "I build the solution, its mockup and the action plan." },
        { day: "Day 5", title: "Deliver", text: "I send you the report. Your team knows what to do next." }
      ],

      exampleTitle: "Want to see an example?",
      exampleBadge: "Demo · fictional client",
      exampleText: "*Brote* is a made-up online plant shop, created to show you how I work. The brand and the data are fictional. The format is the same one you get. (The example is in Spanish.)",
      examplePages: [
        { src: "assets/lab/brote-portada.webp", caption: "The starting point" },
        { src: "assets/lab/brote-problema.webp", caption: "The problem, in one sentence" },
        { src: "assets/lab/brote-solucion.webp", caption: "The solution, with its mockup" },
        { src: "assets/lab/brote-proximos-pasos.webp", caption: "The action plan" }
      ],
      examplePdf: "assets/lab/ejemplo-brote.pdf",
      exampleButton: "See the full report (PDF)",

      priceTitle: "Investment",
      price: "USD 49",
      priceNote: "5 days of work and a report with your action plan.",

      ctaTitle: "Got an idea?",
      ctaText: "Leave your details and I'll write back with the next steps.",
      ctaButton: "Send",
      ctaSubject: "Idea Lab",
      form: {
        name: "Name",
        email: "Email",
        company: "Brand or company (optional)",
        sending: "Sending…",
        success: "Thank you! I'll write to you soon with the next steps.",
        error: "Something went wrong. Please try again or email me at {email}."
      },
      otherProjects: "See my work"
    }
  };


  const EMAIL = "micaelacanal7@gmail.com";

  // Formulario: los mensajes llegan por mail a través de Web3Forms (web3forms.com).
  // Esta clave es pública por diseño: solo sirve para mandarte mensajes a vos.
  const WEB3FORMS_KEY = "1868d9a2-faff-4bb5-a72d-20b61a4f622c";

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

    section.innerHTML = `
      <img src="assets/lab-icono.svg" alt="" class="sprint-logo" width="56" height="72">
      <p class="sprint-eyebrow">${escapeHtml(text.eyebrow)}</p>
      <h2>${escapeHtml(text.title)}</h2>
      ${text.lead.map((line) => `<p class="sprint-lead">${rich(line)}</p>`).join("")}

      <h3>${escapeHtml(text.forTitle)}</h3>
      <ul class="sprint-list">
        ${text.forList.map((item) => `<li>${rich(item)}</li>`).join("")}
      </ul>

      <h3>${escapeHtml(text.getTitle)}</h3>
      <p>${rich(text.getIntro)}</p>
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

      <div class="sprint-example">
        <h3>${escapeHtml(text.exampleTitle)}</h3>
        <p class="sprint-example-badge">${escapeHtml(text.exampleBadge)}</p>
        <p>${rich(text.exampleText)}</p>
        <ul class="sprint-example-pages">
          ${text.examplePages.map((page) => `
            <li>
              <a href="${text.examplePdf}" target="_blank" rel="noopener">
                <img src="${page.src}" alt="${escapeHtml(page.caption)}" width="1200" height="676" loading="lazy">
              </a>
              <span>${escapeHtml(page.caption)}</span>
            </li>`).join("")}
        </ul>
        <a class="sprint-example-button" href="${text.examplePdf}" target="_blank" rel="noopener">${escapeHtml(text.exampleButton)}</a>
      </div>

      <div class="sprint-price">
        <p class="sprint-price-label">${escapeHtml(text.priceTitle)}</p>
        <p class="sprint-price-amount">${rich(text.price)}</p>
        <p class="sprint-price-note">${rich(text.priceNote)}</p>
      </div>


      <div class="sprint-cta">
        <h3>${escapeHtml(text.ctaTitle)}</h3>
        <p>${rich(text.ctaText)}</p>
        <form class="sprint-form" id="lab-form" novalidate>
          <label>
            <span>${escapeHtml(text.form.name)}</span>
            <input type="text" name="name" autocomplete="name" required>
          </label>
          <label>
            <span>${escapeHtml(text.form.email)}</span>
            <input type="email" name="email" autocomplete="email" required>
          </label>
          <label>
            <span>${escapeHtml(text.form.company)}</span>
            <input type="text" name="company" autocomplete="organization">
          </label>
          <input type="checkbox" name="botcheck" class="sprint-form-trap" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button type="submit" class="sprint-cta-button">${escapeHtml(text.ctaButton)}</button>
          <p class="sprint-form-status" role="status" aria-live="polite"></p>
        </form>
      </div>

      <div class="conversation-options">
        <a href="#work" class="conversation-choice">${escapeHtml(text.otherProjects)}</a>
      </div>`;
  }


  // ------------------------------------------------------------
  //  Envío del formulario
  // ------------------------------------------------------------

  section.addEventListener("submit", async (event) => {

    const form = event.target.closest("#lab-form");

    if (!form) return;

    event.preventDefault();

    const text = TEXTOS[lang];
    const status = form.querySelector(".sprint-form-status");
    const button = form.querySelector("button[type=submit]");

    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form));

    // Si el casillero oculto está marcado, lo completó un robot
    if (data.botcheck) return;

    delete data.botcheck;

    button.disabled = true;
    status.className = "sprint-form-status";
    status.textContent = text.form.sending;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${text.ctaSubject}: ${data.name}`,
          from_name: "Portfolio · Laboratorio de ideas",
          ...data
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message);

      form.reset();
      status.classList.add("is-success");
      status.textContent = text.form.success;

    } catch (error) {
      status.classList.add("is-error");
      status.textContent = text.form.error.replace("{email}", EMAIL);

    } finally {
      button.disabled = false;
    }
  });


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
