// ============================================================
//  ELE · chatbot de botones
//  Sin APIs, sin IA y sin Regex: todo es JavaScript + contenido fijo.
// ============================================================
//
//  CÓMO EDITAR EL CONTENIDO (todo vive en el bloque CONTENT, más abajo)
//
//  Cada "nodo" es una pantalla de la conversación:
//    messages -> los globos que dice Ele, uno detrás de otro
//    options  -> los botones (máximo 3). "next" es el nombre del nodo al
//                que lleva cada botón.
//
//  Dentro de un mensaje podés usar:
//    *texto*           -> negrita
//    \n                -> salto de línea dentro del mismo globo
//    [[texto|clave]]   -> link. La "clave" se busca en `links` del idioma.
//                         Si el link todavía está vacío (""), se muestra
//                         como texto común, sin romper nada.
//
//  IDIOMAS
//  Hay dos bloques: `es` y `en`. Los dos tienen los MISMOS nombres de nodos
//  y los mismos "next": solo cambian los textos. Si tocás un camino en un
//  idioma, tocalo también en el otro.
//  El idioma se lee del atributo <html lang="..."> de la página (lo cambia
//  script.js cuando se usa el selector English / Español). Si no hay contenido
//  para ese idioma, usa español.
// ============================================================

(() => {
  const botAvatar = "assets/Ele_logo.png";
  const userAvatar = "assets/Ele_user_avatar.png";

  const MAX_OPTIONS = 3; // botones por turno
  const MESSAGE_DELAY_MS = 600; // pausa entre globos de Ele (0 = todo junto)

  // ------------------------------------------------------------
  //  CONTENIDO
  // ------------------------------------------------------------
  const CONTENT = {
    es: {
      ui: {
        botName: "Ele",
        userAlt: "Tu avatar",
        restart: "Volver a empezar"
      },

      // Pegá acá las URLs. Las claves se usan en los mensajes: [[artículo|mare]]
      links: {
        mare: "https://revele.uncoma.edu.ar/index.php/lingustica/es/article/view/2923/59782" // artículo de María Mare
      },

      start: "inicio",

      nodes: {
        // ---------- Apertura general ----------
        inicio: {
          messages: [
            "¡Hola! Soy Ele, un bot lingüista. 👋",
            "Lo que significa que me encanta estudiar el lenguaje.",
            "Te propongo dos caminos, vos elegí."
          ],
          options: [
            { label: "Lenguaje y sociedad", next: "sociedad" },
            { label: "Lenguaje y cerebro", next: "cerebro" }
          ]
        },

        // ---------- Lenguaje y sociedad ----------
        sociedad: {
          messages: [
            "En cada conversación, las personas intercambian formas lingüísticas.",
            "Y si bien pueden usarlas porque están en su conciencia, las adquieren dentro de una comunidad. 👯",
            "¿Qué te tienta más?"
          ],
          options: [
            { label: "Cambio lingüístico", next: "cambio" },
            { label: "Sociomito", next: "sociomito" }
          ]
        },

        cambio: {
          messages: [
            "Las lenguas cambian y eso no depende de nuestra voluntad.",
            "La mayoría de las veces ni siquiera podemos predecir cómo.",
            "Los cambios:",
            "🔹 Son graduales porque las dos formas lingüísticas conviven durante un tiempo.\n🔹 Y pueden darse por varios factores.",
            "Un ejemplo de esto es el lenguaje inclusivo. ¿Te cuento más?"
          ],
          options: [
            { label: "Sí, dale", next: "inclusivo" },
            { label: "Mejor el cerebro", next: "cerebro" }
          ]
        },

        inclusivo: {
          messages: [
            "Qué temita ese, eh.",
            "En CABA hasta intentaron prohibirlo en las escuelas… como si fuera posible. 😆",
            "El *género* de las palabras parece que *influye* en *cómo representamos el mundo* en nuestra mente.",
            "Por ejemplo, los hablantes de español asocian la palabra *“sol” con rasgos masculinos* como fuerza y potencia.",
            "Y *“luna” con rasgos femeninos* como suavidad y delicadeza.",
            "¿Seguimos?"
          ],
          options: [
            { label: "Sí, me interesa", next: "generico" },
            { label: "Mejor el cerebro", next: "cerebro" }
          ]
        },

        generico: {
          messages: [
            "Seguro escuchaste que el masculino en español se usa como genérico.",
            "Por ejemplo, en la oración “los estudiantes preparan un final” podemos estar hablando tanto de mujeres como de varones.",
            "Varios estudios demuestran que el masculino genérico oculta a las mujeres y a otras identidades sexo-genéricas.",
            "*El lenguaje inclusivo* representa la diversidad. 🏳️‍🌈🏳️‍⚧",
            "Cambiemos de tema: ¿estás para un sociomito?"
          ],
          options: [
            { label: "¡Vamos!", next: "sociomito" },
            { label: "Mejor el cerebro", next: "cerebro" }
          ]
        },

        sociomito: {
          messages: [
            "Se dice del *vasco o el pirahã* de la Amazonia brasileña que:",
            "💬 “Son imposibles de aprender”.\n💬 “Son dificilísimas”.\n💬 “Tenés que tener una habilidad especial para hablarlas”.",
            "Pero no son más que *prejuicios y falta de interés*.",
            "En este [[artículo|mare]], María Mare compara a las lenguas “difíciles e ilógicas” con un instrumento musical que también tiene esa mala fama.",
            "¿Te imaginás cuál es?"
          ],
          options: [
            { label: "La guitarra", next: "guitarra" },
            { label: "El bandoneón", next: "bandoneon" }
          ]
        },

        guitarra: {
          messages: [
            "Frío, frío. 🥶",
            "Era el bandoneón.",
            "¿Por qué?",
            "🔹 Suelen reducir esas lenguas a los ámbitos privados y al instrumento al tango.\n🔹 Son menos accesibles que el español o la guitarra: tienen menos recursos disponibles.",
            "“No necesitamos buscar la ‘lengua perfecta’, sino que esa perfección se encuentra en todas las lenguas”, dice María. 😻",
            "¿Hablamos de lenguaje y cerebro?"
          ],
          options: [
            { label: "De una", next: "cerebro" },
            { label: "Otro día", next: "despedida" }
          ]
        },

        bandoneon: {
          messages: [
            "¡Adivinaste! 🪗",
            "¿Por qué?",
            "🔹 Suelen reducir esas lenguas a los ámbitos privados y al instrumento al tango.\n🔹 Son menos accesibles que el español o la guitarra: tienen pocos recursos disponibles.",
            "“No necesitamos buscar la ‘lengua perfecta’, sino que esa perfección se encuentra en todas las lenguas”, dice María. 😻",
            "¿Hablamos de lenguaje y cerebro?"
          ],
          options: [
            { label: "De una", next: "cerebro" },
            { label: "Otro día", next: "despedida" }
          ]
        },

        // ---------- Lenguaje y cerebro ----------
        cerebro: {
          messages: [
            "Anotate esta receta. 🧑‍🍳",
            "Para comprender una lengua necesitamos:",
            "🔹 3 cucharadas de saber sus sonidos.\n🔹 1 kg de aprender las palabras y su significado.\n🔹 Y una pizca explosiva de automatizar reglas sintácticas.",
            "¿Te acordás de la sintaxis que te enseñaban en la escuela? Bueno, debo decirte que en tu interior tenías todas las respuestas: usamos las reglas del lenguaje sin ser conscientes.",
            "Hablando de la infancia, ¿querés saber qué pasa con les niñes?"
          ],
          options: [
            { label: "Me interesa", next: "infancia" },
            { label: "Neuromito", next: "neuromito" },
            { label: "Lenguaje y sociedad", next: "sociedad" }
          ]
        },

        infancia: {
          messages: [
            "No hay una gramática infantil y otra de adultes.",
            "Les niñes *entienden estructuras más complejas* de las que pueden crear.",
            "En cuanto al vocabulario, algunos investigadores sugieren que *primero adquieren sustantivos comunes*, seguido de verbos y adjetivos.",
            "Empiezan despacio: 1, 2 o 3 palabras nuevas por semana.",
            "Después, su léxico explota y *llegan a 8 por semana.* 😯",
            "¿Vamos con el neuromito?"
          ],
          options: [
            { label: "Estoy", next: "neuromito" },
            { label: "Lenguaje y sociedad", next: "sociedad" }
          ]
        },

        neuromito: {
          messages: [
            "Según investigaciones, la *ironía o el humor* implican en mayor medida al *hemisferio derecho del cerebro*.",
            "Ahora, eso de que las habilidades creativas se relacionan con el hemisferio derecho y las lógicas en el izquierdo…",
            "¡Es un mito!",
            "*Usamos redes neuronales en ambos hemisferios* y de manera coordinada. 🤓🧠",
            "¿Hablamos de lenguaje y sociedad?"
          ],
          options: [
            { label: "Me encanta", next: "sociedad" },
            { label: "Otro día", next: "despedida" }
          ]
        },

        // ---------- Cierre ----------
        despedida: {
          messages: [
            "Gracias por charlar conmigo. Me encantó. 🙈",
            "¡Hasta la próxima aventura lingüística!"
          ],
          // Este botón NO está en el documento oficial: lo sumé para que la
          // conversación no quede sin salida. Si no lo querés, borrá la línea.
          options: [{ label: "Volver a empezar", next: "inicio" }]
        }
      }
    },

    en: {
      ui: {
        botName: "Ele",
        userAlt: "Your avatar",
        restart: "Start over"
      },

      // El artículo de María Mare está en español: se avisa en el mensaje.
      links: {
        mare: "https://revele.uncoma.edu.ar/index.php/lingustica/es/article/view/2923/59782"
      },

      start: "inicio",

      nodes: {
        // ---------- Opening ----------
        inicio: {
          messages: [
            "Hi there! I'm Ele, a linguist bot. 👋",
            "Which means I love studying language.",
            "I've got two paths for you. Your pick!"
          ],
          options: [
            { label: "Language and society", next: "sociedad" },
            { label: "Language and the brain", next: "cerebro" }
          ]
        },

        // ---------- Language and society ----------
        sociedad: {
          messages: [
            "In every conversation, people exchange linguistic forms.",
            "And even though we can use them because they live in our minds, we pick them up within a community. 👯",
            "What are you in the mood for?"
          ],
          options: [
            { label: "Language change", next: "cambio" },
            { label: "Sociomyth", next: "sociomito" }
          ]
        },

        cambio: {
          messages: [
            "Languages change, and that's not up to us.",
            "Most of the time, we can't even predict how.",
            "Changes:",
            "🔹 They're gradual, because the two linguistic forms live side by side for a while.\n🔹 And they can happen for all sorts of reasons.",
            "Inclusive language is one example. Want to hear more?"
          ],
          options: [
            { label: "Yep, go for it", next: "inclusivo" },
            { label: "Brain, instead", next: "cerebro" }
          ]
        },

        inclusivo: {
          messages: [
            "Oh, that's a spicy topic, huh.",
            "In Buenos Aires City they even tried to ban it in schools… as if that were possible. 😆",
            "The *gender* of words seems to *influence* the way we *picture the world* in our minds.",
            "For example, Spanish speakers link the word *“sol” (sun) with masculine traits* like strength and power.",
            "And *“luna” (moon) with feminine traits* like softness and delicacy.",
            "Shall we keep going?"
          ],
          options: [
            { label: "Yes, I'm in", next: "generico" },
            { label: "Brain, instead", next: "cerebro" }
          ]
        },

        generico: {
          messages: [
            "You've probably heard that in Spanish, the masculine is used as the generic.",
            "For example, in “los estudiantes preparan un final” (“the students are getting ready for an exam”), we could be talking about women and men alike.",
            "Several studies show that the generic masculine hides women and other gender identities.",
            "*Inclusive language* represents diversity. 🏳️‍🌈🏳️‍⚧",
            "Let's change the subject: are you up for a sociomyth?"
          ],
          options: [
            { label: "Let's go!", next: "sociomito" },
            { label: "Brain, instead", next: "cerebro" }
          ]
        },

        sociomito: {
          messages: [
            "People say that *Basque or Pirahã* (from the Brazilian Amazon) are:",
            "💬 “They're impossible to learn.”\n💬 “They're ridiculously hard.”\n💬 “You need a special talent to speak them.”",
            "But they're nothing more than *prejudice and lack of interest*.",
            "In this [[article|mare]] (in Spanish), María Mare compares “difficult, illogical” languages to a musical instrument that gets the same bad rap.",
            "Can you guess which one?"
          ],
          options: [
            { label: "The guitar", next: "guitarra" },
            { label: "The bandoneon", next: "bandoneon" }
          ]
        },

        guitarra: {
          messages: [
            "Brrr, ice cold. 🥶",
            "It was the bandoneon.",
            "Why?",
            "🔹 These languages tend to get confined to private settings, just like the bandoneon gets boxed into tango.\n🔹 They're less accessible than Spanish or the guitar: they have fewer resources available.",
            "“We don't need to look for the ‘perfect language’; that perfection is found in every language,” says María. 😻",
            "Shall we talk about language and the brain?"
          ],
          options: [
            { label: "Sure thing", next: "cerebro" },
            { label: "Another day", next: "despedida" }
          ]
        },

        bandoneon: {
          messages: [
            "You got it! 🪗",
            "Why?",
            "🔹 These languages tend to get confined to private settings, just like the bandoneon gets boxed into tango.\n🔹 They're less accessible than Spanish or the guitar: they have very few resources available.",
            "“We don't need to look for the ‘perfect language’; that perfection is found in every language,” says María. 😻",
            "Shall we talk about language and the brain?"
          ],
          options: [
            { label: "Sure thing", next: "cerebro" },
            { label: "Another day", next: "despedida" }
          ]
        },

        // ---------- Language and the brain ----------
        cerebro: {
          messages: [
            "Grab a pen, here comes a recipe. 🧑‍🍳",
            "To understand a language, we need:",
            "🔹 3 tablespoons of knowing its sounds.\n🔹 1 kg of learning its words and what they mean.\n🔹 And an explosive pinch of automating syntax rules.",
            "Remember the syntax they taught you in school? Well, I have news: deep down, you already had all the answers. We use the rules of language without even realizing it.",
            "Speaking of childhood, want to know what happens with kids?"
          ],
          options: [
            { label: "I'm curious", next: "infancia" },
            { label: "Neuromyth", next: "neuromito" },
            { label: "Language and society", next: "sociedad" }
          ]
        },

        infancia: {
          messages: [
            "There's no such thing as a kids' grammar and a separate grown-ups' grammar.",
            "Kids *understand more complex structures* than they can produce.",
            "As for vocabulary, some researchers suggest that *they pick up common nouns first*, followed by verbs and adjectives.",
            "They start slow: 1, 2 or 3 new words a week.",
            "Then their vocabulary explodes and they *reach 8 a week.* 😯",
            "Shall we go for the neuromyth?"
          ],
          options: [
            { label: "I'm ready", next: "neuromito" },
            { label: "Language and society", next: "sociedad" }
          ]
        },

        neuromito: {
          messages: [
            "According to research, *irony and humor* involve the *right hemisphere of the brain* to a greater extent.",
            "Now, about that idea that creative skills live in the right hemisphere and logical ones in the left…",
            "It's a myth!",
            "*We use neural networks in both hemispheres*, working together. 🤓🧠",
            "Shall we talk about language and society?"
          ],
          options: [
            { label: "Love to", next: "sociedad" },
            { label: "Another day", next: "despedida" }
          ]
        },

        // ---------- Goodbye ----------
        despedida: {
          messages: [
            "Thanks for chatting with me. I loved it. 🙈",
            "Until the next linguistic adventure!"
          ],
          // Este botón NO está en el documento oficial: se suma para que la
          // conversación no quede sin salida. Si no lo querés, borrá la línea.
          options: [{ label: "Start over", next: "inicio" }]
        }
      }
    }
  };
  // FIN DEL CONTENIDO

  // ------------------------------------------------------------
  //  IDIOMA
  // ------------------------------------------------------------
  function getLanguage() {
    const htmlLang = (document.documentElement.lang || "es")
      .toLowerCase()
      .slice(0, 2);
    return CONTENT[htmlLang] ? htmlLang : "es";
  }

  // ------------------------------------------------------------
  //  TEXTO ENRIQUECIDO (negrita y links) — sin Regex
  // ------------------------------------------------------------

  // *negrita*: al separar por "*", los pedazos impares son los resaltados.
  function appendBold(parent, text) {
    text.split("*").forEach((part, index) => {
      if (!part) return;

      if (index % 2 === 1) {
        const strong = document.createElement("strong");
        strong.textContent = part;
        parent.appendChild(strong);
      } else {
        parent.append(part);
      }
    });
  }

  // [[texto|clave]]: se busca la clave en los links del idioma.
  function appendRichText(parent, text, links) {
    const pieces = text.split("[[");

    appendBold(parent, pieces[0]);

    for (let i = 1; i < pieces.length; i++) {
      const end = pieces[i].indexOf("]]");

      if (end === -1) {
        appendBold(parent, "[[" + pieces[i]);
        continue;
      }

      const [label, key] = pieces[i].slice(0, end).split("|");
      const url = links[key];

      if (url) {
        const anchor = document.createElement("a");
        anchor.className = "ele-chat-link";
        anchor.href = url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = label;
        parent.appendChild(anchor);
      } else {
        // Link todavía sin cargar: se muestra el texto sin enlace.
        parent.append(label);
      }

      appendBold(parent, pieces[i].slice(end + 2));
    }
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ------------------------------------------------------------
  //  CHATBOT
  // ------------------------------------------------------------
  function initEleChatbot() {
    const chat = document.getElementById("ele-chatbot");

    if (!chat || chat.dataset.initialized === "true") {
      return;
    }

    chat.dataset.initialized = "true";

    const lang = getLanguage();
    const { ui, links, start, nodes } = CONTENT[lang];

    // El contenedor (#ele-chatbot) ya trae role="region" y aria-label desde
    // script.js; acá solo el registro de mensajes avisa a los lectores de pantalla.
    chat.innerHTML = `
      <div class="ele-chat-messages" role="log" aria-live="polite"></div>
      <div class="ele-chat-options"></div>
    `;

    const messages = chat.querySelector(".ele-chat-messages");
    const options = chat.querySelector(".ele-chat-options");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Hasta que la persona toca un botón no mandamos el foco al chat,
    // así la página no "salta" al chat apenas carga.
    let userHasInteracted = false;

    // Mueve solo la zona de mensajes (no la página) hasta el último globo.
    function scrollToLatest() {
      messages.scrollTo({
        top: messages.scrollHeight,
        behavior: reduceMotion.matches ? "auto" : "smooth"
      });
    }

    function addMessage(text, speaker) {
      const row = document.createElement("div");
      row.className = `ele-chat-row ele-chat-row--${speaker}`;

      const avatar = document.createElement("img");
      avatar.className = "ele-chat-avatar";
      avatar.src = speaker === "bot" ? botAvatar : userAvatar;
      avatar.alt = speaker === "bot" ? ui.botName : ui.userAlt;

      const bubble = document.createElement("div");
      bubble.className = "ele-chat-bubble";
      bubble.style.whiteSpace = "pre-line"; // respeta los saltos de línea (\n)

      if (speaker === "bot") {
        appendRichText(bubble, text, links);
      } else {
        bubble.textContent = text;
      }

      row.append(avatar, bubble);
      messages.appendChild(row);

      scrollToLatest();
    }

    function showOptions(items) {
      options.replaceChildren();

      if (items.length > MAX_OPTIONS) {
        console.warn(
          `Ele: un nodo tiene ${items.length} opciones; se muestran solo ${MAX_OPTIONS}.`
        );
      }

      items.slice(0, MAX_OPTIONS).forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "ele-chat-option";
        button.textContent = item.label;

        button.addEventListener("click", () => {
          userHasInteracted = true;

          // Sacamos los botones apenas se elige uno: evita dobles clics.
          options.replaceChildren();

          addMessage(item.label, "user");
          goTo(item.next);
        });

        options.appendChild(button);
      });

      // Con teclado: el foco pasa al primer botón nuevo (si no, se pierde
      // al desaparecer el botón que se acaba de tocar).
      if (userHasInteracted && options.firstElementChild) {
        options.firstElementChild.focus({ preventScroll: true });
      }
    }

    // Muestra los mensajes de un nodo y, al final, sus botones.
    async function goTo(nodeId, { instantStart = false } = {}) {
      const node = nodes[nodeId];

      if (!node) {
        console.warn(`Ele: no existe el nodo "${nodeId}".`);
        return;
      }

      for (let i = 0; i < node.messages.length; i++) {
        const isVeryFirst = instantStart && i === 0;

        if (!isVeryFirst) {
          await wait(MESSAGE_DELAY_MS);
        }

        addMessage(node.messages[i], "bot");
      }

      showOptions(node.options || []);
    }

    goTo(start, { instantStart: true });
  }

  // El caso se renderiza desde script.js. Observamos el contenedor
  // para reiniciar el bot si se vuelve a crear al cambiar de idioma.
  const observer = new MutationObserver(() => {
    initEleChatbot();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  initEleChatbot();
})();