import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from "../actionTypes";
import { EntryStatus } from '../../components/Entry';

const initialState = {
  ids: [],
  contents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      const { id, content } = action.payload;
      return {
        ...state,
        ids: [...state.ids, id],
        contents: {
          ...state.contents,
          [id]: {
            content,
            status: EntryStatus.OPEN
          }
        }
      };
    case UPDATE_ENTRY:
      return {
        ...state,
        ids: [...state.ids, id],
        contents: {
          ...state.contents,
          [id]: {
            content,
            status: EntryStatus.OPEN
          }
        }
      };
    case DELETE_ENTRY:
      return {
        ...state,
        ids: [...state.ids, id],
        contents: {
          ...state.contents,
          [id]: {
            content,
            status: EntryStatus.OPEN
          }
        }
      };
    case TOGGLE_STATUS: { // TODO: toggle needs to be implemented
        return {
          ...state,
          contents: {
            ...state.contents,
            [id]: {
              ...state.contents[id],
              status: EntryStatus.DONE
            }
          }
        };
      }
    default:
      return state;
  }
}
