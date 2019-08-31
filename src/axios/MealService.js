import { MealAPI } from './MealAPI';
import { FILTER } from './urlConstants';
import store from '../redux/store';
import { updateMealSuggestions } from '../redux/actions';

// helper function is exported for tests
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
  const mealSuggestions = await getMealSuggestionsFor(formatName(mainIngredient));
  store.dispatch(updateMealSuggestions(mealSuggestions));
}

// helper function is exported for tests
export function formatName(name) {
  return name.toLowerCase().replace(new RegExp(' ', 'g'), '_');
}
