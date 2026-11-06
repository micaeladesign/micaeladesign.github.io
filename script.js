const sections = document.querySelectorAll(".page-section");

const navLinks = document.querySelectorAll(".main-nav a");

const langEn = document.getElementById("lang-en");
const langEs = document.getElementById("lang-es");


const content = {

  en: {

    pageTitle:
      "Micaela Cañal — Product Designer",

    pageDescription:
      "Portfolio of Micaela Cañal, Product Designer: conversational experiences, with and without AI, from Kombi at Volkswagen Argentina to Ele, a linguistics chatbot.",

    navLabel:
      "Main",

    languageLabel:
      "Language",

    navHome:
      "Home",

    navAbout:
      "About",

    navWork:
      "Work",

    navContact:
      "Contact",

    portfolioLabel: "MICAELA CAÑAL — PORTFOLIO",

    homeTitle: "Hello",

    homeText:
      "Explore my background, projects, and approach to product design.",

    homeAboutChoice:
      "Get to know me",

    homeWorkChoice:
      "See my work",

    aboutTitle:
      "Product Designer",

    aboutHtml: `
        <p class="about-tagline">Thoughtful<br>by design</p>

        <p><strong>I’m Micaela Cañal.</strong> I’m a Product Designer.</p>

        <p>When I was 11, I wrote an essay called “The Meaning of Life.” Most of it hasn’t aged well, except for one line: <em>“to get things done, you always need a process.”</em> Today, it’s at the heart of how I design.</p>

        <p>I studied <strong>Linguistics</strong> at the University of Buenos Aires and earned a master’s in <strong>Narrative Journalism</strong> at the University of San Martín.</p>

        <p>I bring a research methodology and a curious spirit to every project I take on.</p>

        <p>I’ve spent <strong>five years</strong> designing <strong>conversational experiences</strong>, with and without AI. I focus on understanding what people need, what the business needs, and what value technology actually adds. The goal? A product worth building.</p>
    `,

    aboutWorkChoice:
      "See my work",

    workTitle:
      "See my work",

    workIntro:
      "Choose one to discover what I've been up to.",

  contactTitle:
  "Let's talk",

  contactText:
  "I’d love to hear from you.",

  contactEmail:
  "micaelacanal7@gmail.com",

  contactLinkedIn:
  "LinkedIn",

    resumeLink:
      "View my CV",

    resumeFile:
      "assets/cv-micaela-canal-en.pdf",

    kombi: {

      title:
        "Kombi, Volkswagen Argentina",

      content: `
        <p><strong>Kombi is Volkswagen Argentina’s conversational assistant.</strong> It is designed to support potential customers as they explore the brand’s models and to help existing customers with their after-sales needs.</p>

        <p><strong>What’s its mission?</strong> To take care of the tedious stuff so people can focus on enjoying their car.</p>

        <p>This project had two distinct stages: the first was deterministic, and the second was AI-powered.</p>

        <h3>My role</h3>

       <h4>In the deterministic stage</h4>

<div class="kombi-stage-layout">
  <div class="kombi-stage-text">

    <p>I designed the overall conversation map, connecting people’s needs with triggers, intents, and integrations: elements identified through conversation analysis and business objectives.</p>

    <p>I also co-built the NLU and REGEX with the Development team, and worked with the UX Writer on content review, providing feedback on personality, tone, grammar, and prosody.</p>

  </div>

  <img
    src="assets/kombi_deterministic.png"
    alt="Kombi's deterministic WhatsApp conversation"
    class="kombi-stage-image"
    role="button"
    tabindex="0"
    aria-label="Enlarge conversation image"
  >
</div>
     <h4>In the hybrid stage</h4>

<div class="kombi-stage-layout">
  <div class="kombi-stage-text">

    <p>Today, I’m responsible for <strong>designing the overall agentic experience</strong>: defining which agents are needed, each agent’s mission, its objectives, and the tools it requires. I work effectively both independently and collaboratively, adapting to different team dynamics.</p>

    <p>In this case, the process starts with an exploratory exercise in which I design an architecture proposal. I then share it with interdisciplinary profiles, including developers, writers, project managers, and stakeholders, to review and iterate on it. Finally, we co-design the agents’ prompts and behaviors.</p>

    <p>An important part of my work is deciding <strong>where AI makes sense</strong>, balancing the needs of the experience, the possibilities of the technology, and the resources available.</p>

    <p>It’s not about adding agents just because they’re trendy, but about designing the most appropriate solution. This project taught me that designing for AI also means knowing when not to use it.</p>

  </div>

  <img
    src="assets/kombi_hybrid.png"
    alt="Kombi's AI-powered WhatsApp conversation"
    class="kombi-stage-image"
    role="button"
    tabindex="0"
    aria-label="Enlarge conversation image"
  >
</div>
      `,

      next:
        "Other projects",

      nextHref:
        "#work"
    },


    ele: {

      title:
        "Ele, science communication chatbot",

      content: `
        <p><strong>Ele is a science communication chatbot about linguistics.</strong> It was created as part of Argentina’s Science Week, organized by the Ministry of Science, Technology and Innovation.</p>

        <p>Its mission was to spark curiosity, encourage questions, and, above all, make linguistics accessible in an engaging way.</p>

        <h3>Meet Ele</h3>

        <p>Ele was born from a fairly simple question: <strong>how can we talk about linguistics without making it feel like a linguistics class?</strong></p>

        <p>The challenge was to bring knowledge produced in academia to people of different ages, with little time, little prior knowledge of the discipline, and, above all, little patience for encyclopedic knowledge.</p>

        <p>This chatbot has a curious, knowledgeable, and playful personality, capable of talking about linguistics using simple, approachable language and avoiding unnecessary jargon.</p>

        <h3>Try Ele</h3>
        <div id="ele-chatbot" class="ele-chatbot" role="region" aria-label="Chat with Ele"></div>

        <h3>How I built Ele</h3>

        <p>To create Ele, I read <em>papers</em> and academic articles. I worked with a research team from the Faculty of Philosophy and Literature at the University of Buenos Aires, with the support of researchers such as Gabriela Zunino and Noelia Stetie to adapt the content.</p>

        <p>I was responsible for designing the conversational structure and defining how Ele should behave, as well as her tone and voice.</p>

        <p>The version you just tried is a prototype I <strong>implemented natively, directly in code</strong>: no chatbot platform, no APIs, and no AI running behind the scenes. All the content is predefined, so Ele only says what we wrote for her. I defined how the conversation should be mapped out (the paths, the buttons, and where each one leads) and built it together with an AI coding assistant.</p>

        <h3>Where did Ele go?</h3>

        <p>During Argentina’s Science Week, Ele appeared on posters at the Juan B. Ambrosetti Ethnographic Museum (Buenos Aires) and in brochures. People could access Ele from their own phones through a QR code.</p>

        <div class="ele-museum-gallery">
        <img
         src="assets/Ele_museum_1.png"
         alt="Ele at the Juan B. Ambrosetti Ethnographic Museum"
         loading="lazy"
         >
         <img
           src="assets/Ele_museum_2.png"
           alt="Ele's science communication materials at the museum"
           loading="lazy"
         >
        <img
          src="assets/Ele_museum_3.png"
          alt="Another view of Ele at the museum"
          loading="lazy"
         >
</div>

        <p>After this experience, the project started to circulate and attract the attention of teachers, researchers, and institutions.</p>

        <p>Ele also had her own stand at the <strong>Patagonia Linguistics Festival</strong>, organized by the National University of Comahue, Río Negro.</p>

        <div class="ele-festival-gallery">
        <img
          src="assets/Ele_festival_patagonia.png"
          alt="Ele's stand at the Patagonia Linguistics Festival"
          loading="lazy"
        >
        </div>
        <p>We presented Ele together with Gabriela Zunino on the <strong>“Ciencia del Fin del Mundo” podcast</strong>.</p>

        <div class="ele-external-links">
         <a
    class="ele-link-pill"
    href="https://open.spotify.com/episode/3ZSt6ssKpbxS3nZGnPfsOt"
    target="_blank"
    rel="noopener noreferrer"
    >
    <span class="ele-link-icon" aria-hidden="true">♫</span>
    Listen to the podcast
    <span class="ele-link-arrow" aria-hidden="true">↗</span>
    </a>
</div>

        <p>Ele was also presented at <strong>“Letra y Código,”</strong> organized by the Faculty of Philosophy and Literature at the University of Buenos Aires. During this activity, I explained how I had built her, ran a live demo, and answered questions from the audience.</p>

       <div class="ele-external-links">
       <a
        class="ele-link-pill"
        href="https://www.youtube.com/watch?v=tFtv_mcKVfI"
        target="_blank"
        rel="noopener noreferrer"
      >
      <span class="ele-link-icon" aria-hidden="true">▶</span>
      See the recording
    <span class="ele-link-arrow" aria-hidden="true">↗</span>
    </a>
    </div>

        <p>She was the star of the <strong>“Bots, Linguistics and Programming”</strong> event, organized by the Institute of Linguistics at the Faculty of Philosophy and Literature at the University of Buenos Aires, where Gabriela Zunino and I talked about the project.</p>
        `,

      next:
        "Other projects",

      nextHref:
        "#work"
    }

  },


  es: {

    pageTitle:
      "Micaela Cañal — Product Designer",

    pageDescription:
      "Portfolio de Micaela Cañal, Product Designer: experiencias conversacionales, con y sin IA, desde Kombi, de Volkswagen Argentina, hasta Ele, un chatbot de lingüística.",

    navLabel:
      "Principal",

    languageLabel:
      "Idioma",

    navHome:
      "Inicio",

    navAbout:
      "Sobre mí",

    navWork:
      "Trabajo",

    navContact:
      "Contacto",

    portfolioLabel:
      "MICAELA CAÑAL — PORTFOLIO",

    homeTitle:
      "Hola",

    homeText:
      "Explorá mi recorrido, proyectos y manera de diseñar productos.",

    homeAboutChoice:
      "Conoceme",

    homeWorkChoice:
      "Conocé mi trabajo",

    aboutTitle:
      "Product Designer",

    aboutHtml: `
        <p class="about-tagline">Diseñar<br>con criterio</p>

        <p><strong>Me llamo Micaela Cañal.</strong> Soy Product Designer.</p>

        <p>A los 11 años escribí un texto que se llamaba “El sentido de la vida”. Casi nada de lo que dice resiste el paso del tiempo, salvo una frase: <em>“para realizar las cosas siempre uno tiene que tener un proceso”</em>. Hoy es la base de cómo diseño.</p>

        <p>Estudié <strong>Lingüística</strong> en la Universidad de Buenos Aires y una maestría en <strong>Periodismo Narrativo</strong> en la Universidad de San Martín.</p>

        <p>Llevo conmigo la metodología de investigación y un espíritu curioso a cada proyecto en el que me embarco.</p>

        <p>Hace <strong>5 años</strong> que diseño <strong>experiencias conversacionales</strong> (con y sin IA). Me enfoco en entender qué necesitan las personas, qué necesita el negocio y qué valor aporta la tecnología. ¿El objetivo? Crear un producto que valga la pena.</p>
    `,

    aboutWorkChoice:
      "Conocé mi trabajo",

    workTitle:
      "Conocé mi trabajo",

    workIntro:
      "Elegí una opción para descubrir en qué estuve trabajando.",

    contactTitle:
    "Hablemos",

    contactText:
    "Me encantaría saber de vos.",

    contactEmail:
    "micaelacanal7@gmail.com",

    contactLinkedIn:
    "LinkedIn",

    resumeLink:
      "Ver mi CV",

    resumeFile:
      "assets/cv-micaela-canal-es.pdf",

    kombi: {

      title:
        "Kombi, Volkswagen Argentina",

      content: `
        <p><strong>Kombi es el asistente conversacional de Volkswagen Argentina.</strong> Está pensado para acompañar a potenciales clientes en la exploración de los modelos de la marca y, también, para ayudar a quienes ya tienen uno y necesitan resolver cuestiones de postventa.</p>

        <p><strong>¿Su misión?</strong> Resolver consultas para que las personas solo tengan que disfrutar de su auto.</p>

        <p>Este proyecto tuvo dos etapas separadas: la primera fue determinística y la segunda, impulsada por IA.</p>

        <h3>Mi rol</h3>

       <h4>En la etapa determinística</h4>

<div class="kombi-stage-layout">
  <div class="kombi-stage-text">

    <p>Diseñé el mapa general de la conversación, conectando las necesidades de las personas con triggers, intents e integraciones: instancias que surgían del análisis de conversaciones y de los objetivos del negocio.</p>

    <p>También co-construí con el área de Desarrollo el NLU y los REGEX, y trabajé junto con la UX Writer en la revisión del contenido, aportando feedback sobre personalidad, tono, gramática y sonoridad.</p>

  </div>

  <img
    src="assets/kombi_deterministic.png"
    alt="Conversación determinística de Kombi por WhatsApp"
    class="kombi-stage-image"
    role="button"
    tabindex="0"
    aria-label="Ampliar imagen de la conversación"
  >
</div>
       <h4>En la etapa híbrida</h4>

<div class="kombi-stage-layout">
  <div class="kombi-stage-text">

    <p>Hoy estoy a cargo de <strong>diseñar la experiencia agéntica global</strong>: defino los agentes necesarios, su misión, objetivo y herramientas. Trabajo de manera eficaz tanto individualmente como de forma colaborativa, adaptándome a distintas dinámicas de equipo.</p>

    <p>En este caso, el proceso empieza con un ejercicio exploratorio en el que diseño una propuesta de arquitectura. Luego, la comparto con perfiles interdisciplinarios, developers, writers, project managers y stakeholders, para revisarla e iterarla. Finalmente, diseñamos en conjunto los prompts y los comportamientos de los agentes.</p>

    <p>Una parte importante de mi trabajo es decidir <strong>dónde tiene sentido usar IA</strong>, buscando el equilibrio entre las necesidades de la experiencia, las posibilidades de la tecnología y los recursos disponibles.</p>

    <p>No se trata de incorporar agentes porque están de moda, sino de diseñar la solución más adecuada. Este proyecto me enseñó que diseñar para IA también implica decidir cuándo no usarla.</p>

  </div>

  <img
    src="assets/kombi_hybrid.png"
    alt="Conversación de Kombi con inteligencia artificial por WhatsApp"
    class="kombi-stage-image"
    role="button"
    tabindex="0"
    aria-label="Ampliar imagen de la conversación"
  >
</div>
      `,

      next:
        "Otros proyectos",

      nextHref:
        "#work"
    },


    ele: {

      title:
        "Ele, chatbot de divulgación científica",

      content: `
        <p><strong>Ele es un chatbot de divulgación científica sobre lingüística.</strong> Nació en el marco de la Semana Argentina de la Ciencia, organizada por el Ministerio de Ciencia, Tecnología e Innovación.</p>

        <p>Su misión era despertar curiosidad, generar preguntas y, sobre todo, acercar la lingüística de una manera entretenida.</p>

        <h3>Conocé a Ele</h3>

        <p>Ele nació de una pregunta bastante simple: <strong>¿cómo hacemos para hablar de lingüística sin que parezca una clase de lingüística?</strong></p>

        <p>El desafío era acercar conocimiento producido en el ámbito académico a personas de distintas edades, con poco tiempo, poco conocimiento previo sobre la disciplina y, sobre todo, poca paciencia para el saber enciclopédico.</p>

        <p>Este chatbot tiene una personalidad curiosa, experta y lúdica, capaz de hablar de lingüística con palabras simples, cercanas y sin tecnicismos innecesarios.</p>

        <h3>Probá a Ele</h3>
        <div id="ele-chatbot" class="ele-chatbot" role="region" aria-label="Chat con Ele"></div>

        <h3>Cómo construí a Ele</h3>

        <p>Para crearla, leí <em>papers</em> y artículos académicos y trabajé junto con un equipo de investigación de la Facultad de Filosofía y Letras de la Universidad de Buenos Aires, con el apoyo de investigadoras como Gabriela Zunino y Noelia Stetie para adaptar el contenido.</p>

        <p>Me encargué de diseñar la estructura conversacional, la personalidad, el tono y la voz de Ele, y de definir cómo debía comportarse durante las conversaciones.</p>

        <p>La versión que acabás de probar es un prototipo que <strong>implementé de forma nativa, directamente en código</strong>: sin plataformas de chatbots, sin APIs y sin IA funcionando por detrás. Todo el contenido está predefinido, así que Ele solo dice lo que le escribimos. Yo definí cómo debía esquematizarse la conversación (los caminos, los botones y a dónde lleva cada uno) y la construí junto con un asistente de IA para programar.</p>

        <h3>¿Dónde estuvo Ele?</h3>

        <p>En la Semana Argentina de la Ciencia vivió en afiches del Museo Etnográfico Juan B. Ambrosetti (CABA) y en folletos. Las personas podían acceder a Ele desde sus propios celulares a través de un código QR.</p>

      <div class="ele-museum-gallery">
      <img
        src="assets/Ele_museum_1.png"
        alt="Ele en el Museo Etnográfico Juan B. Ambrosetti"
        loading="lazy"
      >
     <img
      src="assets/Ele_museum_2.png"
      alt="Materiales de divulgación de Ele en el museo"
      loading="lazy"
     >
    <img
     src="assets/Ele_museum_3.png"
     alt="Otra vista de Ele en el museo"
     loading="lazy"
    >
</div>

        <p>A partir de esta experiencia, el proyecto empezó a circular y a llamar la atención de docentes, investigadores e instituciones.</p>

        <p>Ele tuvo un stand propio en el <strong>Festival Lingüístico de la Patagonia</strong>, organizado por la Universidad Nacional del Comahue, Río Negro.</p>

        <div class="ele-festival-gallery">
            <img
               src="assets/Ele_festival_patagonia.png"
               alt="El stand de Ele en el Festival Lingüístico de la Patagonia"
               loading="lazy"
               >
          </div>
        <p>Presentamos a Ele junto con Gabriela Zunino en el <strong>podcast “Ciencia del Fin del Mundo”</strong>.</p>

        <div class="ele-external-links">
         <a
         class="ele-link-pill"
         href="https://open.spotify.com/episode/3ZSt6ssKpbxS3nZGnPfsOt"
         target="_blank"
         rel="noopener noreferrer"
         >
        <span class="ele-link-icon" aria-hidden="true">♫</span>
        Escuchá el podcast
       <span class="ele-link-arrow" aria-hidden="true">↗</span>
       </a>
       </div>

        <p>Se presentó en <strong>“Letra y Código”</strong>, organizado por la Facultad de Filosofía y Letras de la Universidad de Buenos Aires. En esta actividad, conté cómo la había armado, hice una prueba en vivo y recibí preguntas del público.</p>

        <div class="ele-external-links">
       <a
        class="ele-link-pill"
        href="https://www.youtube.com/watch?v=tFtv_mcKVfI"
        target="_blank"
        rel="noopener noreferrer"
      >
      <span class="ele-link-icon" aria-hidden="true">▶</span>
      Mirá el video
      <span class="ele-link-arrow" aria-hidden="true">↗</span>
    </a>
    </div>

        <p>Fue la estrella del evento <strong>“Bots, lingüística y programación”</strong>, organizado por el Instituto de Lingüística de la Facultad de Filosofía y Letras de la Universidad de Buenos Aires, en el que conversamos junto con Gabriela Zunino.</p>
        `,

      next:
        "Otros proyectos",

      nextHref:
        "#work"
    }

  }

};


function showSection(sectionId) {

  sections.forEach((section) => {

    section.classList.remove("active");

  });


  const targetSection = document.getElementById(sectionId);


  if (targetSection) {

    targetSection.classList.add("active");

  }


  navLinks.forEach((link) => {

    link.classList.remove("active");

    link.removeAttribute("aria-current");

  });


  const matchingNavLink =
    document.querySelector(
      `.main-nav a[data-section="${sectionId}"]`
    );


  if (matchingNavLink) {

    matchingNavLink.classList.add("active");

    matchingNavLink.setAttribute("aria-current", "page");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function handleNavigation(event) {

  const link = event.target.closest(
    ".main-nav a, .conversation-choice"
  );


  if (!link) {
    return;
  }


  const href = link.getAttribute("href");


  if (!href || !href.startsWith("#")) {
    return;
  }


  event.preventDefault();


  const sectionId = href.substring(1);


  showSection(sectionId);


  history.pushState(
    null,
    "",
    href
  );

}


document.addEventListener(
  "click",
  handleNavigation
);



function moveResumeToAbout() {
  const resumeLink =
    document.getElementById("resume-link");

  const aboutWorkChoice =
    document.getElementById("about-work-choice");

  if (
    resumeLink &&
    aboutWorkChoice &&
    aboutWorkChoice.parentNode
  ) {
    aboutWorkChoice.parentNode.insertBefore(
      resumeLink,
      aboutWorkChoice
    );
  }
}


function renderCaseStudies(language) {

  const kombiSection =
    document.getElementById("kombi");

  const eleSection =
    document.getElementById("ele");


  if (kombiSection) {

    kombiSection.innerHTML = `

      <div class="kombi-heading">

       <h2>${content[language].kombi.title}</h2>

      <img
      src="assets/kombi_logo_vw.png"
      alt="Volkswagen logo"
      class="kombi-logo"
      >

  </div>

  ${content[language].kombi.content}

      <div class="conversation-options">

        <a
          href="${content[language].kombi.nextHref}"
          class="conversation-choice"
        >
          ${content[language].kombi.next}
        </a>

        <a
          href="#contact"
          class="conversation-choice"
        >
          ${language === "en" ? "Let's talk" : "Charlemos"}
        </a>

      </div>

    `;

  }


  if (eleSection) {


  eleSection.innerHTML = `

    <div class="ele-heading">

      <h2>${content[language].ele.title}</h2>

      <img
        src="assets/Ele_logo.png"
        alt="Ele logo"
        class="ele-logo"
      >

    </div>

      ${content[language].ele.content}

      <div class="conversation-options">

        <a
          href="${content[language].ele.nextHref}"
          class="conversation-choice"
        >
          ${content[language].ele.next}
        </a>

        <a
          href="#contact"
          class="conversation-choice"
        >
          ${language === "en" ? "Let's talk" : "Charlemos"}
        </a>

      </div>

    `;

  }

}


function setLanguage(language) {

  document.documentElement.lang =
    language === "en"
      ? "en"
      : "es";


  document.title =
    content[language].pageTitle;


  const metaDescription =
    document.querySelector('meta[name="description"]');


  if (metaDescription) {

    metaDescription.setAttribute(
      "content",
      content[language].pageDescription
    );

  }


  langEn.classList.toggle(
    "active",
    language === "en"
  );


  langEs.classList.toggle(
    "active",
    language === "es"
  );


  langEn.setAttribute(
    "aria-pressed",
    String(language === "en")
  );


  langEs.setAttribute(
    "aria-pressed",
    String(language === "es")
  );


  document.querySelector(".language-switcher").setAttribute(
    "aria-label",
    content[language].languageLabel
  );


  document.querySelector(".main-nav").setAttribute(
    "aria-label",
    content[language].navLabel
  );


  document.getElementById("nav-home").textContent =
    content[language].navHome;


  document.getElementById("nav-about").textContent =
    content[language].navAbout;


  document.getElementById("nav-work").textContent =
    content[language].navWork;


  document.getElementById("nav-contact").textContent =
    content[language].navContact;


  document.getElementById("portfolio-label").textContent =
    content[language].portfolioLabel;


  document.getElementById("home-title").textContent =
    content[language].homeTitle;


  document.getElementById("home-text").textContent =
    content[language].homeText;


  document.getElementById("home-about-choice").textContent =
    content[language].homeAboutChoice;


  document.getElementById("home-work-choice").textContent =
    content[language].homeWorkChoice;


  document.getElementById("about-title").textContent =
    content[language].aboutTitle;


  document.getElementById("about-text").innerHTML =
    content[language].aboutHtml;


  document.getElementById("about-work-choice").textContent =
    content[language].aboutWorkChoice;


  document.getElementById("work-title").textContent =
    content[language].workTitle;


  document.getElementById("work-intro").textContent =
    content[language].workIntro;


  document.getElementById("contact-title").textContent =
    content[language].contactTitle;


  document.getElementById("contact-text").textContent =
    content[language].contactText;

  document.getElementById("contact-email").textContent =
   content[language].contactEmail;

  document.getElementById("contact-linkedin").textContent =
   content[language].contactLinkedIn;
document.getElementById("contact-email").href =
  "mailto:micaelacanal7@gmail.com";

  const resumeLink =
    document.getElementById("resume-link");


  resumeLink.textContent =
    content[language].resumeLink;


  resumeLink.href =
    content[language].resumeFile;


  renderCaseStudies(language);

}


langEn.addEventListener(
  "click",
  () => setLanguage("en")
);


langEs.addEventListener(
  "click",
  () => setLanguage("es")
);


function initializePage() {

  moveResumeToAbout();


  const hash =
    window.location.hash.substring(1);


  const validSection =
    document.getElementById(hash);


  if (
    validSection &&
    validSection.classList.contains("page-section")
  ) {

    showSection(hash);

  } else {

    showSection("home");

  }

}


window.addEventListener(
  "popstate",
  initializePage
);


window.addEventListener(
  "hashchange",
  initializePage
);


setLanguage("en");

initializePage();

// --------------------------------
// KOMBI IMAGE LIGHTBOX
// --------------------------------

const kombiLightbox = document.createElement("div");

kombiLightbox.className = "kombi-lightbox";
kombiLightbox.setAttribute("aria-hidden", "true");

kombiLightbox.innerHTML = `
  <button
    type="button"
    class="kombi-lightbox-close"
    aria-label="Close enlarged image"
  >
    ×
  </button>

  <img
    class="kombi-lightbox-image"
    src=""
    alt=""
  >
`;

document.body.appendChild(kombiLightbox);

const kombiLightboxImage =
  kombiLightbox.querySelector(".kombi-lightbox-image");

const kombiLightboxClose =
  kombiLightbox.querySelector(".kombi-lightbox-close");

let lastKombiImage = null;


function openKombiLightbox(image) {
  lastKombiImage = image;

  kombiLightboxImage.src = image.src;
  kombiLightboxImage.alt = image.alt;

  kombiLightboxClose.setAttribute(
    "aria-label",
    document.documentElement.lang === "es"
      ? "Cerrar imagen ampliada"
      : "Close enlarged image"
  );

  kombiLightbox.classList.add("is-open");
  kombiLightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");

  kombiLightboxClose.focus();
}


function closeKombiLightbox() {
  kombiLightbox.classList.remove("is-open");
  kombiLightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  kombiLightboxImage.src = "";

  if (lastKombiImage) {
    lastKombiImage.focus();
  }
}


document.addEventListener("click", (event) => {
  const image = event.target.closest(".kombi-stage-image");

  if (image) {
    openKombiLightbox(image);
    return;
  }

  if (event.target === kombiLightbox) {
    closeKombiLightbox();
  }
});


kombiLightboxClose.addEventListener(
  "click",
  closeKombiLightbox
);


document.addEventListener("keydown", (event) => {
  const image = event.target instanceof Element
    ? event.target.closest(".kombi-stage-image")
    : null;

  if (
    image &&
    (event.key === "Enter" || event.key === " ")
  ) {
    event.preventDefault();
    openKombiLightbox(image);
    return;
  }

  if (
    event.key === "Escape" &&
    kombiLightbox.classList.contains("is-open")
  ) {
    closeKombiLightbox();
  }
});