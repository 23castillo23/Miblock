# GUÍA COMPLETA — Comandos para editar tarjetas

Todos los comandos que puedes usar dentro de `contenidoTutorialHtml` en tus archivos `data.*.js`.
Cada ejemplo está tomado de tus propias tarjetas reales.

---

## ESTRUCTURA BASE DE UNA TARJETA

```javascript
{
    categoria: "cmd",
    titulo: "Nombre de la tarjeta",
    imagen: "img/cmd/nombre.jpg",
    comando: "el comando principal",
    descripcion: "Texto corto que aparece en la tarjeta.",
    contenidoTutorialHtml: `
        <!-- Aquí va todo el HTML del tutorial -->
    `,
    links: [
        {
            texto: "Video Tutorial",
            url: "https://youtube.com/...",
            plataforma: "youtube"
        }
    ],
    pasos: []
},
```

---

## 1. TEXTO Y FORMATO

### Párrafo normal
```html
<p>Texto de explicación aquí.</p>
```

### Negrita
```html
<p>Esto es <strong>muy importante</strong> recordarlo.</p>
```

### Cursiva
```html
<p>Este es un <em>término técnico</em>.</p>
```

### Negrita + cursiva juntas
```html
<p><strong><em>Nunca borres esta carpeta.</em></strong></p>
```

### Texto pequeño (notas al pie)
```html
<small>Nota: Funciona solo en Windows 10 y 11.</small>
```

### Salto de línea simple
```html
Primera línea.<br>Segunda línea sin espacio de párrafo.
```

---

## 2. TÍTULOS

### Título principal del tutorial (grande)
```html
<h3>Nombre del Tutorial</h3>
```

### Subtítulo de sección (mediano) — sin color
```html
<h4>Paso 1: Abrir la Terminal</h4>
```

### Subtítulo con color (usa tus clases de config)
```html
<h4 class="color-info">Información</h4>
<h4 class="color-exito">Éxito / Correcto</h4>
<h4 class="color-peligro">Peligro / Error</h4>
<h4 class="color-alerta">Advertencia</h4>
<h4 class="color-naranja">Precaución</h4>
<h4 class="color-morado">Especial / Pro</h4>
<h4 class="color-amarillo">Consejo</h4>
```

### Subtítulo con ícono de FontAwesome
```html
<h4 class="color-info"><i class="fas fa-info-circle"></i> Información</h4>
<h4 class="color-peligro"><i class="fas fa-trash-alt"></i> Eliminación</h4>
<h4 class="color-exito"><i class="fas fa-folder-plus"></i> Crear Archivos</h4>
```

### Título menor (para sub-secciones dentro de una sección)
```html
<h5>Variante avanzada:</h5>
```

---

## 3. BLOQUE DE CÓDIGO CON BOTÓN COPIAR

### Básico — solo comando
```html
<div class="contenedor-comando">
    <code>ipconfig</code>
    <button class="btn-copiar-interno" onclick="copiarComando(this)">
        <i class="fas fa-copy"></i> Copiar
    </button>
</div>
```

### Con texto personalizado en el botón
```html
<div class="contenedor-comando">
    <code>git push origin main</code>
    <button class="btn-copiar-interno" onclick="copiarComando(this)">
        <i class="fas fa-copy"></i> Subir a GitHub
    </button>
</div>
```

### Sin botón copiar (solo mostrar el código)
```html
<div class="contenedor-comando">
    <code>cd NombreCarpeta</code>
</div>
```

### Con etiqueta descriptiva al lado
```html
<div class="contenedor-comando">
    <code>mkdir Proyecto</code>
    <span>(Crear carpeta)</span>
</div>
```

### Múltiples comandos seguidos (con separación)
```html
<div class="contenedor-comando">
    <code>git add .</code>
    <button class="btn-copiar-interno" onclick="copiarComando(this)">
        <i class="fas fa-copy"></i> Copiar
    </button>
</div>
<div class="contenedor-comando mt-10">
    <code>git commit -m "mensaje"</code>
    <button class="btn-copiar-interno" onclick="copiarComando(this)">
        <i class="fas fa-copy"></i> Copiar
    </button>
</div>
```

### Código inline (dentro de un párrafo)
```html
<p>Usa el comando <code>ipconfig</code> para ver tu IP.</p>
```

---

## 4. BLOQUE DE CÓDIGO LARGO (multilínea)

Para scripts, archivos `.bat`, código completo:
```html
<pre class="codigo-consola">
@echo off
title Mi Script
cls
echo Hola Mundo
pause
</pre>
```

---

## 5. CONTENEDOR DE PASOS

Envuelve los pasos de un tutorial. Aplica el estilo visual de "tarjeta de pasos":
```html
<div class="tutorial-pasos">
    <h4>Paso 1: Título</h4>
    <p>Explicación del paso.</p>
    
    <h4>Paso 2: Otro paso</h4>
    <p>Otra explicación.</p>
</div>
```

### Variante con advertencia (fondo amarillo suave)
```html
<div class="tutorial-pasos warning">
    <p>Este proceso no se puede deshacer.</p>
</div>
```

---

## 6. BLOQUES DE NOTA / CALLOUT

Bloques con borde de color en el lado izquierdo para destacar información importante.

### Azul — informativo
```html
<div class="nota-info">
    <p>Este comando requiere conexión a internet.</p>
</div>
```

### Verde — éxito / resultado correcto
```html
<div class="nota-exito">
    <p>Si ves "Successfully installed", todo salió bien.</p>
</div>
```

### Rojo — peligro / no hacer esto
```html
<div class="nota-peligro">
    <p>Este comando borra archivos permanentemente, sin papelera.</p>
</div>
```

### Naranja — advertencia
```html
<div class="nota-advertencia">
    <p>Haz una copia de seguridad antes de continuar.</p>
</div>
```

### Índigo/morado — nota especial (color primario del portal)
```html
<div class="nota-primary">
    <p>Este método funciona solo si tienes permisos de administrador.</p>
</div>
```

---

## 7. ACORDEÓN (sección que se expande al hacer clic)

Para información extra que no siempre se necesita ver:
```html
<details class="acordeon-tutorial">
    <summary class="acordeon-header">
        <i class="fas fa-search"></i> CLIC PARA VER MÁS DETALLES
    </summary>
    <div class="tutorial-pasos">
        <p>Contenido que se muestra al hacer clic.</p>
        <ul>
            <li>Punto 1</li>
            <li>Punto 2</li>
        </ul>
    </div>
</details>
```

### Acordeón con bloque de código adentro
```html
<details class="acordeon-tutorial">
    <summary class="acordeon-header">
        <i class="fas fa-code"></i> CLIC PARA VER EL CÓDIGO COMPLETO
    </summary>
    <div class="contenedor-comando m-0">
        <pre class="codigo-consola">
@echo off
echo Hola Mundo
        </pre>
    </div>
</details>
```

---

## 8. LISTAS

### Lista con puntos (bullets)
```html
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ul>
```

### Lista numerada
```html
<ol>
    <li>Primero haz esto</li>
    <li>Luego haz esto</li>
    <li>Por último esto</li>
</ol>
```

### Lista sin bullets (limpia, solo texto)
```html
<ul class="lista-limpia">
    <li>Elemento sin punto</li>
    <li>Otro elemento</li>
</ul>
```

### Lista con código inline
```html
<ul>
    <li><strong>IPv4:</strong> Tu número en la red. Ej: <code>192.168.1.1</code></li>
    <li><strong>Máscara:</strong> Tamaño de la red. Ej: <code>255.255.255.0</code></li>
    <li><strong>Gateway:</strong> La dirección del router.</li>
</ul>
```

---

## 9. ATAJOS DE TECLADO

Para mostrar teclas visualmente (aparecen con borde y estilo de tecla):
```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
<p>Usa <kbd>Win</kbd> + <kbd>R</kbd> para abrir Ejecutar.</p>
<p>Guarda con <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
```

---

## 10. TABLA

Para comparar comandos, opciones o datos en columnas:
```html
<table class="tabla-base">
    <thead>
        <tr>
            <th class="p-10">Comando</th>
            <th class="p-10">Función</th>
            <th class="p-10">Cuándo usarlo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-10"><code>ipconfig</code></td>
            <td class="p-10">Ver IP básica</td>
            <td class="p-10">Diagnóstico rápido</td>
        </tr>
        <tr>
            <td class="p-10"><code>ipconfig /all</code></td>
            <td class="p-10">Ver todo (MAC, DNS)</td>
            <td class="p-10">Configuración detallada</td>
        </tr>
    </tbody>
</table>
```

---

## 11. LÍNEA SEPARADORA

### Separador simple (línea horizontal)
```html
<hr>
```

### Separador con degradado (color primario del portal)
```html
<div class="separador-grad"></div>
```

### Separador degradado azul (color secundario)
```html
<div class="separador-grad separador-secondary"></div>
```

### Separador degradado verde
```html
<div class="separador-grad separador-verde"></div>
```

---

## 12. ESPACIADO (márgenes y padding)

Para separar elementos sin agregar texto vacío:

### Margen superior
```html
<div class="mt-5">  <!-- 5px arriba -->
<div class="mt-10"> <!-- 10px arriba -->
<div class="mt-15"> <!-- 15px arriba -->
<div class="mt-20"> <!-- 20px arriba -->
```

### Margen inferior
```html
<div class="mb-8">  <!-- 8px abajo -->
<div class="mb-10"> <!-- 10px abajo -->
<div class="mb-15"> <!-- 15px abajo -->
```

### Padding interno
```html
<div class="p-5">  <!-- padding 5px -->
<div class="p-8">  <!-- padding 8px -->
<div class="p-10"> <!-- padding 10px -->
```

### Ejemplo práctico — separar dos bloques de código
```html
<div class="contenedor-comando">
    <code>git add .</code>
</div>
<div class="contenedor-comando mt-10">
    <code>git commit -m "fix"</code>
</div>
```

---

## 13. BLOQUES DE FONDO

### Fondo sutil gris (para agrupar contenido relacionado)
```html
<div class="bloque-sutil">
    <p>Este contenido está agrupado visualmente.</p>
</div>
```

### Texto pequeño con buena legibilidad
```html
<p class="txt-sm">Nota técnica con texto más pequeño pero cómodo de leer.</p>
```

---

## 14. ENLACE EXTERNO (dentro del tutorial)

Para links que abren en nueva pestaña desde dentro del modal:
```html
<a href="https://docs.microsoft.com" target="_blank">Ver documentación oficial</a>
```

### Enlace con clase de plataforma (ícono automático)
```html
<a href="https://youtube.com/..." target="_blank"
   class="btn-pro-link youtube" data-tooltip="Ver video">
    <i class="fab fa-youtube"></i>
    <span class="texto-btn-cortado">Ver video en YouTube</span>
</a>
```

---

## 15. PLATAFORMAS PARA links: (campo en la tarjeta)

En el campo `links:` de la tarjeta, el campo `plataforma` define el ícono automático:

```javascript
links: [
    { texto: "Video",        url: "https://youtube.com/...",   plataforma: "youtube"   },
    { texto: "Repositorio",  url: "https://github.com/...",    plataforma: "github"    },
    { texto: "Publicación",  url: "https://facebook.com/...",  plataforma: "facebook"  },
    { texto: "Búsqueda",     url: "https://google.com/...",    plataforma: "google"    },
    { texto: "Perfil",       url: "https://twitter.com/...",   plataforma: "twitter"   },
    { texto: "Post",         url: "https://instagram.com/...", plataforma: "instagram" },
    { texto: "Video corto",  url: "https://tiktok.com/...",    plataforma: "tiktok"    },
    { texto: "Perfil Pro",   url: "https://linkedin.com/...",  plataforma: "linkedin"  },
    { texto: "Cualquier web",url: "https://ejemplo.com",       plataforma: ""          },
]
```
Si no pones `plataforma` o la dejas vacía, aparece el ícono genérico de enlace.

---

## 16. TARJETA PRIVADA (solo tú la ves)

Agrega este campo para que la tarjeta solo aparezca cuando estás logueado con tu cuenta Google:
```javascript
{
    categoria: "investigacion",
    titulo: "Nota privada",
    esPrivada: true,   // ← esto la hace invisible para todos los demás
    ...
}
```

---

## COMANDOS QUE TE FALTAN Y TE SERÍAN ÚTILES

Estos no están en tus archivos aún pero encajan perfectamente con tu portal:

### Imagen dentro del tutorial
```html
<img src="img/cmd/ejemplo.jpg" alt="Descripción" style="width:100%; border-radius:8px;">
```

### Video embebido de YouTube
```html
<iframe width="100%" height="315"
    src="https://www.youtube.com/embed/ID_DEL_VIDEO"
    frameborder="0" allowfullscreen>
</iframe>
```

### Cita / bloque destacado
```html
<blockquote>
    <p>Frase importante o consejo clave aquí.</p>
</blockquote>
```

### Paso numerado visual (sin lista ol, más visual)
```html
<div class="bloque-sutil mt-10">
    <strong>① Primero:</strong> abre la terminal como administrador.
</div>
<div class="bloque-sutil mt-5">
    <strong>② Después:</strong> ejecuta el comando.
</div>
<div class="bloque-sutil mt-5">
    <strong>③ Por último:</strong> reinicia el equipo.
</div>
```

### Combinación nota + código (muy útil)
```html
<div class="nota-advertencia">
    <strong>Antes de ejecutar:</strong>
    <div class="contenedor-comando mt-10">
        <code>net user administrador *</code>
        <button class="btn-copiar-interno" onclick="copiarComando(this)">
            <i class="fas fa-copy"></i> Copiar
        </button>
    </div>
</div>
```

---

## REFERENCIA RÁPIDA DE ÍCONOS MÁS USADOS

```
fas fa-copy          → copiar papeles
fas fa-terminal      → terminal/CMD
fas fa-code          → código
fas fa-info-circle   → información
fas fa-search        → buscar/lupa
fas fa-shield-alt    → seguridad
fas fa-trash-alt     → eliminar
fas fa-folder-plus   → crear carpeta
fas fa-broom         → limpiar
fas fa-rocket        → arrancar/inicio
fas fa-key           → contraseña/acceso
fas fa-globe         → internet/web
fas fa-microchip     → hardware/sistema
fas fa-cogs          → configuración
fas fa-exclamation-triangle → advertencia
fab fa-git-alt       → Git
fab fa-github        → GitHub
fab fa-windows       → Windows
fab fa-linux         → Linux
fab fa-youtube       → YouTube
```

Puedes buscar más en: https://fontawesome.com/icons
