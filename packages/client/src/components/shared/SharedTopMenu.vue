<template>
  <div class="navbar px-8 border-b-base-300 border-b bg-base-100 fixed">
    <div class="navbar-start"></div>

    <div class="navbar-end">
      <button class="btn btn-circle btn-ghost">
        <SupportIcon class="w-5 h-5" />
      </button>
      <button class="btn btn-circle btn-ghost">
        <BellIcon class="w-5 h-5" />
      </button>

      <div class="divider divider-horizontal h-8 self-center"></div>

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost normal-case">
          <span class="pr-2">{{ currentUser.firstName }}</span>
          <ChevronDownIcon class="w-5 h-5" />
        </label>
        <div tabindex="0" class="dropdown-content card card-compact bg-base-100 shadow-lg mt-4 w-56">
          <div class="card-body">
            <ul class="menu menu-compact rounded-box p-1">
              <li><a>
                  <UserIcon class="w-5 h-5" />Profil
                </a></li>
              <li><a @click="disconnect()">
                  <LogoutIcon class="w-5 h-5" />Déconnexion
                </a></li>
            </ul>
            <template v-if="hasAccessToAdmin">
              <div class="divider m-0"></div>
              <div class="form-control p-2">
                <label class="label cursor-pointer">
                  <span class="label-text">Vue Entreprise</span>
                  <input type="checkbox" class="toggle toggle-primary" v-model="adminMode">
                </label>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentUser = useCurrentUser();
</script>

<script lang="ts">
import { SupportIcon, BellIcon, ChevronDownIcon, UserIcon, LogoutIcon } from '@heroicons/vue/outline';
import { useUsersStore } from '~/stores/users';
import { useCurrentUser } from '../../composables/stores/users';

export default {
  components: { SupportIcon, BellIcon, ChevronDownIcon, UserIcon, LogoutIcon },

  data() {
    return {
      store: useUsersStore(),
    };
  },

  computed: {
    firstName() {
      return this.store.getCurrentUserFirstName;
    },
    lastName() {
      return this.store.getCurrentUserLastName;
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
      document.cookie = `X-Toteem-Access-Token=noop; max-age=0`;
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
</style>
