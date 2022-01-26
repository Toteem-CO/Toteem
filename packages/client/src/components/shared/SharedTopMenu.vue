<template>
  <section class="flex flex-row h-full w-full py-4 px-8 items-center justify-center text-textSecondary">

    <!-- LEFT PART -->
    <div class="flex flex-row flex-1 items-center justify-end">
      <div class="">
        <NuxtLink to="/help"><img class="h-1.25rem text-textSecondary" src="~/assets/images/icons/help.svg" alt="Help" /></NuxtLink>
      </div>
      <div class="ml-4">
        <img class="h-1.25rem" src="~/assets/images/icons/bell.svg" alt="Bell" />
      </div>
    </div>

    <!-- RIGHT PART -->
    <div class="flex flex-row items-center justify-center border-l-1 border-l-textSecondary border-opacity-25 pl-6 ml-6">
      <div class="font-semibold">{{ firstName }}</div>
      <div class="px-2"><img class="h-1.2rem pt-1" src="~/assets/images/icons/arrow-down.svg" alt="ArrowDown" /></div>
      <div>
        <img class="h-2.5rem" src="~/assets/images/icons/profile.svg" alt="Profile" />
      </div>
    </div>
  </section>
</template>

<script>
  import { useUsersStore } from '~/stores/users';

  export default {

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
