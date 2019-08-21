import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Entry from '../components/Entry';
import { EntryMode, EntryStatus } from '../enums/entry';

describe('snapshot tests for Entry component', () => {
  it('should render Entry component with OPEN status and DISPLAY mode correctly', () => {
    const toggleFunction = jest.fn();
    const tree = renderer.create(
      <Provider store={store}>
        <Entry
          key = {3}
          eId = {2}
          eContent = {'Bananas'}
          status = {EntryStatus.OPEN}
          mode = {EntryMode.DISPLAY}
        />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render Entry component with DONE status and EDIT mode correctly', () => {
    const toggleFunction = jest.fn();
    const tree = renderer.create(
      <Provider store={store}>
        <Entry
          key = {3}
          eId = {2}
          eContent = {'Bananas'}
          status = {EntryStatus.DONE}
          mode = {EntryMode.EDIT}
        />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
