<template>
  <div class="navbar">
    <Logo />
    <div>Menu</div>
  </div>
</template>

<style lang="postcss" scoped>
.navbar {
  @apply w-full
      shadow-lg
      py-3
      px-14
      flex
      justify-between
      items-center
      border-b-[4px] border-mainRed
      bg-white/80 
      backdrop-blur
      fixed
      top-0
      left-0
      z-[100];
}
</style>
