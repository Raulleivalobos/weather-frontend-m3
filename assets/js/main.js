// 1. Datos de las 10 localidades
const localidades = [
    {
        id: 1,
        nombre: "Puente Alto",
        temperatura: "26°C",
        estado: "Despejado",
        icono: "fa-sun text-warning",
        imagen: "https://picsum.photos/seed/puentealto/400/250",
        humedad: "40%",
        viento: "12 km/h",
        pronostico: [
            "Lun: 27°C",
            "Mar: 25°C",
            "Mié: 23°C",
            "Jue: 24°C",
            "Vie: 26°C",
        ],
    },
    {
        id: 2,
        nombre: "Santiago",
        temperatura: "25°C",
        estado: "Parcialmente nublado",
        icono: "fa-cloud-sun text-secondary",
        imagen: "https://picsum.photos/seed/santiago/400/250",
        humedad: "45%",
        viento: "10 km/h",
        pronostico: [
            "Lun: 26°C",
            "Mar: 24°C",
            "Mié: 22°C",
            "Jue: 23°C",
            "Vie: 25°C",
        ],
    },
    {
        id: 3,
        nombre: "Valparaíso",
        temperatura: "18°C",
        estado: "Nublado",
        icono: "fa-cloud text-secondary",
        imagen: "https://picsum.photos/seed/valparaiso/400/250",
        humedad: "75%",
        viento: "20 km/h",
        pronostico: [
            "Lun: 17°C",
            "Mar: 18°C",
            "Mié: 19°C",
            "Jue: 18°C",
            "Vie: 17°C",
        ],
    },
    {
        id: 4,
        nombre: "Viña del Mar",
        temperatura: "19°C",
        estado: "Nubosidad parcial",
        icono: "fa-cloud-sun text-secondary",
        imagen: "https://picsum.photos/seed/vinadelmar/400/250",
        humedad: "70%",
        viento: "18 km/h",
        pronostico: [
            "Lun: 18°C",
            "Mar: 19°C",
            "Mié: 20°C",
            "Jue: 19°C",
            "Vie: 18°C",
        ],
    },
    {
        id: 5,
        nombre: "Concepción",
        temperatura: "16°C",
        estado: "Lluvia débil",
        icono: "fa-cloud-rain text-primary",
        imagen: "https://picsum.photos/seed/concepcion/400/250",
        humedad: "85%",
        viento: "25 km/h",
        pronostico: [
            "Lun: 15°C",
            "Mar: 14°C",
            "Mié: 16°C",
            "Jue: 17°C",
            "Vie: 15°C",
        ],
    },
    {
        id: 6,
        nombre: "La Serena",
        temperatura: "20°C",
        estado: "Despejado",
        icono: "fa-sun text-warning",
        imagen: "https://picsum.photos/seed/laserena/400/250",
        humedad: "65%",
        viento: "15 km/h",
        pronostico: [
            "Lun: 19°C",
            "Mar: 20°C",
            "Mié: 21°C",
            "Jue: 20°C",
            "Vie: 19°C",
        ],
    },
    {
        id: 7,
        nombre: "Antofagasta",
        temperatura: "22°C",
        estado: "Soleado",
        icono: "fa-sun text-warning",
        imagen: "https://picsum.photos/seed/antofagasta/400/250",
        humedad: "55%",
        viento: "14 km/h",
        pronostico: [
            "Lun: 21°C",
            "Mar: 22°C",
            "Mié: 22°C",
            "Jue: 21°C",
            "Vie: 22°C",
        ],
    },
    {
        id: 8,
        nombre: "Temuco",
        temperatura: "14°C",
        estado: "Lluvia",
        icono: "fa-cloud-showers-heavy text-primary",
        imagen: "https://picsum.photos/seed/temuco/400/250",
        humedad: "90%",
        viento: "30 km/h",
        pronostico: [
            "Lun: 13°C",
            "Mar: 12°C",
            "Mié: 14°C",
            "Jue: 15°C",
            "Vie: 14°C",
        ],
    },
    {
        id: 9,
        nombre: "Puerto Montt",
        temperatura: "12°C",
        estado: "Tormenta",
        icono: "fa-bolt text-warning",
        imagen: "https://picsum.photos/seed/puertomontt/400/250",
        humedad: "92%",
        viento: "35 km/h",
        pronostico: [
            "Lun: 11°C",
            "Mar: 10°C",
            "Mié: 12°C",
            "Jue: 13°C",
            "Vie: 11°C",
        ],
    },
    {
        id: 10,
        nombre: "Punta Arenas",
        temperatura: "7°C",
        estado: "Viento intenso",
        icono: "fa-wind text-info",
        imagen: "https://picsum.photos/seed/puntaarenas/400/250",
        humedad: "60%",
        viento: "50 km/h",
        pronostico: [
            "Lun: 6°C",
            "Mar: 5°C",
            "Mié: 7°C",
            "Jue: 8°C",
            "Vie: 6°C",
        ],
    },
];

// 2. Selección de elementos del DOM
const climaContainer = document.querySelector("#clima-container");
const detalleContainer = document.querySelector("#detalle-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");
const linkHome = document.querySelector("#link-home");
const headerPrincipal = document.querySelector("header");

// 3. Función para renderizar las tarjetas en el Home
function renderCards() {
    let html = "";

    localidades.forEach((lugar) => {
        html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <article class="card card-clima h-100 shadow-sm border-0" data-id="${lugar.id}">
                
                <img src="${lugar.imagen}" class="card-img-top imagen-ciudad-card" alt="Imagen de ${lugar.nombre}">
                
                <div class="card-body d-flex flex-column text-center mt-2">
                    <h5 class="card-title fw-bold text-primary mb-1">${lugar.nombre}</h5>
                    <p class="card-text text-muted mb-2"><small>${lugar.estado}</small></p>
                    
                    <div class="mt-auto d-flex justify-content-center align-items-center gap-2">
                        <i class="fa-solid ${lugar.icono} fs-4"></i>
                        <h2 class="display-6 fw-bold text-dark mb-0">${lugar.temperatura}</h2>
                    </div>
                </div>
            </article>
        </div>`;
    });

    climaContainer.innerHTML = html;
}

// 4. Función para renderizar el detalle de una localidad
function renderDetalle(id) {
    const lugar = localidades.find((l) => l.id === id);

    if (!lugar) {
        detalleContainer.innerHTML = "<p>Localidad no encontrada</p>";
        return;
    }

    // Preparar los items del pronóstico
    let pronosticoHtml = "";
    lugar.pronostico.forEach((diaInfo) => {
        pronosticoHtml += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${diaInfo}
            <i class="fa-solid fa-cloud text-muted"></i>
        </li>`;
    });

    // Inyectar el HTML del detalle con humedad, viento y pronóstico
    detalleContainer.innerHTML = `
        <div class="row align-items-center bg-info p-4 rounded shadow-sm">
            <div class="col-12 col-md-5 text-center mb-4 mb-md-0 border-end">
                <i class="fa-solid ${lugar.icono} display-1 mb-3"></i>
                <h2 class="fw-bold">${lugar.nombre}</h2>
                <h1 class="display-3 fw-bold text-primary">${lugar.temperatura}</h1>
                <p class="fs-4 text-muted">${lugar.estado}</p>
                <div class="d-flex justify-content-around mt-4">
                    <div>
                        <i class="fa-solid fa-droplet text-info me-1"></i> Humedad: <br><strong>${lugar.humedad}</strong>
                    </div>
                    <div>
                        <i class="fa-solid fa-wind text-secondary me-1"></i> Viento: <br><strong>${lugar.viento}</strong>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-7 ps-md-5">
                <h4 class="mb-4"><i class="fa-regular fa-calendar-days me-2"></i>Pronóstico Semanal</h4>
                <ul class="list-group list-group-flush">
                    ${pronosticoHtml}
                </ul>
            </div>
        </div>
    `;
}

// 5. Lógica de navegación
function mostrarHome() {
    vistaHome.classList.remove("d-none");
    headerPrincipal.classList.remove("d-none");
    vistaDetalle.classList.add("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarDetalle(id) {
    renderDetalle(id);
    vistaHome.classList.add("d-none");
    headerPrincipal.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 6. Listeners de eventos
btnVolver.addEventListener("click", mostrarHome);

linkHome.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarHome();
});

climaContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card-clima");
    if (!card) return;

    const idLocalidad = Number(card.dataset.id);
    mostrarDetalle(idLocalidad);
});

// 7. Inicializar la app
renderCards();
