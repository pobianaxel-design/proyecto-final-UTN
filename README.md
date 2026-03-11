# Clon WhatsApp – Trabajo Final Desarrollo Web Frontend

## Descripción del proyecto
Este proyecto es un clon de WhatsApp desarrollado como trabajo final del curso de Desarrollo Web Frontend.  
Permite registrar usuarios, enviar mensajes y mantener la sesión activa mediante React Context.

El proyecto incluye:

- Gestión de usuarios con registro y login.
- Persistencia de sesión usando Context y localStorage.
- Envío de mensajes entre usuarios seleccionados.
- Navegación entre páginas públicas y privadas usando React Router.
- Página pública de documentación (`/acerca`).

---

## Tecnologías utilizadas

- React
- React Router
- Vite
- JavaScript (ES6+)
- HTML / CSS

---

## Estructura del proyecto

```
src/
├─ context/
│  └─ ChatContext.jsx        # Context para persistencia de usuario y mensajes
├─ views/
│  ├─ Register.jsx           # Formulario de registro
│  └─ About.jsx              # Página /acerca
├─ router/
│  └─ RouterApp.jsx          # Configuración de rutas
├─ services/
│  └─ mockApi.js             # Usuarios de prueba
```

---

## Instrucciones para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/pobianaxel-design/proyecto-final-UTN.git
cd proyecto-final-UTN
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

### 4. Abrir en el navegador

```
http://localhost:5173
```

---

## Rutas principales

- `/registro` → Formulario para registrar usuarios con validaciones.
- `/acerca` → Página pública de documentación del proyecto.
- `/` → Página de inicio de sesión (si se encuentra implementada).

---

## Decisiones de desarrollo

- Se utilizó **React Context** para manejar el estado del usuario logueado.
- La sesión se persiste con **localStorage** para que el usuario no tenga que registrarse nuevamente al recargar la página.
- Se mantuvo una estructura modular del proyecto para facilitar futuras ampliaciones y mantenimiento.

---

## Observaciones

- La interfaz es simple y funcional, enfocada en la correcta persistencia y manejo de usuarios y mensajes.
- Validaciones mínimas implementadas:
  - Nombre: mínimo 3 caracteres.
  - Email válido.
  - Contraseña: mínimo 6 caracteres.

---

## Deploy

El proyecto puede ser desplegado en Vercel siguiendo estos pasos:

1. Entrar a https://vercel.com y loguearse con GitHub.
2. Importar el repositorio: `pobianaxel-design/proyecto-final-UTN`.
3. Vercel detectará automáticamente que es un proyecto React + Vite y hará el deploy.

La app estará disponible en un link público proporcionado por Vercel.

---

## Autor

Axel Pobian  
Trabajo final – Desarrollo Web Frontend  
UTN