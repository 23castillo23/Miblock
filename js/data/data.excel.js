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
{
    categoria: "excel",
    titulo: "Colorear Filas Alternadas (Que No Se Rompan al Borrar)",
    imagen: "img/excel/Excel.jpg",
    comando: "=RESIDUO(FILA(),2)=1",
    descripcion: "Aplica un color alterno a las filas de una tabla usando Formato Condicional con fórmula, para que el patrón de colores se mantenga correcto aunque agregues o elimines filas.",
    contenidoTutorialHtml: `
        <h3>🎨 Filas de Colores Alternados (a prueba de borrados)</h3>
        <p>Si pintas las filas a mano (una sí, una no), el patrón se rompe en cuanto borras o agregas una fila, porque el color se queda pegado a la fila física y no a su posición real. La solución es usar una <strong>fórmula</strong> en el Formato Condicional, que Excel recalcula automáticamente cada vez que la tabla cambia.</p>
        
        <div class="tutorial-pasos">
            <h4>Paso 1: Seleccionar el rango de la tabla</h4>
            <p>Selecciona todas las celdas de tu tabla de datos, desde la primera fila hasta la última (por ejemplo <code>A9:Z207</code>). No incluyas los encabezados si no quieres que también se coloreen.</p>

            <h4>Paso 2: Abrir Formato Condicional</h4>
            <p>Ve a la pestaña <strong>Inicio → Formato condicional → Nueva regla</strong>, y elige la opción <strong>"Utilice una fórmula que determine las celdas para aplicar formato"</strong>.</p>

            <h4>Paso 3: Escribir la fórmula (filas impares)</h4>
            <p>En el campo de fórmula escribe:</p>
            <div class="contenedor-comando">
                <code>=RESIDUO(FILA(),2)=1</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Fórmula
                </button>
            </div>
            <p>Haz clic en <strong>Formato → Relleno</strong>, elige un color y acepta.</p>

            <h4>Paso 4: Repetir para filas pares</h4>
            <p>Crea una segunda regla con esta fórmula y un color distinto:</p>
            <div class="contenedor-comando">
                <code>=RESIDUO(FILA(),2)=0</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Fórmula
                </button>
            </div>

            <h4>Paso 5: Confirmar el rango "Se aplica a"</h4>
            <p>En el <strong>Administrador de reglas de formato condicionales</strong>, revisa que el campo <strong>"Se aplica a"</strong> cubra todas tus filas de datos reales (ej. <code>=$A$9:$Z$207</code>). Si el rango es muy corto, no se verá ningún color aunque la fórmula esté bien.</p>

            <h4>Nota: Excel en inglés</h4>
            <p>Si tu Excel está en inglés, las fórmulas equivalentes son <code>=ISODD(ROW())</code> y <code>=ISEVEN(ROW())</code>.</p>
        </div>
    `,
    links: [],
    pasos: []
},
{
    categoria: "excel",
    titulo: "Crear Lista Desplegable (Validación de Datos)",
    imagen: "img/excel/Excel.jpg",
    comando: "Datos > Validación de datos",
    descripcion: "Crea un menú desplegable en una celda para que solo se puedan elegir valores de una lista predefinida, evitando errores de captura.",
    contenidoTutorialHtml: `
        <h3>📋 Lista Desplegable con Validación de Datos</h3>
        <p>Sirve para limitar lo que se puede escribir en una celda, mostrando una flechita con opciones para elegir en vez de escribir libremente.</p>

        <div class="tutorial-pasos">
            <h4>Paso 1: Preparar la lista de opciones</h4>
            <p>Escribe las opciones que quieres que aparezcan en el desplegable, una por celda, en una columna o zona <strong>separada de tus datos principales</strong> (idealmente en otra hoja llamada, por ejemplo, "Catálogos"). Esto evita que se borren si algún día eliminas filas de tu tabla principal.</p>

            <h4>Paso 2: Seleccionar la celda destino</h4>
            <p>Selecciona la celda (o el rango de celdas) donde quieres que aparezca el desplegable.</p>

            <h4>Paso 3: Abrir Validación de Datos</h4>
            <p>Ve a la pestaña <strong>Datos → Validación de datos</strong>.</p>
            <div class="contenedor-comando">
                <code>Datos > Validación de datos</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Ruta
                </button>
            </div>

            <h4>Paso 4: Configurar la lista</h4>
            <p>En la pestaña <strong>Configuración</strong>:</p>
            <ul>
                <li>En <strong>"Permitir"</strong>, elige <strong>"Lista"</strong></li>
                <li>En <strong>"Origen"</strong>, selecciona el rango donde están tus opciones (ej. <code>='Catalogos'!$A$2:$A$10</code>)</li>
                <li>Verifica que esté marcada la casilla <strong>"Celda con lista desplegable en la celda"</strong></li>
            </ul>

            <h4>Paso 5: Aceptar</h4>
            <p>Da clic en <strong>Aceptar</strong>. Ahora esa celda mostrará una flechita para elegir directamente de tu lista.</p>

            <h4>Tip: Rango con nombre</h4>
            <p>Para que sea más fácil de reutilizar, puedes nombrar el rango de opciones (<strong>Fórmulas → Administrador de nombres → Nuevo</strong>) y usar ese nombre directamente como "Origen" en vez de la referencia de celdas.</p>
        </div>
    `,
    links: [],
    pasos: []
},
{
    categoria: "excel",
    titulo: "Alertar Espacios de Más (Formato Condicional)",
    imagen: "img/excel/Excel.jpg",
    comando: "=ESPACIOS(B2)<>B2",
    descripcion: "Resalta automáticamente cualquier celda que tenga espacios de más (al inicio, al final, o dobles entre palabras), sin corregir el dato, solo para que lo detectes y lo revises tú mismo.",
    contenidoTutorialHtml: `
        <h3>⚠️ Detectar Espacios de Más con Formato Condicional</h3>
        <p>Los espacios de más (al inicio, al final, o dobles entre palabras) son invisibles a simple vista, pero rompen fórmulas de separación de texto (como separar nombre y apellidos). Esta regla los pone en evidencia sin modificar el dato original.</p>

        <div class="tutorial-pasos">
            <h4>Paso 1: Seleccionar el rango a vigilar</h4>
            <p>Selecciona la columna (o rango) donde quieres detectar espacios de más, por ejemplo <code>B2:B17</code>.</p>

            <h4>Paso 2: Nueva regla de Formato Condicional</h4>
            <p>Ve a <strong>Inicio → Formato condicional → Nueva regla → "Utilice una fórmula que determine las celdas para aplicar formato"</strong>.</p>

            <h4>Paso 3: Escribir la fórmula</h4>
            <div class="contenedor-comando">
                <code>=ESPACIOS(B2)<>B2</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Fórmula
                </button>
            </div>
            <p><strong>Cómo se lee:</strong> <code>ESPACIOS(B2)</code> limpia el texto quitando espacios de más. Si el resultado limpio es diferente (<code>&lt;&gt;</code>) al texto original, quiere decir que sí tenía espacios de sobra — y ahí se activa el color.</p>

            <h4>Paso 4: Elegir el color de advertencia</h4>
            <p><strong>Formato → Relleno</strong>, elige un color llamativo (rojo o naranja) → Aceptar → Aceptar.</p>

            <h4>Importante: la celda de referencia</h4>
            <p>Siempre escribe en la fórmula la <strong>primera celda</strong> del rango que seleccionaste en el Paso 1 (si tu rango empieza en B2, la fórmula lleva B2; si empezara en B9, llevaría B9). Excel ajusta solo el número de fila para las demás celdas del rango.</p>
        </div>
    `,
    links: [],
    pasos: []
},
{
    categoria: "excel",
    titulo: "Resaltar Celdas con un Valor Específico (Ej. H/M)",
    imagen: "img/excel/Excel.jpg",
    comando: "Inicio > Formato condicional > Resaltar reglas de celdas",
    descripcion: "Pinta de un color distinto las celdas que contienen un valor determinado (por ejemplo, un '1' en una columna de Hombres y otro color en la de Mujeres), para identificar de un vistazo qué categoría marca cada fila.",
    contenidoTutorialHtml: `
        <h3>🎨 Resaltar un Valor Específico por Columna</h3>
        <p>Útil cuando usas columnas de "marca" (como H / M, Sí / No, Activo / Baja) y quieres identificar de un vistazo qué filas tienen cada valor, con un color distinto por columna.</p>

        <div class="tutorial-pasos">
            <h4>Paso 1: Seleccionar la primera columna a resaltar</h4>
            <p>Selecciona el rango de la columna, por ejemplo la columna <strong>H (Hombres)</strong>: <code>L2:L17</code>.</p>

            <h4>Paso 2: Crear la regla</h4>
            <p>Ve a <strong>Inicio → Formato condicional → Resaltar reglas de celdas → Igual a...</strong> (o "El valor de la celda está entre..." si prefieres un rango de números).</p>

            <h4>Paso 3: Definir el valor y el color</h4>
            <p>Escribe el valor que buscas (ej. <code>1</code>), y elige un color de relleno — por ejemplo <strong>azul</strong> para Hombres.</p>

            <h4>Paso 4: Repetir para la segunda columna</h4>
            <p>Selecciona ahora la columna <strong>M (Mujeres)</strong>: <code>M2:M17</code>, repite el mismo proceso, pero con un color distinto — por ejemplo <strong>rosa</strong>.</p>

            <h4>Resultado</h4>
            <p>Cada columna queda con su propio color cuando tiene el valor marcado, permitiéndote distinguir de un vistazo cuántos registros son de cada categoría sin tener que leer cada celda.</p>
        </div>
    `,
    links: [],
    pasos: []
},
    // INVESTIGACION
];
