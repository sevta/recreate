<template>
  <div class="video-wrapper relative">
    <video
      class="video"
      src="https://pbprsi.org/videos/main-video.mp4"
      autoplay="autoplay"
      poster="https://pbprsi.org/videos/poster.jpg"
      loop="loop"
    ></video>
    <div class="overlay bg-black/50 absolute top-0 left-0 w-full h-full"></div>
    <div class="title">
      <div class="title-sub">Olympic Games</div>
      <div class="title-hero">2020</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.video-wrapper {
  min-height: calc(100vh - 85px);
  @apply w-full
      h-screen
      relative
      flex
      items-center
      overflow-hidden
      justify-center;
}
.video {
  @apply w-full h-auto absolute right-auto top-[50%] left-[50%] bottom-auto translate-y-[-50%] translate-x-[-50%];
}

.title {
  @apply text-white relative z-50 flex flex-col items-center;

  .title-sub {
    @apply text-3xl;
  }
  .title-hero {
    @apply text-[160px] mt-[-40px] font-bold;
  }
}
</style>
