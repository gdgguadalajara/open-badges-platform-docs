# Guía de Contribución

Colaborar en **Open Badges Platform** es una excelente forma de apoyar a la comunidad y mejorar una herramienta diseñada para ser universal y soberana.

Para mantener la coherencia y calidad del proyecto, nos basamos en los documentos oficiales que encontrarás en la raíz de nuestro repositorio:

* **[Guía Detallada de Contribución (CONTRIBUTING.md)](https://github.com/gdgguadalajara/open-badges-platform/blob/main/CONTRIBUTING.md)**
* **[Código de Conducta (CODE_OF_CONDUCT.md)](https://github.com/gdgguadalajara/open-badges-platform/blob/main/CODE_OF_CONDUCT.md)**

## Canales de Comunicación

Cualquier propuesta de mejora o discusión sobre la visión del proyecto debe centralizarse en nuestro grupo oficial:

* **Google Group:** [open-badges-platform](https://groups.google.com/g/open-badges-platform)
* *Uso:* RFCs, anuncios de versiones y coordinación técnica.
* 
## Requisitos para el Desarrollo

La arquitectura está diseñada para ser ligera y de "configuración cero". Para levantar el proyecto en tu entorno local, los requisitos son mínimos:

1. **Java (JDK 17 o superior):** Es el único requisito indispensable. Es el motor que corre Quarkus, procesa las imágenes y gestiona la lógica de las insignias.
2. **Motor de Contenedores (Opcional para desarrollo):** Cualquier herramienta compatible con OCI (**Podman, Docker, Buildah**, etc.). No es necesario para el flujo diario de desarrollo ya que no usamos servicios externos, pero lo necesitarás si deseas generar la imagen final para producción o realizar pruebas de empaquetado.
3. **Node.js (Opcional):** Gracias a la extensión **Quinoa**, Quarkus se encarga de todo lo relacionado con el frontend. No necesitas instalarlo para correr el proyecto, aunque es recomendable tenerlo si planeas realizar tareas manuales de depuración, instalaciones específicas de paquetes vía `npm` o ajustes finos en la configuración de Nuxt 3.

### Persistencia Simple

Para facilitar la portabilidad, el sistema utiliza **SQLite** por defecto. Esto significa que no necesitas levantar contenedores de bases de datos (como PostgreSQL o MySQL) para empezar. Al iniciar el proyecto, se creará automáticamente un archivo local para la persistencia de datos.

## Flujo de Trabajo

1. **Fork y Clona:** Realiza un fork del proyecto y clónalo en tu entorno.
2. **Modo Desarrollo:** Ejecuta `./gradlew quarkusDev -Dvertx.disableURIValidation=true`. Quarkus iniciará el backend y orquestará el levantamiento del frontend mediante Quinoa.
4. **Pull Request:** Envía tu PR hacia la rama `dev` del repositorio original y notifícalo en el Google Group para su revisión.

## Filosofía de Diseño: Agnosticismo Técnico

Buscamos que la plataforma sea lo más ligera y portable posible. Cualquier servicio adicional debe poder orquestarse mediante contenedores, asegurando que el despliegue sea idéntico sin importar la infraestructura final.


### 💡 Nota sobre Quinoa

Quinoa nos permite empaquetar el frontend y el backend en un solo artefacto. Esto simplifica radicalmente el despliegue para cualquier institución, eliminando la necesidad de configurar servidores de archivos estáticos y proxies inversos complejos para el frontend por separado.
