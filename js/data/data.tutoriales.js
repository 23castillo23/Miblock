// Datos de categoría: tutoriales
// Generado automáticamente desde data.js
export const datos_tutoriales = [
{
        categoria: "tutoriales",
        titulo: "Eliminar Clave de Windows",
        imagen: "img/tutoriales/passwin.jpg",
        comando: "NET USER",
        descripcion: "Si has olvidado la clave de usuario de tu Windows, realiza estos pasos para recuperar el acceso.",
        contenidoTutorialHtml: `
            <h3>👤 Método de acceso de usuario</h3>
            <p>Este proceso permite abrir una terminal con privilegios de <strong>SYSTEM</strong> desde la pantalla de inicio de sesión (Login).</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Acceder al Símbolo del Sistema</h4>
                <p>Presiona la tecla <kbd>Shift</kbd> y haz clic en <kbd>Reiniciar</kbd> para abrir el menú de recuperación. Ve a: <strong>Solucionar problemas > Opciones avanzadas > Símbolo del sistema</strong>.</p>
                
                <div class="contenedor-comando">
                    <code>cd c:\\windows\\system32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Renombrar el Teclado en Pantalla</h4>
                <p>Escribimos el siguiente comando para renombrar el archivo original:</p>
                
                <div class="contenedor-comando">
                    <code>osk.exe osk.old</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Sustituir por el CMD</h4>
                <p>Ahora hacemos que el sistema crea que la consola es el teclado para poder abrirla en el inicio:</p>
                
                <div class="contenedor-comando">
                    <code>copy cmd.exe osk.exe</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 4: Buscamos nuestro Usuario</h4>
                <p>Reinicia la PC de forma normal. En la pantalla donde pide la clave, abre <strong>Accesibilidad > Teclado en pantalla</strong>. Se abrirá el CMD. Escribe el comando para listar los usuarios:</p>
                
                <div class="contenedor-comando">
                    <code>NET USER</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Paso 5: Cambiar la Contraseña</h4>
                <p>Escribimos nuestro Usuario entre <strong>comillas</strong>, dejamos un espacio y escribimos un asterisco (*):</p>
                
                <div class="contenedor-comando">
                    <code>NET USER "NOMBRE_USUARIO" *</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p class="mt-15"><i>Nota: Presiona <kbd>Enter</kbd> dos veces para dejar la contraseña en blanco y poder entrar directamente sin clave.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=JFRXBNPYFRA&t=163s",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Verificar Activación de Office",
        imagen: "img/tutoriales/Activar-office.jpg",
        comando: "cscript ospp.vbs /dstatus",
        descripcion: "Consulta el estado de la licencia de Microsoft Office y su fecha de expiración desde la terminal.",
        contenidoTutorialHtml: `
            <h3>🔑 Estado de Licencia de Office</h3>
            <p>Este procedimiento utiliza el script de administración de licencias de Office para verificar si el producto está activado y qué tipo de clave utiliza.</p>
            
            <div class="tutorial-pasos">
                <p><strong>⚠️ Requisito:</strong> Debes ejecutar el Símbolo del Sistema (CMD) como <strong>Administrador</strong>.</p>

                <h4>Paso 1: Localizar la carpeta de Office</h4>
                <p>Primero, debes situar la terminal en la carpeta donde se encuentra instalado Office (usualmente la versión 16). Copia y pega esta ruta:</p>
                
                <div class="contenedor-comando">
                    <code>cd "C:\\Program Files\\Microsoft Office\\Office16"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p><i>Nota: Si usas Office de 32 bits en un Windows de 64 bits, la ruta será: <br><code>"C:\\Program Files (x86)\\Microsoft Office\\Office16"</code></i></p>

                <h4>Paso 2: Ejecutar la consulta de estado</h4>
                <p>Una vez dentro de la carpeta, ejecuta el script de estado para ver la información de la licencia:</p>
                
                <div class="contenedor-comando">
                    <code>cscript ospp.vbs /dstatus</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p class="mt-15">Al finalizar, busca la línea que dice <strong>LICENSE STATUS</strong>. Si aparece como <strong class="color-exito">"--- LICENSED ---"</strong>, tu Office está correctamente activado.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=kHcCPqy6hO4",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Saltar Correo en Windows 11",
        imagen: "img/tutoriales/saltarcuenta.jpg",
        comando: "oobe\\bypassnro",
        descripcion: "Instala Windows 11 sin cuenta obligatoria de Microsoft para poder crear una cuenta local de usuario.",
        contenidoTutorialHtml: `
            <h3>⏭️ Omitir cuenta de Microsoft</h3>
            <p>Cuando llegues a la pantalla de <strong>"Vamos a conectarte a una red"</strong> y el sistema no te permita continuar sin internet, realiza lo siguiente:</p>
            
            <div class="tutorial-pasos">
                <p><strong>Paso Inicial:</strong> Abre la consola de comandos presionando: <kbd>Mayús</kbd> + <kbd>F10</kbd></p>
                
                <p><small><i>Nota: En algunas laptops debes usar <kbd>Fn</kbd> + <kbd>Mayús</kbd> + <kbd>F10</kbd>.</i></small></p>

                <h4>Paso 1: Desconectar adaptadores (Opcional)</h4>
                <p>Si tienes un cable Ethernet conectado, puedes usar este comando para abrir las conexiones y desactivarlo temporalmente:</p>
                
                <div class="contenedor-comando">
                    <code>ncpa.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Comando de Salto Maestro</h4>
                <p>Escribe el siguiente comando para reiniciar el equipo y habilitar la opción de omitir el registro:</p>
                
                <div class="contenedor-comando">
                    <code>oobe\\bypassnro</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p class="mt-15"><i>El equipo se reiniciará automáticamente. Al volver a la configuración, verás un botón nuevo que dice <strong>"No tengo internet"</strong>. Selecciónalo para continuar con una cuenta local.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/OdncvO2Dg6A",
                plataforma: "youtube"
            },
            {
                texto: "Opción 2",
                url: "https://www.youtube.com/shorts/_zrV3RpxX38",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Comprobar la licencia de Windows",
        imagen: "img/tutoriales/clave.jpg",
        comando: "slmgr / regedit / wmic",
        descripcion: "Manual integral para auditar el estado de activación, identificar el tipo de licencia (OEM/Retail) y recuperar la clave original del sistema.",
        contenidoTutorialHtml: `
            <h3>🔑 Activación y Licenciamiento</h3>
            <p>Administra la legalidad de tu sistema y recupera tus credenciales originales con estos métodos técnicos avanzados.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-user-shield"></i> FASE 1: VERIFICAR ESTADO Y TIPO
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Verificar expiración:</strong> Confirma si la activación es permanente.</p>
                        <div class="contenedor-comando">
                            <code>slmgr /xpr</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>

                        <p><strong>Identificar tipo de canal:</strong> Determina si es <strong>Retail</strong>, <strong>OEM</strong> o <strong>Volume</strong>.</p>
                        <div class="contenedor-comando">
                            <code>slmgr /dli</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
                    <summary class="acordeon-header">
                        <i class="fas fa-key"></i> FASE 2: RECUPERAR CLAVE ORIGINAL
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Opción A: Comando rápido (CMD):</strong> Extrae la clave grabada en el firmware (BIOS).</p>
                        <div class="contenedor-comando">
                            <code>wmic path softwarelicensingservice get OA3xOriginalProductKey</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>

                        <p class="mt-15"><strong>Opción B: Editor del Registro <kbd>Win</kbd> + <kbd>R</kbd> (regedit):</strong></p>
                        <p>Busca el valor <strong>BackupProductKeyDefault</strong> en la siguiente ruta:</p>
                        <div class="contenedor-comando">
                            <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <div class="nota-info">
                    <p class="m-0"><i class="fas fa-info-circle"></i> <strong>Tip técnico:</strong> También puedes ejecutar estos comandos directamente en la ventana <kbd>Win</kbd> + <kbd>R</kbd> anteponiendo la palabra <code>cmd /k</code> si deseas que la ventana no se cierre.</p>
                </div>
            </div>
        `,
        links: [
            { texto: "Video: Estado Activación", url: "https://www.youtube.com/shorts/iOL5uP7Xdoo", plataforma: "youtube" },
            { texto: "Video: Recuperar Clave", url: "https://www.youtube.com/shorts/gmheirF-HlM", plataforma: "youtube" }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Controlar 2+ PCs con un solo Mouse",
        imagen: "img/tutoriales/ratonteclado.jpg",
        comando: "Mouse Without Borders",
        descripcion: "Utiliza un solo teclado y mouse para controlar hasta 4 computadoras de forma inalámbrica y compartir el portapapeles.",
        contenidoTutorialHtml: `
            <h3>🖱️ Un solo Teclado y Mouse para todo</h3>
            <p><strong>Mouse Without Borders</strong> es un proyecto de Microsoft Garage que te permite mover el puntero entre diferentes monitores de PCs distintos como si fuera una sola computadora extendida.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga e Instalación</h4>
                <p>Debes descargar e instalar la aplicación en <strong>todas</strong> las computadoras que quieras conectar (soporta hasta 4).</p>
                
                <div class="contenedor-comando">
                    <code>Microsoft Garage Mouse Without Borders</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Nombre
                    </button>
                </div>

                <h4>Paso 2: Vincular las Computadoras</h4>
                <p>Al abrir el programa por primera vez:</p>
                <ul>
                    <li>En la PC principal, verás un <strong>Security Code</strong> y el <strong>Computer Name</strong>.</li>
                    <li>En la segunda PC, introduce esos datos para establecer el enlace seguro.</li>
                </ul>
                <br>
                <h4>Paso 3: Configuración del Orden</h4>
                <p>Una vez conectadas, arrastra los iconos de los monitores en la aplicación para que coincidan con su posición física en tu escritorio.</p>
                
                <p style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                    <strong>💡 Tip Pro:</strong> ¡También puedes arrastrar archivos de una PC a otra simplemente moviéndolos con el mouse a través de los bordes!
                </p>
            </div>
        `,
        links: [
            {
                texto: "Descargar de Microsoft Center",
                url: "https://www.microsoft.com/en-us/download/details.aspx?id=35460"
            },
            {
                texto: "Video Tutorial 1",
                url: "https://www.youtube.com/shorts/NDWXuikArOY",
                plataforma: "youtube"
            },
            {
                texto: "Video Tutorial 2",
                url: "https://www.youtube.com/shorts/1wKjAcat7FM",
                plataforma: "youtube"
            }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Conexión Red de PC a PC (Peer-to-Peer)",
        imagen: "img/tutoriales/cable-red2.jpg",
        comando: "ping 192.168.1.x",
        descripcion: "Guía completa para conectar dos computadoras mediante Ethernet para compartir archivos y enviar mensajes sin internet.",
        contenidoTutorialHtml: `
            <h3>🔗 Configuración de Red Local Directa</h3>
            <p>Este manual guía la conexión de dos equipos mediante cable Ethernet utilizando tecnología <strong>Auto-MDIX</strong> para compartir recursos sin routers externos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Hardware y Cableado (T568B)</h4>
                <p>Debes ponchar ambos extremos del cable bajo la norma T568B en el siguiente orden:</p>
                <table class="tabla-base">
                    <tr class="borde-sutil">
                        <td class="p-5">1. B-Naranja</td>
                        <td class="p-5">2. Naranja</td>
                        <td class="p-5">3. B-Verde</td>
                        <td class="p-5">4. Azul</td>
                    </tr>
                    <tr>
                        <td class="p-5">5. B-Azul</td>
                        <td class="p-5">6. Verde</td>
                        <td class="p-5">7. B-Café</td>
                        <td class="p-5">8. Café</td>
                    </tr>
                </table>
                
                <p><i>Verificación: Los LEDs del puerto Ethernet deben encenderse al conectar ambos equipos.</i></p>

                <h4>Paso 2: Configuración de IPs Estáticas</h4>
                <p>Ambas PC deben estar en el mismo rango de red.</p>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración del adaptador -> clic derecho - propiedades -> Protocolo de Internet versión 4(TCP/IPv4) -> utilizar la siguiente dirección IP:</p>
                <ul>
                    <li><strong>PC 1:</strong> IP <code>192.168.1.1</code> | Máscara <code>255.255.255.0</code></li>
                    <li><strong>PC 2:</strong> IP <code>192.168.1.2</code> | Máscara <code>255.255.255.0</code></li>
                </ul>

                <h4>Paso 3: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p>Activa los siguientes interruptores en ambas PC:</p>
                <ul style="font-size: 0.9rem;">
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras (las dos).</li>
                    <li>Uso compartido de carpetas públicas (En Todas las redes).</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 4: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <p><strong>⚠️ ¿Problemas?</strong> Si Windows muestra "Red no identificada" y no te deja cambiar, usa este comando en <strong>PowerShell (Admin)</strong> para ver el nombre de la interfaz:</p>
                <div class="contenedor-comando">
                    <code>Get-NetConnectionProfile</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego, fuerza el perfil privado (cambia "Ethernet" por el nombre que obtuviste):</p>
                <div class="contenedor-comando">
                    <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Paso 5: Verificación de Conexión (Ping)</h4>
                <p>Desde la PC 1, comprueba si hay comunicación con la PC 2:</p>
                <div class="contenedor-comando">
                    <code>ping 192.168.1.2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Si responde con el tiempo en ms, la conexión funciona correctamente.</i></small></p>

                <h4>Paso 6: Mensajería por CMD (Comando MSG)</h4>
                <p>Primero, guarda las credenciales de la otra PC:</p>
                <div class="contenedor-comando">
                    <code>cmdkey /add:192.168.1.2 /user:USUARIO_PC2 /pass:CLAVE_PC2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego envía el mensaje:</p>
                <div class="contenedor-comando">
                    <code>msg * /server:192.168.1.2 "Prueba de red exitosa"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>💡 Pro Tip: Identificación de Usuario</h4>
                <p>Para saber el nombre exacto, ejecuta esto en la PC destino:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p class="mt-15"><strong>⚠️ Solución a errores:</strong> Si el mensaje falla, habilita la recepción remota en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual PDF", url: "https://drive.google.com/file/d/1SzM3IcmnkqjyLqIg-u00Rt11uPVXzvep/view?usp=drive_link" }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Compartir Carpetas y Gestión de Credenciales",
        imagen: "img/tutoriales/comparchivos.jpg",
        comando: "whoami",
        descripcion: "Configuración profesional para compartir archivos en red local, incluyendo permisos de carpeta y creación de credenciales de Windows.",
        contenidoTutorialHtml: `
            <h3>📂 Protocolo de Intercambio de Archivos</h3>
            <p>Este tutorial explica cómo configurar la visibilidad de red y los permisos necesarios para que dos equipos se comuniquen de forma segura y permitan el acceso a archivos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Abre Panel de Control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p><strong>Activa los siguientes interruptores en ambas PC:</strong></p>
                <ul>
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras.</li>
                    <li>Uso compartido de carpetas públicas (En "Todas las redes").</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 2: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-exclamation-triangle"></i> CLIC SI NO PUEDES CAMBIAR A RED PRIVADA
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si Windows no te deja cambiar a Privada desde ajustes, usa este truco en <strong>PowerShell (Admin)</strong>:</p>
                        <div class="contenedor-comando">
                            <code>Get-NetConnectionProfile</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Identifica el nombre de tu red (ej: "Ethernet") y ejecuta este comando para forzar el perfil privado:</p>
                        <div class="contenedor-comando">
                            <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <h4>Paso 3: Compartir una Carpeta (Configuración Completa)</h4>
                <h5>1. Preparación</h5>
                <ul>
                    <li>Clic derecho en la carpeta -> <kbd>Propiedades</kbd> -> Pestaña <kbd>Compartir</kbd>.</li>
                </ul>

                <h5>2. Uso Compartido Avanzado (Permisos de Red)</h5>
                <ul>
                    <li>Botón <kbd>Uso compartido avanzado...</kbd> -> Marca <strong>"Compartir esta carpeta"</strong>.</li>
                    <li>En <kbd>Permisos</kbd>, marca <strong>"Control total"</strong> para "Todos".</li>
                </ul>

                <h5>3. Permisos de Usuario (Acceso Final)</h5>
                <ul>
                    <li>Botón <kbd>Compartir...</kbd> -> Selecciona <strong>"Todos"</strong> (Everyone) y haz clic en <kbd>Agregar</kbd>.</li>
                    <li>Cambia el nivel a <strong>"Lectura y escritura"</strong> y dale a <kbd>Compartir</kbd>.</li>
                </ul>

                <p><strong>💡 Pro Tip:</strong> Si falla el guardado, verifica en la pestaña <kbd>Seguridad</kbd> que el grupo "Todos" tenga permisos de "Modificar".</p>

                <h4>Paso 4: Identificación de Red</h4>
                <p>Para crear la credencial, debes saber el nombre del equipo y usuario destino. Ejecuta esto en la PC a la que te vas a conectar:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Ejemplo de resultado: juan\\alumno</i></small></p>

                <h4>Paso 5: Crear Credencial de Windows</h4>
                <p>Ve a <strong>Panel de Control > Administrador de credenciales > Credenciales de Windows</strong> e ingresa los datos de la PC2:</p>
                <ul>
                    <li><strong>Dirección:</strong> Nombre de la PC2 (ej: juan).</li>
                    <li><strong>Usuario:</strong> Usuario de la PC2 (ej: alumno).</li>
                    <li><strong>Contraseña:</strong> Clave de inicio de la PC2.</li>
                </ul>

                <h4>Paso 6: Grupo de Trabajo</h4>
                <p>Ambas PC deben estar en el mismo grupo (ej: WORKGROUP). Cámbialo en <em>Sistema > Información > Dominio o grupo de trabajo</em>.</p>

               <details class="acordeon-tutorial" class="mt-15">
                    <summary class="acordeon-header">
                        <i class="fas fa-search"></i> CLIC SI TU PC NO APARECE EN LA RED
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Si ves otras computadoras pero no la tuya, abre <strong>services.msc</strong> y busca el servicio:</p>
                        <p><strong>Publicación de recursos de detección de función</strong>.</p>
                        <p>Cámbialo a tipo de inicio <strong>Automático</strong> e inícialo para activar la visibilidad local.</p>
                    </div>
                </details>

                <h4>Soluciones Rápidas</h4>
                <p>Entrada rápida: <kbd>Win</kbd> + <kbd>R</kbd> ➔ \\\\[Nombre de la PC]</p>
                <p>Si el acceso remoto falla, habilita RPC en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual de PDF", url: "https://drive.google.com/file/d/1rHUsdqXC-5nmUxs04-RCeA8GHeD2XKZm/view?usp=drive_link" }
        ],
        pasos: []
    },
{
        categoria: "tutoriales",
        titulo: "Control Total: Accesos Remotos (3 Opciones)",
        imagen: "img/tutoriales/Acceso-Remoto.jpg",
        comando: "mstsc / remotedesktop.google.com",
        descripcion: "Manual integral para controlar PCs desde la red local (LAN) o desde cualquier parte del mundo (Internet) de forma segura.",
        contenidoTutorialHtml: `
            <h3>🖥️ Domina el Acceso a Distancia</h3>
            <p>Configura tu equipo para trabajar de forma remota siguiendo estos métodos profesionales.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-network-wired"></i> OPCIÓN 1: CONEXIÓN EN RED LOCAL (LAN)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Configuración en la PC a controlar:</strong> Activa "Escritorio Remoto" en Configuración y anota el nombre del equipo.</p>
                        <p><strong>Desde la PC cliente:</strong> Ejecuta el comando:</p>
                        <div class="contenedor-comando">
                            <code>mstsc</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/shorts/tllEuQI0Rw8" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Cómo Habilitar el escritorio remoto en Windows 11">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Cómo Habilitar el escritorio remoto en Windows 11</span>
                            </a>
                            <a href="https://www.youtube.com/shorts/kTVrUyNSYnE" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: ¿Cómo CONFIGURAR un ESCRITORIO REMOTO?">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: ¿Cómo CONFIGURAR un ESCRITORIO REMOTO?</span>
                            </a>
                        </div>                        
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
                    <summary class="acordeon-header">
                        <i class="fas fa-globe"></i> OPCIÓN 2: ACCESO DESDE INTERNET (Google Remote)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <p>Ideal para conectar desde fuera de casa. Instala la extensión en Chrome y configura un PIN de 6 dígitos.</p>
                        <div class="contenedor-comando">
                            <code>remotedesktop.google.com</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar Link</button>
                        </div>                        
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/watch?v=CnQfQVNz9Es" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Como usar ESCRITORIO REMOTO de GOOGLE CHROME">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Como usar ESCRITORIO REMOTO de GOOGLE CHROME</span>
                            </a>
                            <a href="https://remotedesktop.google.com/access" target="_blank" class="btn-pro-link google" data-tooltip="Abrir extensiones de Google Remote">
                                <i class="fab fa-google"></i> 
                                <span class="texto-btn-cortado">google extensiones</span>
                            </a>
                        </div>
                    </div>
                </details>

                <details class="acordeon-tutorial" class="mt-10">
                    <summary class="acordeon-header">
                        <i class="fas fa-hands-helping"></i> OPCIÓN 3: SOPORTE RÁPIDO (Windows Native)
                    </summary>
                    <div class="tutorial-pasos warning">
                        <ol>
                            <li>Ambos abren la app con: <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd>Q</kbd>.</li>
                            <li><strong>El Técnico (Ayuda):</strong> Debe <strong>iniciar sesión</strong> con su cuenta Microsoft para generar el código de seguridad.</li>
                            <li><strong>El Usuario (Recibe):</strong> Introduce el código y hace clic en <strong>Enviar</strong>.</li>
                            <li>Al permitir el acceso, el técnico podrá ver y <strong>manipular la PC remota</strong>.</li>
                        </ol>                        
                        <div class="links-seccion">
                            <a href="https://www.youtube.com/shorts/PRdne2V_B7A" target="_blank" class="btn-pro-link youtube" data-tooltip="Video: Acceso remoto a Varias computadoras">
                                <i class="fab fa-youtube"></i> 
                                <span class="texto-btn-cortado">Video: Acceso remoto a Varias computadoras</span>
                            </a>
                        </div>
                    </div>
                </details>

                <div class="tech-note note-info">
                    <i class="fas fa-shield-alt"></i>
                    <p><strong>Nota de Seguridad:</strong> Nunca compartas códigos o PINs con desconocidos. Estos accesos dan control total sobre tus archivos.</p>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },

    //CATEGORIA PROGRAMACION
    // =====================================================
    // CATEGORIA PROGRAMACIÓN
    // =====================================================
];
