import React from 'react';
import PropTypes from 'prop-types';
import { HTML_MEAL } from '../constants/urlConstants';

function MealSuggestion(props) {
  return (
    <li>
      <a href={`${HTML_MEAL}${props.mealId}`} target="_blank" rel="noopener noreferrer">
        {props.mealName}
      </a>
    </li>
  );
}

MealSuggestion.propTypes = {
  mealId: PropTypes.number.isRequired,
  mealName: PropTypes.string.isRequired,
};

MealSuggestion.defaultProps = {
  mealId: 'Spaghetti Bolognese',
  mealName: 52770,
}

export default MealSuggestion;
