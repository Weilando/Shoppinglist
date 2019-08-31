import React from 'react';
import PropTypes from 'prop-types';
import { EntryMode } from '../constants/entry';

function ModeForm(props) {
  return (
    <form>
      <label htmlFor="modeButton">Switch to mode: </label>
      <input
        type="button"
        id="modeButton"
        className="entry"
        value={props.mode === EntryMode.DISPLAY ? "Edit" : "Display"}
        onClick={props.onClick}
      />
    </form>
  );
}

ModeForm.propTypes = {
  mode: PropTypes.oneOf([EntryMode.DISPLAY, EntryMode.EDIT]).isRequired,
  onClick: PropTypes.func.isRequired,
}

ModeForm.defaultProps = {
  mode: PropTypes.DISPLAY,
}

export default ModeForm;
