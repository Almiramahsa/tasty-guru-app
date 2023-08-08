<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="m-4">
    <div class="bg-white shadow-md rounded-md transition duration-300 transform hover:scale-105">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-md w-full object-cover"
        />
      </router-link>
      <div class="p-6">
        <h3 class="font-bold font-poppins">
          {{ meal.strMeal }}
        </h3>
        <div class="flex flex-wrap gap-6 font-jakarta">
          <p class="text-sm">Category : {{ meal.strCategory }}</p>
          <p class="text-sm">Country : {{ meal.strArea }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
