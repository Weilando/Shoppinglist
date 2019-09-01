import { UPDATE_MEAL_SUGGESTIONS, REMOVE_DUPLICATES } from '../actionTypes';

const initialState = {
  mealSuggestionList: [],
};

export function mealSuggestionsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEAL_SUGGESTIONS: {
      const { newMealSuggestions } = action.payload;
      const newMealSuggestionList = newMealSuggestions.concat(state.mealSuggestionList);

      return {
        ...state,
        mealSuggestionList: newMealSuggestionList.slice(0,10)
      };
    }
    case REMOVE_DUPLICATES: {
      const mealSuggestionList = state.mealSuggestionList;
      return {
        ...state,
        mealSuggestionList: [...new Set(mealSuggestionList)]
      }
    }
    default:
      return state;
  }
}
