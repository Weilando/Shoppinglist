import { UPDATE_MEAL_SUGGESTIONS } from '../actionTypes';

const initialState = {
  mealSuggestionList: [],
};

export function mealSuggestionsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEAL_SUGGESTIONS: {
      const { newMealSuggestions } = action.payload;

      return {
        ...state,
        mealSuggestionList: newMealSuggestions.concat(state.mealSuggestionList)
      };
    }
    default:
      return state;
  }
}
