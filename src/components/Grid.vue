<script setup>
import { ref, computed, toRefs } from 'vue';

defineProps({
  numRowsColumns: Number,
});

const usedLetters = [];
const tileLetter = ref('');
// const rLetter = () => {
//   var letter;
//   var x = Math.floor(Math.random() * 26);
//   letter = String.fromCharCode(65 + x);

//   usedLetters.push(letter);
//   tileLetter.value = letter.toUpperCase();
// };
</script>

<script>
export default {
  data() {
    return {
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
    };
  },

  methods: {
    randomLetter() {
      console.log(this.numRowsColumns);
      var letter =
        this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
      this.alphabet = this.alphabet.replace(letter, '');
      console.log(letter);
      return letter.toUpperCase();
    },
  },
};
</script>

<template>
  <div class="inline-block bg-black rounded m-auto p-6px mt-30px">
    <div
      v-for="(n, index) in numRowsColumns"
      :key="index"
      class="flex flex-row"
    >
      <div
        v-for="(n, index) in numRowsColumns"
        :key="index"
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
        {{ randomLetter() }}
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
