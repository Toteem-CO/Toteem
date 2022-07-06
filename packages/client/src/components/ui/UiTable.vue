<template>
  <table class="table rounded-[var(--rounded-box,1)] w-full">
    <!-- Head -->
    <thead class="border-b-2 border-solid border-base-200">
      <slot name="head" />
    </thead>

    <!-- Body -->
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</template>
