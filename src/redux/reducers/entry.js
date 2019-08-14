import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from "../actionTypes";
import { EntryStatus } from '../../components/Entry';

const initialState = {
  entries: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY: {
      const { id, content } = action.payload;
      return {
        ...state,
        entries: state.entries.concat({
          id: id,
          content: content,
          status: EntryStatus.OPEN,
        })
      };
    }
    break;
    case UPDATE_ENTRY: {
      const { id, content } = action.payload;
      return {
        ...state,
        entries: {
          ...entries.slice()[id]: {
            content = content
          }
        }
      };
    }
    case DELETE_ENTRY: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            status: EntryStatus.OPEN
          }
        }
      };
    }
    case TOGGLE_STATUS: { // TODO: toggle needs to be implemented
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status: EntryStatus.DONE
          }
        }
      };
    }
    default:
      return state;
  }
}
