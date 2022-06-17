<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Modifier votre mot de passe ✏️</h2>
      <!--       <p class="text-sm my-0.5">


        Entrez deux fois, sans vous tromper, le mot de passe qui vous ferait vraiment trop plaisir et qui respecte les
        consignes de sécurité
      </p>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Nouveau mot de passe</span>
        </label>
        <input
          v-model.trim="newPassword"
          type="password"
          placeholder="Nouveau mot de passe"
          required
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Nouveau mot de passe, encore !</span>
        </label>
        <input
          v-model.trim="newPasswordConfirmation"
          type="password"
          placeholder="Confirmez votre nouveau mot de passe"
          required
          class="input input-bordered"
        />
      </div>

      <ul class="mt-4 list-none">
        <li class="flex items-center">
          Au moins 8 caractères <XIcon class="ml-2 h-6 text-error" v-if="!countCharsOK" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
        <li class="flex items-center">
          Au moins une lettre minuscule<XIcon class="ml-2 h-6 text-error" v-if="!countLowerCharsOK" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
        <li class="flex items-center">
          Au moins une lettre majuscule<XIcon class="ml-2 h-6 text-error" v-if="!countUpperCharsOK" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
        <li class="flex items-center">
          Au moins un chiffre<XIcon class="ml-2 h-6 text-error" v-if="!countNumbersOK" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
        <li class="flex items-center">
          Au moins un caractère spécial<XIcon class="ml-2 h-6 text-error" v-if="!countSpecialCharsOK" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
        <li class="flex items-center">
          Confirmation du mot de passe<XIcon class="ml-2 h-6 text-error" v-if="!passwordAndConfirmationAreTheSame" />
          <CheckIcon class="ml-2 h-6 text-success" v-else />
        </li>
      </ul> -->

      <!--       <CommonPasswordUpdated showRequirements needConfirmation>
        <template #subtitle>Va niquer ta mère</template>
      </CommonPasswordUpdated> -->
      <div class="form-control mt-6">
        <button @click.prevent="reset" class="btn btn-primary" :disabled="!canReset">Modifier</button>
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
  import { XIcon, CheckIcon } from '@heroicons/vue/outline';
  import { __PasswordRegex } from '@toteem/shared/constants/index.js';

  definePageMeta({
    layout: 'login-layout',
  });

  const newPassword = ref<String>('');
  const canUpdate = ref<Boolean>(false);

  const newPasswordConfirmation = ref<String>('');
  const resetOk = ref<Boolean>(false);

  const countCharsOK = computed(() => newPassword.value.length >= 8);
  const countLowerCharsOK = computed(() => newPassword.value.match(/[a-z]/));
  const countUpperCharsOK = computed(() => newPassword.value.match(/[A-Z]/));
  const countNumbersOK = computed(() => newPassword.value.match(/[0-9]/));
  const countSpecialCharsOK = computed(() => newPassword.value.match(/[^A-Za-z0-9]/));
  const passwordAndConfirmationAreTheSame = computed(() => newPassword.value === newPasswordConfirmation.value);
  const canReset = computed(
    () => new RegExp(__PasswordRegex).test(newPassword.value) && passwordAndConfirmationAreTheSame.value
  );

  function reset() {
    resetOk.value = true;
  }
</script>
