// Datos de categoría: windows
// Generado automáticamente desde data.js
export const datos_windows = [
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
        titulo: "NHV BOOT (Kit de Rescate para PC)",
        imagen: "img/windows/nhv-boot.jpg",
        comando: "https://nhvboot.com/",
        descripcion: "Entorno de rescate portable basado en WinPE para diagnosticar, reparar e instalar Windows desde una USB, sin necesidad de que el sistema original arranque.",
        contenidoTutorialHtml: `
            <h3>🛠️ Kit de Rescate Portable (WinPE)</h3>
            <p>NHV BOOT es un entorno de rescate que arranca desde una memoria USB, sin necesidad de que Windows funcione en la computadora que estás reparando. Trae docenas de herramientas ya integradas: diagnóstico de hardware, particionado de disco, recuperación de datos, remoción de virus y reinstalación de Windows — todo desde un solo USB.</p>

            <div class="tutorial-pasos">
                <h4>Enlace de descarga oficial:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://nhvboot.com/" target="_blank" class="link-comando">https://nhvboot.com/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>

                <div class="nota-peligro">
                    <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Descárgalo únicamente del sitio oficial</strong> (<code>nhvboot.com</code>). Existen sitios de terceros ofreciendo versiones "sin licencia" (crackeadas). Como esta herramienta tiene acceso de bajo nivel al sistema (arranque, particiones, registro), una copia modificada por terceros es un riesgo real de seguridad, no solo un tema de licencia.</p>
                </div>

                <h4>¿Es gratis?</h4>
                <p>Sí, tiene una versión gratuita totalmente funcional para lo básico. El modelo es freemium:</p>
                <ul>
                    <li><strong>Gratuita (Standard):</strong> el kit de herramientas de rescate completo, sin soporte técnico personalizado.</li>
                    <li><strong>De pago (1 año):</strong> desbloquea velocidades de arranque superiores y soporte técnico directo con el desarrollador.</li>
                    <li><strong>De pago (de por vida):</strong> lo mismo que la anterior, pero sin vencimiento — pago único.</li>
                </ul>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-balance-scale"></i> VENTAJAS Y DESVENTAJAS (antes de decidir usarlo)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <h4 class="color-exito">✅ A favor</h4>
                        <ul>
                            <li>Arranque rápido y interfaz moderna, fácil de usar incluso sin mucha experiencia técnica.</li>
                            <li>Trae herramientas ya integradas y en versión portable: AIDA64, CPU-Z, CrystalDiskInfo, HD Sentinel, AOMEI Partition Assistant, DiskGenius, y utilidades de recuperación de datos.</li>
                            <li>Soporta hardware reciente: discos NVMe, SSDs de Mac, desbloqueo de BitLocker, pantallas táctiles, WiFi/LAN automático.</li>
                            <li>Mantenimiento activo — actualizaciones frecuentes (el proyecto lleva desde 2021, actualmente en 2026).</li>
                            <li>Soporta arranque UEFI y Legacy, cubriendo desde equipos viejos hasta los más nuevos.</li>
                        </ul>

                        <h4 class="color-peligro">⚠️ En contra</h4>
                        <ul>
                            <li>Proyecto de una empresa pequeña (Vietnam), mucho menos documentado en español/inglés que alternativas como Hiren's BootCD PE, que lleva más años y tiene una comunidad enorme.</li>
                            <li>No trae antivirus integrado por defecto — a diferencia de otras suites de rescate, esto ha sido pedido explícitamente por usuarios en sus redes oficiales.</li>
                            <li>Al ser menos conocido, hay menos gente documentando soluciones en foros como StackOverflow si algo sale mal.</li>
                        </ul>
                    </div>
                </details>

                <p class="mt-15"><i>Recomendación: para uso ocasional o personal, la versión gratuita es perfectamente suficiente. El pago solo suma soporte técnico y algunas mejoras de velocidad, no funciones esenciales de rescate.</i></p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial NHV BOOT", url: "https://nhvboot.com/" }
        ],
        pasos: []
    },
{
        categoria: "windows",
        titulo: "Rufus (USB Booteable)",
        imagen: "img/windows/rufus.jpg",
        comando: "https://rufus.ie/es/",
        descripcion: "La utilidad más rápida para crear unidades USB de arranque a partir de imágenes ISO. Incluye guía de compatibilidad UEFI/Legacy y tips avanzados.",
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

                <div class="separador-grad"></div>

                <h4 class="borde-primary">🔍 Antes de grabar: averigua si tu PC usa UEFI o Legacy</h4>
                <p>Esto es importante porque, según lo que tenga tu computadora, tienes que configurar Rufus de una forma u otra. Para saberlo:</p>
                <ol>
                    <li>Presiona <kbd>Win</kbd> + <kbd>R</kbd> y ejecuta:</li>
                </ol>
                <div class="contenedor-comando">
                    <code>msinfo32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>Se abrirá "Información del Sistema". En la pestaña de "Resumen del sistema", busca el campo <strong>"Modo de BIOS"</strong>. Ahí verá una de estas dos palabras:</p>
                <ul>
                    <li><strong>UEFI</strong> — tu PC es relativamente moderna y usa el estándar de arranque actual.</li>
                    <li><strong>Legacy</strong> (o "Heredado") — tu PC usa el sistema de arranque clásico, más antiguo.</li>
                </ul>

                <div class="separador-grad"></div>

                <details class="acordeon-tutorial" open>
                    <summary class="acordeon-header">
                        <i class="fas fa-sitemap"></i> ¿QUÉ SON "ESQUEMA DE PARTICIÓN" Y "SISTEMA DE DESTINO"?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Al abrir Rufus y cargar tu ISO, verás dos menús clave. Aquí una explicación simple de cada uno:</p>

                        <h4 class="color-info">Esquema de partición</h4>
                        <p>Es la forma en que se organiza la información de arranque en el disco. Hay dos opciones:</p>
                        <ul>
                            <li><strong>GPT:</strong> el formato moderno. Necesario para instalar Windows 11 y para discos de más de 2TB.</li>
                            <li><strong>MBR:</strong> el formato clásico, más antiguo, pero con mejor compatibilidad hacia atrás con equipos viejos.</li>
                        </ul>

                        <h4 class="color-exito">Sistema de destino</h4>
                        <p>Es el tipo de arranque que tendrá tu USB. Rufus te ofrece, típicamente:</p>
                        <ul>
                            <li><strong>UEFI (non CSM):</strong> arranque UEFI puro, sin compatibilidad hacia atrás. Requiere esquema GPT.</li>
                            <li><strong>BIOS o UEFI:</strong> arranque híbrido — funciona en ambos modos. Requiere esquema MBR.</li>
                        </ul>

                        <div class="nota-info mt-15">
                            <p class="m-0"><i class="fas fa-lightbulb"></i> <strong>Regla práctica:</strong> Rufus normalmente selecciona la combinación correcta automáticamente en cuanto cargas tu ISO, según lo que ese sistema operativo soporte. No necesitas adivinar — solo revisa que coincida con lo que descubriste con <code>msinfo32</code>.</p>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-code-branch"></i> ¿SE PUEDE HACER UN USB QUE ARRANQUE EN UEFI Y LEGACY A LA VEZ?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Sí. Al elegir <strong>Esquema de partición: MBR</strong> + <strong>Sistema de destino: BIOS o UEFI</strong>, el USB queda preparado para arrancar en ambos modos en la misma memoria.</p>
                        <p><strong>¿Por qué funciona?</strong> Porque la mayoría de los sistemas UEFI incluyen un componente llamado <strong>CSM (Compatibility Support Module)</strong>, que le permite al UEFI "fingir" ser un BIOS clásico cuando detecta un medio de arranque en formato MBR/Legacy.</p>

                        <p><strong>✅ ¿Cuándo funciona sin problema?</strong><br>
                        En la gran mayoría de las PCs con UEFI que todavía tienen el CSM disponible — especialmente equipos de hasta hace algunos años. Es la opción recomendada para máxima compatibilidad "universal" entre equipos viejos y nuevos.</p>

                        <p><strong>⚠️ ¿Cuándo NO funciona?</strong><br>
                        En equipos más nuevos con <strong>Secure Boot</strong> activado, o que ya no traen CSM disponible (cada vez más común, sobre todo pensando en Windows 11), el sistema exige <strong>GPT + UEFI puro (sin CSM)</strong>. Si intentas arrancar un USB en modo híbrido en una de estas máquinas, simplemente <strong>no arranca</strong> — no es que funcione mal, es que ese modo no es compatible ahí.</p>

                        <div class="nota-peligro mt-15">
                            <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Importante:</strong> no puedes tener los dos modos activos al mismo tiempo en el disco final ya instalado — la flexibilidad del híbrido está solo en el USB de instalación. Una vez que instalas el sistema operativo en la PC, el disco queda fijo en un solo modo (MBR/Legacy o GPT/UEFI), según cómo hayas arrancado ese USB.</p>
                        </div>

                        <h4 class="color-morado mt-15">Atajo secreto: Alt + E</h4>
                        <p>Rufus tiene un "modo oculto" que no aparece en ningún menú visible, llamado <strong>"Dual UEFI/BIOS mode"</strong>:</p>
                        <ol>
                            <li>Abre Rufus y selecciona tu ISO normalmente.</li>
                            <li>Presiona la combinación <kbd>Alt</kbd> + <kbd>E</kbd> en el teclado (no hace falta hacer clic en ningún campo primero).</li>
                        </ol>
                        <p>Esto hace que el esquema <strong>"MBR partition scheme for UEFI"</strong> (que normalmente solo arranca en UEFI) también se vuelva arrancable en sistemas BIOS/Legacy. Es una capa <em>extra</em> de compatibilidad — distinta a simplemente elegir "MBR" + "BIOS o UEFI" en el menú normal, que ya cubre ambos modos para la mayoría de los casos por sí solo.</p>

                        <h4 class="color-info mt-15">¿Y si me da conflicto? — Mejor ir por un modo "puro"</h4>
                        <p>Cuando hay conflicto real (equipos modernos con Secure Boot, sin CSM disponible), lo correcto es usar uno de los dos modos puros — nunca forzar el híbrido en esos casos:</p>
                        <ul>
                            <li><strong>UEFI puro (GPT + UEFI sin CSM):</strong> lo que necesitas casi siempre hoy en día — equipos nuevos, Windows 11 (que además <em>requiere</em> GPT+UEFI+Secure Boot para instalarse sin trucos), y discos SSD grandes (más de 2TB, que MBR no soporta).</li>
                            <li><strong>Legacy puro (MBR + BIOS):</strong> solo para equipos realmente viejos que no tienen UEFI en absoluto, o cuando necesitas compatibilidad con un sistema operativo antiguo que no entiende UEFI.</li>
                        </ul>
                        <p class="mt-15"><i>Regla práctica: si no sabes con certeza en qué modo arranca la PC de destino, revisa primero con <code>msinfo32</code> el "Modo de BIOS" y configura Rufus para que coincida exactamente con eso, en vez de usar el híbrido a ciegas.</i></p>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-tools"></i> OTRAS OPCIONES ÚTILES DE RUFUS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <h4 class="color-info">"Add fixes for old BIOSes" (Agregar arreglos para BIOS antiguos)</h4>
                        <p>Esta casilla, disponible en modo avanzado, ayuda a que el USB también arranque en placas base muy viejas que tienen firmware con errores conocidos. Actívala solo si vas a usar el USB en un equipo realmente antiguo — en equipos modernos no hace falta.</p>

                        <h4 class="color-exito">Modo de escritura: ISO vs DD</h4>
                        <p>Al grabar ciertas imágenes (sobre todo de Linux), Rufus te preguntará cómo escribir el archivo:</p>
                        <ul>
                            <li><strong>Modo ISO (recomendado la mayoría de las veces):</strong> copia los archivos de forma que sigan siendo accesibles como una unidad normal, y suele ser más compatible.</li>
                            <li><strong>Modo DD (Imagen de disco):</strong> copia la imagen tal cual, sector por sector. Es obligatorio para algunas distribuciones de Linux que no arrancan bien en modo ISO. Si Rufus te avisa que "esta imagen requiere modo DD", simplemente acepta esa opción.</li>
                        </ul>

                        <h4 class="color-amarillo">Bypass de TPM y Secure Boot para Windows 11</h4>
                        <p>Si tu PC no cumple los requisitos oficiales de Windows 11 (como tener un chip TPM 2.0), Rufus puede modificar automáticamente el instalador para omitir esa validación. Esta opción aparece como una casilla al cargar una ISO de Windows 11 — actívala solo si sabes que tu equipo no cumple esos requisitos y aun así quieres instalarlo.</p>

                        <h4 class="color-peligro">Formato rápido vs. formato completo</h4>
                        <p>Por defecto, Rufus usa "Formato Rápido" (más veloz, no revisa la memoria en busca de errores). Si tu USB te ha dado problemas antes o es de dudosa procedencia, puedes desmarcar esa casilla para que Rufus haga un formateo más profundo — tardará más, pero detecta sectores dañados.</p>
                    </div>
                </details>
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
            
            <p class="mt-15"><i>Nota: Si recibes un error indicando que "no se encuentra la opción", es posible que tu equipo no sea compatible con UEFI o que no estés ejecutando la consola como administrador.</i></p>
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
            <h3 class="borde-primary">🖥️ Fase 1: Requisitos y Activación</h3>
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

            <div class="separador-grad"></div>

            <h3 class="borde-secondary">⚙️ Fase 2: Asistente de Creación Paso a Paso</h3>
            <p>1. Busca y abre el <strong>Administrador de Hyper-V</strong>.</p>
            
            <div class="nota-info">
                <p class="m-0"><strong>⚠️ PASO PREVIO:</strong> En la columna de la izquierda, haz clic sobre el nombre de tu computadora (ej: usuarios) para habilitar el menú de "Acciones" en el panel derecho.</p>
            </div>

            <p>2. En el panel derecho selecciona <strong>Nuevo > Máquina virtual</strong>. Sigue este orden exacto del menú izquierdo:</p>
            
            <div class="tutorial-pasos">
                <ul class="lista-limpia">
                    <li class="mb-15"><strong>1. Antes de comenzar:</strong> Haz clic en el botón <kbd>Siguiente</kbd>.</li>
                    
                    <li class="mb-15"><strong>2. Nombre y ubicación:</strong> Escribe un nombre para identificar tu máquina y pulsa <kbd>Siguiente</kbd>.</li>
                    
                    <li class="mb-15"><strong>3. Especificar generación:</strong> Elige según tu necesidad:
                        <ul class="mt-5">
                            <li><strong>Generación 1:</strong> Para sistemas antiguos de 32 bits o versiones que no soportan UEFI.</li>
                            <li><strong>Generación 2:</strong> Para sistemas modernos basados en UEFI (64 bits). 
                            <br>Tras seleccionar, pulsa <kbd>Siguiente</kbd>.</li>
                        </ul>
                    </li>
                    
                    <li class="mb-15"><strong>4. Asignación de memoria:</strong> Define la RAM en MB. 
                        <br><strong>Fórmula de ejemplo para 6GB:</strong> <code>6 x 1024 = 6144</code>
                        <br>Calcula tus GB deseados y escribe el resultado. Pulsa <kbd>Siguiente</kbd>.
                    </li>
                    
                    <li class="mb-15"><strong>5. Configurar funciones de red:</strong> Define si tendrás conexión:
                        <ul class="mt-5">
                            <li><strong>No conectado:</strong> Si deseas aislamiento total sin internet.</li>
                            <li><strong>Default Switch:</strong> Para tener internet automático.
                            <br>Selecciona una opción y pulsa <kbd>Siguiente</kbd>.</li>
                        </ul>
                    </li>
                    
                    <li class="mb-15"><strong>6. Conectar disco duro virtual:</strong> Se guardará en <code>C:\\ProgramData\\Microsoft\\Windows\\Virtual Hard Disks\\</code>
                        <br><strong>Tamaño:</strong> Especifica el espacio total (GB) que tendrá la máquina para Windows y tus archivos. Pon lo que consideres necesario y pulsa <kbd>Siguiente</kbd>.
                    </li>
                    
                    <li class="mb-15"><strong>7. Opciones de instalación:</strong> Elige <strong>"Instalar un S.O. desde un CD/DVD-ROM de arranque"</strong>. 
                        <br>Marca <strong>"Archivo de imagen (.iso)"</strong>, usa el botón <kbd>Examinar</kbd> para buscar tu ISO y pulsa <kbd>Siguiente</kbd>.
                    </li>

                    <li class="mb-15"><strong>8. Resumen:</strong> Revisa que todos los pasos coincidan y pulsa <kbd>Finalizar</kbd>.</li>
                </ul>
            </div>
            <div class="separador-grad"></div>
            <h3 class="borde-primary">🚀 Fase 3: Ejecución Final</h3>                
            <div class="tutorial-pasos warning">                
                <ol>
                    <li>En la lista central, haz clic derecho en tu máquina y selecciona <kbd>Conectar</kbd>.</li>
                    <li>En la ventana negra, haz clic en el botón azul <kbd>Iniciar</kbd>.</li>
                    <li><strong>⚠️ CRÍTICO:</strong> En cuanto veas letras blancas, presiona rápidamente <strong>cualquier tecla</strong> de tu teclado físico para que el arranque comience desde el ISO.</li>
                    <li>Sigue los pasos de instalación de Windows como lo harías normalmente.</li>
                </ol>
            </div>
            
            <div class="nota-primary">
                <p class="m-0"><i class="fas fa-microchip"></i> <strong>Tip técnico:</strong> Asegúrate de que la <strong>Virtualización</strong> esté activa en tu BIOS/UEFI, de lo contrario Hyper-V no aparecerá disponible.</p>
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
            <h3 class="borde-primary">🖥️ Fase 1: Descarga e Instalación</h3>
            <div class="tutorial-pasos">
                <p><strong>1. Obtener el Instalador:</strong> Visita el sitio oficial, ve a la sección "Downloads" y descarga la versión para <strong>Windows hosts</strong>.</p>

                <p><strong>2. Instalación Limpia:</strong> Ejecuta el archivo como administrador. Sigue el asistente pulsando <kbd>Next</kbd> y acepta la instalación de interfaces de red cuando se te solicite.</p>

                <p><strong>3. Imagen ISO:</strong> Asegúrate de tener descargada la imagen .ISO del sistema operativo que deseas instalar (ej: Windows 11 25H2).</p>
            </div>

            <div class="separador-grad"></div>

            <h3 class="borde-secondary">⚙️ Fase 2: Asistente de Creación Paso a Paso</h3>
            <p>Abre VirtualBox y haz clic en el icono azul <strong>Nueva</strong>. Sigue este orden para una configuración óptima:</p>
            
            <div class="tutorial-pasos">
                <ul class="lista-limpia">
                    <li class="mb-15"><strong>1. Nombre y Sistema:</strong> Asigna un nombre a tu máquina. En "Tipo" elige Microsoft Windows y en "Versión" selecciona la que corresponda (ej: Windows 11 64-bit).</li>
                    
                    <li class="mb-15"><strong>2. Hardware (RAM y CPU):</strong> 
                        <br>• <strong>Memoria Base:</strong> Mínimo 4GB (4096 MB), recomendado 8GB (8192 MB) si tu PC lo permite.
                        <br>• <strong>Procesadores:</strong> Se recomienda asignar al menos 2 o 4 núcleos.
                        <br>• <strong>EFI:</strong> Asegúrate de marcar la casilla <kbd>Enable EFI</kbd> para sistemas modernos.
                    </li>
                    
                    <li class="mb-15"><strong>3. Disco Duro Virtual:</strong> Selecciona "Crear un disco duro virtual ahora".
                        <br>• <strong>Tamaño:</strong> Se recomienda un mínimo de 80GB para Windows 11.
                        <br>• <strong>Tipo:</strong> Elige <kbd>VDI</kbd> (VirtualBox Disk Image) y asegúrate de que esté como <strong>Reservado dinámicamente</strong> para ahorrar espacio real.
                    </li>
                    
                    <li class="mb-15"><strong>4. Cargar ISO (Almacenamiento):</strong> Antes de iniciar, ve a <strong>Configuración > Almacenamiento</strong>. Haz clic en el icono del disco vacío y selecciona tu archivo ISO mediante el botón del CD a la derecha.</li>
                    
                    <li class="mb-15"><strong>5. Memoria de Video:</strong> En el apartado <strong>Pantalla</strong>, sube la memoria de video al máximo (128 MB) para un mejor rendimiento visual.</li>
                </ul>
            </div>

            <div class="separador-grad"></div>

            <h3 class="borde-primary">🚀 Fase 3: Ejecución y Pantalla Completa</h3>
            <div class="tutorial-pasos warning">
                <ol>
                    <li>Selecciona tu máquina y pulsa el botón verde <kbd>Iniciar</kbd>.</li>
                    <li><strong>Arranque:</strong> Presiona cualquier tecla cuando veas el mensaje "Press any key to boot from CD/DVD".</li>
                    <li><strong>Pantalla Completa (Guest Additions):</strong> Una vez instalado Windows, ve al menú superior de la ventana: <strong>Dispositivos > Insertar imagen de CD de las Guest Additions</strong>.</li>
                    <li>Abre el explorador de archivos en la máquina virtual, ejecuta el instalador del CD y reinicia para habilitar la resolución automática y fluidez del mouse.</li>
                </ol>
            </div>
            
            <div class="nota-primary">
                <p class="m-0"><i class="fas fa-microchip"></i> <strong>Tip técnico:</strong> VirtualBox es ideal si tu procesador no soporta Hyper-V o si necesitas emular sistemas operativos más antiguos que requieren configuraciones específicas de hardware.</p>
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
                    <h3 class="borde-secondary">⚙️ Asistente de Creación Paso a Paso</h3>
                    <p>1. Busca y abre el <strong>Administrador de Hyper-V</strong>.</p>
                    
                    <div style="background: rgba(14, 165, 233, 0.1); border-left: 0px solid var(--secondary); padding: 10px; margin-bottom: 15px; border-radius: 4px;">
                        <p class="m-0"><strong>⚠️ PASO PREVIO:</strong> En la columna de la izquierda, haz clic sobre el nombre de tu computadora (ej: usuarios) para habilitar el menú de "Acciones" en el panel derecho.</p>
                    </div>

                    <p>2. En el panel derecho selecciona <strong>Nuevo > Máquina virtual</strong>. Sigue este orden exacto del menú izquierdo:</p>
                    
                    
                        <ul class="lista-limpia">
                            <li class="mb-15"><strong>1. Antes de comenzar:</strong> Haz clic en el botón <kbd>Siguiente</kbd>.</li>
                            
                            <li class="mb-15"><strong>2. Nombre y ubicación:</strong> Escribe un nombre para identificar tu máquina y pulsa <kbd>Siguiente</kbd>.</li>
                            
                            <li class="mb-15"><strong>3. Especificar generación:</strong> Elige según tu necesidad:
                                <ul class="mt-5">
                                    <li><strong>Generación 1:</strong> Para sistemas antiguos de 32 bits o versiones que no soportan UEFI.</li>
                                    <li><strong>Generación 2:</strong> Para sistemas modernos basados en UEFI (64 bits). 
                                    <br>Tras seleccionar, pulsa <kbd>Siguiente</kbd>.</li>
                                </ul>
                            </li>
                            
                            <li class="mb-15"><strong>4. Asignación de memoria:</strong> Define la RAM en MB. 
                                <br><strong>Fórmula de ejemplo para 6GB:</strong> <code>6 x 1024 = 6144</code>
                                <br>Calcula tus GB deseados y escribe el resultado. Pulsa <kbd>Siguiente</kbd>.
                            </li>
                            
                            <li class="mb-15"><strong>5. Configurar funciones de red:</strong> Define si tendrás conexión:
                                <ul class="mt-5">
                                    <li><strong>No conectado:</strong> Si deseas aislamiento total sin internet.</li>
                                    <li><strong>Default Switch:</strong> Para tener internet automático.
                                    <br>Selecciona una opción y pulsa <kbd>Siguiente</kbd>.</li>
                                </ul>
                            </li>
                            
                            <li class="mb-15"><strong>6. Conectar disco duro virtual:</strong> Se guardará en <code>C:\\ProgramData\\Microsoft\\Windows\\Virtual Hard Disks\\</code>
                                <br><strong>Tamaño:</strong> Especifica el espacio total (GB) que tendrá la máquina para Windows y tus archivos. Pon lo que consideres necesario y pulsa <kbd>Siguiente</kbd>.
                            </li>
                            
                            <li class="mb-15"><strong>7. Opciones de instalación:</strong> Elige <strong>"Instalar un S.O. desde un CD/DVD-ROM de arranque"</strong>. 
                                <br>Marca <strong>"Archivo de imagen (.iso)"</strong>, usa el botón <kbd>Examinar</kbd> para buscar tu ISO y pulsa <kbd>Siguiente</kbd>.
                            </li>

                            <li class="mb-15"><strong>8. Resumen:</strong> Revisa que todos los pasos coincidan y pulsa <kbd>Finalizar</kbd>.</li>
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

                <div class="nota-peligro">
                    <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Nota post-reinicio:</strong> Si no arranca tras instalar, vuelve a Firmware y pon el disco duro principal en primer lugar.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Video Tutorial UEFI Virtual", url: "https://www.youtube.com/watch?v=2yrfVEkfalA", plataforma: "youtube" }            
        ],
        pasos: []
    },
{
        categoria: "windows",
        titulo: "Backup y Restauración de Drivers al Formatear",
        imagen: "img/windows/backup-drivers.jpg",
        comando: "cmd / Double Driver",
        descripcion: "Aprende a realizar una copia de seguridad completa de todos tus controladores antes de formatear tu PC, y cómo restaurarlos fácilmente.",
        contenidoTutorialHtml: `
            <h3>💾 Protege tus Controladores antes de Formatear</h3>
            <p>Hacer un respaldo de tus drivers te evitará dolores de cabeza buscando controladores uno por uno o solucionando pantallas negras tras una instalación limpia de Windows.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Método 1 - Usando la Consola (CMD)</h4>
                <p>Este es el método nativo de Windows. Primero, crea una carpeta llamada <strong>copia-seguridad-drivers</strong> en una unidad USB o en un disco distinto al disco C: donde está Windows.</p>
                <ul>
                    <li>Busca <strong>cmd</strong> en el menú inicio.</li>
                    <li>Haz clic derecho sobre "Símbolo del sistema" y selecciona <strong>Ejecutar como administrador</strong>.</li>
                    <li>Copia y pega el siguiente comando, cambiando la ruta por la de tu carpeta creada:</li>
                </ul>
                

                <div class="contenedor-comando">
                    <code>dism /online /export-driver /destination:"D:\\copia-seguridad-drivers"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <div style="background: rgba(14, 165, 233, 0.1); border-left: 0px solid var(--secondary); padding: 10px; margin-top: 15px; margin-bottom: 15px; border-radius: 4px;">
                    <p class="m-0"><strong>⚠️ NOTA:</strong> El proceso tardará dependiendo de la cantidad de drivers que tengas instalados. Espera hasta que el progreso llegue al 100% y vuelva a aparecer el indicador de la consola.</p>
                </div>

                <h4>Paso 2: Método 2 - Usando Double Driver</h4>
                <p>Si la consola te da algún error, puedes usar una aplicación de terceros para garantizar el respaldo. Crea otra carpeta en tu USB llamada <strong>drivers-programa</strong>.</p>
                <ol>
                    <li>Descarga el programa <strong>Double Driver</strong> y extráelo.</li>
                    <li>Ejecuta el archivo <kbd>dd.exe</kbd> como administrador.</li>
                    <li>En la interfaz, ve a la pestaña <strong>Backup</strong> y haz clic en el botón inferior <kbd>Scan Current System</kbd>.</li>
                    <li>Ve al menú superior <strong>Select</strong> y elige <strong>All</strong> (Todos) para marcar todos los drivers.</li>
                    <li>Haz clic en <kbd>Backup Now</kbd> y selecciona la carpeta <strong>drivers-programa</strong> que creaste como destino.</li>
                </ol>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-plus-square"></i> CÓMO RESTAURAR LOS DRIVERS EN EL NUEVO WINDOWS
                    </summary>
                    <h3 class="borde-secondary">⚙️ Restauración paso a paso</h3>
                    
                    <ul class="lista-limpia">
                        <li class="mb-15">🔵 <strong>Si usaste CMD:</strong> Abre CMD como administrador en el nuevo Windows e introduce este comando (cambiando la ruta por donde tienes tus drivers):
                            <br><br>
                            <div class="contenedor-comando">
                                <code>pnputil /add-driver "D:\\copia-seguridad-drivers\\*.inf" /subdirs /install</code>
                            </div>
                        </li>
                        
                        <li class="mb-15">🔵 <strong>Si usaste Double Driver:</strong> 
                            <ol class="mt-10">
                                <li>Abre <strong>dd.exe</strong> como administrador en tu nuevo Windows.</li>
                                <li>Ve a la pestaña <strong>Restore</strong> y haz clic en <kbd>Locate Backup</kbd>.</li>
                                <li>Selecciona <strong>Other location</strong> y busca la carpeta donde guardaste tu respaldo.</li>
                                <li>Asegúrate de ir a <strong>Select -> All</strong> para marcar todos los drivers.</li>
                                <li>Pulsa <kbd>Restore Now</kbd> y sigue el asistente de instalación.</li>
                            </ol>
                        </li>

                        <li class="mb-15">🔵 <strong>Instalación Manual (Solo 1 driver fallido):</strong> Ve al <em>Administrador de dispositivos</em>, haz clic derecho sobre el dispositivo con error (triángulo amarillo) > <strong>Actualizar controlador</strong> > Buscar en mi equipo y selecciona la carpeta de tu respaldo.</li>
                    </ul>
                </details>

            </div>
        `,
        links: [
            { texto: "Video Tutorial: Backup y Restaurar Drivers", url: "https://www.youtube.com/watch?v=2Pr0AMqaMZI", plataforma: "youtube" },
            { texto: "PROGRAMA DOUBLE DRIVE: enlace directo", url: "https://www.mediafire.com/file/yp2xvhkavxs04kp/Double_Driver.rar/file" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Extender o Reducir Particiones sin Formatear",
        imagen: "img/windows/particiones.jpg",
        comando: "https://www.partitionwizard.com/free-partition-manager.html",
        descripcion: "Extiende o reduce las particiones de tu disco local C: sin formatear, usando MiniTool Partition Wizard Free.",
        contenidoTutorialHtml: `
            <h3>💽 Gestión de Particiones sin Perder Datos</h3>
            <p>Aunque Windows trae un administrador de discos nativo, muchas veces no permite extender la unidad C: porque el espacio libre no queda "contiguo". <strong>MiniTool Partition Wizard</strong> resuelve esto moviendo y ajustando las particiones automáticamente.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descargar e Instalar</h4>
                <p>Descarga la versión gratuita desde el sitio oficial:</p>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.partitionwizard.com/free-partition-manager.html" target="_blank" class="link-comando">https://www.partitionwizard.com/free-partition-manager.html</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>

                <h4>Paso 2: Reducir una Partición (Liberar espacio)</h4>
                <p>Abre el programa y verás el mapa de todas tus particiones:</p>
                <ul>
                    <li>Haz clic derecho sobre la partición que tiene espacio de sobra (ej: D:).</li>
                    <li>Selecciona <kbd>Move/Resize</kbd> (Mover/Redimensionar).</li>
                    <li>Arrastra el borde del gráfico para reducir el tamaño y dejar espacio libre.</li>
                    <li>Pulsa <kbd>OK</kbd>.</li>
                </ul>

                <h4>Paso 3: Extender la Unidad C:</h4>
                <p>Con el espacio ya liberado, haz clic derecho sobre la unidad <strong>C:</strong>:</p>
                <ul>
                    <li>Selecciona <kbd>Move/Resize</kbd> (Mover/Redimensionar) o <kbd>Extend</kbd>.</li>
                    <li>Arrastra el borde para que C: absorba el espacio libre recién creado.</li>
                    <li>Pulsa <kbd>OK</kbd>.</li>
                </ul>

                <h4>Paso 4: Aplicar los Cambios</h4>
                <p>MiniTool solo programa los cambios hasta que confirmas:</p>
                <ul>
                    <li>Haz clic en el botón <kbd>Apply</kbd> (parte superior izquierda).</li>
                    <li>Confirma la advertencia. El programa reiniciará el equipo si es necesario para modificar la partición del sistema.</li>
                </ul>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-info-circle"></i> ¿POR QUÉ USAR ESTO EN VEZ DEL ADMINISTRADOR DE DISCOS NATIVO?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>El Administrador de Discos de Windows (<code>diskmgmt.msc</code>) solo puede extender una partición si el espacio sin asignar está <strong>justo al lado derecho</strong>. Si hay otra partición en medio (como la de Recuperación), la opción "Extender volumen" aparece en gris y bloqueada.</p>
                        <p>MiniTool Partition Wizard evita ese problema porque puede <strong>mover</strong> particiones enteras para dejar el espacio contiguo antes de extender, todo sin perder tus datos.</p>
                    </div>
                </details>
            </div>
            
            <p class="mt-15"><i>Nota: Antes de reducir o extender particiones, se recomienda hacer una copia de seguridad de tus archivos importantes por precaución.</i></p>
        `,
        links: [
            { texto: "Video Tutorial Completo", url: "https://youtu.be/UdhqrlTtTcs", plataforma: "youtube" },
            { texto: "Video Short", url: "https://www.youtube.com/shorts/OD_-EeO80Ro", plataforma: "youtube" },
            { texto: "MiniTool Partition Wizard Free 13.9", url: "https://www.partitionwizard.com/free-partition-manager.html" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Instalar Linux con WSL (Windows Subsystem for Linux)",
        imagen: "img/windows/wsl-ubuntu.jpg",
        comando: "wsl --install -d Ubuntu-24.04",
        descripcion: "Ejecuta un entorno completo de Linux (Ubuntu) directamente dentro de Windows 11, sin particionar el disco ni reiniciar en dual boot. Guía para principiantes, paso a paso.",
        contenidoTutorialHtml: `
            <h3>🐧 Linux Integrado en Windows (sin particionar el disco)</h3>
            <p><strong>WSL</strong> (Windows Subsystem for Linux, o "Subsistema de Windows para Linux") te permite tener una terminal de Linux real funcionando dentro de Windows, sin necesidad de reducir el espacio de tu disco duro, sin instalar una segunda copia completa del sistema, y sin tener que reiniciar la PC cada vez que quieras usarlo. Es ideal para practicar programación, aprender comandos de Linux o probar herramientas que solo existen en ese sistema.</p>

            <div class="tutorial-pasos">
                <h4>Paso 1: Instalar el motor de WSL</h4>
                <p>Abre <strong>PowerShell como administrador</strong> (búscalo en el menú de inicio, clic derecho sobre él, y selecciona "Ejecutar como administrador") y escribe este comando:</p>
                <div class="contenedor-comando">
                    <code>wsl --install</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>Esto activa la <strong>Plataforma de Máquina Virtual</strong>, que es la pieza de Windows que permite que un sistema operativo distinto (en este caso Linux) corra "dentro" de Windows como si fuera un programa más.</p>

                <h4>Paso 2: Reiniciar la computadora (obligatorio)</h4>
                <p>Después de ejecutar el comando anterior, la consola mostrará el mensaje: <em>"Los cambios se aplicarán una vez que se reinicie el sistema"</em>. Debes reiniciar la PC completa antes de continuar al siguiente paso.</p>
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-question-circle"></i> ¿POR QUÉ ES OBLIGATORIO REINICIAR?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>WSL no es un simple programa: en realidad ejecuta un <strong>kernel</strong> (el núcleo, la parte más profunda de un sistema operativo, la que controla directamente el hardware) de Linux real. Para lograr esto, usa un <strong>hipervisor</strong>, que es un software especial capaz de crear y administrar sistemas operativos virtuales.</p>
                        <p>Ese hipervisor solo puede cargarse desde el nivel más profundo del sistema, justo en el momento en que la computadora enciende — no se puede "activar" mientras Windows ya está funcionando. Por eso, si intentas instalar tu distribución de Linux sin haber reiniciado primero, la instalación descargará los archivos con normalidad, pero fallará al intentar crear tu usuario, mostrando generalmente el error <code>0x80370102</code>. Ese error simplemente significa: "la Plataforma de Máquina Virtual todavía no está activa en memoria".</p>
                    </div>
                </details>

                <h4>Paso 3: Instalar una distribución de Linux</h4>
                <p>Una <strong>distribución</strong> (le decimos "distro" para abreviar) es, en pocas palabras, una "versión" o "sabor" distinto de Linux. Todas comparten el mismo corazón (el kernel de Linux), pero cada una viene con su propio conjunto de programas preinstalados, apariencia y forma de instalar software. Ubuntu, Debian y Kali Linux son ejemplos de distribuciones distintas.</p>
                <p>Tras reiniciar, abre PowerShell de nuevo (ya no necesitas modo administrador para este paso) y ejecuta:</p>
                <div class="contenedor-comando">
                    <code>wsl --install -d Ubuntu-24.04</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>El parámetro <code>-d</code> significa "distribution" (distribución) y le indica a WSL cuál distro específica quieres instalar. Si escribes solo <code>wsl --install</code> sin el <code>-d</code>, instalará Ubuntu en su versión más reciente por defecto.</p>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-list"></i> ¿POR QUÉ UBUNTU 24.04 Y NO 26.04?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Los números en las versiones de Ubuntu indican el año y el mes de lanzamiento: la <strong>24.04</strong> salió en abril de 2024, y la <strong>26.04</strong> salió en abril de 2026. Ambas son versiones <strong>LTS</strong> (Long Term Support, "Soporte a Largo Plazo"), lo que significa que reciben actualizaciones de seguridad durante varios años y son consideradas estables para uso diario.</p>
                        <p>Para practicar y aprender a programar, se recomienda la <strong>24.04</strong> por estas razones prácticas:</p>
                        <ul>
                            <li><strong>Mayor compatibilidad inmediata:</strong> al llevar más tiempo en el mercado, casi cualquier librería, paquete o tutorial que necesites funcionará sin problemas desde el primer intento.</li>
                            <li><strong>Más soluciones ya documentadas:</strong> si te topas con un error, es mucho más probable que alguien ya lo haya resuelto y publicado la solución en foros como StackOverflow.</li>
                            <li><strong>Software de terceros más estable:</strong> muchas herramientas externas tardan varios meses en volverse completamente estables en una versión recién salida.</li>
                        </ul>
                        <p>Dicho esto, si prefieres tener el software más nuevo de fábrica, la 26.04 es perfectamente válida. El comando sería:</p>
                        <div class="contenedor-comando">
                            <code>wsl --install -d Ubuntu-26.04</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                    </div>
                </details>

                <h4>Paso 4: Crear tu usuario de Linux</h4>
                <p>Se abrirá una nueva ventana de terminal descargando los archivos de Ubuntu. Al terminar, te pedirá dos cosas:</p>
                <ul>
                    <li><strong>UNIX username:</strong> un nombre de usuario. Debe escribirse en minúsculas y sin espacios (por ejemplo: <code>hugo</code>, no <code>Hugo Pérez</code>).</li>
                    <li><strong>New password:</strong> una contraseña para ese usuario dentro de Linux (puede ser distinta a tu contraseña de Windows).</li>
                </ul>
                <p class="mt-15"><i>Nota importante: cuando escribas la contraseña, no verás asteriscos (*) ni verás que el cursor se mueva, ni siquiera puntos. Esto es completamente normal en Linux — es una medida de seguridad para que nadie a tu alrededor pueda ver cuántos caracteres tiene tu contraseña. Simplemente escribe con confianza y presiona Enter al terminar.</i></p>

                <h4>Paso 5: Actualizar el sistema recién instalado</h4>
                <p>Una vez que veas el símbolo del sistema (el "prompt") con tu nombre de usuario, es importante dejar el sistema al día antes de empezar a usarlo. Ejecuta:</p>
                <div class="contenedor-comando">
                    <code>sudo apt update && sudo apt upgrade -y</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-info-circle"></i> ¿QUÉ HACE ESTE COMANDO EXACTAMENTE?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Es la unión de dos instrucciones separadas por <code>&&</code>. Desglosado pieza por pieza:</p>
                        <ul>
                            <li><strong>sudo:</strong> significa "Super User DO" (hazlo como superusuario). Pide permisos de administrador — es el equivalente exacto a "Ejecutar como Administrador" en Windows. Te pedirá tu contraseña de Linux para confirmar que tienes autorización.</li>
                            <li><strong>apt:</strong> es el "Advanced Package Tool" (Herramienta Avanzada de Paquetes), el gestor de software de Ubuntu. Se encarga de buscar, instalar, actualizar y eliminar programas de forma segura, similar a una "tienda de aplicaciones" pero manejada desde la terminal.</li>
                            <li><strong>update:</strong> esta orden NO instala nada todavía. Solo se conecta a los servidores de Ubuntu y descarga el catálogo (la lista) más reciente de qué programas y qué versiones están disponibles. Es como actualizar el menú de un restaurante para saber qué platillos nuevos hay, sin pedir ninguno todavía.</li>
                            <li><strong>&&:</strong> es un "puente lógico" que significa "y entonces...". Le dice a la terminal que ejecute la siguiente orden SOLO SI la anterior terminó sin errores.</li>
                            <li><strong>upgrade:</strong> esta sí realiza cambios reales. Compara los programas que ya tienes instalados contra el catálogo nuevo que acabas de descargar con <code>update</code>, y si encuentra versiones más recientes, las descarga e instala.</li>
                            <li><strong>-y:</strong> significa "Yes" (sí). Normalmente, antes de instalar algo, el sistema se detiene y pregunta "¿Deseas continuar? (S/N)". Agregar <code>-y</code> le dice al sistema que responda "sí" automáticamente a todo, para que el proceso termine sin que tengas que estar presionando teclas.</li>
                        </ul>
                        <p><strong>¿Qué instala exactamente?</strong> Este comando NO instala programas nuevos que tú no hayas pedido (no te instalará un navegador o un juego de la nada). Solo actualiza lo que ya existe en tu sistema: parches de seguridad, actualizaciones de herramientas de consola, y versiones más nuevas y estables de las librerías de programación.</p>
                        <p><strong>¿Para qué sirve hacerlo justo después de instalar?</strong> La imagen que descargaste de Ubuntu fue empaquetada en una fecha específica en el pasado. Al ejecutar este comando inmediatamente después de instalar, traes tu sistema "desde el pasado hasta hoy", asegurando que todo tu entorno sea seguro y esté al día.</p>
                    </div>
                </details>

                <h4>Paso 6: Cómo volver a abrir tu Linux después</h4>
                <p>Una vez instalado, no necesitas repetir todo este proceso cada vez. Para abrir tu terminal de Linux en el futuro, tienes dos opciones:</p>
                <ul>
                    <li>Escribe <code>wsl</code> en PowerShell o en la barra de búsqueda de Windows.</li>
                    <li>Busca "Ubuntu" (o el nombre de tu distribución) directamente en el menú de inicio — aparece como si fuera una aplicación normal, con su propio ícono.</li>
                </ul>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-th-list"></i> ¿QUÉ VERSIONES DE LINUX (DISTRIBUCIONES) EXISTEN Y CUÁLES PUEDO INSTALAR?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Existen muchísimas distribuciones de Linux en el mundo, pero estas son algunas de las más conocidas y para qué suele usarse cada una — solo como referencia, para saber qué existe:</p>
                        <ul>
                            <li><strong>Ubuntu:</strong> la más popular y recomendada para empezar. Gran cantidad de tutoriales y soporte.</li>
                            <li><strong>Debian:</strong> la distribución en la que se basa Ubuntu. Muy estable, usada mucho en servidores.</li>
                            <li><strong>Kali Linux:</strong> enfocada en seguridad informática y pruebas de penetración (hacking ético).</li>
                            <li><strong>Fedora:</strong> mantenida por Red Hat, usada por muchos desarrolladores por traer software muy actualizado.</li>
                            <li><strong>openSUSE:</strong> conocida por sus herramientas de administración gráfica, popular en entornos empresariales.</li>
                            <li><strong>Linux Mint / Zorin OS:</strong> pensadas para verse y sentirse similares a Windows, ideales para quien viene de ese sistema (aunque estas normalmente se instalan como sistema completo en una partición, no siempre están disponibles directo en WSL).</li>
                            <li><strong>Alpine Linux:</strong> extremadamente ligera, muy usada dentro de contenedores (Docker) por su tamaño pequeño.</li>
                        </ul>
                        <p><strong>¿Cómo saber cuáles puedes instalar tú, específicamente en tu WSL?</strong> La lista de arriba es solo una referencia general — Microsoft actualiza constantemente cuáles distros están disponibles para instalar directamente desde WSL. Para ver la lista real y actualizada en tu propia PC, abre PowerShell y ejecuta:</p>
                        <div class="contenedor-comando">
                            <code>wsl --list --online</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                        <p>Esto te mostrará una tabla con el <strong>Name</strong> (el nombre exacto que debes escribir después del <code>-d</code> al instalar) y una breve descripción de cada una. Por ejemplo, si ahí aparece <code>Debian</code>, para instalarla escribirías: <code>wsl --install -d Debian</code></p>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-layer-group"></i> ¿SE PUEDEN TENER VARIAS DISTRIBUCIONES INSTALADAS A LA VEZ?
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Sí. WSL permite instalar y tener funcionando varias distribuciones de Linux al mismo tiempo dentro de la misma computadora, sin que una afecte a la otra.</p>
                        
                        <p><strong>¿Cómo instalar una segunda (o tercera) distribución?</strong><br>
                        Simplemente repites el comando de instalación, cambiando el nombre después del <code>-d</code>. Por ejemplo, si ya tienes Ubuntu y quieres agregar Debian:</p>
                        <div class="contenedor-comando">
                            <code>wsl --install -d Debian</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                        <p>Esto se agrega junto a la que ya tenías, sin borrarla ni reemplazarla.</p>

                        <p><strong>¿Cómo ver cuáles ya tienes instaladas?</strong><br>
                        Ejecuta este comando para ver una lista de todas tus distribuciones instaladas, junto con su versión de WSL y cuál está corriendo en ese momento:</p>
                        <div class="contenedor-comando">
                            <code>wsl --list --verbose</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                        <p>(<code>--verbose</code> se puede abreviar como <code>-v</code>, quedando <code>wsl -l -v</code>, que hace exactamente lo mismo pero más corto de escribir.)</p>

                        <p><strong>¿Cómo entras a cada una por separado?</strong><br>
                        Tienes tres formas:</p>
                        <ul>
                            <li>Escribiendo el nombre exacto de la distro con el parámetro <code>-d</code>: <code>wsl -d Ubuntu-24.04</code> o <code>wsl -d Debian</code>.</li>
                            <li>Buscando el nombre de la distro directamente en el menú de inicio de Windows — cada una aparece como su propia aplicación con su propio ícono, y al abrirla entras directo a esa terminal.</li>
                            <li>Escribiendo solo <code>wsl</code> sin especificar nombre — esto te abre automáticamente la que tengas marcada como <strong>predeterminada</strong> (por defecto, la primera que instalaste).</li>
                        </ul>

                        <p><strong>¿Cómo cambiar cuál es la predeterminada?</strong><br>
                        Si quieres que al escribir solo <code>wsl</code> se abra otra distinta a la que abre actualmente:</p>
                        <div class="contenedor-comando">
                            <code>wsl --set-default Debian</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>

                        <p><strong>¿Funcionan realmente por separado?</strong><br>
                        Sí, completamente. Cada distribución instalada tiene:</p>
                        <ul>
                            <li>Su propio sistema de archivos — lo que instalas, creas o borras en una no aparece ni afecta a la otra.</li>
                            <li>Su propio usuario y contraseña, creados de forma independiente al instalarla.</li>
                            <li>Sus propios programas instalados — ejecutar <code>sudo apt install algo</code> en Ubuntu no lo instala también en Debian; tendrías que instalarlo por separado en cada una si lo necesitas ahí también.</li>
                        </ul>
                        <p>Lo único que comparten "por debajo" es el motor de WSL2 y el hipervisor de Windows que las hace funcionar a todas — pero en la práctica, para ti como usuario, se sienten y se comportan como computadoras de Linux completamente independientes entre sí. Puedes incluso tener dos o tres abiertas en ventanas distintas al mismo tiempo, trabajando en cosas diferentes en cada una, sin que se estorben.</p>
                    </div>
                </details>
                
                <div class="separador-grad"></div>

                <h4>📌 Cómo salir, volver a entrar y saber si sigue corriendo</h4>
                <p>Esta parte suele generar dudas, así que vamos con calma.</p>

                <p><strong>Cómo salir correctamente de tu sesión:</strong><br>
                Dentro de la terminal de Linux, escribe:</p>
                <div class="contenedor-comando">
                    <code>exit</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>Esto cierra tu sesión de forma "limpia" y te regresa a PowerShell (o cierra la ventana si la abriste desde el menú de inicio).</p>

                <p><strong>¿Y si en vez de eso cierro la ventana con la "X"?</strong><br>
                Aquí está la parte importante: cerrar la ventana con la "X" <strong>no apaga tu Linux</strong>, solo cierra la ventana que lo mostraba en pantalla. Por debajo, WSL puede seguir corriendo en segundo plano, usando memoria RAM de tu computadora sin que lo veas — es exactamente igual a minimizar un programa en vez de cerrarlo del todo.</p>

                <p><strong>Cómo volver a entrar después:</strong><br>
                No importa si saliste con <code>exit</code> o cerraste con la "X" — para volver a entrar, el proceso es el mismo: escribe <code>wsl</code> en PowerShell, o busca el nombre de tu distribución en el menú de inicio. Si tu sesión seguía corriendo por debajo, entrarás instantáneamente justo donde la dejaste; si ya se había detenido, WSL la vuelve a arrancar automáticamente sin que tengas que hacer nada extra.</p>

                <p><strong>Cómo saber si está corriendo o detenida:</strong><br>
                Para verlo con certeza, en vez de adivinar, ejecuta:</p>
                <div class="contenedor-comando">
                    <code>wsl --list --verbose</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>En la columna <strong>State</strong> (Estado) verás una de dos palabras:</p>
                <ul>
                    <li><strong>Running</strong> (corriendo): tu Linux sigue activo en segundo plano, aunque no tengas ninguna ventana abierta.</li>
                    <li><strong>Stopped</strong> (detenido): no está usando recursos de tu PC en este momento.</li>
                </ul>

                <p><strong>Cómo detenerla manualmente (si quieres liberar memoria):</strong><br>
                Si ves que quedó en "Running" y quieres apagarla sin necesidad de reiniciar toda la PC:</p>
                <div class="contenedor-comando">
                    <code>wsl --terminate Ubuntu-24.04</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p>Esto detiene solo esa distribución específica (cambia el nombre si es otra). Si en cambio quieres apagar por completo el motor de WSL —es decir, todas tus distribuciones instaladas a la vez, incluyendo el hipervisor de fondo— usa:</p>
                <div class="contenedor-comando">
                    <code>wsl --shutdown</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p class="mt-15"><i>Nota: no necesitas apagar WSL manualmente todo el tiempo. Windows administra la memoria automáticamente y libera recursos cuando no la estás usando activamente. Estos comandos son útiles solo si notas que tu PC va lenta y quieres confirmar o forzar que se detenga.</i></p>
  
            </div>
        `,
        links: [
            { texto: "Documentación oficial de WSL (Microsoft)", url: "https://learn.microsoft.com/es-es/windows/wsl/install" },
            { texto: "Lista oficial de distribuciones disponibles", url: "https://learn.microsoft.com/es-es/windows/wsl/basic-commands#list-available-linux-distributions" }
        ],
        pasos: []
    },

    //CATEGORIA TUTORIAL
];
