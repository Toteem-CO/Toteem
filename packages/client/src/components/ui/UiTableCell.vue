<template>
  <component :is="htmlTag" :class="classBinding">
    <slot />
  </component>
</template>

<script setup lang="ts">
  const props = defineProps({
    headCell: { type: Boolean, default: false },
  });

  const htmlTag = computed(() => (props.headCell ? 'th' : 'td'));

  const classBinding = computed(() => ({
    capitalize: true,
    'font-normal': !!props.headCell,
    'font-medium': !props.headCell,
    'text-sm': true,
    'bg-base-100': true,
    'text-center': true,
  }));
</script>
