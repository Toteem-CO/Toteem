<template>
  <div class="ui-button-component">
    <button :class="classBinding">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    classBinding() {
      return {
        'bg-primary': this.isActive,
        'bg-background': !this.isActive,
        'rounded-xl': true,
        'outline-none': true,
        'focus:outline-none': true,
        'p-2': true,
        'w-full': true,
        'text-textSecondary': !this.isActive,
        'text-background': this.isActive,
        'font-medium': true,
        'text-left': true
      };
    }
  }
}
</script>

<style scoped>
  .ui-button-component {

  }
</style>
