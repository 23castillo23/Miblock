// Datos de categoría: caducados
// Archivo de tarjetas cuyo link principal dejó de funcionar.
// No se borran: se guardan aquí con el contenido original intacto,
// más un campo "estadoCaducado" que explica cuándo y por qué se movieron.
//
// SI UN LINK VUELVE A FUNCIONAR:
//   1. Corta el objeto completo de este archivo
//   2. Pégalo de vuelta en su data.<categoriaOriginal>.js
//   3. Borra el campo "estadoCaducado" (ya no aplica)
//   4. Cambia "categoria" de vuelta a "categoriaOriginal" si es necesario
export const datos_caducados = [
{
        categoria: "caducados",
        categoriaOriginal: "programas",
        titulo: "Programas Virtuales PC",
        imagen: "img/programas/programas1.jpg",
        comando: "https://www.programasvirtualespc.net/",
        descripcion: "Biblioteca extensa de software, juegos y utilidades para Windows.",
        estadoCaducado: {
            fecha: "2026-08-15",
            motivo: "Cuenta suspendida por el proveedor de hosting (Account Suspended)",
            ultimaRevision: "2026-08-15"
        },
        contenidoTutorialHtml: `
            <div class="nota-peligro mb-15">
                <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Enlace no disponible.</strong> El hosting de este sitio aparece suspendido. Se conserva esta guía por si el sitio regresa.</p>
            </div>
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
            { texto: "Verificar si ya volvió", url: "https://www.programasvirtualespc.net/" }
        ],
        pasos: []
    },
{
        categoria: "caducados",
        categoriaOriginal: "programas",
        titulo: "Yelitzon PC",
        imagen: "img/programas/programas6.jpg",
        comando: "https://www.yelitzonpc.com/",
        descripcion: "Canal y sitio web con tutoriales de instalación paso a paso.",
        estadoCaducado: {
            fecha: "2026-08-15",
            motivo: "El sitio ya no responde con normalidad",
            ultimaRevision: "2026-08-15"
        },
        contenidoTutorialHtml: `
            <div class="nota-peligro mb-15">
                <p class="m-0"><i class="fas fa-exclamation-triangle"></i> <strong>Enlace no disponible.</strong> Se conserva esta guía por si el sitio regresa.</p>
            </div>
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
            { texto: "Verificar si ya volvió", url: "https://www.yelitzonpc.com/" }
        ],
        pasos: []
    },

    // Cuando encuentres otra tarjeta con link caído, agrégala aquí
    // siguiendo el mismo formato: copia el objeto original y agrégale
    // el campo "estadoCaducado" y "categoriaOriginal".
];
