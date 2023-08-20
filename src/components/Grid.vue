<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

defineProps({
  numRowsColumns: Number,
});

var usedLetters = [];

// const rLetter = computed({
//   let letter;
//   let x = Math.floor(Math.random() * 26);
//   letter = String.fromCharCode(65 + x);

//   usedLetters.push(letter);
//   return letter.toUpperCase();
// })
</script>

<template>
  <div class="inline-block bg-black rounded m-auto p-6px mt-30px">
    <div v-for="index in 5" :key="index" class="flex flex-row">
      <div
        v-for="index in 5"
        :key="index"
        class="
          flex
          justify-center
          align-middle
          w-60px
          h-60px
          bg-white
          m-6px
          fw600
          font-serif
          text-36px
        "
      >
        A
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
