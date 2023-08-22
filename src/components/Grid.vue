<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  numRowsColumns: Number,
});

const gridLetters = computed(() => {
  var randomLetters = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < props.numRowsColumns * props.numRowsColumns; i++) {
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomLetters.push(letter.toUpperCase());
    alphabet = alphabet.replace(letter, '');
  }

  return randomLetters;
});

const getTileLetter = (rowIndex, columnIndex) => {
  return gridLetters.value[rowIndex * props.numRowsColumns + columnIndex];
};
</script>

<template>
  <div
    class="inline-block bg-black rounded m-auto p-6px mt-30px ds-drop-shadow"
  >
    <div
      v-for="(n, rIndex) in numRowsColumns"
      :key="rIndex"
      class="flex flex-row"
    >
      <div
        v-for="(n, cIndex) in numRowsColumns"
        :key="cIndex"
        class="
          flex
          justify-center
          items-center
          w-60px
          h-60px
          bg-white
          m-6px
          fw600
          font-serif
          text-36px
        "
      >
        {{ getTileLetter(rIndex, cIndex) }}
      </div>
    </div>
  </div>
</template>
