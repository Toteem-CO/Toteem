<template>
  <input
    type="checkbox"
    :id="id"
    class="modal-toggle"
    :checked="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <div class="modal" @click.self="closeModal">
    <div class="modal-box">
      <h3 class="font-bold text-base">
        <slot name="title" />
      </h3>

      <p class="py-4">
        <slot name="description" />
      </p>

      <div>
        <slot name="content" />
      </div>

      <div class="modal-action">
        <button class="btn" @click="closeModal" v-if="showCloseButton">{{ closeButtonLabel }}</button>
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    showCloseButton: { type: Boolean, default: false },
    closeButtonLabel: { type: String, default: 'Fermer' },
    modelValue: { type: Boolean, default: false },
  });

  const emit = defineEmits(['update:modelValue']);

  const id = ref<string>(Math.random().toString().substring(2));

  function closeModal() {
    emit('update:modelValue', false);
  }
</script>
