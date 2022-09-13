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
    <!--     <template v-if="adminMode">
      <ul class="menu py-5 px-4 rounded-box flex-1">
        <li class="tooltip" data-tip="Bientôt disponible">
          <NuxtLink :to="`/?view=${$route.query.view}`" :class="isActive('index') ? 'active' : ''">
            <HomeIcon aria-hidden="true" class="w-5 h-5" />Tableau de bord
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/?view=${$route.query.view}`">
            <UsersIcon aria-hidden="true" class="w-5 h-5" />Collaborateurs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/?view=${$route.query.view}`">
            <HeartIcon aria-hidden="true" class="w-5 h-5" />Abondement
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/?view=${$route.query.view}`">
            <CalendarIcon aria-hidden="true" class="w-5 h-5" />Campagne Annuelle
          </NuxtLink>
        </li>
      </ul>

      <div class="font-medium text-sm border-t-2 border-gray-200 pt-4 mx-6">Suivre</div>

      <ul class="menu px-4 py-6 mb-0 rounded-box">
        <li>
          <NuxtLink :to="`/?view=${$route.query.view}`">
            <ClipboardListIcon aria-hidden="true" class="w-5 h-5" />Mes opérations
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/?view=${$route.query.view}`">
            <CogIcon aria-hidden="true" class="w-5 h-5" />Mon dispositif
          </NuxtLink>
        </li>
      </ul>
    </template> -->
<!-- 
    <ul class="menu p-1 py-5 px-4 rounded-box flex-1">
      <li>
        <NuxtLink :to="`/?view=${$route.query.view}`" :class="isActive('index') ? 'active' : ''">
          <HomeIcon aria-hidden="true" class="w-5 h-5" />Tableau de bord
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/?view=${$route.query.view}`">
          <AdjustmentsIcon aria-hidden="true" class="w-5 h-5" />Mon Épargne
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/?view=${$route.query.view}`">
          <CalendarIcon aria-hidden="true" class="w-5 h-5" />Campagne Annuelle
        </NuxtLink>
      </li>
    </ul>

    <div class="font-medium text-sm border-t-2 border-gray-200 pt-4 mx-6">Suivre</div>

    <ul class="menu p-1 px-4 py-6 mb-0 rounded-box">
      <li>
        <NuxtLink :to="`/?view=${$route.query.view}`">
          <ClipboardListIcon aria-hidden="true" class="w-5 h-5" />Mes opérations
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/?view=${$route.query.view}`">
          <CogIcon aria-hidden="true" class="w-5 h-5" />Mon dispositif
        </NuxtLink>
      </li>
    </ul> -->
  </section>
</template>

