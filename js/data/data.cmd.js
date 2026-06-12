// Datos de categoría: cmd
// Generado automáticamente desde data.js
export const datos_cmd = [
{ // JS: Objeto que representa una tarjeta individual
        categoria: "cmd", // JS: Propiedad para filtrar por categoría en el menú
        titulo: "Informe de Salud de la Batería", // JS: Título que aparecerá en la tarjeta
        imagen: "img/cmd/baterialap.jpg", // HTML/JS: Ruta del archivo de imagen para la tarjeta
        comando: "powercfg /batteryreport", // JS: Texto técnico del comando de Windows
        descripcion: "Genera un reporte HTML con ciclos de carga y capacidad real de la batería.", // JS: Resumen para la tarjeta
        contenidoTutorialHtml: `
            <h3>🔋 Diagnóstico de Energía Avanzado</h3>
            <p>Este comando crea un archivo HTML detallado que muestra el uso de la batería, su capacidad de fábrica y su capacidad actual.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Abrir Terminal como Administrador</h4>
                <p>Es necesario tener permisos elevados para acceder a los datos de hardware del sistema.</p>
                
                <h4>Paso 2: Generar el Reporte</h4>
                <p>Escribe el siguiente comando para que Windows cree el informe en tu carpeta de usuario:</p>
                
                <div class="contenedor-comando">
                    <code>powercfg /batteryreport</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Ver los Resultados</h4>
                <p>Windows te dará una ruta (ej: C:\\Users\\TuUsuario\\battery-report.html). Copia esa ruta y pégala en tu navegador para ver la gráfica de ciclos y salud.</p>
            </div>
            
            <p class="mt-15"><i>Nota: Este reporte es ideal para revisar el estado de una laptop usada antes de comprarla o venderla.</i></p>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=ociFoDkNLzI",
                plataforma: "youtube" // <--- NUEVO: Especifica la plataforma
            }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Consultar Dirección IP (ipconfig)",
        imagen: "img/cmd/ip.jpg",
        comando: "ipconfig",
        descripcion: "Identifica la dirección IP, máscara de subred y puerta de enlace de todos los adaptadores de red.",
        contenidoTutorialHtml: `
            <h3>🌐 Identificación de Red Local</h3>
            <p>Este comando es vital para verificar si tu configuración de IP estática se aplicó correctamente en tu red local.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Ejecución en CMD</h4>
                <p>Abre el Símbolo del Sistema y escribe el comando básico:</p>
                <div class="contenedor-comando">
                <code>ipconfig</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-search"></i> CLIC PARA VER CÓMO INTERPRETAR LOS DATOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <ul>
                            <li><strong>Dirección IPv4:</strong> Es el número de identificación de tu computadora en la red ej: <code>192.168.1.1</code></li>
                            <li><strong>Máscara de subred:</strong> Define el tamaño de la red (usualmente). <code>255.255.255.0</code></li>
                            <li><strong>Puerta de enlace:</strong> Es la dirección del router o equipo que provee internet.</li>
                        </ul>
                    </div>
                </details>

                <h4>Paso 2: Información Detallada (/all)</h4>
                <p>Si necesitas saber la <strong>Dirección Física (MAC)</strong> o los servidores DNS, usa la variante completa:</p>
                <div class="contenedor-comando">
                    <code>ipconfig /all</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
            <p class="mt-15"><i>Tip: Si el comando muestra "Medio desconectado", verifica que tu cable Ethernet esté bien conectado en ambos extremos.</i></p>
        `,
        links: [
            {
                texto: "Video tutorial",
                url: "https://www.youtube.com/shorts/aeXvAgZ1enI",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Guía Definitiva: Dominio Total de la Terminal",
        imagen: "img/cmd/cmd1.jpg",
        comando: "ls / dir / cls / cd / git",
        descripcion: "La navaja suiza definitiva. Navegación multiplataforma, gestión de archivos y trucos de productividad para la consola.",
        contenidoTutorialHtml: `
        <h3>🚀 Master Class: Comandos de Consola</h3>
        <p>Usa esta guía para moverte como un rayo. Recuerda: <strong>CMD</strong> es el clásico de Windows, pero <strong>PowerShell/Bash</strong> aceptan comandos de Linux.</p>

        <div class="tutorial-pasos">
            <h4 class="color-info"><i class="fas fa-broom"></i> 1. Limpieza y Navegación</h4>
            
            <p><strong>Limpiar Pantalla (cls):</strong> Borra todo el desorden para empezar de cero.</p>
            <div class="contenedor-comando">
                <code>cls</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Listar archivos (dir / ls):</strong></p>
            <div class="contenedor-comando">
                <code>dir</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>ls</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>Nota: ls es el estándar en Linux/Mac y funciona en la terminal de VS Code (PowerShell).</small></p>

            <p><strong>Moverte entre carpetas:</strong></p>
            <div class="contenedor-comando">
                <code>cd NombreCarpeta</code>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>cd ..</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>Tip: Usa <code>cd \</code> para volver al inicio del disco y <code>D:</code> para cambiar de disco duro.</small></p>

            <hr>

            <h4 class="color-exito"><i class="fas fa-folder-plus"></i> 2. Gestión de Archivos</h4>
            <div class="contenedor-comando">
                <code>mkdir Proyecto</code> 
                <span>(Crear carpeta)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>echo. > archivo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                <span>(Crear archivo vacío)</span>
            </div>

            <p><strong>Mover, Copiar y Renombrar:</strong></p>
            <div class="contenedor-comando">
                <code>copy file.txt backup\</code>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>move file.txt destino\</code>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>ren antiguo.txt nuevo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
           
            <h4 class="color-peligro"><i class="fas fa-trash-alt"></i> 2. Eliminación de Carpetas (rmdir)</h4>
            <p>¡Atención! Estos comandos son permanentes. Aprende sus variantes:</p>
            
                <p><strong>Eliminar (¡Sin Papelera!):</strong></p>
            <div class="contenedor-comando">
                <code>del archivo.txt</code>
            </div>

            <p><strong>A. Borrar carpeta vacía:</strong></p>
            <div class="contenedor-comando">
                <code>rmdir NombreCarpeta</code>
            </div>

            <p><strong>B. Borrar carpeta con archivos (Recursivo):</strong></p>
            <div class="contenedor-comando">
                <code>rmdir /s NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 El <strong>/s</strong> le dice a Git: "Borra la carpeta Y todo lo que tenga adentro". La PC te pedirá confirmación.</small></p>

            <p><strong>C. Borrar sin preguntar (Modo Silencioso):</strong></p>
            <div class="contenedor-comando">
                <code>rmdir /s /q NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>⚠️ El <strong>/q</strong> (Quiet) evita que la PC te pregunte "S/N". Úsalo solo si estás 100% seguro.</small></p>


            <hr>

            <h4 class="color-alerta"><i class="fas fa-search"></i> 3. Buscar e Inspeccionar</h4>
            <p><strong>Ver contenido sin abrir:</strong> <code>type archivo.txt</code> o <code>more archivo.txt</code></p>
            <p><strong>Buscar archivos:</strong> <code>dir /s nombre.txt</code> o <code>dir *.md</code></p>

            <hr>

            <h4 class="color-morado"><i class="fab fa-git-alt"></i> 4. Developer Flow</h4>
            <div class="contenedor-comando">
                <code>start .</code> <span>(Abrir en carpeta de Windows)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>code .</code> 
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <span>(Abrir en VS Code)</span>
            <p><strong>Status de Git:</strong> <code>git log --oneline</code> y <code>git diff</code></p>

            <hr>

            <h4 class="color-naranja"><i class="fas fa-bolt"></i> 5. Atajos y Trucos</h4>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>⌨️ <strong>TAB:</strong> Autocompleta nombres (úsalo SIEMPRE).</li>
                    <li>⬆️ / ⬇️: Repite comandos anteriores.</li>
                    <li>🛑 <strong>Ctrl + C:</strong> Detiene cualquier comando que se haya trabado.</li>
                    <li>🌳 <strong>tree /f:</strong> Dibuja el árbol de carpetas de tu proyecto.</li>
                    <li>📜 <strong>doskey /history:</strong> Lista de todo lo que has escrito.</li>
                    <li>🚪 <strong>exit:</strong> Cerrar la terminal.</li>
                </ul>
            </div>
        </div>
    `,
        links: [
            { texto: "Cheat Sheet Completa", url: "https://ss64.com/nt/" }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Guía Maestra: Terminal Linux (Bash)",
        imagen: "img/cmd/terminal.jpg",
        comando: "ls / cd / rm / sudo / chmod",
        descripcion: "Domina el estándar de los servidores y el desarrollo profesional. Comandos esenciales para navegar y gestionar sistemas basados en Unix.",
        contenidoTutorialHtml: `
        <h3>🐧 Master Class: Terminal Linux</h3>
        <p>En Linux, la terminal se llama <strong>Bash</strong> o <strong>Zsh</strong>. Casi todo se maneja con minúsculas y las opciones se activan con un guion <code>-</code>.</p>

        <div class="tutorial-pasos">
            <h4 class="color-info"><i class="fas fa-map-marker-alt"></i> 1. ¿Dónde estoy y qué hay?</h4>
            
            <p><strong>Saber ruta actual (pwd):</strong> Print Working Directory.</p>
            <div class="contenedor-comando">
                <code>pwd</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Listar con detalles (ls):</strong></p>
            <div class="contenedor-comando">
                <code>ls -l</code> <span>(Lista detallada: tamaño, fecha)</span>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>ls -a</code> <span>(Ver archivos ocultos como .git)</span>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Limpiar (clear):</strong> El equivalente a cls de Windows.</p>
            <div class="contenedor-comando">
                <code>clear</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-exito"><i class="fas fa-file-code"></i> 2. Crear y Manipular</h4>
            <p><strong>Crear archivo vacío (touch):</strong></p>
            <div class="contenedor-comando">
                <code>touch nuevo-archivo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <p><strong>Copiar (cp) y Mover/Renombrar (mv):</strong></p>
            <div class="contenedor-comando">
                <code>cp archivo.txt copia.txt</code>
            </div>
            <div class="contenedor-comando" class="mt-5">
                <code>mv viejo.txt nuevo.txt</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-peligro"><i class="fas fa-skull-crossbones"></i> 3. Eliminación (rm)</h4>
            <p>En Linux NO hay papelera. Si borras algo, desaparece para siempre.</p>
            
            <p><strong>A. Borrar archivo:</strong> <code>rm archivo.txt</code></p>
            
            <p><strong>B. Borrar carpeta (Recursivo -r):</strong></p>
            <div class="contenedor-comando">
                <code>rm -r NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 El <strong>-r</strong> permite entrar a la carpeta y borrar todo su contenido.</small></p>

            <p><strong>C. Borrado forzado (-f):</strong></p>
            <div class="contenedor-comando" style="border: 1px solid #e74c3c;">
                <code>rm -rf NombreCarpeta</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>⚠️ El <strong>-f</strong> significa "Force". No pide permiso ni confirma nada. <strong>Úsalo con extremo cuidado.</strong></small></p>

            <hr>

            <h4 class="color-alerta"><i class="fas fa-shield-alt"></i> 4. Permisos y Sudo</h4>
            <p><strong>Ejecutar como administrador (sudo):</strong> "SuperUser Do".</p>
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

            <h4 class="color-naranja"><i class="fas fa-info-circle"></i> 5. Atajos Maestros</h4>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>📖 <strong>man [comando]:</strong> Abre el manual. (Ej: <code>man ls</code>).</li>
                    <li>📜 <strong>history:</strong> Muestra todos los comandos que has escrito.</li>
                    <li>🔍 <strong>grep "texto" archivo:</strong> Busca una palabra dentro de un archivo.</li>
                    <li>⚡ <strong>Ctrl + L:</strong> Limpia la pantalla rápido (como clear).</li>
                    <li>📋 <strong>cat archivo:</strong> Muestra el contenido en pantalla rápido.</li>
                </ul>
            </div>
        </div>
    `,
        links: [
            { texto: "Linux Journey (Curso gratis)", url: "https://linuxjourney.com/" }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Mantenimiento y Reparación Completa",
        imagen: "img/cmd/sfc.jpg",
        comando: "sfc / DISM / chkdsk",
        descripcion: "Kit de herramientas esenciales para diagnosticar y solucionar errores lógicos, físicos y de arranque en Windows.",
        contenidoTutorialHtml: `
            <h3>🛠️ Protocolo de Reparación del Sistema</h3>
            <p>Sigue este orden lógico para solucionar desde errores leves hasta fallos críticos en el sistema operativo.</p>
            
            <div class="tutorial-pasos">
                <h4>Fase 1: Reparación de Archivos (SFC)</h4>
                <p>Escanea y reemplaza archivos dañados individualmente de forma rápida.</p>
                <div class="contenedor-comando">
                    <code>sfc /scannow</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                    <div class="links-seccion">
                        <a href="https://www.youtube.com/watch?v=OlLYiFcWG6g" target="_blank" class="btn-pro-link youtube" data-tooltip="Como REPARAR Windows de Archivos Dañados SFC /Scannow">
                            <i class="fab fa-youtube"></i> 
                            <span class="texto-btn-cortado">Video: Como REPARAR Windows de Archivos Dañados SFC /Scannow</span>
                        </a>
                    </div>

                <h4 class="mt-20">Fase 2: Reparación Profunda de Imagen (DISM)</h4>
                <p>Repara la base del sistema usando los servidores de Microsoft si SFC falla.</p>
                <div class="contenedor-comando">
                    <code>DISM /Online /Cleanup-Image /RestoreHealth</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial" style="margin-top: 15px; border-color: #3498db;">
                    <summary class="acordeon-header" style="background: #3498db;">
                        <i class="fas fa-clock"></i> ¿EL ESCANEO SE QUEDÓ TRABADO EN 62.3%?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si DISM no avanza, es probable que los servicios de actualización estén dormidos. Ejecuta estos comandos uno por uno:</p>
                        <div class="contenedor-comando">
                            <code>net start bits</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" class="mt-5">
                            <code>net start dosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" class="mt-5">
                            <code>net start usosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" class="mt-5">
                            <code>net start trustedinstaller</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" class="mt-5">
                            <code>net start wuauserv</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p class="mt-10"><small><i>Tip final: Si sigue sin moverse, intenta presionar la tecla <kbd>ESC</kbd> dos veces sobre la ventana de CMD para "despertar" el proceso.</i></small></p>
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/watch?v=1d3GCF8tZqk" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Solución Error 62.3%">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Solución Error 62.3%</span>
                            </a>
                        </div>                        
                    </div>                        
                </details>

                <h4 class="mt-20">Fase 3: Integridad del Disco (CHKDSK)</h4>
                <p>Corrige errores físicos en el disco duro o SSD. Requiere reiniciar el PC.</p>
                <div class="contenedor-comando">
                    <code>chkdsk C: /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                    <div class="links-seccion">
                        <a href="https://www.youtube.com/watch?v=-mjcLr3Q4yA" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Reparar Errores de Disco Duro, Unidades Físicas y Externas desde Cmd">
                            <i class="fab fa-youtube"></i> 
                            <span class="texto-btn-cortado">Video: Reparar Errores de Disco Duro, Unidades Físicas y Externas desde Cmd</span>
                        </a>
                    </div>                        
            </div>

            <div class="tutorial-pasos warning" style="border-left-color: #f39c12; background: rgba(243, 156, 18, 0.1); margin-top: 30px;">
                <h4 style="color: #e67e22; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i> REQUISITO PARA REPARAR ARRANQUE
                </h4>
                <p>El comando <strong>bootrec</strong> solo funciona desde el <strong>Entorno de Recuperación</strong>. No lo ejecutes en una sesión normal.</p>
                
                <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <strong>Cómo entrar:</strong>
                    <ol style="margin-top: 8px; font-size: 0.9rem;">
                        <li>Mantén presionada la tecla <kbd>Shift</kbd>.</li>
                        <li>Haz clic en <strong>Inicio > Inicio/Apagado > Reiniciar</strong>.</li>
                        <li>Navega a: <strong>Solucionar problemas > Opciones avanzadas > Símbolo del sistema</strong>.</li>
                    </ol>
                </div>
                
                <div class="contenedor-comando" class="mt-15">
                    <code>bootrec /fixmbr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                    <div class="links-seccion">
                        <a href="https://www.youtube.com/watch?v=KzCcvFdS0rE" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: BOOTREC FIXBOOT Element Not Found - Windows Error Fixed">
                            <i class="fab fa-youtube"></i> 
                            <span class="texto-btn-cortado">Video: BOOTREC FIXBOOT Element Not Found - Windows Error Fixed</span>
                        </a>
                    </div>                       
            </div>

            <details class="acordeon-tutorial" class="mt-20">
                <summary class="acordeon-header">
                    <i class="fas fa-network-wired"></i> LIMPIEZA DE CONEXIÓN (DNS)
                </summary>
                <div class="tutorial-pasos warning">
                    <p>Úsalo si el internet funciona pero algunas páginas no cargan correctamente.</p>
                    <div class="contenedor-comando">
                        <code>ipconfig /flushdns</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    <div class="links-seccion">
                        <a href="https://www.youtube.com/watch?v=ld-qI9qWt70" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Como Vaciar La Caché De DNS En Windows 10 / 11">
                            <i class="fab fa-youtube"></i> 
                            <span class="texto-btn-cortado">Video: Como Vaciar La Caché De DNS En Windows 10 / 11</span>
                        </a>
                    </div>                       
                </div>
                      
            </details>
        `,
        links: [
            {
                texto: "Soporte Oficial Microsoft",
                url: "https://support.microsoft.com/es-es/topic/use-la-herramienta-comprobador-de-archivos-de-sistema-para-reparar-los-archivos-de-sistema-que-faltan-o-est%C3%A1n-da%C3%B1ados-79aa86cb-ca52-166a-92a3-966e85d4094e"
            }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Gestión de Software (Winget)",
        imagen: "img/cmd/actualizar.jpg",
        comando: "winget upgrade / download",
        descripcion: "Utiliza el gestor oficial de Windows para instalar, actualizar y descargar aplicaciones de forma masiva.",
        contenidoTutorialHtml: `
            <h3>🆙 Actualizaciones y Paquetes</h3>
            <p>Manten tus programas al día sin navegar por múltiples sitios web.</p>
            
            <div class="tutorial-pasos">
                <p><strong>1. Ver lista de actualizaciones disponibles:</strong></p>
                <div class="contenedor-comando">
                    <code>winget upgrade</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>2. Actualizar un solo programa (ID):</strong></p>
                <div class="contenedor-comando">
                    <code>winget upgrade Google.Chrome</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>3. Actualizar TODO el sistema:</strong></p>
                <div class="contenedor-comando">
                    <code>winget upgrade --all</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>4. Descarga Offline (sin instalar):</strong></p>
                <div class="contenedor-comando">
                    <code>winget download --id VideoLAN.VLC</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Estrategias con Robocopy",
        imagen: "img/cmd/robocopy.jpg",
        comando: "robocopy [origen] [destino] [opciones]",
        descripcion: "Guía avanzada para transferencias seguras, desde pocos archivos personales hasta migraciones masivas de servidores.",
        contenidoTutorialHtml: `
            <h3>🛡️ Guía de Transferencia Segura</h3>
            <p>Selecciona el comando según el volumen de datos y la estabilidad de tu conexión.</p>

            <details class="acordeon-tutorial" class="mt-20">
                    <summary class="acordeon-header">
                        <i class="fas fa-shield-alt"></i> TABLA DE PARAMETROS ESENCIALES
                    </summary>
                    <div class="tutorial-pasos">
                    <h4>Tabla</h4>
                    <table class="tabla-tecnica" class="tabla-base">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--primary); text-align: left;">
                                <th class="p-10">Comando</th>
                                <th class="p-10">Función</th>
                                <th class="p-10">Cuándo usarlo</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/E</code></td>
                                <td class="p-10">Copia subdirectorios.</td>
                                <td class="p-10">Siempre que quieras mantener la estructura de carpetas.</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/Z</code></td>
                                <td class="p-10">Modo reiniciable.</td>
                                <td class="p-10">Crucial para copias por Wi-Fi o redes inestables.</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/MT:32</code></td>
                                <td class="p-10">Multihilo (Multi-thread).</td>
                                <td class="p-10">Para aumentar la velocidad (usa 32 núcleos a la vez).</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/R:3 /W:5</code></td>
                                <td class="p-10">Reintentos y Espera.</td>
                                <td class="p-10">Si un archivo está bloqueado, reintenta 3 veces cada 5 seg.</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/ZB</code></td>
                                <td class="p-10">Reiniciable + Backup.</td>
                                <td class="p-10">Si falla por permisos, usa modo respaldo.</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/NFL</code></td>
                                <td class="p-10">Ocultar archivos.</td>
                                <td class="p-10">Copiado más rápido y pantalla limpia.</td>
                            </tr>
                            <tr class="borde-glass">
                                <td class="p-10"><code>/NDL</code></td>
                                <td class="p-10">Ocultar carpetas.</td>
                                <td class="p-10">Evita saturar la terminal con nombres.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass); color: #e74c3c;">
                                <td class="p-10"><code>/MIR</code></td>
                                <td class="p-10">Modo Espejo (Mirror).</td>
                                <td class="p-10"><strong>⚠️ Cuidado:</strong> Borra en destino lo que no esté en origen.</td>
                            </tr>
                        </tbody>
                    </table>
                </details>
            
            <div class="tutorial-pasos">
                
                <h4>1. Copiado de Precisión (Pocos archivos / Carpetas personales)</h4>
                <p>Ideal para ver qué está pasando en tiempo real. Usa este comando cuando quieras confirmar visualmente que cada archivo se copió bien.</p>
                <div class="contenedor-comando">
                    <code>robocopy "C:\\Origen" "D:\\Destino" /E /Z /ZB /R:5 /W:5 /MT:16</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Uso: Respaldos de documentos o fotos donde el registro visual en pantalla es útil.</i></small></p>

                <h4 class="mt-20">2. Copiado Masivo y Veloz (Miles de archivos / Discos completos)</h4>
                <p>Optimizado para rendimiento. Oculta la lista de archivos para ahorrar ciclos del procesador y acelerar el copiado hasta un 20%.</p>
                <div class="contenedor-comando">
                    <code>robocopy "C:\\Origen" "D:\\Destino" /E /ZB /NFL /NDL /R:5 /W:5 /MT:32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Uso: Migración de discos duros o servidores donde mostrar nombres en pantalla ralentizaría el proceso.</i></small></p>

                <div class="tutorial-pasos warning" style="border-left-color: #e74c3c; background: rgba(231, 76, 60, 0.1); margin-top: 25px;">
                    <h4 class="color-peligro"><i class="fas fa-exclamation-circle"></i> PELIGRO: EL MODO ESPEJO (/MIR)</h4>
                    <p>El parámetro <code>/MIR</code> no solo copia; también <strong>ELIMINA</strong>. Si un archivo existe en el Destino pero no en el Origen, Robocopy lo borrará permanentemente para que ambas carpetas sean idénticas.</p>
                    <p><strong>Regla de oro:</strong> Úsalo solo para sincronizaciones, nunca para respaldos incrementales simples.</p>
                </div>
            </div>

            <details class="acordeon-tutorial" class="mt-20">
                <summary class="acordeon-header">
                    <i class="fas fa-shield-alt"></i> LA OPCIÓN MÁS CONFIABLE (COMBO DEFINITIVO)
                </summary>
                <div class="tutorial-pasos">
                    <p>Si necesitas la máxima seguridad posible, este es el comando "A prueba de fallos":</p>
                    <div class="contenedor-comando">
                        <code>robocopy "C:\\Origen" "D:\\Destino" /E /ZB /COPYALL /R:10 /W:10 /LOG:log_respaldo.txt</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    <ul>
                        <li><strong>/COPYALL:</strong> Copia todo (datos, fechas, atributos y permisos NTFS).</li>
                        <li><strong>/LOG:</strong> No muestra nada en pantalla, pero guarda un informe detallado en un archivo .txt.</li>
                    </ul>
                </div>
            </details>
        `,
        links: [
            { texto: "Manual de Flags Microsoft", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy" },
            { texto: "Video Tutorial", url: "https://www.facebook.com/reel/1214941197231206", plataforma: "facebook" }
        ],
        pasos: []
    },
{
        categoria: "cmd",
        titulo: "Ver Clave de WiFi Guardada",
        imagen: "img/cmd/wifi-pass.jpg",
        comando: "netsh wlan show profile",
        descripcion: "Recupera la contraseña de cualquier red WiFi a la que te hayas conectado anteriormente usando la terminal.",
        contenidoTutorialHtml: `
            <h3>🔑 Recuperar Contraseñas WiFi</h3>
            <p>Si olvidaste la clave de tu red, puedes verla con este comando en el CMD:</p>
            
            <div class="tutorial-pasos">
                <h4>Pasos a seguir:</h4>
                <ol>
                    <li>Abre el CMD como administrador.</li>
                    <li>Escribe
                    <div class="contenedor-comando">
                        <code>netsh wlan show profile</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    para ver los nombres de las redes.</li>
                    <li>Luego escribe: 
                    <div class="contenedor-comando">
                        <code>netsh wlan show profile name="NOMBRE_RED" key=clear</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    </li>
                </ol>
                <p>Busca en la sección <strong>"Contenido de la clave"</strong>; ahí aparecerá tu contraseña.</p>
            </div>
        `,
        links: [],
        pasos: []
    },
    //CATEGORIA ATAJOS
];
