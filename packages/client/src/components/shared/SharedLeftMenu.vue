<template>
  <section
    class="
      shared-left-menu-component
      h-[calc(100%-var(--ttm-navbar-height))]
      fixed
      flex flex-col
      bg-base-100
      shadow-ttm-layout
    "
  >
     <template v-if="company">
      <ul class="menu rounded-box flex-1 p-2 py-5 px-4">
        <li>
          <NuxtLink to="/company" class="active">
            <HomeIcon aria-hidden="true" class="w-5 h-5" />Tableau de bord
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/company">
            <UsersIcon aria-hidden="true" class="w-5 h-5" />Collaborateurs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/company">
            <HeartIcon aria-hidden="true" class="w-5 h-5" />Abondement
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/company">
            <CalendarIcon aria-hidden="true" class="w-5 h-5" />Campagne Annuelle
          </NuxtLink>
        </li>
      </ul>

      <div class="font-medium text-sm border-t-2 border-gray-200 pt-4 mx-6">Suivre</div>

      <ul class="menu mb-0 rounded-box p-2 px-4 py-6">
        <li>
          <NuxtLink to="/company">
            <ClipboardIcon aria-hidden="true" class="w-5 h-5" />Mes opérations
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/company">
            <CogIcon aria-hidden="true" class="w-5 h-5" />Mon dispositif
          </NuxtLink>
        </li>
      </ul>
    </template>

    <template v-else>
      <ul class="menu p-1 py-5 px-4 rounded-box flex-1">
      <li>
        <NuxtLink to="/user" class="active">
          <HomeIcon aria-hidden="true" class="w-5 h-5" />Tableau de bord
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">
          <AdjustmentsVerticalIcon aria-hidden="true" class="w-5 h-5" />Mon Épargne
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">
          <CalendarIcon aria-hidden="true" class="w-5 h-5" />Campagne Annuelle
        </NuxtLink>
      </li>
    </ul>

    <div class="font-medium text-sm border-t-2 border-gray-200 pt-4 mx-6">Suivre</div>

    <ul class="menu p-1 px-4 py-6 mb-0 rounded-box">
      <li>
        <NuxtLink to="/user">
          <ClipboardIcon aria-hidden="true" class="w-5 h-5" />Mes opérations
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">
          <CogIcon aria-hidden="true" class="w-5 h-5" />Mon dispositif
        </NuxtLink>
      </li>
    </ul>
    </template>

  </section>
</template>

<script setup lang="ts">
  import { HomeIcon,
UsersIcon,
HeartIcon,
CalendarIcon,
ClipboardIcon,
CogIcon,
AdjustmentsVerticalIcon,
 } from '@heroicons/vue/24/outline';
  defineProps<{
    company?: boolean
  }>();
</script>