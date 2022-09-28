<template>
  <div class="navbar bg-base-100 shadow-ttm-layout px-8 fixed w-[calc(100%-var(--ttm-sidebar-width))]">
    <div class="navbar-start"></div>

    <div class="navbar-end">
      <button class="btn btn-circle btn-ghost">
        <LifebuoyIcon class="w-5 h-5" />
      </button>
      <button class="btn btn-circle btn-ghost">
        <BellIcon class="w-5 h-5" />
      </button>

      <div class="divider divider-horizontal h-8 self-center"></div>

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost normal-case">
          <span class="pr-2">{{ firstName }}</span>
          <ChevronDownIcon class="w-5 h-5" />
        </label>
        <div tabindex="0" class="dropdown-content card card-compact bg-base-100 shadow-lg mt-4 w-60">
          <div class="card-body">
            <ul class="menu menu-compact rounded-box p-1">
              <li v-if="!company">
                <NuxtLink :to="profilUrl"><UserIcon class="w-5 h-5" />Profil</NuxtLink>
              </li>
              <li v-if="!company">
                <NuxtLink :to="companyUrl"><BuildingOfficeIcon class="w-5 h-5" />Espace entreprise</NuxtLink>
              </li>
              <li v-if="company">
                <NuxtLink to="/user"><UserIcon class="w-5 h-5" />Esapce personnel</NuxtLink>
              </li>
              <li>
                <a @click="disconnect()"> <ArrowRightOnRectangleIcon class="w-5 h-5" />Déconnexion </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    company?: boolean
  }>();
  import {
    LifebuoyIcon,
BellIcon,
ArrowRightOnRectangleIcon,
ChevronDownIcon,
BuildingOfficeIcon,
UserIcon,
UserCircleIcon } from '@heroicons/vue/24/outline';

  const currentUser = useCurrentUser();

  const firstName = computed(() => currentUser.value.firstName);

  const { PROFIL: profilUrl, COMPANY_INDEX: companyUrl } = useUrls().value;

  function disconnect() {
    
  }
</script>
