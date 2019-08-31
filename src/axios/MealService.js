import { MealAPI } from './MealAPI';
import { FILTER } from './urlConstants';
import store from '../redux/store';
import { updateMealSuggestions } from '../redux/actions';

export async function getMealSuggestionsFor(mainIngredient) {
  try {
    const { data } = await MealAPI.get(FILTER, {params: {i: mainIngredient}})
    const { meals } = data;

    if(meals===null) {
      return [];
    }

    return meals;
  } catch (error) {
    console.log("An error occured while fetching meal suggestions.");
  }

  return [];
}

export async function addMealSuggestionsFor(mainIngredient) {
  const mealSuggestions = await getMealSuggestionsFor(mainIngredient);
  store.dispatch(updateMealSuggestions(mealSuggestions));
}
