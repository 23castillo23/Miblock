# 📘 GUÍA MAESTRA Y DEFINITIVA DE GIT & GITHUB — VIKTHOR

## 🎨 GRUPO 1: Diccionario Visual y de Consola
### 1A. Diccionario de VS Code (Letras y colores)
### 1B. Diccionario de Git (Significado de comandos)
### 1C. Navegación Básica en Terminal (Moverse sin mouse)

## 👤 GRUPO 2: Configuración Inicial y Cuentas
### 2A. Configurar tu identidad en Git (El "Quién Soy")
### 2B. Cambio Total de Cuenta GitHub (Evita el Error 403)

## 🚀 GRUPO 3: Iniciar o Conectar un Proyecto
### 3A. Subir un proyecto local a GitHub por primera vez (Repo desde cero)
### 3B. Clonar un proyecto que ya existe (Computadora nueva)
### 3C. El "Rescate" — Vincular carpeta local con GitHub que ya tiene cosas
### 3E. Conectarse a un proyecto por primera vez mediante una rama 🌿 ← NUEVO

## 🔄 GRUPO 4: Flujo de Trabajo Diario
### 4A. Trabajo en la máquina principal (Rama `main`)
### 4B. Trabajo en la laptop (Rama `rama-vikthor`)

## 🔁 GRUPO 5: Sincronización entre 2 PCs (Los "Cajones")
### 5.1 Entendiendo los "Cajones"
### 5.1.1 El diagrama de cómo fluye todo
### 5.1.2 Tabla resumen — el flujo diario completo
### 5.2 Flujo completo: De la PC (`main`) a la Laptop (`rama-vikthor`)
### 5.3 Tabla resumen — el flujo diario completo

## 👨‍👩‍👧‍👦 GRUPO 6: Trabajo en Equipo (Liz, Sergio, Misael)
### 6A. Invitar colaboradores (Lo hace Vikthor)
### 6B. Pasos para el invitado (Configuración inicial)
### 6C. Reglas de oro del equipo
### 6D. Integrar el trabajo a `main` (Merge)

## 🌿 GRUPO 7: Manejo de Ramas (Branches)

## 🚨 GRUPO 8: Catálogo de Errores Críticos y Conflictos
### Error: Conflicto de código (archivos con `!` en rojo)
### Error: `[rejected] — fetch first`
## ⚠️ NO sería el comando correcto SI:
### Error: `no upstream branch` (texto amarillo largo al hacer push)
### Error: `src refspec main does not match any`
### Error: `fatal: remote origin already exists`
### Error: `fatal: not a git repository`
### La "Carpeta Gris" en GitHub (Embedded Repository)

## ⏪ GRUPO 9: Botón de Pánico (Deshacer Cambios)
### Opción `--soft` — No borra tu código
### Opción `--hard` — BORRA tu código
### Diferencia rápida: `--soft` vs `--hard`

## 🔖 GRUPO 10: Notas Técnicas Adicionales
### `git fetch` vs `git pull`
### `master` vs `main`
### ¿Qué es HEAD?
### ¿Qué es `git stash`? (El cajón secreto)

## 📌 Mis Rutas Frecuentes

> **¿Cómo usar esta guía?**
> Usa `Ctrl + F` para buscar la situación en la que estás. Cada sección tiene el caso de uso y para qué sirve cada comando explicado paso a paso. No adivines — todo lo que necesitas (trabajo solo, en equipo, o resolver errores) está aquí.

---

## 🛠️ Atajos Rápidos de VS Code

| Atajo | Para qué sirve |
|:---|:---|
| `Ctrl + Shift + V` | Ver vista previa de este archivo Markdown para leerlo con formato |
| `Ctrl + F` | Buscar una palabra dentro del código |
| `` Ctrl + ` `` | Abrir / Cerrar la Terminal integrada |

---

## 🎨 GRUPO 1: Diccionario Visual y de Consola

### 1A. Diccionario de VS Code (Letras y colores)

*¿Qué significan las letras al lado de tus archivos?*

| Letra / Color | Significado | Qué hacer |
|:---|:---|:---|
| **U** (Untracked) | Archivo nuevo que Git no conoce todavía | Dale al **+** para que Git empiece a rastrearlo. Si nunca le das al más, jamás subirá a GitHub |
| **M** (Modified) | Archivo que ya conoce Git pero que editaste. Aparece incluso si solo agregas un espacio | Listo para `add` y `commit` |
| **A** (Added) | Paso intermedio — el archivo está en la "sala de espera", listo para el commit | Solo falta el `commit` |
| **Gris sin letra** | Ignorado por `.gitignore` — Git lo ve pero lo ignora completamente | No subirá a GitHub |
| **! Rojo** | Conflicto: dos versiones del mismo archivo chocaron | Ver Grupo 8 |

> 💡 Si ves una **M** y no recuerdas haber cambiado nada, haz clic en la **flecha curva (Discard Changes)** para dejar el archivo exactamente como estaba.

---

### 1B. Diccionario de Git (Significado de comandos)

| Comando              | Qué hace                                  |
|:---------------------|:------------------------------------------|
| `git clone`     | Descarga una copia exacta de todo tu proyecto desde GitHub a tu PC  |
| `git config`    | Le avisa a Git quién eres para que sepa quién guardó la información |
| `git status`    | Muestra en rojo qué archivos has modificado y aún no has guardado |
| `git add .`     | El punto significa "TODO". Prepara todos tus cambios para ser guardados |
| `git commit -m` | Le pone una etiqueta descriptiva al cambio y lo guarda en tu historial local |
| `git push`      | Envía tus cambios de tu PC hacia el servidor en internet |
| `git pull`      | Trae las actualizaciones que subiste desde otra PC (o un compañero) |
| `git branch`    | Muestra todas las ramas. La que tiene `*` es donde estás |
| `git checkout -b` | Crea una rama nueva y te mueve a ella para probar cosas sin arruinar `main` |

---

### 1C. Navegación Básica en Terminal (Moverse sin mouse)

| Comando | Función | Ejemplo |
|:------------------|:-------------------------------|:----------|
| `dir` | Muestra todo lo que hay en la carpeta actual | `dir` |
| `cd [nombre]` | Entra a una carpeta específica | `cd Miblock` |
| `cd ..` | Regresa un nivel hacia la carpeta anterior | `cd ..` |
| `mkdir [nombre]` | Crea una carpeta nueva | `mkdir Respaldo` |
| `ren [viejo] [nuevo]` | Cambia el nombre de un archivo o carpeta | `ren data.js base.js` |
| `cls` / `clear` | Borra todo el texto de la pantalla | `cls` |
| `D:` o `C:` | Cambia de disco duro | `D:` |

> 💡 **Tip de Pro:** Escribe las primeras 3 letras de una carpeta y presiona `TAB`. ¡La terminal completará el nombre automáticamente!

---

### 1D. El ciclo de guardado (Cómo funciona el `-u`)

La bandera `-u` (`--set-upstream`) le enseña a Git el camino **una sola vez** por rama.

| Situación | Comando necesario |
|:---|:---|
| Sin haber usado `-u` | `git push origin main` (hay que escribir todo) |
| La primera vez, usas `-u` | `git push -u origin main` |
| Después de usar `-u` | Solo `git push` |

---


## 👤 GRUPO 2: Configuración Inicial y Cuentas

*Usa esta sección cuando configuras Git por primera vez en una PC nueva o cuando cambias de cuenta de GitHub.*

### 2A. Configurar tu identidad en Git (El "Quién Soy")

```
git config --global user.name "TuNombreDeUsuario"
```
> Le dice a Git cómo llamarte en cada commit que hagas.

```
git config --global user.email "tu-correo@ejemplo.com"
```
> Debe ser el mismo correo que usas en GitHub.

```
git config --list
```
> Muestra toda tu configuración actual. Úsalo para verificar que quedó bien.

---

### 2B. Cambio Total de Cuenta GitHub (Evita el Error 403)

Sigue este orden **exacto** para evitar que Windows se confunda con la cuenta vieja.

#### A. Cerrar Sesión en VS Code
1. Haz clic en el icono de **Cuentas** (la silueta de persona abajo a la izquierda).
2. Haz clic sobre tu nombre de usuario actual.
3. Selecciona **Sign Out** (Cerrar sesión).

#### B. Cerrar Sesión en el Navegador (¡Muy importante!)
*Si no haces esto, VS Code volverá a entrar a la cuenta vieja automáticamente.*
1. Ve a [GitHub.com](https://github.com) en tu navegador (Chrome/Edge).
2. Clic en tu foto (arriba a la derecha) y dale a **Sign out**.

#### C. Limpiar las "Llaves" en Windows (El paso secreto)
Haz esto para evitar el error 403:
1. En el buscador de Windows escribe: Administrador de credenciales.
2. Ve a la pestaña Credenciales de Windows.
3. Busca git:https://github.com, despliégalo y dale a Quitar.

#### D. Iniciar Sesión con la Nueva Cuenta
1. En VS Code, clic otra vez en el icono de la persona (abajo a la izquierda).
2. Selecciona **Sign in with GitHub**.
3. Haz clic en el botón azul **Sign in with your browser**.
4. Pon los datos de tu nueva cuenta en la web y dale al botón verde **Authorize**.

#### E. Configurar la Identidad en la Terminal
Abre la terminal (``Ctrl + ` ``) y pega estos dos comandos con tus nuevos datos:
- `git config --global user.name "Tu Nuevo Nombre"`
- `git config --global user.email "tu-nuevo-correo@ejemplo.com"`
- `git remote remove origin` (Para borrar el puente viejo).
- `git remote add origin https://github.com/USUARIO/REPOSITORIO.git` (Para crear el puente nuevo).
- Ejempro: `git remote add origin https://github.com/23castillo23/Miblock.git`

---

## 🚀 GRUPO 3: ¿Cómo subir mi proyecto a GitHub por primera vez?
### 3A. Subir un proyecto local a GitHub por primera vez (Repo desde cero)
Cómo subir un proyecto local a GitHub
1. Preparación en GitHub
- Inicia sesión en tu cuenta de GitHub.
- Haz clic en el botón "+" en la esquina superior derecha y selecciona New repository.
- Ponle un nombre a tu repositorio (ej. mi-proyecto).
- Déjalo como Public o Private según prefieras.
## IMPORTANTE: No selecciones ninguna de las 💡 opciones de "Initialize this repository with..." (ni ⚠️ README, ni .gitignore, ni licencia) si ya tienes archivos en tu computadora. Queremos un repositorio vacío.
- Haz clic en Create repository.

2. Comandos en la Terminal (Local)
Abre la terminal en VS Code y navega hasta la carpeta de tu proyecto. Luego, ejecuta los siguientes comandos:

Inicializar el repositorio:
> git init

## Esto crea una carpeta oculta .git que empezará a rastrear tus cambios.

Preparar todos los archivos:
> git add .
## El punto . indica que quieres agregar todos los archivos de la carpeta.

Crear el primer "commit" (punto de guardado con descripción):
> git commit -m "Primer commit: Subida inicial del proyecto"

Nombrar la rama principal:
> git branch -M main
- Con -m (minúscula): Git es precavido. Si ya existe una rama que se llame main, te dirá: "Oye, no puedo renombrar esto a 'main' porque ya tengo una que se llama así".
- Con -M (mayúscula): Git no pregunta. Borra cualquier rastro del nombre anterior y le pone main a la fuerza.

Conectar con el servidor de GitHub:
> git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
(Pega aquí la URL que copiaste en el paso 1).

Empujar los archivos a la nube:
> git push -u origin main
- ¿Cuándo usarlo? Solo la primera vez que subes el proyecto.
- ¿Qué hace? Sube todo y "conecta" tu PC con GitHub para que en el futuro solo uses git push.

## 💡 Tip de importancia
Si al hacer el último paso te pide usuario y contraseña, recuerda que GitHub ya no usa tu contraseña normal en la terminal. Debes usar un Personal Access Token (PAT) o configurar el GitHub Desktop para que lo haga por ti.

## ⚠️ Nota sobre archivos pesados
Si tienes carpetas como node_modules o archivos de configuración local (como .env), asegúrate de crear un archivo .gitignore ANTES del paso de git add . para evitar subir basura al repositorio.

## nombre del proyecto
El nombre en tu PC (Carpeta Local) y El nombre en GitHub (Repositorio Remoto)
## 💡 ¿Qué pasa si son diferentes?
Nada técnico. Git funcionará perfectamente.
- Tu carpeta local se puede llamar: proyecto_clase_lunes
- Tu repo en GitHub se puede llamar: sistema-inventario-v1
Cuando hagas el comando git remote add origin https://github.com/usuario/sistema-inventario-v1.git, Git creará el puente entre ambos sin importar que los nombres no coincidan.

## ✅ Recomendación de "Buena Práctica"
Aunque no sea obligatorio, lo ideal es que sean iguales o muy parecidos por estas razones:
- Evitas confusiones: Si tienes 20 proyectos, es más fácil saber cuál carpeta de tu PC corresponde a cuál repositorio en la nube.
- Orden profesional: Te ayuda a mantener una estructura limpia si en el futuro trabajas en equipo.

## Un tip extra: En GitHub, se acostumbra usar minúsculas y guiones (ejemplo: mi-proyecto-web), mientras que en tu PC puedes usar el formato que más te guste.

## ⚠️ cuando creaste el repositorio en la web de GitHub, marcaste la casilla de "Add a README file", "Add .gitignore" o una licencia. Ahora GitHub tiene un archivo (el README) que tú no tienes en tu computadora, y por eso te dice: rejected (fetch first).

Para solucionarlo y que tus archivos suban, tienes dos opciones:

## Opción A: La más rápida (Forzar la subida) 🚀
Como es tu primera subida y quieres que lo de tu PC mande, puedes obligar a GitHub a aceptar tus archivos:

Ejecuta este comando:
- git push -u origin main --force
### ⚠️ Nota: Esto borrará cualquier archivo que se haya creado automáticamente en GitHub (como el README vacío) y lo reemplazará por tus archivos reales.

## Opción B: La forma "correcta" (Traer y luego subir) 📥
Si quieres conservar lo que hay en GitHub (el README) y juntarlo con lo tuyo:

Trae los cambios de GitHub:
- git pull origin main --rebase
Ahora sí, sube tus archivos:
- git push -u origin main

### 3B. Clonar un proyecto que ya existe (Computadora nueva)

> ❗ **NOTA ANTES DE CLONAR:** Fíjate en la ruta que aparece en la terminal (ej: `PS C:\Users\Nombre>`). Si clonas ahí, el proyecto se guardará en tu carpeta de usuario. Usa `cd` para moverte a la carpeta donde realmente lo quieres guardar primero.

```
git clone https://github.com/23castillo23/Miblock.git
```
> Descarga el proyecto completo a tu PC incluyendo todo el historial.

```
cd Miblock
```
> Entra a la carpeta descargada. Siempre debes estar dentro antes de usar cualquier comando Git.

**Orden crítico (no saltarse):**
1. **Primero:** Abre la carpeta en VS Code (*Archivo → Abrir carpeta*).
2. **Segundo:** Abre la terminal integrada (`` Ctrl + ` ``).
3. **Tercero (opcional):** Crea tu rama si no vas a trabajar directo en `main`:
```
git checkout -b rama-vikthor
```
4. ¿Cómo saber en qué rama estás?
## Nunca debes adivinar en qué rama estás. Tienes dos formas infalibles de saberlo:

- En Visual Studio Code: Mira en la esquina inferior izquierda de la pantalla. Verás un icono de una ramita seguido de un nombre. Si dice main, estás en la principal; si dice el nombre que inventaste, estás en tu rama.
- En la Terminal: Escribe el comando `git branch`.
- Te saldrá una lista de todas las ramas que existen en tu PC.
- La que tenga un asterisco (*) y esté en color verde es la rama donde estás parado ahora mismo.
---

### 3C. El "Rescate" — Vincular carpeta local con GitHub que ya tiene cosas

*¿Cuándo usarlo? Ya tienes archivos locales pero el repo de GitHub ya tiene un README u otros commits diferentes.*

```
git init
```
```
git remote add origin https://github.com/USUARIO/REPO.git
```
> Si te equivocas de URL, corrígela con: `git remote set-url origin URL_CORRECTA`

```
git add .
git commit -m "Preparando unión"
```
```
git pull origin main --allow-unrelated-histories
```
> Une los dos historiales aunque sean completamente distintos. Sin este flag, Git se niega.

Si aparece `!` rojo, resuelve los conflictos (elige tu versión) y luego:
```
git branch -M main
git push -u origin main
```
> Si falla el push, fuerza con: `git push -f origin main`

---

### 3D. Ya tengo una rama en la laptop pero el proyecto no está conectado con GitHub
*¿Cuándo usarlo? Tienes archivos en la laptop (por ejemplo, en `rama-viktor`) que creaste o editaste ahí, pero esa carpeta nunca fue conectada con GitHub — no le hiciste `clone` ni `git init` + `remote add`. El proyecto SÍ existe en GitHub (lo subiste desde la PC), pero la laptop no tiene el "puente" hacia él.*

---

#### Situación A — La carpeta de la laptop TODAVÍA NO tiene Git activado
*Sabes que no está conectada si al escribir `git status` te sale: `fatal: not a git repository`.*

**Paso 1 — Activa Git en esa carpeta:**
```
git init
```
> Activa Git. Sin esto, nada más funciona.

**Paso 2 — Crea el puente hacia tu repositorio de GitHub:**
```
git remote add origin https://github.com/23castillo23/Miblock.git
```
> Conecta tu carpeta con el repositorio que ya tienes en GitHub. La URL está en el botón verde **Code** de tu repositorio.

**Paso 3 — Verifica que el puente quedó bien:**
```
git remote -v
```
> Debes ver tu URL en dos líneas (fetch y push). Si no aparece o es incorrecta, usa `git remote set-url origin URL_CORRECTA`.

**Paso 4 — Baja el historial completo de GitHub:**
```
git fetch origin
```
> Descarga el mapa de todas las ramas que existen en GitHub (incluyendo `main` y `rama-viktor` si ya la subiste antes), sin tocar tus archivos locales.

**Paso 5 — Enlaza tu rama local con la rama de GitHub:**
```
git branch --set-upstream-to=origin/rama-viktor rama-viktor
```
> Le dice a Git: "mi `rama-viktor` local es la misma que `rama-viktor` en GitHub". Así ya puedes hacer `git pull` y `git push` sin escribir el nombre de la rama cada vez.

> ⚠️ Si `rama-viktor` aún NO existe en GitHub (nunca la subiste desde ninguna PC), sáltate el paso 5 y ve directo al paso 6.

**Paso 6 — Trae los cambios que haya en GitHub hacia tu laptop:**
```
git pull origin rama-viktor
```
> Si la rama ya existía en GitHub, baja lo que haya ahí y lo mezcla con tus archivos locales. Si hay conflictos, VS Code te marcará los archivos con `!` en rojo — ver Grupo 8.

**Paso 7 — Sube tu trabajo de la laptop a GitHub:**
```
git add .
git commit -m "Trabajo de la laptop: descripción de lo que hiciste"
git push -u origin rama-viktor
```
> Sube tu `rama-viktor` a GitHub. La `-u` crea la conexión permanente para que después solo necesites `git push`.

---

#### Situación B — La carpeta de la laptop YA tiene Git pero sin conexión a GitHub
*Sabes que es este caso si `git status` funciona bien pero `git push` da error: `fatal: 'origin' does not appear to be a git repository`.*

**Paso 1 — Verifica que no haya ningún puente:**
```
git remote -v
```
> Si no muestra nada (pantalla en blanco), confirma que no hay conexión. Si sí muestra algo pero con URL incorrecta, usa `git remote set-url origin URL_CORRECTA` y sáltate el paso 2.

**Paso 2 — Crea el puente:**
```
git remote add origin https://github.com/23castillo23/Miblock.git
```
> Conecta tu carpeta con el repositorio de GitHub.

**Paso 3 — Baja el historial de GitHub:**
```
git fetch origin
```
> Actualiza el mapa de ramas remotas en tu laptop.

**Paso 4 — Sube tu rama al repositorio:**
```
git push -u origin rama-viktor
```
> Sube `rama-viktor` a GitHub y crea la conexión permanente. Si la rama ya existía en GitHub con commits diferentes, puede pedirte que primero hagas `git pull origin rama-viktor --rebase` para sincronizar.

---

#### Tabla resumen — ¿cuál es mi caso?

| Síntoma | Situación | Primer paso |
|:---|:---|:---|
| `git status` → `fatal: not a git repository` | Sin Git activado | `git init` → `git remote add origin URL` |
| `git status` funciona pero `git push` falla con error de `origin` | Git activado pero sin puente | `git remote add origin URL` |
| `git push` falla con `rejected` | Hay commits distintos en GitHub | `git pull origin rama-viktor --rebase` → `git push` |

---


### 3E. Conectarse a un proyecto por primera vez mediante una rama 🌿
*¿Cuándo usarlo? Alguien te comparte un repositorio de GitHub y necesitas entrar al proyecto, crear tu propia rama y empezar a trabajar. Es tu punto de partida absoluto.*

---

#### Paso 1 — Configura tu identidad (solo si es una PC nueva o nunca lo hiciste)
```
git config --global user.name "TuNombreDeUsuario"
git config --global user.email "tu-correo@ejemplo.com"
```
> Esto le dice a Git quién eres. Usa el mismo correo que tienes en GitHub. Si ya lo configuraste antes en esta PC, salta al Paso 2.

---

#### Paso 2 — Clona el proyecto a tu PC
```
git clone https://github.com/USUARIO/NOMBRE-DEL-REPO.git
```
> Descarga el proyecto completo desde GitHub a tu computadora. La URL la encuentras en el botón verde **Code** dentro del repositorio en GitHub.

⚠️ Antes de ejecutar este comando, fíjate en qué carpeta estás parado en la terminal. Ahí se va a guardar el proyecto. Usa `cd` para moverte al lugar correcto primero.

---

#### Paso 3 — Entra a la carpeta del proyecto
```
cd NOMBRE-DEL-REPO
```
> Siempre debes estar **dentro** de la carpeta del proyecto antes de usar cualquier comando Git.

---

#### Paso 4 — Verifica en qué rama estás
```
git branch
```
> Verás `* main` (o `* master`). Eso significa que estás en la rama principal. **No trabajes aquí directamente.**

---

#### Paso 5 — Crea tu propia rama y muévete a ella
```
git checkout -b rama-tunombre
```
> Reemplaza `tunombre` con tu nombre o el nombre que acuerden en equipo (ej: `rama-liz`, `rama-sergio`). El `-b` la crea y te mueve a ella en un solo paso.

Para confirmar que ya estás en tu nueva rama:
```
git branch
```
> Ahora debes ver el asterisco `*` al lado de tu rama, no de `main`.

---

#### Paso 6 — Sube tu rama a GitHub por primera vez
```
git push -u origin rama-tunombre
```
> Esto publica tu rama en GitHub para que todos en el equipo sepan que existe. El `-u` crea la conexión permanente — después de esto, solo necesitas escribir `git push` cada vez que subas cambios.

---

#### ✅ Resumen de los 6 pasos

| Paso | Comando | Para qué sirve |
|:---|:---|:---|
| 1 | `git config --global user.name / user.email` | Decirle a Git quién eres |
| 2 | `git clone URL` | Descargar el proyecto a tu PC |
| 3 | `cd NOMBRE-DEL-REPO` | Entrar a la carpeta del proyecto |
| 4 | `git branch` | Verificar en qué rama estás |
| 5 | `git checkout -b rama-tunombre` | Crear y entrar a tu rama personal |
| 6 | `git push -u origin rama-tunombre` | Publicar tu rama en GitHub |

> 💡 **Después de esto**, tu flujo diario será el del **Grupo 4B**: bajar cambios con `git pull`, trabajar, y subir con `git add .` → `git commit -m "..."` → `git push`.

---

## 🔄 GRUPO 4: Flujo de Trabajo Diario
*¿Cuándo usarlo? Todos los días, cada vez que terminas de trabajar y quieres guardar tu avance en GitHub.*

### 4A. Trabajo en la máquina principal (Rama `main`)

**Al iniciar — antes de tocar cualquier archivo:**
```
git pull origin main
```
> Baja todos los cambios nuevos de GitHub. Si no lo haces, puedes trabajar sobre una versión vieja.

**Al guardar — cuando terminas de trabajar:**
```
git status
```
> Muestra qué archivos modificaste. Los verás en rojo si aún no los has preparado. Úsalo para revisar que no se te escape nada antes de guardar.

```
git add .
```
> Prepara todos los archivos modificados para el commit. El punto significa "todos". Los verás cambiar a verde en VS Code.
```
git commit -m "Descripción de lo que hiciste"
```
> Guarda una "foto" de tu trabajo con el mensaje que escribas. Este mensaje es tu historial — escribe algo que tenga sentido, como "Agregué el menú de navegación".
```
git push origin main
```
> Sube tu commit a GitHub. Después de haber usado `-u` al menos una vez, puedes escribir solo `git push`.
---

### 4B. Trabajo en la laptop (Rama `rama-vikthor`)

**Al iniciar — antes de tocar cualquier archivo:**
```
git pull origin main
```
> Baja los cambios nuevos que haya en la rama principal `main`. Aunque trabajes en tu propia rama, necesitas estar al tanto de lo que avanzó el proyecto general. Si no lo haces, tu rama se va alejando de `main` y los conflictos se vuelven más difíciles de resolver.
```
git pull origin rama-vikthor
```
> Sincroniza tu rama personal con lo que haya en GitHub. Si la última vez trabajaste desde otra PC y subiste cambios a `rama-vikthor`, este comando los trae. Sin este paso estarías trabajando sobre una versión vieja de tu propia rama y al hacer push habría conflicto.
```
git branch
```
> Muestra en qué rama estás parado ahora mismo. La rama activa aparece con `*` al lado. No descarga nada — es solo una verificación para asegurarte de que no vas a trabajar accidentalmente en `main` en vez de en `rama-vikthor`.

**Al guardar — cuando terminas de trabajar:**
```
git status
```
> Muestra qué archivos modificaste desde el último commit. En rojo = sin preparar, en verde = listos para commit.
```
git add .
```
> Prepara todos los cambios para ser guardados en el commit.
```
git commit -m "Descripción de lo que hiciste"
```
> Guarda una "foto" de tu avance con tu mensaje descriptivo.
```
git push origin rama-vikthor
```
> Sube tus cambios a TU rama en GitHub, no a `main`. Así el código principal no se ve afectado hasta que decidas hacer un merge.


## 🔁 GRUPO 5: Sincronización entre 2 PCs (Los "Cajones")

*La pregunta clásica: "Subí cambios a `main` desde la PC, llegué a la laptop (`rama-vikthor`), ¿por qué no veo mis cambios?"*

### 5.1 Entendiendo los "Cajones"

GitHub no mueve cosas entre ramas solo. Nunca.

```
GitHub
  │
  ├── [cajón main]          ← solo guarda lo que subes desde la PC
  └── [cajón rama-vikthor]  ← solo guarda lo que subes desde la laptop
```

**Tú** eres quien decide cuándo mezclar los cajones. Eso se hace con `merge` o `pull origin [rama]`.

---

### El diagrama de cómo fluye todo

```
PC de escritorio (main)         GitHub              Laptop (rama-vikthor)
        │                          │                         │
        │─── push origin main ──►  [main]                    │
        │                          │                         │
        │                          │  ◄── pull origin main ──│
        │                          │                         │
        │                    [rama-vikthor]                  │
        │                          │  ◄── push origin ────── │
        │                          │       rama-vikthor      │
        │                          │                         │
        │─── merge rama-vikthor ◄──│                         │
        │─── push origin main ──►  │                         │
```

Ninguna flecha va directo de PC a laptop. Todo pasa por GitHub. Y las ramas no se mezclan solas — tú das la orden con `merge` o `pull origin [nombre-rama]`.

---

### Tabla resumen — el flujo diario completo

| Situación | Qué hacer |
|:---|:---|
| Terminar en la PC, guardar en GitHub | `git push origin main` |
| Llegar a la laptop y ver los cambios de la PC | `git pull origin main` (estando en `rama-vikthor`) |
| Terminar en la laptop, guardar en GitHub | `git push origin rama-vikthor` |
| Llegar a la PC y ver los cambios de la laptop | `git merge rama-vikthor` → `git push origin main` |
| Ver en qué rama estás | `git branch` |

---
### ¿Qué significa `git merge rama-vikthor` → `git push origin main`?

Son **dos comandos que se ejecutan seguidos** desde la PC, estando en la rama `main`.

**Paso 1 — `git merge rama-vikthor`**  
Trae todos los cambios que guardaste en la laptop (en `rama-vikthor`) y los fusiona
dentro de `main`. Después de este comando, tu rama `main` en la PC tiene el trabajo
de ambos dispositivos.

```bash
Antes del merge:
main          →  A - B - C
rama-vikthor  →  A - B - C - D - E  ← cambios de la laptop
Después del merge:
main          →  A - B - C - D - E  ✅
```
---

**Paso 2 — `git push origin main`**  
Una vez fusionado, subes `main` a GitHub para que quede respaldado en la nube.

**Secuencia completa desde la PC:**
```bash
git checkout main          # asegúrate de estar en main
git merge rama-vikthor     # fusiona los cambios de la laptop
git push origin main       # sube el resultado a GitHub
```
---

### 5.2 Flujo completo: De la PC (`main`) a la Laptop (`rama-vikthor`)

**En la PC (al terminar):**
```
git add .
git commit -m "lo que hiciste"
git push origin main
```

**En la Laptop (al llegar):**
```
git pull origin rama-vikthor
```
> Baja tu propio avance de laptop.

```
git pull origin main
```
> ⬅️ **ESTE ES EL PASO CLAVE.** Abre el cajón `main` y trae lo que hiciste en la PC. Sin este paso, nunca verás los cambios de la PC en la laptop.

```
git push origin rama-vikthor
```
> Sube `rama-vikthor` ya actualizada.

---

### 5.2 Flujo completo: De la Laptop a la PC

**En la Laptop (al terminar):**
```
git add .
git commit -m "lo que hiciste"
git push origin rama-vikthor
```

**En la PC (al llegar):**
```
git checkout main
```
```
git pull origin main
```
```
git merge rama-vikthor
```
> ⬅️ **ESTE ES EL PASO CLAVE.** Copia lo que hiciste en la laptop hacia `main` en tu PC.

```
git push origin main
```

> 🔑 **Regla de oro:** NUNCA empieces a trabajar en una computadora sin antes bajar lo que hiciste en la otra.

---

### 5.3 Tabla resumen — el flujo diario completo

| Situación | Qué hacer |
|:---|:---|
| Terminar en la PC, guardar en GitHub | `git push origin main` |
| Llegar a la laptop y ver los cambios de la PC | `git pull origin main` (estando en `rama-vikthor`) |
| Terminar en la laptop, guardar en GitHub | `git push origin rama-vikthor` |
| Llegar a la PC y ver los cambios de la laptop | `git merge rama-vikthor` → `git push origin main` |
| Ver en qué rama estás | `git branch` |

---

## 👨‍👩‍👧‍👦 GRUPO 6: Trabajo en Equipo (Liz, Sergio, Misael)

*¿Cuándo usarlo? Son 4 personas en el proyecto. Necesitan organizarse para no pisarse el trabajo ni romper el código principal.*

---

### 6A Primero: cómo se ve el proyecto con el equipo completo

```
GitHub
  │
  ├── main              ← el código oficial, siempre funciona
  ├── rama-vikthor      ← Vikthor (tú, desde la laptop)
  ├── rama-liz          ← Liz
  ├── rama-sergio       ← Sergio
  └── rama-misael       ← Misael
```

**La regla más importante del equipo:** nadie trabaja directo en `main`. Cada quien trabaja en su rama y solo tú (como dueño del repositorio) decides cuándo y qué entra a `main` a través de un merge o Pull Request.

---

### PASO 1 — Tú invitas a los tres al repositorio (desde GitHub)

1. Ve a tu repositorio en GitHub → **Settings** → **Collaborators**.
2. Clic en **Add people** → escribe el usuario de GitHub de cada uno:
   - Liz
   - Sergio
   - Misael
3. Cada uno recibirá un correo. **Deben aceptar la invitación** antes de poder hacer push. Hasta que no acepten, cualquier intento de subir código será rechazado.

---

### PASO 2 — Cada compañero configura su PC (solo una vez)

Cada uno hace esto en su propia computadora:

```
git config --global user.name "Su nombre"
git config --global user.email "su-correo@ejemplo.com"
```
> Configura la identidad con la que firmarán sus commits.

```
git clone https://github.com/23castillo23/Miblock.git
```
> Descarga el proyecto completo a su PC.

```
cd Miblock
```
> Entra a la carpeta descargada.

Luego cada quien crea **su propia rama**:

**Liz:**
```
git checkout -b rama-liz
git push -u origin rama-liz
```

**Sergio:**
```
git checkout -b rama-sergio
git push -u origin rama-sergio
```

**Misael:**
```
git checkout -b rama-misael
git push -u origin rama-misael
```

> ✅ Con esto ya cada quien tiene su espacio separado. Nadie puede romper el código del otro ni de `main`.

---

### PASO 3 — Flujo diario de cada compañero

Cada integrante repite esto todos los días:

**Al empezar (muy importante):**
```
git pull origin main
```
> Baja los cambios nuevos que haya en `main`. Así su rama no se va quedando muy atrás del proyecto general.

```
git pull origin rama-liz
```
> (Cada quien pone su propia rama aquí.) Baja los cambios de su propia rama por si trabajó desde otra PC.

**Al terminar:**
```
git add .
git commit -m "Lo que hice hoy"
git push origin rama-liz
```
> (Cada quien sube a su rama, no a `main`.)

---

### PASO 4 — Tú revisas el trabajo y lo integras a `main` (el merge)

Cuando un compañero avisa que terminó una parte y quiere que entre al código oficial, tú como encargado de `main` haces el merge. Tienes dos formas:

---

**Opción A — Merge desde la terminal (tú en tu PC):**

```
git checkout main
```
> Te mueves a `main`.
```
git pull origin main
```
> Aseguras que tu `main` esté al día antes de mezclar.
```
git merge rama-liz
```
> Integras el trabajo de Liz a `main`. Cambia el nombre según quien sea.
```
git push origin main
```
> Subes el resultado a GitHub. Ahora `main` tiene el trabajo de Liz.

---

**Opción B — Pull Request en GitHub (recomendado para equipos):**

Un Pull Request (PR) es la forma "oficial" de pedir que tu rama entre a `main`. Tiene ventajas: puedes ver exactamente qué cambios se van a mezclar, dejar comentarios, y aprobar o rechazar antes de que entre el código.

1. El compañero va a GitHub → su repositorio → clic en **"Compare & pull request"** (aparece automáticamente cuando sube su rama).
2. Escribe un título y descripción de lo que hizo → clic en **"Create pull request"**.
3. **Tú** recibes la notificación, revisas los cambios, y si todo está bien → clic en **"Merge pull request"**.
4. `main` queda actualizado con ese trabajo. ✅

> 💡 El Pull Request es mejor que el merge directo porque te da la oportunidad de revisar el código antes de que entre a `main`. Si algo está mal, puedes pedir correcciones sin tocar `main`.

---

### PASO 5 — Después del merge, todos actualizan su rama

Cuando `main` recibe cambios nuevos (por un merge de cualquier rama), los demás deben bajar esos cambios a sus ramas para no quedarse atrás:

Cada compañero hace esto en su rama:
```
git pull origin main
```
> Trae los cambios nuevos de `main` a su rama. Así todos trabajan sobre la versión más reciente del proyecto.

---

### Resumen visual del ciclo de trabajo en equipo

```
 Liz trabaja en rama-liz     →  sube a GitHub (rama-liz)
 Sergio trabaja en rama-sergio → sube a GitHub (rama-sergio)
 Misael trabaja en rama-misael → sube a GitHub (rama-misael)
 Vikthor trabaja en main/rama-vikthor

        ↓  cuando alguien termina una parte  ↓

 Vikthor revisa → hace merge → entra a main en GitHub

        ↓  después del merge  ↓

 Todos hacen: git pull origin main
 (para tener la versión más reciente en su rama)
```

---

### Reglas de oro para el equipo

| Regla | Por qué |
|:---|:---|
| Nunca trabajar directo en `main` | Si algo falla, rompe el código de todos |
| Siempre hacer `git pull origin main` al empezar | Para no trabajar sobre una versión vieja |
| Commits con mensajes descriptivos | Para que todos entiendan qué cambió |
| Avisar cuando terminas algo | Para que Vikthor pueda hacer el merge a tiempo |
| Resolver conflictos antes de subir | No subas código con `!` en rojo |

---

### 6B ¿Qué pasa si dos personas editaron el mismo archivo?

Git lo detecta y marca el archivo con `!` en rojo (conflicto). Quien haga el merge tiene que resolver cuál versión queda. Ver **Grupo 8 — Conflictos** para resolverlos paso a paso.

> 💡 Para evitar conflictos frecuentes: que cada quien trabaje en archivos o secciones distintas del proyecto. Si Liz trabaja en el menú, Sergio en el login y Misael en la base de datos, raramente van a chocar.

---

## 👥 GRUPO 7: Cómo funciona el flujo cuando son 3 integrantes más — con el concepto de cajones

*Ahora que entiendes que las ramas son cajones separados, esto es cómo se ve cuando trabajan en equipo.*

---

### 7A Cómo se ve GitHub con todo el equipo

```
GitHub
  │
  ├── [cajón main]           ← el código oficial, solo Vikthor mete cosas aquí
  ├── [cajón rama-vikthor]   ← tu trabajo desde la laptop
  ├── [cajón rama-liz]       ← trabajo de Liz
  ├── [cajón rama-sergio]    ← trabajo de Sergio
  └── [cajón rama-misael]    ← trabajo de Misael
```

Cada quien tiene su cajón. Nadie puede meter cosas al cajón de otro sin que tú (el dueño del repo) lo apruebe. **Nadie toca `main` directamente.**

---

### 7B La pregunta clave: ¿cómo llega el trabajo de un compañero a `main`?

El camino siempre es el mismo, sin importar quién sea:

```
Compañero trabaja en su rama
        ↓
Sube su rama a GitHub  (git push origin rama-liz)
        ↓
Tú bajas esa rama y la unes a main  (git merge rama-liz)
        ↓
Subes main actualizado a GitHub  (git push origin main)
        ↓
Todos bajan main para tener lo nuevo  (git pull origin main)
```

---

### 7C ¿Y cómo saben los demás que `main` ya tiene cosas nuevas?

No lo saben automáticamente. **Tú les avisas** (por WhatsApp, Slack, lo que usen) que ya hiciste un merge. Cuando reciban ese aviso, cada quien hace:

```
git pull origin main
```

Eso trae el trabajo nuevo de `main` hacia su propia rama. Si no lo hacen, van a trabajar sobre una versión vieja y cuando intenten subir, puede haber conflictos.

---

### 7D Flujo diario de cada compañero (Liz, Sergio, Misael)

**Al empezar a trabajar:**
```
git pull origin main
```
> Baja lo más nuevo de `main` hacia su rama. Así trabajan siempre sobre la versión más reciente.

```
git pull origin rama-liz
```
> (Cada quien pone su nombre.) Baja los cambios de su propia rama por si ayer trabajó desde otra computadora.

**Al terminar:**
```
git add .
git commit -m "descripción de lo que hice"
git push origin rama-liz
```
> Sube su avance a su cajón en GitHub. Avisa a Vikthor que hay algo listo para revisar.

---

### 7E Tu flujo como encargado de `main` (Vikthor)

Cuando un compañero avisa que terminó algo y quiere que entre a `main`:

```
git checkout main
git pull origin main
```
> Te aseguras de estar en `main` y tener la versión más reciente.

```
git merge rama-liz
```
> Unes el trabajo de Liz a `main`. Si hay conflictos, VS Code te marca los archivos con `!` en rojo — ver Grupo 8.

```
git push origin main
```
> Subes `main` actualizado a GitHub.

Avisas al equipo que `main` tiene cosas nuevas. Todos hacen `git pull origin main`.

---

### 7F Lo que NUNCA debe pasar en equipo

| ❌ Error común | ✅ Lo correcto |
|:---|:---|
| Trabajar directo en `main` | Cada quien en su propia rama |
| No hacer `pull` al empezar | Siempre bajar `main` antes de tocar código |
| Subir sin avisar | Comunicar cuándo algo está listo para merge |
| Hacer merge sin revisar | Revisar qué cambió antes de unir a `main` |

> 💡 La regla de oro: `main` es el código que siempre funciona. Nada entra a `main` sin que alguien lo haya revisado primero.

---

## 🌿 GRUPO 8: Manejo de Ramas (Branches)

| Acción | Comando |
|:---|:---|
| Crear rama y entrar a ella | `git checkout -b nombre-rama` |
| Ver todas mis ramas | `git branch` (la del `*` es la actual) |
| Ver ramas de GitHub y PC | `git fetch origin` + `git branch -a` |
| Volver a la rama principal | `git checkout main` |
| Borrar una rama local | `git branch -d nombre-rama` |

**¿Cómo saber en qué rama estás? Nunca adivines.**
- Mira la esquina inferior izquierda de VS Code (icono de ramita 🌿).
- O escribe `git branch` en la terminal.

---

Ramas (Branches)
*¿Cuándo usarlo? Cuando quieres trabajar en algo nuevo sin arriesgar el código principal de `main`.*

```
git checkout -b nombre-de-la-rama
```
> Crea una rama nueva Y te mueve a ella en un solo paso. El `-b` es el que la crea. Sin el `-b`, solo te mueves a una rama que ya existe pero no crea una nueva.
```
git branch
```
> Muestra la lista de todas tus ramas. La que tiene `*` es en la que estás trabajando ahora.
```
git checkout main
```
> Te regresa a la rama principal `main`. Úsalo cuando termines de trabajar en tu rama y quieras volver al código principal.
```
git push -u origin nombre-de-la-rama
```
> Sube la rama nueva a GitHub por primera vez y la conecta de forma permanente. Solo necesitas la `-u` esta primera vez. Después basta con `git push`.

---

### 8A. Ver ramas que existen en GitHub pero no en tu PC
*¿Cuándo usarlo? Clonaste el proyecto y quieres trabajar en una rama que ves en GitHub pero que tu PC no tiene.*

```
git fetch origin
```
> Le pide a GitHub la lista de todas las ramas que existen allá. No descarga código, solo actualiza el "mapa" de lo que hay en el servidor.
```
git branch -a
```
> Muestra TODAS las ramas: las de tu PC y las de GitHub (las de GitHub aparecen como `remotes/origin/nombre`).
```
git checkout -b rama-vikthor origin/rama-vikthor
```
> Descarga la rama `rama-vikthor` de GitHub, la crea en tu PC y te mueve a ella en un solo paso.

---

### 8B. Unir tu rama a `main` (Merge desde la terminal)
*¿Cuándo usarlo? Terminaste tu trabajo en tu rama y quieres integrarlo a la versión principal.*

```
git checkout main
```
> Te mueves a la rama principal. El merge siempre se hace estando en `main`, no desde tu rama.
```
git pull origin main
```
> Aseguras que tu `main` local tenga lo más reciente antes de mezclar. Si no haces esto puedes mezclar sobre una versión vieja y crear conflictos innecesarios.
```
git merge rama-vikthor
```
> Trae todos los cambios de `rama-vikthor` y los integra a `main`. Si hay conflictos, VS Code te avisará con `!` en rojo (ver Grupo 8).
```
git push origin main
```
> Sube el resultado final de la mezcla a GitHub.

---



## 🚨 GRUPO 9: Catálogo de Errores Críticos y Conflictos

### Error: Conflicto de código (archivos con `!` en rojo)
*Causa: Tú y alguien más (o tú mismo desde otra PC) editaron exactamente las mismas líneas.*

1. Abre el archivo marcado con `!`.
2. VS Code te mostrará las dos versiones resaltadas. Elige **Accept Current Change** para quedarte con tu versión.
3. ⚠️ **NUNCA elijas Accept Both** — pegará el código dos veces y lo romperá.
4. Guarda con `Ctrl + S`, luego:
```
git add .
git commit -m "Conflicto resuelto"
```

---

### Error: `[rejected] — fetch first`
*Causa: GitHub tiene cambios nuevos que tu PC no tiene.*

**Opción correcta (traer y unir):**
```
git pull origin main
git push origin main
```

**Opción rápida (forzar tu versión):**
```
git push -f origin main
```
> ⚠️ Borra lo que haya en GitHub y lo reemplaza con lo tuyo. Úsalo con cuidado.

---

## ⚠️ NO sería el comando correcto SI:
Estás en tu rama personal: Si estás trabajando en tu espacio de pruebas, el comando debería ser:
git push -u origin rama-vikthor

Ya usaste la -u antes: Si ya lo hiciste una vez, el comando correcto ahora es simplemente:
git push (¡Mucho más corto!).

GitHub te rechaza el envío: Si alguien más subió cosas y tú no las tienes, el comando correcto sería primero un git pull y luego el push.


#### 🛠️ Error: "no upstream branch" (texto amarillo largo al hacer push)
*Causa: Es la primera vez que subes esa rama — Git no sabe a dónde enviarla.*

Si al poner `git push` te sale un texto largo en amarillo/blanco:
1. No entres en pánico, es porque el proyecto es nuevo.
2. Usa el comando: `git push -u origin "nombre de la rama`
ej. git push -u origin main, git push -u origin rama-vikthor
3. Esto conecta tu PC con GitHub de forma permanente.

> La `-u` le dice a Git el destino permanente. Después de esto solo necesitas `git push`.

---
> **💡 Tip de Pro:** Si quieres limpiar la pantalla de la terminal porque hay muchas letras, escribe el comando `clear` y presiona Enter.


### Error: `src refspec main does not match any`
*Causa: Git en tu PC llama a la rama "master", pero GitHub espera "main".*
```
git branch -M main
```

---

### Error: `fatal: remote origin already exists`
*Causa: Ya hay un puente vinculado e intentas crear otro encima.*
```
git remote set-url origin https://github.com/USUARIO/REPO.git
```
> Actualiza la URL del puente existente en lugar de crear uno nuevo.

---

### Error: `fatal: not a git repository`
*Causa: Estás en una carpeta sin Git activado.*
```
git init
```
> Activa Git. Si ya deberías estar en el proyecto, verifica con `cd Miblock` que entraste a la carpeta correcta.

---

### La "Carpeta Gris" en GitHub (Embedded Repository)
*Síntoma: Una carpeta aparece con una flechita y al hacer clic no abre.*
*Causa: Esa carpeta tiene su propio `.git` adentro — Git la trata como un proyecto separado.*

1. Entra a esa carpeta en tu PC y **borra la carpeta oculta `.git`** que hay adentro.
2. En la terminal principal del proyecto:
```
git rm -f --cached NOMBRE_DE_LA_CARPETA
git add .
git commit -m "Corrección de embedded repo"
git push
```

---

## ⏪ GRUPO 10: Botón de Pánico (Deshacer Cambios)

### Opción `--soft` — No borra tu código
*Úsalo si te equivocaste en el mensaje del commit o faltó un archivo, pero tu código sirve.*

```
git reset --soft HEAD~1
```
> El commit desaparece, pero tus archivos siguen intactos. Arregla lo que necesites y vuelve a hacer `add` + `commit`.

---

### Opción `--hard` — BORRA tu código
*Úsalo solo si el código que hiciste no sirve para nada y quieres regresar al estado anterior.*

```
git reset --hard HEAD~1
```
> Borra el commit y limpia tus archivos al estado del commit anterior.

Si ya lo habías subido a GitHub:
```
git push origin main --force
```
> Obliga a GitHub a tener exactamente lo mismo que tu PC.

---

### Diferencia rápida: `--soft` vs `--hard`

| Opción | ¿Qué borra? | ¿Tu código sigue? | ¿Cuándo usarlo? |
|:---|:---|:---|:---|
| `--soft` | Solo el "envoltorio" del commit | ✅ Sí, intacto | Mensaje equivocado o faltó un archivo |
| `--hard` | El commit y todo el código de ese commit | ❌ Regresa al pasado | El código que hiciste no sirve para nada |

> 💡 **Tip de emergencia:** Si usaste `--hard` por error, usa `git reflog` para ver el historial completo incluyendo commits borrados, y podrás intentar rescatarlos. Si no has hecho commit aún, usa la **flecha curva (Discard Changes)** en VS Code.

---

## 🔖 GRUPO 11: Notas Técnicas Adicionales

### `git fetch` vs `git pull`

```
git fetch origin
```
> Solo "mira" qué hay de nuevo en GitHub y actualiza el mapa de ramas, **pero NO toca tu código**. Útil para ver si alguien subió algo sin arriesgarte a conflictos.

```
git pull origin main
```
> Hace `fetch` + `merge` en un solo paso. Baja los cambios Y los integra a tu código. Esto sí puede generar conflictos si tú también cambiaste las mismas líneas.

> 💡 Regla fácil: si solo quieres **ver** qué hay → `git fetch`. Si quieres **traer y aplicar** → `git pull`.

---

### ¿Cuándo usar `git push -u origin main`?
Solo la **primera vez** que subes una rama nueva que todavía no existe en GitHub. La `-u` crea una conexión permanente. Después de eso, basta con `git push`.

| Sin haber usado `-u` | Después de usar `-u` una vez |
|:---|:---|
| Tienes que escribir `git push origin main` | Solo escribes `git push` |
| Tienes que escribir `git pull origin main` | Solo escribes `git pull` |

---

### ¿Por qué existe `master` y `main`?
A partir de Git 2.28 cambiaron el nombre por defecto de `master` a `main`. Si tu Git es anterior a esa versión, usará `master` automáticamente sin avisarte, y eso puede causar confusión con GitHub que ya usa `main`.

Para verificar tu versión de Git:
```
git --version
```
Para que todos los repositorios nuevos usen `main` de ahora en adelante:
```
git config --global init.defaultBranch main
```
> Esto solo afecta proyectos nuevos. Los existentes siguen igual hasta que los cambies manualmente.

Para renombrar `master` a `main` en un proyecto existente y limpiar GitHub:
```
git branch -m master main
```
> Renombra la rama en tu PC.
```
git push origin main
```
> Sube la rama ya renombrada a GitHub.
```
git push origin --delete master
```
> Borra la rama vieja `master` de GitHub para que no queden las dos al mismo tiempo.

---

### ¿Qué hace `git remote -v`?
Muestra a qué dirección de GitHub está apuntando tu proyecto cuando baja (`fetch`) y cuando sube (`push`) archivos. Si ves la URL de tu repositorio en ambas líneas, el puente está bien construido. Si ves una URL equivocada, usa `git remote set-url origin URL_CORRECTA` para corregirlo.

---

### ¿Qué es `git fetch` y en qué se diferencia de `git pull`?

```
git fetch origin
```
> Solo pregunta a GitHub "¿qué hay de nuevo?" y actualiza el mapa interno de ramas remotas, **pero NO toca tu código**. Es útil para ver qué ramas existen o si alguien subió algo, sin arriesgarte a tener conflictos.

```
git pull origin main
```
> Hace `fetch` + `merge` en un solo paso. Baja los cambios Y los integra a tu código actual. Esto sí puede generar conflictos si tú también cambiaste las mismas líneas.

> 💡 Regla fácil: si solo quieres **ver** qué hay en GitHub sin tocar nada → `git fetch`. Si quieres **traer y aplicar** los cambios → `git pull`.

---


---

### ¿Qué es HEAD?

`HEAD` es el puntero que siempre indica en qué commit estás parado ahora mismo. `HEAD~1` significa "un commit atrás". `HEAD~2` sería dos commits atrás, y así.

---

### ¿Qué es `git stash`? (El cajón secreto)

*¿Cuándo usarlo? Empezaste a editar archivos pero de repente necesitas cambiar de rama urgentemente, sin perder tu avance y sin hacer commit porque aún no terminas.*

```
git stash
```
> Guarda tus cambios temporalmente en un "cajón secreto" y deja tu código limpio como si no hubieras tocado nada.

```
git stash pop
```
> Saca lo guardado del cajón y lo aplica de regreso. Úsalo cuando regreses a la rama donde estabas trabajando.

```
git stash list
```
> Muestra todos los stashes que tienes guardados, por si guardaste más de una vez.

---

### ¿Qué es `.gitignore`?

Un archivo de texto que pones en la raíz de tu proyecto. Todo lo que escribas ahí, Git lo ignorará completamente — no lo rastrea, no lo sube a GitHub, no aparece en `git status`.

Ejemplo de contenido:
```
node_modules/
.env
*.log
dist/
```

> Úsalo para no subir contraseñas (`.env`), dependencias enormes (`node_modules/`), o archivos temporales.

---

### Ver el historial de commits

```
git log --oneline
```
> Lista rápida de todos los commits con su ID corto y mensaje. Presiona `q` para salir.

```
git log --oneline --graph
```
> Lo mismo pero con un diagrama que muestra cómo se ramifican y unen las ramas.

```
git remote -v
```
> Muestra a qué URL exacta está apuntando tu proyecto para bajar (`fetch`) y subir (`push`).

---

## 📌 Mis Rutas Frecuentes

```
D:\Mis Archivos\Programacion\Mis Proyectos\MiBlock\Mi block 44 respaldos de github
C:\Users\Vikthor09\Documents\GitHub\Miblock
```
