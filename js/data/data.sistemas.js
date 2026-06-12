// Datos de categoría: sistemas
// Generado automáticamente desde data.js
export const datos_sistemas = [
{
        categoria: "sistemas",
        titulo: "Git para Visual Studio Code (IDE)", // Título con referencia al IDE
        imagen: "img/sistemas/git-setup.jpg",
        comando: "git --version",
        descripcion: "Configuración de Git como sistema de control de versiones dentro del IDE Visual Studio Code para gestionar el historial del proyecto.",
        contenidoTutorialHtml: `
            <h3>🔧 Git & VS Code: El motor y la interfaz</h3>
            <p><strong>Visual Studio Code</strong> es un <strong>IDE</strong>: tu espacio de trabajo. <strong>Git</strong> es el sistema que guarda tus cambios. Juntos te permiten no perder nunca tu trabajo.</p>
            
            <div class="tutorial-pasos">
                <h4>1. ¿Para qué sirve esta unión?</h4>
                <ul>
                    <li><strong>VS Code:</strong> Te da los botones, los colores y la terminal.</li>
                    <li><strong>Git:</strong> Se encarga de los comandos (add, commit, push) y del historial.</li>
                </ul>

                <h4>2. Instalación y Vinculación</h4>
                <ul>
                    <li>Descarga el instalador de <strong>git-scm.com</strong>.</li>
                    <li>Al instalar, elige: <strong>"Use Visual Studio Code as Git's default editor"</strong>.</li>
                </ul>

                <h4>3. Configuración de Identidad</h4>
                <p>Copia estos comandos en la terminal de tu IDE para que GitHub sepa quién eres:</p>
                <div class="contenedor-comando">
                    <code>git config --global user.name "Tu Nombre"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>git config --global user.email "tu@correo.com"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div> 

                <h4>4. Comprobación en el IDE</h4>
                <div class="contenedor-comando">
                    <code>git --version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div> 
                <p>Si la terminal de tu IDE responde con la versión, ¡la conexión es exitosa!</p>
            </div>
            
            <details class="acordeon-tutorial">
                <summary class="acordeon-header">
                    <i class="fas fa-info-circle"></i> CLIC PARA VER 📘 GUÍA MAESTRA DE TRABAJO (GIT & GITHUB)
                </summary>
                <hr style="border: 1px solid var(--border-glass); margin: 10px 0;">
                
                <p class="t-center">Esta guía contiene todo lo necesario para configurar tu entorno, trabajar solo o en equipo y resolver emergencias.</p>

                <div class="tutorial-pasos">
                    <h3>🛠️ GRUPO 1: Configuración Inicial y Cuentas</h3>
                    <p>Usa esta sección cuando cambies de cuenta de GitHub o configures una PC nueva por primera vez.</p>
                    
                    <h3>👤 1. Cambio Total de Cuenta GitHub (Paso a Paso)</h3>
                    <p>Sigue este orden exacto para evitar que Windows se confunda con la cuenta vieja:</p>
                    <ul>
                        <li><strong>A. Cerrar Sesión en VS Code:</strong> Clic en el icono de Cuentas (silueta abajo a la izquierda) -> Clic en tu nombre -> <strong>Sign Out</strong>.</li>
                        <li><strong>B. Cerrar Sesión en el Navegador:</strong> Ve a GitHub.com y dale a <strong>Sign out</strong>. ¡Muy importante!</li>
                        <li><strong>C. Limpiar las "Llaves" en Windows:</strong> En buscador escribe "Administrador de credenciales" -> Credenciales de Windows -> Busca <code>git:https://github.com</code> y dale a <strong>Quitar</strong>.</li>
                        <li><strong>D. Iniciar Sesión con la Nueva Cuenta:</strong> En VS Code, clic en Cuentas -> <strong>Sign in with GitHub</strong> -> Authorize.</li>
                    </ul>

                    <h5>Configurar la Identidad en la Terminal</h5>
                    <p>Abre la terminal (Ctrl + \`) y pega estos comandos con tus nuevos datos:</p>
                    <div class="contenedor-comando">
                        <code>git config --global user.name "Tu Nuevo Nombre"</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git config --global user.email "tu-nuevo-correo@ejemplo.com"</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git remote remove origin</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Borrar Puente</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git remote add origin https://github.com/USUARIO/REPOSITORIO.git</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Crear Puente</button>
                    </div>
                    <p><strong>Ejempro:</strong> <code>git remote add origin https://github.com/23castillo23/Miblock.git</code></p>
                </div>

                <div class="tutorial-pasos warning">
                    <h3>🎨 GRUPO 2: Diccionario de Visual Studio Code</h3>
                    <p>Usa esta sección para entender qué significan las letras y colores al lado de tus archivos.</p>
                    <ol>
                        <li><strong>La "M" (Modificado):</strong> Aparece incluso si solo agregas un espacio vacío. Puedes descartar cambios con la flecha curva.</li>
                        <li><strong>La "U" (No rastreado):</strong> Git ignora estos archivos hasta que les das al signo de <strong>más (+)</strong>.</li>
                        <li><strong>La "A" (Agregado):</strong> El archivo está en la "sala de espera" listo para ser enviado en el próximo Commit.</li>
                        <li><strong>Archivos en Gris:</strong> Anotados en el archivo <code>.gitignore</code> (invisibles para GitHub).</li>
                    </ol>
                </div>

                <div class="tutorial-pasos">
                    <h3>⌨️ GRUPO 3: Flujo de Trabajo Diario y Sincronización</h3>
                    <p>Orden exacto para subir cambios en la Terminal:</p>
                    <div class="contenedor-comando">
                        <code>git status</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 1. Revisar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git add .</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 2. Preparar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git commit -m "Descripción de lo que hiciste"</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 3. Firmar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git push</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 4. Subir</button>
                    </div>

                    <h3>🛠️ Error: "no upstream branch"</h3>
                    <p>Si el proyecto es nuevo, usa:</p>
                    <div class="contenedor-comando">
                        <code>git push -u origin main</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                    </div>

                    <h3>🔄 Sincronización entre dos computadoras</h3>
                    <p><strong>Preparar Laptop:</strong> Instala Git, inicia sesión en navegador, crea carpeta y clona:</p>
                    <div class="contenedor-comando">
                        <code>git clone https://github.com/23castillo23/Miblock.git</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Clonar</button>
                    </div>

                    <div class="tech-note note-info">
                        <p><strong>❗ ORDEN CRÍTICO DE INICIO (No saltar):</strong><br>
                        1. Primero: Abrir la carpeta en VS Code.<br>
                        2. Segundo: Abrir la Terminal integrada (Ctrl + \`).<br>
                        3. Tercero: Crear la rama con <code>git checkout -b nombre-de-tu-rama</code>.</p>
                    </div>

                    <p><strong>Regla de oro:</strong> NUNCA empieces a trabajar sin antes bajar lo que hiciste con <strong>git pull</strong>.</p>
                </div>

                <div class="tutorial-pasos">
                    <h3>👥 GRUPO 4: Trabajo en Equipo y Colaboración</h3>
                    <h4>🤝 Cómo invitar colaboradores</h4>
                    <ol>
                        <li>En GitHub: <strong>Settings > Access > Collaborators</strong>.</li>
                        <li>Clic en <strong>Add people</strong> y busca por nombre o correo.</li>
                        <li><strong>IMPORTANTE:</strong> El compañero debe aceptar la invitación desde su correo.</li>
                    </ol>

                    <h4>🚀 Pasos para que un compañero se conecte</h4>
                    <ol>
                        <li><strong>Aceptar Invitación</strong> en el correo.</li>
                        <li><strong>Configurar Git</strong> con su propio nombre y correo.</li>
                        <li><strong>Clonar el Proyecto</strong> en su carpeta de proyectos.</li>
                    </ol>

                    <h3>❗ PASOS POST-CLONACIÓN (En orden):</h3>
                    <p>1. Abrir en VS Code.<br>
                    2. Abrir Terminal.<br>
                    3. Crear Rama propia: <code>git checkout -b nombre-del-compañero</code>.</p>

                    <h5>🔍 ¿Cómo saber en qué rama estás?</h5>
                    <p>Nunca debes adivinar. Tienes dos formas infalibles:</p>
                    <ul>
                        <li><strong>En VS Code:</strong> Mira la esquina inferior izquierda. Si dice main, estás en la principal.</li>
                        <li><strong>En Terminal:</strong> Escribe <code>git branch</code>. La que tenga asterisco (*) y color verde es la tuya.</li>
                    </ul>

                    <h3>👥 Reglas para trabajar en Equipo (4 personas)</h3>
                    <ul>
                        <li>1. <strong>Jalar antes de empezar:</strong> Inicia el día con <code>git pull</code>.</li>
                        <li>2. <strong>Tu propia rama:</strong> Nunca trabajes directo en main.</li>
                        <li>3. <strong>Comunicación:</strong> Avisa si editas archivos críticos como style.css.</li>
                        <li>4. <strong>Pull Requests:</strong> Pide a un compañero que revise antes de unir al principal.</li>
                    </ul>
                    <p><i>"Regla para nuevos: Lo primero es crear tu rama. Nunca trabajes sobre main."</i></p>
                </div>

                <div class="tutorial-pasos">
                    <h3>🌿 GRUPO 5: Manejo de Ramas (Branches)</h3>
                    <ul>
                        <li><strong>Crear y entrar:</strong> <code>git checkout -b nombre-rama</code></li>
                        <li><strong>Ver todas:</strong> <code>git branch</code></li>
                        <li><strong>Volver a main:</strong> <code>git checkout main</code></li>
                        <li><strong>Borrar rama:</strong> <code>git branch -d nombre-rama</code></li>
                    </ul>
                    <p><strong>💡 Regla de Oro:</strong> Antes de crear una rama, asegúrate de estar en main y haber hecho un git pull.</p>
                </div>

                <div class="tutorial-pasos warning">
                    <h3>🚨 GRUPO 6: Botón de Pánico (Regresar al Pasado)</h3>
                    <p>Si ya hiciste Push y quieres borrar el último envío:</p>
                    <div class="contenedor-comando">
                        <code>git reset --hard HEAD~1</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 1. Regresar</button>
                    </div>
                    <div class="contenedor-comando">
                        <code>git push -f origin main</code>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> 2. Forzar GitHub</button>
                    </div>
                    <p><strong>⚠️ Cuidado:</strong> El comando --hard borra el código que escribiste después del último guardado. Úsalo solo si ese código no sirve.</p>
                </div>
            </details>
        `,
        links: [
            { texto: "Descargar Git Oficial", url: "https://git-scm.com/install/windows" }
        ],
        pasos: []
    },
{
        categoria: "sistemas",
        titulo: "Live Server: Servidor Local para Login",
        imagen: "img/sistemas/LiveServer.jpg", // Puedes usar esta o una de VS Code
        comando: "Extensions > Live Server > Go Live",
        descripcion: "Activa un servidor virtual local para permitir la autenticación de Google y Firebase sin errores de seguridad.",
        contenidoTutorialHtml: `
            <h3>🌐 Función en el Proyecto</h3>
            <p>Por seguridad, <strong>Firebase</strong> bloquea cualquier intento de inicio de sesión si abres el archivo <code>index.html</code> directamente (haciendo doble clic). Esto sucede porque el navegador usa el protocolo <code>file://</code>, el cual no es considerado seguro por Google.</p>
            
            <p><strong>Live Server</strong> crea un túnel local usando el protocolo <code>http://</code> en la dirección <code>127.0.0.1:5500</code>. Al estar esta dirección autorizada en tu Consola de Firebase, el botón de Login funcionará perfectamente en tu computadora.</p>

            <div class="tutorial-pasos">
                <h4>🛠️ Guía de Activación</h4>
                <ol>
                    <li>En VS Code, ve al icono de <strong>Extensions</strong> (<code>Ctrl + Shift + X</code>).</li>
                    <li>Busca e instala: <strong>Live Server</strong> (autor: Ritwick Dey).</li>
                    <li>Una vez instalado, abre tu archivo <code>index.html</code>.</li>
                    <li>Haz clic en el botón <strong>Go Live</strong> que aparece en la esquina inferior derecha de la barra azul de VS Code.</li>
                </ol>
                
                <div class="tech-note note-info">
                    <i class="fas fa-check-circle"></i>
                    <p><strong>Paso Final:</strong> Tu navegador se abrirá automáticamente en <code>http://127.0.0.1:5500</code>. Solo desde esta dirección podrás probar el sistema de favoritos y el login con Google.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Extensión Oficial", url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" }
        ],
        pasos: []
    },
{
        categoria: "sistemas",
        titulo: "Terminal y Git: Guía de Navegación",
        imagen: "img/sistemas/terminal-git.jpg",
        comando: "dir / git status",
        descripcion: "Diccionario rápido de comandos para navegar por carpetas y gestionar el historial de MiBlock mediante Git.",
        contenidoTutorialHtml: `
            <h3>📂 1. Navegación por Carpetas (Terminal)</h3>
            <p>Usa estos comandos para moverte por tu computadora como un profesional:</p>
            
            <div class="tutorial-pasos">
                <ul>
                    <li><strong><code>dir</code></strong>: Lista todo lo que hay en la carpeta actual.</li>
                    <li><strong><code>cd [nombre]</code></strong>: Entra en una carpeta.</li>
                    <li><strong><code>cd ..</code></strong>: Retrocede una carpeta (sale).</li>
                    <li><strong><code>mkdir [nombre]</code></strong>: Crea una carpeta nueva.</li>
                    <li><strong><code>cls</code></strong>: Limpia toda la pantalla de la terminal.</li>
                </ul>
                <p><i>Tip: Escribe las primeras letras de una carpeta y pulsa <b>TAB</b> para auto-completar el nombre.</i></p>
            </div>

            <hr style="border: 1px solid var(--border-glass); margin: 25px 0;">

            <h3>🌿 2. Comandos Esenciales de Git</h3>
            <p>Estos son los comandos que mantienen viva nuestra base de datos en internet:</p>

            <div class="tutorial-pasos">
                <h4>🚀 Guardar y Subir Cambios</h4>
                <div class="contenedor-comando">
                    <code>git status</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Revisar cambios</button>
                </div>
                <div class="contenedor-comando">
                    <code>git add .</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Preparar todo</button>
                </div>
                <div class="contenedor-comando">
                    <code>git commit -m "Cambios realizados"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Firmar guardado</button>
                </div>
                <div class="contenedor-comando">
                    <code>git push</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Subir a GitHub</button>
                </div>

                <h4>🔄 Sincronización y Ramas</h4>
                <ul>
                    <li><strong><code>git pull</code></strong>: Baja los cambios nuevos de internet. <strong>(Hacer siempre al iniciar el día)</strong>.</li>
                    <li><strong><code>git branch</code></strong>: Te dice en qué rama estás parado.</li>
                    <li><strong><code>git checkout -b [nombre]</code></strong>: Crea y entra a una rama nueva.</li>
                </ul>
            </div>

            <div class="tutorial-pasos warning">
                <h4>🚨 Botón de Pánico</h4>
                <p>Si algo sale mal y quieres borrar el último guardado local:</p>
                <div class="contenedor-comando">
                    <code>git reset --hard HEAD~1</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><strong>Cuidado:</strong> Esto borra el código que no hayas subido a GitHub.</p>
            </div>
        `,
        links: [

        ],
        pasos: []
    },
    //CATEGORIA EXCEL
];
