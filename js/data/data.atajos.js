// Datos de categoría: atajos
// Generado automáticamente desde data.js
export const datos_atajos = [
{
        categoria: "atajos",
        titulo: "Script de Consola: Administrador Pro",
        imagen: "img/atajos/toptal.jpg",
        comando: ".BAT Script",
        descripcion: "Menú interactivo para herramientas de Windows. Ahora con vista contraíble.",
        contenidoTutorialHtml: `
            <h3>🔧 Consola de Administración Rápida</h3>
            <p>Este script agrupa herramientas vitales de red y sistema en un solo menú.</p>
            
            <div class="tutorial-pasos">
            <h4>Paso 1: Instrucciones</h4>
            <p>Copia el código y guárdalo como:</p>

            <div class="contenedor-comando">
                <code>Menu_Sistemas.bat</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-code"></i> CLIC PARA MOSTRAR EL CÓDIGO
                    </summary>
                    <div class="contenedor-comando m-0">
<pre class="codigo-consola">
@echo off
title Central de Ingenieria - Menu de Atajos
:inicio
cls
echo ============================================
echo      CENTRAL DE INGENIERIA - ATAJOS PRO
echo ============================================
echo [1] Informacion del Sistema (msinfo32)
echo [2] Conexiones de Red (ncpa.cpl)
echo [3] Propiedades del Sistema (Nombre/Grupo)
echo [4] Desinstalar Programas (appwiz.cpl)
echo [5] Administrador de Servicios (services.msc)
echo [6] Administrador de Tareas (taskmgr)
echo [7] Administrador de Discos (diskmgmt.msc)
echo [8] Herramientas de Diagnostico DirectX
echo [9] Abrir Panel de Control Clasico
echo [10] Editor del Registro (regedit)
echo [11] Salir
echo ============================================
set /p opcion=Selecciona una herramienta (1-11): 

if %opcion%==1 start msinfo32
if %opcion%==2 start ncpa.cpl
if %opcion%==3 start sysdm.cpl
if %opcion%==4 start appwiz.cpl
if %opcion%==5 start services.msc
if %opcion%==6 start taskmgr
if %opcion%==7 start diskmgmt.msc
if %opcion%==8 start dxdiag
if %opcion%==9 start control
if %opcion%==10 start regedit
if %opcion%==11 exit

goto inicio
    </pre>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)">
                            <i class="fas fa-copy"></i> Copiar Script
                        </button>
                    </div>
                </details>

                <div class="links-seccion">
                    <a href="https://drive.google.com/file/d/1kx9-V82F8wJrqUhRj9_c15cAvNkc242k/view?usp=drive_link" target="_blank" class="btn-pro-link google" data-tooltip="Descargar Archivo">
                        <i class="fab fa-google"></i> 
                        <span class="texto-btn-cortado">Descargar Archivo</span>
                    </a>
                </div>

                <h4>Paso 2: Ejecución</h4>
                <p>Haz clic derecho y selecciona <strong>Ejecutar como administrador</strong> para habilitar todas las funciones.</p>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "atajos",
        titulo: "Información y Diagnóstico del Sistema",
        imagen: "img/atajos/prueba.jpg",
        comando: "winver / msinfo32 / dxdiag / msconfig",
        descripcion: "Herramientas integrales para verificar la versión de Windows, detalles de hardware, diagnóstico de gráficos y configuración de arranque.",
        contenidoTutorialHtml: `
            <h3>💻 Auditoría de Sistema</h3>
            <div class="tutorial-pasos">
                <p><strong>Versión de Windows (winver):</strong> Verifica la compilación exacta del sistema.</p>
                <div class="contenedor-comando">
                    <code>winver</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Información Detallada (msinfo32):</strong> Todo sobre placa base, BIOS y RAM.</p>
                <div class="contenedor-comando">
                    <code>msinfo32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header"><i class="fas fa-microchip"></i> DIAGNÓSTICO AVANZADO</summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>DirectX Diagnostic (dxdiag):</strong> Reporte de video y sonido.</p>
                        <div class="contenedor-comando">
                            <code>dxdiag</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p><strong>System Config (msconfig):</strong> Gestiona el inicio y el <strong>Modo Seguro</strong>.</p>
                        <div class="contenedor-comando">
                            <code>msconfig</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "atajos",
        titulo: "Administración de Hardware y Discos",
        imagen: "img/atajos/discod.jpg",
        comando: "devmgmt.msc / diskmgmt.msc / cleanmgr",
        descripcion: "Gestión técnica de controladores de dispositivos, volúmenes de disco y limpieza de archivos temporales de sistema.",
        contenidoTutorialHtml: `
            <h3>🛠️ Controladores y Almacenamiento</h3>
            <div class="tutorial-pasos">
                <p><strong>Administrador de Dispositivos:</strong> Gestiona drivers y fallos de hardware.</p>
                <div class="contenedor-comando">
                    <code>devmgmt.msc</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Administrador de Discos:</strong> Formatear, particionar y cambiar letras de unidad.</p>
                <div class="contenedor-comando">
                    <code>diskmgmt.msc</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Liberador de Espacio (cleanmgr):</strong> Limpia archivos basura del sistema.</p>
                <div class="contenedor-comando">
                    <code>cleanmgr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "atajos",
        titulo: "Identidad, Usuarios y Aplicaciones",
        imagen: "img/atajos/usuarios.jpg",
        comando: "sysdm.cpl / netplwiz / appwiz.cpl",
        descripcion: "Configura el nombre del equipo, gestiona cuentas de usuario locales y administra programas instalados.",
        contenidoTutorialHtml: `
            <h3>👤 Gestión de Identidad</h3>
            <div class="tutorial-pasos">
                <p><strong>Propiedades del Sistema:</strong> Cambia el nombre del equipo y Grupo de Trabajo.</p>
                <div class="contenedor-comando">
                    <code>sysdm.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Cuentas de Usuario (netplwiz):</strong> Gestiona contraseñas y permisos de usuario.</p>
                <div class="contenedor-comando">
                    <code>control userpasswords2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header"><i class="fas fa-th-list"></i> GESTIÓN DE SOFTWARE</summary>
                    <div class="tutorial-pasos warning">
                        <p><strong>Programas y Características:</strong> Desinstalación clásica de aplicaciones.</p>
                        <div class="contenedor-comando">
                            <code>appwiz.cpl</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p><strong>Programas Predeterminados:</strong> Configura qué app abre cada archivo.</p>
                        <div class="contenedor-comando">
                            <code>computerdefaults</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "atajos",
        titulo: "Herramientas de Soporte y Accesibilidad",
        imagen: "img/atajos/service-desk.jpg",
        comando: "PSR / OSK / \\",
        descripcion: "Recursos para asistencia técnica remota, teclado virtual y acceso instantáneo al disco raíz.",
        contenidoTutorialHtml: `
            <h3>🆘 Asistencia y Accesibilidad</h3>
            <div class="tutorial-pasos">
                <p><strong>Grabadora de Pasos (PSR):</strong> Crea un reporte visual de un error para soporte técnico.</p>
                <div class="contenedor-comando">
                    <code>psr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Teclado en Pantalla (OSK):</strong> Utilidad de accesibilidad o para fallos de teclado físico.</p>
                <div class="contenedor-comando">
                    <code>osk</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Acceso Raíz:</strong> Abre el explorador directamente en la unidad C:.</p>
                <div class="contenedor-comando">
                    <code>\\</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
{
        categoria: "atajos",
        titulo: "Panel de Control Rápido (Tiempo y Energía)",
        imagen: "img/atajos/energia.jpg",
        comando: "timedate.cpl / powercfg.cpl",
        descripcion: "Configuración inmediata de la fecha, hora del sistema y planes de ahorro de energía.",
        contenidoTutorialHtml: `
            <h3>🕙 Reloj y Energía</h3>
            <div class="tutorial-pasos">
                <p><strong>Fecha y Hora:</strong> Ajusta la zona horaria y sincronización de red.</p>
                <div class="contenedor-comando">
                    <code>timedate.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p><strong>Planes de Energía:</strong> Cambia entre Alto Rendimiento o Ahorro de Energía.</p>
                <div class="contenedor-comando">
                    <code>powercfg.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },

    //CATEGORIA DE BASICOS
];
