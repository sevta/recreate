<template>
  <button :class="['button', variant, size]">
    <slot />
  </button>
</template>
<script>
export default {
  inheritAttrs: true,
  props: ['variant', 'size'],
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

  &.pink {
    @apply bg-mainPink  hover:ring-2 hover:ring-mainPink  hover:bg-transparent hover:text-mainPink;
  }
  &.red {
    @apply bg-mainPink  hover:ring-2 hover:ring-mainRed  hover:bg-transparent hover:text-mainRed;
  }
  &.green {
    @apply bg-mainGreen  hover:ring-2 hover:ring-mainGreen  hover:bg-transparent hover:text-mainGreen;
  }
  &.small {
    @apply py-3 px-10 text-sm;
  }
}
</style>
