<script setup>
import { ref } from 'vue';
import Grid from './Grid.vue';

defineProps({
  msg: String,
});

const numGrids = ref(null);
const numDisplayedGrids = ref(0);
const numRowsColumns = ref(null);
const numDisplayedRowsColumns = ref(0);

const updateAllGrids = () => {
  console.log('made it');
  numDisplayedGrids.value = 0;
  numDisplayedRowsColumns.value = 0;
  if (numGrids.value) {
    numDisplayedGrids.value = numGrids.value;
  }

  if (numRowsColumns.value) {
    numDisplayedRowsColumns.value = numRowsColumns.value;
  }
};
</script>

<template>
  <div class="text-5xl fw600 mb-10px font-serif">Grid Generator</div>
  <div
    class="
      bg-white
      px-12px
      w-612px
      rounded
      drop-shadow-lg
      flex flex-row
      text-xs
      justify-between
      items-center
    "
  >
    <div class="flex">
      <div class="mt-3 mb-3 mr-5px">
        <span>Generate </span>
        <input
          v-model.number="numGrids"
          type="input"
          class="
            border-1
            rounded
            h-38px
            w-56px
            mx-5px
            p-10px
            text-base text-gray
          "
        />
        <span> random grids, </span>
      </div>
      <div class="mt-3 mb-3">
        <span>each with </span>
        <input
          v-model.number="numRowsColumns"
          class="
            border-1
            rounded
            h-38px
            w-56px
            mx-5px
            p-10px
            text-base text-gray
          "
        />
        <span> rows/columns.</span>
      </div>
    </div>
    <div class="mt-3 mb-3">
      <button
        type="button"
        @click="updateAllGrids"
        class="
          bg-ds-blue
          rounded
          p-2
          c-white
          fw600
          px-13px
          py-7px
          font-serif
          text-base
        "
      >
        Generate
      </button>
    </div>
  </div>
  <div class="flex flex-col">
    <Grid
      v-for="(n, index) in numDisplayedGrids"
      :key="index"
      :numRowsColumns="numDisplayedRowsColumns"
    />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
