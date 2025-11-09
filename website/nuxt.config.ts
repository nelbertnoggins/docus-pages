export default defineNuxtConfig({
  extends: 'docus',
  css: ['~/assets/css/main.css'],
  robots: { 
    robotsTxt: false
  },
  llms:{
    domain: process.env.LLMS_DOMAIN,
  }
})
