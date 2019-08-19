import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, TOGGLE_STATUS } from '../actionTypes';
import { EntryStatus } from '../../enums/entry';

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
      const id = action.payload.id;
      const newContent = action.payload.content;

      return {
        ...state,
        entryList: state.entryList.map((item, index) => {
          // Find the item with the matching id
          if(item.id === id) {
            // Return a new object
            return {
              ...item,  // copy the existing item
              content: newContent  // replace the content
            };
          }
          return item; // Leave every other item unchanged
        })
      };
    }
    case DELETE_ENTRY: {
      const { id } = action.payload;
      return Object.assign({}, state, {
        entryList: [...state.entryList.filter(entry => entry.id !== id)],
      });
    }
    case TOGGLE_STATUS: {
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
          return item;
        })
      };
    }
    default:
      return state;
  }
}
