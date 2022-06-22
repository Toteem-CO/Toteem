<template>
  <UiCard>
    <template #title><IconsAuthentication class="h-10 w-10 mr-2" />Modifier mes informations de connexion</template>
    <template #content>
      <div class="flex items-start justify-start">
        <UiCardBlock class="flex-1">
          <template #title>Modifier mon email 📧</template>
          <template #content>
            <InputsEmail v-model:email="newEmail" v-model:isValid="emailValid" showRequirements />
          </template>
        </UiCardBlock>

        <div class="divider divider-horizontal"></div>

        <UiCardBlock class="flex-1">
          <template #title>Modifier mon mot de passe 🔑</template>
          <template #content>
            <InputsPassword
              v-model:password="newPassword"
              v-model:isValid="passwordIsValid"
              requireConfirmation
              showRequirements
            />
          </template>
        </UiCardBlock>
      </div>
    </template>

    <template #actions>
      <button class="btn btn-primary btn-wide" :disabled="!canSave" @click="togglePasswordModal">Sauvegarder</button>
      <UiModal v-model="passwordModalIsOpen" showCloseButton closeButtonLabel="Annuler">
        <template #title>Hop hop hop, pas si vite !</template>
        <template #description>
          Vous ne pensiez pas que ce serait si facile quand même ? Il va nous falloir votre mot de passe actuel afin de
          valider vos modifications ! 😀
        </template>
        <template #content>
          <InputsPassword
            v-model:password="currentPassword"
            label="Mot de passe actuel"
            placeholder="Mot de passe actuel"
          />
        </template>
        <template #actions>
          <button class="btn btn-primary" @click="save" :disabled="!currentPassword">Valider</button>
        </template>
      </UiModal>

      <UiModal v-model="confirmationModalIsOpen" showCloseButton>
        <template #title>C'est tout bon !</template>
        <template #description>Vos informations de connexion ont bien été modifiées 👌</template>
      </UiModal>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const email = ref('julien.dubois@gmail.com');
  const newEmail = ref(email.value);
  const emailValid = ref(true);

  const currentPassword = ref('');
  const newPassword = ref('');
  const passwordIsValid = ref(false);

  const passwordModalIsOpen = ref(false);
  const confirmationModalIsOpen = ref(false);
  const saved = ref(false);

  const emailsOK = computed(() => email.value === newEmail.value || emailValid.value);
  const passwordsOK = computed(() => newPassword.value === '' || passwordIsValid.value);
  const hasChanges = computed(() => newPassword.value !== '' || email.value !== newEmail.value);
  const canSave = computed(() => emailsOK.value && passwordsOK.value && hasChanges.value);

  function togglePasswordModal() {
    passwordModalIsOpen.value = !passwordModalIsOpen.value;
  }

  function toggleConfirmationModal() {
    confirmationModalIsOpen.value = !confirmationModalIsOpen.value;
  }

  function save() {
    saved.value = true;
    togglePasswordModal();
    toggleConfirmationModal();
  }
</script>
