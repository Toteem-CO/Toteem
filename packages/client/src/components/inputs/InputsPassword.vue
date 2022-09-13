<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :value="password"
      @input="emitUpdatePassword($event.target.value)"
      type="password"
      :placeholder="placeholder"
      required
      class="input input-bordered"
    />
  </div>
  <div class="form-control" v-if="requireConfirmation">
    <label class="label">
      <span class="label-text">Nouveau mot de passe, encore !</span>
    </label>
    <input
      v-model.trim="passwordConfirmation"
      type="password"
      placeholder="Confirmez votre nouveau mot de passe"
      required
      class="input input-bordered"
    />
  </div>

  <ul class="mt-4 list-none" v-if="showRequirements">
    <li class="flex items-center" v-for="group in __PasswordRegexGroups">
      {{ group.description }}
      <XMarkIcon class="ml-2 h-6 text-error" v-if="!regexGroupMatches(group.regex)" />
      <CheckIcon class="ml-2 h-6 text-success" v-else />
    </li>
    <li class="flex items-center" v-if="requireConfirmation">
      Confirmation du mot de passe
      <XMarkIcon class="ml-2 h-6 text-error" v-if="!passwordConfirmed" />
      <CheckIcon class="ml-2 h-6 text-success" v-else />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline';
  import { __PasswordRegex, __PasswordRegexGroups } from '@toteem/shared/constants/index.js';

  const props = defineProps({
    password: { type: String, default: '' },
    isValid: { type: Boolean, default: false },
    requireConfirmation: { type: Boolean, default: false },
    showRequirements: { type: Boolean, default: false },
    label: { type: String, default: 'Nouveau mot de passe' },
    placeholder: { type: String, default: 'Nouveau mot de passe' },
  });
  const emit = defineEmits(['update:password', 'update:isValid']);

  const passwordConfirmation = ref<String>('');

  const passwordConfirmed = computed(() => !props.requireConfirmation || props.password === passwordConfirmation.value);
  const isValid = computed(() => new RegExp(__PasswordRegex).test(props.password) && passwordConfirmed.value);

  function emitUpdateIsValid(value) {
    emit('update:isValid', value);
  }

  function emitUpdatePassword(value) {
    emit('update:password', value);
  }

  function regexGroupMatches(regex) {
    return new RegExp(`^${regex}`).test(props.password);
  }

  watch(isValid, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      emitUpdateIsValid(newValue);
    }
  });
</script>
