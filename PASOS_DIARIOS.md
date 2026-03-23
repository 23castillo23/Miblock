## la laptop (rama)
Al iniciar:
1. git pull origin main           (traer lo nuevo de main)
2. git pull origin rama-vikthor   (sincronizar tu rama)
3. git branch                     (confirmar que estás en rama-vikthor)

... trabajas en tus archivos ...
Si quieres verificar en qué proyecto estás antes de hacer cualquier push puedes usar:
- git remote -v
Al guardar:
4. git status
5. git add .
6. git commit -m "qué hiciste"
7. git push origin rama-vikthor

## la máquina principal (main directo) 
Al iniciar:
1. git pull origin main

... trabajas ...
Si quieres verificar en qué proyecto estás antes de hacer cualquier push puedes usar:
- git remote -v
Al guardar:
2. git status
3. git add .
4. git commit -m "qué hiciste"
5. git push origin main



## Si el proyecto ya está en GitHub y es una computadora nueva:

Pasos:
1. git clone URL-del-repositorio      (baja el proyecto completo a tu máquina)
2. cd nombre-del-proyecto             (entra a la carpeta que se descargó)
3. git pull origin main               (asegurarte de tener lo más reciente)
4. git checkout -b rama-companero     (crea tu rama y te mueve a ella)
5. git branch                         (confirmas que estás en tu nueva rama)
6. git push -u origin rama-companero  (sube la rama nueva a GitHub)

La URL del repositorio se encuentra en:
GitHub → tu repositorio → botón verde "Code" → copiar URL

Ejemplo de URL:
https://github.com/tu-usuario/nombre-proyecto.git

> Nota: git checkout -b crea la rama Y te mueve a ella al mismo tiempo.
> Sin el -b solo te mueves a una rama que ya existe.







¿En qué casos lo usas?
- `git push -u origin main`
- `git push -u origin rama-vikthor`

# Solo en un caso: 
la primera vez que subes una rama nueva a GitHub que aún no existe allá. Por ejemplo, si creas una rama nueva en tu máquina y nunca la has subido:
ejemplo de como se usa 
git push -u origin rama-vikthor   ← primera vez, crea la rama en GitHub
git push origin rama-vikthor      ← también funciona la primera vez
git push                          ← las siguientes veces ya basta con esto



Dominio de la Terminal
*Navega por tus carpetas sin usar el mouse.*

- `dir`: Ver qué hay en la carpeta actual.
- `cd [Nombre]`: Entrar a carpeta (**Tip:** Escribe 3 letras y pulsa `TAB`).
- `cd ..`: Regresar una carpeta atrás.
- `cls`: Limpiar la terminal.
- `D:` o `C:`: Cambiar de disco duro.



## Comandos CMD - Navegación

- dir                        (ver archivos y carpetas donde estás)
- cd NombreCarpeta           (entrar a una carpeta)
- cd ..                      (regresar una carpeta atrás)
- cd \                       (ir directo a la raíz del disco)
- cls                        (limpiar la terminal)
- D: o C:                    (cambiar de disco)

---

## Comandos CMD - Crear y eliminar

- mkdir NombreCarpeta        (crear una carpeta nueva)
- echo. > archivo.txt        (crear un archivo vacío)
- rmdir NombreCarpeta        (eliminar una carpeta vacía)
- rmdir /s NombreCarpeta     (eliminar carpeta con todo su contenido) ⚠ cuidado
- del archivo.txt            (eliminar un archivo) ⚠ no va a la papelera
- copy archivo.txt destino\  (copiar un archivo a otra carpeta)
- move archivo.txt destino\  (mover un archivo a otra carpeta)
- ren archivo.txt nuevo.txt  (renombrar un archivo)

---

## Comandos CMD - Buscar archivos

- dir /s nombre.txt          (buscar archivo en carpeta actual y subcarpetas)
- dir *.md                   (buscar todos los archivos con esa extensión)
- type archivo.txt           (ver el contenido de un archivo sin abrirlo)

---

## Comandos CMD - Útiles para Git

- cd ruta\de\tu\proyecto     (ir a tu proyecto antes de usar Git)
- start .                    (abrir explorador de Windows en carpeta actual)
- code .                     (abrir VS Code en la carpeta actual)
- git log --oneline          (ver historial de commits resumido)
- git diff                   (ver exactamente qué líneas cambiaste)

---

## Comandos CMD - Atajos

- TAB                        (autocompletar nombre de carpeta o archivo)
- Flecha arriba / abajo      (navegar entre comandos escritos antes)
- Ctrl + C                   (cancelar un comando que está corriendo)
- doskey /history            (ver todos los comandos de esta sesión)
- exit                       (cerrar la terminal)


## 🚨 GRUPO 6: emergencias y "Rescate"
*Usa esto cuando las letras se pongan rojas o el código se duplique.*

### 🩹 1. Resolver Conflictos (Código Duplicado)
*Si al hacer pull el código sale doble o con marcas verdes/azules:*
1. Abre el archivo con la **!** roja.
2. Selecciona **`Accept Current Change`** (Deja tu código y borra el de internet).
3. **NUNCA** elijas *Accept Both* o el código se pegará dos veces.
4. Guarda, haz `git add .` y `git commit -m "Conflicto resuelto"`.