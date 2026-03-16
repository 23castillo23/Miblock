usuario_pasos.md
Guía de Git para rama-vikthor

## 1.  Clonar el proyecto (Solo la primera vez)
    Para descargar el repositorio y crear tu rama de trabajo:
  - git clone https://github.com/23castillo23/albumFamiliar //¿Qué hace?: Descarga / Clonar.
  - cd Miblock // ¿Qué hace?: Entrar a la carpeta.
  - git checkout -b rama-vikthor //¿Qué hace?: Crear tu espacio personal.

## 2.  Bajar cambios (Actualizar tu rama)
    ¿Cuándo? Siempre antes de empezar a trabajar cada día o antes de subir tus propios cambios para estar al día con lo que otros subieron a main.

  - git pull origin main

        ¿Cómo hacer un Pull correctamente?
            Opción A (Segura): git pull origin main
            (Usa esto si quieres estar 100% seguro de traer lo de la rama principal).

            Opción B (Rápida): git pull
            GPWD(Solo funciona si ya configuraste el "upstream" con git branch --set-upstream-to=origin/main rama-vikthor).

## 3.  Subir tus cambios Pasos 5, 6 y 7 (Guardar en la nube)
    ¿Cuándo? Cuando hayas terminado una tarea o quieras respaldar tu avance.

## 4.  Ver estado
    Si tienes dudas de en qué rama estás o qué archivos has movido:
  - git branch  
  - git status

## 5.  git add . (Prepara todos los archivos)

## 6.  git commit -m "Descripción de lo que hiciste" (Etiqueta el cambio)

## 7.  git push origin rama-vikthor (Sube los cambios a TU rama en GitHub)

## 🛠️ Atajos Rápidos de VS Code
- `Ctrl + Shift + V`: Ver vista previa de este archivo (Markdown).
- `Ctrl + F`: Buscar una palabra dentro del código.
- `` Ctrl + ` ``: Abrir / Cerrar la Terminal integrada.

--------------------------------------------------------------------------------

# 📘 GUÍA MAESTRA DE TRABAJO (GIT & GITHUB)

Esta guía contiene todo lo necesario para configurar tu entorno, trabajar solo o en equipo y resolver emergencias.

---

## 🛠️ GRUPO 1: Configuración Inicial y Cuentas
*Usa esta sección cuando cambies de cuenta de GitHub o configures una PC nueva por primera vez.*

### 👤 1. Identidad (El "Quién soy" para Git)
Antes de guardar cambios, Git debe saber quién eres para firmar tus "fotos" (commits).
1. **Configurar Nombre:** `git config --global user.name "TuNombreDeUsuario"`
2. **Configurar Correo:** `git config --global user.email "tu-correo@ejemplo.com"`
3. **Verificar datos:** `git config --list`

### 👤 2. Cambio Total de Cuenta GitHub (Paso a Paso)
Sigue este orden exacto para evitar que Windows se confunda con la cuenta vieja:

#### A. Cerrar Sesión en VS Code
1. Haz clic en el icono de **Cuentas** (abajo a la izquierda).
2. Haz clic sobre tu nombre de usuario actual y selecciona **Sign Out**.

#### B. Cerrar Sesión en el Navegador
1. Ve a [GitHub.com](https://github.com) y cierra sesión (Sign out).

#### C. Limpiar las "Llaves" en Windows (Evita el Error 403)
1. Busca en Windows: **Administrador de credenciales**.
2. Ve a **Credenciales de Windows**.
3. Busca `git:https://github.com` y dale a **Quitar**.

---

## 🚀 GRUPO 2: Iniciando un Proyecto
*Usa esto para conectar tu código con la nube correctamente.*

### 📂 1. El Camino Profesional (Clonar)
*Úsalo para bajar un proyecto que ya existe en GitHub a una carpeta vacía.*
1. `git clone https://github.com/usuario/proyecto.git`

### 📂 2. Vincular Carpeta Local (Rescate)
*Úsalo si ya tienes archivos en tu PC y quieres subirlos a un repo nuevo.*
1. `git init`
2. `git remote add origin [URL_DE_GITHUB]`
   - **¿Error de nombre?** Corrige con: `git remote set-url origin [URL_CORRECTA]`

---

## ⌨️ GRUPO 3: Flujo de Trabajo Diario
*El ciclo que debes repetir constantemente para no perder progreso.*

### 🎨 1. Diccionario de Colores y Letras
- **U (Untracked):** Archivo nuevo. Dale al signo **+** para agregarlo.
- **M (Modified):** Archivo editado. Listo para preparar y firmar.
- **A (Added):** En sala de espera para ser guardado.
- **! (Rojo):** **CONFLICTO.** Choque de versiones (Ver Grupo 6).

### 🔄 2. El Ciclo de Guardado (Push)
1. **Revisar:** `git status`
2. **Preparar:** `git add .`
3. **Firmar:** `git commit -m "Explicación de lo que hiciste"`
4. **Subir:** `git push`
   - **Error "no upstream"?** Usa: `git push -u origin main`

---

## 👥 GRUPO 4: Sincronización y Equipo
*Reglas para trabajar con otros o en dos computadoras distintas.*

### 📥 1. Regla de Oro: Bajar antes de Empezar
Inicia siempre el día bajando lo que se hizo en otras PC:
- **`git pull`**

### 🌿 2. Manejo de Ramas (Branches)
Crea espacios seguros para no romper el código principal (`main`).
1. **Crear y entrar:** `git checkout -b nombre-de-la-rama`
2. **Ver ramas:** `git branch` (La verde con `*` es la actual).
3. **Volver al centro:** `git checkout main`

---

## 🖥️ GRUPO 5: Dominio de la Terminal
*Navega por tus carpetas sin usar el mouse.*

- `dir`: Ver qué hay en la carpeta actual.
- `cd [Nombre]`: Entrar a carpeta (**Tip:** Escribe 3 letras y pulsa `TAB`).
- `cd ..`: Regresar una carpeta atrás.
- `cls`: Limpiar la terminal.
- `D:` o `C:`: Cambiar de disco duro.

---

## 🚨 GRUPO 6: emergencias y "Rescate"
*Usa esto cuando las letras se pongan rojas o el código se duplique.*

### 🩹 1. Resolver Conflictos (Código Duplicado)
*Si al hacer pull el código sale doble o con marcas verdes/azules:*
1. Abre el archivo con la **!** roja.
2. Selecciona **`Accept Current Change`** (Deja tu código y borra el de internet).
3. **NUNCA** elijas *Accept Both* o el código se pegará dos veces.
4. Guarda, haz `git add .` y `git commit -m "Conflicto resuelto"`.

### 💣 2. Botón de Pánico (Regresar al Pasado)
- **Si no has hecho push:** Flecha curva (**Discard Changes**) en VS Code.
- **Si ya hiciste push y quieres borrarlo:**
  1. `git reset --hard HEAD~1` (Regresa 1 paso atrás).
  2. `git push -f origin main` (Fuerza a GitHub a borrar el error).

### 👻 3. La "Carpeta Gris" (Embedded Repo)
*Si en GitHub la carpeta no abre:*
1. Borra la carpeta `.git` que esté **dentro** de la carpeta rebelde.
2. En la terminal principal: `git rm -f --cached NOMBRE_CARPETA`.
3. `git add .` -> `git commit` -> `git push`.

### 🚩 4. Error `src refspec main does not match any`
- **Causa:** Tu PC dice "master" y GitHub dice "main".
- **Solución:** `git branch -M main`.

### 🛑 Error: [rejected] (fetch first)
**¿Qué significa?** GitHub tiene una versión más reciente que tu PC.
**La forma correcta de resolverlo:**
1. `git pull origin main` (Sincroniza tu PC con la nube).
2. Resolver conflictos si aparecen (Ver Grupo 6).
3. `git push origin main` (Sube tus cambios finales).

**El atajo de emergencia (Fuerza):**
* `git push -f origin main` (Solo si quieres que tu PC mande sobre GitHub).


1. Sincronizar TU rama local con la de la nube:
git pull origin rama-vikthor

2. Resolver conflictos:
Si tocaste las mismas líneas de código, VS Code te pedirá elegir con qué versión quedarte (usa Accept Current Change si tu versión es la buena).

3. Subir los cambios finales:
git push origin rama-vikthor

4. El Atajo de Emergencia (Fuerza en la Rama)
Si sabes que el código de tu laptop es el que vale y no te importa "pisar" lo que haya en la nube de esa rama:
git push -f origin rama-vikthor

## El Camino Rápido (Merge en la Terminal)
Usa esto si quieres hacerlo todo desde VS Code sin entrar a la web.

Cámbiate a la rama principal:
git checkout main

Asegúrate de que main esté al día:
git pull origin main

Trae los cambios de tu rama a main:
git merge rama-vikthor

Sube el resultado final a GitHub:
git push origin main