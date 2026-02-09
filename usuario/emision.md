# Manual de Emisión: Entregando Reconocimientos

La emisión es el proceso técnico donde vinculamos una **Badge Class** (plantilla) con la identidad de un **Receptor**. En este paso, el sistema genera una firma digital única y la incrusta dentro de la imagen, siguiendo el estándar Open Badges 2.0.

> [!IMPORTANT]
> **Permiso Requerido:** Solo los usuarios con rol de **Owner** pueden realizar emisiones. Si eres Administrator y necesitas emitir una insignia, solicita a tu Owner que eleve tu rango o realice la acción por ti.

## 1. Emisión

Este es el método principal para otorgar reconocimientos. Permite emitir una insignia a una o varias personas simultáneamente compartiendo los mismos criterios de validación.

### Pasos para emitir:

1. **Selección:** Navega a la sección de tu Institución y selecciona la **Badge Class** (insignia) que deseas otorgar.
2. **Acceso:** Si posees el rol de **Owner**, verás habilitado el botón **"Emitir Insignia"**.
3. **Destinatarios:** En el campo de correos, ingresa las direcciones de los receptores.
* **Formato:** Deben estar separados por **comas** (ej: `user1@gmail.com,user2@gmail.com`).


4. **Evidencia (Opcional):** Puedes agregar un texto o enlace en el campo de evidencia para respaldar el otorgamiento.

> [!CAUTION]
> El campo de evidencia es **global**. Esto significa que el texto o enlace que pongas se adjuntará de forma idéntica a **cada una** de las insignias emitidas en ese lote. No utilices este campo para información personalizada (como nombres de proyectos individuales) si estás enviando a múltiples correos a la vez.

## 2. El Proceso de "Baking" (Horneado)

Una vez que confirmas la emisión, el sistema realiza tres acciones críticas:

1. **Generación de Assertions:** Crea un archivo JSON-LD con los datos del receptor.
2. **Baking:** Inserta los metadatos dentro de los fragmentos (chunks) de la imagen (PNG o SVG).

Esto garantiza que, si el usuario descarga la imagen y la sube a otro portal (como LinkedIn o un Backpack), la imagen **"sepa quién es su dueño"** y quién la emitió.

## 3. Notificación al Receptor

Inmediatamente después de la emisión, el sistema utiliza el servicio de correo (Resend) para enviar un mensaje al receptor.

* El correo incluye una previsualización de la insignia.
* Contiene un enlace único para que el usuario pueda visualizar su insignia en la plataforma y descargar el archivo "horneado".

## 4. Gestión de Insignias Emitidas

Como Owner, puedes supervisar las insignias entregadas desde el panel de la Institución:

* **Revocación:** En casos excepcionales (error en los datos o falta de mérito), puedes invalidar una insignia. Una vez revocada, cualquier verificador externo la marcará como "No Válida".
