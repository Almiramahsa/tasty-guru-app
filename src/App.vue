<script setup></script>
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-sm h-12 flex justify-between items-center">
      <router-link :to="{ name: 'home' }">
        <img
          src="./assets//images//Tasty Guru.svg"
          alt="Logo Tasty Guru"
          width="121"
          class="inline-flex items-center px-5"
        />
      </router-link>
      <div class="flex items-center font-jakarta text-xs">
        <router-link to="/" class="mx-4 h-full inline-block hover:font-semibold">
          Search Meals
        </router-link>
        <router-link to="/" class="mx-4 h-full inline-block hover:font-semibold">
          Search by Letter
        </router-link>
        <router-link to="/" class="mx-4 h-full inline-block hover:font-semibold">
          Search by Ingredients
        </router-link>
      </div>
    </header>
    <main><router-view /></main>
  </div>
  >
</template>
