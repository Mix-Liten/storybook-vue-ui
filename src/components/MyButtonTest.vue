<template>
  <button :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button-test",
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
