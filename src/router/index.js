import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/MealIngredients.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },

      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
