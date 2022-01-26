<template>
  <section class="flex flex-row h-full w-full py-4 px-4 items-center justify-center">

    <!-- LEFT PART -->
    <div class="flex flex-row flex-1 items-center justify-end">
      <div class="">
        <NuxtLink to="/help">
          <SupportIcon class="w-5 h-5" />
        </NuxtLink>
      </div>
      <div class="ml-4">
        <BellIcon class="w-5 h-5" />
      </div>
    </div>

    <!-- RIGHT PART -->
    <div class="flex flex-row items-center justify-center border-l-2 border-gray-200 pl-6 ml-6">
      <div class="font-semibold">{{ firstName }}</div>
      <div class="px-2">
        <ChevronDownIcon class="w-5 h-5" />
      </div>
<!--      <div>
        <img class="h-10" src="~/assets/images/icons/profile.svg" alt="Profile" />
      </div>-->
    </div>
  </section>
</template>

<script>
  import { SupportIcon, BellIcon, ChevronDownIcon } from '@heroicons/vue/outline';
  import { useUsersStore } from '~/stores/users';

  export default {
    components: {
      SupportIcon,
      BellIcon,
      ChevronDownIcon,
    },

    data() {
      return {
        store: useUsersStore(),
      };
    },

    computed: {
      firstName() {
        return this.store.getCurrentUserFirstName;
      }
    }
  };
</script>

<style scoped>

</style>
