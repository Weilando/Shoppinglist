import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Shoppinglist from '../../components/Shoppinglist';

describe('snapshot tests for Shoppinglist component', () => {
  it('should render empty Shoppinglist component correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Shoppinglist />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
