// Datos de categoría: linux
// Generado automáticamente desde data.js
export const datos_linux = [
{
        categoria: "linux",
        titulo: "Guía Maestra: Terminal Linux (Bash)",
        imagen: "img/linux/terminal.jpg",
        comando: "ls / cd / rm / sudo / chmod",
        descripcion: "Domina el estándar de los servidores y el desarrollo profesional. Comandos esenciales para navegar y gestionar sistemas basados en Unix.",
        contenidoTutorialHtml: `
        <h3>🐧 Master Class: Terminal Linux</h3>
        <p>En Linux, la terminal se llama <strong>Bash</strong> o <strong>Zsh</strong>. Casi todo se maneja con minúsculas y las opciones se activan con un guion. <code>-</code></p>

        <div class="tutorial-pasos">
            <h4 class="color-info"><i class="fas fa-map-marker-alt"></i> 1. Navegación y Ubicación</h4>
            
            <p><strong>Saber ruta actual (pwd):</strong> Proviene de: <em>Print Working Directory</em> (Imprimir directorio de trabajo).<br>
            ¿Para qué sirve?: Te dice exactamente en qué ruta o carpeta estás ubicado actualmente.</p>
            <div class="contenedor-comando">
                <code>pwd</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Listar (ls):</strong> Proviene de: <em>List</em> (Listar).<br>
            ¿Para qué sirve?: Muestra (lista) todos los archivos y carpetas que hay dentro del directorio donde te encuentras.</p>
            <div class="contenedor-comando">
                <code>ls -l</code> <span>(Lista detallada: tamaño, fecha)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>ls -a</code> 
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>                
            </div>
            <span>(Ver archivos ocultos como .git)</span>
            <p><strong>Moverse (cd):</strong> Proviene de: <em>Change Directory</em> (Cambiar directorio).<br>
            ¿Para qué sirve?: Es el comando para moverte. Si pones cd Descargas, entras a esa carpeta. Si pones cd .. te regresas una carpeta hacia atrás.</p>
            <div class="contenedor-comando">
                <code>cd Descargas</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Limpiar (clear):</strong> Proviene de: <em>Clear</em> (Limpiar).<br>
            ¿Para qué sirve?: Limpia todo el texto de tu pantalla en la terminal para que no te abrumes con tanta información y empieces desde arriba.</p>
            <div class="contenedor-comando">
                <code>clear</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-exito"><i class="fas fa-file-code"></i> 2. Creación y Modificación</h4>
            
            <p><strong>Crear archivo vacío (touch):</strong> Proviene de: <em>Touch</em> (Tocar).<br>
            ¿Para qué sirve?: "Toca" un archivo para actualizar su fecha de modificación. Sin embargo, su uso principal para principiantes es crear un archivo nuevo vacío (ejemplo: touch texto.txt).</p>
            <div class="contenedor-comando">
                <code>touch texto.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Crear carpeta (mkdir):</strong> Proviene de: <em>Make Directory</em> (Hacer directorio).<br>
            ¿Para qué sirve?: Crea una carpeta nueva.</p>
            <div class="contenedor-comando">
                <code>mkdir nueva_carpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Copiar (cp):</strong> Proviene de: <em>Copy</em> (Copiar).<br>
            ¿Para qué sirve?: Copia un archivo de un lugar a otro. (Ojo: si quieres copiar una carpeta entera, necesitas usarlo con una "bandera" así: cp -r, que significa copiar de forma Recursiva).</p>
            <div class="contenedor-comando">
                <code>cp archivo.txt copia.txt</code>
            </div>

            <p><strong>Mover/Renombrar (mv):</strong> Proviene de: <em>Move</em> (Mover).<br>
            ¿Para qué sirve?: Tiene dos usos: mover un archivo de una carpeta a otra, o renombrar un archivo (es decir, lo "mueves" al mismo lugar pero con otro nombre).</p>
            <div class="contenedor-comando" class="mt-5">
                <code>mv viejo.txt nuevo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-peligro"><i class="fas fa-skull-crossbones"></i> 3. Eliminación</h4>
            <p>En Linux NO hay papelera. Si borras algo, desaparece para siempre.</p>
            
            <p><strong>Borrar carpeta vacía (rmdir):</strong> Proviene de: <em>Remove Directory</em> (Remover directorio).<br>
            ¿Para qué sirve?: Borra una carpeta, pero solo si está vacía.</p>
            <div class="contenedor-comando">
                <code>rmdir carpeta_vacia</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Borrar archivos (rm):</strong> Proviene de: <em>Remove</em> (Remover/Eliminar).<br>
            ¿Para qué sirve?: Borra archivos. Si quieres borrar una carpeta que tiene cosas adentro, usas rm -r (Remove Recursive). ¡Úsalo con cuidado porque no hay papelera de reciclaje en la terminal!</p>
            <div class="contenedor-comando">
                <code>rm archivo.txt</code>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>rm -r NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>rm -rf NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>⚠️ El <strong>-f</strong> significa "Force". No pide permiso ni confirma nada. <strong>Úsalo con extremo cuidado.</strong></small></p>

            <hr>

            <h4 class="color-alerta"><i class="fas fa-shield-alt"></i> 4. Permisos y Sudo</h4>
            <p><strong>Ejecutar como administrador (sudo):</strong> Proviene de: <em>SuperUser DO</em> (El superusuario hace...).<br>
            ¿Para qué sirve?: Te da permisos de administrador temporalmente. Si intentas instalar un programa o modificar algo del sistema y te dice "Permiso denegado", pones sudo antes del comando para decirle a la máquina: "Oye, sé lo que hago, soy el jefe".</p>
            <div class="contenedor-comando">
                <code>sudo apt update</code>
            </div>

            <p><strong>Cambiar permisos (chmod):</strong></p>
            <div class="contenedor-comando">
                <code>chmod 777 archivo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 777 significa que TODOS pueden leer, escribir y ejecutar.</small></p>

            <hr>

            <h4 class="color-naranja"><i class="fas fa-info-circle"></i> 5. Comandos Extra y Atajos Maestros</h4>
            
            <p><strong>Manual (man):</strong> Proviene de: <em>Manual</em>.<br>
            ¿Para qué sirve?: Te muestra el manual completo de cualquier comando. Si no sabes cómo usar ls, escribes man ls y te explicará todas sus opciones. Para salir presionas la letra q (de quit).</p>
            <div class="contenedor-comando">
                <code>man ls</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Ver texto (cat):</strong> Proviene de: <em>Concatenate</em> (Concatenar o unir).<br>
            ¿Para qué sirve?: Te permite ver el texto que hay dentro de un archivo directamente en la terminal sin tener que abrir un editor (ejemplo: cat archivo.txt).</p>
            <div class="contenedor-comando">
                <code>cat archivo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <div class="bloque-sutil mt-5">
                <ul class="txt-sm">
                    <li>📜 <strong>history:</strong> Muestra todos los comandos que has escrito.</li>
                    <li>🔍 <strong>grep "texto" archivo:</strong> Busca una palabra dentro de un archivo.</li>
                    <li>⚡ <strong>Ctrl + L:</strong> Limpia la pantalla rápido (como clear).</li>
                </ul>
            </div>

            <hr>

            <h4 class="color-info"><i class="fas fa-microchip"></i> 6. Sistema y Rendimiento</h4>
            <p><strong>Monitor de recursos (top):</strong> Table of Processes. Administrador de tareas en terminal.</p>
            <div class="contenedor-comando">
                <code>top</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 Presiona <strong>'q'</strong> para salir del monitor.</small></p>

            <p><strong>Forzar cierre de un programa (kill):</strong> Mata procesos trabados.</p>
            <div class="contenedor-comando">
                <code>kill [PID_del_proceso]</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Espacio en disco (df) y Uso de carpeta (du):</strong> Disk Free / Disk Usage.</p>
            <div class="contenedor-comando">
                <code>df -h</code> <span>(Muestra el espacio libre en tus discos)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>du -sh carpeta/</code> 
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <span>(Muestra cuánto pesa una carpeta exacta)</span>

            <p><strong>Memoria RAM (free):</strong> Muestra RAM libre y en uso.</p>
            <div class="contenedor-comando">
                <code>free -h</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-info"><i class="fas fa-globe"></i> 7. Redes e Internet</h4>
            <p><strong>Ver IP local e interfaces (ip a):</strong> IP Address.</p>
            <div class="contenedor-comando">
                <code>ip a</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Probar conexión (ping):</strong> Packet Internet Groper.</p>
            <div class="contenedor-comando">
                <code>ping google.com</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 Presiona <strong>Ctrl + C</strong> para detener el ping.</small></p>

            <p><strong>Descargar de internet (wget):</strong> Web Get.</p>
            <div class="contenedor-comando">
                <code>wget https://ejemplo.com/archivo.zip</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-exito"><i class="fas fa-box-open"></i> 8. Gestión de Paquetes (Apt)</h4>
            <p><strong>Actualizar lista e instalar programas nuevos:</strong> Advanced Packaging Tool.</p>
            <div class="contenedor-comando">
                <code>sudo apt update && sudo apt upgrade</code> <span>(Actualiza todo tu sistema)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>sudo apt install nombre_programa
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            </code> <span>(Ej: sudo apt install vlc)</span>

            <hr>

            <h4 class="color-alerta"><i class="fas fa-users"></i> 9. Usuarios y Permisos Avanzados</h4>
            <p><strong>Cambiar a otro usuario o Root (su):</strong> Substitute User.</p>
            <div class="contenedor-comando">
                <code>su -</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Cambiar propietario (chown):</strong> Change Owner.</p>
            <div class="contenedor-comando">
                <code>sudo chown usuario:grupo archivo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Cambiar contraseña (passwd):</strong> Password.</p>
            <div class="contenedor-comando">
                <code>passwd</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-info"><i class="fas fa-clock"></i> 10. Fecha, Hora y Reloj (Dual Boot)</h4>
            <p><strong>Ver y configurar estado del tiempo (timedatectl):</strong></p>
            <div class="contenedor-comando">
                <code>timedatectl</code> <span>(Muestra la configuración actual)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>timedatectl set-local-rtc 1 --adjust-system-clock</code> 
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <span>(Arregla la desincronización de hora en Dual Boot)</span>

            <p><strong>Ver fecha y hora en terminal (date):</strong></p>
            <div class="contenedor-comando">
                <code>date</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Leer la hora física de la tarjeta madre (hwclock):</strong></p>
            <div class="contenedor-comando">
                <code>hwclock --show</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Mostrar calendario mensual (cal):</strong></p>
            <div class="contenedor-comando">
                <code>cal</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-info"><i class="fas fa-search"></i> 11. Búsqueda Avanzada de Archivos</h4>
            <p><strong>Encontrar archivos perdidos o escondidos (find):</strong></p>
            <div class="contenedor-comando">
                <code>find / -name "archivo.txt"</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
        </div>
    `,
        links: [
            { texto: "Linux Journey (Curso gratis)", url: "https://linuxjourney.com/" },
            { texto: "Video: Solución desincronización de hora Dual Boot", url: "https://www.youtube.com/watch?v=L906Kti3gzE&t=343s", plataforma: "youtube" }
        ],
        pasos: []
    },
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
                    <li>🔑 <strong>Usuario:</strong> El nombre que te dio <code>whoami</code></li>
                    <li>🔒 <strong>Contraseña:</strong> La que creaste con <code>smbpasswd</code></li>
                    <li>📌 Selecciona "Recordar para siempre" para no repetir el proceso.</li>
                </ul>
            </div>
        </div>
    `,
        links: [],
        pasos: []
    },
{
    categoria: "linux",
    titulo: "Instalación y Configuración de Linux Mint",
    imagen: "img/linux/linuxmint.jpg",
    comando: "Linux Mint 22 Cinnamon",
    descripcion: "Manual paso a paso para descargar, crear el USB de arranque e instalar Linux Mint, uno de los sistemas más estables y seguros basados en Ubuntu.",
    contenidoTutorialHtml: `
        <h3>🌿 El sistema operativo elegante, moderno y cómodo</h3>
        <p>Linux Mint es famoso por su estabilidad y por ofrecer un escritorio tradicional muy familiar que funciona rápido en cualquier computadora.</p>
        
        <div class="tutorial-pasos">
            <h4>Paso 1: Descarga de la Imagen ISO</h4>
            <p>Ve al sitio oficial y selecciona tu entorno de escritorio. Se recomienda <strong>Cinnamon</strong> por ser el principal y más completo:</p>
            <ul>
                <li><strong>Cinnamon Edition:</strong> La más popular, moderna y con efectos visuales completos.</li>
                <li><strong>MATE Edition:</strong> Consume menos recursos, ideal para equipos de gama media.</li>
                <li><strong>Xfce Edition:</strong> Ultra ligera, perfecta para revivir computadoras muy viejas.</li>
            </ul>
            <div class="contenedor-comando">
                <code>
                    <a href="https://linuxmint.com/download.php" target="_blank" class="link-comando">https://linuxmint.com/download.php</a>
                </code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Link</button>
            </div>

            <h4>Paso 2: Crear el USB de Arranque</h4>
            <p>Usa herramientas como <a href="https://rufus.ie/es/" target="_blank" class="link-comando"><strong>Rufus</strong></a> 
            o <a href="https://etcher.balena.io/" target="_blank" class="link-comando"><strong>balenaEtcher</strong></a> para grabar la ISO descargada en una memoria USB de al menos 8GB.</p>

            <div class="links-seccion">
                <a href="https://www.youtube.com/shorts/XKEcNDvPRtM" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Cómo crear memoria booteable con Balena Etcher">
                    <i class="fab fa-youtube"></i> 
                    <span class="texto-btn-cortado">Video: Cómo crear memoria booteable con Balena Etcher</span>
                </a>
            </div>

            <h4>Paso 3: Proceso de Instalación</h4>
            <ol>
                <li><strong>Arranque (Boot):</strong> Conecta el USB, enciende la PC y presiona la tecla de booteo (F12, F9, Esc) para arrancar desde la memoria.</li>
                
                <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid var(--primary); padding: 15px; margin: 10px 0; border-radius: 8px;">
                    <p class="mb-10"><strong>⚠️ Opciones en el menú de arranque (Grub):</strong></p>
                    <ul class="lista-limpia">
                        <li class="mb-8">🔵 <strong>Start Linux Mint (Cinnamon):</strong> Inicia el sistema en modo "Vivo". Te permite probar el sistema, revisar si detecta tu Wi-Fi y probar el entorno sin alterar tus archivos.</li>
                        <li>🟢 <strong>Start in compatibility mode:</strong> Úsala si la pantalla se queda congelada o distorsionada con la opción anterior. Arranca con drivers gráficos genéricos seguros.</li>
                    </ul>
                </div>

                <li><strong>Bienvenida:</strong> Dentro del escritorio de prueba, haz doble clic en el icono del disco que dice <kbd>Install Linux Mint</kbd>.</li>
                <li><strong>Idioma y Teclado:</strong> Selecciona "Español" y luego la distribución de teclado adecuada (ej. Spanish - Windows) para que las teclas coincidan.</li>
                <li><strong>Códecs Multimedia:</strong> Marca la casilla "Instalar códecs multimedia". Es vital para poder reproducir videos, MP3 y formatos de páginas web sin problemas.</li>
                <li><strong>Tipo de Instalación:</strong>
                    <ul>
                        <li><strong>Instalar junto a ellos:</strong> Ideal para conservar Windows (Dual Boot). El instalador reducirá tu espacio para hacerle lugar a Mint.</li>
                        <li><strong>Borrar disco e instalar:</strong> Borra todo el almacenamiento e instala Linux Mint como sistema único.</li>
                    </ul>
                </li>
                <li><strong>Datos de Usuario:</strong> Selecciona tu ubicación en el mapa y configura tu nombre de usuario, nombre del equipo y contraseña.</li>
                <li><strong>Finalización:</strong> Espera que termine el copiado de archivos, haz clic en <kbd>Reiniciar ahora</kbd>, retira la memoria USB y presiona <kbd>Enter</kbd>.</li>
            </</ol>

            <h4>Paso 4: Primeros Pasos y Actualizaciones</h4>
            <p>Al iniciar, se abrirá la "Pantalla de Bienvenida". Ve a la sección <strong>"Primeros pasos"</strong> para configurar los "Instantáneas del sistema" (Timeshift) y ejecutar el "Administrador de actualizaciones" para dejar tu sistema al día.</p>
        </div>
        <p class="m-0"><i class="fas fa-rocket"></i> <strong>Tip de Software:</strong> Linux Mint incluye la <strong>Tienda de Software</strong> (Software Manager) con soporte nativo para Flatpak, permitiéndote instalar aplicaciones modernas como VS Code, Spotify o Discord con un solo clic.</p>
    `,
    links: [
        { texto: "Página de Descarga", url: "https://linuxmint.com/download.php" },
        { texto: "Video: Cómo instalar Linux Mint", url: "https://www.youtube.com/watch?v=ek11Jn48x8A", plataforma: "youtube" }
    ],
    pasos: []
},
{
    categoria: "linux",
    titulo: "Sincronización de Fecha y Hora en Dual Boot (Windows/Linux)",
    imagen: "img/linux/dualboot-clock.jpg",
    comando: "timedatectl set-local-rtc 1 --adjust-system-clock",
    descripcion: "Solución al conflicto de desfase horario entre Windows y distribuciones Linux (Mint/Zorin) causado por la interpretación del reloj de hardware (RTC).",
    contenidoTutorialHtml: `
        <h3>🕒 Solución al Desfase Horario en Dual Boot</h3>
        <p>Cuando tienes Windows y Linux en la misma máquina, Windows asume que el reloj de la placa base (RTC) está en <strong>Tiempo Local</strong>, mientras que Linux asume que está en <strong>UTC</strong>. Esto provoca que al cambiar de sistema, la hora siempre esté incorrecta.</p>
        
        <div class="tutorial-pasos">
            <h4>Paso 1: Diagnóstico en Linux</h4>
            <p>Inicia en tu distribución Linux (Mint o Zorin) y abre la terminal. Verifica el estado actual del reloj con el siguiente comando:</p>
            <div class="contenedor-comando">
                <code>timedatectl</code>
            </div>
            <p>Observa la línea <code>RTC in local TZ</code>. Si dice <strong>no</strong>, el sistema está en modo UTC y es la causa del problema.</p>

            <h4>Paso 2: Aplicar la Corrección</h4>
            <p>Ejecuta este comando para forzar a Linux a usar el tiempo local, igualando el comportamiento de Windows:</p>
            <div class="contenedor-comando">
                <code>sudo timedatectl set-local-rtc 1 --adjust-system-clock</code>
            </div>
            <p>Al ser un cambio de configuración del sistema, es posible que te pida tu contraseña de superusuario.</p>

            <h4>Paso 3: Verificación</h4>
            <p>Vuelve a ejecutar <code>timedatectl</code> y confirma que ahora la línea indique:</p>
            <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; padding: 10px; border-radius: 5px;">
                <code>RTC in local TZ: yes</code>
            </div>

            <h4>Paso 4: Sincronización Final en Windows</h4>
            <ol>
                <li>Reinicia la computadora e inicia sesión en <strong>Windows</strong>.</li>
                <li>Ve a <strong>Configuración > Hora e idioma > Fecha y hora</strong>.</li>
                <li>Haz clic en el botón <strong>"Sincronizar ahora"</strong>.</li>
                <li>Windows corregirá la hora en el reloj de la placa base y, gracias al cambio en Linux, ya no se volverá a desconfigurar al alternar sistemas.</li>
            </ol>
        </div>

        <p><i class="fas fa-info-circle"></i> <strong>Nota técnica:</strong> Linux mostrará una advertencia indicando que el modo 'local-rtc' no es el estándar recomendado para servidores, pero es la configuración ideal y más estable para entornos de escritorio en Dual Boot.</p>
    `,
    links: [
        
    ],
    pasos: []
},
{
    "categoria": "linux",
    "titulo": "Configurar Windows como Predeterminado en el Menú GRUB",
    "imagen": "img/linux/bootorder.jpg",
    "comando": "nano /etc/default/grub",
    "descripcion": "Manual paso a paso para editar el gestor de arranque GRUB y configurar Windows 11 para que inicie automáticamente por defecto fijando su posición.",
    "contenidoTutorialHtml": `
        <h3>⚙️ Control total sobre qué sistema inicia primero</h3>
        <p>Aquí tienes los pasos exactos para configurar el gestor de arranque (GRUB) y hacer que Windows inicie automáticamente por defecto fijando su posición en la lista.</p>
        
        <div class="tutorial-pasos">
            <h4>Paso 1: Editar la configuración</h4>
            <p>Abre el archivo de texto principal de GRUB desde la terminal para modificar sus reglas de inicio.</p>
            
            <div class="contenedor-comando">
                <code>sudo nano /etc/default/grub</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Comando</button>
            </div>

            <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid var(--primary); padding: 15px; margin: 10px 0; border-radius: 8px;">
                <p class="mb-10"><strong>🛠️ Fijar Windows por posición:</strong></p>
                <p>Dentro del archivo de texto, busca la línea que dice <code>GRUB_DEFAULT=0</code> y cambia el número por la fila exacta donde aparece Windows en tu menú negro al encender el equipo.</p>
                <p class="mb-0"><em>¡Importante: En la lista de GRUB siempre se empieza a contar desde el cero! (Ejemplo: Si Windows es la tercera opción en tu pantalla, debes poner <code>GRUB_DEFAULT=2</code>).</em></p>
            </div>

            <h4>Paso 2: Guardar y salir</h4>
            <p>Presiona <kbd>Ctrl</kbd> + <kbd>O</kbd>, luego <kbd>Enter</kbd> para confirmar que quieres guardar, y finalmente <kbd>Ctrl</kbd> + <kbd>X</kbd> para salir del editor de texto y volver a la terminal normal.</p>
            
            <h4>Paso 3: Aplicar los cambios (¡Paso obligatorio!)</h4>
            <p>El sistema necesita compilar y actualizar tus nuevas reglas. Si cierras la terminal sin ejecutar este comando final, no habrá ningún cambio al reiniciar tu computadora.</p>

            <div class="contenedor-comando">
                <code>sudo update-grub</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Comando</button>
            </div>
        </div>
    `,
    "links": [
        
    ],
    "pasos": []
},
{
        categoria: "linux",
        titulo: "Instalación y Personalización de Voyager Linux",
        imagen: "img/linux/voyager.jpg",
        comando: "Voyager Linux (Ubuntu / Debian)",
        descripcion: "Manual paso a paso para descargar e instalar Voyager, la distribución francesa famosa por su increíble estética preconfigurada y sus widgets de escritorio.",
        contenidoTutorialHtml: `
            <h3>🌌 El Linux para los amantes de la estética</h3>
            <p>Voyager Linux destaca por ofrecer un entorno de escritorio (XFCE o GNOME) altamente personalizado desde el primer minuto, lleno de efectos, paneles y widgets Conky sin necesidad de configurar nada manualmente.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga de la Imagen ISO</h4>
                <p>Ve al sitio oficial y elige la base que prefieras:</p>
                <ul>
                    <li><strong>Voyager Ubuntu (LTS):</strong> Basada en la última versión de soporte extendido de Ubuntu. Ideal para máxima compatibilidad.</li>
                    <li><strong>Voyager Debian:</strong> Basada en Debian estable. Perfecta si buscas un sistema ultra robusto y ligero.</li>
                </ul>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://voyagerlive.org/" target="_blank" class="link-comando">https://voyagerlive.org/</a>
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
                    <li><strong>Arranque:</strong> Enciende la PC y presiona la tecla de acceso a la BIOS (F2, F12, Del) para arrancar desde tu memoria USB. Se recomienda desactivar <em>Secure Boot</em>.</li>
                    
                    <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid var(--primary); padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p class="mb-10"><strong>⚠️ Al iniciar el USB verás el menú de GRUB:</strong></p>
                        <ul class="lista-limpia">
                            <li class="mb-8">🔵 <strong>Try or Install Voyager:</strong> Selecciona esta opción. Cargará el sistema en modo "Live" (Prueba) donde podrás ver su espectacular diseño antes de instalarlo.</li>
                            <li>⚙️ <strong>Modo Seguro/Safe Graphics:</strong> Úsalo solo si la primera opción te da problemas de video o pantalla negra.</li>
                        </ul>
                    </div>

                    <li><strong>Bienvenida:</strong> Una vez en el escritorio de Voyager, busca el icono de <strong>"Instalar Voyager"</strong> (suele usar el instalador Calamares o Ubiquity). Selecciona idioma Español.</li>
                    <li><strong>Teclado y Red:</strong> Selecciona <strong>Spanish</strong> o <strong>Spanish (Latin American)</strong> según tu teclado. Conéctate a WiFi para descargar actualizaciones durante la instalación.</li>
                    <li><strong>Particionado:</strong> 
                        <ul>
                            <li><strong>Instalar junto a Windows:</strong> El sistema creará un espacio (Dual Boot) sin borrar tus datos.</li>
                            <li><strong>Borrar disco entero:</strong> Elimina todo e instala Voyager como tu único sistema operativo.</li>
                        </ul>
                    </li>
                    <li><strong>Usuario:</strong> Selecciona tu región en el mapa y crea tu nombre de equipo, usuario y contraseña.</li>
                    <li><strong>Finalización:</strong> Espera a que termine la copia de archivos. Al finalizar, reinicia la computadora y retira el USB cuando la pantalla te lo indique.</li>
                </ol>

                <h4>Paso 4: Descubre el "Box Voyager"</h4>
                <p>La magia de esta distro está en el <strong>Box Voyager</strong> (un panel lateral de control). Ábrelo para cambiar fácilmente entre diferentes perfiles de Conky (widgets de hora y sistema), temas, iconos y comportamientos del dock inferior con un solo clic.</p>
            </div>
                <p class="m-0"><i class="fas fa-rocket"></i> <strong>Tip de Personalización:</strong> Voyager incluye herramientas como "Radio Tray" y perfiles gaming preinstalados. ¡Explora el menú de aplicaciones antes de instalar cosas nuevas, ya viene muy completo!</p>
                
            
        `,
        links: [
            { texto: "Página Oficial de Descarga", url: "https://voyagerlive.org/" },
            { texto: "Video: Review e Instalación de Voyager", url: "https://www.youtube.com/watch?v=BCD_VbTT-jg", plataforma: "youtube" }
        ],
        pasos: []
},
{
        categoria: "linux",
        titulo: "Instalación y Optimización de CuerdOS",
        imagen: "img/linux/CuerdOS.jpg",
        comando: "CuerdOS (Debian Based)",
        descripcion: "Manual paso a paso para instalar CuerdOS, la distribución de origen español basada en Debian y optimizada hasta el último píxel para ofrecer el máximo rendimiento.",
        contenidoTutorialHtml: `
            <h3>⚡ El Linux optimizado para la eficiencia</h3>
            <p>CuerdOS no es solo un entorno de escritorio personalizado; incluye mejoras de rendimiento como ajuste de servicios, ZRam preconfigurado y un kernel parcheado para un mejor manejo de CPU, GPU y memoria.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga de la Imagen ISO</h4>
                <p>Ve al sitio oficial y elige el "sabor" (entorno) que mejor se adapte a tus necesidades:</p>
                <ul>
                    <li><strong>CuerdOS Xfce:</strong> El entorno por defecto, moderno y cómodo para cualquier usuario [cite: 1.1.4].</li>
                    <li><strong>CuerdOS Sway:</strong> Con gestor de ventanas en mosaico (Tiling WM) para los que buscan algo ultra ligero [cite: 1.1.4].</li>
                    <li><strong>Otras versiones:</strong> LabWC, KDE, Shell, entre otras [cite: 1.1.4].</li>
                </ul>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://cuerdos.github.io/index.html" target="_blank" class="link-comando">https://cuerdos.github.io/index.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Link</button>
                </div>

                <h4>Paso 2: Crear el USB de Arranque</h4>
                <p>Usa herramientas como <a href="https://rufus.ie/es/" target="_blank" class="link-comando" class="fw-bold"><strong>Rufus</strong></a> 
                o <a href="https://etcher.balena.io/" target="_blank" class="link-comando" class="fw-bold"><strong>balenaEtcher</strong></a> para grabar la ISO en una memoria USB (se recomienda al menos 8GB).</p>

                <div class="links-seccion">
                    <a href="https://www.youtube.com/shorts/XKEcNDvPRtM" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Cómo crear memoria booteable con Balena Etcher">
                        <i class="fab fa-youtube"></i> 
                        <span class="texto-btn-cortado">Video: Cómo crear memoria booteable con Balena Etcher</span>
                    </a>
                </div>

                <h4>Paso 3: Proceso de Instalación</h4>
                <ol>
                    <li><strong>Arranque:</strong> Enciende la PC y presiona la tecla de acceso a la BIOS (F2, F12, Del) para seleccionar el USB como prioridad.</li>
                    
                    <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid var(--primary); padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p class="mb-10"><strong>⚠️ Nota para versiones Live (como Sway o LabWC):</strong></p>
                        <ul class="lista-limpia">
                            <li class="mb-8">🔑 Si el sistema en modo "Live" te pide credenciales para entrar al escritorio antes de instalar, el usuario es <strong>'user'</strong> y la contraseña es <strong>'live'</strong> [cite: 1.1.4].</li>
                        </ul>
                    </div>

                    <li><strong>Instalador (Calamares):</strong> Una vez en el entorno en vivo, busca el instalador. Selecciona el idioma Español y haz clic en Siguiente [cite: 1.1.9].</li>
                    <li><strong>Teclado y Red:</strong> Elige la distribución de tu teclado (Ej. Spanish). Asegúrate de tener conexión a internet.</li>
                    <li><strong>Particionado:</strong> 
                        <ul>
                            <li><strong>Instalar junto a Windows:</strong> Conserva tus archivos y sistemas actuales (Dual Boot).</li>
                            <li><strong>Borrar disco e instalar:</strong> Borra todo y deja CuerdOS como sistema único. (Recomendado 15GB de espacio mínimo) [cite: 1.1.4].</li>
                        </ul>
                    </li>
                    <li><strong>Usuario:</strong> Define tu zona horaria y crea tu nombre de usuario y contraseña.</li>
                    <li><strong>Finalización:</strong> Al terminar la copia de archivos, reinicia y retira el USB.</li>
                </ol>

                <h4>Paso 4: Descubre el Ecosistema CuerdOS</h4>
                <p>Una vez instalado, notarás que CuerdOS viene con herramientas propias que no están en Debian base [cite: 1.1.4]:</p>
                <ul>
                    <li>🛒 <strong>Yelena Store:</strong> Preconfigurada para instalar software (Debs y Flatpak) fácilmente [cite: 1.1.4].</li>
                    <li>🔄 <strong>CuerdToken:</strong> El asistente de actualizaciones propio del sistema [cite: 1.1.4].</li>
                    <li>🔋 <strong>TLP:</strong> Preconfigurado para gestionar el consumo de energía óptimamente (ideal para laptops) [cite: 1.1.4].</li>
                </ul>
            </div>
                <p class="m-0"><i class="fas fa-rocket"></i> <strong>Tip de Software:</strong> CuerdOS trae Pipewire como servidor multimedia por defecto y garantiza compatibilidad con Waydroid para emulación, ¡aprovéchalos! [cite: 1.1.4]</p>
                
            
        `,
        links: [
            { texto: "Página de Descarga", url: "https://cuerdos.github.io/index.html" }            
        ],
        pasos: []
},
{
    categoria: "linux",
    titulo: "Restaurar menú de arranque (GRUB) en Zorin OS",
    imagen: "img/linux/restaurar-grub.jpg",
    comando: "sudo grub-install /dev/sda (o nvme0n1) && sudo update-grub",
    descripcion: "Guía paso a paso para identificar el disco de arranque principal y restaurar el menú gráfico del gestor de arranque (GRUB) de Zorin OS cuando otro sistema operativo lo ha sobrescrito.",
    contenidoTutorialHtml: `
        <h3>🖥️ Restaurar el menú de arranque original de Zorin OS</h3>
        <p>Al instalar múltiples distribuciones Linux (como Voyager u otro sistema después de Zorin), el último sistema instalado suele tomar el control del gestor de arranque (GRUB). Para recuperar el diseño gráfico original y el control en Zorin OS, debemos reinstalar su GRUB en el disco principal.</p>
        
        <div class="tutorial-pasos">
            <h4>Paso 1: Identificar el disco principal</h4>
            <p>Inicia sesión en Zorin OS y abre la terminal. Primero, necesitamos saber exactamente en qué disco está la partición de arranque (EFI) o del sistema. Ejecuta el siguiente comando:</p>
            <div class="contenedor-comando">
                <code>lsblk</code>
            </div>
            <p>Aparecerá una lista en forma de árbol. Busca la línea que diga <strong>/boot/efi</strong> o <strong>/</strong> en la última columna (MOUNTPOINTS). Fíjate en el nombre del disco "padre" que está más a la izquierda (sin números al final):</p>
            <ul>
                <li>Si es un disco duro o SSD tradicional (SATA), el nombre será algo como <strong>sda</strong> o <strong>sdb</strong>.</li>
                <li>Si es un disco SSD moderno (NVMe), el nombre será algo como <strong>nvme0n1</strong>.</li>
            </ul>

            <h4>Paso 2: Reinstalar el GRUB</h4>
            <p>Una vez identificado tu disco, ejecuta el comando de instalación correspondiente. <strong>Importante:</strong> Recuerda no poner el número de la partición (ej. sda1 o nvme0n1p1), solo el nombre del disco entero:</p>
            
            <h5>Opción A: Si tu disco es SATA (sda)</h5>
            <div class="contenedor-comando">
                <code>sudo grub-install /dev/sda</code>
            </div>

            <h5>Opción B: Si tu disco es NVMe (nvme0n1)</h5>
            <div class="contenedor-comando">
                <code>sudo grub-install /dev/nvme0n1</code>
            </div>

            <p>La terminal te pedirá tu contraseña y, si todo sale bien, te devolverá un mensaje de éxito como este:</p>
            <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; padding: 10px; border-radius: 5px; margin-top: 10px; margin-bottom: 15px;">
                <code>Instalación terminada. No se notificó ningún error.</code>
            </div>

            <h4>Paso 3: Actualizar la lista de Sistemas Operativos</h4>
            <p>Ahora hay que decirle al sistema que busque y agregue al menú de arranque el resto de los sistemas instalados (Windows, Voyager, etc.). Ejecuta:</p>
            <div class="contenedor-comando">
                <code>sudo update-grub</code>
            </div>
            <p>Verás que la terminal empieza a procesar y a enlistar los sistemas operativos encontrados. El proceso finaliza cuando vuelve a aparecer tu nombre de usuario para ingresar nuevos comandos.</p>

            <h4>Paso 4: Finalizar y reiniciar</h4>
            <ol>
                <li>Cierra la terminal.</li>
                <li>Reinicia tu computadora.</li>
                <li>Al encender, ya deberías ver el menú de arranque original controlando nuevamente tus sistemas.</li>
            </ol>
        </div>

        <p><i class="fas fa-info-circle"></i> <strong>Nota técnica:</strong> Si el comando <code>lsblk</code> muestra que el sistema raíz (<strong>/</strong>) está en un disco y el arranque (<strong>/boot/efi</strong>) en otro, siempre debes instalar el GRUB apuntando al disco donde se encuentra <strong>/boot/efi</strong>.</p>
    `,
    links: [],
    pasos: []
}
    
];
