<template>
  <UiCard>
    <template #title>Modifier mes informations de connexion</template>
    <template #content>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model.trim="email" type="text" placeholder="Email" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mot de passe</span>
        </label>
        <input v-model.trim="password" type="password" placeholder="Mot de passe" class="input input-bordered" />
      </div>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const email = ref('julien.dubois@gmail.com');
  const password = ref('password');

  function save() {}
</script>
