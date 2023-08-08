<script setup>
import { computed } from 'vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import Meals from '../components/MealsComponent.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<template>
  <div class="p-8 pb-0 items-center text-center md:my-14 my-2">
    <h1 class="font-poppins font-semibold md:text-4xl text-xl mb-2">Search Meals</h1>
    <p class="font-jakarta text-gray-600 md:w-2/3 w-70% mx-auto">
      Our platform is curated by culinary experts who are passionate about sharing their knowledge.
      Discover recipes that are tried, tested, and perfected to ensure your meals turn out
      spectacular every time.
    </p>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>
