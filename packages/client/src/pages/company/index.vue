<template>
  <DashboardAdmin v-if="adminMode" />
  <section v-else class="px-8 py-6">
    <h1 class="text-3xl font-medium text-gray-700">Tableau de bord</h1>
    <h2 class="mb-8">Votre tableau de bord est en cours de construction... Revenez bientôt !</h2>
  </section>
</template>

<script>
import { useUsersStore } from '~/stores/users';

export default {

  setup() {

    useMeta({
      htmlAttrs: {
        'data-theme': 'toteem-dark',
      },
    });

    definePageMeta({
      layout: 'company',
    });
  },

  data() {
    return {
      store: useUsersStore(),
    }
  },

  computed: {
    adminMode() {
      return this.store.getCurrentUserView === 'admin';
    },
  },

}
</script>
