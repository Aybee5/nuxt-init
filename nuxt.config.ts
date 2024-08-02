// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    "/test/csr": { ssr: false },
    "/test/isr": { isr: 60 },
    "/test/ssg": { prerender: true },
    // "/test/ssr": { ssr: true },
    "/test/swr": { swr: true },
  },
})
