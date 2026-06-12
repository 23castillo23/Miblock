// Datos de categoría: utilidades
// Generado automáticamente desde data.js
export const datos_utilidades = [
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
                
                <details class="acordeon-tutorial" class="mt-10">
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
                <ul class="lista-limpia">
                    <li class="mb-8"><kbd>Ctrl</kbd> + <kbd>Tab</kbd> : Pestaña siguiente.</li>
                    <li class="mb-8"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> : Pestaña anterior.</li>
                    <li class="mb-8"><kbd>Ctrl</kbd> + <kbd>L</kbd> : Ir a la barra de direcciones.</li>
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
                        <table class="tabla-base">
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> / <kbd>X</kbd></td>
                                <td class="p-8">Copiar, Pegar y Cortar.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Y</kbd></td>
                                <td class="p-8">Deshacer y Rehacer acción.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Alt</kbd> + <kbd>Tab</kbd></td>
                                <td class="p-8">Cambiar entre aplicaciones.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Win</kbd> + <kbd>D</kbd> / <kbd>L</kbd></td>
                                <td class="p-8">Mostrar escritorio / Bloquear.</td>
                            </tr>
                            <tr>
                                <td class="p-8"><kbd>Win</kbd> + <kbd>E</kbd> / <kbd>R</kbd></td>
                                <td class="p-8">Explorador / Ventana Ejecutar.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
                    <summary class="acordeon-header">
                        <i class="fas fa-desktop"></i> NIVEL 2: SISTEMA Y PANTALLA
                    </summary>
                    <div class="tutorial-pasos warning">
                        <table class="tabla-base">
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd></td>
                                <td class="p-8">Administrador de tareas.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Win</kbd> + <kbd>V</kbd></td>
                                <td class="p-8">Historial del Portapapeles.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
                                <td class="p-8">Recorte de pantalla selectivo.</td>
                            </tr>
                            <tr>
                                <td class="p-8"><kbd>Win</kbd> + <kbd>Flechas</kbd></td>
                                <td class="p-8">Ajustar ventanas a los lados.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
                    <summary class="acordeon-header">
                        <i class="fas fa-folder-open"></i> NIVEL 3: ARCHIVOS Y DIÁLOGOS
                    </summary>
                    <div class="tutorial-pasos warning">
                        <table class="tabla-base">
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>F2</kbd> / <kbd>F5</kbd></td>
                                <td class="p-8">Renombrar / Actualizar.</td>
                            </tr>
                            <tr class="borde-sutil">
                                <td class="p-8"><kbd>Alt</kbd> + <kbd>Enter</kbd></td>
                                <td class="p-8">Propiedades del elemento.</td>
                            </tr>
                            <tr>
                                <td class="p-8"><kbd>Win</kbd> + <kbd>I</kbd> / <kbd>X</kbd></td>
                                <td class="p-8">Configuración / Menú rápido.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
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

                        <div class="contenedor-comando" class="mt-10">
                            <code>Win + .</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar Combo
                            </button>
                        </div>
                        <p><small>Abrir panel de Emojis, Símbolos técnicos y Kaomojis.</small></p>
                    </div>
                </details>

                <div class="nota-info">
                    <p class="m-0"><i class="fas fa-lightbulb" class="color-alerta"></i> <strong>Pro Tip:</strong> Activa el historial del portapapeles con <kbd>Win</kbd> + <kbd>V</kbd> para no perder nunca lo que copiaste anteriormente.</p>
                </div>

            </div>
        `,
        links: [
            {
                texto: "Lista Completa de Microsoft",
                url: "https://support.microsoft.com/es-es/windows/métodos-abreviados-de-teclado-de-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec"
            },
            {
                texto: "Manual Word Original",
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

                <details class="acordeon-tutorial" class="mt-10">
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

                <details class="acordeon-tutorial" class="mt-10">
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
                
                <div class="nota-info">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Sustituye el número de ejemplo por el real. El chat se abrirá automáticamente en WhatsApp Web o la App.</p>
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

                <h4 class="mt-20">2. Listas y Organización</h4>
                <ul>
                    <li><strong>Lista con puntos:</strong> Pon un guión y un espacio al inicio <code>- ejemplo</code></li>
                    <li><strong>Lista numerada:</strong> Pon el número, un punto y un espacio <code>1. ejemplo</code></li>
                </ul>

                <h4 class="mt-20">3. Citas y Código</h4>
                <ul>
                    <li><strong>Cita textual:</strong> Usa el signo mayor que y un espacio <code>> ejemplo</code></li>
                    <li><strong>Código alineado:</strong> Envuelve la frase con un acento abierto <code>\`ejemplo\`</code></li>
                </ul>
            </div>
            
            <p class="mt-15"><i>Nota: Estos formatos funcionan tanto en la App móvil como en WhatsApp Web y Escritorio.</i></p>
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
                <p class="mt-10"><small><i>Nota: También puedes bajarlo desde la Microsoft Store o GitHub.</i></small></p>
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

            <details class="acordeon-tutorial" class="mt-10">
                <summary class="acordeon-header">
                    <i class="fas fa-palette"></i> DISEÑO Y MULTIMEDIA
                </summary>
                <div class="tutorial-pasos">
                    <p><strong>Selector de colores:</strong> Obtén el código HEX/RGB de cualquier píxel con <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>.</p>
                    <p><strong>Image Resizer:</strong> Cambia el tamaño de cientos de fotos a la vez desde el clic derecho.</p>
                    <p><strong>Peek (Ojear):</strong> Previsualiza fotos y archivos sin abrirlos usando <kbd>Ctrl</kbd> + <kbd>Espacio</kbd>.</p>
                </div>
            </details>

            <details class="acordeon-tutorial" class="mt-10">
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
