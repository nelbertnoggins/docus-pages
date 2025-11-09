export default defineNuxtConfig({
  extends: 'docus',
  llms:{
    domain: process.env.LLMS_DOMAIN,
  }
})
