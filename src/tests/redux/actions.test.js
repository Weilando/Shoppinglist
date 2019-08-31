import * as actions from '../../store/actions.js';
import * as types from '../../store/actionTypes';

describe('actions for generalReducer', () => {
  it('should create an action to add an entry', () => {
    const newContent = 'This is a new entry';

    const expectedAction = {
      type: types.ADD_ENTRY,
      payload: {
        id: 1,
        newContent
      }
    };

    expect(actions.addEntry(newContent)).toEqual(expectedAction);
  })

  it('should create an action to update an entry', () => {
    const updateId = 42;
    const updateContent = 'This is some new content';

    const expectedAction = {
      type: types.UPDATE_ENTRY,
      payload: {
        id: updateId,
        newContent: updateContent
      }
    };

    expect(actions.updateEntry(updateId, updateContent)).toEqual(expectedAction);
  })

  it('should create an action to delete an entry', () => {
    const deleteId = 2;

    const expectedAction = {
      type: types.DELETE_ENTRY,
      payload: { id: deleteId }
    };

    expect(actions.deleteEntry(deleteId)).toEqual(expectedAction);
  })

  it('should create an action to toggle the status for specific entry', () => {
    const toggleId = 7;

    const expectedAction = {
      type: types.TOGGLE_STATUS,
      payload: { id: toggleId }
    };

    expect(actions.toggleStatus(toggleId)).toEqual(expectedAction);
  })
});

describe('actions for mealSuggestionsReducer', () => {
  it('should create an action to update mealSuggestions', () => {
    const fetchedMealSuggestions = [
      {
        "strMeal": "Chicken Couscous",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
        "idMeal": "52850"
      }
    ];

    const expectedAction = {
      type: types.UPDATE_MEAL_SUGGESTIONS,
      payload: { newMealSuggestions: fetchedMealSuggestions }
    };

    expect(actions.updateMealSuggestions(fetchedMealSuggestions)).toEqual(expectedAction);
  })
});
