<template>
  <div class="home">
    <Hero />
    <News />
    {{ events }}
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [],
  }),
  async fetch() {
    try {
      this.events = await this.$axios.$get('/api/events')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="postcss" scoped>
.home {
  @apply w-full
      min-h-screen
      flex flex-col
      items-center
      justify-center;
}
.text {
  @apply text-4xl text-white font-bold;
}
</style>
