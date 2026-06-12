// Datos de categoría: programacion
// Generado automáticamente desde data.js
export const datos_programacion = [
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
                <div class="nota-peligro">
                    <p class="m-0"><strong>⚠️ OBLIGATORIO:</strong> Marca la casilla <kbd>Add Python to PATH</kbd> al inicio del instalador.</p>
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
            <p class="mt-15"><small><i>Nota: Requiere suscripción paga para empresas de +250 empleados.</i></small></p>
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
                <div class="nota-advertencia">
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
            <h3 class="borde-primary">🐬 Fase 1: Acceso y Gestión Básica</h3>
            <div class="tutorial-pasos">
                <h4>Acceso por Terminal</h4>
                <p>Escribe el siguiente comando (te pedirá la clave configurada):</p>
                <div class="contenedor-comando">
                    <code>mysql -u root -p</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><strong>Tip:</strong> Instala <em>MySQL Workbench</em> para gestión gráfica.</p>
            </div>

            <div class="separador-grad"></div>

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
                    <p class="m-0">⚠️ <strong>Atención:</strong> Ten cuidado al tocar el registro. No borres otras cosas si no estás seguro.</p>
                </div>

                <h4>4. Reinicia el equipo</h4>
                <p>Fundamental para que se liberen completamente los servicios y configuraciones previas.</p>
            </div>

            <div class="separador-grad separador-secondary"></div>

            <h3 class="borde-secondary">✅ Fase 3: Instalación desde Cero</h3>
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
            <h3 class="borde-primary">🐘 Fase 1: Instalación y Configuración Inicial</h3>
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

            <div class="separador-grad"></div>

            <h3 class="borde-secondary">📊 Fase 2: Gestión Gráfica con pgAdmin 4</h3>
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

            <div class="separador-grad separador-verde"></div>

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
            
            <div class="nota-exito">
                <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip técnico:</strong> PostgreSQL utiliza el esquema <strong>public</strong> por defecto. Siempre busca tus tablas dentro de la ruta: <i>Base de datos > Schemas > public > Tables</i>.</p>
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

                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-check-circle"></i> <strong>Paso Final:</strong> Espera de 1 a 2 minutos para que se procese, actualiza la página y pulsa en <kbd>Visit site</kbd> para ver tu web pública.</p>
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
{
        categoria: "programacion",
        titulo: "Claude: Copiloto de Lógica y Arquitectura",
        imagen: "img/programacion/claude.jpg",
        comando: "Prompt Engineering / Artifacts / Proyectos",
        descripcion: "Asistente avanzado de IA especializado en razonamiento complejo, depuración de código y generación de documentación técnica.",
        contenidoTutorialHtml: `
        <h3>🤖 Dominando a Claude</h3>
        <p>Claude no solo escribe código; entiende la lógica detrás de él. Úsalo para planificar antes de escribir.</p>

        <div class="tutorial-pasos">
            <h4 class="color-naranja"><i class="fas fa-magic"></i> 1. Artifacts (Vista Previa)</h4>
            <p>Cuando Claude genera una web (HTML/CSS/JS) o un diagrama, usa la ventana de <strong>Artifacts</strong>.</p>
            <div style="background: rgba(217, 119, 87, 0.1); padding: 10px; border-radius: 8px; border-left: 3px solid #d97757;">
                <p>💡 <strong>Tip:</strong> Puedes pedirle: <em>"Modifica el Artifact para que el botón sea rojo"</em> y lo hará en tiempo real sin repetir todo el código.</p>
            </div>

            <hr>

            <h4 style="color: #34495e;"><i class="fas fa-box-open"></i> 2. Project Knowledge</h4>
            <p>Si tienes la versión Pro, usa los <strong>"Projects"</strong> para subir toda tu guía de pasos y código.</p>
            <div class="contenedor-comando">
                <code>Subir archivo: GUIA_PASOS.md</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>Esto hace que Claude responda basado 100% en tus reglas y no en código genérico.</small></p>

            <hr>

            <h4 style="color: #2980b9;"><i class="fas fa-terminal"></i> 3. Prompts Efectivos</h4>
            <p><strong>Para Debugging:</strong></p>
            <div class="contenedor-comando">
                <code>"Analiza este error de consola y revisa si mi conexión a Firebase en index.html es correcta."</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-naranja"><i class="fas fa-keyboard"></i> 4. Atajos Rápidos</h4>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>⌨️ <strong>Ctrl + K:</strong> Abre un nuevo chat rápidamente.</li>
                    <li>📎 <strong>Shift + Enter:</strong> Sube una imagen o archivo de código.</li>
                    <li>📋 <strong>Copiar Código:</strong> Botón directo en la esquina superior derecha de cada bloque.</li>
                </ul>
            </div>
        </div>
    `,
        links: [{ texto: "Web de Claude", url: "https://claude.ai"}],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "Cursor: El Editor de Código del Futuro",
        imagen: "img/programacion/cursor.jpg",
        comando: "Ctrl+K / Ctrl+L / Ctrl+I / @Context",
        descripcion: "Basado en VS Code, pero con IA integrada en el corazón. Permite editar, chatear y crear archivos completos con lenguaje natural.",
        contenidoTutorialHtml: `
        <h3>🚀 Potencia tu flujo con Cursor</h3>
        <p>Cursor "lee" todo tu proyecto. No necesitas copiar y pegar código para que la IA sepa qué estás haciendo.</p>

        <div class="tutorial-pasos">
            <h4 class="color-info"><i class="fas fa-edit"></i> 1. Edición In-line (Ctrl + K)</h4>
            <p>Sombrea un código o pulsa en una línea vacía y presiona <code>Ctrl + K</code>.</p>
            <div class="contenedor-comando">
                <code>"Crea una función que guarde comentarios en Firebase usando window._db"</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
            <p><small>💡 Cursor escribirá el código directamente en tu archivo. Dale a <strong>"Accept"</strong> para confirmar.</small></p>

            <hr>

            <h4 class="color-morado"><i class="fas fa-comments"></i> 2. Chat Global (Ctrl + L)</h4>
            <p>Para preguntar sobre todo el proyecto o errores complejos.</p>
            <p><strong>Uso del @ (Símbolo Maestro):</strong></p>
            <ul style="font-size: 0.85rem;">
                <li><strong>@Files:</strong> Dale a la IA un archivo específico para leer.</li>
                <li><strong>@Codebase:</strong> Escanea TODO tu proyecto para responder.</li>
                <li><strong>@Docs:</strong> Consulta documentación oficial (ej: Firebase).</li>
            </ul>

            <hr>

            <h4 class="color-exito"><i class="fas fa-rocket"></i> 3. Composer (Ctrl + I)</h4>
            <p>¿Quieres crear varios archivos a la vez? Usa el <strong>Composer</strong>.</p>
            <div class="contenedor-comando" style="border: 1px solid #2ecc71;">
                <code>"Crea la estructura de carpetas para un álbum familiar con CSS y JS"</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>

            <hr>

            <h4 class="color-alerta"><i class="fas fa-terminal"></i> 4. Terminal Inteligente</h4>
            <p>En la terminal, presiona <code>Ctrl + K</code> para pedirle comandos.</p>
            <div class="contenedor-comando">
                <code>"¿Cuál era el comando para subir cambios a mi rama-vikthor?"</code>
            </div>
            <p><small>Cursor te escribirá el <code>git push...</code> automáticamente.</small></p>

            <hr>

            <h4 class="color-peligro"><i class="fas fa-bolt"></i> 5. Atajos Esenciales</h4>
            <div class="bloque-sutil">
                <ul class="txt-sm">
                    <li>⌨️ <strong>Ctrl + Shift + J:</strong> Abre el chat de la terminal.</li>
                    <li>🖱️ <strong>Cmd/Ctrl + Click:</strong> Navega al archivo que la IA te menciona.</li>
                    <li>🔍 <strong>Cmd + Shift + L:</strong> Agrega el código seleccionado al chat.</li>
                </ul>
            </div>
        </div>
    `,
        links: [{ texto: "Descargar Cursor", url: "https://cursor.sh" }],
        pasos: []
    },
    // SISTEMAS
];
