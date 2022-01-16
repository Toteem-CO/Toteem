<template>
  <section class="toteem-layout h-screen w-screen grid grid-cols-[15rem,1fr] grid-rows-[2rem,1fr]">

    <!-- LEFT MENU -->
    <section class="col-start-1 row-start-1 col-span-1 row-span-2 bg-background z-50 shadow-2xl">
      <SharedLeftMenu />
    </section>

    <!-- TOP HEADER -->
    <section class="col-start-2 row-start-1 col-span-1 row-span-1 bg-background">
      Top Header
    </section>

    <!-- CONTENT -->
    <section class="col-start-2 row-start-1 col-span-1 row-span-2 bg-background shadow-xl pt-2rem">
      <slot />
    </section>

  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    async beforeMount() {
      try {
        const apiUrl = this.$config.API_URL;
        const token = document.cookie.split('toteemToken=').pop();
        const response = await axios.get(`${apiUrl}/users/me`, { headers: { 'X-Toteem-Access-Token': token } });

        if (response.data.message !== 'Ok') {
          this.$router.push('/signin');
        }

      } catch (e) {
        this.$router.push('/signin');
      }
    }

  }
</script>

<style scoped>
  .toteem-layout {

  }
</style>
