<template>
  <div>
    <SharedContentTitle>
      <template #title>Profil</template>
      <template #subtitle>Ceci est votre profil, prenez en soin ✏️</template>
    </SharedContentTitle>

    <!-- Login & Password -->
    <TheProfilCardConnectionUpdater />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'private-app-layout',
  });
</script>
