import React from 'react';
import PropTypes from 'prop-types';

function InfoBox(props) {
  return (
    <div className="InfoBox">
      <p>Entries: {props.entryCount} &emsp; Done entries: {props.doneEntryCount}</p>
    </div>
  );
}

InfoBox.propTypes = {
  entryCount: PropTypes.number.isRequired,
  doneEntryCount: PropTypes.number.isRequired,
};

InfoBox.defaultProps = {
  entryCount: 0,
  doneEntryCount: 0,
}

export default InfoBox;
