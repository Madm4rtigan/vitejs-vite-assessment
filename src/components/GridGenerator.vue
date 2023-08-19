<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="text-5xl fw600 mb-10px">Grid Generator</div>
  <div class="bg-white p-10px w-612px rounded drop-shadow-lg flex flex-row">
    <div class="mt-3 mb-3 min-w-250px">
      <span>Generate </span>
      <input class="border-1 rounded h-38px w-56px" />
      <span> random grids, </span>
    </div>
    <div class="mt-3 mb-3 min-w-250px">
      <span>each with </span>
      <input class="border-1 rounded h-38px w-56px" />
      <span> rows/columns.</span>
    </div>
    <div class="mt-3 mb-3">
      <button
        type="button"
        @click="count++"
        class="bg-blue rounded p-2 c-white fw600 px-13px py-7px"
      >
        Generate
      </button>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
