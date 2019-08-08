import React from 'react';
import PropTypes from 'prop-types';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    eContent: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange(event) {
    this.props.onChange(this.key, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.key, event.target.value);
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
          <input type='reset' value='Remove' name='reset' />
        </form>
      </li>
    );
  }
}

export default Entry;
