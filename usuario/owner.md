# Manual del Owner: Liderando la Institución

Como **Owner**, tienes la máxima autoridad dentro de tu institución. Eres el encargado de configurar la identidad de la organización, gestionar el equipo de trabajo y supervisar el ciclo completo de las insignias, desde su creación hasta su entrega.

## 1. Gestión del Perfil y Equipo

Tu rol es el único con capacidad para delegar responsabilidades y modificar la identidad pública de la institución.

### Gestión de Personal

Puedes invitar a otros colaboradores para que te ayuden en la plataforma. Para ello, el usuario debe haber iniciado sesión con Google previamente.

* **Añadir Owners:** Puedes promover a otros usuarios a tu mismo nivel para compartir la administración total.
* **Añadir Administrators:** Puedes asignar este rol a colaboradores que solo se encargarán del diseño y definición de las insignias.

> [!IMPORTANT]
> Solo los **Owners** pueden gestionar (añadir o eliminar) a otros miembros del equipo.

## 2. Definición de "Badge Classes" (Insignias)

Una **Badge Class** es la plantilla técnica que define un logro. Tanto Owners como Administrators pueden realizar esta tarea.

* **Imagen:** Arte oficial del logro (PNG/SVG).
* **Criterios:** Markdown con los requisitos para obtener la insignia.
* **Descripción:** Detalle de las habilidades validadas.

> [!IMPORTANT]
> **Imagen:** Formato cuadrado no mayor a 500x500px ni mayor a 2MB.

## 3. Matriz de Permisos

Es vital entender qué puede hacer cada rol para mantener la integridad de la emisión:

| Acción                            | Owner | Administrator |
| --------------------------------- | ----- | ------------- |
| **Gestionar otros Owners/Admins** | ✅     | ❌             |
| **Crear nuevas Badge Classes**    | ✅     | ✅             |
| **Emitir insignias a usuarios**   | ✅     | ❌             |

## 4. El Flujo de Trabajo Recomendado

Para una operación segura, sugerimos este flujo:

1. **El Owner** configura la institución y añade a los **Administrators**.
2. **Los Administrators** dan de alta las diferentes **Badge Classes** (crean las plantillas).
3. **El Owner** supervisa las plantillas creadas y realiza la **Emisión final** a los receptores, asegurando que el "horneado" de la insignia sea correcto.
