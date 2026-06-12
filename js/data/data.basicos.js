// Datos de categoría: basicos
// Generado automáticamente desde data.js
export const datos_basicos = [
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
            
            <div class="contenedor-comando" class="mt-15">
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
