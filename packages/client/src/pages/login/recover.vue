<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Mot de passe oublié ? 😅</h2>
      <p class="text-sm my-0.5">Pas grave, on va vous aider à le réinitialiser ! Entrez l'email associé à votre compte, on vous enverra un lien de réinitialisation de votre mot de passe.</p>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model.trim="email" type="text" placeholder="Email" required class="input input-bordered" />
      </div>
      <div class="form-control mt-6">
        <button @click.prevent="recover" class="btn btn-primary" :disabled="!email">Recevoir le lien</button>
      </div>
      <div class="text-center mt-0.5">
        <NuxtLink class="link text-sm" :to="{ path: '/login', query: { email } }">Plus besoin, je m'en souviens !</NuxtLink>
      </div>
      <div class="text-success font-medium text-center mt-2" v-if="recoverOk">
      Si l'email renseigné est valide, un lien de réinitialisation vous sera envoyé 💌
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  definePageMeta({
    layout: 'login-layout',
  });

  const email = ref<String>(useRoute().query.email || '');
  const recoverOk = ref<Boolean>(false);
  
  function recover() {
    recoverOk.value = true;
  }
</script>
