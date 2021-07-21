<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-3xl font-bold">admin</div>
    <div class="w-[50%] rounded bg-gray-50 text-xs font-mono">
      <pre>
        {{ data }}
      </pre>
    </div>
    <button
      class="
        px-10
        py-2
        mt-10
        rounded-full
        bg-mainPink/20
        text-mainPink
        font-bold
      "
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    data: [],
  }),
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.data = await this.$axios.$get('/api/events')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
