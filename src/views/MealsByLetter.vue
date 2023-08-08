<script setup>
import { computed } from 'vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import Meals from '../components/MealsComponent.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
  <div class="p-8 pb-0 items-center text-center md:my-14 my-2">
    <h1 class="font-poppins font-semibold md:text-4xl text-xl mb-2">Search Meal by Letter</h1>
    <p class="font-jakarta text-gray-600 md:w-2/3 w-70% mx-auto">
      Whether you're craving a dish that starts with a specific letter or simply want to broaden
      your culinary horizons, our platform allows you to effortlessly browse and find meals based on
      alphabetical characters.
    </p>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>
