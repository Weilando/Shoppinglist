import { generalReducer } from '../../redux/reducers/generalReducer';
import { mealSuggestionsReducer } from '../../redux/reducers/mealSuggestionsReducer';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';
import { EntryStatus } from '../../enums/entry';

describe('generalReducer', () => {
  let initialState = { entryList: [] };
  let oneEntryState = {
    entryList: [
      {
        id: 1,
        content: 'Some content',
        status: EntryStatus.OPEN,
      }
    ]
  };

  it('should return the initial state', () => {
    expect(generalReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ENTRY for initial state', () => {
    expect(
      generalReducer(initialState, actions.addEntry('Some content'))
    ).toEqual(oneEntryState);
  });

  it('should handle ADD_ENTRY', () => {
    expect(
      generalReducer(oneEntryState , actions.addEntry('Another content'))
    ).toEqual({
      entryList: [
        {
          id: 1,
          content: 'Some content',
          status: EntryStatus.OPEN,
        },
        {
          id: 2,
          content: 'Another content',
          status: EntryStatus.OPEN,
        }
      ]
    });
  });

  it('should handle UPDATE_ENTRY on state with two entries', () => {
    expect(
      generalReducer({
        entryList: [
          {
            id: 1,
            content: 'Some content',
            status: EntryStatus.DONE,
          },
          {
            id: 2,
            content: 'Another content',
            status: EntryStatus.OPEN,
          }
        ]
      } , actions.updateEntry(2, 'Changed content'))
    ).toEqual({
      entryList: [
        {
          id: 1,
          content: 'Some content',
          status: EntryStatus.DONE,
        },
        {
          id: 2,
          content: 'Changed content',
          status: EntryStatus.OPEN,
        }
      ]
    });
  });

  it('should handle DELETE_ENTRY on initial state (deleting anything)', () => {
    expect(
      generalReducer(initialState, actions.deleteEntry(42))
    ).toEqual(initialState);
  });

  it('should handle DELETE_ENTRY on state with single entry', () => {
    expect(
      generalReducer(oneEntryState , actions.deleteEntry(1))
    ).toEqual(initialState);
  });

  it('should handle DELETE_ENTRY on state with three entries', () => {
    expect(
      generalReducer({
        entryList: [
          {
            id: 1,
            content: 'Some content',
            status: EntryStatus.DONE,
          },
          {
            id: 2,
            content: 'Another content',
            status: EntryStatus.DONE,
          },
          {
            id: 3,
            content: 'Content, too',
            status: EntryStatus.OPEN,
          }
        ]
      } , actions.deleteEntry(2))
    ).toEqual({
      entryList: [
        {
          id: 1,
          content: 'Some content',
          status: EntryStatus.DONE,
        },
        {
          id: 3,
          content: 'Content, too',
          status: EntryStatus.OPEN,
        }
      ]
    });
  });

  it('should handle TOGGLE_STATUS on initial state (change anything)', () => {
    expect(
      generalReducer(initialState, actions.toggleStatus(42))
    ).toEqual(initialState);
  });

  it('should handle TOGGLE_STATUS on state with one entry (change OPEN to DONE)', () => {
    expect(
      generalReducer(oneEntryState, actions.toggleStatus(1))
    ).toEqual({
      entryList: [
        {
          id: 1,
          content: 'Some content',
          status: EntryStatus.DONE,
        }
      ]
    });
  });

  it('should handle TOGGLE_STATUS on state with two entries (change DONE to OPEN)', () => {
    expect(
      generalReducer({
        entryList: [
          {
            id: 1,
            content: 'Some content',
            status: EntryStatus.DONE,
          },
          {
            id: 2,
            content: 'Another content',
            status: EntryStatus.DONE,
          }
        ]
      } , actions.toggleStatus(2))
    ).toEqual({
      entryList: [
        {
          id: 1,
          content: 'Some content',
          status: EntryStatus.DONE,
        },
        {
          id: 2,
          content: 'Another content',
          status: EntryStatus.OPEN,
        }
      ]
    });
  });
});

describe('mealSuggestionsReducer', () => {
  let initialState = { mealSuggestionList: [] };
  let oneEntryState = {
    mealSuggestionList: [
      {
        "strMeal": "Chicken Couscous",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
        "idMeal": "52850"
      }
    ]
  };

  it('should return the initial state', () => {
    expect(mealSuggestionsReducer(undefined, [])).toEqual(initialState);
  });

  it('should add new meal suggestions to empty state', () => {
    expect(mealSuggestionsReducer(initialState, actions.updateMealSuggestions(
      [
        {
          "strMeal": "Chicken Couscous",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
          "idMeal": "52850"
        }
      ]
    ))).toEqual(oneEntryState);
  });
});
