import React from 'react';
import PropTypes from 'prop-types';

class Entry extends React.Component {
  static propTypes = {
    eContent: PropTypes.string.isRequired,
  };

  static defaultProps = {
    eContent: 'Cheese...',
  };

  render() {
    return (
      <li>
        {this.props.eContent}
      </li>
    );
  }
}

export default Entry;
