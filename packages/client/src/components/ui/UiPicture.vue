<template>
  <picture class="ui-picture-component">
    <img class="ui-picture-component__image" :src="dynamicSrc" :alt="alt"/>
  </picture>
</template>

<script>
  export default {

    props: {
      path: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },

    computed: {
      src() {
        return `~/assets/images/${this.path}`;
      },
      async dynamicSrc() {
        const module = await import(`../../assets/images/${this.path}.svg`);
        return module.default.replace(/^\/@fs/, '');
      }
    }

  }
</script>

<style scoped>
  .ui-picture-component {

  }
</style>
