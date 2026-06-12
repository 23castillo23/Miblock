// Datos de categoría: investigacion
// Generado automáticamente desde data.js
export const datos_investigacion = [
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Reconstrucción del Proyecto",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA
        imagen: "img/investigacion/googleCloud.jpg",
        comando: "Full-Stack: Firebase + PWA",
        descripcion: "Guía técnica completa paso a paso: configuración de Google Cloud, estructura de archivos local, lógica de sincronización y despliegue en GitHub.",
        contenidoTutorialHtml: `
            <h3>🛠️ Fase 1: Configuración de la Nube (Firebase)</h3>
            <p>Para que tus favoritos sean persistentes y se guarden en cualquier equipo, necesitamos el motor de Google.</p>
            
            <div class="tutorial-pasos">
                <h4>1. Crear el Proyecto</h4>
                <p>Entra a <a href="https://console.firebase.google.com/" target="_blank" class="link-comando">Firebase Console</a>, crea el proyecto <code>comandosytutoriales</code> y desactiva Analytics para mayor rapidez.</p>

                <h4>2. Configurar Autenticación (Google Login)</h4>
                <ul>
                    <li>Ve a <strong>Compilación > Authentication</strong>.</li>
                    <li>En <strong>Sign-in method</strong>, habilita <strong>Google</strong> con tu correo de soporte.</li>
                    <li>En <strong>Configuración > Dominios autorizados</strong>, añade <code>localhost</code> y <code>23castillo23.github.io</code></li>
                </ul>

                <h4>3. Base de Datos y Seguridad (Firestore)</h4>
                <p>Crea la base de datos en <strong>Modo Producción</strong> (ubicación sugerida: <strong>northamerica-south1</strong>). En la pestaña <strong>Reglas</strong>, pega este escudo de seguridad:</p>
                <div class="contenedor-comando">
                    <code>rules_version = '2';<br>service cloud.firestore {<br>&nbsp;&nbsp;match /databases/{database}/documents {<br>&nbsp;&nbsp;&nbsp;&nbsp;match /usuarios/{userId} {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow read, write: if request.auth != null && request.auth.uid == userId;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Reglas</button>
                </div>
            </div>

            <h3>💻 Fase 2: Estructura de Archivos y Código Maestro</h3>
            <div class="tutorial-pasos warning">
                <h4>Estructura de Carpetas Local</h4>
                <pre style="font-size:0.85rem; color:var(--text-main);">
    📁 mi-proyecto/
    ├── 📄 index.html
    ├── 📄 manifest.json
    ├── 📄 sw.js
    ├── 📁 css/ ➔ 📄 style.css
    ├── 📁 js/  ➔ 📄 javascript.js
    └── 📁 img/ ➔ (Iconos y capturas)</pre>
            </div>

            <div class="tutorial-pasos">
                <h4>1. El HTML (Script como Módulo)</h4>
                <p>Indispensable para que las librerías de Firebase carguen correctamente:</p>
                <div class="contenedor-comando">
                    <code>&lt;script type="module" src="js/javascript.js" defer&gt;&lt;/script&gt;</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4 class="mt-20">2. El CSS (Engranaje Favorito)</h4>
                <p>Define el estilo del icono cuando la nota está guardada en la nube:</p>
                <div class="contenedor-comando">
                    <code>.btn-fav-card.active { color: #f39c12; transform: rotate(45deg); }</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4 class="mt-20">3. El JS (Vigilante y Puente)</h4>
                <p>Usa <code>onAuthStateChanged</code> para detectar la sesión y sincronizar los datos. Al ser un módulo, debes exportar las funciones a la ventana global:</p>
                <div class="contenedor-comando">
                    <code>window.toggleFavorito = toggleFavorito; window.filtrarPorCategoria = filtrarPorCategoria;</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>

            <h3>🚀 Fase 4: Despliegue y Mantenimiento</h3>
            <div class="tutorial-pasos">
                <h4>Publicar en GitHub</h4>
                <p>Sube tus archivos a un repositorio llamado <strong>comandosytutoriales</strong>. En <strong>Settings > Pages</strong>, activa la rama <strong>main</strong>.</p>

                <h4>Actualizar Caché (Service Worker)</h4>
                <p>Si haces cambios y no se ven, debes subir la versión en <strong>sw.js</strong></p>
                <div class="contenedor-comando">
                    <code>const CACHE_NAME = 'v5-cache'; // Sube el número y haz Ctrl+F5</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Firebase Console", url: "https://console.firebase.google.com/" },
            { texto: "GitHub Pages Settings", url: "https://github.com/settings/pages" },
            { texto: "Documentación Firebase Auth", url: "https://firebase.google.com/docs/auth/web/google-signin", plataforma: "google" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Acceso y Autenticación",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA 
        imagen: "img/investigacion/autenticacao.jpg",
        comando: "Firebase + Google Cloud Auth",
        descripcion: "Solución definitiva para errores de 'Referer Blocked', 'Invalid Action' y problemas de Login en local y GitHub.",
        contenidoTutorialHtml: `
            <h3>🔐 Configuración de Seguridad y Login</h3>
            <p>Esta guía resuelve los bloqueos de conexión cuando trabajas entre tu computadora local (VS Code) y el sitio publicado en GitHub.</p>
            
            <div class="tutorial-pasos">
                <h4>🛠️ Paso 1: Autorización en Firebase (El primer filtro)</h4>
                <p>Firebase debe reconocer que tu computadora es un sitio seguro para procesar inicios de sesión.</p>
                <ol>
                    <li>Entra a la <strong>Consola de Firebase</strong> y selecciona tu proyecto <code>comandosytutoriales</code>.</li>
                    <li>En el menú lateral izquierdo, haz clic en el icono del martillo <strong>Build (Compilación)</strong> y entra en <strong>Authentication</strong>.</li>
                    <li>En la parte superior, haz clic en la pestaña <strong>Settings (Configuración)</strong>.</li>
                    <li>En la columna izquierda de esa pestaña, selecciona <strong>Authorized domains (Dominios autorizados)</strong>.</li>
                    <li>Haz clic en el botón azul <strong>Add domain (Añadir dominio)</strong>.</li>
                    <li>Escribe <code>localhost</code> y dale a <strong>Add</strong>. Repite el proceso para añadir <code>127.0.0.1</code> y <code>23castillo23.github.io</code></li>
                </ol>
            </div>

            <div class="tutorial-pasos">
                <h4>🛠️ Paso 2: Restricción de API en Google Cloud (El candado externo)</h4>
                <p>Configura los permisos de tu API Key para que no sea rechazada por los navegadores.</p>
                <ol>
                    <li>Entra a <strong>Google Cloud Console</strong> en la sección de Credenciales.</li>
                    <li>Selecciona tu proyecto arriba a la izquierda y haz clic en el nombre de tu <strong>API Key</strong> (la que termina en ).<code>-Kc</code></li>
                    <li>Baja a <strong>Restricciones de aplicaciones</strong> y marca <strong>Sitios web</strong>.</li>
                    <li>En la sección <strong>Restricciones de sitios web</strong>, haz clic en <strong>AÑADIR</strong> y pega estos cuatro enlaces uno por uno (copia exactamente estos formatos sin el http):</li>
                </ol>
                
                <div class="contenedor-comando">
                    <code>127.0.0.1/*</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>localhost/*</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>23castillo23.github.io/*</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>comandosytutoriales.firebaseapp.com/*</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><strong>⚠️ OBLIGATORIO:</strong> Haz clic en el botón azul <strong>GUARDAR</strong> al final de la página o los cambios se perderán.</p>
            </div>

            <div class="tutorial-pasos warning">
                <h4>🛠️ Paso 3: Sincronización de Puertos (VS Code)</h4>
                <p>Si el login falla en local, mira la barra de direcciones de tu navegador al darle a <strong>Go Live</strong>.</p>
                <p>Si ves un número diferente a 5500 ej: <code>:5501</code> debes volver al <strong>Paso 2</strong> y añadir ese número exacto: <code>127.0.0.1:5501/*</code></p>
            </div>

            <div class="tutorial-pasos">
                <h4>🛠️ Paso 4: Limpieza de Service Worker (Caché)</h4>
                <p>Tu navegador puede estar leyendo permisos viejos guardados en el archivo. <code>sw.js</code></p>
                <ol>
                    <li>En tu web, presiona <strong>F12</strong> y ve a <strong>Application (Aplicación)</strong>.</li>
                    <li>En el menú izquierdo selecciona <strong>Storage (Almacenamiento)</strong>.</li>
                    <li>Haz clic en el botón azul <strong>Clear site data (Borrar todos los datos)</strong>.</li>
                    <li>Recarga la página con <strong>Ctrl + F5</strong>.</li>
                </ol>
            </div>

            <details class="acordeon-tutorial">
                <summary class="acordeon-header">
                    <i class="fas fa-microchip"></i> 🧪 LA PRUEBA DE ORO (DIAGNÓSTICO)
                </summary>
                <div class="tutorial-pasos warning">
                    <p>¿Sigue fallando? Haz esto para encontrar al culpable:</p>
                    <ul>
                        <li>Ve a <strong>Google Cloud</strong> > Tu Llave y cambia Restricciones a <strong>"Ninguna"</strong>.</li>
                        <li>Dale a <strong>GUARDAR</strong> y espera 1 minuto.</li>
                        <li>Si ahora funciona: El error está en el formato de los links del <strong>Paso 2</strong>.</li>
                        <li>Si sigue sin funcionar: El error está en el <strong>Paso 1</strong> (Dominios de Firebase).</li>
                    </ul>
                </div>
            </details>
        `,
        links: [
            { texto: "Consola de Firebase", url: "https://console.firebase.google.com/" },
            { texto: "Credenciales Google Cloud", url: "https://console.cloud.google.com/apis/credentials" },
            { texto: "Documentación Auth", url: "https://firebase.google.com/docs/auth/web/google-signin", plataforma: "google" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Escudo de Privacidad (UID)",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA 
        imagen: "img/investigacion/privacidad.jpg", // Asegúrate de tener una imagen técnica aquí
        comando: "JS: Filtro de Identidad (UID)",
        descripcion: "Protege tu información sensible. Aprende a crear tarjetas privadas que solo tú puedes ver al iniciar sesión mediante tu UID único de Firebase.",
        contenidoTutorialHtml: `
            <h3>🔐 Lógica de Protección de Datos</h3>
            <p>Este sistema permite que una tarjeta exista en tu código pero sea <strong>invisible</strong> para cualquier persona que no seas tú.</p>

            <div class="tutorial-pasos">
                <h4>🔍 Paso 1: Obtener tu UID Real</h4>
                <p>Tu UID es tu "huella digital" en Firebase. Sin ella, el sistema no sabrá quién eres tú.</p>
                <ol>
                    <li>Entra a tu <strong>Consola de Firebase</strong> > <strong>Authentication</strong>.</li>
                    <li>Busca tu correo en la lista de usuarios.</li>
                    <li>Copia el código largo que aparece en la columna <strong>User UID</strong>.</li>
                </ol>
            </div>

            <div class="tutorial-pasos">
                <h4>🛠️ Paso 2: Marcar Notas como Privadas</h4>
                <p>Para que el "Escudo" funcione, debes añadir una propiedad especial a la tarjeta en tu array de notas.</p>
                <div class="contenedor-comando">
                    <code>esPrivada: true,</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p class="mt-10"><strong>Ejemplo de estructura:</strong></p>
                <pre style="font-size:0.85rem; color:var(--text-main); background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">,
{
    categoria: "investigacion",
    titulo: "Mi Nota Secreta",
    esPrivada: true, 
    ...
    }</pre>
            </div>

            <div class="tutorial-pasos">
                <h4>🛠️ Paso 3: Activar el Filtro en el Motor</h4>
                <p>Debes modificar la función <code>mostrarNotas</code> para que verifique tu identidad antes de dibujar la tarjeta en pantalla.</p>
                <div class="contenedor-comando">
                    <code>
    if (nota.esPrivada && (!usuarioActual || usuarioActual.uid !== 'QK9Ca6yFfphhOklgx483eBT8u8Z2')) {<br>
    &nbsp;&nbsp;return; <br>
    }
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Filtro</button>
                </div>
                <p class="warning" class="mt-10">⚠️ <strong>Nota:</strong> Este código debe ir justo después de iniciar el <code>forEach</code> en la función <code>mostrarNotas</code></p>
            </div>

            <div class="tutorial-pasos">
                <h4>💡 ¿Por qué es seguro?</h4>
                <p>Al usar el <code>return</code> dentro del ciclo, el navegador ignora la nota privada por completo para los extraños. Para ellos, la tarjeta simplemente no existe en el DOM.</p>
            </div>
        `,
        links: [
            { texto: "Consola de Firebase", url: "https://console.firebase.google.com/" },
            { texto: "Documentación UID Firebase", url: "https://firebase.google.com/docs/auth/admin/manage-users", plataforma: "google" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Migración y Cambio de Administrador",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA
        imagen: "img/investigacion/migracion.jpg",
        comando: "Firebase Auth + Google Cloud Config",
        descripcion: "Pasos críticos para restaurar el acceso a tarjetas privadas y login tras cambiar el repositorio de GitHub o el correo del administrador.",
        contenidoTutorialHtml: `
            <h3>🔄 Sincronización de Nuevo Entorno</h3>
            <p>Al mover el proyecto a un nuevo repositorio (de <code>cyber911zona</code> a <code>23castillo23</code>) o cambiar de correo, el sistema de seguridad bloquea el acceso hasta que se actualicen las llaves.</p>

            <div class="tutorial-pasos">
                <h4>🛠️ Paso 1: Autorizar Nuevo Dominio (Firebase)</h4>
                <p>Firebase solo permite logins desde sitios autorizados. Debes agregar tu nueva dirección:</p>
                <ol>
                    <li>Ve a <strong>Consola Firebase > Authentication > Settings</strong>.</li>
                    <li>En <strong>Authorized domains</strong>, agrega: <code>23castillo23.github.io</code></li>
                    <li>Asegúrate de que <code>localhost</code> y <code>127.0.0.1</code> también estén en la lista.</li>
                </ol>
            </div>

            <div class="tutorial-pasos">
                <h4>🔐 Paso 2: Restricciones de API (Google Cloud)</h4>
                <p>La API Key debe permitir peticiones desde el nuevo dominio:</p>
                <ol>
                    <li>Entra a <strong>Google Cloud Console > Credenciales</strong>.</li>
                    <li>Selecciona tu API Key y en <strong>Restricciones de sitios web</strong> agrega: <code>23castillo23.github.io/*</code></li>
                    <li><strong>¡IMPORTANTE!</strong> Haz clic en el botón azul <strong>GUARDAR</strong> al final.</li>
                </ol>
            </div>

            <div class="tutorial-pasos warning">
                <h4>🔍 Paso 3: Actualizar el Escudo de Privacidad (UID)</h4>
                <p>Si cambiaste de correo, tu UID es diferente. Debes actualizarlo en <code>javascript.js</code> para que la pestaña de Investigación vuelva a ser visible.</p>
                <ol>
                    <li>Busca tu nuevo <strong>User UID</strong> en la pestaña <strong>Users</strong> de Firebase Authentication.</li>
                    <li>Reemplaza el ID antiguo en estos dos lugares de tu código:</li>
                </ol>
                
                <h5>1. En función <code>actualizarContadoresTabs</code>:</h5>
                <div class="contenedor-comando">
                    <code>if (n.esPrivada && (!usuarioActual || usuarioActual.uid !== 'TU_NUEVO_UID')) {</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h5>2. En función <code>mostrarNotas</code>:</h5>
                <div class="contenedor-comando">
                    <code>if (nota.esPrivada && (!usuarioActual || usuarioActual.uid !== 'TU_NUEVO_UID')) {</code>
                    <button class="btn-copiar-interno" onclick="copiarComapiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>

            <div class="tech-note note-info">
                <i class="fas fa-lightbulb"></i>
                <p><strong>Tip Pro:</strong> Si usas varios correos, puedes permitir múltiples UIDs en el código usando el símbolo <code>&&</code> para que no se bloqueen entre sí.</p>
            </div>
        `,
        links: [
            { texto: "Firebase Console", url: "https://console.firebase.google.com/" },
            { texto: "Google Cloud Console", url: "https://console.cloud.google.com/apis/credentials" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Configuración Global de Firebase",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA
        esPrivada: false,
        imagen: "img/investigacion/fire23base.jpg",
        comando: "Firebase: SDK v11.0.1 (Firestore)",
        descripcion: "Guía definitiva para conectar cualquier proyecto web con la nube de Google. Configura la base de datos Firestore y activa el modo de prueba para desarrollo interactivo.",
        contenidoTutorialHtml: `
        <h3>🚀 Conexión de Aplicaciones a la Nube</h3>
        <p>Sigue estos pasos para transformar un HTML estático en una aplicación dinámica con base de datos en tiempo real.</p>

        <div class="tutorial-pasos">
            <h4>🏗️ Paso 1: Creación del Proyecto</h4>
            <p>El primer paso ocurre en la nube de Google.</p>
            <ol>
                <li>Ingresa a <strong>Firebase Console</strong>.</li>
                <li>Haz clic en <strong>"Agregar proyecto"</strong>.</li>
                <li>Escribe el nombre: <code>MiProyectoFamiliar</code>.</li>
                <li>Desactiva Google Analytics para mayor rapidez en proyectos de práctica.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>🔑 Paso 2: Obtener Credenciales (Config)</h4>
            <p>Registra tu app para obtener las llaves de acceso.</p>
            <ol>
                <li>Haz clic en el icono de <strong>Web (</>)</strong> en el panel principal.</li>
                <li>Registra tu app como <code>WebAlbum</code>.</li>
                <li><strong>Copia el objeto firebaseConfig:</strong> Este contiene tu apiKey y projectId únicos.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>🔥 Paso 3: Activar Firestore Database</h4>
            <p>Configura el almacén de datos para tus comentarios.</p>
            <ol>
                <li>Ve a <strong>Build > Firestore Database</strong>.</li>
                <li>Haz clic en <strong>"Crear base de datos"</strong>.</li>
                <li>Ubicación: Selecciona <code>nam5 (us-central)</code>.</li>
                <li><strong>IMPORTANTE:</strong> Selecciona <strong>"Comenzar en modo de prueba"</strong> para permitir lectura/escritura inmediata.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>💻 Paso 4: Integración en el HTML</h4>
            <p>Pega este script de módulo al final de tu <code>&lt;body&gt;</code>:</p>
            <div class="contenedor-comando">
                <pre>
&lt;script type="module"&gt;
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    ...
  };

  const app = initializeApp(firebaseConfig);
  window._db = getFirestore(app);
  window._f = { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp };
&lt;/script&gt;</pre>
            </div>
        </div>

        <div class="tutorial-pasos">
            <h4>🛠️ Paso 5: Lógica de Escritura (JS)</h4>
            <p>Usa esta función en tu <code>script.js</code> para guardar datos:</p>
            <div class="contenedor-comando">
                <code>
                const { collection, addDoc, serverTimestamp } = window._f;<br>
                await addDoc(collection(window._db, "comentarios"), { ... });
                </code>
            </div>
        </div>

        <div class="tutorial-pasos">
            <h4>📅 Paso 6: Mantenimiento de Reglas</h4>
            <p>Si los datos dejan de cargar tras 30 días, ve a la pestaña <strong>Reglas</strong> en Firestore y actualiza la fecha en la línea:</p>
            <p><code>allow read, write: if request.time < timestamp.date(2026, 4, 15);</code></p>
        </div>
    `,
        links: [
            { texto: "Consola de Firebase", url: "https://console.firebase.google.com/" },
            { texto: "Documentación Firestore", url: "https://firebase.google.com/docs/firestore", plataforma: "google" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Almacenamiento Dinámico (Cloudinary)",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA
        esPrivada: false,
        imagen: "img/investigacion/cloudinary.jpg",
        comando: "API: Cloudinary Media Fetch & Upload",
        descripcion: "Gestiona imágenes familiares de forma profesional. Aprende a configurar el almacenamiento en la nube, optimizar URLs para móviles y habilitar la subida directa de archivos desde tu página.",
        contenidoTutorialHtml: `
        <h3>☁️ Gestión de Medios Inteligente</h3>
        <p>Este sistema permite que tu aplicación no dependa del almacenamiento local, permitiendo subir y transformar fotos en tiempo real.</p>

        <div class="tutorial-pasos">
            <h4>⚙️ Paso 1: Configuración de Seguridad (Upload Preset)</h4>
            <p>Para subir fotos desde el navegador sin llaves secretas, necesitamos un 'permiso no firmado'.</p>
            <ol>
                <li>Ve a <strong>Settings (⚙️) > Upload</strong>.</li>
                <li>En <strong>Upload presets</strong>, haz clic en <strong>Add upload preset</strong>.</li>
                <li>Nombre: <code>preset_familia</code> (cópialo).</li>
                <li><strong>Signing Mode:</strong> Cámbialo de 'Signed' a <strong>'Unsigned'</strong>.</li>
                <li><em>Opcional:</em> Define una carpeta destino como <code>fotos_familia</code>.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>🚀 Paso 2: Lógica de Subida (JavaScript)</h4>
            <p>Usa la API de Fetch para enviar el archivo directamente a la nube.</p>
            <div class="contenedor-comando">
                <pre>
async function subirFoto(archivo) {
  const formData = new FormData();
  formData.append("file", archivo);
  formData.append("upload_preset", "preset_familia");

  const res = await fetch("https://api.cloudinary.com/v1_1/TU_CLOUD/image/upload", {
    method: "POST",
    body: formData
  });
  return await res.json(); // Retorna la URL segura
}</pre>
            </div>
        </div>

        <div class="tutorial-pasos">
            <h4>📸 Paso 3: Selección de Archivos (HTML)</h4>
            <p>Crea el botón para que tu familia elija fotos desde su celular.</p>
            <div class="contenedor-comando">
                <code>&lt;input type="file" id="fotos" accept="image/*"&gt;</code>
            </div>
        </div>

        <div class="tutorial-pasos">
            <h4>✨ Paso 4: Transformaciones por URL</h4>
            <p>No edites las fotos, deja que la URL lo haga por ti para ahorrar datos:</p>
            <ul>
                <li><strong>Optimización Auto:</strong> Añade <code>f_auto,q_auto</code> después de <code>/upload/</code>.</li>
                <li><strong>Recorte Cuadrado:</strong> Añade <code>w_300,h_300,c_fill</code> para miniaturas perfectas.</li>
            </ul>
        </div>

        <div class="tutorial-pasos">
            <h4>💡 Integración con Firebase</h4>
            <p>El flujo ideal es: <strong>Subir a Cloudinary → Obtener URL → Guardar esa URL en Firestore</strong>. Así, tu base de datos solo guarda texto pesado, no imágenes.</p>
        </div>
    `,
        links: [
            { texto: "Media Library de Cloudinary", url: "https://cloudinary.com/console/media_library" },
            { texto: "Documentación de Transformaciones", url: "https://cloudinary.com/documentation/image_transformations", plataforma: "google" }
        ],
        pasos: []
    },
{
        categoria: "investigacion",
        titulo: "Manual Maestro: Automatización por Etiquetas (Tags)",
        esPrivada: true, // ESTO HACE QUE LA TARJETA SEA PRIVADA
        esPrivada: false,
        imagen: "img/investigacion/cloudinary01.jpg",
        comando: "Cloudinary: Bulk Tagging & Resource List",
        descripcion: "Aprende a agrupar cientos de imágenes bajo una sola etiqueta para que tu código las detecte automáticamente sin tener que copiar links uno por uno.",
        contenidoTutorialHtml: `
        <h3>🏷️ Agrupación Inteligente de Activos</h3>
        <p>El uso de <strong>Tags</strong> es la base para crear galerías automáticas. Permite que el código consulte una lista dinámica en lugar de una lista estática manual.</p>

        <div class="tutorial-pasos">
            <h4>🔍 Paso 1: Selección Masiva</h4>
            <p>Antes de etiquetar, debemos marcar los archivos que formarán parte del grupo.</p>
            <ol>
                <li>Entra a tu <strong>Media Library</strong> y abre la carpeta deseada (ej: <code>dibujos</code>).</li>
                <li>Selecciona la primera imagen haciendo clic en el círculo de su esquina superior izquierda.</li>
                <li>Usa el atajo <code>Ctrl + A</code> o selecciona el resto manualmente. La barra azul superior aparecerá.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>🏷️ Paso 2: Aplicar el 'Add Tag'</h4>
            <p>Este es el paso que crea el identificador para tu código.</p>
            <ol>
                <li>En la barra azul superior, haz clic en el icono de la <strong>etiqueta</strong> o en el botón <strong>More (...)</strong>.</li>
                <li>Selecciona la opción <strong>"Add Tags"</strong>.</li>
                <li>Escribe el nombre de tu etiqueta (ej: <code>mis_dibujos</code>) y presiona <strong>Enter</strong>.</li>
                <li>Haz clic en <strong>Update</strong> para procesar todos los archivos a la vez.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>🔓 Paso 3: Abrir la 'Puerta' de Seguridad</h4>
            <p>Por defecto, Cloudinary bloquea la entrega de listas de archivos. Debes habilitarla así:</p>
            <ol>
                <li>Ve a <strong>Settings (⚙️) > Upload</strong>.</li>
                <li>Baja hasta la sección <strong>Security</strong>.</li>
                <li>Busca la casilla <strong>"Resource list"</strong> y asegúrate de que esté <strong>DESMARCADA</strong>.</li>
                <li>Haz clic en <strong>Save Changes</strong> al final de la página.</li>
            </ol>
        </div>

        <div class="tutorial-pasos">
            <h4>✅ Paso 4: Prueba de Funcionamiento</h4>
            <p>Verifica que Cloudinary esté entregando los datos pegando esto en tu navegador:</p>
            <div class="contenedor-comando">
                <code>https://res.cloudinary.com/TU_CLOUD/image/list/mis_dibujos.json</code>
            </div>
            <p class="mt-10">Si ves un código tipo texto con los nombres de tus archivos, <strong>¡la conexión es exitosa!</strong></p>
        </div>

        <div class="tutorial-pasos">
            <h4>💡 Tip Pro: Nombres Limpios</h4>
            <p>Para que tu código se vea mejor, renombra tus archivos como <code>dibujo_01</code>, <code>dibujo_02</code> antes de subirlos. Cloudinary usará esos nombres en el campo <code>public_id</code> del JSON.</p>
        </div>
    `,
        links: [
            { texto: "Gestión de Tags en Cloudinary", url: "https://cloudinary.com/documentation/tag_management" },
            { texto: "Referencia de Resource List API", url: "https://cloudinary.com/documentation/admin_api#get_resources_by_tag", plataforma: "google" }
        ],
        pasos: []
    },
    //CATEGORIA UTILIDADES    
    // =====================================================
    // CATEGORIA UTILIDADES
    // =====================================================
];
