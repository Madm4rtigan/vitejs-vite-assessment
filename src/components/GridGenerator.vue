<script setup>
import { ref, computed } from 'vue';
import Grid from './Grid.vue';
import { v4 as uuidv4 } from 'uuid';

const numGrids = ref(null);
const numRowsColumns = ref(null);
const generatedGrids = ref([]);

const updateAllGrids = () => {
  generatedGrids.value = [];
  for (var i = 0; i < numGrids.value; i++) {
    generatedGrids.value.push({
      id: uuidv4(),
      numRowsColumns: numRowsColumns.value,
    });
  }
};

const canGenerateGrids = computed(() => {
  if (
    typeof numGrids.value === 'number' &&
    typeof numRowsColumns.value === 'number'
  ) {
    if (
      numGrids.value > 0 &&
      numGrids.value <= 5 &&
      numRowsColumns.value > 0 &&
      numRowsColumns.value <= 5
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
});
</script>

<template>
  <div class="text-5xl fw600 mb-10px font-serif">Grid Generator</div>
  <div
    class="
      bg-white
      px-12px
      rounded
      text-xs
      ds-drop-shadow
      flex flex-col
      md:w-612px md:flex-row md:justify-between md:items-center
    "
  >
    <div class="flex flex-col md:flex-row">
      <div class="mt-3 mb-3 mr-5px">
        <span>Generate</span>
        <input
          v-model.number="numGrids"
          type="number"
          min="1"
          max="5"
          class="
            border-1
            rounded
            h-38px
            w-56px
            mx-5px
            p-10px
            text-base
            input-ds-gray
            focus:border-ds-blue focus:border-2
          "
        />
        <span>random grids,</span>
      </div>
      <div class="mt-3 mb-3">
        <span>each with</span>
        <input
          v-model.number="numRowsColumns"
          type="number"
          min="1"
          max="5"
          class="
            border-1
            rounded
            h-38px
            w-56px
            mx-5px
            p-10px
            text-base
            input-ds-gray
            focus:border-ds-blue focus:border-2
          "
        />
        <span>rows/columns.</span>
      </div>
    </div>
    <div class="mt-3 mb-3">
      <button
        type="button"
        @click="updateAllGrids"
        :disabled="canGenerateGrids"
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
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Generate
      </button>
    </div>
  </div>
  <div class="flex flex-col">
    <Grid
      v-for="grid in generatedGrids"
      :key="grid.id"
      :numRowsColumns="grid.numRowsColumns"
    />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
