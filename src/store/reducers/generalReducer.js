import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from '../actionTypes';
import { EntryStatus } from '../../constants/entry';

const initialState = {
  entryList: [],
};

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY: {
      const { id, newContent } = action.payload;

      return {
        ...state,
        entryList: state.entryList.concat({
          id: id,
          content: newContent,
          status: EntryStatus.OPEN,
        })
      };
    }
    case UPDATE_ENTRY: {
      const { id, newContent } = action.payload;

      return {
        ...state,
        entryList: state.entryList.map((item, index) => {
          if(item.id === id) { // find item with mathing id
            return {    // return a new object
              ...item,  // copy the existing item...
              content: newContent  // ... and replace its content
            };
          }
          return item; // leave every other item unchanged
        })
      };
    }
    case DELETE_ENTRY: {
      const { id } = action.payload;

      return Object.assign({}, state, {
        entryList: [...state.entryList.filter(entry => entry.id !== id)],
      });
    }
    case TOGGLE_STATUS: { // works like UPDATE_ENTRY, but checks the entry's current status before change
      const { id } = action.payload;

      return {
        ...state,
        entryList: state.entryList.map((item, index) => {
          if(item.id === id) {
            if(item.status === EntryStatus.OPEN) {
              return {
                ...item,
                status: EntryStatus.DONE
              };
            }
            return {
              ...item,
              status: EntryStatus.OPEN
            };
          }
          return item; // leave every other item unchanged
        })
      };
    }
    default:
      return state;
  }
}
