<template>
  <div
    class="
      w-full
      min-h-screen
      bg-indigo-600
      flex flex-col
      items-center
      justify-center
    "
  >
    <div class="font-mono text-white text-sm">
      <pre>
        {{ events }}
      </pre>
    </div>
    <div class="text-4xl text-white font-bold">PBPRSI</div>
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
