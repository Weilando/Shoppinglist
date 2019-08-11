import React from 'react';
import PropTypes from 'prop-types';

let EntryMode = {
  display: "DISPLAY",
  edit: "EDIT",
}

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  static propTypes = {
    eId: PropTypes.number.isRequired,
    eContent: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['DISPLAY','EDIT']),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange(event) {
    this.props.onChange(this.props.eId, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.eId, this.props.eContent);
  }

  handleRemove() {
    this.props.onSubmit(this.props.eId, '');
  }

  render() {
    if(this.props.mode === EntryMode.display) {
      return (
        <li>
          {this.props.eContent}
        </li>
      );
    }

    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.eContent}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
          />
          <input
            type="button"
            value="Remove"
            onClick={this.handleRemove}
          />
        </form>
      </li>
    );
  }
}

export { Entry, EntryMode };
