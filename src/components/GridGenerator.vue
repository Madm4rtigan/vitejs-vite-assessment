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
      numGrids.value >= 1 &&
      numGrids.value <= 5 &&
      numRowsColumns.value >= 1 &&
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
  <div class="w-343px md:w-612px m-auto">
    <div class="text-5xl fw600 mb-10px font-serif">Grid Generator</div>
    <div
      class="
        bg-white
        px-12px
        rounded
        text-xs
        ds-drop-shadow
        flex flex-col
        md:flex-row md:justify-between md:items-center
      "
    >
      <div class="flex flex-col md:flex-row">
        <div class="mt-3 mb-3 mr-5px">
          <span>Generate</span>
          <input
            v-model.number="numGrids"
            type="number"
            onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
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
              invalid:border-red invalid:color-red
            "
          />
          <span>random grids,</span>
        </div>
        <div class="mt-3 mb-3">
          <span>each with</span>
          <input
            v-model.number="numRowsColumns"
            type="number"
            onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
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
              invalid:border-red invalid:color-red
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
            w-full
            md:w-auto
          "
        >
          Generate
        </button>
      </div>
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
