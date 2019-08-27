import general from './general';
import mealSuggestions from './mealSuggestions';
import { combineReducers } from 'redux';

export const initialState = {
  entryList: [],
  mealSuggestionList: [],
};

// rootReducer
export default combineReducers({
    general,
    mealSuggestions
});
