import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../store/store';
import MealSuggestion from '../../components/MealSuggestion';

describe('snapshot tests for MealSuggestion component', () => {
  it('should render MealSuggestion component Spaghetti Bolognese correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MealSuggestion
          key = {0}
          mealId = {42}
          mealName = {'Spaghetti Bolognese'}
          />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
