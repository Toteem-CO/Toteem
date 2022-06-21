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
      <label
        for="profil__connection__save"
        class="btn btn-primary btn-wide modal-button"
        :class="{ 'btn-disabled': !canSave }"
        >Sauvegarder</label
      >

      <input type="checkbox" id="profil__connection__save" class="modal-toggle" v-model="modalSaveOpen" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-base">Hop hop hop, pas si vite !</h3>
          <p class="py-4">
            Vous ne pensiez pas que ce serait si facile quand même ? Il va nous falloir votre mot de passe actuel afin
            de valider vos modifications ! 😀
          </p>
          <InputsPassword
            v-model:password="currentPassword"
            label="Mot de passe actuel"
            placeholder="Mot de passe actuel"
          />
          <div class="modal-action">
            <label for="profil__connection__save" class="btn">Annuler</label>
            <label
              for="profil__connection__save"
              class="btn btn-primary"
              :class="{ 'btn-disabled': !currentPassword }"
              @click.prevent="save"
              >Valider</label
            >
          </div>
        </div>
      </div>

      <input type="checkbox" id="profil__connection__ok" class="modal-toggle" v-model="modalOkOpen" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-base">C'est tout bon !</h3>
          <p class="py-4 text-success font-medium">Vos informations de connexion ont bien été modifiées 👌</p>
          <div class="modal-action">
            <label for="profil__connection__ok" class="btn btn-primary">Ok</label>
          </div>
        </div>
      </div>
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

  const modalSaveOpen = ref(false);
  const modalOkOpen = ref(false);
  const saved = ref(false);

  const emailsOK = computed(() => email.value === newEmail.value || emailValid.value);
  const passwordsOK = computed(() => newPassword.value === '' || passwordIsValid.value);
  const hasChanges = computed(() => newPassword.value !== '' || email.value !== newEmail.value);
  const canSave = computed(() => emailsOK.value && passwordsOK.value && hasChanges.value);

  function save() {
    saved.value = true;
    modalSaveOpen.value = false;
    modalOkOpen.value = true;
  }
</script>
