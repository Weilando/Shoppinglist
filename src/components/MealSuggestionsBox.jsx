import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MealSuggestion from './MealSuggestion';

class MealSuggestionsBox extends React.Component {
  static propTypes = {
    suggestions: PropTypes.array,
  }

  static defaultProps = {
    suggestions: [],
  }

  getMealSuggestionList() {
    const suggestions = this.props.suggestions;
    const keys = [...Array(suggestions.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((tmpKey) =>
      <MealSuggestion
        key = {tmpKey}
        mealId = {Number(suggestions[tmpKey].idMeal)}
        mealName = {String(suggestions[tmpKey].strMeal)}
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

const mapStateToProps = state => {
  return {
    suggestions: state.mealSuggestions.mealSuggestionList,
  }
}

export default connect(mapStateToProps)(MealSuggestionsBox);
