<script setup lang="ts">
  definePageMeta({
    layout: 'private-app-company-layout',
    middleware: () => navigateTo('/company', { replace: true }),
  });
</script>
