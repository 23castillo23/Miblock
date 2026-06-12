// Datos de categoría: linux
// Generado automáticamente desde data.js
export const datos_linux = [
{
        categoria: "linux",
        titulo: "Instalación y Optimización de Zorin OS",
        imagen: "img/linux/zorinos.jpg",
        comando: "Zorin OS 18 Core & Pro",
        descripcion: "Manual paso a paso para descargar, instalar y configurar Zorin OS, el reemplazo ideal para usuarios de Windows 10/11.",
        contenidoTutorialHtml: `
            <h3>🐧 El Linux diseñado para usuarios de Windows</h3>
            <p>Zorin OS combina la potencia de Linux con una interfaz que te hará sentir como en casa desde el primer minuto.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga de la Imagen ISO</h4>
                <p>Ve al sitio oficial y elige tu edición:</p>
                <ul>
                    <li><strong>Zorin OS Core:</strong> Gratuita y recomendada para la mayoría.</li>
                    <li><strong>Zorin OS Pro:</strong> Versión de pago con más temas (macOS, Windows 11) y soporte técnico.</li>
                </ul>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://zorin.com/os/download/" target="_blank" class="link-comando">https://zorin.com/os/download/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Link</button>
                </div>

                <h4>Paso 2: Crear el USB de Arranque</h4>
                <p>Usa herramientas como <a href="https://rufus.ie/es/" target="_blank" class="link-comando" class="fw-bold"><strong>Rufus</strong></a> 
                o <a href="https://etcher.balena.io/" target="_blank" class="link-comando" class="fw-bold"><strong>balenaEtcher</strong></a> para grabar la ISO en una memoria USB de al menos 8GB.</p>

                <div class="links-seccion">
                    <a href="https://www.youtube.com/shorts/XKEcNDvPRtM" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Cómo crear memoria booteable con Balena Etcher">
                        <i class="fab fa-youtube"></i> 
                        <span class="texto-btn-cortado">Video: Cómo crear memoria booteable con Balena Etcher</span>
                    </a>
                </div>

                <h4>Paso 3: Proceso de Instalación</h4>
                <ol>
                    <li><strong>Arranque:</strong> Enciende la PC y presiona la tecla de acceso a la BIOS (F2, F12, Del) para seleccionar el USB como prioridad. Se recomienda desactivar <em>Secure Boot</em> para evitar bloqueos.</li>
                    
                    <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid var(--primary); padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p class="mb-10"><strong>⚠️ Al iniciar verás estas opciones en pantalla:</strong></p>
                        <ul class="lista-limpia">
                            <li class="mb-8">🔵 <strong>Try or Install (Probar o Instalar):</strong> Es la opción recomendada. Te permite entrar al escritorio de Zorin para probarlo sin instalar nada, o iniciar el instalador directamente.</li>
                            <li>🟢 <strong>Modern NVIDIA Drivers:</strong> Úsala únicamente si tu PC tiene una tarjeta de video NVIDIA. Esto carga drivers especiales para evitar que la pantalla se quede en negro.</li>
                        </ul>
                    </div>

                    <li><strong>Bienvenida:</strong> Una vez cargado el sistema, selecciona el idioma Español y haz clic en <kbd>Instalar Zorin OS</kbd>.</li>
                    <li><strong>Teclado y Red:</strong> Elige <strong>Spanish - Windows</strong> para que los símbolos coincidan con tu teclado físico. Marca las casillas de "Software de terceros" para tener drivers de WiFi y soporte multimedia.</li>
                    <li><strong>Tipo de Instalación:</strong> 
                        <ul>
                            <li><strong>Instalar junto a Windows:</strong> Conserva tus archivos y sistemas actuales.</li>
                            <li><strong>Borrar disco e instalar:</strong> Borra todo y deja Zorin como sistema único.</li>
                        </ul>
                    </li>
                    <li><strong>Usuario:</strong> Define tu zona horaria y crea tu nombre de usuario y contraseña.</li>
                    <li><strong>Finalización:</strong> Al terminar, reinicia, retira el USB y presiona <kbd>Enter</kbd>.</li>
                </ol>

                <h4>Paso 4: Personalización (Zorin Appearance)</h4>
                <p>Busca la aplicación "Zorin Appearance" para cambiar el diseño del escritorio con un solo clic (estilo Windows clásico, moderno o Touch).</p>
            </div>
                <p class="m-0"><i class="fas fa-rocket"></i> <strong>Tip de Software:</strong> Zorin detecta automáticamente si intentas abrir un <strong>.exe</strong> y te ofrece instalar el soporte para aplicaciones de Windows.</p>
                
            
        `,
        links: [
            { texto: "Página de Descarga", url: "https://zorin.com/os/download/" },
            { texto: "Video: Cómo instalar Zorin OS 18", url: "https://www.youtube.com/watch?v=4K10IxXbLkU", plataforma: "youtube" }
        ],
        pasos: []
    },
{
        categoria: "linux",
        titulo: "Zorin OS: Texto Blanco y Sin Sombra (Gnome Shell)",
        imagen: "img/linux/custom-shell.png",
        comando: "sudo nano / gnome-shell.css / Alt+F2 + r",
        descripcion: "Modificación estética del GNOME Shell para mejorar la visibilidad de los iconos en el menú, eliminando sombras y aclarando el texto.",
        contenidoTutorialHtml: `
        <h3>🎨 Personalización de Interfaz</h3>
        <p>Ajusta el estilo visual del sistema editando directamente las hojas de estilo de Zorin OS.</p>

        <div class="tutorial-pasos">
            <!-- FASE 1: RESPALDO -->
            <h4 class="color-info"><i class="fas fa-shield-alt"></i> 1. Seguridad y Acceso</h4>
            <p><strong>Crea un respaldo antes de empezar:</strong></p>
            <div class="contenedor-comando">
                <code>cp /usr/share/themes/ZorinPurple-Light/gnome-shell/gnome-shell.css ~/respaldo_tema.css</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Abre el editor (Elige tu color):</strong></p>
            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; font-size: 0.85rem;">
                🟣 <strong>Morado:</strong> <code>sudo nano /usr/share/themes/ZorinPurple-Light/gnome-shell/gnome-shell.css</code><br>
                🟠 <strong>Naranja:</strong> <code>sudo nano /usr/share/themes/ZorinOrange-Light/gnome-shell/gnome-shell.css</code><br>
                ⚪ <strong>Gris:</strong> <code>sudo nano /usr/share/themes/ZorinGrey-Light/gnome-shell/gnome-shell.css</code>
            </div>

            <!-- FASE 2: IDENTIFICACIÓN -->
            <h4 style="color: #7a6d35;"><i class="fas fa-search"></i> 2. Cómo Identificar la Sección</h4>
            <p>Dentro de <strong>nano</strong>, presiona <strong>Ctrl + W</strong> y busca el punto de referencia:</p>
            <div class="contenedor-comando">
                <code>.icon-grid</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><strong>Localización:</strong> Justo debajo de <code>.icon-grid</code>, encontrarás el bloque que vamos a modificar:</p>
            

            <!-- FASE 2: EL CAMBIO -->
            <h4 style="color: #117e3e;"><i class="fas fa-code"></i> 2. Modificación del CSS</h4>
            <p>Busca la sección <code>.overview-tile, .grid-search-result</code> y deja el código así:</p>
            
            <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; font-family: monospace;">
                <span class="cod-amarillo">.overview-tile</span>, <span class="cod-amarillo">.grid-search-result</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="cod-azul">color</span>: <span class="cod-naranja">#ffffff</span>;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="cod-azul">text-shadow</span>: <span class="cod-naranja">none</span>;<br>
                }
            </div>

            

            <!-- FASE 3: APLICAR -->
            <h4 style="color: #8b730f;"><i class="fas fa-sync-alt"></i> 3. Guardar y Aplicar</h4>
            <p>Sigue esta secuencia de teclas para finalizar:</p>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>💾 <strong>Ctrl + O</strong> y <strong>Enter</strong>: Guarda los cambios.</li>
                    <li>🚪 <strong>Ctrl + X</strong>: Sale del editor.</li>
                    <li>🚀 <strong>Alt + F2</strong>, escribe <strong>r</strong> y presiona <strong>Enter</strong>: Reinicia la interfaz para ver los cambios.</li>
                </ul>
            </div>
        </div>
    `,
        links: [],
        pasos: []
    },
{
        categoria: "linux",
        titulo: "Zorin OS: Compartir Archivos en Red Local",
        imagen: "img/linux/red-local.png",
        comando: "nautilus-share / samba / smbpasswd",
        descripcion: "Ruta comprobada para conectar dos máquinas con Zorin OS y transferir archivos por red sin cables.",
        contenidoTutorialHtml: `
        <h3>🌐 Sincronización de Archivos en Red</h3>
        <p>Configura tu sistema para compartir carpetas de forma segura entre equipos con Zorin OS.</p>

        <div class="tutorial-pasos">
            <!-- FASE 1: INSTALACIÓN -->
            <h4 class="color-info"><i class="fas fa-download"></i> 1. Instalación de Componentes</h4>
            <p>Ejecuta estos comandos en la <strong>PC 1</strong> (la que tiene los archivos):</p>
            
            <div class="contenedor-comando">
                <code>sudo apt update</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <div class="contenedor-comando" class="mt-5">
                <code>sudo apt install nautilus-share samba</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 <strong>nautilus-share:</strong> Activa la pestaña visual. <br> <strong>samba:</strong> Es el motor que gestiona la red.</small></p>

            <p><strong>Reiniciar explorador:</strong></p>
            <div class="contenedor-comando">
                <code>nautilus -q</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>El parámetro <code>-q</code> (quit) cierra los procesos ocultos para aplicar los cambios visuales.</small></p>

            

            <!-- FASE 2: SEGURIDAD -->
            <h4 style="color: #0f458b;"><i class="fas fa-key"></i> 2. Permisos y Usuarios</h4>
            <p><strong>Identificar tu usuario:</strong></p>
            <div class="contenedor-comando">
                <code>whoami</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Crear contraseña de red:</strong></p>
            <div class="contenedor-comando">
                <code>sudo smbpasswd -a tu_usuario</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 El parámetro <code>-a</code> (add) es obligatorio para registrar al usuario por primera vez en Samba.</small></p>

            <p><strong>Reiniciar servidor:</strong></p>
            <div class="contenedor-comando">
                <code>sudo systemctl restart smbd</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            

            <!-- FASE 3: CONEXIÓN -->
            <h4 style="color: #29634f;"><i class="fas fa-network-wired"></i> 3. Conexión Final (PC 2)</h4>
            <p>En la computadora que recibe, sigue estos pasos:</p>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>📁 Abre el explorador > <strong>Otras ubicaciones</strong>.</li>
                    <li>🖥️ En <strong>Redes</strong>, haz doble clic en el nombre de la PC 1.</li>
                    <li>🔑 <strong>Usuario:</strong> El nombre que te dio <code>whoami</code>.</li>
                    <li>🔒 <strong>Contraseña:</strong> La que creaste con <code>smbpasswd</code>.</li>
                    <li>📌 Selecciona "Recordar para siempre" para no repetir el proceso.</li>
                </ul>
            </div>
        </div>
    `,
        links: [],
        pasos: []
    },
    // CATEGORIA WINDOWS
];
