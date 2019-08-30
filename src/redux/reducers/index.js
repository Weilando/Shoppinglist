import { generalReducer } from './generalReducer';
import { mealSuggestionsReducer } from './mealSuggestionsReducer';
import { combineReducers } from 'redux';

// rootReducer
export default combineReducers({
    general: generalReducer,
    mealSuggestions: mealSuggestionsReducer
});
