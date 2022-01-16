<template>
  <section class="rounded-xl bg-white shadow-xl p-8">
    <!-- LOGO -->
    <div class="mb-8 w-14rem">
      <img class="ui-picture-component__image" src="~/assets/images/logo.svg" alt="Toteem Logo"/>
    </div>
    <form class="flex flex-col">
      <input v-model.trim="email" placeholder="Email" type="text" class="mb-2 rounded-xl outline-none focus:outline-none border-2 border-outline py-2 px-4 text-textPrimary">

      <input v-model.trim="password" placeholder="Mot de passe" type="password" class="mb-6 rounded-xl outline-none focus:outline-none border-2 border-outline py-2 px-4 text-textPrimary">

      <button @click.prevent="signin" class="bg-primary rounded-xl outline-none focus:outline-none p-2 py-0.6rem w-full text-background font-medium text-center">Connexion</button>

      <div class="text-red text-center mt-6" v-if="signinError">Identifiants incorrects</div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

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
