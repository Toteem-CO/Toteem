<template>
  <button :class="classBinding">
    <div>
      <slot/>
    </div>
    <div>
      {{ text }}
    </div>
  </button>
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
        //'bg-[#edecfa]': this.isActive,
        'bg-gray-100': this.isActive,
        //'text-neutral-50': this.isActive,
        'outline-none': true,
        'focus:outline-none': true,
        //'px-1.5': true,
        'py-2.5': true,
        'w-full': true,
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
