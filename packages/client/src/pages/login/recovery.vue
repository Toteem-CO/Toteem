<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
      <div class="flex flex-col items-center">
        <img class="w-48" src="~/assets/images/logo.svg" alt="Toteem Logo" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model.trim="email" type="text" placeholder="Email" class="input input-bordered" />
      </div>
      <div class="form-control mt-6">
        <button @click.prevent="recover" class="btn btn-primary">Confirmer</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  definePageMeta({
    layout: 'login-layout',
  });

  const email = ref<String>('');
  const recover = () => console.log(`Recovering ${email.value}`);

  email.value = useRoute().query.email || '';
</script>
