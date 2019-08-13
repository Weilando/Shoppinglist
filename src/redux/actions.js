import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from "./actionTypes";

let nextEntryId = 0;

export function addEntry(content) {
  return {
    type: ADD_ENTRY,
    payload: {
      id: ++nextEntryId,
      content
    }
  }
}

export function updateEntry(id, content) {
  return {
    type: UPDATE_ENTRY,
    payload: {
      id: id,
      content
    }
  }
}

export function deleteEntry(id) {
  return {
    type: DELETE_ENTRY,
    payload: { id }
  }
}

export function toggleStatus(id) {
  return{
    type: TOGGLE_STATUS,
    id
  }
}
