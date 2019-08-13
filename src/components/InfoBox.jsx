import React from 'react';
import PropTypes from 'prop-types';

function InfoBox(props) {
  //<p>Entries: {props.entryCount} &emsp; Done entries: {props.doneEntryCount}</p>
  return (
    <div class="Shoppinglist">
      <p>Entries: {props.entryCount}</p>
    </div>
  );
}

InfoBox.propTypes = {
  entryCount: PropTypes.number.isRequired,
  //doneEntryCount: PropTypes.number.isRequired,
};

InfoBox.defaultProps = {
  entryCount: 0,
  //doneEntryCount: 0,
}

export default InfoBox;
