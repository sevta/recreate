<template>
  <div class="news-card space-y-5 group cursor-pointer">
    <div class="news-card-image rounded-2xl overflow-hidden">
      <img
        class="
          w-full
          h-full
          object-contain object-center
          group-hover:scale-110
          transition
          duration-300
        "
        src="https://pbprsi.org/uploads/news/b655ced0a0c111601f663e5b387a92a8.jpg"
        alt=""
      />
    </div>
    <div class="space-y-3">
      <div class="news-card-title text-2xl text-gray-800 font-bold">
        Ketua Umum PBRSI
      </div>
      <div :class="['news-card-subtitle text-gray-600', variant]">Polo Air</div>
      <div class="news-card-content text-gray-600 leading-relaxed text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eos
        nemo libero facilis error, minima ea inventore iusto quibusdam, aut
        similique cupiditate deleniti, iure incidunt ut at ipsam eum et.
      </div>
    </div>
    <div class="news-card-button mt-5 flex items-center justify-center">
      <Button size="small" :variant="variant"> Baca Selengkapnya </Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['variant'],
}
</script>

<style lang="postcss" scoped>
.news-card {
}
.news-card-subtitle {
  &.pink {
    @apply text-mainPink;
  }
  &.green {
    @apply text-mainGreen;
  }
}
</style>
