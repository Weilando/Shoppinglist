import { UPDATE_MEAL_SUGGESTIONS } from '../actionTypes';
import { getMealSuggestionsForMainIngredient } from '../../axios/MealService';
import initialState from './index';

export default async function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEAL_SUGGESTIONS:
    default: {
      const { ingredient } = action.payload;
      const newMealSuggestions = await getMealSuggestionsForMainIngredient(ingredient);

      return {
        ...state,
        mealSuggestionList: mealSuggestionList.concat(newMealSuggestions)
      };
    }
  }
}
