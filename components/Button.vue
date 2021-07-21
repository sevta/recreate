<template>
  <button class="button">
    <slot />
  </button>
</template>
<script>
export default {
  inheritAttrs: true,
}
</script>

<style lang="postcss" scoped>
.button {
  @apply text-white
      px-7
      py-4
      rounded-full
      bg-mainBlue
      z-10
      hover:text-white hover:ring-2 hover:ring-white  hover:bg-transparent;
}
</style>
