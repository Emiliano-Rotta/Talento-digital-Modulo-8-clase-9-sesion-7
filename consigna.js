// Ejercicio 1: Generar y verificar un JWT (Backend y Almacenamiento Seguro)

// Consigna:
// Crea un sistema que cumpla con los siguientes requisitos:

// Permita generar un token JWT cuando un usuario se autentique con nombre de usuario y contraseña.
// Codifique en el Payload:
// sub (ID del usuario).
// role (rol del usuario).
// iat (fecha de emisión del token).
// exp (tiempo de expiración del token: 1 hora desde su emisión).

// Use el algoritmo de encriptación HS256.
// Almacene el token generado en SessionStorage después de autenticar.
// Verifique el token en una solicitud posterior para acceder a un recurso protegido.

// project/
// │
// ├── backend/
// │   ├── app.js               # Archivo principal del servidor backend
// │   ├── routes/
// │   │   ├── auth.js          # Rutas para autenticación
// │   │   └── protected.js     # Rutas para recursos protegidos
// │   ├── controllers/
// │   │   └── authController.js # Controladores de autenticación
// │   └── utils/
// │       └── jwtUtils.js      # Utilidades para manejo de JWT
// │
// ├── frontend/
// │   ├── index.html           # Página principal del frontend
// │   ├── css/
// │   │   └── styles.css       # Estilos CSS
// │   ├── js/
// │   │   ├── auth.js          # Funciones de autenticación
// │   │   └── protected.js     # Lógica para acceder a recursos protegidos
// │   └── assets/              # Imágenes u otros recursos
// │
// └── README.md                # Instrucciones del proyecto
