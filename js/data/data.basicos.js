// Datos de categoría: basicos
// Generado automáticamente desde data.js
export const datos_basicos = [
{
        categoria: "basicos",
        titulo: "Google Chrome",
        /* URL de ejemplo (puedes cambiarla por tu propia imagen) */
        imagen: "img/basicos/googleblue.jpg",
        comando: "https://www.google.com/intl/es-419/chrome/",
        descripcion: "El navegador más utilizado, diseñado para ofrecer velocidad y sincronización total con servicios de Google. Incluye tips de optimización para equipos con recursos limitados.",
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

                <div class="separador-grad"></div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-gauge-high"></i> OPTIMIZACIÓN PARA EQUIPOS CON RECURSOS LIMITADOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Ahorro de memoria y energía</strong> (Windows y Linux):</p>
                        <div class="contenedor-comando">
                            <code>chrome://settings/performance</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Activa "Memory Saver" (congela pestañas inactivas) y "Energy Saver".</p>

                        <p><strong>Aceleración por hardware</strong> (Windows y Linux):</p>
                        <div class="contenedor-comando">
                            <code>chrome://settings/system</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Confirma que "Usar aceleración de hardware cuando esté disponible" esté activado, y desactiva "Seguir ejecutando apps en segundo plano al cerrar Chrome".</p>

                        <div class="nota-advertencia">
                            <p class="m-0"><i class="fab fa-linux"></i> <strong>Truco exclusivo de Linux:</strong> en Linux, Chrome a veces no activa la decodificación de video por hardware aunque el flag esté en "Enabled". Puedes forzarlo editando el acceso directo con el que abres Chrome para que incluya este parámetro extra al final del comando: <code>--enable-features=VaapiVideoDecoder</code>. Esto solo aplica en Linux; en Windows no es necesario.</p>
                        </div>

                        <p class="mt-15"><strong>Revisar qué está consumiendo recursos:</strong> presiona <kbd>Shift</kbd> + <kbd>Esc</kbd> dentro de Chrome para abrir su Administrador de Tareas interno y ver qué pestaña o extensión está usando más memoria o CPU en tiempo real.</p>
                    </div>
                </details>
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
        descripcion: "Navegador de código abierto centrado en la privacidad y la personalización avanzada. Incluye tips de optimización para equipos con recursos limitados.",
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

                <div class="separador-grad"></div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-gauge-high"></i> OPTIMIZACIÓN PARA EQUIPOS CON RECURSOS LIMITADOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Ajustes básicos de rendimiento</strong> (Windows y Linux):</p>
                        <div class="contenedor-comando">
                            <code>about:preferences#general</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Baja hasta "Rendimiento", desmarca "Usar la configuración de rendimiento recomendada" y ahí puedes bajar manualmente el "Límite de procesos de contenido" (por defecto suele ser 4 u 8). Bajarlo a 1 o 2 reduce el consumo de RAM, aunque puede hacer que las pestañas se sientan un poco menos independientes entre sí.</p>

                        <p><strong>Configuración avanzada</strong> (<code>about:config</code>):</p>
                        <div class="contenedor-comando">
                            <code>about:config</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Firefox te mostrará una advertencia la primera vez — acéptala, es normal. Luego busca estos valores y cámbialos a <code>true</code>:</p>
                        <ul>
                            <li><code>gfx.webrender.all</code> — fuerza el motor de renderizado por GPU (Windows y Linux).</li>
                        </ul>

                        <div class="nota-advertencia">
                            <p class="m-0"><i class="fab fa-linux"></i> <strong>Exclusivo de Linux:</strong> busca <code>media.ffmpeg.vaapi.enabled</code> y ponlo en <code>true</code>. Esto activa la decodificación de video por hardware usando VAAPI, algo que en Linux normalmente viene apagado por defecto. Requiere tener instalados los drivers de video correspondientes a tu gráfica (igual que se explica en la tarjeta de Brave). En Windows, Firefox ya usa aceleración de video automáticamente sin necesidad de tocar esto.</p>
                        </div>
                    </div>
                </details>
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
        descripcion: "Navegador oficial de Windows basado en Chromium, optimizado para el ahorro de batería y memoria RAM. Incluye tips de optimización adicionales.",
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

                <div class="separador-grad"></div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-gauge-high"></i> OPTIMIZACIÓN PARA EQUIPOS CON RECURSOS LIMITADOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Pestañas en Reposo (Sleeping Tabs):</strong> la función propia de Edge, equivalente al "Ahorro de memoria" de Chrome/Brave:</p>
                        <div class="contenedor-comando">
                            <code>edge://settings/performance</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Actívala y baja el tiempo de espera antes de poner una pestaña a "dormir" para ahorrar memoria más rápido.</p>

                        <p><strong>Aceleración por hardware y apps en segundo plano:</strong></p>
                        <div class="contenedor-comando">
                            <code>edge://settings/system</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Confirma que la aceleración de hardware esté activa, y desactiva "Iniciar Edge automáticamente al iniciar sesión en el dispositivo" y "Continuar ejecutando extensiones y aplicaciones en segundo plano".</p>

                        <div class="nota-info">
                            <p class="m-0"><i class="fas fa-info-circle"></i> Como Edge usa el mismo motor que Chrome y Brave, los mismos tres flags de <code>edge://flags</code> mencionados en la tarjeta de Brave (Override software rendering list, Hardware-accelerated video decode, GPU Rasterization) también funcionan aquí, con las mismas diferencias entre Windows y Linux ya explicadas ahí.</p>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Edge", url: "https://www.microsoft.com/es-es/edge" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Brave (Navegador + Guía de Optimización)",
        imagen: "img/basicos/brave.jpg",
        comando: "https://brave.com/es/download/",
        descripcion: "Navegador basado en Chromium con bloqueo de anuncios y rastreadores integrado. Incluye guía de optimización para equipos con procesador o gráfica de bajo rendimiento.",
        contenidoTutorialHtml: `
            <h3>🦁 Brave: Privacidad + Rendimiento</h3>
            <p>Al estar basado en Chromium (el mismo motor que Chrome y Edge), Brave es compatible con casi todas las extensiones de la Chrome Web Store, pero trae bloqueo de anuncios y rastreadores sin necesidad de instalar nada extra. Es una excelente opción para equipos con hardware limitado, especialmente si aplicas la guía de optimización de abajo.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga directa:</h4>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://brave.com/es/download/" target="_blank" class="link-comando">https://brave.com/es/download/</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>

                <div class="separador-grad"></div>

                <h4 class="borde-primary">🛠️ Guía de Optimización para Equipos con Recursos Limitados</h4>
                <p>Estas configuraciones ayudan a que Brave consuma menos memoria RAM y menos procesador, ideal si tu equipo tiene un procesador de gama baja o media (por ejemplo AMD A6, Celeron, o similares) o gráficos integrados. <strong>Funcionan igual en Windows y en Linux</strong>, ya que se configuran dentro del propio navegador — la única diferencia real entre sistemas está señalada en el Paso 3.</p>

                <details class="acordeon-tutorial" open>
                    <summary class="acordeon-header">
                        <i class="fas fa-battery-three-quarters"></i> PASO 1: Ahorro de Memoria y Energía
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Escribe esta dirección en la barra de Brave:</p>
                        <div class="contenedor-comando">
                            <code>brave://settings/performance</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <ul>
                            <li><strong>Ahorro de memoria:</strong> actívalo. Esto "congela" automáticamente las pestañas que tienes abiertas pero no estás usando en ese momento, liberando la RAM que ocupaban.</li>
                            <li><strong>Modo de ahorro de energía:</strong> configúralo en <strong>"Siempre activo"</strong>. Reduce la velocidad de las animaciones que corren en segundo plano, para que no le exijan trabajo extra a tu procesador sin que lo notes.</li>
                        </ul>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-shield-alt"></i> PASO 2: Escudos (Shields) al Máximo
                    </summary>
                    <div class="tutorial-pasos warning">
                        <div class="contenedor-comando">
                            <code>brave://settings/shields</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <ul>
                            <li><strong>Bloqueo de rastreadores y anuncios:</strong> cámbialo de "Estándar" a <strong>"Agresivo"</strong>. Esto detiene los scripts pesados de publicidad antes de que tu procesador tenga que ejecutarlos, no solo los oculta visualmente.</li>
                            <li><strong>Bloquear huellas digitales:</strong> cámbialo a <strong>"Estricto"</strong>. Evita que las páginas ejecuten código adicional para rastrearte, lo que también reduce procesos corriendo de fondo.</li>
                        </ul>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-microchip"></i> PASO 3: Forzar Aceleración por Hardware (GPU)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Esto le pasa el trabajo pesado de dibujar la página y decodificar video a tu tarjeta gráfica en vez de tu procesador. Escribe:</p>
                        <div class="contenedor-comando">
                            <code>brave://flags</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Busca estas tres opciones (una por una, usando el buscador de arriba de esa página) y cámbialas a <strong>Enabled</strong>:</p>
                        <ul>
                            <li><strong>Override software rendering list:</strong> fuerza el uso de tu gráfica (integrada o dedicada) en vez de sobrecargar el procesador.</li>
                            <li><strong>Hardware-accelerated video decode:</strong> permite que la tarjeta gráfica procese los videos en lugar del procesador.</li>
                            <li><strong>GPU Rasterization:</strong> usa la gráfica para dibujar las páginas web, aliviando carga del procesador.</li>
                        </ul>
                        <p>Al terminar, pulsa el botón <kbd>Relaunch</kbd> que aparece abajo a la derecha para reiniciar Brave y que los cambios tomen efecto.</p>

                        <div class="nota-advertencia mt-15">
                            <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Diferencia real entre Windows y Linux en este paso:</strong> en Windows, estos flags casi siempre funcionan de inmediato porque el sistema ya trae los drivers de video necesarios. En <strong>Linux</strong>, activar estos flags no sirve de nada si te faltan los paquetes de drivers de video correctos instalados — necesitas <code>mesa-va-drivers</code> (para gráficas AMD) o <code>intel-media-driver</code> (para gráficas Intel) instalados en tu distro para que la aceleración realmente funcione. Sin esos paquetes, activar el flag no rompe nada, pero tampoco mejora nada.</p>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-power-off"></i> PASO 4: Desactivar Ejecución en Segundo Plano
                    </summary>
                    <div class="tutorial-pasos warning">
                        <div class="contenedor-comando">
                            <code>brave://settings/system</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <ul>
                            <li><strong>Seguir ejecutando aplicaciones en segundo plano al cerrar Brave:</strong> desactívalo por completo. Sin esto, Brave puede seguir usando RAM y CPU incluso después de que creas que ya lo cerraste.</li>
                        </ul>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-toggle-off"></i> PASO 5: Apagar Servicios Extra de Brave
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Brave trae herramientas propias que consumen memoria aunque no las uses. Si no las necesitas, apágalas:</p>
                        <ul>
                            <li><strong>Brave Leo (Asistente de IA):</strong> ve a Configuración → Leo, y desactiva todas sus casillas.</li>
                            <li><strong>Brave Wallet / Web3:</strong> ve a Configuración → Web3, y cambia la opción predeterminada a "Extensiones" (para que no cargue la billetera integrada).</li>
                            <li><strong>Brave Rewards:</strong> confirma que esté apagado si no usas sus tokens (BAT).</li>
                        </ul>
                        <p class="mt-15"><i>Nota: las direcciones exactas de estas tres secciones pueden variar ligeramente según tu versión de Brave. Si el link directo no coincide, búscalas escribiendo su nombre en el buscador de la página de Configuración.</i></p>
                    </div>
                </details>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fab fa-youtube"></i> EXTRA: Truco para YouTube en Gráficas Débiles
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si tu tarjeta gráfica es antigua y no puede decodificar por hardware los formatos de video modernos (VP9, AV1) que usa YouTube por defecto, los videos se ven con tirones o consumen muchísimo procesador. La solución es instalar la extensión <strong>enhanced-h264ify</strong> desde la Chrome Web Store (funciona igual en Brave, ya que acepta extensiones de Chrome).</p>
                        <p>En sus opciones, bloquea los códecs <strong>VP8, VP9 y AV1</strong>. Esto obliga a YouTube a usar el formato <strong>H264</strong>, que prácticamente cualquier gráfica, por antigua que sea, puede reproducir sin trabarse.</p>
                    </div>
                </details>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Brave", url: "https://brave.com/es/download/" },
            { texto: "Extensión enhanced-h264ify", url: "https://chromewebstore.google.com/detail/enhanced-h264ify/" }
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
            
            <div class="contenedor-comando mt-15">
                <code>
                   <a href="https://get.adobe.com/es/reader/" target="_blank" class="link-comando">https://get.adobe.com/es/reader/</a> 
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
{
        categoria: "basicos",
        titulo: "Microsoft Store",
        imagen: "img/basicos/microsoft-store.jpg",
        comando: "https://apps.microsoft.com/detail/9wzdncrfjbmp?hl=es-ES&gl=MX",
        descripcion: "Tienda oficial de Windows para descargar, instalar y actualizar aplicaciones, herramientas y juegos de forma segura.",
        contenidoTutorialHtml: `
            <h3>🛍️ Centro de Aplicaciones Windows</h3>
            <p>La Microsoft Store es el lugar más seguro para obtener software, ya que todas las apps son verificadas por Microsoft.</p>
            
            <div class="tutorial-pasos">
                <h4>¿Cómo usarla efectivamente?</h4>
                <p>Puedes buscar cualquier herramienta y mantener tus aplicaciones actualizadas automáticamente en la sección <strong>"Biblioteca"</strong>.</p>
                
                <div class="contenedor-comando">
                    <code>
                        <a href="https://apps.microsoft.com/detail/9wzdncrfjbmp?hl=es-ES&gl=MX" target="_blank" class="link-comando">https://apps.microsoft.com/detail/9wzdncrfjbmp?hl=es-ES&gl=MX</a> 
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Explorar la Tienda Web", url: "https://apps.microsoft.com/detail/9wzdncrfjbmp?hl=es-ES&gl=MX" }
        ],
        pasos: []
    },

    //CATEGORIA PROGRAMAS
];
