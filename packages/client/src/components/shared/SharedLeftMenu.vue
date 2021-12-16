<template>
  <section class="shared-left-menu-component p-8">

    <!-- LOGO -->
    <div class="mb-12">
      <NuxtLink to="/"><img class="ui-picture-component__image" src="~/assets/images/logo.svg" alt="aToteem"/></NuxtLink>
    </div>

    <!-- MAIN MENU -->
    <div>
      <NuxtLink to="/"><UiButton text="Tableau de bord" :isActive="isActive('index')" /></NuxtLink>
      <NuxtLink to="/manage"><UiButton text="Gérer mon épargne" :isActive="isActive('manage')" /></NuxtLink>
      <NuxtLink to="/campaign"><UiButton text="Campagne annuelle" :isActive="isActive('campaign')" /></NuxtLink>
    </div>

    <!-- SECONDARY MENU -->
    <div>
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
