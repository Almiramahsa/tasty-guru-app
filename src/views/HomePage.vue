<script setup>
import { onMounted, ref } from 'vue'
import Meals from '../components/MealsComponent.vue'
import api from '../api'

const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 6; i++) {
    api.get(`random.php`).then(({ data }) => meals.value.push(data.meals[0]))
  }
})
</script>
<template>
  <div class="flex flex-wrap items-center p-8">
    <div class="w-full md:w-1/2 pr-8">
      <img src="/src/assets/images/cook_man 1.png" alt="Cooking Man" class="max-w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-between">
      <div class="flex flex-col md:mx-12 mx-2">
        <h1 class="font-poppins font-medium md:text-6xl text-4xl mb-2">
          Unlock Your Inner Chef Now
        </h1>
        <p class="font-jakarta text-gray-600 md:w-2/3">
          Master new recipes today with our website, transforming you into a kitchen pro with expert
          tips and easy-to-follow recipes.
        </p>
      </div>
      <button
        class="bg-yellowCustom mt-6 md:mx-12 mx-2 text-black px-5 py-2 self-start rounded-xl shadow-md"
      >
        Explore Now
      </button>
    </div>
  </div>
  <div class="p-8 pb-0 items-center text-center md:my-24 my-2">
    <h1 class="font-poppins font-semibold md:text-4xl text-xl mb-2">Best Recipes for Today</h1>
    <p class="font-jakarta text-gray-600 md:w-2/3 w-70% mx-auto">
      No more confusion about what to cook today. Just choose the recipes that are already available
      and get inspired!
    </p>
  </div>

  <Meals :meals="meals" class="p-20" />
  <div class="p-8 pb-0 items-center text-center md:my-14 my-2">
    <h1 class="font-poppins font-semibold md:text-4xl text-xl mb-2">Why Us?</h1>
    <p class="font-jakarta text-gray-600 md:w-2/3 w-70% mx-auto">
      Our platform is curated by culinary experts who are passionate about sharing their knowledge.
      Discover recipes that are tried, tested, and perfected to ensure your meals turn out
      spectacular every time.
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-20 shadow-xl">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden py-10 p-6">
      <div class="p-4 text-center">
        <img src="../assets/images/smile.svg" alt="Happier than Ever Icon" class="mx-auto mb-4" />
        <h3 class="font-poppins font-semibold md:text-xl text-md mb-2">Happier than Ever!</h3>
        <p class="text-gray-600">
          Experience the joy of cooking like never before, as our platform brings you a vast array
          of mouthwatering recipes that are sure to leave you happier and more satisfied with your
          culinary adventures.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden py-10 p-6">
      <div class="p-4 text-center">
        <img src="../assets/images/idea.svg" alt="A lot of recipes Icon" class="mx-auto mb-4" />
        <h3 class="font-poppins font-semibold md:text-xl text-md mb-2">A lot of recipes</h3>
        <p class="text-gray-600">
          With an extensive collection ranging from appetizers to desserts, you'll never run out of
          exciting options to try. Say goodbye to recipe fatigue and hello to a world of delicious
          possibilities!
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden py-10 p-6">
      <div class="p-4 text-center">
        <img src="../assets/images/time.svg" alt="Save your Time Icon" class="mx-auto mb-4" />
        <h3 class="font-poppins font-semibold md:text-xl text-md mb-2">Save your Time!</h3>
        <p class="text-gray-600">
          Say goodbye to hours spent searching for the perfect recipe. Spend less time hunting for
          recipes and more time enjoying the art of cooking.
        </p>
      </div>
    </div>
  </div>
</template>
