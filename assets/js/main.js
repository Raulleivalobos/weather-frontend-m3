// ==========================================
// 1. MODELADO DE DATOS (ES6+)
// ==========================================
const localidades = [
    {
        id: 1,
        nombre: "Puente Alto",
        temperatura: 26,
        estado: "Despejado",
        icono: "fa-sun text-warning",
        imagen: "https://picsum.photos/seed/puentealto/400/250",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 27, estado: "Despejado" },
            { dia: "Martes", min: 13, max: 25, estado: "Nublado" },
            { dia: "Miércoles", min: 12, max: 23, estado: "Lluvia" },
            { dia: "Jueves", min: 14, max: 24, estado: "Parcialmente nublado" },
            { dia: "Viernes", min: 15, max: 26, estado: "Despejado" },
            { dia: "Sábado", min: 15, max: 27, estado: "Despejado" },
            { dia: "Domingo", min: 13, max: 23, estado: "Nublado" },
        ],
    },
    {
        id: 2,
        nombre: "Santiago",
        temperatura: 25,
        estado: "Parcialmente nublado",
        icono: "fa-cloud-sun text-secondary",
        imagen: "https://picsum.photos/seed/santiago/400/250",
        pronosticoSemanal: [
            { dia: "Lunes", min: 13, max: 26, estado: "Parcialmente nublado" },
            { dia: "Martes", min: 12, max: 24, estado: "Nublado" },
            { dia: "Miércoles", min: 10, max: 22, estado: "Lluvia" },
            { dia: "Jueves", min: 11, max: 23, estado: "Parcialmente nublado" },
            { dia: "Viernes", min: 13, max: 25, estado: "Despejado" },
            { dia: "Sábado", min: 14, max: 27, estado: "Despejado" },
            { dia: "Domingo", min: 12, max: 23, estado: "Nublado" },
        ],
    },
    {
        id: 3,
        nombre: "Valparaíso",
        temperatura: 18,
        estado: "Nublado",
        icono: "fa-cloud text-secondary",
        imagen: "https://picsum.photos/seed/valparaiso/400/250",
        pronosticoSemanal: [
            { dia: "Lunes", min: 12, max: 17, estado: "Nublado" },
            { dia: "Martes", min: 11, max: 18, estado: "Nublado" },
            {
                dia: "Miércoles",
                min: 12,
                max: 19,
                estado: "Parcialmente nublado",
            },
            { dia: "Jueves", min: 11, max: 18, estado: "Lluvia" },
            { dia: "Viernes", min: 10, max: 17, estado: "Lluvia" },
            { dia: "Sábado", min: 11, max: 17, estado: "Nublado" },
            { dia: "Domingo", min: 9, max: 13, estado: "Lluvia" },
        ],
    },
    {
        id: 4,
        nombre: "Temuco",
        temperatura: 14,
        estado: "Lluvia",
        icono: "fa-cloud-showers-heavy text-primary",
        imagen: "https://picsum.photos/seed/temuco/400/250",
        pronosticoSemanal: [
            { dia: "Lunes", min: 8, max: 13, estado: "Lluvia" },
            { dia: "Martes", min: 7, max: 12, estado: "Lluvia" },
            { dia: "Miércoles", min: 9, max: 14, estado: "Nublado" },
            { dia: "Jueves", min: 10, max: 15, estado: "Parcialmente nublado" },
            { dia: "Viernes", min: 9, max: 14, estado: "Lluvia" },
            { dia: "Sábado", min: 11, max: 17, estado: "Nublado" },
            { dia: "Domingo", min: 8, max: 13, estado: "Lluvia" },
        ],
    },
    {
        id: 5,
        nombre: "La Serena",
        temperatura: 20,
        estado: "Despejado",
        icono: "fa-sun text-warning",
        imagen: "https://picsum.photos/seed/laserena/400/250",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 19, estado: "Despejado" },
            { dia: "Martes", min: 15, max: 20, estado: "Despejado" },
            { dia: "Miércoles", min: 15, max: 21, estado: "Despejado" },
            { dia: "Jueves", min: 14, max: 20, estado: "Parcialmente nublado" },
            { dia: "Viernes", min: 13, max: 19, estado: "Nublado" },
            { dia: "Sábado", min: 12, max: 17, estado: "Nublado" },
            { dia: "Domingo", min: 16, max: 23, estado: "Despejado" },
        ],
    },
];

// ==========================================
// 2. LÓGICA Y ESTADÍSTICAS (ES6)
// ==========================================
const getLugarById = (id) => localidades.find((lugar) => lugar.id === id);

// FUNCIÓN DE MAPEO DE ICONOS: Identifica las clases de FontAwesome según el estado
const getIconoClima = (estado) => {
    const mapas = {
        Despejado: "fa-sun text-warning",
        Nublado: "fa-cloud text-secondary",
        Lluvia: "fa-cloud-showers-heavy text-primary",
        "Parcialmente nublado": "fa-cloud-sun text-secondary",
    };
    return mapas[estado] || "fa-cloud text-muted"; // Valor por defecto
};

const calcularEstadisticas = (pronostico) => {
    const todasLasTemps = pronostico.flatMap((dia) => [dia.min, dia.max]);
    const minSemana = Math.min(...todasLasTemps);
    const maxSemana = Math.max(...todasLasTemps);
    const sumaTemps = todasLasTemps.reduce((acc, temp) => acc + temp, 0);
    const promSemana = (sumaTemps / todasLasTemps.length).toFixed(1);

    const conteoClima = pronostico.reduce((acc, dia) => {
        acc[dia.estado] = (acc[dia.estado] || 0) + 1;
        return acc;
    }, {});

    const estadoFrecuente = Object.keys(conteoClima).reduce((a, b) =>
        conteoClima[a] > conteoClima[b] ? a : b,
    );
    const resumen = `Semana mayormente ${estadoFrecuente.toLowerCase()}, con promedios de ${promSemana}°C.`;

    return { minSemana, maxSemana, promSemana, resumen };
};

// ==========================================
// 3. SELECCIÓN DE DOM
// ==========================================
const climaContainer = document.querySelector("#clima-container");
const detalleContainer = document.querySelector("#detalle-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");

const crearElemento = (etiqueta, clases = "", texto = "") => {
    const el = document.createElement(etiqueta);
    if (clases) el.className = clases;
    if (texto) el.textContent = texto;
    return el;
};

// ==========================================
// 4. RENDERIZADO SEGURO (XSS)
// ==========================================
const renderizarHome = () => {
    climaContainer.textContent = "";

    localidades.forEach((lugar) => {
        const { id, nombre, temperatura, estado, icono, imagen } = lugar;

        const col = crearElemento("div", "col-md-6 col-lg-4");
        const card = crearElemento(
            "article",
            "card place-card h-100 shadow-sm",
        );
        card.onclick = () => abrirDetalle(id);

        const img = crearElemento("img", "card-img-top place-card__image");
        img.src = imagen;
        img.alt = nombre;

        const cardBody = crearElemento(
            "div",
            "card-body text-center d-flex flex-column justify-content-center",
        );

        const iconEl = crearElemento("i", `fa-solid ${icono} place-card__icon`);
        const titleEl = crearElemento(
            "h2",
            "h4 place-card__name text-white mb-1",
            nombre,
        );
        const tempEl = crearElemento(
            "p",
            "h3 fw-bold text-white mb-2",
            `${temperatura}°C`,
        );
        const descEl = crearElemento("p", "place-card__state mb-0", estado);

        cardBody.append(iconEl, titleEl, tempEl, descEl);
        card.append(img, cardBody);
        col.append(card);
        climaContainer.append(col);
    });
};

const renderizarDetalle = (id) => {
    const lugar = getLugarById(id);
    if (!lugar) return;

    const stats = calcularEstadisticas(lugar.pronosticoSemanal);

    detalleContainer.innerHTML = `
        <div class="card detail-view__card shadow-lg">
            <div class="card-body p-4 p-md-5">
                <div class="row mb-5 align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <h2 id="det-nombre" class="display-5 text-white fw-bold mb-2"></h2>
                        <p class="fs-4 text-muted mb-4 mb-md-0"><i id="det-icono" class="fa-solid me-2"></i><span id="det-estado"></span> actual</p>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-3 text-center">
                            <div class="col-6">
                                <div class="p-3 rounded-3 border border-secondary" style="background-color: rgba(0,0,0,0.2);">
                                    <h3 class="h6 text-muted mb-1">Mín. Semanal</h3>
                                    <p id="det-min" class="h3 text-info mb-0"></p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-3 rounded-3 border border-secondary" style="background-color: rgba(0,0,0,0.2);">
                                    <h3 class="h6 text-muted mb-1">Máx. Semanal</h3>
                                    <p id="det-max" class="h3 text-warning mb-0"></p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="p-3 rounded-3 border border-secondary text-start" style="background-color: rgba(0,0,0,0.2);">
                                    <h3 class="h6 text-muted mb-2"><i class="fa-solid fa-chart-line me-2"></i>Resumen estadístico</h3>
                                    <p id="det-resumen" class="text-white mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="h4 text-white mb-4 border-bottom border-secondary pb-2">Pronóstico Extendido</h3>
                <div id="det-pronostico" class="rounded-3 overflow-hidden border border-secondary" style="background-color: rgba(0,0,0,0.2);">
                </div>
            </div>
        </div>
    `;

    document.querySelector("#det-nombre").textContent = lugar.nombre;
    document.querySelector("#det-estado").textContent = lugar.estado;
    document.querySelector("#det-icono").className =
        `fa-solid ${lugar.icono} me-2`;
    document.querySelector("#det-min").textContent = `${stats.minSemana}°C`;
    document.querySelector("#det-max").textContent = `${stats.maxSemana}°C`;
    document.querySelector("#det-resumen").textContent = stats.resumen;

    const listaPronostico = document.querySelector("#det-pronostico");

    lugar.pronosticoSemanal.forEach((dia) => {
        const item = crearElemento(
            "div",
            "d-flex justify-content-between align-items-center p-3 border-bottom border-secondary detail-view__forecast-item",
        );

        const nameEl = crearElemento(
            "span",
            "fw-bold text-white w-25",
            dia.dia,
        );
        const stateEl = crearElemento(
            "span",
            "text-muted w-50 text-center",
            dia.estado,
        );

        const tempsEl = crearElemento(
            "span",
            "w-25 text-end d-flex align-items-center justify-content-end",
        );

        // AGREGAR ICONO DINÁMICO: Obtenemos las clases según el estado del día
        const iconoClase = getIconoClima(dia.estado);
        const iconEl = crearElemento("i", `fa-solid ${iconoClase} me-3`); // me-3 para espacio antes de los números

        const minEl = crearElemento("span", "text-info me-2", `${dia.min}°`);
        const maxEl = crearElemento(
            "span",
            "text-warning fw-bold",
            `${dia.max}°`,
        );

        // Ensamblado: El ícono se agrega antes que el min y el max
        tempsEl.append(iconEl, minEl, maxEl);
        item.append(nameEl, stateEl, tempsEl);
        listaPronostico.append(item);
    });
};

// ==========================================
// 5. NAVEGACIÓN Y EVENTOS
// ==========================================
const abrirDetalle = (id) => {
    renderizarDetalle(id);
    vistaHome.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const volverHome = () => {
    vistaDetalle.classList.add("d-none");
    vistaHome.classList.remove("d-none");
};

btnVolver.addEventListener("click", volverHome);
document.addEventListener("DOMContentLoaded", renderizarHome);
