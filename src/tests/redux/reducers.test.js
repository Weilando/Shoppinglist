import reducer from '../../redux/reducers/general';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';
import { EntryStatus } from '../../enums/entry';

describe('general reducer', () => {
  let initialState = { entryList: [], };
  let oneEntryState = {
    entryList: [
      {
        id: 1,
        content: 'Some content',
        status: EntryStatus.OPEN,
      }
    ]
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ENTRY for initial state', () => {
    expect(
      reducer(initialState, actions.addEntry('Some content'))
    ).toEqual(oneEntryState);
  });

  it('should handle ADD_ENTRY', () => {
    expect(
      reducer(oneEntryState , actions.addEntry('Another content'))
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
      reducer({
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
      reducer(initialState, actions.deleteEntry(42))
    ).toEqual(initialState);
  });

  it('should handle DELETE_ENTRY on state with single entry', () => {
    expect(
      reducer(oneEntryState , actions.deleteEntry(1))
    ).toEqual({entryList: []});
  });

  it('should handle DELETE_ENTRY on state with three entries', () => {
    expect(
      reducer({
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
      reducer(initialState, actions.toggleStatus(42))
    ).toEqual(initialState);
  });

  it('should handle TOGGLE_STATUS on state with one entry (change OPEN to DONE)', () => {
    expect(
      reducer(oneEntryState, actions.toggleStatus(1))
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
      reducer({
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
})
