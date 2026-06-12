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
    // INVESTIGACION
];
