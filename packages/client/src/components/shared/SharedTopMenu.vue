<template>
  <section class="flex flex-row h-full w-full py-4 px-8 items-center justify-center">

    <!-- LEFT PART -->
    <div class="flex flex-row flex-1 items-center justify-end">
      <div class="has-tooltip">
        <span class="tooltip tooltip-bottom"> Bientôt Disponible !</span>
        <SupportIcon class="w-5 h-5" />
      </div>
      <div class="ml-4 has-tooltip">
        <span class="tooltip tooltip-bottom">Bientôt Disponible !</span>
        <BellIcon class="w-5 h-5" />
      </div>
    </div>

    <!-- RIGHT PART -->
    <div class="flex flex-row items-center justify-center border-l-2 border-gray-200 pl-6 ml-6">
      <Popover class="relative">
        <PopoverButton class="flex flex-row items-center">
          <div class="font-semibold">{{ firstName }}</div>
          <div class="pl-2"><ChevronDownIcon class="w-5 h-5" /></div>
        </PopoverButton>

        <PopoverPanel class="absolute z-50 flex flex-col right-0 top-10 bg-gray-50 rounded-lg shadow-[0_0_12px_-2px_rgb(0,0,0,0.25)] ring-black ring-opacity-5 w-72">
          <div class="flex-1 flex flex-col p-6">
            <div class="flex items-center mb-2 has-tooltip">
              <span class="tooltip tooltip-bottom tooltip-arrow-left">Bientôt Disponible !</span>
              <UserIcon class="w-5 h-5 mr-2" />Profil
            </div>
            <a href="" class="flex items-center" @click="disconnect()"><LogoutIcon class="w-5 h-5 mr-2" />Déconnexion</a>
          </div>

          <div v-if="hasAccessToAdmin" class="bg-gray-100 border-t-2 p-6 rounded-br-lg rounded-bl-lg">
            <SwitchGroup>
              <div class="flex items-center">
                <SwitchLabel class="mr-4 flex items-center cursor-pointer"><UserGroupIcon class="w-5 h-5 mr-2" />Mode Administrateur</SwitchLabel>
                <Switch
                  v-model="adminMode"
                  :class='adminMode ? "bg-[#5a4fcf]" : "bg-violet-100"'
                  class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-0"
                >
                  <span
                    :class='adminMode ? "translate-x-6" : "translate-x-1"'
                    class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
                  />
                </Switch>
              </div>
            </SwitchGroup>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  </section>
</template>

<script>
  import { SupportIcon, BellIcon, ChevronDownIcon, UserIcon, LogoutIcon, UserGroupIcon } from '@heroicons/vue/outline';
  import { Popover, PopoverButton, PopoverPanel, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import { useUsersStore } from '~/stores/users';

  export default {
    components: {
      SupportIcon,
      BellIcon,
      ChevronDownIcon,
      UserIcon,
      LogoutIcon,
      UserGroupIcon,
      Popover,
      PopoverButton,
      PopoverPanel,
      Switch,
      SwitchGroup,
      SwitchLabel,
    },

    data() {
      return {
        store: useUsersStore(),
      };
    },

    computed: {
      firstName() {
        return this.store.getCurrentUserFirstName;
      },
      hasAccessToAdmin() {
        return this.store.getCurrentUserHasAccessToAdmin;
      },
      adminMode: {
        get() {
          return this.store.getCurrentUserView === 'admin';
        },
        set(newValue) {
          const view = !!newValue ? 'admin' : 'user';
          this.store.setCurrentUserView({ view });
          this.$router.push({ query: { view } });
        }
      }
    },

    methods: {
      disconnect() {
        document.cookie = `toteemToken=noop; max-age=0`;
        this.$router.push('/signin');
      }
    }
  };
</script>

<style scoped>

</style>
