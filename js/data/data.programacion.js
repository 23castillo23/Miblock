// Datos de categoría: programacion
// Generado automáticamente desde data.js
export const datos_programacion = [
{
        categoria: "programacion",
        titulo: "Python",
        imagen: "img/programacion/PYTHON.jpg",
        comando: "python --version",
        descripcion: "Lenguaje versátil e interpretado, base de la automatización, ciencia de datos, inteligencia artificial y desarrollo web. Ideal para empezar a programar por su sintaxis simple.",
        contenidoTutorialHtml: `
            <h3>🐍 Instalación Profesional de Python</h3>
            <p>Python es la base de la ingeniería moderna. Se usa en automatización de tareas, análisis de datos (Pandas, NumPy), inteligencia artificial (PyTorch, TensorFlow), desarrollo web (Django, Flask) y scripting general. Al instalarlo en Windows, el éxito depende de un solo clic.</p>
 
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga del instalador</h4>
                <p>Descarga siempre la versión más reciente estable (evita "release candidates" o versiones beta para trabajo normal).</p>
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
                <p><small>Si olvidas este paso, Windows no reconocerá el comando <code>python</code> en la terminal y tendrás que reinstalar o editar las variables de entorno manualmente.</small></p>
 
                <h4>Paso 3: Verificación</h4>
                <p>Abre <strong>CMD</strong> o <strong>PowerShell</strong> y confirma que Python y su gestor de paquetes quedaron instalados:</p>
                <div class="contenedor-comando">
                    <code>python --version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>pip --version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <div class="separador-grad"></div>
 
                <h3 class="borde-secondary">📦 pip: el gestor de paquetes</h3>
                <p><strong>pip</strong> viene incluido con Python y sirve para instalar librerías externas (por ejemplo <code>requests</code>, <code>pandas</code> o <code>flask</code>):</p>
                <div class="contenedor-comando">
                    <code>pip install nombre_paquete</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h3 class="borde-secondary">🧪 Entornos virtuales (buena práctica)</h3>
                <p>Un entorno virtual aísla las librerías de cada proyecto para que no choquen entre sí. Se crea y activa así:</p>
                <div class="contenedor-comando">
                    <code>python -m venv venv</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>venv\\Scripts\\activate</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>💡 Sabrás que está activo porque verás <code>(venv)</code> al inicio de la línea en tu terminal.</small></p>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> Para escribir código Python cómodamente, usa <strong>VS Code</strong> con la extensión oficial "Python" de Microsoft, o <strong>PyCharm</strong> si quieres un IDE dedicado.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio Oficial de Python", url: "https://www.python.org/downloads/" },
            { texto: "Documentación oficial (docs.python.org)", url: "https://docs.python.org/3/" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "Arduino IDE",
        imagen: "img/programacion/arduino.jpg",
        comando: "arduino-cli",
        descripcion: "Entorno oficial para programar placas Arduino y microcontroladores compatibles (ESP32, ESP8266, etc.) usando un lenguaje basado en C/C++ simplificado.",
        contenidoTutorialHtml: `
            <h3>♾️ Configuración de Hardware (Arduino)</h3>
            <p>El IDE permite escribir y cargar "Sketches" (así se llaman los programas de Arduino) a tu placa mediante comunicación serial USB. Es el punto de entrada estándar para electrónica, robótica e IoT (Internet de las Cosas).</p>
 
            <div class="tutorial-pasos">
                <h4>1. Instalación de Drivers</h4>
                <p>Acepta todos los controladores de <strong>"Arduino srl"</strong> durante la instalación para evitar errores de puerto.</p>
                <div class="nota-advertencia">
                    <p class="m-0"><strong>⚠️ Placas clon (CH340):</strong> Si tu placa es una copia económica, Windows no la reconocerá con los drivers oficiales. Necesitarás instalar el driver <strong>CH340</strong> por separado para que aparezca el puerto COM.</p>
                </div>
 
                <h4>2. Selección de Placa y Puerto</h4>
                <p>En el menú <strong>Herramientas > Placa</strong>, elige tu modelo (ej: Arduino Uno). Luego, en <strong>Herramientas > Puerto</strong>, selecciona el puerto COM donde aparece conectada tu placa.</p>
                <p><small>Si no ves ningún puerto listado, revisa el cable USB (algunos cables baratos son solo de carga, no de datos) o instala el driver correcto.</small></p>
 
                <h4>3. Tu primer Sketch</h4>
                <p>Todo programa de Arduino tiene dos funciones obligatorias: <code>setup()</code> (se ejecuta una sola vez) y <code>loop()</code> (se repite infinitamente). El clásico "Hola mundo" es hacer parpadear el LED integrado:</p>
                <div class="contenedor-comando">
                    <code>Archivo > Ejemplos > 01.Basics > Blink</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>4. Cargar el programa</h4>
                <p>Pulsa el botón de flecha (➡️) en la esquina superior izquierda para compilar y subir el código a la placa. Verás los LEDs RX/TX parpadear brevemente durante la subida.</p>
 
                <div class="separador-grad"></div>
 
                <h3 class="borde-secondary">📚 Gestor de Librerías y Placas</h3>
                <p>Para trabajar con sensores, pantallas o placas como ESP32/ESP8266, necesitas instalar soporte adicional desde:</p>
                <ul>
                    <li><strong>Herramientas > Administrar Librerías</strong> (para sensores, displays, etc.)</li>
                    <li><strong>Archivo > Preferencias > Gestor de URLs Adicionales de Tarjetas</strong> (para añadir soporte a placas no-Arduino, como ESP32)</li>
                </ul>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> Si el IDE no compila y marca error de puerto ocupado, cierra cualquier Monitor Serie abierto o desconecta y reconecta el cable USB.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Descargar Arduino", url: "https://www.arduino.cc/en/software" },
            { texto: "Referencia del lenguaje Arduino", url: "https://www.arduino.cc/reference/en/" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "IntelliJ IDEA Community",
        imagen: "img/programacion/IntellijIDEA.jpg",
        comando: "idea64.exe",
        descripcion: "IDE potente y gratuito de JetBrains para Java y Kotlin, con autocompletado inteligente, refactorización avanzada y soporte para desarrollo Android.",
        contenidoTutorialHtml: `
            <h3>💻 Entorno de Desarrollo Java (IDEA)</h3>
            <p>IntelliJ IDEA es el IDE más usado profesionalmente para Java y Kotlin. La edición <strong>Community</strong> es gratuita y de código abierto; la edición <strong>Ultimate</strong> (de pago) añade soporte para desarrollo web, frameworks empresariales (Spring) y bases de datos.</p>
 
            <div class="tutorial-pasos">
                <h4>Requisito previo: JDK</h4>
                <p>IntelliJ necesita un <strong>JDK (Java Development Kit)</strong> instalado para compilar y ejecutar proyectos Java. Si aún no lo tienes, instálalo antes o dentro del propio asistente de creación de proyecto (IntelliJ puede descargarlo automáticamente).</p>
 
                <h4>Paso Importante: Instalación</h4>
                <p>Al instalar, marca: <strong>"Add bin folder to the PATH"</strong> para abrir proyectos desde la consola con el comando <code>idea</code>.</p>
                <div class="nota-advertencia">
                    <p class="m-0"><strong>💡 Recomendado:</strong> También marca <kbd>.java</kbd> y <kbd>.kt</kbd> en "File associations" si quieres que estos archivos se abran directamente con IntelliJ al hacer doble clic.</p>
                </div>
 
                <h4>Primer proyecto</h4>
                <ol>
                    <li>Abre IntelliJ y elige <strong>New Project</strong>.</li>
                    <li>Selecciona <strong>Java</strong> como lenguaje y el JDK detectado.</li>
                    <li>Crea una clase con un método <code>main</code> y ejecuta con el botón ▶️ verde (o <kbd>Shift</kbd> + <kbd>F10</kbd>).</li>
                </ol>
 
                <div class="separador-grad"></div>
 
                <h3 class="borde-secondary">⌨️ Atajos esenciales</h3>
                <div class="bloque-sutil">
                    <ul class="txt-sm">
                        <li>⌨️ <strong>Alt + Enter:</strong> Sugerencias rápidas para corregir errores o importar clases.</li>
                        <li>⌨️ <strong>Ctrl + Alt + L:</strong> Reformatea automáticamente el código (indentación, espacios).</li>
                        <li>⌨️ <strong>Shift Shift (doble):</strong> Buscar cualquier archivo, clase o acción en todo el proyecto.</li>
                        <li>⌨️ <strong>Ctrl + /:</strong> Comentar/descomentar la línea actual.</li>
                    </ul>
                </div>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> Si vas a desarrollar apps para Android, instala el plugin oficial de Android dentro de IntelliJ, o usa directamente <strong>Android Studio</strong> (que está construido sobre esta misma base de JetBrains).</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Descargar IntelliJ", url: "https://www.jetbrains.com/idea/download/" },
            { texto: "Documentación oficial JetBrains", url: "https://www.jetbrains.com/idea/documentation/" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "Visual Studio Code",
        imagen: "img/programacion/visual-studio-code.jpg",
        comando: "code .",
        descripcion: "El editor de código estándar de la industria: ligero, gratuito y extensible mediante plugins para casi cualquier lenguaje o framework.",
        contenidoTutorialHtml: `
            <h3>📝 Editor Multi-lenguaje (VS Code)</h3>
            <p>VS Code no es un IDE completo por sí solo, sino un <strong>editor extensible</strong>: se vuelve tan potente como quieras instalando extensiones (soporte de lenguajes, linters, temas, control de versiones). Es el editor más usado del mundo según las encuestas de Stack Overflow.</p>
 
            <div class="tutorial-pasos">
                <h4>Instalación</h4>
                <div class="nota-advertencia">
                    <p class="m-0"><strong>💡 Recomendado:</strong> Durante la instalación en Windows, marca la casilla <kbd>Add to PATH</kbd> (suele venir activada por defecto). Sin esto, el comando <code>code</code> no funcionará en la terminal.</p>
                </div>
 
                <h4>Atajo Maestro: abrir una carpeta como proyecto</h4>
                <p>Abre la terminal dentro de cualquier carpeta y escribe este comando para abrirla instantáneamente en VS Code:</p>
                <div class="contenedor-comando">
                    <code>code .</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>El punto (<code>.</code>) significa "carpeta actual". También puedes escribir <code>code nombre-carpeta</code> para abrir una carpeta específica sin moverte a ella primero.</small></p>
 
                <div class="separador-grad"></div>
 
                <h3 class="borde-secondary">🧩 Extensiones esenciales</h3>
                <p>Ve al ícono de piezas de rompecabezas en la barra lateral (<kbd>Ctrl + Shift + X</kbd>) e instala según lo que uses:</p>
                <ul>
                    <li><strong>Python</strong> (de Microsoft) — soporte completo para Python.</li>
                    <li><strong>Live Server</strong> — recarga automática al editar HTML/CSS/JS.</li>
                    <li><strong>Prettier</strong> — formatea tu código automáticamente al guardar.</li>
                    <li><strong>GitLens</strong> — visualiza el historial de Git línea por línea.</li>
                </ul>
 
                <h3 class="borde-secondary">⌨️ Atajos esenciales</h3>
                <div class="bloque-sutil">
                    <ul class="txt-sm">
                        <li>⌨️ <strong>Ctrl + </strong> (acento grave): Abre/cierra la terminal integrada.</li>
                        <li>⌨️ <strong>Ctrl + P:</strong> Búsqueda rápida de archivos por nombre.</li>
                        <li>⌨️ <strong>Ctrl + Shift + P:</strong> Paleta de comandos (acceso a cualquier función del editor).</li>
                        <li>⌨️ <strong>Ctrl + /:</strong> Comentar/descomentar la línea actual.</li>
                        <li>⌨️ <strong>Alt + Shift + F:</strong> Formatear el documento completo.</li>
                    </ul>
                </div>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> VS Code trae control de Git integrado (ícono de rama en la barra lateral), así que puedes hacer commits y ver cambios sin salir del editor.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio VS Code", url: "https://code.visualstudio.com/" },
            { texto: "Marketplace de Extensiones", url: "https://marketplace.visualstudio.com/vscode" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "XAMPP (Servidor Local)",
        imagen: "img/programacion/XAMPP.jpg",
        comando: "xampp-control.exe",
        descripcion: "Entorno todo-en-uno que integra Apache (servidor web), MariaDB/MySQL (base de datos) y PHP, para simular un servidor real en tu propia PC sin necesidad de internet.",
        contenidoTutorialHtml: `
            <h3>🌐 Servidor Local de Pruebas</h3>
            <p>XAMPP crea un "servidor web" completo en tu computadora, ideal para desarrollar y probar sitios en <strong>PHP</strong> (como WordPress) o practicar bases de datos con <strong>MySQL</strong> antes de subir nada a internet. El nombre viene de <strong>X</strong>(multiplataforma) + <strong>A</strong>pache + <strong>M</strong>ariaDB + <strong>P</strong>HP + <strong>P</strong>erl.</p>
 
            <div class="tutorial-pasos">
                <div class="nota-peligro">
                    <h4 class="m-0">⚠️ Advertencia de Permisos (UAC)</h4>
                    <p>Evita instalar en <code>C:\\Program Files</code>. Windows restringe la escritura de archivos ahí por seguridad, y Apache/MySQL necesitan escribir logs y datos constantemente. Instala siempre en la raíz: <code>C:\\xampp</code>.</p>
                </div>
 
                <h4>Panel de Control</h4>
                <p>Todo se maneja desde el <strong>XAMPP Control Panel</strong>. Los dos módulos que casi siempre necesitarás encender son:</p>
                <ul>
                    <li><strong>Apache</strong> — el servidor que "sirve" tus páginas web.</li>
                    <li><strong>MySQL</strong> — el motor de base de datos.</li>
                </ul>
                <p>Pulsa <kbd>Start</kbd> junto a cada uno; si el texto se pone verde, están corriendo correctamente.</p>
 
                <h4>¿Dónde van mis archivos?</h4>
                <p>Todo lo que quieras que Apache muestre debe ir dentro de la carpeta:</p>
                <div class="contenedor-comando">
                    <code>C:\\xampp\\htdocs\\</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego, con Apache encendido, accedes desde tu navegador a:</p>
                <div class="contenedor-comando">
                    <code>http://localhost/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>Gestión de bases de datos (phpMyAdmin)</h4>
                <p>Con MySQL encendido, puedes administrar tus bases de datos visualmente (sin comandos) entrando a:</p>
                <div class="contenedor-comando">
                    <code>http://localhost/phpmyadmin</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <div class="nota-advertencia">
                    <p class="m-0"><strong>⚠️ Puerto ocupado (Error 80):</strong> Si Apache no enciende, probablemente el puerto 80 ya lo está usando Skype, IIS o algún otro programa. Cierra ese programa o cambia el puerto de Apache desde <kbd>Config > httpd.conf</kbd>.</p>
                </div>
 
                <p>Ideal para WordPress local y prácticas de PHP.</p>
            </div>
        `,
        links: [
            { texto: "Sitio XAMPP", url: "https://www.apachefriends.org/" },
            { texto: "Documentación de phpMyAdmin", url: "https://www.phpmyadmin.net/docs/" }
        ],
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
        descripcion: "Herramienta pedagógica gratuita para aprender algoritmos mediante pseudocódigo en español, sin la fricción de la sintaxis estricta de un lenguaje real.",
        contenidoTutorialHtml: `
            <h3>🧩 Lógica de Programación</h3>
            <p>PSeInt no compila "código real": ejecuta <strong>pseudocódigo</strong>, una forma de escribir algoritmos con palabras en español (<code>Proceso</code>, <code>Escribir</code>, <code>Leer</code>, <code>Si</code>, <code>Mientras</code>) para que te enfoques en la <strong>lógica</strong> (secuencias, condicionales, bucles) antes de pelear con la sintaxis de un lenguaje como Java o Python.</p>
 
            <div class="tutorial-pasos">
                <h4>1. Perfil de Configuración</h4>
                <p>Al abrir PSeInt por primera vez, elige un perfil desde <strong>Opciones del Editor</strong>:</p>
                <ul>
                    <li><strong>Flexible:</strong> Para principiantes; no exige punto y coma ni mayúsculas estrictas.</li>
                    <li><strong>Estricto (similar a C/Java):</strong> Prepara para lenguajes reales (puntos y comas obligatorios, tipado más marcado).</li>
                </ul>
                <p><small>💡 Recomendación: empieza en <strong>Flexible</strong> y cambia a <strong>Estricto</strong> cuando ya domines lo básico, así la transición a Java o C será menos brusca.</small></p>
 
                <h4>2. Estructura mínima de un algoritmo</h4>
                <p>Todo programa en PSeInt sigue esta forma básica:</p>
                <div class="contenedor-comando">
                    <code>Proceso MiPrimerAlgoritmo<br>&nbsp;&nbsp;&nbsp;&nbsp;Escribir "Hola mundo";<br>FinProceso</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Pulsa el botón ▶️ <strong>Ejecutar</strong> (o <kbd>F5</kbd>) para correrlo.</p>
 
                <h4>3. Diagramas de Flujo</h4>
                <p>Usa el icono <strong>Dibujar Diagrama</strong> para ver tu algoritmo convertido automáticamente en un diagrama de flujo visual — muy útil para entender el orden de ejecución o entregar tareas escolares.</p>
 
                <div class="separador-grad"></div>
 
                <h3 class="borde-secondary">🔤 Palabras clave más usadas</h3>
                <div class="bloque-sutil">
                    <ul class="txt-sm">
                        <li><code>Escribir</code> / <code>Leer</code> — mostrar en pantalla / pedir datos al usuario.</li>
                        <li><code>Si ... Entonces ... FinSi</code> — condicionales.</li>
                        <li><code>Mientras ... FinMientras</code> — bucle que se repite mientras se cumpla una condición.</li>
                        <li><code>Para ... FinPara</code> — bucle con contador (equivalente al <code>for</code>).</li>
                        <li><code>Definir</code> — declarar variables (ej: <code>Definir edad Como Entero;</code>).</li>
                    </ul>
                </div>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> Cuando ya te sientas cómodo con un algoritmo aquí, tradúcelo a Java o Python real usando un compilador online — la lógica es la misma, solo cambia la sintaxis.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio Oficial PSeInt", url: "https://pseint.sourceforge.net/" },
            { texto: "Manual de referencia PSeInt", url: "https://pseint.sourceforge.net/index.php?page=ayuda.php" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "Java Development Kit (JDK)",
        imagen: "img/programacion/Java Development.jpg",
        comando: "javac --version",
        descripcion: "Kit oficial de Oracle (o distribuciones libres como Eclipse Temurin) que incluye el compilador, la máquina virtual y las librerías necesarias para compilar y ejecutar aplicaciones Java.",
        contenidoTutorialHtml: `
            <h3>🏗️ Configuración del Entorno Java</h3>
            <p>El <strong>JDK</strong> (Java Development Kit) es distinto del <strong>JRE</strong> (Java Runtime Environment): el JRE solo <em>ejecuta</em> programas Java ya compilados, mientras que el JDK además incluye <code>javac</code>, el compilador que convierte tu código <code>.java</code> en bytecode ejecutable. Para programar necesitas el JDK, no solo el JRE.</p>
 
            <div class="tutorial-pasos">
                <h4>Paso 1: Instalación</h4>
                <p>Descarga la versión <strong>LTS</strong> (Long Term Support, ej: 17 o 21) si buscas estabilidad para proyectos serios; la última versión numerada te da las funciones más recientes del lenguaje. Ruta por defecto en Windows:</p>
                <div class="contenedor-comando">
                    <code>C:\\Program Files\\Java\\jdk-22</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>Paso 2: Variable JAVA_HOME (Crítico)</h4>
                <p>Muchos IDEs, herramientas de build (Maven, Gradle) y frameworks buscan esta variable de entorno para saber dónde está instalado el SDK. Configúrala así:</p>
                <ul>
                    <li>Nombre: <strong>JAVA_HOME</strong></li>
                    <li>Valor: <code>C:\\Program Files\\Java\\jdk-22</code></li>
                </ul>
                <p><small>En Windows: Panel de Control > Sistema > Configuración avanzada del sistema > Variables de entorno > Nueva (en "Variables del sistema").</small></p>
 
                <div class="nota-advertencia">
                    <p class="m-0"><strong>⚠️ Además del JAVA_HOME:</strong> Agrega también <code>%JAVA_HOME%\\bin</code> a la variable <strong>Path</strong>, o el comando <code>javac</code> no funcionará directamente desde la terminal.</p>
                </div>
 
                <h4>Paso 3: Verificación</h4>
                <p>Comprueba tanto el compilador como el ejecutor de Java:</p>
                <div class="contenedor-comando">
                    <code>javac -version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <div class="contenedor-comando">
                    <code>java -version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <div class="nota-exito">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip:</strong> Para compilar y ejecutar un archivo suelto sin IDE: <code>javac MiArchivo.java</code> genera el <code>.class</code>, y luego <code>java MiArchivo</code> lo ejecuta.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Descargas Oracle", url: "https://www.oracle.com/java/technologies/downloads/" },
            { texto: "Alternativa libre: Eclipse Temurin", url: "https://adoptium.net/" }
        ],
        pasos: []
    },
{
        categoria: "programacion",
        titulo: "Java Online Compiler",
        imagen: "img/programacion/compiler_logo.jpg",
        comando: "println(\"Hello\");",
        descripcion: "Compilador web gratuito para escribir y ejecutar código Java al instante desde el navegador, sin instalar JDK ni configurar nada.",
        contenidoTutorialHtml: `
            <h3>☁️ Entorno de Pruebas Rápido</h3>
            <p>No siempre necesitas instalar Java completo solo para probar un fragmento de código. Un compilador online te permite escribir, ejecutar y ver el resultado de un programa Java directamente en el navegador, ideal para practicar en una PC prestada, en la escuela, o simplemente para no perder tiempo instalando algo para una prueba rápida.</p>
 
            <div class="tutorial-pasos">
                <h4>Ventajas:</h4>
                <ul>
                    <li><strong>Cero instalación:</strong> No requiere JDK ni configurar variables de entorno.</li>
                    <li><strong>Interactividad:</strong> Prueba entradas de teclado (<code>Scanner</code>) igual que en un programa local.</li>
                    <li><strong>Portabilidad:</strong> Funciona en cualquier navegador, incluso en celular o tablet.</li>
                </ul>
 
                <h4>Estructura mínima para probar código</h4>
                <p>Todo programa Java necesita una clase con un método <code>main</code>:</p>
                <div class="contenedor-comando">
                    <code>public class Main {<br>&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello");<br>&nbsp;&nbsp;}<br>}</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <div class="nota-advertencia">
                    <p class="m-0"><strong>⚠️ Limitación:</strong> Estos compiladores online no sirven para proyectos grandes con múltiples archivos, librerías externas o frameworks. Son solo para pruebas puntuales y aprendizaje.</p>
                </div>
 
                <p><strong>Recomendación:</strong> Úsalo para traducir tus algoritmos de PSeInt a código real y ver si tu lógica funciona igual en un lenguaje formal, antes de instalar el JDK completo en tu equipo.</p>
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
{
        categoria: "programacion",
        titulo: "PyCharm Community",
        imagen: "img/programacion/pycharm.jpg",
        comando: "pycharm64.exe",
        descripcion: "IDE profesional de JetBrains especializado en Python, con depurador avanzado y soporte para entornos virtuales.",
        contenidoTutorialHtml: `
            <h3>🐘 Instalación de PyCharm (JetBrains)</h3>
            <p>PyCharm es uno de los IDEs más completos para Python: autocompletado inteligente, depurador visual y gestión integrada de entornos virtuales.</p>
 
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga del instalador</h4>
                <p>Elige la edición <strong>Community</strong> (gratuita) a menos que necesites herramientas web/empresariales de la edición Professional.</p>
                <div class="contenedor-comando">
                    <code>
                        <a href="https://www.jetbrains.com/pycharm/download/?section=windows" target="_blank" class="link-comando">https://www.jetbrains.com/pycharm/download/?section=windows</a>
                    </code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>Paso 2: Opciones durante la instalación</h4>
                <div class="nota-advertencia">
                    <p class="m-0"><strong>⚠️ Recomendado:</strong> Marca <kbd>Add "bin" folder to the PATH</kbd> y <kbd>Create Desktop Shortcut</kbd> para acceder más rápido.</p>
                </div>
 
                <h4>Paso 3: Configuración del intérprete</h4>
                <p>Al crear tu primer proyecto, PyCharm te pedirá elegir un <strong>intérprete de Python</strong>. Si ya instalaste Python (con "Add to PATH" activado), debería detectarlo automáticamente.</p>
 
                <h4>Paso 4: Verificación</h4>
                <div class="contenedor-comando">
                    <code>pycharm64.exe</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>Al abrirlo, crea un nuevo proyecto de prueba y ejecuta un <code>print("Hola mundo")</code> para confirmar que todo funciona.</small></p>
            </div>
 
            <div class="separador-grad"></div>
 
            <h3 class="borde-secondary">🐧 Instalación en Linux Mint (vía Snap)</h3>
            <div class="tutorial-pasos">
                <h4>1. Elimina el archivo de bloqueo de Snap</h4>
                <p>Linux Mint bloquea Snap por defecto, así que primero hay que quitar esa restricción:</p>
                <div class="contenedor-comando">
                    <code>sudo rm /etc/apt/preferences.d/nosnap.pref</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>2. Actualiza los repositorios</h4>
                <div class="contenedor-comando">
                    <code>sudo apt update</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>3. Instala el motor de Snap (snapd)</h4>
                <div class="contenedor-comando">
                    <code>sudo apt install snapd</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <div class="nota-peligro">
                    <p class="m-0"><strong>⚠️ Paso que se olvida fácil:</strong> Después de instalar <code>snapd</code> por primera vez, <strong>reinicia el equipo</strong>. Si no reinicias, el sistema aún no reconoce el servicio de Snap y los comandos siguientes pueden fallar o el programa instalado no aparecerá.</p>
                </div>
                <div class="contenedor-comando">
                    <code>sudo reboot</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>4. Instala PyCharm con Snap</h4>
                <p>El flag <code>--classic</code> es obligatorio: le da a PyCharm permisos completos del sistema (necesarios para que funcione como un IDE normal).</p>
                <div class="contenedor-comando">
                    <code>sudo snap install pycharm-community --classic</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
 
                <h4>5. Ábrelo desde la terminal</h4>
                <p>Una vez instalado (y tras el reinicio), puedes lanzarlo directamente con:</p>
                <div class="contenedor-comando">
                    <code>pycharm-community</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small>💡 También debería aparecer en el menú de aplicaciones de Linux Mint con su propio ícono, sin necesidad de usar la terminal cada vez.</small></p>
            </div>
        `,
        links: [{ texto: "Descargar PyCharm", url: "https://www.jetbrains.com/pycharm/download/?section=windows" }],
        pasos: []
    },
    // SISTEMAS
];
