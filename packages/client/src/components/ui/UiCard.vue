<template>
  <div class="card shadow-xl">
    <div class="card-body p-0 bg-base-100">
      <h2 class="card-title font-bold text-base bg-info p-6" v-if="hasTitle">
        <slot name="title" />
      </h2>

      <div class="p-6" v-if="hasContent">
        <slot name="content" />
      </div>

      <div class="card-actions justify-end p-6" v-if="hasActions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const hasTitle = computed(() => !!useSlots().title);
  const hasContent = computed(() => !!useSlots().content);
  const hasActions = computed(() => !!useSlots().actions);
</script>
