// Datos de categoría: excel
// Generado automáticamente desde data.js
export const datos_excel = [
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
    {
    categoria: "excel",
    titulo: "Unir Múltiples Archivos Excel en Uno Solo (Python)",
    imagen: "img/excel/Excel.jpg",
    comando: "pip install pandas openpyxl",
    descripcion: "Une automáticamente varios archivos .xlsm o .xls en un solo Excel, agrupando las pestañas del mismo nombre. Tres versiones disponibles: básica, con separadores y con limpieza de datos.",
    contenidoTutorialHtml: `
        <h3>📂 Unir Múltiples Archivos Excel con Python</h3>
        <p>Estos scripts leen todos los archivos Excel de una carpeta y los combinan en un solo archivo, agrupando las hojas que tienen el mismo nombre. Hay <strong>3 versiones</strong> según lo que necesites.</p>

        <div class="nota-info">
            <p><strong>📦 Requisito previo:</strong> Tener Python instalado y ejecutar este comando una sola vez en la terminal antes de usar cualquier script:</p>
        </div>
        <div class="contenedor-comando">
            <code>pip install pandas openpyxl</code>
            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                <i class="fas fa-copy"></i> Copiar
            </button>
        </div>

        <hr class="separador-grad mt-20">

        <div class="tutorial-pasos">

            <h4 class="color-info borde-primary">Paso 1 — Elige tu versión del script</h4>
            <p>Hay 3 versiones. Escoge la que se adapte a tu situación:</p>

            <div class="bloque-sutil mt-10">
                <p><strong>🔹 Versión 1 — Unión simple (básica)</strong><br>
                Une todos los archivos sin separación. Ideal cuando todos tus archivos tienen exactamente el mismo formato y columnas.</p>

                <p class="mt-10"><strong>🔹 Versión 2 — Con fila vacía entre archivos</strong><br>
                Igual que la versión 1, pero deja una fila en blanco entre los datos de cada archivo. Útil para distinguir visualmente de dónde viene cada bloque.</p>

                <p class="mt-10"><strong>🔹 Versión 3 — Con limpieza de datos (recomendada)</strong><br>
                Además de unir con separador, limpia espacios en los nombres de columnas y elimina filas completamente vacías. La más robusta para archivos reales del trabajo.</p>
            </div>

            <hr class="separador-grad separador-secondary mt-20">

            <h4 class="color-info borde-primary">Paso 2 — Modifica la ruta de tu carpeta</h4>
            <p>En <strong>todas las versiones</strong>, la primera línea que debes cambiar es esta:</p>
            <div class="contenedor-comando">
                <code>carpeta = r"C:\\Users\\Vikthor09\\Desktop\\pruebas"</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <div class="nota-advertencia mt-10">
                <p>⚠️ Cambia <strong>C:\\Users\\Vikthor09\\Desktop\\pruebas</strong> por la ruta real donde están tus archivos Excel. Ejemplo: <code>r"C:\\Users\\TuNombre\\Documentos\\Reportes"</code></p>
            </div>

            <hr class="separador-grad separador-secondary mt-20">

            <h4 class="color-info borde-primary">Paso 3 — Elige qué extensión de archivo buscar</h4>
            <p><strong>Versiones 1 y 2</strong> solo buscan archivos <code>.xlsm</code>. Si tus archivos son <code>.xlsx</code> o <code>.xls</code>, cambia esta línea:</p>
            <div class="contenedor-comando">
                <code>archivos = glob.glob(os.path.join(carpeta, "*.xlsm"))</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <p class="mt-10">Sustitúyela por la extensión correcta, por ejemplo:</p>
            <div class="contenedor-comando">
                <code>archivos = glob.glob(os.path.join(carpeta, "*.xlsx"))</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <div class="nota-info mt-10">
                <p>💡 La <strong>Versión 3</strong> ya busca <code>.xlsm</code> <em>y</em> <code>.xls</code> al mismo tiempo automáticamente. Solo agrégale <code>*.xlsx</code> si también los tienes.</p>
            </div>

            <hr class="separador-grad separador-secondary mt-20">

            <h4 class="color-info borde-primary">Paso 4 — Cambia la carpeta y nombre del archivo de salida</h4>
            <p>El resultado siempre se guarda aquí (en todas las versiones):</p>
            <div class="contenedor-comando">
                <code>ruta_salida = r"C:\\Users\\Vikthor09\\Desktop\\pruebas\\union\\resultado_final.xlsx"</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <p class="mt-10">Puedes cambiar <strong>resultado_final.xlsx</strong> por el nombre que prefieras, por ejemplo: <code>union_enero_2025.xlsx</code>. La carpeta <code>union</code> se crea sola si no existe.</p>

            <hr class="separador-grad separador-secondary mt-20">

            <h4 class="color-info borde-primary">Paso 5 — Ejecuta el script</h4>
            <p>Guarda el archivo como <code>unir_excel.py</code> y ejecútalo desde la terminal con:</p>
            <div class="contenedor-comando">
                <code>python unir_excel.py</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <p class="mt-10">La terminal mostrará cuántos archivos encontró y confirmará cuando termine:</p>
            <div class="bloque-sutil mt-10">
                <code class="cod-gris">Archivos encontrados: 5</code><br>
                <code class="cod-exito" style="color: #2ecc71;">✅ Listo! Se unieron 5 archivos en 3 pestañas.</code>
            </div>

            <hr class="separador-grad mt-20">

            <h4 class="color-alerta">📋 Resumen de qué cambia en cada versión</h4>
            <table class="tabla-base mt-10">
                <thead>
                    <tr>
                        <th>Característica</th>
                        <th>Versión 1</th>
                        <th>Versión 2</th>
                        <th>Versión 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Une archivos por pestañas</td>
                        <td>✅</td><td>✅</td><td>✅</td>
                    </tr>
                    <tr>
                        <td>Columna _archivo de origen</td>
                        <td>✅</td><td>✅</td><td>✅</td>
                    </tr>
                    <tr>
                        <td>Fila vacía entre archivos</td>
                        <td>❌</td><td>✅</td><td>✅</td>
                    </tr>
                    <tr>
                        <td>Limpia espacios en columnas</td>
                        <td>❌</td><td>❌</td><td>✅</td>
                    </tr>
                    <tr>
                        <td>Elimina filas completamente vacías</td>
                        <td>❌</td><td>❌</td><td>✅</td>
                    </tr>
                    <tr>
                        <td>Acepta .xlsm + .xls simultáneo</td>
                        <td>❌</td><td>❌</td><td>✅</td>
                    </tr>
                </tbody>
            </table>

            <div class="nota-exito mt-20">
                <p>✅ <strong>Recomendación:</strong> Si no sabes cuál usar, empieza con la <strong>Versión 3</strong>. Cubre todos los casos y limpia los datos automáticamente.</p>
            </div>

        </div>
    `,
    links: [],
    pasos: []
},
    // INVESTIGACION
];
