
// =====================================================
// DATOS: Aquí se almacena toda la información de las tarjetas
// =====================================================
// Array principal que contiene objetos. Cada objeto es una "tarjeta".
export const misNotas = [
    //CATEGORIA DE CMD
    
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
            
            <p style="margin-top: 15px;"><i>Nota: Este reporte es ideal para revisar el estado de una laptop usada antes de comprarla o venderla.</i></p>
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

                <h4 style="margin-top:20px;">Fase 2: Reparación Profunda de Imagen (DISM)</h4>
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
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start dosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start usosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start trustedinstaller</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start wuauserv</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p style="margin-top: 10px;"><small><i>Tip final: Si sigue sin moverse, intenta presionar la tecla <kbd>ESC</kbd> dos veces sobre la ventana de CMD para "despertar" el proceso.</i></small></p>
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/watch?v=1d3GCF8tZqk" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Solución Error 62.3%">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Solución Error 62.3%</span>
                            </a>
                        </div>                        
                    </div>                        
                </details>

                <h4 style="margin-top:20px;">Fase 3: Integridad del Disco (CHKDSK)</h4>
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
                
                <div class="contenedor-comando" style="margin-top: 15px;">
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

            <details class="acordeon-tutorial" style="margin-top: 20px;">
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

                <h4 style="margin-top:20px;">Fase 2: Reparación Profunda de Imagen (DISM)</h4>
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
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start dosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start usosvc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start trustedinstaller</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="contenedor-comando" style="margin-top: 5px;">
                            <code>net start wuauserv</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p style="margin-top: 10px;"><small><i>Tip final: Si sigue sin moverse, intenta presionar la tecla <kbd>ESC</kbd> dos veces sobre la ventana de CMD para "despertar" el proceso.</i></small></p>
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/watch?v=1d3GCF8tZqk" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Solución Error 62.3%">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Solución Error 62.3%</span>
                            </a>
                        </div>                        
                    </div>                        
                </details>

                <h4 style="margin-top:20px;">Fase 3: Integridad del Disco (CHKDSK)</h4>
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
                
                <div class="contenedor-comando" style="margin-top: 15px;">
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

            <details class="acordeon-tutorial" style="margin-top: 20px;">
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
            <p style="margin-top: 15px;"><i>Tip: Si el comando muestra "Medio desconectado", verifica que tu cable Ethernet esté bien conectado en ambos extremos.</i></p>
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
        titulo: "Exploración y Navegación en CMD",
        imagen: "img/cmd/cmd1.jpg",
        comando: "cd / dir / cls",
        descripcion: "Comandos fundamentales para moverte entre directorios, listar contenidos y mantener limpia la consola.",
        contenidoTutorialHtml: `
            <h3>📂 Navegación de Directorios</h3>
            <p>Domina el movimiento fluido por las carpetas del sistema.</p>
            
            <div class="tutorial-pasos">
                <p><strong>Listar archivos (dir):</strong> Muestra el contenido de la carpeta actual.</p>
                <div class="contenedor-comando">
                    <code>dir /p</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>Tip: <code>/p</code> detiene la lista si es muy larga.</small></p>

                <p><strong>Cambiar carpeta (cd):</strong></p>
                <div class="contenedor-comando">
                    <code>cd Descargas</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando" style="margin-top:5px;">
                    <code>cd ..</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>Tip: <code>cd ..</code> te regresa un nivel atrás.</small></p>

                <p><strong>Limpiar pantalla (cls):</strong> Borra todo el texto acumulado.</p>
                <div class="contenedor-comando">
                    <code>cls</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Video Tutorial", url: "https://www.youtube.com/watch?v=erKosEQaaFc&t=909s", plataforma: "youtube" }],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Administración de Carpetas y Archivos",
        imagen: "img/cmd/archivos2.jpg",
        comando: "mkdir / rmdir / copy / del",
        descripcion: "Gestión completa de la estructura del disco: crear, duplicar, renombrar y eliminar archivos o directorios.",
        contenidoTutorialHtml: `
            <h3>🛠️ Gestión de Estructuras</h3>
            <p>Comandos para organizar y limpiar tus datos desde la terminal.</p>
            
            <div class="tutorial-pasos">
                <h4>Fase A: Carpetas (Directorios)</h4>
                <p><strong>Crear (mkdir):</strong> Usa comillas si el nombre lleva espacios.</p>
                <div class="contenedor-comando">
                    <code>mkdir "Nueva Carpeta 2024"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Borrar (rmdir):</strong></p>
                <div class="contenedor-comando">
                    <code>rmdir /s /q NombreCarpeta</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div style="background: rgba(231, 76, 60, 0.1); padding: 10px; border-radius: 6px; margin-top: 5px; border-left: 3px solid #e74c3c;">
                    <ul style="font-size: 0.8rem; list-style: none; padding: 0;">
                        <li><strong>/s</strong> : Borra la carpeta y todo su contenido.</li>
                        <li><strong>/q</strong> : Modo silencioso (sin confirmación).</li>
                    </ul>
                </div>

                <h4 style="margin-top:20px;">Fase B: Archivos</h4>
                <p><strong>Duplicar (copy) / Renombrar (ren):</strong></p>
                <div class="contenedor-comando">
                    <code>copy nota.txt C:\\Backup</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <details class="acordeon-tutorial" style="margin-top: 15px; border-color: #e74c3c;">
                    <summary class="acordeon-header" style="background: #e74c3c;"><i class="fas fa-trash"></i> BORRADO CON COMODINES (*)</summary>
                    <div class="tutorial-pasos warning">
                        <p>Elimina todos los archivos de un tipo (ej: imágenes JPG):</p>
                        <div class="contenedor-comando">
                            <code>del *.jpg</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
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

            <details class="acordeon-tutorial" style="margin-top: 20px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-shield-alt"></i> TABLA DE PARAMETROS ESENCIALES
                    </summary>
                    <div class="tutorial-pasos">
                    <h4>Tabla</h4>
                    <table class="tabla-tecnica" style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9rem;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--primary); text-align: left;">
                                <th style="padding: 10px;">Comando</th>
                                <th style="padding: 10px;">Función</th>
                                <th style="padding: 10px;">Cuándo usarlo</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/E</code></td>
                                <td style="padding: 10px;">Copia subdirectorios.</td>
                                <td style="padding: 10px;">Siempre que quieras mantener la estructura de carpetas.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/Z</code></td>
                                <td style="padding: 10px;">Modo reiniciable.</td>
                                <td style="padding: 10px;">Crucial para copias por Wi-Fi o redes inestables.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/MT:32</code></td>
                                <td style="padding: 10px;">Multihilo (Multi-thread).</td>
                                <td style="padding: 10px;">Para aumentar la velocidad (usa 32 núcleos a la vez).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/R:3 /W:5</code></td>
                                <td style="padding: 10px;">Reintentos y Espera.</td>
                                <td style="padding: 10px;">Si un archivo está bloqueado, reintenta 3 veces cada 5 seg.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/ZB</code></td>
                                <td style="padding: 10px;">Reiniciable + Backup.</td>
                                <td style="padding: 10px;">Si falla por permisos, usa modo respaldo.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/NFL</code></td>
                                <td style="padding: 10px;">Ocultar archivos.</td>
                                <td style="padding: 10px;">Copiado más rápido y pantalla limpia.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass);">
                                <td style="padding: 10px;"><code>/NDL</code></td>
                                <td style="padding: 10px;">Ocultar carpetas.</td>
                                <td style="padding: 10px;">Evita saturar la terminal con nombres.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-glass); color: #e74c3c;">
                                <td style="padding: 10px;"><code>/MIR</code></td>
                                <td style="padding: 10px;">Modo Espejo (Mirror).</td>
                                <td style="padding: 10px;"><strong>⚠️ Cuidado:</strong> Borra en destino lo que no esté en origen.</td>
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

                <h4 style="margin-top:20px;">2. Copiado Masivo y Veloz (Miles de archivos / Discos completos)</h4>
                <p>Optimizado para rendimiento. Oculta la lista de archivos para ahorrar ciclos del procesador y acelerar el copiado hasta un 20%.</p>
                <div class="contenedor-comando">
                    <code>robocopy "C:\\Origen" "D:\\Destino" /E /ZB /NFL /NDL /R:5 /W:5 /MT:32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Uso: Migración de discos duros o servidores donde mostrar nombres en pantalla ralentizaría el proceso.</i></small></p>

                <div class="tutorial-pasos warning" style="border-left-color: #e74c3c; background: rgba(231, 76, 60, 0.1); margin-top: 25px;">
                    <h4 style="color: #c0392b;"><i class="fas fa-exclamation-circle"></i> PELIGRO: EL MODO ESPEJO (/MIR)</h4>
                    <p>El parámetro <code>/MIR</code> no solo copia; también <strong>ELIMINA</strong>. Si un archivo existe en el Destino pero no en el Origen, Robocopy lo borrará permanentemente para que ambas carpetas sean idénticas.</p>
                    <p><strong>Regla de oro:</strong> Úsalo solo para sincronizaciones, nunca para respaldos incrementales simples.</p>
                </div>
            </div>

            <details class="acordeon-tutorial" style="margin-top: 20px;">
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
    //CATEGORIA ATAJOS
    {
        categoria: "atajos",
        titulo: "Script de Consola: Administrador Pro",
        imagen: "img/atajos/toptal.jpg",
        comando: ".BAT Script",
        descripcion: "Menú interactivo para herramientas de Windows. Ahora con vista contraíble.",
        contenidoTutorialHtml: `
            <h3>🔧 Consola de Administración Rápida</h3>
            <p>Este script agrupa herramientas vitales de red y sistema en un solo menú.</p>
            
            <div class="tutorial-pasos">
            <h4>Paso 1: Instrucciones</h4>
            <p>Copia el código y guárdalo como 
            
            <div class="contenedor-comando">
                <code>Menu_Sistemas.bat</code></p>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-code"></i> CLIC PARA MOSTRAR EL CÓDIGO
                    </summary>
                    <div class="contenedor-comando" style="margin: 0;">
<pre class="codigo-consola">
@echo off
title Central de Ingenieria - Menu de Atajos
:inicio
cls
echo ============================================
echo      CENTRAL DE INGENIERIA - ATAJOS PRO
echo ============================================
echo [1] Informacion del Sistema (msinfo32)
echo [2] Conexiones de Red (ncpa.cpl)
echo [3] Propiedades del Sistema (Nombre/Grupo)
echo [4] Desinstalar Programas (appwiz.cpl)
echo [5] Administrador de Servicios (services.msc)
echo [6] Administrador de Tareas (taskmgr)
echo [7] Administrador de Discos (diskmgmt.msc)
echo [8] Herramientas de Diagnostico DirectX
echo [9] Abrir Panel de Control Clasico
echo [10] Editor del Registro (regedit)
echo [11] Salir
echo ============================================
set /p opcion=Selecciona una herramienta (1-11): 

if %opcion%==1 start msinfo32
if %opcion%==2 start ncpa.cpl
if %opcion%==3 start sysdm.cpl
if %opcion%==4 start appwiz.cpl
if %opcion%==5 start services.msc
if %opcion%==6 start taskmgr
if %opcion%==7 start diskmgmt.msc
if %opcion%==8 start dxdiag
if %opcion%==9 start control
if %opcion%==10 start regedit
if %opcion%==11 exit

goto inicio
    </pre>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)">
                            <i class="fas fa-copy"></i> Copiar Script
                        </button>
                    </div>
                </details>

                <div class="links-seccion">
                    <a href="https://drive.google.com/file/d/1kx9-V82F8wJrqUhRj9_c15cAvNkc242k/view?usp=drive_link" target="_blank" class="btn-pro-link google" data-tooltip="Descargar Archivo">
                        <i class="fab fa-google"></i> 
                        <span class="texto-btn-cortado">Descargar Archivo</span>
                    </a>
                </div>

                <h4>Paso 2: Ejecución</h4>
                <p>Haz clic derecho y selecciona <strong>Ejecutar como administrador</strong> para habilitar todas las funciones.</p>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Información y Diagnóstico del Sistema",
        imagen: "img/atajos/prueba.jpg",
        comando: "winver / msinfo32 / dxdiag / msconfig",
        descripcion: "Herramientas integrales para verificar la versión de Windows, detalles de hardware, diagnóstico de gráficos y configuración de arranque.",
        contenidoTutorialHtml: `
            <h3>💻 Auditoría de Sistema</h3>
            <div class="tutorial-pasos">
                <p><strong>Versión de Windows (winver):</strong> Verifica la compilación exacta del sistema.</p>
                <div class="contenedor-comando">
                    <code>winver</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Información Detallada (msinfo32):</strong> Todo sobre placa base, BIOS y RAM.</p>
                <div class="contenedor-comando">
                    <code>msinfo32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header"><i class="fas fa-microchip"></i> DIAGNÓSTICO AVANZADO</summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>DirectX Diagnostic (dxdiag):</strong> Reporte de video y sonido.</p>
                        <div class="contenedor-comando">
                            <code>dxdiag</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p><strong>System Config (msconfig):</strong> Gestiona el inicio y el <strong>Modo Seguro</strong>.</p>
                        <div class="contenedor-comando">
                            <code>msconfig</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Administración de Hardware y Discos",
        imagen: "img/atajos/discod.jpg",
        comando: "devmgmt.msc / diskmgmt.msc / cleanmgr",
        descripcion: "Gestión técnica de controladores de dispositivos, volúmenes de disco y limpieza de archivos temporales de sistema.",
        contenidoTutorialHtml: `
            <h3>🛠️ Controladores y Almacenamiento</h3>
            <div class="tutorial-pasos">
                <p><strong>Administrador de Dispositivos:</strong> Gestiona drivers y fallos de hardware.</p>
                <div class="contenedor-comando">
                    <code>devmgmt.msc</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Administrador de Discos:</strong> Formatear, particionar y cambiar letras de unidad.</p>
                <div class="contenedor-comando">
                    <code>diskmgmt.msc</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Liberador de Espacio (cleanmgr):</strong> Limpia archivos basura del sistema.</p>
                <div class="contenedor-comando">
                    <code>cleanmgr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Identidad, Usuarios y Aplicaciones",
        imagen: "img/atajos/usuarios.jpg",
        comando: "sysdm.cpl / netplwiz / appwiz.cpl",
        descripcion: "Configura el nombre del equipo, gestiona cuentas de usuario locales y administra programas instalados.",
        contenidoTutorialHtml: `
            <h3>👤 Gestión de Identidad</h3>
            <div class="tutorial-pasos">
                <p><strong>Propiedades del Sistema:</strong> Cambia el nombre del equipo y Grupo de Trabajo.</p>
                <div class="contenedor-comando">
                    <code>sysdm.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Cuentas de Usuario (netplwiz):</strong> Gestiona contraseñas y permisos de usuario.</p>
                <div class="contenedor-comando">
                    <code>control userpasswords2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header"><i class="fas fa-th-list"></i> GESTIÓN DE SOFTWARE</summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Programas y Características:</strong> Desinstalación clásica de aplicaciones.</p>
                        <div class="contenedor-comando">
                            <code>appwiz.cpl</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p><strong>Programas Predeterminados:</strong> Configura qué app abre cada archivo.</p>
                        <div class="contenedor-comando">
                            <code>computerdefaults</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Herramientas de Soporte y Accesibilidad",
        imagen: "img/atajos/service-desk.jpg",
        comando: "PSR / OSK / \\",
        descripcion: "Recursos para asistencia técnica remota, teclado virtual y acceso instantáneo al disco raíz.",
        contenidoTutorialHtml: `
            <h3>🆘 Asistencia y Accesibilidad</h3>
            <div class="tutorial-pasos">
                <p><strong>Grabadora de Pasos (PSR):</strong> Crea un reporte visual de un error para soporte técnico.</p>
                <div class="contenedor-comando">
                    <code>psr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Teclado en Pantalla (OSK):</strong> Utilidad de accesibilidad o para fallos de teclado físico.</p>
                <div class="contenedor-comando">
                    <code>osk</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Acceso Raíz:</strong> Abre el explorador directamente en la unidad C:.</p>
                <div class="contenedor-comando">
                    <code>\\</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Panel de Control Rápido (Tiempo y Energía)",
        imagen: "img/atajos/energia.jpg",
        comando: "timedate.cpl / powercfg.cpl",
        descripcion: "Configuración inmediata de la fecha, hora del sistema y planes de ahorro de energía.",
        contenidoTutorialHtml: `
            <h3>🕙 Reloj y Energía</h3>
            <div class="tutorial-pasos">
                <p><strong>Fecha y Hora:</strong> Ajusta la zona horaria y sincronización de red.</p>
                <div class="contenedor-comando">
                    <code>timedate.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Planes de Energía:</strong> Cambia entre Alto Rendimiento o Ahorro de Energía.</p>
                <div class="contenedor-comando">
                    <code>powercfg.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },

    //CATEGORIA DE BASICOS
    {
        categoria: "basicos",
        titulo: "Google Chrome",
        /* URL de ejemplo (puedes cambiarla por tu propia imagen) */
        imagen: "img/basicos/googleblue.jpg",
        comando: "https://www.google.com/intl/es-419/chrome/",
        descripcion: "El navegador más utilizado, diseñado para ofrecer velocidad y sincronización total con servicios de Google.",
        contenidoTutorialHtml: `
            <h3>🌐 Instalador de Google Chrome</h3>
            <p>Chrome es la base para la mayoría de las herramientas web de ingeniería actuales.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga directa:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.google.com/intl/es-419/chrome/" target="_blank" class="link-comando">https://www.google.com/intl/es-419/chrome/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Técnico:</strong> Si necesitas instalarlo en varias PC sin internet, busca el "Chrome Standalone Installer" para descargar el paquete completo de ~100MB.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Chrome", url: "https://www.google.com/intl/es-419/chrome/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Mozilla Firefox",
        imagen: "img/basicos/Firefox.jpg",
        comando: "https://www.mozilla.org/es-ES/firefox/new/",
        descripcion: "Navegador de código abierto centrado en la privacidad y la personalización avanzada.",
        contenidoTutorialHtml: `
            <h3>🦊 Navegador Mozilla Firefox</h3>
            <p>Ideal para ingenieros que necesitan herramientas de desarrollo web potentes y un control estricto sobre el rastreo de datos.</p>
            
            <div class="tutorial-pasos">
                <h4>Obtener instalador:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.mozilla.org/es-ES/firefox/new/" target="_blank" class="link-comando">https://www.mozilla.org/es-ES/firefox/new/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Ventaja:</strong> Su motor de renderizado es independiente de Chromium, lo que lo hace una excelente alternativa de prueba.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Firefox", url: "https://www.mozilla.org/es-ES/firefox/new/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Microsoft Edge",
        imagen: "img/basicos/Microsoft-Edge.jpg",
        comando: "https://www.microsoft.com/es-es/edge",
        descripcion: "Navegador oficial de Windows basado en Chromium, optimizado para el ahorro de batería y memoria RAM.",
        contenidoTutorialHtml: `
            <h3>🌏 Microsoft Edge (Chromium)</h3>
            <p>La mejor opción si trabajas en Windows 10/11, ya que consume menos recursos que Chrome al estar integrado al sistema.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.microsoft.com/es-es/edge" target="_blank" class="link-comando">https://www.microsoft.com/es-es/edge</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Tip:</strong> Puedes instalar cualquier extensión de la Chrome Web Store directamente en Edge.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Edge", url: "https://www.microsoft.com/es-es/edge" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Java Runtime",
        imagen: "img/basicos/java.jpg",
        comando: "https://www.java.com/es/download/manual.jsp",
        descripcion: "Entorno indispensable para ejecutar aplicaciones y sistemas contables o de ingeniería antiguos.",
        contenidoTutorialHtml: `
            <h3>☕ Instalación de Java (Manual)</h3>
            <p>Para asegurar una instalación estable, evita el instalador web y usa las versiones <strong>Fuera de línea</strong>.</p>
            
            <div class="tutorial-pasos">
                <h4>1. Identificar versiones:</h4>
                <ul>
                    <li><strong>Windows Fuera de línea:</strong> Para apps de 32 bits.</li>
                    <li><strong>Windows Fuera de línea (64 bits):</strong> Para apps modernas.</li>
                </ul>

                <h4>2. Instalación Correcta:</h4>
                <p>Si no sabes cuál necesitas, instala ambas en este orden:</p>
                <ul>
                    <li>Ejecuta el de 32 bits (normal).</li>
                    <li>Ejecuta el de 64 bits.</li>
                </ul>
            </div>
        `,
        links: [
            { texto: "Descarga Manual Java", url: "https://www.java.com/es/download/manual.jsp" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Adobe Acrobat Reader",
        imagen: "img/basicos/adobe.jpg",
        comando: "https://get.adobe.com/es/reader/",
        descripcion: "El estándar para visualizar, imprimir y firmar documentos PDF de forma profesional.",
        contenidoTutorialHtml: `
            <h3>📄 Instalación Limpia de Adobe Reader</h3>
            <p>¡Cuidado! El sitio oficial intenta instalar software no deseado por defecto.</p>
            
            <div class="tutorial-pasos" style="background: rgba(226, 230, 37, 0.1); border-left-color: #ee8019;">
                <h4>⚠️ ATENCIÓN ANTES DE DESCARGAR</h4>
                <p>Debes <strong>desmarcar</strong> estas casillas en la web de Adobe:</p>
                <ul>
                    <li>Instalar McAfee Security Scan</li>
                    <li>Instalar Adobe Express</li>
                </ul>
            </div>
            
            <div class="contenedor-comando" style="margin-top: 15px;">
                <code>
                   <a href="https://www.microsoft.com/es-es/edge" target="_blank" class="link-comando">https://www.microsoft.com/es-es/edge</a> 
                </code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Link
                </button>
            </div>
        `,
        links: [
            { texto: "Sitio Oficial Adobe", url: "https://get.adobe.com/es/reader/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "K-Lite Codec Pack",
        imagen: "img/basicos/K-Lite-Codec.jpg",
        comando: "https://www.codecguide.com/download_kl.htm",
        descripcion: "Permite que tu PC reproduzca cualquier formato de video (MKV, MOV, FLV) sin errores.",
        contenidoTutorialHtml: `
            <h3>🎬 Codecs de Video Universales</h3>
            <p>K-Lite repara los problemas de 'Formato no soportado' en el Reproductor de Windows Media.</p>
            
            <div class="tutorial-pasos">
                <h4>Recomendación:</h4>
                <p>Descarga la versión <strong>"Basic"</strong> o <strong>"Standard"</strong>. Son suficientes para el 99% de los usuarios.</p>
                
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.codecguide.com/download_kl.htm" target="_blank" class="link-comando">https://www.codecguide.com/download_kl.htm</a> 
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Descargar K-Lite", url: "https://www.codecguide.com/download_kl.htm" }
        ],
        pasos: []
    },

    //CATEGORIA PROGRAMAS
    {
        categoria: "programas",
        titulo: "Programas Virtuales PC",
        imagen: "img/programas/programas1.jpg",
        comando: "https://www.programasvirtualespc.net/",
        descripcion: "Biblioteca extensa de software, juegos y utilidades para Windows.",
        contenidoTutorialHtml: `
            <h3>📦 Repositorio de Software Pro</h3>
            <p>Uno de los sitios más confiables para descargar herramientas técnicas y programas de ingeniería.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <p>Copia esta clave para extraer los archivos descargados:</p>
                <div class="contenedor-comando">
                    <code>www.programasvirtualespc.net</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.programasvirtualespc.net/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Descarga.xyz",
        imagen: "img/programas/programas2.jpg",
        comando: "https://www.descarga.xyz/",
        descripcion: "Portal de descargas directas con una interfaz limpia y organizada.",
        contenidoTutorialHtml: `
            <h3>💾 Descargas Directas</h3>
            <p>Ideal para encontrar versiones específicas de programas populares con instaladores limpios.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.descarga.xyz</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.descarga.xyz/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Programas Dixguel",
        imagen: "img/programas/programas3.jpg",
        comando: "http://programasdixguel.blogspot.com/",
        descripcion: "Blog especializado en software portable y herramientas de mantenimiento.",
        contenidoTutorialHtml: `
            <h3>🛠️ Utilidades y Portables</h3>
            <p>Excelente fuente para herramientas que no requieren instalación, ideales para técnicos de soporte.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>programasdixguel.blogspot.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "http://programasdixguel.blogspot.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "AwDescargas",
        imagen: "img/programas/programas4.jpg",
        comando: "https://awdescargas.com/",
        descripcion: "Sitio web con gran variedad de sistemas operativos y software técnico.",
        contenidoTutorialHtml: `
            <h3>💿 Sistemas y Software Técnico</h3>
            <p>Un recurso valioso para encontrar imágenes ISO y suites completas de programas de diseño.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>awdescargas.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://awdescargas.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Tecno Programas",
        imagen: "img/programas/programas5.jpg",
        comando: "https://tecnoprogramas.com/",
        descripcion: "Guías y descargas de programas para optimización y personalización de PC.",
        contenidoTutorialHtml: `
            <h3>⚙️ Optimización y Herramientas</h3>
            <p>Encuentra las últimas versiones de software para mejorar el rendimiento de tu sistema operativo.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.tecnoprogramas.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://tecnoprogramas.com/" }
        ],
        pasos: []
    },    
    {
        categoria: "programas",
        titulo: "Yelitzon PC",
        imagen: "img/programas/programas6.jpg",
        comando: "https://www.yelitzonpc.com/",
        descripcion: "Canal y sitio web con tutoriales de instalación paso a paso.",
        contenidoTutorialHtml: `
            <h3>🎥 Tutoriales e Instaladores</h3>
            <p>Recurso complementado con guías visuales para asegurar una instalación correcta de cada programa.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.yelitzonpc.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.yelitzonpc.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Programasfully",
        imagen: "img/programas/programas7.jpg",
        comando: "https://programasfully.com/",
        descripcion: "Portal alternativo para la descarga de software variado y utilidades.",
        contenidoTutorialHtml: `
            <h3>📁 Repositorio Alternativo</h3>
            <p>Una base de datos constante de software actualizado para diversas necesidades técnicas.</p>
            
            <div class="tutorial-pasos">
                <p><strong>Nota:</strong> Este sitio usualmente no requiere contraseña, pero verifica siempre la descripción de la descarga.</p>
                <div class="contenedor-comando">
                    <code>Sin Contraseña Requerida</code>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://programasfully.com/" }
        ],
        pasos: []
    },

    // CATEGORIA APLICACIONES
    // Herramientas de Sistema y Almacenamiento
    {
        categoria: "aplicaciones",
        titulo: "CrystalDiskInfo",
        imagen: "img/aplicaciones/crystaldiskinfo.jpg",
        comando: "http://crystalmark.info/download/index-e.html",
        descripcion: "Monitor de salud y temperatura para unidades de almacenamiento (HDD y SSD).",
        contenidoTutorialHtml: `
            <h3>🔍 Diagnóstico de Almacenamiento</h3>
            <p>Es la herramienta estándar para verificar si un disco duro o SSD tiene sectores dañados o si su vida útil está por terminar.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga oficial:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="http://crystalmark.info/download/index-e.html" target="_blank" class="link-comando">http://crystalmark.info/download/index-e.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Técnico:</strong> Si el estado aparece en <em>"Riesgo"</em> (amarillo), es el momento ideal para realizar un respaldo inmediato de tu información.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "http://crystalmark.info/download/index-e.html" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/vvaxeR2-6zQ", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "AIDA64",
        imagen: "img/aplicaciones/aida64.jpg",
        comando: "https://www.aida64.com/downloads",
        descripcion: "Diagnóstico avanzado y consulta detallada de todos los componentes de hardware del sistema.",
        contenidoTutorialHtml: `
            <h3>📊 Información Detallada del Hardware</h3>
            <p>Proporciona un informe exhaustivo de cada chip, sensor y componente instalado en la computadora.</p>
            
            <div class="tutorial-pasos">
                <h4>Obtener instalador:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.aida64.com/downloads" target="_blank" class="link-comando">https://www.aida64.com/downloads</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso Pro:</strong> Ideal para verificar las temperaturas bajo carga de trabajo y los voltajes de la fuente de poder.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.aida64.com/downloads" }
        ],
        pasos: []
    },
    
    // Multimedia y Edición
    {
        categoria: "aplicaciones",
        titulo: "HandBrake",
        imagen: "img/aplicaciones/handbrake-logo.jpg",
        comando: "https://handbrake.fr/downloads.php",
        descripcion: "Transcodificador de código abierto para comprimir y convertir videos de un formato a otro.",
        contenidoTutorialHtml: `
            <h3>🗜️ Transcodificación de Video</h3>
            <p>Utilízalo para reducir el tamaño de tus videos sin perder calidad visual notable.</p>
            
            <div class="tutorial-pasos">
                <h4>Descarga directa:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://handbrake.fr/downloads.php" target="_blank" class="link-comando">https://handbrake.fr/downloads.php</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Tip:</strong> Es compatible con aceleración por hardware (NVIDIA NVENC / Intel QuickSync) para conversiones ultra rápidas.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://handbrake.fr/downloads.php" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/d00YqovfUhM", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "MP3TAG",
        imagen: "img/aplicaciones/mp3tag.jpg",
        comando: "https://www.mp3tag.de/download.html",
        descripcion: "Editor universal de metadatos (etiquetas) para archivos de audio y carátulas.",
        contenidoTutorialHtml: `
            <h3>🏷️ Editor de Etiquetas de Audio</h3>
            <p>Permite organizar tu biblioteca musical cambiando nombres, autores, géneros y carátulas de forma masiva.</p>
            
            <div class="tutorial-pasos">
                <h4>Página de descarga:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.mp3tag.de/download.html" target="_blank" class="link-comando">https://www.mp3tag.de/download.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.mp3tag.de/download.html" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "MKVToolNix",
        imagen: "img/aplicaciones/mkvtoolnix.jpg",
        comando: "https://mkvtoolnix.download/downloads.html",
        descripcion: "Herramientas para unir o separar pistas de audio, video y subtítulos en archivos MKV.",
        contenidoTutorialHtml: `
            <h3>🎬 Herramientas para Contenedores MKV</h3>
            <p>La herramienta definitiva para el 'multiplexado' de archivos de video profesional.</p>
            
            <div class="tutorial-pasos">
                <h4>Repositorio de descarga:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://mkvtoolnix.download/downloads.html" target="_blank" class="link-comando">https://mkvtoolnix.download/downloads.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Función Clave:</strong> Permite eliminar pistas de audio innecesarias o idiomas sobrantes de una película para ahorrar espacio.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://mkvtoolnix.download/downloads.html" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "FastStone Viewer",
        imagen: "img/aplicaciones/FastStone.jpg",
        comando: "https://www.faststone.org/FSIVDownload.htm",
        descripcion: "Visor y editor ligero de fotos con soporte para archivos RAW y conversión por lotes.",
        contenidoTutorialHtml: `
            <h3>🖼️ Visor y Editor Fotográfico</h3>
            <p>Es una de las mejores alternativas al visor de Windows por su velocidad y capacidad de comparar imágenes lado a lado.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.faststone.org/FSIVDownload.htm" target="_blank" class="link-comando">https://www.faststone.org/FSIVDownload.htm</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.faststone.org/FSIVDownload.htm" }
        ],
        pasos: []
    },
    // Periféricos
    {
        categoria: "aplicaciones",
        titulo: "CORSAIR iCUE",
        imagen: "img/aplicaciones/corsair.jpg",
        comando: "https://www.corsair.com/us/en/downloads",
        descripcion: "Software de gestión para configurar iluminación y funciones en periféricos de la marca Corsair.",
        contenidoTutorialHtml: `
            <h3>🖱️ Gestión de Periféricos Corsair</h3>
            <p>Controla desde un solo lugar el RGB de tu teclado, los perfiles del mouse y el rendimiento de tus ventiladores Corsair.</p>
            
            <div class="tutorial-pasos">
                <h4>Centro de descargas:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.corsair.com/us/en/downloads" target="_blank" class="link-comando">https://www.corsair.com/us/en/downloads</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.corsair.com/us/en/downloads" }
        ],
        pasos: []
    },
    
    // CATEGORIA APLICACIONES ONLINEA
    {
        categoria: "onlinea",
        titulo: "remove.bg (Quitar Fondo)",
        imagen: "img/onlinea/Remove.bg.jpg",
        comando: "https://www.remove.bg/",
        descripcion: "Elimina el fondo de cualquier imagen de forma automática en segundos usando inteligencia artificial.",
        contenidoTutorialHtml: `
            <h3>🖼️ Eliminación Automática de Fondos</h3>
            <p>Es la herramienta líder para separar sujetos del fondo sin necesidad de usar editores complejos como Photoshop.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de acceso:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.remove.bg/" target="_blank" class="link-comando">https://www.remove.bg/</a>
                    https://www.remove.bg/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso Rápido:</strong> Solo arrastra tu imagen a la página y descarga el resultado en formato PNG transparente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.remove.bg/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "BigJPG (Agrandar Imagen)",
        imagen: "img/onlinea/bigjpg-review.jpg",
        comando: "https://bigjpg.com/",
        descripcion: "Utiliza redes neuronales para aumentar el tamaño de imágenes y dibujos sin perder calidad.",
        contenidoTutorialHtml: `
            <h3>🔍 Ampliación con Inteligencia Artificial</h3>
            <p>Ideal para ilustraciones y arte digital que necesitas imprimir o ver en alta resolución sin que se pixelen.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso a la herramienta:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://bigjpg.com/" target="_blank" class="link-comando">https://bigjpg.com/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Configuración:</strong> Selecciona "Artwork" para dibujos y elige el nivel de reducción de ruido "Highest" para mejores resultados.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://bigjpg.com/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "WordArt (Nubes de Palabras)",
        imagen: "img/onlinea/word-art.jpg",
        comando: "https://wordart.com/",
        descripcion: "Crea nubes de palabras personalizadas con formas creativas y tipografías variadas.",
        contenidoTutorialHtml: `
            <h3>🎨 Diseño de Nubes de Palabras</h3>
            <p>Convierte listas de términos técnicos o personales en composiciones visuales con formas como naves espaciales, corazones o logos.</p>
            
            <div class="tutorial-pasos">
                <h4>Ir al editor:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://wordart.com/" target="_blank" class="link-comando">https://wordart.com/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://wordart.com/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "WatermarkRemover",
        imagen: "img/onlinea/Watermark Remover.jpg",
        comando: "https://www.watermarkremover.io/es",
        descripcion: "Elimina marcas de agua de imágenes de forma gratuita detectando y reconstruyendo los píxeles.",
        contenidoTutorialHtml: `
            <h3>🛡️ Remoción de Marcas de Agua</h3>
            <p>Utiliza IA para limpiar imágenes de logotipos o textos superpuestos sin afectar la nitidez del archivo original.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.watermarkremover.io/es" target="_blank" class="link-comando">https://www.watermarkremover.io/es</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.watermarkremover.io/es" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "I Love PDF",
        imagen: "img/onlinea/iPDF.jpg",
        comando: "https://www.ilovepdf.com/es",
        descripcion: "Plataforma integral para unir, dividir, comprimir y convertir documentos PDF.",
        contenidoTutorialHtml: `
            <h3>📄 Suite Completa para PDF</h3>
            <p>La herramienta definitiva para el manejo de documentos sin necesidad de instalar software pesado.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso rápido:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.ilovepdf.com/es" target="_blank" class="link-comando">https://www.ilovepdf.com/es</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Funciones populares:</strong> Unir PDF, Convertir PDF a Word y Comprimir archivos para enviar por correo.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.ilovepdf.com/es" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "Key-Test (Prueba de Teclado)",
        imagen: "img/onlinea/tecladoTest.jpg",
        comando: "https://en.key-test.ru/",
        descripcion: "Utilidad técnica para probar el rendimiento y respuesta de cada tecla en tiempo real.",
        contenidoTutorialHtml: `
            <h3>⌨️ Diagnóstico de Periféricos</h3>
            <p>Verifica si tu teclado tiene problemas de 'ghosting' o si alguna tecla física está fallando o trabada.</p>
            
            <div class="tutorial-pasos">
                <h4>Abrir probador:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://en.key-test.ru/" target="_blank" class="link-comando">https://en.key-test.ru/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso:</strong> Simplemente pulsa las teclas y verás cómo se iluminan en pantalla si funcionan correctamente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://en.key-test.ru/" }
        ],
        pasos: []
    },
    
    // CATEGORIA WINDOWS
    {
        categoria: "windows",
        titulo: "Hiren's BootCD PE",
        imagen: "img/windows/HBCD_PE.jpg",
        comando: "https://www.hirensbootcd.org/download/",
        descripcion: "Entorno de rescate basado en Windows PE para recuperar archivos y reparar sistemas dañados.",
        contenidoTutorialHtml: `
            <h3>💊 Entorno de Rescate Profesional</h3>
            <p>Es una herramienta indispensable para técnicos. Permite arrancar la PC desde una USB cuando el Windows original falla.</p>
            
            <div class="tutorial-pasos">
                <h4>Instrucciones de descarga:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.hirensbootcd.org/download/" target="_blank" class="link-comando">https://www.hirensbootcd.org/download/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Pro:</strong> Incluye herramientas preinstaladas para recuperar contraseñas, clonar discos y analizar hardware.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.hirensbootcd.org/download/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/GegBAeM6eQY", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Rufus (USB Booteable)",
        imagen: "img/windows/rufus.jpg",
        comando: "https://rufus.ie/es/",
        descripcion: "La utilidad más rápida para crear unidades USB de arranque a partir de imágenes ISO.",
        contenidoTutorialHtml: `
            <h3>💾 Creación de USB Booteables</h3>
            <p>Rufus es el estándar para grabar instaladores de Windows, Linux o herramientas de rescate en una memoria USB.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://rufus.ie/es/" target="_blank" class="link-comando">https://rufus.ie/es/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Configuración:</strong> Si instalas Windows 11 en una PC vieja, Rufus permite omitir los requisitos de TPM y Secure Boot automáticamente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://rufus.ie/es/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/IT7EFZ819WM", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Ventoy (Multiboot)",
        imagen: "img/windows/VentoyUSB.jpg",
        comando: "https://www.ventoy.net/en/download.html",
        descripcion: "Crea una USB multibooteo donde solo necesitas copiar y pegar tus archivos ISO.",
        contenidoTutorialHtml: `
            <h3>📂 Multiboot USB (Ventoy)</h3>
            <p>A diferencia de Rufus, con Ventoy no necesitas formatear la USB cada vez que quieres cambiar de sistema.</p>
            
            <div class="tutorial-pasos">
                <h4>Descarga Ventoy:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.ventoy.net/en/download.html" target="_blank" class="link-comando">https://www.ventoy.net/en/download.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Ventaja:</strong> Puedes tener Windows 10, Windows 11 y Linux en la misma USB y elegir cuál arrancar desde un menú visual.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.ventoy.net/en/download.html" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/mDQPW0lCeu0", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Massgrave (Activación)",
        imagen: "img/windows/card.jpg",
        comando: "https://massgrave.dev/",
        descripcion: "Scripts de código abierto para la descarga y activación legal de Windows y Office.",
        contenidoTutorialHtml: `
            <h3>🔑 Activación y Descarga de ISOs</h3>
            <p>Utiliza métodos limpios (HWID, KMS38) que no requieren instalar programas externos sospechosos.</p>
            
            <div class="tutorial-pasos">
                <h4>Sitio de referencia:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://massgrave.dev/" target="_blank" class="link-comando">https://massgrave.dev/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Seguridad:</strong> Al ser Open Source, el código de los scripts es transparente y revisado por la comunidad.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://massgrave.dev/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/ex8aygMpG3s", plataforma: "youtube" },
            { texto: "Video de descarga e instalacion", url: "https://www.youtube.com/watch?v=gHfe-QaeqHA&list=PLviGVsCd_5x2PhjbuW1zusJbj3uPHhVc6&index=14", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "ISO Verifier",
        imagen: "img/windows/verifier.jpg",
        comando: "https://genuine-iso-verifier.weebly.com/",
        descripcion: "Verifica que tu archivo ISO de Windows sea original comparándolo con los hashes oficiales de Microsoft.",
        contenidoTutorialHtml: `
            <h3>✅ Verificador de Integridad ISO</h3>
            <p>Asegúrate de que el instalador de Windows que descargaste no haya sido modificado por terceros.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso a la herramienta:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://genuine-iso-verifier.weebly.com/" target="_blank" class="link-comando">https://genuine-iso-verifier.weebly.com/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Concepto:</strong> El programa lee el <em>Hash</em> (firma digital) del archivo y lo compara con la base de datos de MSDN/VLSC.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://genuine-iso-verifier.weebly.com/" }            
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Reiniciar directo a la BIOS",
        imagen: "img/windows/bios.jpg",
        comando: "shutdown /r /fw /t 0",
        descripcion: "Comando avanzado para reiniciar el equipo y entrar automáticamente a la configuración de la BIOS/UEFI.",
        contenidoTutorialHtml: `
            <h3>🖥️ Acceso Directo al Firmware (UEFI)</h3>
            <p>Evita tener que adivinar qué tecla presionar al encender la PC. Este comando te lleva directo a la configuración interna.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Requisito de Administrador</h4>
                <p>Para que este comando funcione, debes abrir el <strong>Símbolo del Sistema</strong> o <strong>PowerShell</strong> con permisos de administrador.</p>

                <h4>Paso 2: Ejecución del Comando</h4>
                <p>Copia y pega el siguiente comando para reiniciar instantáneamente hacia la BIOS:</p>
                <div class="contenedor-comando">
                <code>shutdown /r /fw /t 0</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-info-circle"></i> CLIC PARA VER QUÉ SIGNIFICA CADA PARTE
                    </summary>
                    <div class="tutorial-pasos warning">
                        <ul>
                            <li><strong>/r:</strong> Indica que el equipo debe reiniciarse.</li>
                            <li><strong>/fw:</strong> La instrucción clave que redirige al Firmware (BIOS).</li>
                            <li><strong>/t 0:</strong> Establece el tiempo de espera en cero segundos (reinicio inmediato).</li>
                        </ul>
                    </div>
                </details>
            </div>
            
            <p style="margin-top: 15px;"><i>Nota: Si recibes un error indicando que "no se encuentra la opción", es posible que tu equipo no sea compatible con UEFI o que no estés ejecutando la consola como administrador.</i></p>
        `,
        links: [
            {
                texto: "Crear un Archivo",
                url: "https://www.youtube.com/shorts/N1NiiLLJOMI",
                plataforma: "youtube"
            },
            {
                texto: "Descargar Archivo",
                url: "https://drive.google.com/file/d/13d3wrjsO8xqURpEtTNyag06IpMqc7B_3/view?usp=drive_link"
            }                        
        ],
        pasos: []
    }, 
    {
        categoria: "windows",
        titulo: "Activar Hyper-V y Crear Máquina Virtual",        
        imagen: "img/windows/MaquinaVirtual.jpg", 
        comando: "OptionalFeatures",
        descripcion: "Guía técnica ultra-detallada para habilitar el hipervisor nativo y configurar paso a paso tu primer entorno virtual.",
        contenidoTutorialHtml: `
            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🖥️ Fase 1: Requisitos y Activación</h3>
            <div class="tutorial-pasos">
                <p><strong>1. Verificar Versión:</strong> Presiona <kbd>Win</kbd> + <kbd>R</kbd> y ejecuta <code>winver</code> para confirmar que tienes una versión <strong>Pro</strong> o superior.</p>

                <p><strong>2. Habilitar Características:</strong> Presiona <kbd>Win</kbd> + <kbd>R</kbd> y ejecuta el comando:</p>
                <div class="contenedor-comando">
                    <code>OptionalFeatures</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Busca <strong>Hyper-V</strong>, marca todas las casillas y reinicia tu computadora.</p>

                <p><strong>3. Compatibilidad:</strong> Marca también <strong>"Plataforma de máquina virtual"</strong> y <strong>"Plataforma del hipervisor"</strong> para soporte de WSL2 y evitar conflictos.</p>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid var(--secondary); padding-bottom: 10px;">⚙️ Fase 2: Asistente de Creación Paso a Paso</h3>
            <p>1. Busca y abre el <strong>Administrador de Hyper-V</strong>.</p>
            
            <div style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid var(--secondary); padding: 10px; margin-bottom: 15px; border-radius: 4px;">
                <p style="margin: 0;"><strong>⚠️ PASO PREVIO:</strong> En la columna de la izquierda, haz clic sobre el nombre de tu computadora (ej: usuarios) para habilitar el menú de "Acciones" en el panel derecho.</p>
            </div>

            <p>2. En el panel derecho selecciona <strong>Nuevo > Máquina virtual</strong>. Sigue este orden exacto del menú izquierdo:</p>
            
            <div class="tutorial-pasos">
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 15px;"><strong>1. Antes de comenzar:</strong> Haz clic en el botón <kbd>Siguiente</kbd>.</li>
                    
                    <li style="margin-bottom: 15px;"><strong>2. Nombre y ubicación:</strong> Escribe un nombre para identificar tu máquina y pulsa <kbd>Siguiente</kbd>.</li>
                    
                    <li style="margin-bottom: 15px;"><strong>3. Especificar generación:</strong> Elige según tu necesidad:
                        <ul style="margin-top: 5px;">
                            <li><strong>Generación 1:</strong> Para sistemas antiguos de 32 bits o versiones que no soportan UEFI.</li>
                            <li><strong>Generación 2:</strong> Para sistemas modernos basados en UEFI (64 bits). 
                            <br>Tras seleccionar, pulsa <kbd>Siguiente</kbd>.</li>
                        </ul>
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>4. Asignación de memoria:</strong> Define la RAM en MB. 
                        <br><strong>Fórmula de ejemplo para 6GB:</strong> <code>6 x 1024 = 6144</code>
                        <br>Calcula tus GB deseados y escribe el resultado. Pulsa <kbd>Siguiente</kbd>.
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>5. Configurar funciones de red:</strong> Define si tendrás conexión:
                        <ul style="margin-top: 5px;">
                            <li><strong>No conectado:</strong> Si deseas aislamiento total sin internet.</li>
                            <li><strong>Default Switch:</strong> Para tener internet automático.
                            <br>Selecciona una opción y pulsa <kbd>Siguiente</kbd>.</li>
                        </ul>
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>6. Conectar disco duro virtual:</strong> Se guardará en <code>C:\\ProgramData\\Microsoft\\Windows\\Virtual Hard Disks\\</code>
                        <br><strong>Tamaño:</strong> Especifica el espacio total (GB) que tendrá la máquina para Windows y tus archivos. Pon lo que consideres necesario y pulsa <kbd>Siguiente</kbd>.
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>7. Opciones de instalación:</strong> Elige <strong>"Instalar un S.O. desde un CD/DVD-ROM de arranque"</strong>. 
                        <br>Marca <strong>"Archivo de imagen (.iso)"</strong>, usa el botón <kbd>Examinar</kbd> para buscar tu ISO y pulsa <kbd>Siguiente</kbd>.
                    </li>

                    <li style="margin-bottom: 15px;"><strong>8. Resumen:</strong> Revisa que todos los pasos coincidan y pulsa <kbd>Finalizar</kbd>.</li>
                </ul>
            </div>
            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>
            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🚀 Fase 3: Ejecución Final</h3>                
            <div class="tutorial-pasos warning">                
                <ol>
                    <li>En la lista central, haz clic derecho en tu máquina y selecciona <kbd>Conectar</kbd>.</li>
                    <li>En la ventana negra, haz clic en el botón azul <kbd>Iniciar</kbd>.</li>
                    <li><strong>⚠️ CRÍTICO:</strong> En cuanto veas letras blancas, presiona rápidamente <strong>cualquier tecla</strong> de tu teclado físico para que el arranque comience desde el ISO.</li>
                    <li>Sigue los pasos de instalación de Windows como lo harías normalmente.</li>
                </ol>
            </div>
            
            <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--primary); padding: 12px; margin-top: 20px; border-radius: 4px;">
                <p style="margin: 0;"><i class="fas fa-microchip"></i> <strong>Tip técnico:</strong> Asegúrate de que la <strong>Virtualización</strong> esté activa en tu BIOS/UEFI, de lo contrario Hyper-V no aparecerá disponible.</p>
            </div>
        `,
        links: [
            { texto: "Video Tutorial Completo", url: "https://www.youtube.com/watch?v=Bpsice4QuL8", plataforma: "youtube" },
            { texto: "MacOS", url: "https://www.youtube.com/watch?v=LvyaxWhHuhU", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Instalar y Configurar VirtualBox (2026)",        
        imagen: "img/windows/virtualbox_card.jpg", 
        comando: "https://www.virtualbox.org/wiki/Downloads",
        descripcion: "Guía paso a paso para instalar Oracle VM VirtualBox y configurar máquinas virtuales con soporte para Windows 11 (25H2).",
        contenidoTutorialHtml: `
            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🖥️ Fase 1: Descarga e Instalación</h3>
            <div class="tutorial-pasos">
                <p><strong>1. Obtener el Instalador:</strong> Visita el sitio oficial, ve a la sección "Downloads" y descarga la versión para <strong>Windows hosts</strong>.</p>

                <p><strong>2. Instalación Limpia:</strong> Ejecuta el archivo como administrador. Sigue el asistente pulsando <kbd>Next</kbd> y acepta la instalación de interfaces de red cuando se te solicite.</p>

                <p><strong>3. Imagen ISO:</strong> Asegúrate de tener descargada la imagen .ISO del sistema operativo que deseas instalar (ej: Windows 11 25H2).</p>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid var(--secondary); padding-bottom: 10px;">⚙️ Fase 2: Asistente de Creación Paso a Paso</h3>
            <p>Abre VirtualBox y haz clic en el icono azul <strong>Nueva</strong>. Sigue este orden para una configuración óptima:</p>
            
            <div class="tutorial-pasos">
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 15px;"><strong>1. Nombre y Sistema:</strong> Asigna un nombre a tu máquina. En "Tipo" elige Microsoft Windows y en "Versión" selecciona la que corresponda (ej: Windows 11 64-bit).</li>
                    
                    <li style="margin-bottom: 15px;"><strong>2. Hardware (RAM y CPU):</strong> 
                        <br>• <strong>Memoria Base:</strong> Mínimo 4GB (4096 MB), recomendado 8GB (8192 MB) si tu PC lo permite.
                        <br>• <strong>Procesadores:</strong> Se recomienda asignar al menos 2 o 4 núcleos.
                        <br>• <strong>EFI:</strong> Asegúrate de marcar la casilla <kbd>Enable EFI</kbd> para sistemas modernos.
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>3. Disco Duro Virtual:</strong> Selecciona "Crear un disco duro virtual ahora".
                        <br>• <strong>Tamaño:</strong> Se recomienda un mínimo de 80GB para Windows 11.
                        <br>• <strong>Tipo:</strong> Elige <kbd>VDI</kbd> (VirtualBox Disk Image) y asegúrate de que esté como <strong>Reservado dinámicamente</strong> para ahorrar espacio real.
                    </li>
                    
                    <li style="margin-bottom: 15px;"><strong>4. Cargar ISO (Almacenamiento):</strong> Antes de iniciar, ve a <strong>Configuración > Almacenamiento</strong>. Haz clic en el icono del disco vacío y selecciona tu archivo ISO mediante el botón del CD a la derecha.</li>
                    
                    <li style="margin-bottom: 15px;"><strong>5. Memoria de Video:</strong> En el apartado <strong>Pantalla</strong>, sube la memoria de video al máximo (128 MB) para un mejor rendimiento visual.</li>
                </ul>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🚀 Fase 3: Ejecución y Pantalla Completa</h3>
            <div class="tutorial-pasos warning">
                <ol>
                    <li>Selecciona tu máquina y pulsa el botón verde <kbd>Iniciar</kbd>.</li>
                    <li><strong>Arranque:</strong> Presiona cualquier tecla cuando veas el mensaje "Press any key to boot from CD/DVD".</li>
                    <li><strong>Pantalla Completa (Guest Additions):</strong> Una vez instalado Windows, ve al menú superior de la ventana: <strong>Dispositivos > Insertar imagen de CD de las Guest Additions</strong>.</li>
                    <li>Abre el explorador de archivos en la máquina virtual, ejecuta el instalador del CD y reinicia para habilitar la resolución automática y fluidez del mouse.</li>
                </ol>
            </div>
            
            <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--primary); padding: 12px; margin-top: 20px; border-radius: 4px;">
                <p style="margin: 0;"><i class="fas fa-microchip"></i> <strong>Tip técnico:</strong> VirtualBox es ideal si tu procesador no soporta Hyper-V o si necesitas emular sistemas operativos más antiguos que requieren configuraciones específicas de hardware.</p>
            </div>
        `,
        links: [
            { texto: "Descargar VirtualBox", url: "https://www.virtualbox.org/wiki/Downloads", plataforma: "google" },
            { texto: "Tutorial Windows 11 25H2", url: "https://www.youtube.com/watch?v=Qenz8rdnEOg", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Instalación y Optimización de Zorin OS",
        imagen: "img/windows/zorinos.jpg",
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
                <p>Usa herramientas como <a href="https://rufus.ie/es/" target="_blank" class="link-comando" style="font-weight: bold;"><strong>Rufus</strong></a> 
                o <a href="https://etcher.balena.io/" target="_blank" class="link-comando" style="font-weight: bold;"><strong>balenaEtcher</strong></a> para grabar la ISO en una memoria USB de al menos 8GB.</p>

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
                        <p style="margin-bottom: 10px;"><strong>⚠️ Al iniciar verás estas opciones en pantalla:</strong></p>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 8px;">🔵 <strong>Try or Install (Probar o Instalar):</strong> Es la opción recomendada. Te permite entrar al escritorio de Zorin para probarlo sin instalar nada, o iniciar el instalador directamente.</li>
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
                <p style="margin: 0;"><i class="fas fa-rocket"></i> <strong>Tip de Software:</strong> Zorin detecta automáticamente si intentas abrir un <strong>.exe</strong> y te ofrece instalar el soporte para aplicaciones de Windows.</p>
                
            
        `,
        links: [
            { texto: "Página de Descarga", url: "https://zorin.com/os/download/" },
            { texto: "Video: Cómo instalar Zorin OS 18", url: "https://www.youtube.com/watch?v=4K10IxXbLkU", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Crear Disco UEFI para Windows 10/11 en Hyper-V",
        imagen: "img/tutoriales/bootable-uefi-usb.jpg",
        comando: "diskmgmt.msc / Hyper-V",
        descripcion: "Manual avanzado para crear un disco de arranque virtual (VHDX) preparado para UEFI y configurar la máquina virtual en Hyper-V.",
        contenidoTutorialHtml: `
            <h3>💿 Creación de Unidad UEFI Virtual</h3>
            <p>Este proceso permite simular una unidad de arranque USB dentro de Hyper-V para instalar Windows en modo Generación 2.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Crear el Disco Virtual (VHDX)</h4>
                <p>Abre la administración de discos para generar el soporte físico virtual: diskmgmt.msc</p>
                <ul>
                    <li>Ve a <strong>Acción</strong> ➔ <strong>Crear VHD</strong>.</li>
                    <li>Tamaño: 16 GB (opcional) | Formato: <strong>VHDX</strong> | Tipo: <strong>Tamaño fijo</strong>.</li>
                    <li>En la unidad creada: Clic derecho ➔ <kbd>Inicializar disco</kbd> ➔ Selecciona <strong>GPT</strong>.</li>
                    <li>Crea un "Nuevo volumen simple" y formatéalo estrictamente como <strong>FAT32</strong>.</li>
                </ul>
                
                <h4>Paso 2: Cargar Imagen con Rufus</h4>
                <p>Con el disco virtual montado en tu sistema, abre <strong>Rufus</strong>:</p>
                <ul>
                    <li>Selecciona el disco virtual de 16GB como unidad de destino.</li>
                    <li>Carga la ISO de Windows 10/11 y dale a <kbd>Empezar</kbd>.</li>
                    <li><strong>Al terminar:</strong> Clic derecho en la unidad en el explorador y selecciona <kbd>Expulsar</kbd> (Obligatorio para que Hyper-V lo use).</li>
                </ul>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-plus-square"></i> CONFIGURACIÓN DE LA MÁQUINA VIRTUAL
                    </summary>
                    <h3 style="border-bottom: 2px solid var(--secondary); padding-bottom: 10px;">⚙️ Asistente de Creación Paso a Paso</h3>
                    <p>1. Busca y abre el <strong>Administrador de Hyper-V</strong>.</p>
                    
                    <div style="background: rgba(14, 165, 233, 0.1); border-left: 0px solid var(--secondary); padding: 10px; margin-bottom: 15px; border-radius: 4px;">
                        <p style="margin: 0;"><strong>⚠️ PASO PREVIO:</strong> En la columna de la izquierda, haz clic sobre el nombre de tu computadora (ej: usuarios) para habilitar el menú de "Acciones" en el panel derecho.</p>
                    </div>

                    <p>2. En el panel derecho selecciona <strong>Nuevo > Máquina virtual</strong>. Sigue este orden exacto del menú izquierdo:</p>
                    
                    
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 15px;"><strong>1. Antes de comenzar:</strong> Haz clic en el botón <kbd>Siguiente</kbd>.</li>
                            
                            <li style="margin-bottom: 15px;"><strong>2. Nombre y ubicación:</strong> Escribe un nombre para identificar tu máquina y pulsa <kbd>Siguiente</kbd>.</li>
                            
                            <li style="margin-bottom: 15px;"><strong>3. Especificar generación:</strong> Elige según tu necesidad:
                                <ul style="margin-top: 5px;">
                                    <li><strong>Generación 1:</strong> Para sistemas antiguos de 32 bits o versiones que no soportan UEFI.</li>
                                    <li><strong>Generación 2:</strong> Para sistemas modernos basados en UEFI (64 bits). 
                                    <br>Tras seleccionar, pulsa <kbd>Siguiente</kbd>.</li>
                                </ul>
                            </li>
                            
                            <li style="margin-bottom: 15px;"><strong>4. Asignación de memoria:</strong> Define la RAM en MB. 
                                <br><strong>Fórmula de ejemplo para 6GB:</strong> <code>6 x 1024 = 6144</code>
                                <br>Calcula tus GB deseados y escribe el resultado. Pulsa <kbd>Siguiente</kbd>.
                            </li>
                            
                            <li style="margin-bottom: 15px;"><strong>5. Configurar funciones de red:</strong> Define si tendrás conexión:
                                <ul style="margin-top: 5px;">
                                    <li><strong>No conectado:</strong> Si deseas aislamiento total sin internet.</li>
                                    <li><strong>Default Switch:</strong> Para tener internet automático.
                                    <br>Selecciona una opción y pulsa <kbd>Siguiente</kbd>.</li>
                                </ul>
                            </li>
                            
                            <li style="margin-bottom: 15px;"><strong>6. Conectar disco duro virtual:</strong> Se guardará en <code>C:\\ProgramData\\Microsoft\\Windows\\Virtual Hard Disks\\</code>
                                <br><strong>Tamaño:</strong> Especifica el espacio total (GB) que tendrá la máquina para Windows y tus archivos. Pon lo que consideres necesario y pulsa <kbd>Siguiente</kbd>.
                            </li>
                            
                            <li style="margin-bottom: 15px;"><strong>7. Opciones de instalación:</strong> Elige <strong>"Instalar un S.O. desde un CD/DVD-ROM de arranque"</strong>. 
                                <br>Marca <strong>"Archivo de imagen (.iso)"</strong>, usa el botón <kbd>Examinar</kbd> para buscar tu ISO y pulsa <kbd>Siguiente</kbd>.
                            </li>

                            <li style="margin-bottom: 15px;"><strong>8. Resumen:</strong> Revisa que todos los pasos coincidan y pulsa <kbd>Finalizar</kbd>.</li>
                        </ul>
                  
                </details>

                <h4>Paso 3: Ajustes de Seguridad y Hardware</h4>
                <p>Antes de iniciar, entra en <kbd>Configuración</kbd> de la Maquina Virtual:</p>
                <ul>
                    <li><strong>Seguridad:</strong> Deshabilita <kbd>Habilitar arranque seguro</kbd> (Secure Boot).</li>
                    <li><strong>Servicios de Integración:</strong> Marca todas las casillas en "Servicios de integración".</li>
                    <li><strong>Puntos de control:</strong> Deshabilita el uso de puntos de control.</li>
                </ul>

                <h4>Paso 4: Montaje y Orden de Arranque</h4>
                <ul>
                    <li>Ve a <strong>Controladora SCSI</strong> ➔ <strong>Unidad de disco duro</strong> ➔ <kbd>Agregar</kbd>.</li>
                    <li>Busca el archivo <strong>VHDX de 16GB</strong> que creaste con Rufus.</li>
                    <li>En la pestaña <strong>Firmware</strong>, mueve la unidad de 16GB al primer lugar de la lista (arriba).</li>
                </ul>

                <div style="background: rgba(231, 76, 60, 0.1); border-left: 4px solid #e74c3c; padding: 10px; margin-top: 15px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-exclamation-triangle"></i> <strong>Nota post-reinicio:</strong> Si no arranca tras instalar, vuelve a Firmware y pon el disco duro principal en primer lugar.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Video Tutorial UEFI Virtual", url: "https://www.youtube.com/watch?v=2yrfVEkfalA", plataforma: "youtube" }
        ],
        pasos: []
    },
    
    //CATEGORIA TUTORIAL
    
    {
        categoria: "tutoriales",
        titulo: "Eliminar Clave de Windows",
        imagen: "img/tutoriales/passwin.jpg",
        comando: "NET USER",
        descripcion: "Si has olvidado la clave de usuario de tu Windows, realiza estos pasos para recuperar el acceso.",
        contenidoTutorialHtml: `
            <h3>👤 Método de acceso de usuario</h3>
            <p>Este proceso permite abrir una terminal con privilegios de <strong>SYSTEM</strong> desde la pantalla de inicio de sesión (Login).</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Acceder al Símbolo del Sistema</h4>
                <p>Presiona la tecla <kbd>Shift</kbd> y haz clic en <kbd>Reiniciar</kbd> para abrir el menú de recuperación. Ve a: <strong>Solucionar problemas > Opciones avanzadas > Símbolo del sistema</strong>.</p>
                
                <div class="contenedor-comando">
                    <code>cd c:\\windows\\system32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Renombrar el Teclado en Pantalla</h4>
                <p>Escribimos el siguiente comando para renombrar el archivo original:</p>
                
                <div class="contenedor-comando">
                    <code>osk.exe osk.old</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Sustituir por el CMD</h4>
                <p>Ahora hacemos que el sistema crea que la consola es el teclado para poder abrirla en el inicio:</p>
                
                <div class="contenedor-comando">
                    <code>copy cmd.exe osk.exe</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 4: Buscamos nuestro Usuario</h4>
                <p>Reinicia la PC de forma normal. En la pantalla donde pide la clave, abre <strong>Accesibilidad > Teclado en pantalla</strong>. Se abrirá el CMD. Escribe el comando para listar los usuarios:</p>
                
                <div class="contenedor-comando">
                    <code>NET USER</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Paso 5: Cambiar la Contraseña</h4>
                <p>Escribimos nuestro Usuario entre <strong>comillas</strong>, dejamos un espacio y escribimos un asterisco (*):</p>
                
                <div class="contenedor-comando">
                    <code>NET USER "NOMBRE_USUARIO" *</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;"><i>Nota: Presiona <kbd>Enter</kbd> dos veces para dejar la contraseña en blanco y poder entrar directamente sin clave.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=JFRXBNPYFRA&t=163s",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Verificar Activación de Office",
        imagen: "img/tutoriales/Activar-office.jpg",
        comando: "cscript ospp.vbs /dstatus",
        descripcion: "Consulta el estado de la licencia de Microsoft Office y su fecha de expiración desde la terminal.",
        contenidoTutorialHtml: `
            <h3>🔑 Estado de Licencia de Office</h3>
            <p>Este procedimiento utiliza el script de administración de licencias de Office para verificar si el producto está activado y qué tipo de clave utiliza.</p>
            
            <div class="tutorial-pasos">
                <p><strong>⚠️ Requisito:</strong> Debes ejecutar el Símbolo del Sistema (CMD) como <strong>Administrador</strong>.</p>

                <h4>Paso 1: Localizar la carpeta de Office</h4>
                <p>Primero, debes situar la terminal en la carpeta donde se encuentra instalado Office (usualmente la versión 16). Copia y pega esta ruta:</p>
                
                <div class="contenedor-comando">
                    <code>cd "C:\\Program Files\\Microsoft Office\\Office16"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p><i>Nota: Si usas Office de 32 bits en un Windows de 64 bits, la ruta será: <br><code>"C:\\Program Files (x86)\\Microsoft Office\\Office16"</code></i></p>

                <h4>Paso 2: Ejecutar la consulta de estado</h4>
                <p>Una vez dentro de la carpeta, ejecuta el script de estado para ver la información de la licencia:</p>
                
                <div class="contenedor-comando">
                    <code>cscript ospp.vbs /dstatus</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;">Al finalizar, busca la línea que dice <strong>LICENSE STATUS</strong>. Si aparece como <strong style="color: #2ecc71;">"--- LICENSED ---"</strong>, tu Office está correctamente activado.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=kHcCPqy6hO4",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Saltar Correo en Windows 11",
        imagen: "img/tutoriales/saltarcuenta.jpg",
        comando: "oobe\\bypassnro", 
        descripcion: "Instala Windows 11 sin cuenta obligatoria de Microsoft para poder crear una cuenta local de usuario.",
        contenidoTutorialHtml: `
            <h3>⏭️ Omitir cuenta de Microsoft</h3>
            <p>Cuando llegues a la pantalla de <strong>"Vamos a conectarte a una red"</strong> y el sistema no te permita continuar sin internet, realiza lo siguiente:</p>
            
            <div class="tutorial-pasos">
                <p><strong>Paso Inicial:</strong> Abre la consola de comandos presionando: <kbd>Mayús</kbd> + <kbd>F10</kbd></p>
                
                <p><small><i>Nota: En algunas laptops debes usar <kbd>Fn</kbd> + <kbd>Mayús</kbd> + <kbd>F10</kbd>.</i></small></p>

                <h4>Paso 1: Desconectar adaptadores (Opcional)</h4>
                <p>Si tienes un cable Ethernet conectado, puedes usar este comando para abrir las conexiones y desactivarlo temporalmente:</p>
                
                <div class="contenedor-comando">
                    <code>ncpa.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Comando de Salto Maestro</h4>
                <p>Escribe el siguiente comando para reiniciar el equipo y habilitar la opción de omitir el registro:</p>
                
                <div class="contenedor-comando">
                    <code>oobe\\bypassnro</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;"><i>El equipo se reiniciará automáticamente. Al volver a la configuración, verás un botón nuevo que dice <strong>"No tengo internet"</strong>. Selecciónalo para continuar con una cuenta local.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/OdncvO2Dg6A",
                plataforma: "youtube"
            },
            {
                texto: "Opción 2",
                url: "https://www.youtube.com/shorts/_zrV3RpxX38",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Comprobar la licencia de Windows",
        imagen: "img/tutoriales/clave.jpg",
        comando: "slmgr / regedit / wmic",
        descripcion: "Manual integral para auditar el estado de activación, identificar el tipo de licencia (OEM/Retail) y recuperar la clave original del sistema.",
        contenidoTutorialHtml: `
            <h3>🔑 Activación y Licenciamiento</h3>
            <p>Administra la legalidad de tu sistema y recupera tus credenciales originales con estos métodos técnicos avanzados.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-user-shield"></i> FASE 1: VERIFICAR ESTADO Y TIPO
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Verificar expiración:</strong> Confirma si la activación es permanente.</p>
                        <div class="contenedor-comando">
                            <code>slmgr /xpr</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>

                        <p><strong>Identificar tipo de canal:</strong> Determina si es <strong>Retail</strong>, <strong>OEM</strong> o <strong>Volume</strong>.</p>
                        <div class="contenedor-comando">
                            <code>slmgr /dli</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-key"></i> FASE 2: RECUPERAR CLAVE ORIGINAL
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Opción A: Comando rápido (CMD):</strong> Extrae la clave grabada en el firmware (BIOS).</p>
                        <div class="contenedor-comando">
                            <code>wmic path softwarelicensingservice get OA3xOriginalProductKey</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>

                        <p style="margin-top: 15px;"><strong>Opción B: Editor del Registro <kbd>Win</kbd> + <kbd>R</kbd> (regedit):</strong></p>
                        <p>Busca el valor <strong>BackupProductKeyDefault</strong> en la siguiente ruta:</p>
                        <div class="contenedor-comando">
                            <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <div style="background: rgba(52, 152, 219, 0.1); border-left: 4px solid #3498db; padding: 12px; margin-top: 20px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-info-circle"></i> <strong>Tip técnico:</strong> También puedes ejecutar estos comandos directamente en la ventana <kbd>Win</kbd> + <kbd>R</kbd> anteponiendo la palabra <code>cmd /k</code> si deseas que la ventana no se cierre.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Video: Estado Activación", url: "https://www.youtube.com/shorts/iOL5uP7Xdoo", plataforma: "youtube" },
            { texto: "Video: Recuperar Clave", url: "https://www.youtube.com/shorts/gmheirF-HlM", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Controlar 2+ PCs con un solo Mouse",
        imagen: "img/tutoriales/ratonteclado.jpg",
        comando: "Mouse Without Borders",
        descripcion: "Utiliza un solo teclado y mouse para controlar hasta 4 computadoras de forma inalámbrica y compartir el portapapeles.",
        contenidoTutorialHtml: `
            <h3>🖱️ Un solo Teclado y Mouse para todo</h3>
            <p><strong>Mouse Without Borders</strong> es un proyecto de Microsoft Garage que te permite mover el puntero entre diferentes monitores de PCs distintos como si fuera una sola computadora extendida.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga e Instalación</h4>
                <p>Debes descargar e instalar la aplicación en <strong>todas</strong> las computadoras que quieras conectar (soporta hasta 4).</p>
                
                <div class="contenedor-comando">
                    <code>Microsoft Garage Mouse Without Borders</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Nombre
                    </button>
                </div>

                <h4>Paso 2: Vincular las Computadoras</h4>
                <p>Al abrir el programa por primera vez:</p>
                <ul>
                    <li>En la PC principal, verás un <strong>Security Code</strong> y el <strong>Computer Name</strong>.</li>
                    <li>En la segunda PC, introduce esos datos para establecer el enlace seguro.</li>
                </ul>
                <br>
                <h4>Paso 3: Configuración del Orden</h4>
                <p>Una vez conectadas, arrastra los iconos de los monitores en la aplicación para que coincidan con su posición física en tu escritorio.</p>
                
                <p style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                    <strong>💡 Tip Pro:</strong> ¡También puedes arrastrar archivos de una PC a otra simplemente moviéndolos con el mouse a través de los bordes!
                </p>
            </div>
        `,
        links: [
            {
                texto: "Descargar de Microsoft Center",
                url: "https://www.microsoft.com/en-us/download/details.aspx?id=35460"
            },
            {
                texto: "Video Tutorial 1",
                url: "https://www.youtube.com/shorts/NDWXuikArOY",
                plataforma: "youtube"
            },
            {
                texto: "Video Tutorial 2",
                url: "https://www.youtube.com/shorts/1wKjAcat7FM", 
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Conexión Red de PC a PC (Peer-to-Peer)",
        imagen: "img/tutoriales/cable-red2.jpg",
        comando: "ping 192.168.1.x",
        descripcion: "Guía completa para conectar dos computadoras mediante Ethernet para compartir archivos y enviar mensajes sin internet.",
        contenidoTutorialHtml: `
            <h3>🔗 Configuración de Red Local Directa</h3>
            <p>Este manual guía la conexión de dos equipos mediante cable Ethernet utilizando tecnología <strong>Auto-MDIX</strong> para compartir recursos sin routers externos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Hardware y Cableado (T568B)</h4>
                <p>Debes ponchar ambos extremos del cable bajo la norma T568B en el siguiente orden:</p>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 5px;">1. B-Naranja</td>
                        <td style="padding: 5px;">2. Naranja</td>
                        <td style="padding: 5px;">3. B-Verde</td>
                        <td style="padding: 5px;">4. Azul</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px;">5. B-Azul</td>
                        <td style="padding: 5px;">6. Verde</td>
                        <td style="padding: 5px;">7. B-Café</td>
                        <td style="padding: 5px;">8. Café</td>
                    </tr>
                </table>
                
                <p><i>Verificación: Los LEDs del puerto Ethernet deben encenderse al conectar ambos equipos.</i></p>

                <h4>Paso 2: Configuración de IPs Estáticas</h4>
                <p>Ambas PC deben estar en el mismo rango de red.</p>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración del adaptador -> clic derecho - propiedades -> Protocolo de Internet versión 4(TCP/IPv4) -> utilizar la siguiente dirección IP:</p>
                <ul>
                    <li><strong>PC 1:</strong> IP <code>192.168.1.1</code> | Máscara <code>255.255.255.0</code></li>
                    <li><strong>PC 2:</strong> IP <code>192.168.1.2</code> | Máscara <code>255.255.255.0</code></li>
                </ul>

                <h4>Paso 3: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p>Activa los siguientes interruptores en ambas PC:</p>
                <ul style="font-size: 0.9rem;">
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras (las dos).</li>
                    <li>Uso compartido de carpetas públicas (En Todas las redes).</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 4: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <p><strong>⚠️ ¿Problemas?</strong> Si Windows muestra "Red no identificada" y no te deja cambiar, usa este comando en <strong>PowerShell (Admin)</strong> para ver el nombre de la interfaz:</p>
                <div class="contenedor-comando">
                    <code>Get-NetConnectionProfile</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego, fuerza el perfil privado (cambia "Ethernet" por el nombre que obtuviste):</p>
                <div class="contenedor-comando">
                    <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Paso 5: Verificación de Conexión (Ping)</h4>
                <p>Desde la PC 1, comprueba si hay comunicación con la PC 2:</p>
                <div class="contenedor-comando">
                    <code>ping 192.168.1.2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Si responde con el tiempo en ms, la conexión funciona correctamente.</i></small></p>

                <h4>Paso 6: Mensajería por CMD (Comando MSG)</h4>
                <p>Primero, guarda las credenciales de la otra PC:</p>
                <div class="contenedor-comando">
                    <code>cmdkey /add:192.168.1.2 /user:USUARIO_PC2 /pass:CLAVE_PC2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego envía el mensaje:</p>
                <div class="contenedor-comando">
                    <code>msg * /server:192.168.1.2 "Prueba de red exitosa"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>💡 Pro Tip: Identificación de Usuario</h4>
                <p>Para saber el nombre exacto, ejecuta esto en la PC destino:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p style="margin-top: 15px;"><strong>⚠️ Solución a errores:</strong> Si el mensaje falla, habilita la recepción remota en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual PDF", url: "https://drive.google.com/file/d/1SzM3IcmnkqjyLqIg-u00Rt11uPVXzvep/view?usp=drive_link" }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Compartir Carpetas y Gestión de Credenciales",
        imagen: "img/tutoriales/comparchivos.jpg",
        comando: "whoami",
        descripcion: "Configuración profesional para compartir archivos en red local, incluyendo permisos de carpeta y creación de credenciales de Windows.",
        contenidoTutorialHtml: `
            <h3>📂 Protocolo de Intercambio de Archivos</h3>
            <p>Este tutorial explica cómo configurar la visibilidad de red y los permisos necesarios para que dos equipos se comuniquen de forma segura y permitan el acceso a archivos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Abre Panel de Control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p><strong>Activa los siguientes interruptores en ambas PC:</strong></p>
                <ul>
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras.</li>
                    <li>Uso compartido de carpetas públicas (En "Todas las redes").</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 2: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-exclamation-triangle"></i> CLIC SI NO PUEDES CAMBIAR A RED PRIVADA
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si Windows no te deja cambiar a Privada desde ajustes, usa este truco en <strong>PowerShell (Admin)</strong>:</p>
                        <div class="contenedor-comando">
                            <code>Get-NetConnectionProfile</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Identifica el nombre de tu red (ej: "Ethernet") y ejecuta este comando para forzar el perfil privado:</p>
                        <div class="contenedor-comando">
                            <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <h4>Paso 3: Compartir una Carpeta (Configuración Completa)</h4>
                <h5>1. Preparación</h5>
                <ul>
                    <li>Clic derecho en la carpeta -> <kbd>Propiedades</kbd> -> Pestaña <kbd>Compartir</kbd>.</li>
                </ul>

                <h5>2. Uso Compartido Avanzado (Permisos de Red)</h5>
                <ul>
                    <li>Botón <kbd>Uso compartido avanzado...</kbd> -> Marca <strong>"Compartir esta carpeta"</strong>.</li>
                    <li>En <kbd>Permisos</kbd>, marca <strong>"Control total"</strong> para "Todos".</li>
                </ul>

                <h5>3. Permisos de Usuario (Acceso Final)</h5>
                <ul>
                    <li>Botón <kbd>Compartir...</kbd> -> Selecciona <strong>"Todos"</strong> (Everyone) y haz clic en <kbd>Agregar</kbd>.</li>
                    <li>Cambia el nivel a <strong>"Lectura y escritura"</strong> y dale a <kbd>Compartir</kbd>.</li>
                </ul>

                <p><strong>💡 Pro Tip:</strong> Si falla el guardado, verifica en la pestaña <kbd>Seguridad</kbd> que el grupo "Todos" tenga permisos de "Modificar".</p>

                <h4>Paso 4: Identificación de Red</h4>
                <p>Para crear la credencial, debes saber el nombre del equipo y usuario destino. Ejecuta esto en la PC a la que te vas a conectar:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Ejemplo de resultado: juan\\alumno</i></small></p>

                <h4>Paso 5: Crear Credencial de Windows</h4>
                <p>Ve a <strong>Panel de Control > Administrador de credenciales > Credenciales de Windows</strong> e ingresa los datos de la PC2:</p>
                <ul>
                    <li><strong>Dirección:</strong> Nombre de la PC2 (ej: juan).</li>
                    <li><strong>Usuario:</strong> Usuario de la PC2 (ej: alumno).</li>
                    <li><strong>Contraseña:</strong> Clave de inicio de la PC2.</li>
                </ul>

                <h4>Paso 6: Grupo de Trabajo</h4>
                <p>Ambas PC deben estar en el mismo grupo (ej: WORKGROUP). Cámbialo en <em>Sistema > Información > Dominio o grupo de trabajo</em>.</p>

               <details class="acordeon-tutorial" style="margin-top: 15px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-search"></i> CLIC SI TU PC NO APARECE EN LA RED
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si ves otras computadoras pero no la tuya, abre <strong>services.msc</strong> y busca el servicio:</p>
                        <p><strong>Publicación de recursos de detección de función</strong>.</p>
                        <p>Cámbialo a tipo de inicio <strong>Automático</strong> e inícialo para activar la visibilidad local.</p>
                    </div>
                </details>

                <h4>Soluciones Rápidas</h4>
                <p>Entrada rápida: <kbd>Win</kbd> + <kbd>R</kbd> ➔ \\\\[Nombre de la PC]</p>
                <p>Si el acceso remoto falla, habilita RPC en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual de PDF", url: "https://drive.google.com/file/d/1rHUsdqXC-5nmUxs04-RCeA8GHeD2XKZm/view?usp=drive_link" }
        ],
        pasos: []
    },    
    {
        categoria: "tutoriales",
        titulo: "Control Total: Accesos Remotos (3 Opciones)",
        imagen: "img/tutoriales/Acceso-Remoto.jpg",
        comando: "mstsc / remotedesktop.google.com",
        descripcion: "Manual integral para controlar PCs desde la red local (LAN) o desde cualquier parte del mundo (Internet) de forma segura.",
        contenidoTutorialHtml: `
            <h3>🖥️ Domina el Acceso a Distancia</h3>
            <p>Configura tu equipo para trabajar de forma remota siguiendo estos métodos profesionales.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-network-wired"></i> OPCIÓN 1: CONEXIÓN EN RED LOCAL (LAN)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Configuración en la PC a controlar:</strong> Activa "Escritorio Remoto" en Configuración y anota el nombre del equipo.</p>
                        <p><strong>Desde la PC cliente:</strong> Ejecuta el comando:</p>
                        <div class="contenedor-comando">
                            <code>mstsc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/shorts/tllEuQI0Rw8" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Cómo Habilitar el escritorio remoto en Windows 11">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Cómo Habilitar el escritorio remoto en Windows 11</span>
                            </a>
                            <a href="https://www.youtube.com/shorts/kTVrUyNSYnE" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: ¿Cómo CONFIGURAR un ESCRITORIO REMOTO?">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: ¿Cómo CONFIGURAR un ESCRITORIO REMOTO?</span>
                            </a>
                        </div>                        
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-globe"></i> OPCIÓN 2: ACCESO DESDE INTERNET (Google Remote)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Ideal para conectar desde fuera de casa. Instala la extensión en Chrome y configura un PIN de 6 dígitos.</p>
                        <div class="contenedor-comando">
                            <code>remotedesktop.google.com</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Link</button>
                        </div>                        
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/watch?v=CnQfQVNz9Es" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Como usar ESCRITORIO REMOTO de GOOGLE CHROME">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Como usar ESCRITORIO REMOTO de GOOGLE CHROME</span>
                            </a>
                            <a href="https://remotedesktop.google.com/access" target="_blank" class="btn-pro-link google" data-tooltip="Abrir extensiones de Google Remote">
                                <i class="fab fa-google"></i> 
                                <span class="texto-btn-cortado">google extensiones</span>
                            </a>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-hands-helping"></i> OPCIÓN 3: SOPORTE RÁPIDO (Windows Native)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <ol>
                            <li>Ambos abren la app con: <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd>Q</kbd>.</li>
                            <li><strong>El Técnico (Ayuda):</strong> Debe <strong>iniciar sesión</strong> con su cuenta Microsoft para generar el código de seguridad.</li>
                            <li><strong>El Usuario (Recibe):</strong> Introduce el código y hace clic en <strong>Enviar</strong>.</li>
                            <li>Al permitir el acceso, el técnico podrá ver y <strong>manipular la PC remota</strong>.</li>
                        </ol>                        
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/shorts/PRdne2V_B7A" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Acceso remoto a Varias computadoras">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Acceso remoto a Varias computadoras</span>
                            </a>
                        </div>
                    </div>
                </details>

                <div class="tech-note note-info">
                    <i class="fas fa-shield-alt"></i>
                    <p><strong>Nota de Seguridad:</strong> Nunca compartas códigos o PINs con desconocidos. Estos accesos dan control total sobre tus archivos.</p>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
            
    //CATEGORIA PROGRAMACION
    // =====================================================
    // CATEGORIA PROGRAMACIÓN
    // =====================================================

    {
        categoria: "programacion",
        titulo: "Python",
        imagen: "img/programacion/PYTHON.jpg",
        comando: "python --version",
        descripcion: "Lenguaje versátil para automatización, ciencia de datos y desarrollo web.",
        contenidoTutorialHtml: `
            <h3>🐍 Instalación Profesional de Python</h3>
            <p>Python es la base de la ingeniería moderna. Al instalarlo en Windows, el éxito depende de un solo clic.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga del instalador</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.python.org/downloads/" target="_blank" class="link-comando">https://www.python.org/downloads/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Paso 2: ¡Paso Crucial! (PATH)</h4>
                <div style="background: rgba(231, 76, 60, 0.1); border-left: 4px solid #e74c3c; padding: 10px; margin: 10px 0;">
                    <p style="margin: 0;"><strong>⚠️ OBLIGATORIO:</strong> Marca la casilla <kbd>Add Python to PATH</kbd> al inicio del instalador.</p>
                </div>

                <h4>Paso 3: Verificación</h4>
                <div class="contenedor-comando">
                    <code>python --version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Sitio Oficial de Python", url: "https://www.python.org/downloads/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Arduino IDE",
        imagen: "img/programacion/arduino.jpg",
        comando: "arduino-cli",
        descripcion: "Entorno para programar placas Arduino y microcontroladores compatibles.",
        contenidoTutorialHtml: `
            <h3>♾️ Configuración de Hardware (Arduino)</h3>
            <p>El IDE permite cargar Sketches a tu placa mediante comunicación serial USB.</p>
            <div class="tutorial-pasos">
                <h4>1. Instalación de Drivers</h4>
                <p>Acepta todos los controladores de <strong>"Arduino srl"</strong> durante la instalación para evitar errores de puerto.</p>
                
                <h4>2. Selección de Placa</h4>
                <p>En el menú <strong>Herramientas > Placa</strong>, elige tu modelo (ej: Arduino Uno).</p>
            </div>
        `,
        links: [{ texto: "Descargar Arduino", url: "https://www.arduino.cc/en/software" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Docker Desktop",
        imagen: "img/programacion/dockerDesktop.jpg",
        comando: "docker --version",
        descripcion: "Plataforma para contenedores que garantiza que el software funcione igual en cualquier PC.",
        contenidoTutorialHtml: `
            <h3>🐋 Virtualización con Contenedores</h3>
            <div class="tutorial-pasos">
                <h4>Requisito Crítico: WSL 2</h4>
                <p>En Windows, Docker requiere el <strong>Subsistema de Linux</strong> activo. Ejecuta como Admin:</p>
                <div class="contenedor-comando">
                    <code>wsl --install</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
            <p style="margin-top: 15px;"><small><i>Nota: Requiere suscripción paga para empresas de +250 empleados.</i></small></p>
        `,
        links: [{ texto: "Sitio Docker", url: "https://www.docker.com/products/docker-desktop" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "IntelliJ IDEA Community",
        imagen: "img/programacion/IntellijIDEA.jpg",
        comando: "idea64.exe",
        descripcion: "IDE potente para Java, Kotlin y desarrollo Android profesional.",
        contenidoTutorialHtml: `
            <h3>💻 Entorno de Desarrollo Java (IDEA)</h3>
            <div class="tutorial-pasos">
                <h4>Paso Importante</h4>
                <p>Al instalar, marca: <strong>"Add bin folder to the PATH"</strong> para abrir proyectos desde la consola.</p>
            </div>
        `,
        links: [{ texto: "Descargar IntelliJ", url: "https://www.jetbrains.com/idea/download/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Visual Studio Code",
        imagen: "img/programacion/visual-studio-code.jpg",
        comando: "code .",
        descripcion: "El editor de código estándar de la industria, ligero y extensible.",
        contenidoTutorialHtml: `
            <h3>📝 Editor Multi-lenguaje (VS Code)</h3>
            <div class="tutorial-pasos">
                <h4>Atajo Maestro</h4>
                <p>Abre la terminal en cualquier carpeta y escribe este comando para empezar a programar al instante:</p>
                <div class="contenedor-comando">
                    <code>code .</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Sitio VS Code", url: "https://code.visualstudio.com/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "XAMPP (Servidor Local)",
        imagen: "img/programacion/XAMPP.jpg",
        comando: "xampp-control.exe",
        descripcion: "Entorno que integra Apache, MariaDB (MySQL) y PHP para pruebas web locales.",
        contenidoTutorialHtml: `
            <h3>🌐 Servidor Local de Pruebas</h3>
            <div class="tutorial-pasos">
                <div style="background: rgba(243, 156, 18, 0.1); border-left: 4px solid #f39c12; padding: 10px; margin-bottom: 15px;">
                    <h4>⚠️ Advertencia de Permisos (UAC)</h4>
                    <p>Evita <code>C:\\Program Files</code>. Instala siempre en la raíz: <code>C:\\xampp</code>.</p>
                </div>
                <p>Ideal para WordPress local y prácticas de PHP.</p>
            </div>
        `,
        links: [{ texto: "Sitio XAMPP", url: "https://www.apachefriends.org/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "MySQL Community",
        imagen: "img/programacion/mysql-server.jpg",
        comando: "mysql -u root -p",
        descripcion: "Guía completa para la gestión, desinstalación total y reinstalación limpia de MySQL Server en Windows.",
        contenidoTutorialHtml: `
            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🐬 Fase 1: Acceso y Gestión Básica</h3>
            <div class="tutorial-pasos">
                <h4>Acceso por Terminal</h4>
                <p>Escribe el siguiente comando (te pedirá la clave configurada):</p>
                <div class="contenedor-comando">
                    <code>mysql -u root -p</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><strong>Tip:</strong> Instala <em>MySQL Workbench</em> para gestión gráfica.</p>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid #c06d36; padding-bottom: 10px;">🛠️ Fase 2: Desinstalación Completa (Limpieza Total)</h3>
            <p>Sigue estos pasos para eliminar MySQL sin dejar rastro de errores o contraseñas viejas:</p>
            
            <div class="tutorial-pasos">
                <h4>1. Desinstalar desde el Panel de Control</h4>
                <p>Presiona <kbd>Windows</kbd> + <kbd>R</kbd>, escribe el comando y presiona Enter:</p>
                <div class="contenedor-comando">
                    <code>appwiz.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Busca y desinstala <strong>todo</strong> lo que diga:</p>
                <ul>
                    <li>MySQL Server</li>
                    <li>MySQL Workbench</li>
                    <li>MySQL Shell</li>
                    <li>MySQL Installer</li>
                    <li>MySQL Connector... (C++, ODBC, etc.)</li>
                </ul>
                <p>Desinstala todo uno por uno.</p>

                <h4>2. Elimina carpetas residuales</h4>
                <p>Borra manualmente estas carpetas (incluso tras desinstalar, MySQL deja archivos escondidos):</p>
                <ul>
                    <li>📁 <strong>Archivos de Programa:</strong> <code>C:\\Program Files\\MySQL\\</code></li>
                    <li>📁 <strong>Configuración y Datos:</strong> <code>C:\\ProgramData\\MySQL\\</code>
                    <br>⚠️ <i>Esta carpeta está oculta. Habilita "Ver archivos ocultos" en el Explorador. Si existe la carpeta "MySQL Server 8.0", bórrala completa: ahí están las bases de datos y contraseñas.</i></li>
                    <li>📁 <strong>Carpeta de Usuario (Opcional):</strong> <code>C:\\Users\\TuUsuario\\AppData\\Roaming\\MySQL\\</code> (Bórrala si existe).</li>
                </ul>

                <h4>3. Limpia el registro (Avanzado)</h4>
                <p>Presiona <kbd>Windows</kbd> + <kbd>R</kbd>, escribe el comando y presiona Enter:</p>
                <div class="contenedor-comando">
                    <code>regedit</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Busca y borra estas rutas si existen:</p>
                <ul>
                    <li><code>HKEY_LOCAL_MACHINE\\SOFTWARE\\MySQL</code></li>
                    <li><code>HKEY_CURRENT_USER\\Software\\MySQL</code></li>
                </ul>
                <div class="warning" style="margin-top:10px; padding:10px; border-radius:4px;">
                    <p style="margin:0;">⚠️ <strong>Atención:</strong> Ten cuidado al tocar el registro. No borres otras cosas si no estás seguro.</p>
                </div>

                <h4>4. Reinicia el equipo</h4>
                <p>Fundamental para que se liberen completamente los servicios y configuraciones previas.</p>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--secondary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid var(--secondary); padding-bottom: 10px;">✅ Fase 3: Instalación desde Cero</h3>
            <div class="tutorial-pasos">
                <ol>
                    <li>Descarga <strong>MySQL Installer (Community Edition)</strong> desde el sitio oficial.</li>
                    <li>Durante la instalación:
                        <ul>
                            <li>Selecciona <strong>"Developer Default"</strong> o <strong>"Server Only"</strong>.</li>
                            <li>Define una nueva contraseña para <strong>root</strong>.</li>
                            <li><strong>Anótala bien</strong>, será la clave de acceso principal.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `,
        links: [
            { texto: "Descargar MySQL", url: "https://dev.mysql.com/downloads/installer/" },
            { texto: "Video: Tutorial de Instalacion", url: "https://www.youtube.com/watch?v=_K2nOYwOq1E", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "PSeInt (Lógica)",
        imagen: "img/programacion/PSe Int.jpg",
        comando: "Pseudocódigo",
        descripcion: "Herramienta pedagógica para aprender algoritmos mediante pseudocódigo en español.",
        contenidoTutorialHtml: `
            <h3>🧩 Lógica de Programación</h3>
            <div class="tutorial-pasos">
                <h4>1. Perfil de Configuración</h4>
                <ul>
                    <li><strong>Flexible:</strong> Para principiantes.</li>
                    <li><strong>Estricto:</strong> Prepara para lenguajes reales (puntos y comas obligatorios).</li>
                </ul>

                <h4>2. Diagramas de Flujo</h4>
                <p>Usa el icono <strong>Dibujar Diagrama</strong> para ver tu algoritmo de forma visual.</p>
            </div>
        `,
        links: [{ texto: "Sitio Oficial PSeInt", url: "https://pseint.sourceforge.net/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Java Development Kit (JDK)",
        imagen: "img/programacion/Java Development.jpg",
        comando: "javac --version",
        descripcion: "Kit oficial de Oracle para compilar y crear aplicaciones Java.",
        contenidoTutorialHtml: `
            <h3>🏗️ Configuración del Entorno Java</h3>
            <div class="tutorial-pasos">
                <h4>Paso 1: Instalación</h4>
                <p>Ruta por defecto: <code>C:\\Program Files\\Java\\jdk-22</code></p>
                
                <h4>Paso 2: Variable JAVA_HOME (Crítico)</h4>
                <p>Configura esta variable de entorno para que los IDEs reconozcan el SDK:</p>
                <ul>
                    <li>Nombre: <strong>JAVA_HOME</strong></li>
                    <li>Valor: <code>C:\\Program Files\\Java\\jdk-22</code></li>
                </ul>

                <h4>Paso 3: Verificación</h4>
                <div class="contenedor-comando">
                    <code>javac -version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Descargas Oracle", url: "https://www.oracle.com/java/technologies/downloads/" }],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Java Online Compiler",
        imagen: "img/programacion/compiler_logo.jpg",
        comando: "println(\"Hello\");",
        descripcion: "Compilador web para pruebas instantáneas sin instalaciones locales.",
        contenidoTutorialHtml: `
            <h3>☁️ Entorno de Pruebas Rápido</h3>
            <div class="tutorial-pasos">
                <h4>Ventajas:</h4>
                <ul>
                    <li><strong>Interactividad:</strong> Prueba entradas de teclado (Scanner).</li>
                    <li><strong>Portabilidad:</strong> Funciona en cualquier navegador.</li>
                </ul>
                <p><strong>Recomendación:</strong> Úsalo para traducir tus algoritmos de PSeInt a código real.</p>
            </div>
        `,
        links: [{ texto: "Abrir Compilador Web", url: "https://www.programiz.com/java-programming/online-compiler/" }],
        pasos: []
    },   
    {
        categoria: "programacion",
        titulo: "PostgreSQL & pgAdmin 4",
        imagen: "img/programacion/postgresql.jpg",
        comando: "psql -U postgres",
        descripcion: "Guía maestra para la instalación, configuración de seguridad y gestión de bases de datos con PostgreSQL y pgAdmin 4.",
        contenidoTutorialHtml: `
            <h3 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px;">🐘 Fase 1: Instalación y Configuración Inicial</h3>
            <div class="tutorial-pasos">
                <p><strong>1. Descarga Oficial:</strong> Ve a <code>postgresql.org</code>, selecciona <strong>Windows</strong> y haz clic en "Download the installer" de EnterpriseDB.</p>
                
                <p><strong>2. Componentes del Servidor:</strong> Durante el asistente de instalación, asegúrate de que estén marcados:
                    <ul>
                        <li>✅ PostgreSQL Server</li>
                        <li>✅ pgAdmin 4 (Gestor Gráfico)</li>
                        <li>✅ Stack Builder</li>
                        <li>✅ Command Line Tools</li>
                    </ul>
                </p>

                <p><strong>3. Seguridad (Password):</strong> Define la contraseña para el superusuario <strong>postgres</strong>. 
                <br><i>⚠️ Nota: Esta clave será necesaria para cada conexión; asegúrate de anotarla bien.</i></p>

                <p><strong>4. Puerto y Localización:</strong> Mantén el puerto predeterminado <code>5432</code> y la configuración regional por defecto. Pulsa <kbd>Siguiente</kbd> hasta finalizar.</p>
                
                <p><strong>5. Finalización:</strong> Al terminar, desmarca la casilla de <strong>Stack Builder</strong> si no deseas instalar herramientas adicionales por ahora, y pulsa <kbd>Finish</kbd>.</p>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, var(--primary), transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid var(--secondary); padding-bottom: 10px;">📊 Fase 2: Gestión Gráfica con pgAdmin 4</h3>
            <div class="tutorial-pasos">
                <p>1. Busca <strong>pgAdmin 4</strong> en tu menú inicio y ejecútalo como <strong>Administrador</strong>.</p>
                <p>2. En el panel izquierdo, despliega "Servers" y selecciona tu servidor (ej: PostgreSQL 18). Introduce la contraseña de root definida en la instalación.</p>
                
                <h4>Crear tu primera base de datos:</h4>
                <ol>
                    <li>Haz clic derecho en <strong>Databases > Create > Database...</strong>.</li>
                    <li>Asigna un nombre (ej: <code>myDB</code>) y pulsa <kbd>Save</kbd>.</li>
                    <li>Para crear tablas: Ve a <strong>Schemas > Tables > Create > Table...</strong> dentro de tu nueva BD.</li>
                    <li>Define columnas como <code>id</code> (Integer) y <code>name</code> (Text) según tu necesidad.</li>
                </ol>
            </div>

            <div style="height: 2px; background: linear-gradient(to right, #10b981, transparent); margin: 30px 0;"></div>

            <h3 style="border-bottom: 2px solid #10b981; padding-bottom: 10px;">💻 Fase 3: Acceso por Terminal (psql)</h3>
            <div class="tutorial-pasos">
                <p>Para gestionar tu base de datos mediante comandos rápidos, usa la herramienta <strong>psql Tool</strong> integrada en pgAdmin o la terminal:</p>
                
                <div class="contenedor-comando">
                    <code>psql -h 127.0.0.1 -p 5432 -U postgres</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Comandos Esenciales de Control:</h4>
                <ul>
                    <li><code>\\l</code> : Lista todas las bases de datos disponibles.</li>
                    <li><code>\\du</code> : Muestra la lista de usuarios y sus roles.</li>
                    <li><code>\\dt</code> : Lista las tablas de la base de datos actual.</li>
                </ul>
            </div>
            
            <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 12px; margin-top: 20px; border-radius: 4px;">
                <p style="margin: 0;"><i class="fas fa-info-circle"></i> <strong>Tip técnico:</strong> PostgreSQL utiliza el esquema <strong>public</strong> por defecto. Siempre busca tus tablas dentro de la ruta: <i>Base de datos > Schemas > public > Tables</i>.</p>
            </div>
        `,
        links: [
            { texto: "Descargar PostgreSQL", url: "https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" },
            { texto: "Video Tutorial Completo", url: "https://www.youtube.com/watch?v=T1PrXly6kOs", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "programacion",
        titulo: "Gestión de GitHub (Publicar y Eliminar)",
        imagen: "img/programacion/Github.jpg",
        comando: "https://github.com/login",
        descripcion: "Guía paso a paso para iniciar sesión, crear repositorios, publicar sitios web y gestionar su eliminación.",
        contenidoTutorialHtml: `
            <h3>🚀 Hosting y Gestión en GitHub</h3>
            <p>GitHub es la plataforma estándar para alojar código y desplegar sitios web de forma pública y gratuita.</p>
            
            <div class="tutorial-pasos">
                <h4><sating>Publicar Web Gratis</sating></h4>
                <ol>
                    <li>Ve a <strong>GitHub</strong> e <kbd>Inicia sesión</kbd> con tus credenciales.</li>
                    <code>
                        <a href="https://github.com/login" target="_blank" class="link-comando">https://github.com/login</a>
                    </code>
                     
                    <li>Haz clic en el botón <kbd>New</kbd> para crear un repositorio nuevo y alojar la página.</li>
                    <li>Asigna un <strong>Nombre</strong> a tu repositorio (puedes añadir una descripción opcional).</li>
                    <li>Marca la casilla <strong>"Add a README file"</strong> y haz clic en <kbd>Create repository</kbd>.</li>
                    <li>Dentro de tu repositorio, ve al botón <kbd>Add file</kbd> ➔ <kbd>Upload files</kbd>.</li>
                    <li>Arrastra o selecciona <strong>todos los archivos</strong> que contenga la carpeta de tu página web.</li>
                    <li>Una vez que terminen de cargarse, haz clic en el botón verde <kbd>Commit changes</kbd>.</li>
                    <li>Ve a la pestaña superior de <kbd>Settings</kbd> y en el menú lateral entra a <kbd>Pages</kbd>.</li>
                    <li>En el apartado <strong>Branch</strong>, cambia "None" por <kbd>main</kbd> y pulsa el botón <kbd>Save</kbd>.</li>
                </ol>

                <div style="background: rgba(46, 204, 113, 0.1); border-left: 4px solid #2ecc71; padding: 10px; margin: 15px 0; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-check-circle"></i> <strong>Paso Final:</strong> Espera de 1 a 2 minutos para que se procese, actualiza la página y pulsa en <kbd>Visit site</kbd> para ver tu web pública.</p>
                </div>

                <details class="acordeon-tutorial" style="margin-top: 20px; border-color: #e74c3c;">
                    <summary class="acordeon-header" style="background-color: #e74c3c;">
                        <i class="fas fa-trash-alt"></i> CLIC PARA ELIMINAR UN REPOSITORIO
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: rgba(231, 76, 60, 0.05); border: none;">
                        <p><strong>⚠️ Advertencia:</strong> Eliminar un repositorio es una acción permanente.</p>
                        <ol>
                            <li>Entra al repositorio que deseas borrar y ve a <kbd>Settings</kbd>.</li>
                            <li>Baja hasta el final de la página a la sección <strong>"Danger Zone"</strong>.</li>
                            <li>Pulsa el botón <kbd>Delete this repository</kbd>.</li>
                            <li><strong>Confirmación Crítica:</strong> Escribe exactamente el texto en negritas (ej: <code>usuario/nombre-repo</code>) y pulsa el botón de confirmación final.</li>
                        </ol>
                    </div>
                </details>
            </div>
        `,
        links: [
            { texto: "Video: Publicar Web", url: "https://www.youtube.com/shorts/GYBhmIDTe0g", plataforma: "youtube" },
            { texto: "Video: Eliminar Repo", url: "https://www.youtube.com/watch?v=7PhypMDoWrc", plataforma: "youtube" }
        ],
        pasos: []
    },

    //CATEGORIA EXCEL
    {
        categoria: "excel",
        titulo: "Quitar Protección de Hoja (Sin Clave)",
        imagen: "img/excel/Excel.jpg",
        comando: ".zip",
        descripcion: "Elimina la protección de una hoja de Excel modificando su XML interno para recuperar el acceso a la edición.",
        contenidoTutorialHtml: `
            <h3>🔓 Desbloqueo de Hoja Protegida</h3>
            <p>Este método es infalible cuando olvidas la contraseña de una hoja específica de Excel y necesitas editarla con urgencia.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Cambiar a formato ZIP</h4>
                <p>Haz una copia de seguridad y cambia la extensión del archivo original de <strong>.xlsx</strong> a <strong>.zip</strong>. Ábrelo con tu descompresor preferido.</p>
                
                <h4>Paso 2: Localizar la Hoja</h4>
                <p>Navega a la siguiente ruta interna del archivo comprimido:</p>
                <div class="contenedor-comando">
                    <code>xl/worksheets/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Ruta
                    </button>
                </div>
                <p>Extrae el archivo <strong>.xml</strong> de la hoja bloqueada (ejemplo:) <code>sheet1.xml</code> a tu escritorio.</p>
                
                <h4>Paso 3: Editar el archivo XML</h4>
                <p>Abre el archivo con el <strong>Bloc de Notas</strong>, presiona <kbd>Ctrl</kbd> + <kbd>F</kbd> y busca la siguiente etiqueta <code>&lt;sheetProtection ... /&gt;</code>
                 para borrarla desde el signo <strong>&lt;</strong> hasta el <strong>/&gt;</strong></p>
                
                <h4>Paso 4: Guardar y Finalizar</h4>
                <p>Guarda los cambios en el archivo, reemplaza el original dentro del ZIP con esta nueva versión y regresa la extensión del archivo a <strong>.xlsx</strong>.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/gcMF7Yu0u6Y",
                plataforma: "youtube"
            },
            {
                texto: "Video Tutorial",
                url: "https://www.facebook.com/reel/728884509538774",
                plataforma: "facebook"
            }
        ],
        pasos: []
    },
    // INVESTIGACION
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
                    <li>En <strong>Configuración > Dominios autorizados</strong>, añade <code>localhost</code> y <code>cyber911zona.github.io</code></li>
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

                <h4 style="margin-top:20px;">2. El CSS (Engranaje Favorito)</h4>
                <p>Define el estilo del icono cuando la nota está guardada en la nube:</p>
                <div class="contenedor-comando">
                    <code>.btn-fav-card.active { color: #f39c12; transform: rotate(45deg); }</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4 style="margin-top:20px;">3. El JS (Vigilante y Puente)</h4>
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
                    <li>Escribe <code>localhost</code> y dale a <strong>Add</strong>. Repite el proceso para añadir <code>127.0.0.1</code> y <code>cyber911zona.github.io</code></li>
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
                    <code>cyber911zona.github.io/*</code>
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
                <p style="margin-top:10px;"><strong>Ejemplo de estructura:</strong></p>
                <pre style="font-size:0.85rem; color:var(--text-main); background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">
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
    if (nota.esPrivada && (!usuarioActual || usuarioActual.uid !== '9Hv406JpA8PAbdPXMmH1wdhTd3i2')) {<br>
    &nbsp;&nbsp;return; <br>
    }
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Filtro</button>
                </div>
                <p class="warning" style="margin-top:10px;">⚠️ <strong>Nota:</strong> Este código debe ir justo después de iniciar el <code>forEach</code> en la función <code>mostrarNotas</code></p>
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
    //CATEGORIA UTILIDADES    
    // =====================================================
    // CATEGORIA UTILIDADES
    // =====================================================
    {
        categoria: "utilidades",
        titulo: "Encender PC con Alexa (Wake on LAN)",
        imagen: "img/utilidades/alexapc.jpg",
        comando: "Alexa Skill + WOL",
        descripcion: "Configura tu computadora para encenderla mediante comandos de voz usando la tecnología Wake on LAN.",
        contenidoTutorialHtml: `
            <h3>🗣️ Domótica: Wake on LAN con Alexa</h3>
            <p>Este tutorial te permite encender tu PC desde cualquier lugar usando un dispositivo Echo o la app de Alexa.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Activar la Skill</h4>
                <p>Busca en la tienda de Amazon la Skill <strong>"Encender por red"</strong> (Wake on LAN) y actívala con tu cuenta.</p>

                <h4>Paso 2: Obtener la Dirección MAC</h4>
                <p>Necesitas la identificación física de tu tarjeta de red. Ejecuta este comando en el CMD:</p>
                <div class="contenedor-comando">
                    <code>getmac /v /fo list</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p><small><i>Alternativa: Panel de control -> Redes -> Ethernet -> Detalles -> Dirección física.</i></small></p>
                
                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-external-link-alt"></i> CLIC PARA CONFIGURACIÓN WEB
                    </summary>
                    <div class="tutorial-pasos warning">
                        <ol>
                            <li>Entra a la web oficial de la skill:</li>
                            <div class="contenedor-comando">
                                <code>
                                    <a href="https://www.wolskill.com/" target="_blank" class="link-comando">https://www.wolskill.com/</a>
                                </code>
                                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                    <i class="fas fa-copy"></i> Copiar Link
                                </button>
                            </div>
                            <li>Inicia sesión con tu cuenta de Amazon.</li>
                            <li>Registra tu equipo (ej: <strong>Computadora</strong>) y pega la <strong>MAC</strong> que obtuviste antes.</li>
                        </ol>
                    </div>
                </details>

                <h4>Paso 3: Sincronizar con Alexa</h4>
                <p>En tu App móvil: <strong>Dispositivos</strong> ➔ <strong>Añadir (+)</strong> ➔ <strong>Otro</strong> ➔ <strong>Wi-Fi</strong> ➔ <strong>Detectar dispositivos</strong>.</p>
            </div>
            
            <p style="margin-top: 15px; font-size: 0.85rem;">
                <i class="fas fa-exclamation-circle"></i> <strong>Importante:</strong> Debes habilitar "Wake on LAN" en la BIOS y en las propiedades del adaptador de red en Windows.
            </p>
        `,
        links: [
            { texto: "Ver Tutorial", url: "https://www.youtube.com/watch?v=q24Sg1tWGVY", plataforma: "youtube" },
            { texto: "Activar Wake-On-LAN", url: "https://www.youtube.com/watch?v=EyrfE6jXVbU", plataforma: "youtube" }
        ],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Atajos de Teclado para Navegador",
        imagen: "img/utilidades/atajos-chromeos1.jpg",
        comando: "Atajos de Navegador",
        descripcion: "Muévete entre pestañas y busca información como un experto sin usar el ratón.",
        contenidoTutorialHtml: `
            <h3>⌨️ Atajos de Teclado Vitales</h3>
            <p>Domina Chrome, Edge o Firefox con estas combinaciones esenciales:</p>
            
            <div class="tutorial-pasos">
                <h4>Navegación de Pestañas:</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>Tab</kbd> : Pestaña siguiente.</li>
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> : Pestaña anterior.</li>
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>L</kbd> : Ir a la barra de direcciones.</li>
                </ul>

                <h4>Búsqueda en la Página:</h4>
                <p>Para localizar palabras específicas al instante:</p>
                <div class="contenedor-comando">
                    <code>Ctrl + F</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },    
    {
        categoria: "utilidades",
        titulo: "Atajos de teclado para Windows",
        imagen: "img/utilidades/atajos teclado.jpg",
        comando: "Atajos de Teclado",
        descripcion: "Guía definitiva organizada por niveles, desde los imprescindibles hasta los comandos de terminal avanzado.",
        contenidoTutorialHtml: `
            <h3>📖 Diccionario de Productividad</h3>
            <p>Dominar estos atajos reduce el uso del mouse en un 40% y acelera el soporte técnico significativamente.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-star"></i> NIVEL 1: LOS IMPRESCINDIBLES
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Uso cada 5 minutos. Son los pilares de la navegación en Windows.</p>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> / <kbd>X</kbd></td>
                                <td style="padding: 8px;">Copiar, Pegar y Cortar.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Y</kbd></td>
                                <td style="padding: 8px;">Deshacer y Rehacer acción.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Alt</kbd> + <kbd>Tab</kbd></td>
                                <td style="padding: 8px;">Cambiar entre aplicaciones.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>D</kbd> / <kbd>L</kbd></td>
                                <td style="padding: 8px;">Mostrar escritorio / Bloquear.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>E</kbd> / <kbd>R</kbd></td>
                                <td style="padding: 8px;">Explorador / Ventana Ejecutar.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-desktop"></i> NIVEL 2: SISTEMA Y PANTALLA
                    </summary>
                    <div class="tutorial-pasos warning">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd></td>
                                <td style="padding: 8px;">Administrador de tareas.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>V</kbd></td>
                                <td style="padding: 8px;">Historial del Portapapeles.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
                                <td style="padding: 8px;">Recorte de pantalla selectivo.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>Flechas</kbd></td>
                                <td style="padding: 8px;">Ajustar ventanas a los lados.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-folder-open"></i> NIVEL 3: ARCHIVOS Y DIÁLOGOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>F2</kbd> / <kbd>F5</kbd></td>
                                <td style="padding: 8px;">Renombrar / Actualizar.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Alt</kbd> + <kbd>Enter</kbd></td>
                                <td style="padding: 8px;">Propiedades del elemento.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>I</kbd> / <kbd>X</kbd></td>
                                <td style="padding: 8px;">Configuración / Menú rápido.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-user-tie"></i> NIVEL 4: MODO EXPERTO
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Para usuarios que manejan entornos virtuales y terminales:</p>
                        
                        <div class="contenedor-comando">
                            <code>Win + Ctrl + D</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar Combo
                            </button>
                        </div>
                        <p><small>Crear un nuevo Escritorio Virtual limpio.</small></p>

                        <div class="contenedor-comando" style="margin-top: 10px;">
                            <code>Win + .</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar Combo
                            </button>
                        </div>
                        <p><small>Abrir panel de Emojis, Símbolos técnicos y Kaomojis.</small></p>
                    </div>
                </details>

                <div style="background: rgba(52, 152, 219, 0.1); border-left: 4px solid #3498db; padding: 12px; margin-top: 20px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-lightbulb" style="color: #f1c40f;"></i> <strong>Pro Tip:</strong> Activa el historial del portapapeles con <kbd>Win</kbd> + <kbd>V</kbd> para no perder nunca lo que copiaste anteriormente.</p>
                </div>

            </div>
        `,
        links: [
            {
                texto: "Lista Completa de Microsoft",
                url: "https://support.microsoft.com/es-es/windows/métodos-abreviados-de-teclado-de-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec"
            },
            {   texto: "Manual Word Original", 
                url: "https://docs.google.com/document/d/1VcbOgtIhIHOAZeEHkfTZuuAsXDJzU-v_/edit?usp=drive_link" 
            }
        ],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Funciones Ocultas de Windows 11",
        imagen: "img/utilidades/windows1.jpg",
        comando: "Accesos rápidos / Configuración",
        descripcion: "Manual de herramientas nativas para extraer texto, dictado por voz, organización de ventanas y trucos de sistema avanzados.",
        contenidoTutorialHtml: `
            <h3>🚀 Potencia tu flujo de trabajo en Windows</h3>
            <p>Descubre herramientas integradas que te permitirán trabajar de forma más rápida e inteligente.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-keyboard"></i> 1. OCR, VOZ Y SUBTÍTULOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>OCR (Extraer texto):</strong> Presiona <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>, toma una captura y en la herramienta Recortes pulsa en <strong>"Acciones de texto"</strong> para copiar el contenido de la imagen.</p>
                        
                        <p><strong>Escritura por voz:</strong> Abre cualquier cuadro de texto y presiona:</p>
                        <div class="contenedor-comando">
                            <code>Win + H</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p><small>Tip: Activa la "Puntuación automática" en los ajustes del dictado.</small></p>

                        <p><strong>Subtítulos en vivo:</strong> Muestra texto en tiempo real para cualquier audio del sistema (videos, llamadas, podcasts) con el atajo:</p>
                        <div class="contenedor-comando">
                            <code>Win + Ctrl + L</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>                

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-bullseye"></i> 2. ENFOQUE Y VENTANAS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Sesiones de enfoque:</strong> Abre la app de <strong>Reloj</strong> y activa una sesión. Silenciará notificaciones automáticamente por el tiempo que elijas.</p>
                        
                        <p><strong>Agitar barra de título (Aero Shake):</strong> Minimiza todas las ventanas excepto la que estás moviendo. Actívalo en:</p>
                        <p><small>Configuración ➔ Sistema ➔ Multitarea ➔ <strong>Agitar la barra de título</strong>.</small></p>

                        <p><strong>Sitios web como Aplicaciones:</strong> En Edge o Chrome, ve a los 3 puntos ➔ Aplicaciones ➔ <strong>Instalar este sitio como aplicación</strong> para tener acceso directo en el escritorio.</p>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-cogs"></i> 3. TRUCOS DE SISTEMA
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Luz Nocturna:</strong> Reduce la luz azul para proteger tu vista en:</p>
                        <p><small>Configuración ➔ Sistema ➔ Pantalla ➔ <strong>Luz nocturna</strong>.</small></p>

                        <p><strong>Finalizar tareas desde la barra:</strong> Cierra apps congeladas sin abrir el administrador de tareas. Habilítalo en:</p>
                        <p><small>Configuración ➔ Sistema ➔ Para programadores ➔ Activar <strong>Finalizar tarea</strong>.</small></p>

                        <p><strong>Menú clásico directo:</strong> Para saltar el menú de Windows 11 y ver el antiguo de Windows 10, mantén presionado <kbd>Shift</kbd> mientras haces <strong>Clic derecho</strong> en cualquier archivo.</p>
                    </div>
                </details>

                <div class="tech-note note-info">
                    <i class="fas fa-lightbulb"></i>
                    <p><strong>Dato Pro:</strong> Casi todas estas funciones son nativas de Windows 11, por lo que no requieren instalar ningún programa externo.</p>
                </div>
            </div>           
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=M8MpFSnPJcw",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "WhatsApp Directo",
        imagen: "img/utilidades/whatsapp enlace.jpg",
        comando: "https://wa.me/[número]",
        descripcion: "Envía mensajes a números de WhatsApp sin necesidad de guardarlos en tu lista de contactos.",
        contenidoTutorialHtml: `
            <h3>📲 Mensajería Rápida</h3>
            <p>Ideal para ventas o trámites rápidos donde no quieres llenar tu agenda de contactos temporales.</p>
            
            <div class="tutorial-pasos">
                <h4>Cómo usarlo:</h4>
                <p>Escribe la estructura en tu navegador seguida del número con código de país (sin el signo +):</p>
                
                <div class="contenedor-comando">
                    <code>https://wa.me/521234567890</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                
                <div style="background: rgba(52, 152, 219, 0.1); border-left: 4px solid #3498db; padding: 10px; margin-top: 15px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Sustituye el número de ejemplo por el real. El chat se abrirá automáticamente en WhatsApp Web o la App.</p>
                </div>
            </div>
        `,
        links: [{ texto: "Generador de Enlaces", url: "https://create.wa.link/" }],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Formatos de Texto en WhatsApp",        
        imagen: "img/utilidades/texto formato.jpg",
        comando: "Símbolos de formato",
        descripcion: "Guía completa de formatos: negritas, cursivas, listas, citas y nuevos comandos de código.",
        contenidoTutorialHtml: `
            <h3>✍️ Guía Maestra de Escritura en WhatsApp</h3>
            <p>Utiliza estos símbolos al inicio o envolviendo tus frases para organizar mejor tus mensajes.</p>
            
            <div class="tutorial-pasos">
                <h4>1. Formatos de Énfasis</h4>
                <ul>
                    <li><strong>Negrita:</strong> Pon el texto entre asteriscos <code>*ejemplo*</code></li>
                    <li><em>Cursiva:</em> Pon el texto entre guiones bajos <code>_ejemplo_</code></li>
                    <li><del>Tachado:</del> Pon el texto entre virgulillas <code>~ejemplo~</code></li>
                    <li>Monospace: Usa tres acentos abiertos <code>\`\`\`ejemplo\`\`\`</code></li>
                </ul>

                <h4 style="margin-top:20px;">2. Listas y Organización</h4>
                <ul>
                    <li><strong>Lista con puntos:</strong> Pon un guión y un espacio al inicio <code>- ejemplo</code></li>
                    <li><strong>Lista numerada:</strong> Pon el número, un punto y un espacio <code>1. ejemplo</code></li>
                </ul>

                <h4 style="margin-top:20px;">3. Citas y Código</h4>
                <ul>
                    <li><strong>Cita textual:</strong> Usa el signo mayor que y un espacio <code>> ejemplo</code></li>
                    <li><strong>Código alineado:</strong> Envuelve la frase con un acento abierto <code>\`ejemplo\`</code></li>
                </ul>
            </div>
            
            <p style="margin-top: 15px;"><i>Nota: Estos formatos funcionan tanto en la App móvil como en WhatsApp Web y Escritorio.</i></p>
        `,
        links: [
            { texto: "Centro de Ayuda WhatsApp", url: "https://faq.whatsapp.com/631243515438843/?helpref=uf_share" }
        ],
        pasos: []
    },
    { // JS: Objeto de datos para la herramienta PowerToys
        categoria: "utilidades", // JS: Se asigna a la pestaña de utilidades técnicas
        titulo: "Microsoft PowerToys (Pro Suite)", // JS: Nombre destacado en la tarjeta
        imagen: "img/utilidades/powertoys.jpg", // HTML/JS: Ruta de la imagen ilustrativa
        comando: "winget install Microsoft.PowerToys", // JS: Comando rápido de instalación por terminal
        descripcion: "Colección de herramientas de Microsoft para usuarios avanzados que mutan la productividad de Windows.", // JS: Resumen
        contenidoTutorialHtml: ` 
            <h3>🚀 Potencia tu Flujo de Trabajo</h3> 
            <p>PowerToys añade funciones de personalización y productividad que no vienen por defecto en Windows 10 u 11.</p>
            
            <div class="tutorial-pasos"> 
                <h4>Paso 1: Instalación por Consola</h4>
                <p>Abre CMD o PowerShell y pega el siguiente comando:</p>
                <div class="contenedor-comando"> 
                    <code>winget install Microsoft.PowerToys</code> 
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"> 
                        <i class="fas fa-copy"></i> Copiar 
                    </button>
                </div>
                <p style="margin-top:10px;"><small><i>Nota: También puedes bajarlo desde la Microsoft Store o GitHub.</i></small></p>
            </div>

            <details class="acordeon-tutorial">
                <summary class="acordeon-header">
                    <i class="fas fa-rocket"></i> PRODUCTIVIDAD EXTREMA
                </summary>
                <div class="tutorial-pasos">
                    <p><strong>PowerToys Run:</strong> El buscador más rápido (<kbd>Alt</kbd> + <kbd>Espacio</kbd>). Lanza apps y hace cálculos al instante.</p>
                    <p><strong>Text Extractor:</strong> Copia texto de CUALQUIER imagen o video con <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>.</p>
                    <p><strong>Always on Top:</strong> Fija una ventana al frente de todas con <kbd>Win</kbd> + <kbd>Ctrl</kbd> + <kbd>T</kbd>.</p>
                </div>
            </details>

            <details class="acordeon-tutorial" style="margin-top: 10px;">
                <summary class="acordeon-header">
                    <i class="fas fa-palette"></i> DISEÑO Y MULTIMEDIA
                </summary>
                <div class="tutorial-pasos">
                    <p><strong>Selector de colores:</strong> Obtén el código HEX/RGB de cualquier píxel con <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>.</p>
                    <p><strong>Image Resizer:</strong> Cambia el tamaño de cientos de fotos a la vez desde el clic derecho.</p>
                    <p><strong>Peek (Ojear):</strong> Previsualiza fotos y archivos sin abrirlos usando <kbd>Ctrl</kbd> + <kbd>Espacio</kbd>.</p>
                </div>
            </details>

            <details class="acordeon-tutorial" style="margin-top: 10px;">
                <summary class="acordeon-header">
                    <i class="fas fa-mouse"></i> CONTROL Y SISTEMA
                </summary>
                <div class="tutorial-pasos">
                    <p><strong>Awake:</strong> Evita que tu PC se suspenda mientras descargas archivos pesados.</p>
                    <p><strong>Encontrar mi Mouse:</strong> Pulsa <kbd>Ctrl</kbd> dos veces y un haz de luz te dirá dónde está el puntero.</p>
                    <p><strong>PowerRename:</strong> Cambia el nombre a miles de archivos con reglas inteligentes de búsqueda.</p>
                </div>
            </details>
        `, // HTML/JS: Contenido con acordeones inyectado en el modal
        links: [ // JS: Enlaces de referencia externa
            { 
                texto: "Web Oficial (GitHub)", 
                url: "https://github.com/microsoft/PowerToys" 
            },
            { 
                texto: "Video Tutorial Completo", 
                url: "https://www.youtube.com/watch?v=bEGfn3riLRg",
                plataforma: "youtube"
            }
        ],
        pasos: [] // JS: Campo vacío por uso de HTML personalizado
    },
    
            
];
