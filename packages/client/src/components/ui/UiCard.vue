<template>
  <div class="card shadow-xl">
    <div class="card-body p-0">
      <h2 class="card-title font-bold text-base bg-info p-6" v-if="hasTitle">
        <slot name="title" />
      </h2>

      <div class="p-6 text-3xl font-extrabold text-primary" v-if="hasContent">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const hasTitle = computed(() => !!useSlots().title);
  const hasContent = computed(() => !!useSlots().content);
</script>
