import api from '../api'

export function searchMeals({ commit }, keyword) {
  api.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeals', data.meals)
  })
}

export function searchMealsByLetter({ commit }, letter) {
  api.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealsByIngredient({ commit }, ing) {
  api.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit('setMealsByIngredients', data.meals)
  })
}
