import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS, UPDATE_MEAL_SUGGESTIONS, REMOVE_DUPLICATES } from './actionTypes';

let nextEntryId = 0;

export function addEntry(newContent) {
  return {
    type: ADD_ENTRY,
    payload: {
      id: ++nextEntryId,
      newContent
    }
  }
}

export function updateEntry(id, newContent) {
  return {
    type: UPDATE_ENTRY,
    payload: {
      id: id,
      newContent
    }
  }
}

export function deleteEntry(id) {
  return {
    type: DELETE_ENTRY,
    payload: { id: id }
  }
}

export function toggleStatus(id) {
  return {
    type: TOGGLE_STATUS,
    payload: { id: id }
  }
}

export function updateMealSuggestions(mealSuggestions) {
  return {
    type: UPDATE_MEAL_SUGGESTIONS,
    payload: { newMealSuggestions: mealSuggestions }
  }
}

export function removeDuplicates() {
  return {
    type: REMOVE_DUPLICATES
  }
}
