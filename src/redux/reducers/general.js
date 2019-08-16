import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from "../actionTypes";
import { EntryStatus } from '../../components/Entry';

const initialState = {
  entryList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY: {
      const { id, content } = action.payload;
      return {
        ...state,
        entryList: state.entryList.concat({
          id: id,
          content: content,
          status: EntryStatus.OPEN,
        })
      };
    }
    case UPDATE_ENTRY: {
      const { id, content } = action.payload;
      return {
        ...state,
        entryList: {
          ...state.entryList,
          [id]: {
            ...state.entryList[id],
            content: content
          }
        }
      };
    }
    case DELETE_ENTRY: {
      console.log('DELETE_ENTRY');
      const { id } = action.payload;
      const newEntryList = state.entryList.slice();
      return {
        entryList: newEntryList.splice(id, 1),
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
