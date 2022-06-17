<template>
  <section class="grid grid-cols-[var(--ttm-sidebar-width),1fr] grid-rows-[var(--ttm-navbar-height),1fr] min-h-screen">
    <!-- LOGO -->
    <section class="col-start-1 row-start-1 col-span-1 row-span-1 bg-base-100 z-50">
      <div
        class="
          fixed
          bg-base-100
          h-[var(--ttm-navbar-height)]
          w-[var(--ttm-sidebar-width)]
          flex
          items-center
          justify-center
        "
      >
        <NuxtLink :to="`/?view=${$route.query.view}`">
          <img class="w-32 inline-block" src="~/assets/images/logo.svg" alt="Toteem Logo" />
        </NuxtLink>
      </div>
    </section>

    <!-- LEFT MENU -->
    <section class="col-start-1 row-start-2 col-span-1 row-span-1 bg-base-100 z-30">
      <SharedLeftMenu />
    </section>

    <!-- TOP HEADER -->
    <section class="col-start-2 row-start-1 col-span-1 row-span-1 z-40">
      <SharedTopMenu />
    </section>

    <!-- CONTENT -->
    <section class="col-start-2 row-start-2 col-span-1 row-span-1 px-8 py-6">
      <slot />
    </section>
  </section>
</template>

<script setup lang="ts"></script>
<!-- <script>
import axios from 'axios';
import { useUsersStore } from '~/stores/users';

export default {
  async beforeMount() {
    try {
      const apiUrl = this.$config.API_URL;
      const token = useCookie('X-Toteem-Access-Token');
      const response = await axios.get(`${apiUrl}/users/me`, { headers: { 'X-Toteem-Access-Token': token.value } });
      const requestedView = this.$route.query.view;
      const hasAccessToAdmin = response.data.data.hasAccessToAdmin;
      let view = requestedView;

      if (!['user', 'admin'].includes(requestedView)) {
        view = 'user';
      } else if (view === 'admin' && !hasAccessToAdmin) {
        view = 'user';
      }

      if (response.data.message !== 'Ok') {
        this.$router.push('/login');
      } else {
        this.store.setCurrentUserFirstName({ firstName: response.data.data.firstName });
        this.store.setCurrentUserLastName({ lastName: response.data.data.lastName });
        this.store.setCurrentUserView({ view });
        this.store.setCurrentUserHasAccessToAdmin({ hasAccessToAdmin });
        this.$router.push({ query: { view } });
      }

    } catch (e) {
      this.$router.push('/login');
    }
  },

  data() {
    return {
      store: useUsersStore(),
    };
  },

}
</script> -->
