export default defineAppConfig({
  socials: {
    nuxt: 'https://nuxt.com',
  },
  github: {
    rootDir: 'website',
  },
  toc: {
    bottom: {
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui.nuxt.com/getting-started/installation/nuxt',
        target: '_blank',
      }],
    },
  },
  ui: {
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})
