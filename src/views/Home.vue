<script setup>
import { ref, onMounted } from 'vue'
import api from '../api.js'
onMounted(async () => {
  const response = await api.get('/list.php?i=list')
  console.log(response.data)
  ingredients.value = response.data
})
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const ingredients = ref([])
</script>

<template>
  <div class="flex flex-col p-12">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full font-poppins text-sm text-gray-300"
      placeholder="search"
    />
    <div class="flex gap-2 mt-4 items-center justify-center">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>
