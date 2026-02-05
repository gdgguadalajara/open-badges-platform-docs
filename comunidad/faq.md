# Preguntas Frecuentes (FAQ)

Aquí encontrarás respuestas a las dudas más comunes sobre el uso, despliegue y filosofía de la plataforma de **Open Badges Platfom**.

## 🏢 Sobre la Organización

### ¿Puedo usar este sistema para una comunidad que no sea el GDG?

**¡Absolutamente!** Aunque el código es mantenido por el GDG Guadalajara, la arquitectura es agnóstica. Cualquier universidad, empresa o grupo de estudio puede descargar el código, cambiar los logos y desplegar su propia fábrica de insignias.

### ¿Por qué no proporcionan una imagen de Docker lista para descargar?

Siguiendo la filosofía de **soberanía tecnológica**, creemos que el emisor de insignias debe tener control total sobre su binario. Distribuir solo el código fuente garantiza que cada organización sepa exactamente qué está corriendo en su servidor y pueda auditar el proceso de "horneado" de sus certificados.

## 🛠️ Dudas Técnicas

### ¿Por qué usar SQLite en lugar de PostgreSQL o MySQL?

Para el volumen de una comunidad típica, **SQLite** es más que suficiente, extremadamente rápido y elimina la fricción de gestionar un servidor de base de datos adicional. Facilita los respaldos (es solo un archivo) y la portabilidad del sistema.

### ¿Es obligatorio usar Google OAuth?

Actualmente, el sistema está optimizado para la identidad de Google por ser el estándar en el ecosistema GDG. Sin embargo, al usar **Quarkus OIDC**, la arquitectura permite extenderse a otros proveedores (como GitHub o GitLab) con cambios mínimos en la configuración.

### ¿Qué pasa si pierdo el acceso a mi cuenta de Resend?

El sistema dejará de enviar correos electrónicos de notificación, pero las insignias seguirán siendo generadas y almacenadas en la base de datos. Puedes actualizar tu `API_KEY` en las variables de entorno sin afectar los datos existentes.

## 🛡️ Seguridad y Estándares

### ¿Qué tan seguras son las insignias "horneadas"?

Mucho. Al seguir el estándar **Open Badges 2.0**, la imagen lleva la prueba técnica en sus metadatos. Si alguien intenta alterar el JSON-LD, la firma o la URL de verificación dejarán de coincidir, invalidando la insignia ante cualquier verificador oficial.

### ¿El sistema almacena información sensible?

No. Por diseño, no guardamos contraseñas. Solo almacenamos los correos electrónicos de los receptores (que pueden estar hasheados según la configuración) y los nombres necesarios para la emisión de las insignias.

## 🤝 Colaboración

### ¿Cómo puedo sugerir una nueva funcionalidad?

El mejor camino es abrir una discusión en nuestro **Google Group** o crear un *Issue* en el repositorio de GitHub si tienes una propuesta técnica clara. ¡Nos encanta ver nuevas ideas!

### ¿Necesito ser un experto en Java para contribuir?

No. El proyecto tiene tres frentes claros:

1. **Backend (Java/Quarkus):** Para lógica de negocio y procesamiento de imágenes.
2. **Frontend (Vue/Nuxt 3):** Para mejorar el panel administrativo.
3. **Documentación (VitePress):** Para ayudar a que más personas entiendan y usen el sistema.

> [!TIP]
> Si tu duda no está aquí, no dudes en escribir al grupo de la comunidad: [open-badges-platform](https://groups.google.com/g/open-badges-platform).
