import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Open Badges Platform",
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
      alt: 'Open Badges Platform'
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Manuales', link: '/usuario/super-admin' },
      { text: 'Arquitectura', link: '/tecnico/arquitectura' },
      { text: 'Comunidad', link: '/comunidad/mision' }
    ],

    sidebar: [
      {
        text: 'Guías de Usuario',
        collapsed: false,
        items: [
          { text: 'Super Administrador', link: '/usuario/super-admin' },
          { text: 'Owner de Institución', link: '/usuario/owner' },
          { text: 'Emisión de Insignias', link: '/usuario/emision' },
          { text: 'Guía del Receptor', link: '/usuario/receptor' },
        ]
      },
      {
        text: 'Documentación Técnica',
        collapsed: true,
        items: [
          { text: 'Arquitectura del Sistema', link: '/tecnico/arquitectura' },
          { text: 'Estándar Open Badges', link: '/tecnico/open-badges' },
          { text: 'Guía de Despliegue', link: '/tecnico/despliegue' },
          { text: 'Glosario de Términos', link: '/tecnico/glosario' },
        ]
      },
      {
        text: 'La Comunidad',
        collapsed: true,
        items: [
          { text: 'Misión del Proyecto', link: '/comunidad/mision' },
          { text: 'Cómo contribuir', link: '/comunidad/contribuir' },
          { text: 'Preguntas Frecuentes', link: '/comunidad/faq' },
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
      copyright: '<a href="https://gdgguadalajara.com" target="_blank">Hecho con 💙 por la comunidad de GDG Guadalajara</a>'
    },

    search: {
      provider: 'local'
    }
  }
})
