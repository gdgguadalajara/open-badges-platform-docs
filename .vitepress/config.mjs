import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "Open Badges Platfom",
    description: "Documentación oficial de la plataforma de insignias digitales",
    lang: 'es-MX',
    appearance: true,
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
      ['meta', { name: 'theme-color', content: '#0082ce' }]
    ],

    themeConfig: {
      logo: {
        light: 'favicon.png',
        dark: 'favicon.png',
        alt: 'Open Badges Platfom'
      },

      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Arquitectura', link: '/tecnico/arquitectura' },
        { text: 'Comunidad', link: '/comunidad/mision' }
      ],

      sidebar: [
        {
          text: 'La Comunidad',
          collapsed: false,
          items: [
            { text: 'Misión del Proyecto', link: '/comunidad/mision' },
            { text: 'Cómo contribuir', link: '/comunidad/contribuir' },
            { text: 'Preguntas Frecuentes', link: '/comunidad/faq' },
          ]
        },
        {
          text: 'Documentación Técnica',
          collapsed: false,
          items: [
            { text: 'Arquitectura del Sistema', link: '/tecnico/arquitectura' },
            { text: 'Estándar Open Badges', link: '/tecnico/open-badges' },
            { text: 'Guía de Despliegue', link: '/tecnico/despliegue' },
            { text: 'Glosario de Términos', link: '/tecnico/glosario' },
          ]
        }
      ],

      editLink: {
        pattern: 'https://github.com/gdgguadalajara/open-badges-platform-docs/edit/main/:path',
        text: 'Sugerir un cambio para esta página'
      },

      lastUpdated: {
        text: 'Actualizado el',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'short'
        }
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/gdgguadalajara/open-badges-platform' }
      ],

      footer: {
        message: 'Liberado bajo la licencia AGPL-3.0.',
        copyright: '<a href="https://gdgguadalajara.com">Hecho con 💙 por la comunidad de GDG Guadalajara</a>'
      },

      search: {
        provider: 'local'
      }
    },

    mermaid: {
    }
  })
)