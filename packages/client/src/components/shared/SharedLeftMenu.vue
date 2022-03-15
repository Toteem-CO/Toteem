<template>
  <section class="shared-left-menu-component h-full w-[15rem] fixed flex flex-col bg-white">

    <!-- LOGO -->
    <div class="my-7 px-6">
      <NuxtLink :to="`/?view=${$route.query.view}`">
        <img class="w-32 inline-block" src="~/assets/images/logo.svg" alt="Toteem Logo"/>
      </NuxtLink>
    </div>

    <!-- MAIN MENU -->
    <div class="flex-1">
      <NuxtLink :to="`/?view=${$route.query.view}`">
        <UiButton text="Tableau de bord" :isActive="isActive('index')" class="px-6">
          <HomeIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </NuxtLink>

      <div to="/collaborators" class="has-tooltip" v-if="adminMode">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <UiButton text="Collaborateurs" :isActive="isActive('collaborators')" class="px-6">
          <UsersIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>
      <div to="/contribution" class="has-tooltip" v-if="adminMode">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <UiButton text="Abondement" :isActive="isActive('contribution')" class="px-6">
          <HeartIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>
      <div to="/manage" class="has-tooltip" v-if="!adminMode">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <UiButton text="Gérer mon épargne" :isActive="isActive('manage')" class="px-6">
          <AdjustmentsIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>

      <div to="/campaign" class="has-tooltip">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <UiButton text="Campagne annuelle" :isActive="isActive('campaign')" class="px-6">
          <CalendarIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>
    </div>

    <!-- SECONDARY MENU -->
    <div class="my-6">
      <div class="font-bold text-sm border-t-2 border-gray-200 py-4 mx-6">
        Suivre
      </div>
      <div to="/operations" class="has-tooltip">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <UiButton text="Mes opérations" :isActive="isActive('operations')" class="px-6">
          <ClipboardListIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>
      <div to="/plan" class="has-tooltip">
        <span class="tooltip tooltip-top">Bientôt Disponible !</span>
        <UiButton text="Mon dispositif" :isActive="isActive('plan')" class="px-6">
          <CogIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        </UiButton>
      </div>
    </div>

  </section>
</template>

<script>
  import { HomeIcon, AdjustmentsIcon, CalendarIcon, CogIcon, ClipboardListIcon, UsersIcon, HeartIcon } from '@heroicons/vue/outline';
  //import { useUsersStore } from '~/stores/users';

  export default {
    components: {
      HomeIcon,
      AdjustmentsIcon,
      CalendarIcon,
      CogIcon,
      ClipboardListIcon,
      UsersIcon,
      HeartIcon,
    },

    data() {
      return {
        //store: useUsersStore(),
      };
    },

    computed: {
      adminMode() {
        //return this.store.getCurrentUserView === 'admin';
      }
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
