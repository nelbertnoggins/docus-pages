export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  robots: { 
    robotsTxt: false 
  },
  llms:{
    domain: process.env.LLMS_DOMAIN,
  }
})
