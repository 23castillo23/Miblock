// ==============================================================
// 1. CONFIGURACIÓN DE FIREBASE (CON TUS LLAVES REALES)
// ==============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ==============================================================
// VERIFICACIÓN DE ACCESO
// Si el usuario no tiene sesión activa, lo manda a pedir acceso.
// La clave 'comandos_user' la guarda acceso-comandos.html
// cuando el login con Google es aprobado.
// ==============================================================
if (!localStorage.getItem('comandos_user')) {
    window.location.href = 'acceso-comandos.html';
}
// ==============================================================

// =====================================================
// LAZY LOADING — carga de datos por categoría
// =====================================================
// ANTES: import { misNotas } from './data.js'
//   Cargaba los 271KB completos al abrir el portal
//
// AHORA: cada categoría tiene su propio archivo en js/data/
//   Solo se carga lo que el usuario necesita ver
//   Lo que ya se cargó queda en caché (no se vuelve a pedir)
//
// La pestaña "Todas" carga todo en paralelo la primera vez.
// Las demás pestañas cargan solo su archivo al hacer clic.
// =====================================================

// Cache en memoria: guarda los datos ya descargados
// Ejemplo: { "cmd": [...tarjetas], "windows": [...tarjetas] }
const cacheNotas = {};

// Lista de categorías — debe coincidir con los archivos en js/data/
const CATEGORIAS_CON_DATOS = [
    'cmd', 'atajos', 'basicos', 'programas', 'aplicaciones',
    'onlinea', 'linux', 'windows', 'tutoriales', 'programacion',
    'sistemas', 'excel', 'investigacion', 'utilidades'
];

// JS: Carga el archivo de una categoría si aún no está en caché.
// "async" significa que la función trabaja en segundo plano sin congelar la página.
// "await" significa "espera aquí hasta que el archivo termine de llegar".
async function cargarCategoria(cat) {
    // Si ya está en memoria, no volvemos a pedirla al servidor
    if (cacheNotas[cat]) return cacheNotas[cat];

    try {
        // Import dinámico: el navegador solo descarga este archivo ahora
        const modulo = await import(`./data/data.${cat}.js`);
        const datos = modulo[`datos_${cat}`];
        cacheNotas[cat] = datos; // Guardar en caché para el futuro
        return datos;
    } catch (error) {
        console.warn(`No se pudo cargar data.${cat}.js:`, error);
        return []; // Devuelve vacío si hay error, no rompe la página
    }
}

// JS: Carga TODAS las categorías en paralelo (para la pestaña "Todas")
// Promise.all lanza todas las peticiones al mismo tiempo en lugar de una por una.
// Es como pedir 14 platos al mismo tiempo en lugar de uno por uno.
async function cargarTodo() {
    const promesas = CATEGORIAS_CON_DATOS.map(cat => cargarCategoria(cat));
    const resultados = await Promise.all(promesas);
    return resultados.flat(); // Une todos los arrays en uno solo
}

// Variable global con las notas visibles actualmente
// Antes era el import estático, ahora se llena dinámicamente
let misNotas = [];

// ✅ NUEVO: Importamos el panel de control central
// Ahora los valores no están "pegados" en el código, están en config.js
import {
    CONFIG_BOTONES,
    CONFIG_TARJETAS,
    CONFIG_ICONOS_PLATAFORMAS,
    CONFIG_MENSAJES,
    CONFIG_MODAL,
    CONFIG_FILTROS,
    CONFIG_SCROLL,
    CONFIG_MATRIX,
    CONFIG_CATEGORIAS       // ← las pestañas del menú ya viven en config.js
} from './config.js';

// JS: Aquí he puesto los datos exactos que te dio la página de Firebase
// 1. CONFIGURACIÓN DE FIREBASE (Mantén tus llaves reales aquí)
const firebaseConfig = {
    apiKey: "AIzaSyBUHP2Gi25IxYZw1NgQrZh17lY92g2c-Kc",
    authDomain: "comandosytutoriales.firebaseapp.com",
    projectId: "comandosytutoriales",
    storageBucket: "comandosytutoriales.firebasestorage.app",
    messagingSenderId: "597611163587",
    appId: "1:597611163587:web:92c172a7a59109bb341776",
    measurementId: "G-5YQ50S1QP2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

let usuarioActual = null;
let misFavoritos = [];
// JS: Variable global para recordar en qué pestaña estamos
let categoriaActual = 'todas';

// 2. EL DISPARADOR: Abre la ventana y captura errores
// JS: Esta función abre la ventana de Google y te avisa EXACTAMENTE qué falta
async function iniciarSesion() {
    try {
        console.log("Intentando abrir ventana de Google..."); // JS: Control en consola
        const result = await signInWithPopup(auth, provider);
        console.log("¡Éxito! Bienvenido:", result.user.displayName);
    } catch (error) {
        // JS: Si la ventana se cierra, aquí te dirá el porqué técnico
        console.error("Detalle técnico del error:", error.code);

        if (error.code === 'auth/operation-not-allowed') {
            alert("⚠️ ERROR: No has activado 'Google' como método de acceso en la consola de Firebase.");
        } else if (error.code === 'auth/unauthorized-domain') {
            alert("⚠️ ERROR: Este dominio (github.io o localhost) no está autorizado en Firebase.");
        } else if (error.code === 'auth/popup-closed-by-user') {
            alert("Has cerrado la ventana antes de terminar el proceso.");
        } else {
            // JS: Para cualquier otro error inesperado
            alert("Error de conexión: " + error.code);
        }
    }
}

// JS: No olvides que al final de tu archivo debe estar el "puente"
window.iniciarSesion = iniciarSesion;

// JS: Función para salir de la cuenta de Google
async function cerrarSesion() {
    try {
        await signOut(auth); // JS: Comando oficial de Firebase para salir
        console.log("Sesión terminada");
    } catch (error) {
        console.error("Error al salir:", error);
    }
}

// javascript.js

// JS: El Vigilante ahora controla el acceso, la estética y los contadores
onAuthStateChanged(auth, async (user) => {
    const btnLogin = document.getElementById('btn-login');
    usuarioActual = user;

    if (user) {
        // 1. UI: Si hay usuario, el botón se vuelve de "Salir"
        if (btnLogin) {
            btnLogin.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
            btnLogin.setAttribute('data-tooltip', 'Cerrar Sesión');
            btnLogin.onclick = cerrarSesion;
        }

        // 2. DATOS: Traemos la información desde Firestore
        const userRef = doc(db, "usuarios", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
            const data = userDoc.data();
            misFavoritos = data.favoritos || [];

            // 🔥 CORRECCIÓN CLAVE: Actualiza los números apenas lleguen los favoritos
            actualizarContadoresTabs();
        }

        // 3. RENDER: Refrescamos la pantalla principal
        filtrarPorCategoria('todas');

    } else {
        // UI: Si no hay usuario, el botón vuelve a ser de "Login"
        if (btnLogin) {
            btnLogin.innerHTML = '<i class="fas fa-user-circle"></i>';
            btnLogin.setAttribute('data-tooltip', 'Entrar con Google');
            btnLogin.onclick = iniciarSesion;
        }

        // Reseteamos favoritos y contadores al salir
        misFavoritos = [];
        actualizarContadoresTabs();
        filtrarPorCategoria('todas');
    }
});

// 4. EL TRABAJADOR: Guarda o borra el engranaje en la nube
async function toggleFavorito(tituloNota) {
    // ✅ ANTES: alert("Inicia sesión para guardar favoritos")
    // ✅ AHORA: el mensaje viene de config.js → CONFIG_MENSAJES.favoritoSinSesion
    if (!usuarioActual) return alert(CONFIG_MENSAJES.favoritoSinSesion);

    const userRef = doc(db, "usuarios", usuarioActual.uid);
    const esYaFavorito = misFavoritos.includes(tituloNota);

    // 1. Sincronización con la base de datos
    if (esYaFavorito) {
        await updateDoc(userRef, { favoritos: arrayRemove(tituloNota) });
        misFavoritos = misFavoritos.filter(f => f !== tituloNota);
    } else {
        await setDoc(userRef, { favoritos: arrayUnion(tituloNota) }, { merge: true });
        misFavoritos.push(tituloNota);
    }

    // 2. LÓGICA DE INGENIERÍA: Eliminación suave sin parpadeos
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(t => {
        const h3 = t.querySelector('h3');
        if (h3 && h3.innerText === tituloNota) {
            const btn = t.querySelector('.btn-fav-card');

            // Caso A: Si estamos viendo la pestaña de "Favoritos"
            if (categoriaActual === 'favoritas' && esYaFavorito) {
                // ✅ ANTES: duracion y efecto fijos en el código
                // ✅ AHORA: vienen de CONFIG_TARJETAS en config.js
                t.style.transition = `all ${CONFIG_TARJETAS.animacionSalidaMs}ms ease`;
                t.style.opacity = '0';
                t.style.transform = CONFIG_TARJETAS.efectoSalida;

                // Esperamos a que termine la animación para quitarla del DOM
                setTimeout(() => {
                    t.remove();
                    actualizarContadoresTabs();
                }, CONFIG_TARJETAS.animacionSalidaMs); // ✅ Usa el ms del config
            }
            // Caso B: Si estamos en cualquier otra pestaña
            else {
                if (btn) btn.classList.toggle('active');
                actualizarContadoresTabs();
            }
        }
    });
}

// =====================================================
// 2. SELECTORES
// Aquí JavaScript "atrapa" elementos del HTML por su ID.
// Esto permite modificarlos dinámicamente.
// =====================================================
// HTML/JS: Selecciona el contenedor donde se dibujarán las tarjetas
const listaRecursos = document.getElementById('lista-recursos');
// HTML/JS: Selecciona el campo de entrada de texto del buscador
const buscador = document.getElementById('inputBusqueda');
// HTML/JS: Selecciona el contenedor principal de la ventana emergente
const modal = document.getElementById('modal-tutorial');
// HTML/JS: Selecciona el área interna del modal donde se pone el texto
const cuerpoTutorial = document.getElementById('tutorial-cuerpo');


// =====================================================
// 3. UTILIDAD
// Convierte texto normal en formato Título (Title Case)
// =====================================================
// JS: Función para poner mayúsculas al inicio de cada palabra
function titleCase(str) {
    return str // JS: Devuelve la cadena procesada
        .toLowerCase() // JS: Convierte todo a minúsculas primero
        .split(' ') // JS: Divide el texto en palabras separadas
        .map(word => // JS: Recorre cada palabra para modificarla
            word.charAt(0).toUpperCase() + word.slice(1) // JS: Capitaliza la primera letra
        )
        .join(' '); // JS: Une las palabras de nuevo en un solo texto
}

/* javascript.js */

function actualizarContadoresTabs() {
    // Seleccionamos todas las pestañas (tabs)
    document.querySelectorAll('.tab').forEach(boton => {
        // Extraemos la categoría del atributo 'onclick' (ej: 'cmd', 'investigacion')
        const cat = boton.getAttribute('onclick').match(/'([^']+)'/)[1];

        let cantidad;

        // Caso especial para la pestaña de favoritos
        if (cat === 'favoritas') {
            cantidad = misFavoritos.length;
        } else {
            // Lógica de filtrado con Escudo de Privacidad
            // Usamos cacheNotas (lo ya descargado) para contar sin forzar carga
            const notasDisponibles = Object.values(cacheNotas).flat();
            cantidad = notasDisponibles.filter(n => {
                // 1. Verificar si la nota pertenece a la categoría o si es la pestaña 'todas'
                const coincideCat = (cat === 'todas' || n.categoria === cat);
                if (!coincideCat) return false;

                // 2. FILTRO DE SEGURIDAD: Si la nota es marcada como privada,
                // SOLO se cuenta si el usuario logueado coincide con tu UID
                // ✅ ANTES: el UID estaba fijo aquí en el código
                // ✅ AHORA: viene de CONFIG_FILTROS.uidAdmin en config.js
                if (n.esPrivada && (!usuarioActual || usuarioActual.uid !== CONFIG_FILTROS.uidAdmin)) {
                    return false;
                }
                return true;
            }).length;
        }

        // Gestión del círculo del número (badge)
        let badge = boton.querySelector('.count-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'count-badge';
            boton.appendChild(badge);
        }
        badge.innerText = cantidad;

        // INVISIBILIDAD: Si eres un extraño, la pestaña "investigacion" desaparece
        if (cantidad === 0 && cat === 'investigacion') {
            boton.style.display = 'none';
        } else {
            boton.style.display = 'flex'; // Se asegura de mostrar las demás categorías
        }
    });
}

// Mantener el puente global
window.actualizarContadoresTabs = actualizarContadoresTabs;

// =====================================================
// 4. MOTOR DE RENDERIZADO
// Esta función CREA las tarjetas dinámicamente en HTML
// =====================================================
// JS: Función principal para dibujar el contenido en pantalla
function mostrarNotas(notasAMostrar, esRefresco = false) {
    // JS: Si es un refresco de favoritos, añadimos una clase al contenedor para quitar animaciones
    if (esRefresco) {
        listaRecursos.classList.add('sin-animacion');
    } else {
        listaRecursos.classList.remove('sin-animacion');
    }
    // HTML/JS: Busca el elemento del contador flotante
    const contador = document.getElementById('contador-tarjetas');
    if (contador) {
        // ✅ ANTES: `${notasAMostrar.length} Recursos`  (texto fijo)
        // ✅ AHORA: viene de CONFIG_MENSAJES.contadorRecursos en config.js
        contador.innerText = CONFIG_MENSAJES.contadorRecursos(notasAMostrar.length);
    }

    // HTML/JS: Borra el contenido actual del contenedor para limpiar la vista
    listaRecursos.innerHTML = '';

    // JS: Empieza el ciclo para procesar cada tarjeta una por una
    notasAMostrar.forEach((nota) => {
        // ESTO ES PARTE DEL CODIGO PARA QUE SEA PRIVADO DE ESTE COMANDO esPrivada: true,
        // ✅ UID viene del config.js
        if (nota.esPrivada && (!usuarioActual || usuarioActual.uid !== CONFIG_FILTROS.uidAdmin)) {
            return;
        }
        const tituloEscapado = nota.titulo.replace(/'/g, "\\'");

        // ✅ ANTES: la imagen siempre se mostraba sin control
        // ✅ AHORA: CONFIG_TARJETAS.mostrarImagen en config.js decide si se muestra
        let imgHtml = (nota.imagen && CONFIG_TARJETAS.mostrarImagen) ? `
            <div class="tarjeta-img-contenedor">
                <img src="${nota.imagen}" alt="${nota.titulo}">
            </div>
        ` : ""; // JS: Si no hay imagen o está desactivada en config, deja el espacio vacío

        // JS: Crea un elemento 'div' nuevo en la memoria del navegador
        const tarjeta = document.createElement('div');

        // CSS/JS: Asigna la clase base 'tarjeta' y la clase de su categoría
        tarjeta.className = `tarjeta ${nota.categoria}`;

        // JS: Identifica la posición de esta nota en el arreglo original
        const originalIndex = misNotas.findIndex(
            n => n.titulo === nota.titulo
        );

        // JS: Genera los botones de enlaces si la nota tiene datos
        let htmlLinks = (nota.links && nota.links.length > 0 && CONFIG_TARJETAS.mostrarLinks)
            ? `
                <div class="links-seccion">
                    ${nota.links.map(link => {
                        // ✅ ANTES: cada plataforma se comparaba con if/if/if fijos aquí
                        // ✅ AHORA: buscamos el ícono en el objeto CONFIG_ICONOS_PLATAFORMAS
                        // Si la plataforma no existe en el config, usa el ícono "default"
                        const icono = CONFIG_ICONOS_PLATAFORMAS[link.plataforma] || CONFIG_ICONOS_PLATAFORMAS.default;

                        // JS: Añadimos 'data-tooltip' y una clase al texto interno
                        return `
                            <a href="${link.url}" target="_blank" class="btn-pro-link ${link.plataforma || 'generic'}" data-tooltip="${link.texto}">
                                <i class="${icono}"></i>
                                <span class="texto-btn-cortado">${link.texto}</span>
                            </a>`;
                    }).join('')}
                </div>
            `
            : ""; // JS: No genera nada si no hay links o están desactivados en config

        // JS: Evalúa si debe mostrar el botón "Guía"
        // ✅ El texto e ícono del botón vienen de CONFIG_BOTONES.guia en config.js
        let btnTutorial = ((nota.pasos && nota.pasos.length > 0) || nota.contenidoTutorialHtml)
            ? `
                <button class="btn-accion btn-tutorial"
                        onclick="abrirTutorial(${originalIndex})">
                    <i class="${CONFIG_BOTONES.guia.icono}"></i> ${CONFIG_BOTONES.guia.texto}
                </button>
              `
            : "";

        // ============================================================
        // AQUÍ VA TU NUEVO CÓDIGO (Lógica de Favoritos)
        // ============================================================
        const esFav = misFavoritos.includes(nota.titulo); // JS: Revisa si es favorita
        const claseFav = esFav ? 'active' : ''; // CSS: Aplica color naranja si es activo

        // ✅ La etiqueta respeta CONFIG_TARJETAS.mostrarEtiqueta y etiquetaMayusculas
        const textoEtiqueta = CONFIG_TARJETAS.etiquetaMayusculas
            ? nota.categoria.toUpperCase()
            : nota.categoria;
        const etiquetaHtml = CONFIG_TARJETAS.mostrarEtiqueta
            ? `<span class="etiqueta ${nota.categoria}">${textoEtiqueta}</span>`
            : "";

        // ✅ El comando respeta CONFIG_TARJETAS.mostrarComando
        const comandoHtml = CONFIG_TARJETAS.mostrarComando
            ? `<code>${nota.comando}</code>`
            : "";

        // ✅ La descripción respeta CONFIG_TARJETAS.mostrarDescripcion
        const descripcionHtml = CONFIG_TARJETAS.mostrarDescripcion
            ? `<p>${nota.descripcion}</p>`
            : "";

        // HTML/JS: Construye toda la estructura interna de la tarjeta
        tarjeta.innerHTML = `
            <button class="btn-fav-card ${claseFav}" onclick="toggleFavorito('${tituloEscapado}')">
                <i class="${CONFIG_BOTONES.favorito.icono}"></i>
            </button>
            ${imgHtml}
            <div class="tarjeta-header">
                ${etiquetaHtml}
                <h3>${nota.titulo}</h3>
            </div>

            ${comandoHtml}

            ${descripcionHtml}

            ${htmlLinks}

            <div class="panel-controles">
                <button class="btn-accion btn-copiar"
                        onclick="copiarComando(this)">
                    <i class="${CONFIG_BOTONES.copiar.icono}"></i> ${CONFIG_BOTONES.copiar.texto}
                </button>
                ${btnTutorial}
            </div>
        `;

        // HTML: Inserta la tarjeta terminada en la página web
        listaRecursos.appendChild(tarjeta);

        // 2. ESCÁNER TÉCNICO: ¿El texto se sale de la caja?
        const elementosParaChecar = tarjeta.querySelectorAll('h3, p');

        elementosParaChecar.forEach(el => {
            // JS: Solo activamos la expansión si el contenido es 10px más grande que la caja
            // Esto ignora errores de redondeo de sub-píxeles del navegador.
            if (el.scrollHeight > (el.clientHeight + 10)) {
                el.classList.add('expandible');
                el.onclick = () => el.classList.toggle('expandida');
            } else {
                // JS: Si el texto cabe perfecto, limpiamos cualquier rastro de expansión
                el.classList.remove('expandible');
                el.classList.remove('expandida');
                el.onclick = null;
                el.style.cursor = 'default';
            }
        });

        // ============================================================
        // EL NUEVO CÓDIGO (ESCÁNER DE BOTONES)
        // ============================================================
        const botonesLinks = tarjeta.querySelectorAll('.btn-pro-link');

        botonesLinks.forEach(btn => {
            const spanTexto = btn.querySelector('.texto-btn-cortado');

            if (spanTexto) {
                // JS: Comparamos el ancho total del contenido (scrollWidth)
                // contra el ancho físico que tiene permitido el botón (offsetWidth)
                const estaRecortado = spanTexto.scrollWidth > spanTexto.offsetWidth;

                if (estaRecortado) {
                    btn.classList.add('con-tooltip');
                } else {
                    btn.classList.remove('con-tooltip');
                    btn.removeAttribute('title');
                }
            }
        });

    });
}


// =====================================================
// 5. TUTORIALES (MODAL)
// Abre la ventana y muestra los pasos
// =====================================================
// JS: Función para activar la ventana emergente
function abrirTutorial(index) {
    const nota = misNotas[index]; // JS: Obtiene los datos de la nota según el índice

    // JS: Elige entre el HTML diseñado o una lista de pasos numerada
    const contenidoPrincipal = nota.contenidoTutorialHtml
        ? nota.contenidoTutorialHtml
        : `<h4>📝 Pasos detallados:</h4>
           <ol>${nota.pasos.map(p => `<li>${p}</li>`).join('')}</ol>`;

    // ✅ ANTES: textos del modal fijos en el código ("Leer", "Guía PDF", tamaño título)
    // ✅ AHORA: vienen de CONFIG_BOTONES.modal y CONFIG_MODAL en config.js
    cuerpoTutorial.innerHTML = `
            <div class="tutorial-header">
                <div class="titulo-grupo">
                    <h2 style="color: var(--primary); font-size: ${CONFIG_MODAL.tamanoTitulo};">${nota.titulo}</h2>
                    <span class="etiqueta ${nota.categoria}">${nota.categoria.toUpperCase()}</span>
                </div>

                <div class="controles-tutorial" style="display: flex; gap: 10px;">
                    <button onclick="toggleLectura()" class="btn-pdf btn-lectura" title="Modo Lectura">
                        <i class="${CONFIG_BOTONES.modal.leer.icono}"></i> ${CONFIG_BOTONES.modal.leer.texto}
                    </button>
                    <button onclick="window.print()" class="btn-pdf">
                        <i class="${CONFIG_BOTONES.modal.pdf.icono}"></i> ${CONFIG_BOTONES.modal.pdf.texto}
                    </button>
                </div>
            </div>

            <div class="tutorial-contenido-pro">
                ${contenidoPrincipal}
            </div>
        `;

    // CSS/JS: Muestra el modal eliminando la clase que lo oculta
    modal.classList.remove('hidden');

    // ✅ ANTES: document.body.style.overflow = 'hidden'  siempre fijo
    // ✅ AHORA: CONFIG_MODAL.bloquearScrollFondo decide si se bloquea
    if (CONFIG_MODAL.bloquearScrollFondo) {
        document.body.style.overflow = 'hidden';
    }

    // JS: Pequeña espera para asegurar que el modal se reinicie arriba
    // ✅ El tiempo de espera viene de CONFIG_MODAL.retardoMedicionMs
    setTimeout(() => {
        const contenedorCuerpo = document.querySelector('.modal-contenido'); // JS: Atrapa la caja de contenido
        if (contenedorCuerpo) { // JS: Si existe
            contenedorCuerpo.scrollTo({ top: 0, behavior: 'instant' }); // JS: Hace scroll al inicio inmediatamente
        }
        // 2. ESCÁNER DE BOTONES INTERNOS: Aplicamos el estilo rectangular inteligente
        const botonesInternos = cuerpoTutorial.querySelectorAll('.btn-pro-link');

        botonesInternos.forEach(btn => {
            const spanTexto = btn.querySelector('.texto-btn-cortado');
            if (spanTexto) {
                // JS: Medimos si el texto se recorta dentro de la guía
                if (spanTexto.scrollWidth > spanTexto.offsetWidth) {
                    btn.classList.add('con-tooltip');
                } else {
                    btn.classList.remove('con-tooltip');
                }
            }
        });
    }, CONFIG_MODAL.retardoMedicionMs); // ✅ Usa el valor del config
}

// JS: Función para ocultar la ventana emergente
function cerrarTutorial() {
    modal.classList.add('hidden'); // CSS/JS: Esconde el modal de nuevo
    document.body.style.overflow = 'auto'; // CSS/JS: Devuelve el scroll normal a la web
}

// JS: Detecta clics en cualquier parte de la ventana
window.onclick = function (event) {
    // ✅ ANTES: siempre cerraba al hacer clic fuera
    // ✅ AHORA: CONFIG_MODAL.cerrarAlClickFuera decide si lo hace
    if (CONFIG_MODAL.cerrarAlClickFuera && event.target === modal) {
        cerrarTutorial(); // JS: Cierra el tutorial
    }
};

/* =====================================================
   INICIALIZACIÓN DE TEMA (MODO OSCURO)
   Relación: Verifica si el usuario ya eligió un tema antes o si su sistema prefiere oscuro.
   ===================================================== */
// JS: Busca en la memoria del navegador si hay un tema guardado
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') { // JS: Si el registro dice oscuro
    document.body.classList.add('dark-mode'); // CSS: Activa el diseño de noche
    actualizarIcono(true); // JS: Cambia el icono a un sol
} else { // JS: Si es la primera vez o dice claro
    document.body.classList.remove('dark-mode'); // CSS: Asegura el diseño de día
    actualizarIcono(false); // JS: Cambia el icono a una luna
}

// =====================================================
// 6. FUNCIONES GLOBALES
// Modo oscuro y copiar comandos
// =====================================================

// JS: Función para alternar entre el tema claro y oscuro
function toggleDarkMode() {
    // CSS/JS: Activa o desactiva la clase en el body y guarda el resultado
    const isDark = document.body.classList.toggle('dark-mode');

    // JS: Guarda la elección del usuario en la memoria local
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    actualizarIcono(isDark); // JS: Refresca el icono visual
}

// JS: Función para cambiar visualmente el botón de tema
function actualizarIcono(isDark) {
    const icono = document.querySelector('.global-tools button i'); // HTML/JS: Busca el icono interno
    if (icono) { // JS: Si lo encuentra
        icono.className = isDark ? 'fas fa-sun' : 'fas fa-moon'; // CSS: Cambia la clase de FontAwesome
    }
}

// Función para abrir tu GitHub sin errores de sintaxis en el HTML
window.irAlRepo = function () {
    window.open('https://github.com', '_blank');
};

// JS: Función para llevar texto al portapapeles del sistema
function copiarComando(btn) {
    // ✅ ANTES: btn.innerText.includes("Copiado")  — el texto estaba fijo
    // ✅ AHORA: compara con CONFIG_BOTONES.copiar.textoExito del config.js
    if (btn.innerText.includes(CONFIG_BOTONES.copiar.textoExito)) return;

    // JS: Busca el elemento de texto que está justo arriba del botón
    let elementoCodigo = btn.previousElementSibling;

    // JS: Si no está al lado, lo busca dentro del mismo contenedor
    if (!elementoCodigo || (elementoCodigo.tagName !== 'CODE' && elementoCodigo.tagName !== 'PRE' && !elementoCodigo.classList.contains('caja-negra'))) {
        elementoCodigo = btn.parentElement.querySelector('code, pre, .caja-negra');
    }

    // JS: Como último recurso, busca en toda la tarjeta
    if (!elementoCodigo) {
        const tarjeta = btn.closest('.tarjeta');
        if (tarjeta) elementoCodigo = tarjeta.querySelector('code, pre, .caja-negra');
    }

    if (!elementoCodigo) return; // JS: Sale de la función si no hay nada que copiar

    const textoACopiar = elementoCodigo.innerText; // JS: Obtiene el texto técnico

    // JS: Envía el texto al portapapeles de Windows/Celular
    navigator.clipboard.writeText(textoACopiar).then(() => {
        const contenidoOriginal = btn.innerHTML; // JS: Guarda cómo se veía el botón antes
        const colorOriginal = btn.style.background; // JS: Guarda el color de fondo

        // ✅ ANTES: texto, ícono y color de éxito estaban fijos aquí
        // ✅ AHORA: vienen de CONFIG_BOTONES.copiar en config.js
        btn.innerHTML = `<i class="${CONFIG_BOTONES.copiar.iconoExito}"></i> ${CONFIG_BOTONES.copiar.textoExito}`;
        btn.style.background = CONFIG_BOTONES.copiar.colorExito;
        btn.classList.add('copiado-exito'); // CSS: Aplica posible animación extra

        // ✅ La duración también viene del config
        setTimeout(() => {
            btn.innerHTML = contenidoOriginal;
            btn.style.background = colorOriginal;
            btn.classList.remove('copiado-exito');
        }, CONFIG_BOTONES.copiar.duracionMs);
    });
}

// JS: Función para ensanchar el modal y mejorar el texto
function toggleLectura() {
    const modal = document.getElementById('modal-tutorial'); // HTML/JS: Selecciona el modal
    modal.classList.toggle('modo-lectura'); // CSS/JS: Activa/desactiva el estilo de lectura

    const icono = document.querySelector('.btn-lectura i'); // JS: Busca el icono del botón
    if (modal.classList.contains('modo-lectura')) { // JS: Si está activo
        // ✅ Icono activo viene del config
        icono.className = CONFIG_BOTONES.modal.leer.iconoActivo;
    } else {
        // ✅ Icono normal viene del config
        icono.className = CONFIG_BOTONES.modal.leer.icono;
    }
}

// =====================================================
// 7. BUSCADOR Y FILTROS AVANZADO
// =====================================================
if (buscador) { // JS: Si el input de búsqueda existe
    buscador.addEventListener('input', () => { // JS: Detecta cada vez que el usuario teclea
        const texto = buscador.value.toLowerCase().trim(); // JS: Limpia el texto buscado

        if (texto === "") { // JS: Si el buscador está vacío
            // Al limpiar la búsqueda, recargamos la vista actual
            filtrarPorCategoria(categoriaActual);
            return;
        }

        // El buscador trabaja sobre los datos que ya están en caché
        // Si nunca abriste "Todas", buscamos solo en lo que se cargó
        const todasEnCache = Object.values(cacheNotas).flat();
        const filtradas = todasEnCache.filter(n => { // JS: Crea un nuevo grupo con las que coinciden
            // JS: Truco para quitar las etiquetas HTML y buscar solo en el texto
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = n.contenidoTutorialHtml || "";
            const textoLimpioTutorial = tempDiv.textContent.toLowerCase() || "";

            // ✅ ANTES: los campos de búsqueda estaban hardcodeados aquí
            // ✅ AHORA: CONFIG_FILTROS.buscarEn del config.js controla qué se busca
            return (
                (CONFIG_FILTROS.buscarEn.titulo       && n.titulo.toLowerCase().includes(texto))      ||
                (CONFIG_FILTROS.buscarEn.categoria    && n.categoria.toLowerCase().includes(texto))   ||
                (CONFIG_FILTROS.buscarEn.descripcion  && n.descripcion.toLowerCase().includes(texto)) ||
                (CONFIG_FILTROS.buscarEn.comando      && n.comando.toLowerCase().includes(texto))     ||
                (CONFIG_FILTROS.buscarEn.contenidoTutorial && textoLimpioTutorial.includes(texto))
            );
        });

        mostrarNotas(filtradas); // JS: Dibuja solo los resultados de la búsqueda

        if (filtradas.length === 0) { // JS: Si no hay ninguna coincidencia
            // ✅ ANTES: texto fijo  "No se encontraron comandos o guías con..."
            // ✅ AHORA: viene de CONFIG_MENSAJES.sinResultados del config.js
            listaRecursos.innerHTML = `<p class="no-results">${CONFIG_MENSAJES.sinResultados(texto)}</p>`;
        }
    });
}

// JS: Función async — ahora carga los datos antes de dibujar
// "async" permite usar "await" dentro: espera la descarga sin congelar la página
async function filtrarPorCategoria(cat, esRefresco = false) {
    categoriaActual = cat; // JS: Guarda la pestaña elegida en la memoria

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const botonActivo = document.querySelector(`button[onclick="filtrarPorCategoria('${cat}')"]`);
    if (botonActivo) botonActivo.classList.add('active');

    // JS: LAZY LOADING — carga los datos según qué pestaña eligió el usuario
    let datosCategoria;
    if (cat === 'todas') {
        // Pestaña "Todas": carga las 14 categorías en paralelo
        // Solo la primera vez es lenta — después todo viene de caché
        datosCategoria = await cargarTodo();
        misNotas = datosCategoria; // Actualiza la variable global con todo
    } else if (cat === 'favoritas') {
        // Favoritos: necesitamos todos los datos para filtrar por título
        const todos = await cargarTodo();
        misNotas = todos;
        datosCategoria = todos.filter(n => misFavoritos.includes(n.titulo));
    } else {
        // Categoría específica: solo descarga ESE archivo (~10-37KB en vez de 271KB)
        datosCategoria = await cargarCategoria(cat);
        // Actualiza misNotas con solo esta categoría (para el buscador y el modal)
        misNotas = datosCategoria;
    }

    mostrarNotas(datosCategoria, esRefresco); // JS: Dibuja las notas

    // JS: Solo mueve la pantalla si NO es un refresco de favoritos
    if (!esRefresco) {
        const barra = document.getElementById('tabs-categorias');
        if (barra && barra.getBoundingClientRect().top <= 1) {
            const contenedor = document.getElementById('lista-recursos');
            window.scrollTo({
                top: contenedor.offsetTop - barra.offsetHeight,
                behavior: 'smooth'
            });
        }
    }
}

// =====================================================
// 8. MENÚ DINÁMICO DE CATEGORÍAS
// Lee CONFIG_CATEGORIAS y construye las pestañas solo.
// Nunca más tocar el index.html para agregar o quitar tabs.
// =====================================================
function generarMenuCategorias() {
    const nav = document.getElementById('tabs-categorias');
    if (!nav) return;

    // JS: Vaciamos el nav del HTML — ahora el config manda
    nav.innerHTML = '';

    CONFIG_CATEGORIAS.forEach(cat => {
        const btn = document.createElement('button');

        // CSS: clase base 'tab' + clase de color por categoría
        btn.className = cat.clase ? `tab ${cat.clase}` : 'tab';

        // JS: id especial solo para la pestaña "todas" (la activa por defecto)
        if (cat.id === 'todas') btn.id = 'tab-todas';

        // JS: Al hacer clic llama filtrarPorCategoria con el id de esta categoría
        btn.setAttribute('onclick', `filtrarPorCategoria('${cat.id}')`);

        // HTML: ícono + texto de etiqueta
        btn.innerHTML = `<i class="${cat.icono}"></i> ${cat.etiqueta}`;

        nav.appendChild(btn);
    });

    // JS: Marcamos "Todas" como activa al inicio
    const tabTodas = document.getElementById('tab-todas');
    if (tabTodas) tabTodas.classList.add('active');
}

// =====================================================
// 9. INICIO
// Se ejecuta al cargar la página
// =====================================================
// JS: Configura el navegador para no recordar la posición de scroll anterior
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// JS: Primero generamos el menú desde config.js
generarMenuCategorias();

// JS: Primera carga — carga la pestaña "Todas" al arrancar
// Como filtrarPorCategoria es async, usamos .then() para no bloquear
// el resto del código mientras llegan los datos
filtrarPorCategoria('todas').then(() => {
    // Una vez que cargó todo, actualizamos los contadores del menú
    actualizarContadoresTabs();
});

// JS: Se asegura de que la página empiece en la parte superior
window.scrollTo(0, 0);

/* =====================================================
   FONDO ANIMADO "MATRIX CODE"
   ===================================================== */
function iniciarFondoMatrix() {
    const canvas = document.getElementById('matrix-bg'); // HTML/JS: Selecciona el lienzo de dibujo
    const ctx = canvas.getContext('2d'); // JS: Activa el modo de dibujo en 2 dimensiones

    // HTML/JS: Ajusta el ancho y alto al tamaño total de la ventana
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ✅ ANTES: la cadena de caracteres estaba pegada aquí
    // ✅ AHORA: viene de CONFIG_MATRIX.caracteres en config.js
    const listaCaracteres = CONFIG_MATRIX.caracteres.split('');

    // ✅ ANTES: tamanoFuente = 14  (número fijo)
    // ✅ AHORA: CONFIG_MATRIX.tamanoFuente en config.js
    const tamanoFuente = CONFIG_MATRIX.tamanoFuente;
    const columnas = canvas.width / tamanoFuente;

    const gotas = []; // JS: Arreglo para la posición de cada columna de letras
    for (let x = 0; x < columnas; x++) {
        gotas[x] = 1; // JS: Todas empiezan en la fila 1
    }

    function dibujarMatrix() { // JS: Función que crea el efecto de movimiento
        // ✅ ANTES: 'rgba(0, 0, 0, 0.05)'  fijo
        // ✅ AHORA: CONFIG_MATRIX.transparenciaRastro en config.js
        ctx.fillStyle = `rgba(0, 0, 0, ${CONFIG_MATRIX.transparenciaRastro})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ✅ ANTES: '#0ea5e9'  fijo
        // ✅ AHORA: CONFIG_MATRIX.colorLetras en config.js
        ctx.fillStyle = CONFIG_MATRIX.colorLetras;
        ctx.font = tamanoFuente + 'px monospace'; // CSS: Define tipo y tamaño de letra

        for (let i = 0; i < gotas.length; i++) { // JS: Dibuja cada columna de la lluvia
            const texto = listaCaracteres[Math.floor(Math.random() * listaCaracteres.length)]; // JS: Elige letra al azar
            ctx.fillText(texto, i * tamanoFuente, gotas[i] * tamanoFuente); // JS: Dibuja la letra en sus coordenadas

            // JS: Si llega al fondo, tiene probabilidad de reiniciar arriba
            if (gotas[i] * tamanoFuente > canvas.height && Math.random() > 0.975) {
                gotas[i] = 0;
            }
            gotas[i]++; // JS: Baja la posición para el siguiente cuadro de animación
        }
    }

    // ✅ ANTES: setInterval(dibujarMatrix, 50)  fijo
    // ✅ AHORA: CONFIG_MATRIX.intervaloMs en config.js
    setInterval(dibujarMatrix, CONFIG_MATRIX.intervaloMs);

    window.addEventListener('resize', () => { // JS: Si el usuario cambia el tamaño de la ventana
        canvas.width = window.innerWidth; // JS: Reajusta el lienzo
        canvas.height = window.innerHeight;
    });
}

// JS: Arranca el fondo Matrix inmediatamente
iniciarFondoMatrix();

/* =====================================================
   LÓGICA DEL BOTÓN VOLVER ARRIBA
   ===================================================== */
const btnSubir = document.getElementById("btn-subir"); // HTML/JS: Selecciona el botón flotante

window.onscroll = function () { // JS: Escucha constantemente el scroll del usuario
    mostrarUocultarBoton();
};

function mostrarUocultarBoton() {
    const btn = document.getElementById("btn-subir");
    const count = document.getElementById("contador-tarjetas");
    const tarjetas = document.querySelectorAll('.tarjeta'); // JS: Atrapa todas las tarjetas visibles

    let recorridas = 0; // JS: Contador de tarjetas que ya pasamos
    tarjetas.forEach(t => {
        const posicion = t.getBoundingClientRect(); // JS: Mira dónde está la tarjeta en la pantalla
        // ✅ ANTES: posicion.top < 200  fijo
        // ✅ AHORA: CONFIG_SCROLL.pixelesTarjetaPasada en config.js
        if (posicion.top < CONFIG_SCROLL.pixelesTarjetaPasada) {
            recorridas++;
        }
    });

    const total = tarjetas.length; // JS: Número total de tarjetas en pantalla
    if (count) {
        // ✅ ANTES: `${recorridas} de ${total}`  fijo
        // ✅ AHORA: CONFIG_MENSAJES.contadorScroll en config.js
        count.innerText = CONFIG_MENSAJES.contadorScroll(recorridas, total);
    }

    // ✅ ANTES: scrollTop > 500  fijo
    // ✅ AHORA: CONFIG_SCROLL.pixelesParaMostrarBoton en config.js
    if (document.documentElement.scrollTop > CONFIG_SCROLL.pixelesParaMostrarBoton ||
        document.body.scrollTop > CONFIG_SCROLL.pixelesParaMostrarBoton) {
        btn.style.display = "block"; // CSS: Muestra el botón
        count.style.display = "block"; // CSS: Muestra el contador
    } else {
        btn.style.display = "none"; // CSS: Los oculta si estamos arriba
        count.style.display = "none";
    }
}

// JS: Detecta el clic en el botón de subir
btnSubir.addEventListener('click', () => {
    window.scrollTo({ // JS: Regresa al inicio de la página con suavidad
        top: 0,
        behavior: 'smooth'
    });
});

// JS: "Puente" final para conectar el HTML con las funciones del módulo

// JS: Conecta el botón con la función detallada de arriba (la que tiene alertas de error)
window.iniciarSesion = iniciarSesion;

// JS: Ejecutar una vez al cargar para que los números aparezcan de inmediato
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadoresTabs();

    const btnCerrarAcceso = document.getElementById('btn-cerrar-acceso');
    if (btnCerrarAcceso && localStorage.getItem('comandos_user')) {
        btnCerrarAcceso.style.display = 'flex';
    }
});

// ── CERRAR SESIÓN DEL SISTEMA DE ACCESO POR CORREO ───────────
function cerrarAcceso() {
    const modal = document.getElementById('modal-cerrar-acceso');
    if (modal) modal.style.display = 'flex';
}
function cancelarCerrarAcceso() {
    const modal = document.getElementById('modal-cerrar-acceso');
    if (modal) modal.style.display = 'none';
}
function confirmarCerrarAcceso() {
    localStorage.removeItem('comandos_user');
    window.location.href = 'acceso-comandos.html';
}
window.cerrarAcceso = cerrarAcceso;
window.cancelarCerrarAcceso = cancelarCerrarAcceso;
window.confirmarCerrarAcceso = confirmarCerrarAcceso;

// JS: El resto de conexiones para tus botones
window.toggleFavorito = toggleFavorito;
window.filtrarPorCategoria = filtrarPorCategoria;
window.abrirTutorial = abrirTutorial;
window.cerrarTutorial = cerrarTutorial;
window.toggleDarkMode = toggleDarkMode;
window.copiarComando = copiarComando;
window.toggleLectura = toggleLectura;
// JS: Añade esto al final de tu lista de puentes
window.cerrarSesion = cerrarSesion;
