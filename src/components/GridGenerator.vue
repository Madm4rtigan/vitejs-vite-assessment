<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="text-5xl fw600">Grid Generator</div>
  <div class="bg-white p-10 rounded drop-shadow-lg">
    <div>
      <span>Generate</span>
      <input class="border-1 rounded" />
      <span> random grids, each with </span>
    </div>
    <div>
      <input class="border-1 rounded" />
      <span> rows/columns.</span>
    </div>
   
    <button type="button" @click="count++">Generate</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
