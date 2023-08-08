<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api'
const route = useRoute()
const meal = ref({})

onMounted(() => {
  route.params.id
  api.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {}
  })
})

const props = defineProps({
  href: String
})
</script>
<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="font-poppins font-semibold md:text-4xl text-xl mb-2">{{ meal.strMeal }}</h1>
    <div class="flex flex-wrap gap-4 font-jakarta">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Country :</strong> {{ meal.strArea }}</div>
    </div>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[80%] mx-auto mt-10" />

    <div class="my-6 font-jakarta">
      <h2 class="text-2xl font-semibold mb-2 font-poppins text-justify">Instructions</h2>
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2 font-poppins">Ingredients</h2>
        <ul class="font-jakarta">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 font-poppins">Measures</h2>
        <ul class="font-jakarta">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
