// ============================================================
// CONFIG.JS — PANEL DE CONTROL CENTRAL
// ============================================================
// ¿QUÉ ES ESTE ARCHIVO?
//   Es el "mando a distancia" de todo tu portal. Cualquier
//   cambio que hagas aquí se aplica automáticamente a TODAS
//   las tarjetas y al modal sin tocar data.js ni javascript.js
//
// ¿CÓMO FUNCIONA?
//   Tu javascript.js lee estas variables para construir cada
//   tarjeta. Si cambias un valor aquí, la próxima vez que se
//   cargue la página, todas las tarjetas usarán ese nuevo valor.
//
// CÓMO USARLO:
//   1. Abre este archivo
//   2. Cambia el valor que quieras (ej: el color, el texto del botón)
//   3. Guarda el archivo
//   4. Recarga tu portal en el navegador → ¡Listo! Todo cambiado.
// ============================================================


// ============================================================
// SECCIÓN 1: TEXTOS DE LOS BOTONES
// ¿Qué dicen los botones en cada tarjeta?
// Cambia el texto aquí y se actualiza en todas las tarjetas.
// ============================================================
export const CONFIG_BOTONES = {

    // El botón principal para copiar el comando
    copiar: {
        texto: "Copiar",                    // Texto normal del botón
        icono: "fas fa-copy",               // Icono de FontAwesome (busca en fontawesome.com)
        textoExito: "¡Copiado!",            // Texto cuando se copió con éxito
        iconoExito: "fas fa-check",         // Icono de éxito
        colorExito: "#2ecc71",              // Color verde cuando se copia (en HEX)
        duracionMs: 1500,                   // Cuántos milisegundos se muestra "¡Copiado!" antes de volver
    },

    // El botón que abre la guía/tutorial
    guia: {
        texto: "Guía",                      // Texto del botón
        icono: "fas fa-book",               // Icono del botón
    },

    // El botón de favoritos (el pin)
    favorito: {
        icono: "fas fa-thumbtack",          // Icono del pin
        colorActivo: "#ff9f43",             // Color naranja cuando está marcado como favorito
        rotacionActiva: "rotate(45deg)",    // Cuánto gira el pin al marcarlo
    },

    // Botones del modal (ventana del tutorial)
    modal: {
        leer: {
            texto: "Leer",
            icono: "fas fa-book-open",
            iconoActivo: "fas fa-book-reader",
        },
        pdf: {
            texto: "Guía PDF",
            icono: "fas fa-file-pdf",
        },
        cerrar: {
            icono: "fas fa-times",          // Icono de la "X" para cerrar
        }
    }
};


// ============================================================
// SECCIÓN 2: CONFIGURACIÓN DE LAS TARJETAS
// Controla la estructura y comportamiento de cada tarjeta.
// ============================================================
export const CONFIG_TARJETAS = {

    // ¿Mostrar la imagen de la tarjeta?
    // true  = sí se muestra  |  false = no se muestra en ninguna tarjeta
    mostrarImagen: true,

    // ¿Mostrar la etiqueta de categoría? (ej: "CMD", "LINUX")
    mostrarEtiqueta: true,

    // ¿La etiqueta va en MAYÚSCULAS? (ej: "cmd" → "CMD")
    etiquetaMayusculas: true,

    // ¿Mostrar el bloque de código (el comando) en la tarjeta?
    mostrarComando: true,

    // ¿Mostrar la descripción debajo del título?
    mostrarDescripcion: true,

    // ¿Mostrar los botones de links externos (YouTube, etc.)?
    mostrarLinks: true,

    // ¿Cuántos caracteres máximo muestra la descripción antes de cortarse?
    // Aumenta este número si quieres ver más texto en las tarjetas.
    // La expansión al hacer clic la sigue controlando javascript.js.
    // (Este valor es solo visual, no corta el contenido del tutorial)
    descripcionMaxLineas: 3,              // Líneas visibles antes de recorte


    // --- ANIMACIONES ---
    // ¿Activar la animación de entrada cuando aparecen las tarjetas?
    animacionEntrada: true,

    // ¿Cuánto tarda la animación de salida de favoritos? (en milisegundos)
    animacionSalidaMs: 400,

    // ¿Con qué efecto desaparecen las tarjetas al quitarlas de favoritos?
    // Opciones: "scale(0.9) translateY(10px)"  |  "scale(0.8)"  |  "translateY(20px)"
    efectoSalida: "scale(0.9) translateY(10px)",
};


// ============================================================
// SECCIÓN 3: ÍCONOS DE PLATAFORMAS DE LINKS
// ¿Qué ícono usar según la plataforma del enlace?
// Si agregas una tarjeta con un link de "tiktok", ponlo aquí
// y tendrá su propio ícono automáticamente.
// ============================================================
export const CONFIG_ICONOS_PLATAFORMAS = {
    youtube:   "fab fa-youtube",
    facebook:  "fab fa-facebook",
    google:    "fab fa-google",
    github:    "fab fa-github",
    twitter:   "fab fa-twitter",
    instagram: "fab fa-instagram",
    tiktok:    "fab fa-tiktok",
    linkedin:  "fab fa-linkedin",
    default:   "fas fa-link",             // Ícono que se usa si la plataforma no está en la lista
};


// ============================================================
// SECCIÓN 4: MENSAJES DEL SISTEMA
// Textos que aparecen en situaciones especiales.
// Modifícalos sin tocar el código de javascript.js.
// ============================================================
export const CONFIG_MENSAJES = {

    // Cuando el buscador no encuentra nada
    sinResultados: (texto) => `No se encontraron comandos o guías con "${texto}"`,

    // Cuando alguien intenta guardar un favorito sin haber iniciado sesión
    favoritoSinSesion: "Inicia sesión para guardar favoritos",

    // El texto del tooltip (texto flotante) del botón para ir al repositorio
    tooltipRepo: "Repositorio",

    // Mensaje del botón de ayuda
    mensajeAyuda: "Bienvenido a tu Guía de Comandos",

    // Formato del contador flotante de tarjetas (el que dice "X Recursos")
    // {n} se reemplaza automáticamente por el número real
    contadorRecursos: (n) => `${n} Recursos`,

    // Formato del contador de posición scroll ("X de Y")
    contadorScroll: (actual, total) => `${actual} de ${total}`,
};


// ============================================================
// SECCIÓN 5: CONFIGURACIÓN DEL MODAL (ventana del tutorial)
// ============================================================
export const CONFIG_MODAL = {

    // ¿Cerrar el modal si el usuario hace clic fuera de la ventana?
    cerrarAlClickFuera: true,

    // ¿Bloquear el scroll de la página de fondo mientras el modal está abierto?
    bloquearScrollFondo: true,

    // Milisegundos de espera antes de medir los botones internos del modal
    // (No cambies esto a menos que tengas problemas de parpadeo)
    retardoMedicionMs: 50,

    // Tamaño del título dentro del modal (en rem)
    // 2.5rem es el valor actual. Aumenta para títulos más grandes.
    tamanoTitulo: "2.5rem",
};


// ============================================================
// SECCIÓN 6: FILTROS Y BÚSQUEDA
// ============================================================
export const CONFIG_FILTROS = {

    // ¿En qué campos buscar cuando el usuario escribe en el buscador?
    // true = sí busca en ese campo | false = lo ignora
    buscarEn: {
        titulo:       true,
        categoria:    true,
        descripcion:  true,
        comando:      true,
        contenidoTutorial: true,   // Busca también dentro del texto completo de los tutoriales
    },

    // Tu UID de Firebase (el que te hace dueño del portal)
    // Esto protege las tarjetas marcadas con  esPrivada: true
    // Solo tú las verás cuando estés logueado con tu cuenta de Google.
    // ¡NO compartas este valor con nadie!
    uidAdmin: "QK9Ca6yFfphhOklgx483eBT8u8Z2",
};


// ============================================================
// SECCIÓN 7: CONFIGURACIÓN DEL SCROLL Y BOTÓN "SUBIR"
// ============================================================
export const CONFIG_SCROLL = {

    // ¿A cuántos píxeles de scroll se muestra el botón de "volver arriba"?
    pixelesParaMostrarBoton: 500,

    // ¿A cuántos píxeles del tope de pantalla se cuenta una tarjeta como "pasada"?
    pixelesTarjetaPasada: 200,
};


// ============================================================
// SECCIÓN 8: CONFIGURACIÓN DEL FONDO MATRIX
// ============================================================
export const CONFIG_MATRIX = {

    // Tamaño de cada letra del efecto Matrix (en píxeles)
    tamanoFuente: 14,

    // Color de las letras Matrix (en HEX o rgba)
    // El valor actual es azul cian, igual que --secondary en style.css
    colorLetras: "#0ea5e9",

    // Transparencia del rastro negro que deja caer las letras
    // Un número más bajo = rastro más largo (letras "brillan" más)
    // Un número más alto = letras desaparecen rápido
    // Rango recomendado: 0.03 a 0.15
    transparenciaRastro: 0.05,

    // Velocidad del Matrix: milisegundos entre cada fotograma
    // Más bajo = más rápido  |  Más alto = más lento
    // Valor actual: 50ms ≈ 20 fotogramas por segundo
    intervaloMs: 50,

    // Opacidad del canvas Matrix sobre el fondo (0 = invisible, 1 = sólido)
    // Se controla desde style.css con  opacity: 0.22
    // (Este valor aquí es solo para documentación, el CSS tiene la última palabra)
    opacidadCSS: 0.22,

    // Caracteres y palabras que caen en la lluvia Matrix
    // Puedes agregar tus propios comandos favoritos aquí
    caracteres: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~`var let const function if else for while return class import export from async await div span body html css js php python java react node",
};


// ============================================================
// SECCIÓN 9: CATEGORÍAS DEL MENÚ
// ============================================================
// ¿QUÉ HACE ESTO?
//   Define TODAS las pestañas del menú de navegación.
//   Si agregas una entrada aquí, la pestaña aparece sola en el portal.
//   Si la quitas, desaparece del menú sin tocar el index.html.
//
// CAMPOS de cada categoría:
//   id       → el valor que tienen las tarjetas en data.js (categoria: "cmd")
//   etiqueta → el texto visible en la pestaña
//   icono    → clase de FontAwesome (busca en fontawesome.com/icons)
//   clase    → clase CSS para el color del tab (debe existir en style.css)
//
// CÓMO AGREGAR UNA CATEGORÍA NUEVA:
//   1. Añade un objeto aquí con su id, etiqueta, icono y clase
//   2. En data.js, pon ese id en las tarjetas: categoria: "nueva"
//   3. Recarga el portal → la pestaña aparece automáticamente
//
// ¡IMPORTANTE!
//   La categoría "todas" y "favoritas" son especiales y siempre
//   se generan automáticamente — no las quites de aquí.
// ============================================================
export const CONFIG_CATEGORIAS = [

    // ── Pestaña especial: todas las tarjetas ──────────────────
    {
        id:       "todas",
        etiqueta: "Todas",
        icono:    "fas fa-layer-group",
        clase:    ""           // sin clase especial, usa el estilo base
    },

    // ── Comandos de terminal ──────────────────────────────────
    {
        id:       "cmd",
        etiqueta: "CMD",
        icono:    "fas fa-terminal",
        clase:    "cmd"
    },

    // ── Atajos de teclado Win+R ───────────────────────────────
    {
        id:       "atajos",
        etiqueta: "Atajos Win+R",
        icono:    "fas fa-bolt",
        clase:    "atajos"
    },

    // ── Comandos básicos ──────────────────────────────────────
    {
        id:       "basicos",
        etiqueta: "Básicos",
        icono:    "fas fa-desktop",
        clase:    "basicos"
    },

    // ── Programas para instalar ───────────────────────────────
    {
        id:       "programas",
        etiqueta: "Programas",
        icono:    "fas fa-download",
        clase:    "programas"
    },

    // ── Aplicaciones de Windows ───────────────────────────────
    {
        id:       "aplicaciones",
        etiqueta: "Aplicaciones",
        icono:    "fas fa-th-large",
        clase:    "aplicaciones"
    },

    // ── Herramientas online ───────────────────────────────────
    {
        id:       "onlinea",
        etiqueta: "Onlinea",
        icono:    "fas fa-globe",
        clase:    "onlinea"
    },

    // ── Windows específico ────────────────────────────────────
    {
        id:       "windows",
        etiqueta: "Windows",
        icono:    "fab fa-windows",
        clase:    "windows"
    },

    // ── Linux ─────────────────────────────────────────────────
    {
        id:       "linux",
        etiqueta: "Linux",
        icono:    "fab fa-linux",
        clase:    "linux"
    },

    // ── Tutoriales paso a paso ────────────────────────────────
    {
        id:       "tutoriales",
        etiqueta: "Tutoriales",
        icono:    "fas fa-book-open",
        clase:    "tutoriales"
    },

    // ── Programación ─────────────────────────────────────────
    {
        id:       "programacion",
        etiqueta: "Programación",
        icono:    "fas fa-code",
        clase:    "programacion"
    },

    // ── Sistemas operativos ───────────────────────────────────
    {
        id:       "sistemas",
        etiqueta: "Sistemas",
        icono:    "fas fa-code",
        clase:    "sistemas"
    },

    // ── Excel ─────────────────────────────────────────────────
    {
        id:       "excel",
        etiqueta: "Excel",
        icono:    "fa-regular fa-file-excel",
        clase:    "excel"
    },

    // ── Investigación (privada — solo tú la ves) ──────────────
    {
        id:       "investigacion",
        etiqueta: "investigacion",
        icono:    "fas fa-fingerprint",
        clase:    "investigacion"
    },

    // ── Utilidades varias ─────────────────────────────────────
    {
        id:       "utilidades",
        etiqueta: "Utilidades",
        icono:    "fas fa-tools",
        clase:    "utilidades"
    },

    // ── Enlaces caídos (se conservan por si vuelven) ───────────
    {
        id:       "caducados",
        etiqueta: "Caducados",
        icono:    "fas fa-box-archive",
        clase:    "caducados"
    },

    // ── Favoritos ─────────────────────────────────────────────
    {
        id:       "favoritas",
        etiqueta: "Favoritos",
        icono:    "fas fa-thumbtack",
        clase:    "favoritas"
    },

];


// ============================================================
// FIN DE CONFIG.JS
// ============================================================
// RESUMEN DE LO QUE CONTROLA ESTE ARCHIVO:
//
//  CONFIG_BOTONES              → Textos e íconos de todos los botones
//  CONFIG_TARJETAS             → Estructura y comportamiento de tarjetas
//  CONFIG_ICONOS_PLATAFORMAS   → Íconos por tipo de link (YouTube, GitHub...)
//  CONFIG_MENSAJES             → Textos del sistema (errores, contadores...)
//  CONFIG_MODAL                → Comportamiento de la ventana del tutorial
//  CONFIG_FILTROS              → Buscador y protección de tarjetas privadas
//  CONFIG_SCROLL               → Botón de volver arriba
//  CONFIG_MATRIX               → Efecto visual del fondo animado
//  CONFIG_CATEGORIAS           → Pestañas del menú de navegación
//
// ============================================================
