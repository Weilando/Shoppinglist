import React from 'react';
import MealSuggestion from './MealSuggestion';
import { getMealSuggestionsForMainIngredient } from '../axios/MealService';

class MealSuggestionsBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    }
  }

  async componentDidMount() {
    const meals = await getMealSuggestionsForMainIngredient('chicken_breast');
    this.setState({meals: meals});
  }

  getMealSuggestionList() {
    const meals = this.state.meals;
    const keys = [...Array(meals.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((tmpKey) =>
      <MealSuggestion
        key = {tmpKey}
        mealId = {Number(meals[tmpKey].idMeal)}
        mealName = {String(meals[tmpKey].strMeal)}
      />
    );
  }

  render() {
    let mealSuggestionList = this.getMealSuggestionList();

    return (
      <div className="InfoBox">
        <h3>Meal suggestions:</h3>
        <ul className="Shoppinglist">
          {mealSuggestionList}
        </ul>
      </div>
    );
  }
}

export default MealSuggestionsBox;
