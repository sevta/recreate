<template>
  <div class="hero w-full relative">
    <Video />
    <div
      class="
        w-full
        flex
        items-center
        justify-center
        text-white
        py-10
        relative
        overflow-hidden
      "
    >
      <div>
        <img
          class="absolute top-0 left-0 w-full h-full object-cover object-center"
          src="https://pbprsi.org/uploads/images/GmBWLTzU6KHu5owYTr3zRA5oFbrpQ5FNaza0mOw8.jpeg"
          alt=""
        />
      </div>
      <div class="bg-black/30 absolute top-0 left-0 w-full h-full z-10"></div>
      <div class="flex flex-col items-center justify-center space-y-6">
        <div class="text-3xl font-semibold z-10">Event Selanjutnya</div>
        <div class="text-3xl z-10">-</div>
        <Button class="bg-mainPink"> Jadwal Lengkap </Button>
      </div>
    </div>
  </div>
</template>
