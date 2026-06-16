/**
 * app.js — Lógica principal de Tastes
 * Vanilla JS puro | Sin Bootstrap Modal
 */

/* Estado global */
const estado = {
  climaActivo:    "todas",
  tiempoFiltro:   "todos",
  busqueda:       "",
  soloFavoritos:  false,
  recetaActualId: null,
};

/* ==========================================================
   AUTH
   ========================================================== */
function obtenerSesion() {
  const datos = localStorage.getItem("sc_sesion");
  return datos ? JSON.parse(datos) : null;
}
function guardarSesion(u) { localStorage.setItem("sc_sesion", JSON.stringify(u)); }
function cerrarSesion()   { localStorage.removeItem("sc_sesion"); }

function mostrarLogin() {
  document.getElementById("pantalla-login").classList.remove("d-none");
  document.getElementById("app-principal").classList.add("d-none");
  document.getElementById("form-login").reset();
  limpiarErroresCampos();
  document.getElementById("vista-receta").classList.add("d-none");
  document.getElementById("contenido-grid").classList.remove("d-none");
}

function mostrarApp(usuario) {
  document.getElementById("pantalla-login").classList.add("d-none");
  document.getElementById("app-principal").classList.remove("d-none");
  document.getElementById("nombre-usuario").textContent = usuario.nombre;
  document.getElementById("navbar-avatar").textContent  = usuario.nombre.charAt(0).toUpperCase();
  renderizarRecetas();
}

/* Validación */
function esGmailValido(email) {
  return /^[^\s@]+@gmail\.com$/i.test(email.trim());
}
function limpiarErroresCampos() {
  document.getElementById("error-email").classList.add("d-none");
  document.getElementById("error-pass").classList.add("d-none");
  document.getElementById("input-email").classList.remove("input-error");
  document.getElementById("input-password").classList.remove("input-error");
  document.getElementById("login-error").classList.add("d-none");
}

/* Login */
document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEmail = document.getElementById("input-email");
  const inputPass  = document.getElementById("input-password");
  limpiarErroresCampos();

  const email = inputEmail.value.trim();
  const pass  = inputPass.value;
  let hayError = false;

  if (!esGmailValido(email)) {
    document.getElementById("error-email").classList.remove("d-none");
    inputEmail.classList.add("input-error");
    hayError = true;
  }
  if (pass.length < 6) {
    document.getElementById("error-pass").classList.remove("d-none");
    inputPass.classList.add("input-error");
    hayError = true;
  }
  if (hayError) return;

  const btnTexto   = document.getElementById("btn-ingresar-texto");
  const btnSpinner = document.getElementById("btn-ingresar-spinner");
  const btn        = document.getElementById("btn-ingresar");
  btnTexto.classList.add("d-none");
  btnSpinner.classList.remove("d-none");
  btn.disabled = true;

  setTimeout(() => {
    const encontrado = USUARIOS_MOCK.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === pass
    );
    btnTexto.classList.remove("d-none");
    btnSpinner.classList.add("d-none");
    btn.disabled = false;

    if (encontrado) {
      guardarSesion({ email: encontrado.email, nombre: encontrado.nombre });
      mostrarApp(encontrado);
    } else {
      document.getElementById("login-error").classList.remove("d-none");
      inputPass.value = "";
      inputEmail.focus();
    }
  }, 900);
});

/* Toggle contraseña */
document.getElementById("btn-toggle-pass").addEventListener("click", function () {
  const input = document.getElementById("input-password");
  const icono = document.getElementById("icono-pass");
  if (input.type === "password") { input.type = "text";     icono.className = "bi bi-eye-slash"; }
  else                           { input.type = "password"; icono.className = "bi bi-eye"; }
});

/* Logout */
document.getElementById("btn-logout").addEventListener("click", function () {
  cerrarSesion();
  estado.climaActivo    = "todas";
  estado.tiempoFiltro   = "todos";
  estado.busqueda       = "";
  estado.soloFavoritos  = false;
  estado.recetaActualId = null;
  document.getElementById("input-busqueda").value = "";
  document.getElementById("select-tiempo").value  = "todos";
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip-activo"));
  document.querySelector('[data-clima="todas"]').classList.add("chip-activo");
  mostrarLogin();
});

/* Logo: volver a grilla o home */
document.getElementById("btn-ir-home").addEventListener("click", function (e) {
  e.preventDefault();
  if (!document.getElementById("vista-receta").classList.contains("d-none")) {
    ocultarVistaReceta();
    return;
  }
  if (estado.soloFavoritos) {
    estado.soloFavoritos = false;
    document.getElementById("btn-favs-nav").classList.remove("activo");
    document.querySelector('[data-clima="todas"]').classList.add("chip-activo");
    actualizarTituloSeccion();
    renderizarRecetas();
  }
});

/* ==========================================================
   FAVORITOS
   ========================================================== */
function obtenerFavoritos() {
  const datos = localStorage.getItem("sc_favoritos");
  return datos ? new Set(JSON.parse(datos)) : new Set();
}
function guardarFavoritos(favs) {
  localStorage.setItem("sc_favoritos", JSON.stringify([...favs]));
}
function toggleFavorito(id) {
  const favs = obtenerFavoritos();
  favs.has(id) ? favs.delete(id) : favs.add(id);
  guardarFavoritos(favs);
  return favs.has(id);
}

/* ==========================================================
   FILTROS
   ========================================================== */
function aplicarFiltros() {
  const favs = obtenerFavoritos();
  return RECETAS.filter((r) => {
    if (estado.soloFavoritos && !favs.has(r.id)) return false;
    if (estado.climaActivo !== "todas" && r.clima !== estado.climaActivo) return false;
    if (estado.tiempoFiltro !== "todos" && r.tiempo > parseInt(estado.tiempoFiltro)) return false;
    if (estado.busqueda && !r.nombre.toLowerCase().includes(estado.busqueda.toLowerCase())) return false;
    return true;
  });
}

function actualizarTituloSeccion() {
  const titulo = document.getElementById("seccion-titulo-txt");
  if (estado.soloFavoritos) { titulo.textContent = "Mis favoritos"; return; }
  const mapa = {
    todas:    "Todas las recetas",
    frio:     "❄️ Clima Frío",
    calido:   "☀️ Clima Cálido / Tropical",
    templado: "🌤️ Clima Templado / Mediterráneo",
    arido:    "🏜️ Clima Árido / Desértico",
    humedo:   "🌧️ Clima Húmedo / Lluvioso",
  };
  titulo.textContent = mapa[estado.climaActivo] || "Recetas";
}

/* Chips */
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", function () {
    estado.climaActivo   = this.dataset.clima;
    estado.soloFavoritos = false;
    document.getElementById("btn-favs-nav").classList.remove("activo");
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip-activo"));
    this.classList.add("chip-activo");
    actualizarTituloSeccion();
    renderizarRecetas();
  });
});

document.getElementById("select-tiempo").addEventListener("change", function () {
  estado.tiempoFiltro = this.value;
  renderizarRecetas();
});

document.getElementById("input-busqueda").addEventListener("input", function () {
  estado.busqueda = this.value.trim();
  renderizarRecetas();
});

document.getElementById("btn-favs-nav").addEventListener("click", function () {
  estado.soloFavoritos = !estado.soloFavoritos;
  this.classList.toggle("activo", estado.soloFavoritos);
  if (estado.soloFavoritos) {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip-activo"));
    estado.climaActivo = "todas";
  } else {
    document.querySelector('[data-clima="todas"]').classList.add("chip-activo");
  }
  actualizarTituloSeccion();
  renderizarRecetas();
});

document.getElementById("btn-limpiar-filtros").addEventListener("click", function () {
  estado.climaActivo   = "todas";
  estado.tiempoFiltro  = "todos";
  estado.busqueda      = "";
  estado.soloFavoritos = false;
  document.getElementById("input-busqueda").value = "";
  document.getElementById("select-tiempo").value  = "todos";
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip-activo"));
  document.querySelector('[data-clima="todas"]').classList.add("chip-activo");
  document.getElementById("btn-favs-nav").classList.remove("activo");
  actualizarTituloSeccion();
  renderizarRecetas();
});

/* ==========================================================
   CARDS
   ========================================================== */
const CLIMA_LABEL = {
  frio:     "❄️ Frío",
  calido:   "☀️ Cálido",
  templado: "🌤️ Templado",
  arido:    "🏜️ Árido",
  humedo:   "🌧️ Húmedo",
};

function crearCardHTML(receta, esFavorita) {
  const iconoFav  = esFavorita ? "bi-heart-fill" : "bi-heart";
  const clasesFav = esFavorita ? "btn-favorito-card activo" : "btn-favorito-card";
  const badge     = CLIMA_LABEL[receta.clima] || receta.clima;

  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article
        class="receta-card"
        tabindex="0"
        role="button"
        aria-label="Ver receta: ${receta.nombre}"
        data-id="${receta.id}"
      >
        <div class="card-imagen-wrap">
          <img
            src="${receta.imagen}"
            alt="${receta.nombre}"
            class="card-imagen"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="card-imagen-fallback" aria-hidden="true" style="display:none;">${receta.emoji}</div>
          <button
            class="${clasesFav}"
            aria-label="${esFavorita ? 'Quitar de favoritos' : 'Agregar a favoritos'}"
            data-id="${receta.id}"
            data-action="favorito"
          >
            <i class="bi ${iconoFav}"></i>
          </button>
        </div>
        <div class="card-body-custom">
          <div class="d-flex align-items-center justify-content-between gap-1 mb-1">
            <span class="card-badge">${badge}</span>
            <span class="card-origen">${receta.origen}</span>
          </div>
          <h3 class="card-nombre">${receta.nombre}</h3>
          <div class="card-meta">
            <span><i class="bi bi-clock"></i> ${receta.tiempo} min</span>
            <span><i class="bi bi-people"></i> ${receta.porciones} porc.</span>
          </div>
        </div>
      </article>
    </div>`;
}

function agregarEventosCard(card) {
  /* Click en la card → abrir detalle */
  card.addEventListener("click", function (e) {
    if (e.target.closest("[data-action='favorito']")) return;
    mostrarVistaReceta(parseInt(this.dataset.id));
  });

  /* Teclado */
  card.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && !e.target.closest("[data-action='favorito']")) {
      e.preventDefault();
      mostrarVistaReceta(parseInt(this.dataset.id));
    }
  });

  /* Corazón */
  const btnFav = card.querySelector("[data-action='favorito']");
  if (btnFav) {
    btnFav.addEventListener("click", function (e) {
      e.stopPropagation();
      const id     = parseInt(this.dataset.id);
      const activo = toggleFavorito(id);
      this.querySelector("i").className = activo ? "bi bi-heart-fill" : "bi bi-heart";
      this.classList.toggle("activo", activo);
      this.setAttribute("aria-label", activo ? "Quitar de favoritos" : "Agregar a favoritos");
      if (estado.soloFavoritos && !activo) renderizarRecetas();
    });
  }
}

function renderizarRecetas() {
  const grilla         = document.getElementById("grilla-recetas");
  const estadoCargando = document.getElementById("estado-cargando");
  const estadoVacio    = document.getElementById("estado-vacio");

  grilla.classList.add("d-none");
  estadoVacio.classList.add("d-none");
  estadoCargando.classList.remove("d-none");

  setTimeout(() => {
    estadoCargando.classList.add("d-none");
    const recetasFiltradas = aplicarFiltros();
    const favs = obtenerFavoritos();

    if (recetasFiltradas.length === 0) {
      estadoVacio.classList.remove("d-none");
      return;
    }

    grilla.innerHTML = recetasFiltradas.map((r) => crearCardHTML(r, favs.has(r.id))).join("");
    grilla.classList.remove("d-none");
    grilla.querySelectorAll(".receta-card").forEach(agregarEventosCard);
  }, 400);
}

/* ==========================================================
   DETALLE RECETA (vista en página, sin modal)
   ========================================================== */
function mostrarVistaReceta(id) {
  const receta = RECETAS.find((r) => r.id === id);
  if (!receta) return;

  estado.recetaActualId = id;

  /* Datos textuales */
  document.getElementById("detalle-titulo").textContent      = receta.nombre;
  document.getElementById("detalle-badge").textContent       = (CLIMA_LABEL[receta.clima] || receta.clima) + " · " + receta.origen;
  document.getElementById("detalle-tiempo").textContent      = receta.tiempo + " min";
  document.getElementById("detalle-porciones").textContent   = receta.porciones + " porciones";
  document.getElementById("detalle-dificultad").textContent  = receta.dificultad;
  document.getElementById("detalle-descripcion").textContent = receta.descripcion;

  /* Imagen */
  const imgEl   = document.getElementById("detalle-imagen");
  const emojiEl = document.getElementById("detalle-emoji");
  imgEl.onerror     = null;
  imgEl.style.display   = "";
  emojiEl.style.display = "none";
  imgEl.alt = receta.nombre;
  imgEl.src = receta.imagen;
  imgEl.onerror = function () {
    imgEl.style.display   = "none";
    emojiEl.textContent   = receta.emoji;
    emojiEl.style.display = "flex";
  };

  /* Ingredientes */
  document.getElementById("detalle-ingredientes").innerHTML =
    receta.ingredientes.map((i) => "<li>" + i + "</li>").join("");

  /* Pasos */
  document.getElementById("detalle-pasos").innerHTML =
    receta.pasos.map((p) => "<li>" + p + "</li>").join("");

  /* Favorito */
  sincronizarFavDetalle(obtenerFavoritos().has(id));

  /* Cambiar vista: ocultar grilla, mostrar detalle */
  document.getElementById("contenido-grid").classList.add("d-none");
  document.getElementById("vista-receta").classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ocultarVistaReceta() {
  document.getElementById("vista-receta").classList.add("d-none");
  document.getElementById("contenido-grid").classList.remove("d-none");
  estado.recetaActualId = null;
}

function sincronizarFavDetalle(esFavorita) {
  const btn = document.getElementById("btn-fav-detalle");
  document.getElementById("icono-fav-detalle").className = esFavorita ? "bi bi-heart-fill me-2" : "bi bi-heart me-2";
  document.getElementById("texto-fav-detalle").textContent = esFavorita ? "Guardada en favoritos" : "Guardar receta";
  btn.classList.toggle("activo", esFavorita);
}

/* Botón volver */
document.getElementById("btn-volver").addEventListener("click", ocultarVistaReceta);

/* Favorito en detalle */
document.getElementById("btn-fav-detalle").addEventListener("click", function () {
  if (!estado.recetaActualId) return;
  const activo = toggleFavorito(estado.recetaActualId);
  sincronizarFavDetalle(activo);
  if (estado.soloFavoritos && !activo) {
    ocultarVistaReceta();
    renderizarRecetas();
  }
});

/* ==========================================================
   INIT
   ========================================================== */
const sesion = obtenerSesion();
if (sesion) { mostrarApp(sesion); } else { mostrarLogin(); }
