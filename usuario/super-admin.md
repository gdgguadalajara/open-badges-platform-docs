# Manual de Super Administrador: Gestión de Instituciones

Como Super Administrador, eres el responsable de configurar la estructura base de la plataforma. Tu labor principal es dar de alta a las instituciones emisoras y asignar a los líderes que gestionarán cada una.

## 1. ¿Quién es un Super Administrador?

A diferencia de otros roles, el estatus de **Super Administrador** no se asigna dentro de la aplicación. Por seguridad, este permiso se define directamente en la configuración del servidor (infraestructura).

Para otorgar este nivel de acceso, se deben incluir los correos electrónicos en la variable de entorno:

> `COM_GDGGUADALAJARA_OPEN_BADGES_PLATFORM_SECURITY_SUPER_ADMINS`

* **Formato:** Lista de correos separados por comas.
* **Ejemplo:** `admin@gdgguadalajara.com,lider@gdgguadalajara.com`

## 2. Registro de una nueva Institución

Antes de que se puedan emitir insignias, es necesario crear el perfil de la **Institución**. Este perfil alimentará los metadatos del estándar Open Badges como el **Issuer** (Emisor).

### Datos requeridos para el alta:

| Campo                 | Descripción                                                |
| --------------------- | ---------------------------------------------------------- |
| **Nombre**            | Nombre oficial de la organización (ej. *GDG Guadalajara*). |
| **Sitio Web**         | URL oficial de la institución.                             |
| **URL del Logo**      | Enlace directo a la imagen del logo.                       |
| **Email de Contacto** | Correo institucional de referencia.                        |
| **Breve Descripción** | Resumen de la misión de la institución.                    |

## 3. Gestión de Roles y Permisos

Una vez creada la institución, debes delegar su administración. El sistema maneja dos niveles de acceso institucional:

* **Owner (Dueño):** Puede crear y gestionar otros administradores, crear insignias y emitirlas.
* **Administrator:** Solo puede crear insignias.

### ¿Cómo vincular a un Owner o Administrador?

1. Navega a la sección de **Organizaciones** y selecciona la entidad.
2. Busca el apartado de **Miembros**.
3. Ingresa el correo electrónico del usuario.
4. Selecciona el nivel de acceso deseado.

> [!CAUTION]
> **Requisito de Sincronización:** El usuario **debe haber iniciado sesión en la plataforma al menos una vez** con su cuenta de Google antes de que puedas asignarle un rol. Si el correo no existe en la base de datos, el sistema no podrá realizar la vinculación.

## 4. Flujo de Identidad

El flujo correcto para dar de alta a un nuevo equipo institucional es:

1. **Login Inicial:** Pide al usuario que ingrese a la plataforma con su cuenta de Google.
2. **Registro Automático:** Al entrar, Quarkus crea su registro en la base de datos.
3. **Asignación:** Tú, como Super Admin, ya puedes buscar ese correo en el panel de la Institución y asignarle su rol.

### 💡 Nota técnica

Este diseño garantiza que, incluso si la base de datos se viera comprometida, nadie podría promoverse a Super Administrador sin tener acceso directo a las variables de entorno del servidor.
