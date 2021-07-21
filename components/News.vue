<template>
  <div class="flex items-center flex-col justify-center p-14">
    <div class="text-3xl text-gray-800 font-bold mb-14">Berita PRSI</div>
    <div class="flex space-x-10">
      <NewsCard v-for="item in 4" variant="pink" :key="item" />
    </div>
  </div>
</template>
