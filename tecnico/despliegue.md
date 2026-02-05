# Guía de Despliegue

> [!IMPORTANT]
> **Disclaimer de Distribución:** Este proyecto se distribuye exclusivamente como **código fuente**. No se proporcionan binarios pre-compilados ni imágenes oficiales en registros públicos. Cada institución es responsable de compilar, construir y asegurar su propia instancia para garantizar la integridad del proceso de "horneado" de insignias.

El despliegue se basa en una arquitectura de **compilación nativa**, lo que permite que el servicio sea extremadamente ligero y rápido, ideal para entornos donde la eficiencia de recursos es una prioridad.

## 🏗️ Proceso de Construcción (Build)

Para generar el artefacto final, el sistema utiliza **Quarkus** en modo nativo. Esto genera un ejecutable binario que no requiere de una JVM externa dentro del contenedor, reduciendo la superficie de ataque y el consumo de memoria.

### Requisitos previos

* JDK 17 o superior.
* Motor de contenedores compatible con OCI (**Podman** o **Docker**).
* Acceso a internet para la descarga de dependencias (Gradle y npm).

### Script de compilación recomendado

El siguiente flujo automatiza la limpieza, la compilación nativa (dentro de un contenedor para asegurar paridad de entorno) y el empaquetado de la imagen:

#### 1. Compilación Nativa (Frontend integrado vía Quinoa)
```bash
./gradlew clean build -Dquarkus.package.type=native -Dquarkus.native.container-build=true -x test
```

#### 2. Construcción de la imagen de contenedor (Micro-image)
```bash
podman build \
    -f src/main/docker/Dockerfile.native-micro \
    -t quarkus/open-badges-platform:latest .
```

## ⚙️ Configuración vía Variables de Entorno

Aunque el proyecto incluye un archivo `application.properties` base, **no debe ser modificado directamente**. La plataforma está diseñada para ser configurada íntegramente mediante variables de entorno (ENVs), lo que facilita el despliegue en cualquier orquestador.

| Variable de Entorno                                             | Descripción                                             | Ejemplo / Valor                   |
| --------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------- |
| `COM_GDGGUADALAJARA_OPEN_BADGES_PLATFORM_DOMAIN`                | URL pública de la plataforma.                           | `https://badges.tu-comunidad.com` |
| `COM_GDGGUADALAJARA_OPEN_BADGES_PLATFORM_SECURITY_SUPER_ADMINS` | Lista de correos (separados por coma) con acceso admin. | `admin@gdg.com,dev@gdg.com`       |
| `QUARKUS_OIDC_CLIENT_ID`                                        | Identificador de cliente de Google Cloud.               | `...apps.googleusercontent.com`   |
| `QUARKUS_OIDC_CREDENTIALS_SECRET`                               | Secreto del cliente de Google Cloud.                    | `GOCSPX-...`                      |
| `RESEND_API_KEY`                                                | API Key de Resend para el envío de correos.             | `re_123456789...`                 |
| `RESEND_FROM`                                                   | Correo remitente autorizado en Resend.                  | `no-reply@tu-dominio.com`         |

## 📦 Orquestación (Compose)

El despliegue se recomienda mediante un archivo de definición de servicios que asegure la persistencia y la red correcta.

### Persistencia (SQLite)

Es vital montar el volumen de datos correctamente. El archivo de base de datos vive en `/work/data`. Si usas sistemas con SELinux activo (como Fedora o RHEL), recuerda usar el sufijo `:Z`.

```yaml
services:
  open-badges-platform:
    image: localhost/quarkus/open-badges-platform:latest
    container_name: open-badges-platform
    restart: unless-stopped
    volumes:
      - ./data:/work/data:Z
    environment:
      - COM_GDGGUADALAJARA_OPEN_BADGES_PLATFORM_DOMAIN=https://tus-badges.com
      - COM_GDGGUADALAJARA_OPEN_BADGES_PLATFORM_SECURITY_SUPER_ADMINS=lider@comunidad.com
      - QUARKUS_OIDC_CLIENT_ID=TU_CLIENT_ID
      - QUARKUS_OIDC_CREDENTIALS_SECRET=TU_SECRET
      - RESEND_API_KEY=re_TU_KEY
      - RESEND_FROM=badges@tu-dominio.com

```

## 🛡️ Notas de Seguridad en Producción

1. **Proxy Inverso:** Se asume que la plataforma corre detrás de un Proxy Inverso (Traefik, Nginx o Caddy) que gestione el SSL/TLS. Las propiedades de `proxy-address-forwarding` ya están habilitadas en el código base.
2. **HSTS:** La redirección forzada a HTTPS está activa por defecto en el perfil de producción.
3. **Base de Datos:** SQLite es ideal para la mayoría de las comunidades, pero asegúrate de incluir la carpeta `./data` en tus políticas de respaldo (backups).
