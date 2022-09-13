<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <input
      :value="email"
      @input="emitUpdateEmail($event.target.value)"
      type="text"
      placeholder="Email"
      class="input input-bordered"
    />
  </div>

  <ul class="mt-4 list-none" v-if="showRequirements">
    <li class="flex items-center">
      Email valide
      <XMarkIcon class="ml-2 h-6 text-error" v-if="!isValid" />
      <CheckIcon class="ml-2 h-6 text-success" v-else />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline';
  import { __EmailRegex } from '@toteem/shared/constants/index.js';

  const props = defineProps({
    email: { type: String, default: '' },
    isValid: { type: Boolean, default: false },
    showRequirements: { type: Boolean, default: false },
  });
  const emit = defineEmits(['update:email', 'update:isValid']);

  const isValid = computed(() => new RegExp(__EmailRegex).test(props.email));

  function emitUpdateIsValid(value) {
    emit('update:isValid', value);
  }

  function emitUpdateEmail(value) {
    emit('update:email', value);
  }

  watch(isValid, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      emitUpdateIsValid(newValue);
    }
  });
</script>
