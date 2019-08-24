import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import NewEntry from '../../components/NewEntry';

describe('snapshot tests for NewEntry component', () => {
  it('should render NewEntry component correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <NewEntry />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
