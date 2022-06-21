<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Modifier votre mot de passe ✏️</h2>

      <p class="text-sm my-0.5">
        Entrez deux fois, sans vous tromper, le mot de passe qui vous ferait vraiment trop plaisir et qui respecte les
        consignes de sécurité
      </p>

      <InputsPassword
        v-model:password="newPassword"
        v-model:isValid="passwordIsValid"
        requireConfirmation
        showRequirements
      />
      <div class="form-control mt-6">
        <button @click.prevent="reset" class="btn btn-primary" :disabled="!passwordIsValid">Modifier</button>
      </div>
      <div class="text-center mt-0.5">
        <NuxtLink class="link text-sm" to="/login">Retour au formulaire de connexion</NuxtLink>
      </div>
      <div class="text-success font-medium text-center mt-2" v-if="resetOk">
        Votre mot de passe a bien été modifié 👌
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'login-layout',
  });

  const newPassword = ref<String>('');
  const passwordIsValid = ref<Boolean>(false);
  const resetOk = ref<Boolean>(false);

  function reset() {
    resetOk.value = true;
  }
</script>
