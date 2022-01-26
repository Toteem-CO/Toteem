<template>
  <div class="ui-button-component my-1">
    <button :class="classBinding">
      <div>
        <slot/>
      </div>
      <div>
        {{ text }}
      </div>
    </button>
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
        'flex': true,
        'flex-row': true,
        'items-center': true,
        'bg-violet-50': this.isActive,
        'bg-background': !this.isActive,
        'text-gray-600': this.isActive,
        'rounded-md': true,
        'outline-none': true,
        'focus:outline-none': true,
        'px-1.5': true,
        'py-2': true,
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
