import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ModeForm from '../components/ModeForm';
import { EntryMode } from '../enums/entry';

describe('snapshot tests for ModeForm component', () => {
  it('should render ModeForm component with mode DISPLAY correctly', () => {
    const toggleFunction = jest.fn();
    const tree = renderer.create(
      <Provider store={store}>
        <ModeForm
          mode={EntryMode.DISPLAY}
          onClick={toggleFunction}
        />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render ModeForm component with mode EDIT correctly', () => {
    const toggleFunction = jest.fn();
    const tree = renderer.create(
      <Provider store={store}>
        <ModeForm
          mode={EntryMode.EDIT}
          onClick={toggleFunction}
        />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
