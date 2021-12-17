<template>
  <section class="shared-left-menu-component p-8 h-full flex flex-col">

    <!-- LOGO -->
    <div class="mb-12">
      <NuxtLink to="/"><img class="ui-picture-component__image" src="~/assets/images/logo.svg" alt="aToteem"/></NuxtLink>
    </div>

    <!-- MAIN MENU -->
    <div class="flex-1">
      <NuxtLink to="/"><UiButton text="Tableau de bord" :isActive="isActive('index')" /></NuxtLink>
      <NuxtLink to="/manage"><UiButton text="Gérer mon épargne" :isActive="isActive('manage')" /></NuxtLink>
      <NuxtLink to="/campaign"><UiButton text="Campagne annuelle" :isActive="isActive('campaign')" /></NuxtLink>
    </div>

    <!-- SECONDARY MENU -->
    <div>
      <div class="font-bold text-textSecondary text-sm border-t-1 border-t-textSecondary border-opacity-25 py-4">
        Suivre
      </div>
      <NuxtLink to="/operations"><UiButton text="Mes opérations" :isActive="isActive('operations')" /></NuxtLink>
      <NuxtLink to="/plan"><UiButton text="Mon dispositif" :isActive="isActive('plan')" /></NuxtLink>
    </div>

  </section>
</template>

<script>
  export default {
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
