# 🎸 Rock Legends Portal

Portal web dedicado a las bandas de rock y metal más icónicas de la historia. Proyecto desarrollado con HTML5, CSS3 y JavaScript puro.

![Rock Legends](https://img.shields.io/badge/Rock-Legends-red?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción

Rock Legends Portal es una aplicación web interactiva que presenta información detallada sobre 9 bandas legendarias del rock y metal. El sitio incluye un sistema de autenticación, diseño temático oscuro con acentos rojos, y enlaces directos a las canciones más populares de cada banda en YouTube.

## ✨ Características

### 🔐 Sistema de Autenticación
- Página de login con validación
- Sistema de sesiones usando `sessionStorage`
- Protección de rutas (redirección automática si no estás autenticado)
- Credenciales de acceso:
  - **Usuario:** `rock`
  - **Contraseña:** `metal`

### 🎨 Diseño Rockero
- **Tema oscuro** con fondo negro y acentos rojos neón
- **Efectos visuales:** sombras brillantes, gradientes, animaciones hover
- **Tipografía Impact** para títulos (estilo rockero)
- **Responsive design** adaptable a móviles y tablets
- **Botones interactivos** con efectos de brillo y elevación

### 🎵 Bandas Incluidas

1. **Slipknot** - Nu Metal
2. **Nirvana** - Grunge
3. **Metallica** - Thrash Metal
4. **Korn** - Nu Metal
5. **System of a Down** - Metal Alternativo
6. **Linkin Park** - Nu Metal / Rock Alternativo
7. **Limp Bizkit** - Nu Metal / Rap Metal
8. **Gorillaz** - Rock Alternativo / Art Pop
9. **Rammstein** - Industrial Metal / Neue Deutsche Härte

### 📄 Páginas Individuales
Cada banda tiene su propia página HTML con:
- ✅ Logo oficial de la banda
- ✅ Historia y biografía completa
- ✅ Información sobre los miembros
- ✅ Discografía destacada
- ✅ Logros y legado
- ✅ **5 canciones populares** con enlaces directos a YouTube

### 🎶 Enlaces a YouTube
Cada banda incluye 5 canciones icónicas con enlaces funcionales:
- Diseño visual atractivo con números y efectos hover
- Abren en nueva pestaña
- Iconos de reproducción animados

## 🗂️ Estructura del Proyecto

```
rock-legends-portal/
│
├── login.html              # Página de inicio de sesión
├── index.html              # Portal principal con grid de bandas
│
├── slipknot.html           # Página de Slipknot
├── nirvana.html            # Página de Nirvana
├── metallica.html          # Página de Metallica
├── korn.html               # Página de Korn
├── system-of-a-down.html   # Página de System of a Down
├── linkin-park.html        # Página de Linkin Park
├── limp-bizkit.html        # Página de Limp Bizkit
├── gorillaz.html           # Página de Gorillaz
├── rammstein.html          # Página de Rammstein
│
├── styles.css              # Estilos CSS completos
├── script.js               # Lógica JavaScript
└── README.md               # Este archivo
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web ni dependencias externas

### Instalación

1. **Descarga todos los archivos** del proyecto en una carpeta local

2. **Asegúrate de que todos los archivos estén en la misma carpeta:**
   ```
   - login.html
   - index.html
   - styles.css
   - script.js
   - (todas las páginas de bandas .html)
   ```

3. **Abre `login.html`** en tu navegador web

### Uso

1. **Accede al login:**
   - Usuario: `rock`
   - Contraseña: `metal`

2. **Navega por el portal:**
   - Verás 9 tarjetas con las bandas
   - Haz clic en "Ver más ⚡" para acceder a la información completa

3. **Explora las bandas:**
   - Lee la historia y biografía
   - Conoce a los miembros
   - Descubre su discografía
   - Escucha sus canciones más populares en YouTube

4. **Cierra sesión:**
   - Usa el botón "Cerrar Sesión" en la esquina superior derecha

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con:
  - Flexbox y Grid Layout
  - Gradientes y sombras
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript (Vanilla)** - Funcionalidad:
  - Manejo de autenticación
  - Navegación entre páginas
  - Generación dinámica de contenido
  - Manejo de eventos

### Recursos Externos
- **Logos de bandas:** Wikipedia Commons (dominio público)
- **Enlaces de canciones:** YouTube

## 🎨 Paleta de Colores

```css
Negro Principal:    #000000
Negro Secundario:   #0a0a0a, #1a0a0a
Rojo Neón:          #ff0000
Rojo Oscuro:        #8b0000
Rojo Transparente:  rgba(255, 0, 0, 0.X)
Gris Texto:         #ddd, #ccc, #999, #666
```

## 📱 Responsive Design

El sitio está optimizado para:
- 💻 **Desktop:** 1200px+
- 📱 **Tablet:** 768px - 1199px
- 📱 **Mobile:** < 768px

## 🔒 Seguridad

⚠️ **Nota Importante:** Este proyecto es educativo/demostrativo. En producción:
- Nunca almacenes credenciales en el código frontend
- Implementa autenticación backend real
- Usa HTTPS
- Implementa tokens JWT o sesiones seguras del lado del servidor

## 🌟 Características Destacadas

### Efectos Visuales
- ✨ Sombras rojas brillantes (glow effect)
- 🔄 Animaciones smooth en hover
- 📊 Grid responsive con auto-fit
- 🎭 Efectos de elevación en tarjetas
- ⚡ Gradientes dinámicos

### Experiencia de Usuario
- 🚀 Carga rápida (sin dependencias externas)
- 🎯 Navegación intuitiva
- 📖 Información bien organizada
- 🔗 Enlaces externos seguros (target="_blank")
- ↩️ Botones de retorno en todas las páginas

## 🛠️ Personalización

### Agregar una Nueva Banda

1. **Actualiza `script.js`:**
   ```javascript
   {
       name: "Nueva Banda",
       genre: "Género Musical",
       formed: "Formada en XXXX, Ciudad",
       description: "Descripción breve...",
       fullInfo: `...`
   }
   ```

2. **Crea un archivo HTML** (ej: `nueva-banda.html`) usando cualquier página existente como plantilla

3. **Actualiza los enlaces** a YouTube con las canciones populares

### Cambiar Credenciales de Login

En `script.js`, busca la función `handleLogin` y modifica:
```javascript
if (username === 'TU_USUARIO' && password === 'TU_PASSWORD') {
    // ...
}
```

### Modificar Colores

En `styles.css`, busca y reemplaza:
- `#ff0000` para cambiar el rojo principal
- `#000` para cambiar el negro de fondo

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

**Nota:** Los nombres, logos y marcas de las bandas pertenecen a sus respectivos propietarios. Este proyecto es solo con fines educativos y de demostración.

## 👨‍💻 Autor

Proyecto desarrollado como demostración de habilidades en:
- Desarrollo web frontend
- Diseño UI/UX
- JavaScript vanilla
- Responsive design

---

## 🎸 ¡Rock On! 🤘

**Disfruta explorando las leyendas del rock y metal que han marcado la historia de la música.**

### Versión
**v1.0.0** - Release inicial con 9 bandas, sistema de login y enlaces a YouTube