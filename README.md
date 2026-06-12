# 🚀 Guía de Comandos y Tutoriales

¡Bienvenido a tu enciclopedia técnica personal! Este proyecto es una **PWA (Progressive Web App)** diseñada para centralizar conocimientos sobre Windows, CMD, Programación y soporte técnico.

---

## 🛠️ Tecnologías Utilizadas
Este proyecto está construido con un stack moderno y eficiente:
* **HTML5:** Estructura semántica y accesible.
* **CSS3:** Diseño con efectos de **Glassmorphism** (cristal), animaciones de entrada y soporte total para **Modo Oscuro**.
* **JavaScript (ES6+):** Motor lógico para filtrado de tarjetas en tiempo real y gestión del DOM.
* **Firebase Suite:** * **Authentication:** Inicio de sesión seguro con Google.
    * **Firestore:** Base de datos en la nube para sincronizar tus favoritos.
* **Service Workers:** Tecnología que permite que la web funcione sin conexión a internet una vez cargada.

---

## 🔐 Funciones Especiales
* **Escudo de Privacidad (UID):** Capacidad para ocultar categorías completas de investigación que solo son visibles para el administrador logueado.
* **Generador de Guías PDF:** Sistema optimizado para imprimir tutoriales limpios directamente desde el navegador.
* **Favoritos Sincronizados:** Tus notas preferidas te siguen a cualquier dispositivo gracias a la integración con Google Cloud.

---

## 📂 Estructura del Proyecto
```text
📁 mi-proyecto/
├── 📄 index.html      # Puerta de entrada y estructura
├── 📄 manifest.json   # Configuración para instalar como App
├── 📄 sw.js           # Cerebro de la memoria caché
├── 📁 css/ ➔ 📄 style.css   # Estilos y visuales
├── 📁 js/  ➔ 📄 javascript.js # Lógica y Firebase
└── 📁 img/            # Imágenes de tutoriales e iconos