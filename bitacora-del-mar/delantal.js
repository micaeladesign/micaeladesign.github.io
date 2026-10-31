// --------------------------------
// DELANTAL DE PATRICIO: zoom para descubrir las palabras
//
// El zoom cambia el viewBox del SVG (no escala una imagen),
// así el texto se vuelve a dibujar en cada nivel y queda nítido.
//
// Gestos: botones + / −, pellizcar (celular), ctrl + rueda o
// pellizco del trackpad, doble clic o doble toque, arrastrar
// para moverse, y teclado (+, −, 0 y flechas).
// --------------------------------

(function () {

  const stage = document.getElementById("apron-stage");
  const svg = document.getElementById("apron-svg");

  if (!stage || !svg) return;

  const zoomInButton = document.getElementById("zoom-in");
  const zoomOutButton = document.getElementById("zoom-out");
  const zoomResetButton = document.getElementById("zoom-reset");
  const hint = document.getElementById("apron-hint");
  const slots = document.querySelectorAll(".slot");


  // Tamaño del dibujo (el mismo que el viewBox inicial)
  const WIDTH = 930;
  const HEIGHT = 1220;

  const MIN_SCALE = 1;
  const MAX_SCALE = 5;
  const OVERSCROLL = 80;


  // Las palabras: dónde están y qué tamaño tienen en el dibujo.
  // Se "descubren" cuando hubo zoom, están en pantalla y se leen a 13 px o más.
  const words = [
    { text: "vedette", x: 383, y: 62, size: 19 },
    { text: "voraz", x: 461, y: 482, size: 44 },
    { text: "del mar", x: 539, y: 62, size: 19 }
  ];

  const READABLE_PX = 13;
  const DISCOVERY_SCALE = 1.5;

  const found = new Set();


  // Estado de la vista: escala y centro, en unidades del dibujo
  const view = { scale: 1, cx: WIDTH / 2, cy: HEIGHT / 2 };


  function clampView(v) {

    v.scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale));

    const halfW = WIDTH / v.scale / 2;
    const halfH = HEIGHT / v.scale / 2;

    // Con zoom se puede pasar un poco del borde, para centrar las tiras de arriba
    const margin = Math.min(OVERSCROLL, OVERSCROLL * (v.scale - 1));

    v.cx = Math.min(WIDTH - halfW + margin, Math.max(halfW - margin, v.cx));
    v.cy = Math.min(HEIGHT - halfH + margin, Math.max(halfH - margin, v.cy));

    return v;
  }


  function viewBoxOf(v) {

    const w = WIDTH / v.scale;
    const h = HEIGHT / v.scale;

    return { x: v.cx - w / 2, y: v.cy - h / 2, w: w, h: h };
  }


  function render() {

    clampView(view);

    const box = viewBoxOf(view);

    svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.w} ${box.h}`);

    stage.classList.toggle("is-zoomed", view.scale > 1.01);

    zoomInButton.disabled = view.scale >= MAX_SCALE - 0.01;
    zoomOutButton.disabled = view.scale <= MIN_SCALE + 0.01;
    zoomResetButton.disabled = view.scale <= MIN_SCALE + 0.01;

    checkWords(box);
  }


  // Pasa un punto de la pantalla a coordenadas del dibujo
  function toDrawing(clientX, clientY) {

    const rect = stage.getBoundingClientRect();
    const box = viewBoxOf(view);

    return {
      x: box.x + ((clientX - rect.left) / rect.width) * box.w,
      y: box.y + ((clientY - rect.top) / rect.height) * box.h,
      fx: (clientX - rect.left) / rect.width,
      fy: (clientY - rect.top) / rect.height
    };
  }


  // Zoom manteniendo fijo el punto (px, py) del dibujo que está en (fx, fy) de la pantalla
  function zoomAround(target, newScale) {

    const v = { scale: newScale };

    v.scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale));

    const w = WIDTH / v.scale;
    const h = HEIGHT / v.scale;

    v.cx = target.x - target.fx * w + w / 2;
    v.cy = target.y - target.fy * h + h / 2;

    return clampView(v);
  }


  // --------------------------------
  // Animación suave (para botones, teclado y doble toque)
  // --------------------------------

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let animation = null;

  function animateTo(next) {

    if (animation) cancelAnimationFrame(animation);

    if (reduceMotion) {
      Object.assign(view, next);
      render();
      return;
    }

    const from = { scale: view.scale, cx: view.cx, cy: view.cy };
    const start = performance.now();
    const duration = 280;

    function step(now) {

      const t = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - t, 3);

      // La escala se interpola en logaritmo para que el zoom se sienta parejo
      view.scale = Math.exp(Math.log(from.scale) + (Math.log(next.scale) - Math.log(from.scale)) * e);
      view.cx = from.cx + (next.cx - from.cx) * e;
      view.cy = from.cy + (next.cy - from.cy) * e;

      render();

      animation = t < 1 ? requestAnimationFrame(step) : null;
    }

    animation = requestAnimationFrame(step);
  }


  function zoomFromCenter(factor) {

    const rect = stage.getBoundingClientRect();
    const center = toDrawing(rect.left + rect.width / 2, rect.top + rect.height / 2);

    animateTo(zoomAround(center, view.scale * factor));
  }


  zoomInButton.addEventListener("click", function () {
    zoomFromCenter(1.8);
  });

  zoomOutButton.addEventListener("click", function () {
    zoomFromCenter(1 / 1.8);
  });

  zoomResetButton.addEventListener("click", function () {
    animateTo({ scale: 1, cx: WIDTH / 2, cy: HEIGHT / 2 });
  });


  // --------------------------------
  // Rueda: ctrl + rueda (o pellizco del trackpad) hace zoom.
  // La rueda sola sigue scrolleando la página.
  // --------------------------------

  stage.addEventListener("wheel", function (event) {

    if (!event.ctrlKey && !event.metaKey) return;

    event.preventDefault();

    const target = toDrawing(event.clientX, event.clientY);
    const factor = Math.exp(-event.deltaY * 0.01);

    Object.assign(view, zoomAround(target, view.scale * factor));
    render();

  }, { passive: false });


  // --------------------------------
  // Punteros: arrastrar, pellizcar y doble toque
  // --------------------------------

  const pointers = new Map();

  let pinch = null;
  let lastTap = null;
  let moved = false;


  stage.addEventListener("pointerdown", function (event) {

    stage.setPointerCapture(event.pointerId);

    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    moved = false;

    if (animation) {
      cancelAnimationFrame(animation);
      animation = null;
    }

    if (pointers.size === 2) {
      pinch = pinchState();
    }
  });


  function pinchState() {

    const [a, b] = [...pointers.values()];

    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;

    return {
      distance: Math.hypot(a.x - b.x, a.y - b.y),
      scale: view.scale,
      anchor: toDrawing(midX, midY)
    };
  }


  stage.addEventListener("pointermove", function (event) {

    if (!pointers.has(event.pointerId)) return;

    const previous = pointers.get(event.pointerId);
    const current = { x: event.clientX, y: event.clientY };

    pointers.set(event.pointerId, current);

    if (Math.hypot(current.x - previous.x, current.y - previous.y) > 0) {
      moved = true;
    }

    if (pointers.size === 2 && pinch) {

      // Pellizco: escala según la distancia entre dedos, y el punto medio sigue a los dedos
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      const rect = stage.getBoundingClientRect();
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;

      const target = {
        x: pinch.anchor.x,
        y: pinch.anchor.y,
        fx: (midX - rect.left) / rect.width,
        fy: (midY - rect.top) / rect.height
      };

      Object.assign(view, zoomAround(target, pinch.scale * (distance / pinch.distance)));
      render();

      return;
    }

    if (pointers.size === 1 && view.scale > 1.01) {

      // Arrastre: mover la vista
      const rect = stage.getBoundingClientRect();
      const box = viewBoxOf(view);

      view.cx -= ((current.x - previous.x) / rect.width) * box.w;
      view.cy -= ((current.y - previous.y) / rect.height) * box.h;

      stage.classList.add("is-dragging");

      render();
    }
  });


  function endPointer(event) {

    if (!pointers.has(event.pointerId)) return;

    const point = pointers.get(event.pointerId);

    pointers.delete(event.pointerId);

    stage.classList.remove("is-dragging");

    if (pointers.size < 2) pinch = null;

    // Si queda un dedo después de un pellizco, el arrastre sigue desde ahí
    if (pointers.size === 1) return;

    if (event.type !== "pointerup" || moved) return;

    // Doble toque / doble clic: acerca ahí; si ya está al máximo, vuelve a ver entero
    const now = performance.now();

    if (lastTap && now - lastTap.time < 320 && Math.hypot(point.x - lastTap.x, point.y - lastTap.y) < 30) {

      lastTap = null;

      if (view.scale >= MAX_SCALE - 0.01) {
        animateTo({ scale: 1, cx: WIDTH / 2, cy: HEIGHT / 2 });
      } else {
        // Acerca y centra lo que tocaste, para que la palabra quede entera a la vista
        const target = toDrawing(point.x, point.y);

        animateTo(clampView({ scale: view.scale * 2.2, cx: target.x, cy: target.y }));
      }

      return;
    }

    lastTap = { time: now, x: point.x, y: point.y };
  }

  stage.addEventListener("pointerup", endPointer);
  stage.addEventListener("pointercancel", endPointer);


  // --------------------------------
  // Teclado (con el delantal enfocado)
  // --------------------------------

  stage.addEventListener("keydown", function (event) {

    const step = (WIDTH / view.scale) * 0.15;

    switch (event.key) {

      case "+":
      case "=":
        zoomFromCenter(1.8);
        break;

      case "-":
      case "_":
        zoomFromCenter(1 / 1.8);
        break;

      case "0":
        animateTo({ scale: 1, cx: WIDTH / 2, cy: HEIGHT / 2 });
        break;

      case "ArrowLeft":
        animateTo(clampView({ scale: view.scale, cx: view.cx - step, cy: view.cy }));
        break;

      case "ArrowRight":
        animateTo(clampView({ scale: view.scale, cx: view.cx + step, cy: view.cy }));
        break;

      case "ArrowUp":
        animateTo(clampView({ scale: view.scale, cx: view.cx, cy: view.cy - step }));
        break;

      case "ArrowDown":
        animateTo(clampView({ scale: view.scale, cx: view.cx, cy: view.cy + step }));
        break;

      default:
        return;
    }

    event.preventDefault();
  });


  // --------------------------------
  // Descubrir las palabras
  // --------------------------------

  function checkWords(box) {

    const rect = stage.getBoundingClientRect();

    if (!rect.width || view.scale < DISCOVERY_SCALE) return;

    const pixelsPerUnit = rect.width / box.w;

    words.forEach(function (word, index) {

      if (found.has(index)) return;

      const inView =
        word.x > box.x && word.x < box.x + box.w &&
        word.y > box.y && word.y < box.y + box.h;

      if (inView && word.size * pixelsPerUnit >= READABLE_PX) {

        found.add(index);
        slots[index].classList.add("found");

        updateHint();
      }
    });
  }


  function updateHint() {

    const missing = words.length - found.size;

    if (missing === 0) {

      hint.innerHTML = 'Las encontraste todas. El verso completo viaja en <a href="#postal">la postal</a>.';

    } else if (found.size > 0) {

      hint.textContent = missing === 1
        ? "Falta una palabra. Probá alejarte y volver a mirar."
        : `Faltan ${missing} palabras.`;
    }
  }


  render();

  window.addEventListener("resize", render);

})();
