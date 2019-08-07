import React from 'react';
import PropTypes from 'prop-types';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.props = {
      key: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }
  };

  render() {
    return (
      <li key={this.props.key}>
        {this.props.content}
      </li>
    );
  }
}

export default Entry;
