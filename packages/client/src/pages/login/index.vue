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
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mot de passe</span>
        </label>
        <input v-model.trim="password" type="password" placeholder="Mot de passe" class="input input-bordered" />
      </div>
      <div class="form-control mt-6">
        <button @click.prevent="login" class="btn btn-primary" :disabled="!email || !password">Connexion</button>
      </div>
      <div class="text-center mt-0.5">
        <NuxtLink class="link text-sm" :to="{ path: '/login/recover', query: { email } }">Mot de passee oublié ?</NuxtLink>
      </div>
      <div class="text-error font-medium text-center mt-2" v-if="loginError">Identifiants incorrects</div>
    </div>
  </div>
</template>

<script setup lang="ts">

  definePageMeta({
    layout: 'login-layout',
  });

  const email = ref<String>(useRoute().query.email || '');
  const password = ref<String>('');
  const loginError = ref<Boolean>(false);

  function login() {
    console.log(`Login ${email.value} ${password.value}`);
  }
</script>
