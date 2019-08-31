import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MealSuggestionsBox from '../../components/MealSuggestionsBox';

describe('snapshot tests for MealSuggestionsBox component', () => {
  it('should render empty MealSuggestionsBox component correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MealSuggestionsBox />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
