import { MealAPI } from './MealAPI';
import { FILTER } from './urlConstants';

export async function getMealSuggestionsForMainIngredient(mainIngredient) {
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
