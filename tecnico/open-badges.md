# El Estándar Open Badges

Una insignia digital en esta plataforma no es un simple archivo gráfico; es un **contenedor de datos verificables**. Nos adherimos al estándar **Open Badges**, lo que permite que las insignias emitidas sean portables y reconocidas por cualquier "mochila digital" (backpack) o validador externo.

## 1. La Anatomía de una Insignia

El estándar se basa en tres componentes principales interconectados mediante **JSON-LD**:

| Componente                 | Descripción                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| **Issuer (Emisor)**        | La entidad que otorga la insignia (ej. GDG Guadalajara).                                        |
| **BadgeClass**             | La definición del logro (Nombre, descripción, criterios e imagen).                              |
| **Assertion (Afirmación)** | La prueba individual de que una persona específica obtuvo la insignia en una fecha determinada. |

## 2. La "Assertion": El Corazón de la Prueba

Cuando el sistema emite una insignia, genera un objeto JSON-LD que vincula al receptor con el logro. Un ejemplo simplificado de lo que nuestro backend procesa es:

```json
{
  "@context": "https://w3id.org/openbadges/v2",
  "type": "Assertion",
  "id": "urn:uuid",
  "recipient": {
    "type": "email",
    "hashed": false,
    "identity": "dev@gdgguadalajara.com"
  },
  "issuedOn": "1970-01-01T00:00:00Z",
  "badge": "urn:uuid",
  "verification": {
    "type": "HostedBadge"
  }
}
```

## 3. El Proceso de "Baking" (Horneado)

El "horneado" es el proceso técnico de inyectar la **Assertion** directamente en los metadatos de la imagen. Esto permite que la imagen "cargue" su propia certificación.

### En archivos PNG

Utilizamos los fragmentos de metadatos (chunks) del estándar PNG.

* Se inyecta un bloque tipo `tEXt`.
* La clave utilizada es `openbadges:assertion`.
* El valor es el JSON completo de la Assertion.

### En archivos SVG

Dado que el SVG es XML, el proceso es más limpio y legible:

* Inyectamos una etiqueta `<openbadges:assertion>` al inicio del documento.
* Usamos el tipo de contenido `JSON-LD`.
* Esto garantiza que la imagen siga siendo escalable y que los validadores puedan leer el DOM para extraer la prueba.

> [!IMPORTANT]
> Al descargar la imagen, el usuario se lleva consigo la prueba de autenticidad. Si se eliminan los metadatos (por ejemplo, al procesar la imagen con una herramienta de compresión agresiva), la insignia pierde su validez técnica.

## 4. Verificación y Portabilidad

Gracias a que respetamos el estándar OpenBadges, cualquier usuario puede tomar su imagen `.png` o `.svg` y subirla a plataformas como:

* **Badgr / Canvas Badges**
* **Open Badge Validator**
* **Mochilas digitales personalizadas**

El verificador leerá los metadatos, consultará la URL del emisor y confirmará que la insignia es legítima y no ha sido alterada.

## 5. Implementación en el Código

En nuestro backend de **Quarkus**, la lógica de horneado está centralizada para asegurar que, sin importar el formato de origen, el resultado final cumpla con las especificaciones de la **IMS Global Learning Consortium**.

## 📚 Recursos y Enlaces Oficiales

Aquí están las referencias directas al estándar para quienes quieran profundizar en la especificación técnica:

* **[1EdTech (Anteriormente IMS Global)](https://www.1edtech.org/standards/openbadges):** Los custodios actuales del estándar Open Badges. Aquí es donde vive la documentación oficial más reciente.
* **[Especificación de Open Badges](https://www.imsglobal.org/spec/clr/v2p0/):** El documento técnico detallado que seguimos para la implementación de nuestras *Assertions* y el proceso de *baking*.
* **[Open Badge Validator](https://validator.openbadges.org/):** La herramienta de referencia para comprobar si las insignias que "horneamos" en Quarkus cumplen con todas las reglas del estándar.
* **[W3C JSON-LD](https://json-ld.org/):** Para entender la magia de los contextos (`@context`) que usamos en nuestros archivos SVG.