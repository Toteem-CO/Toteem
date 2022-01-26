<template>
  <section class="shared-left-menu-component py-4 px-6 h-full flex flex-col bg-white">

    <!-- LOGO -->
    <div class="mb-6 mt-4 pl-1.5">
      <NuxtLink to="/">
        <img class="w-36" src="~/assets/images/logo.svg" alt="aToteem"/>
      </NuxtLink>
    </div>

    <!-- MAIN MENU -->
    <div class="flex-1">
      <NuxtLink to="/">
        <UiButton text="Tableau de bord" :isActive="isActive('index')">
          <HomeIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>
      <NuxtLink to="/manage">
        <UiButton text="Gérer mon épargne" :isActive="isActive('manage')">
          <AdjustmentsIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>
      <NuxtLink to="/campaign">
        <UiButton text="Campagne annuelle" :isActive="isActive('campaign')">
          <CalendarIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>
    </div>

    <!-- SECONDARY MENU -->
    <div>
      <div class="font-bold text-sm border-t-2 border-gray-200 py-4">
        Suivre
      </div>
      <NuxtLink to="/operations">
        <UiButton text="Mes opérations" :isActive="isActive('operations')">
          <ClipboardListIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>
      <NuxtLink to="/plan">
        <UiButton text="Mon dispositif" :isActive="isActive('plan')">
          <CogIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>
    </div>

  </section>
</template>

<script>
  import { HomeIcon, AdjustmentsIcon, CalendarIcon, CogIcon, ClipboardListIcon } from '@heroicons/vue/outline';

  export default {
    components: {
      HomeIcon,
      AdjustmentsIcon,
      CalendarIcon,
      CogIcon,
      ClipboardListIcon,
    },
    methods: {
      isActive(name) {
        return this.$route.name === name;
      }
    }
  }
</script>

<style scoped>
  .shared-left-menu-component {

  }
</style>
