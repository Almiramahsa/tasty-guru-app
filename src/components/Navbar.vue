<template>
  <header class="bg-white shadow-sm h-20 flex justify-between items-center">
    <router-link :to="{ name: 'home' }">
      <img
        src="../assets/images/tastyguru.svg"
        alt="Logo Tasty Guru"
        width="154"
        class="inline-flex items-center px-5"
      />
    </router-link>
    <div class="flex items-center font-jakarta text-sm">
      <router-link :to="{ name: 'byName' }" class="mx-4 h-full inline-block hover:font-semibold">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }" class="mx-4 h-full inline-block hover:font-semibold">
        Search by Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="mx-4 h-full inline-block hover:font-semibold"
      >
        Search by Ingredient
      </router-link>
    </div>
  </header>
</template>
