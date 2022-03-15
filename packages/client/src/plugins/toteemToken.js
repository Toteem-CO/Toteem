
export default defineNuxtPlugin(() => {
  return {
    provide: {
      setToteemToken: (value) => {
        document.cookie = `X-Toteem-Access-Token=${value}; max-age=${60 * 60 * 24 * 365}`;
      }
    }
  }
})
