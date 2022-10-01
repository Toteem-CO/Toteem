<script setup lang="ts">
  definePageMeta({
    layout: 'private-app-layout',
    middleware: () => navigateTo('/user', { replace: true }),
  });
</script>
