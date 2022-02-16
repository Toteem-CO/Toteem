<template>
  <section class="rounded-xl bg-white shadow-xl p-8">
    <!-- LOGO -->
    <div class="mb-8 w-60">
      <img class="ui-picture-component__image" src="~/assets/images/logo.svg" alt="Toteem Logo"/>
    </div>
    <form class="flex flex-col">
      <input v-model.trim="email" placeholder="Email" type="text" class="mb-2 rounded-xl outline-none focus:outline-none border-2 border-gray-400 focus:border-gray-400 focus:ring-0 py-2 px-4">

      <input v-model.trim="password" placeholder="Mot de passe" type="password" class="mb-6 rounded-xl outline-none focus:outline-none border-2 border-gray-400 focus:border-gray-400 focus:ring-0 py-2 px-4">

      <button @click.prevent="signin" class="bg-[#5a4fcf] rounded-xl outline-none focus:outline-none p-2 py-2 w-full text-gray-100 font-medium text-center">Connexion</button>

      <div class="text-red-600 font-semibold text-center mt-6" v-if="signinError">Identifiants incorrects</div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

definePageMeta({
  layout: "signin",
});

export default {
  layout: 'signin',

  data() {
    return {
      email: '',
      password: '',
      signinError: false
    };
  },

  methods: {
    async signin() {
      try {
        const apiUrl = this.$config.API_URL;
        const email = this.email;
        const password = this.password;
        const response = await axios.post(`${apiUrl}/users/login`, { email, password }, { headers: { 'Access-Control-Allow-Origin': '*' } });

        document.cookie = `toteemToken=${response.data.data.token}; max-age=${60 * 60 * 24 * 365}`;
        this.$router.push({ path: `/` });
        this.signinError = false;
      } catch(e) {
       this.signinError = true;
      }
    }
  }
}
</script>
