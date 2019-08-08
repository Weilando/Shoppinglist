import React from 'react';
import PropTypes from 'prop-types';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    eId: PropTypes.number.isRequired,
    eContent: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange(event) {
    this.props.onChange(this.props.eId, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.eId, event.target.value);
  }

  render() {
    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.eContent}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
          />
        </form>
      </li>
    );
  }
}

export default Entry;
