// ============================================================
// SW.JS — SERVICE WORKER
// ============================================================
// ¿QUÉ ES ESTO?
//   Un Service Worker es un script que el navegador instala
//   "entre" tu portal y el internet. Intercepta cada petición
//   de archivo y decide: ¿lo tengo guardado? → lo sirvo yo.
//   ¿no lo tengo? → lo pido al servidor y luego lo guardo.
//
// RESULTADO:
//   La primera vez que abres el portal → todo se descarga normal.
//   Las siguientes veces → el portal abre INSTANTÁNEO, sin internet.
//
// RELACIÓN CON LAZY LOADING:
//   javascript.js descarga solo la categoría que abres.
//   El Service Worker guarda cada archivo que se descargó.
//   La próxima vez que abras esa categoría → ya está guardada.
//
// CÓMO FUNCIONA EN 3 PASOS:
//   1. INSTALL   → guarda los archivos esenciales al instalarse
//   2. ACTIVATE  → limpia cachés viejos si actualizaste el portal
//   3. FETCH     → intercepta peticiones y responde desde caché
// ============================================================


// ── VERSIÓN DEL CACHÉ ────────────────────────────────────────
// IMPORTANTE: Cambia este número cada vez que actualices tu portal.
// Ejemplo: si añades una tarjeta nueva, cambia v1 → v2.
// El Service Worker detectará el cambio y actualizará los archivos.
const VERSION_CACHE = 'miblock-v1';

// ── ARCHIVOS ESENCIALES ──────────────────────────────────────
// Estos se guardan la primera vez que el Service Worker se instala.
// Son los archivos mínimos para que el portal abra aunque no haya internet.
// Los archivos de categorías (data.cmd.js, etc.) se guardan automáticamente
// cuando el usuario los visita por primera vez.
const ARCHIVOS_ESENCIALES = [
    '/',                          // La página principal
    '/index.html',
    '/css/style.css',
    '/css/optimizacion.css',
    '/js/javascript.js',
    '/js/config.js',
    '/manifest.json',
    // FontAwesome (íconos) — se guarda para uso offline
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
];


// ── PASO 1: INSTALL ──────────────────────────────────────────
// Se ejecuta una sola vez cuando el Service Worker se instala.
// Abre el caché y guarda los archivos esenciales.
self.addEventListener('install', evento => {
    console.log('[SW] Instalando versión:', VERSION_CACHE);

    evento.waitUntil(
        caches.open(VERSION_CACHE)
            .then(cache => {
                console.log('[SW] Guardando archivos esenciales...');
                return cache.addAll(ARCHIVOS_ESENCIALES);
            })
            .then(() => {
                // Activa inmediatamente sin esperar a que cierres la pestaña
                return self.skipWaiting();
            })
    );
});


// ── PASO 2: ACTIVATE ─────────────────────────────────────────
// Se ejecuta cuando el nuevo SW reemplaza al anterior.
// Borra los cachés viejos para que no ocupen espacio.
self.addEventListener('activate', evento => {
    console.log('[SW] Activando versión:', VERSION_CACHE);

    evento.waitUntil(
        caches.keys()
            .then(nombresCaches => {
                return Promise.all(
                    nombresCaches
                        // Filtra los cachés que NO son la versión actual
                        .filter(nombre => nombre !== VERSION_CACHE)
                        .map(nombreViejo => {
                            console.log('[SW] Eliminando caché viejo:', nombreViejo);
                            return caches.delete(nombreViejo);
                        })
                );
            })
            .then(() => {
                // Toma el control de todas las pestañas abiertas de inmediato
                return self.clients.claim();
            })
    );
});


// ── PASO 3: FETCH ────────────────────────────────────────────
// Se ejecuta cada vez que tu portal pide cualquier archivo.
// Estrategia: "Cache First, Network Fallback"
//
//   1. ¿Está en caché? → Responder desde caché (instantáneo, sin internet)
//   2. ¿No está? → Pedirlo al servidor, guardarlo, y luego entregarlo
//   3. ¿Sin internet y no está en caché? → Mostrar error controlado
//
// Esta estrategia es perfecta para un portal de comandos porque:
//   - El contenido no cambia frecuentemente
//   - Lo más importante es que cargue rápido
//   - Para actualizar, solo cambias VERSION_CACHE arriba
self.addEventListener('fetch', evento => {
    // Solo interceptamos peticiones GET (no POST, no Firebase, etc.)
    if (evento.request.method !== 'GET') return;

    // No interceptamos las peticiones a Firebase (auth, Firestore)
    // esas siempre necesitan internet para funcionar
    const url = evento.request.url;
    if (url.includes('firebaseapp.com') ||
        url.includes('googleapis.com/identitytoolkit') ||
        url.includes('firestore.googleapis.com') ||
        url.includes('gstatic.com/firebasejs')) {
        return; // Dejar pasar a Firebase sin interceptar
    }

    evento.respondWith(
        caches.match(evento.request)
            .then(respuestaEnCache => {

                // ── CASO A: Está en caché ─────────────────────
                if (respuestaEnCache) {
                    return respuestaEnCache; // Respuesta instantánea
                }

                // ── CASO B: No está, pedirla al servidor ──────
                return fetch(evento.request)
                    .then(respuestaRed => {
                        // Verificar que la respuesta es válida antes de guardarla
                        if (!respuestaRed || respuestaRed.status !== 200) {
                            return respuestaRed;
                        }

                        // Clonar la respuesta: una copia para el caché,
                        // otra para el navegador (no se puede usar dos veces)
                        const copiaParaCache = respuestaRed.clone();

                        caches.open(VERSION_CACHE)
                            .then(cache => {
                                cache.put(evento.request, copiaParaCache);
                                // ↑ Esto guarda automáticamente los archivos
                                // de categoría (data.cmd.js, etc.) la primera
                                // vez que el usuario abre esa pestaña
                            });

                        return respuestaRed;
                    })
                    .catch(() => {
                        // ── CASO C: Sin internet y sin caché ──
                        // Solo puede pasar con archivos que nunca se visitaron
                        console.warn('[SW] Sin conexión y sin caché para:', url);
                        // Si es una página HTML, podríamos devolver un offline.html
                        // Por ahora simplemente deja que el navegador maneje el error
                    });
            })
    );
});


// ── CÓMO ACTUALIZAR TU PORTAL ────────────────────────────────
// Cuando añadas nuevas tarjetas o cambies algo en el código:
//
//   OPCIÓN 1 — Rápida: cambia VERSION_CACHE = 'miblock-v2'
//     El SW detecta la nueva versión, borra el caché viejo
//     y descarga todo fresco la próxima vez que abras el portal.
//
//   OPCIÓN 2 — Desde el navegador:
//     Chrome → F12 → Application → Service Workers → "Update"
//     Esto fuerza la actualización sin cambiar el código.
//
//   OPCIÓN 3 — Para usuarios que ya tienen el portal instalado:
//     Cuando cambies VERSION_CACHE, la próxima vez que
//     tengan internet y abran el portal, el SW se actualizará
//     automáticamente en segundo plano.
// ============================================================
