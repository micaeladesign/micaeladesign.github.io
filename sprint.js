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
        "En *5 días* y *sin reuniones* te llevás una propuesta completa."
      ],

      forTitle: "¿Para quién es?",
      forList: [
        "*Marcas* que quieren lanzar algo nuevo y ordenar la idea antes de invertir.",
        "*Startups* que necesiten decidir qué construir primero.",
        "*Consultoras* que buscan sumar diseño de producto a la propuesta para un cliente."
      ],

      getTitle: "¿Qué te llevás?",
      getIntro: "Una presentación con todo el trabajo, lista para compartir con tu equipo. Tiene tres partes:",
      get: [
        {
          title: "Discovery",
          text: "Lo que encontré al investigar a tus usuarios, basado en evidencia y no en suposiciones."
        },
        {
          title: "El problema",
          text: "Qué es lo que realmente hay que resolver."
        },
        {
          title: "La solución",
          text: "Una propuesta concreta con su mockup."
        }
      ],

      weekTitle: "¿Cómo es la semana?",
      week: [
        { day: "Día 1", title: "Entender", text: "Me contás por escrito qué necesitás y me compartís el material que tengas." },
        { day: "Día 2", title: "Investigar", text: "Relevo tu web, las interacciones con la marca y todo el material que tengas." },
        { day: "Día 3", title: "Diagnosticar", text: "Ordeno el material y defino el problema." },
        { day: "Día 4", title: "Diseñar", text: "Armo la propuesta de solución y su mockup." },
        { day: "Día 5", title: "Entregar", text: "Te mando por mail la presentación final." }
      ],

      moreTitle: "¿Y después?",
      moreIntro: "El laboratorio puede ser solo el comienzo. Estos servicios se cotizan aparte.",
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
      price: "USD [[monto]]*",
      priceFootnote: "*También podés pagar en pesos.",
      priceNote: "5 días de laboratorio y una presentación final con todo el trabajo.",

      ctaTitle: "¿Tenés una idea?",
      ctaText: "Completá el formulario y vemos si el laboratorio es para vos.",
      ctaButton: "Enviar",
      ctaSubject: "Laboratorio de ideas",
      form: {
        name: "Nombre",
        email: "Mail",
        company: "Marca o empresa (opcional)",
        message: "¿Qué necesitás resolver?",
        sending: "Enviando…",
        success: "¡Gracias! Te respondo en estos días.",
        error: "No se pudo enviar. Probá de nuevo o escribime a {email}."
      },
      otherProjects: "Ver mis proyectos"
    },

    en: {
      eyebrow: "Let's build something together",
      title: "Idea Lab",
      lead: [
        "Do you have a problem, a half-formed idea or a product that isn't taking off?",
        "In *5 days*, with *no meetings*, you get a complete proposal."
      ],

      forTitle: "Who is it for?",
      forList: [
        "*Brands* that want to launch something new and shape the idea before investing.",
        "*Startups* that need to decide what to build first.",
        "*Consultancies* looking to add product design to a client proposal."
      ],

      getTitle: "What do you get?",
      getIntro: "A presentation with all the work, ready to share with your team. It has three parts:",
      get: [
        {
          title: "Discovery",
          text: "What I found while researching your users, based on evidence, not assumptions."
        },
        {
          title: "The problem",
          text: "What really needs to be solved."
        },
        {
          title: "The solution",
          text: "A concrete proposal with its mockup."
        }
      ],

      weekTitle: "How does the week work?",
      week: [
        { day: "Day 1", title: "Understand", text: "You tell me in writing what you need and share any material you have." },
        { day: "Day 2", title: "Research", text: "I review your website, how people interact with the brand and any material you have." },
        { day: "Day 3", title: "Diagnose", text: "I organize the material and define the problem." },
        { day: "Day 4", title: "Design", text: "I put together the solution proposal and its mockup." },
        { day: "Day 5", title: "Deliver", text: "I email you the final presentation." }
      ],

      moreTitle: "What's next?",
      moreIntro: "The lab can be just the beginning. These services are quoted separately.",
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
      price: "USD [[amount]]*",
      priceFootnote: "*You can also pay in Argentine pesos.",
      priceNote: "5 days in the lab and a final presentation with all the work.",

      ctaTitle: "Got an idea?",
      ctaText: "Fill out the form and we'll see if the lab is right for you.",
      ctaButton: "Send",
      ctaSubject: "Idea Lab",
      form: {
        name: "Name",
        email: "Email",
        company: "Brand or company (optional)",
        message: "What do you need to solve?",
        sending: "Sending…",
        success: "Thank you! I'll get back to you soon.",
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

      <h3>${escapeHtml(text.moreTitle)}</h3>
      <p>${rich(text.moreIntro)}</p>
      ${cards(text.more, "more")}

      <div class="sprint-price">
        <p class="sprint-price-label">${escapeHtml(text.priceTitle)}</p>
        <p class="sprint-price-amount">${rich(text.price)}</p>
        <p class="sprint-price-note">${rich(text.priceNote)}</p>
        <p class="sprint-price-footnote">${rich(text.priceFootnote)}</p>
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
          <label>
            <span>${escapeHtml(text.form.message)}</span>
            <textarea name="message" rows="5" required></textarea>
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
