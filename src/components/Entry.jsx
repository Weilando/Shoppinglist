import React from 'react';
import PropTypes from 'prop-types';

let EntryMode = {
  DISPLAY: "DISPLAY",
  EDIT: "EDIT",
}

export let EntryStatus = {
  OPEN: "OPEN",
  DONE: "DONE",
}

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: EntryStatus.OPEN,
    };

    this.toggleStatus = this.toggleStatus.bind(this);
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

  toggleStatus() {
    switch (this.state.status) {
      case EntryStatus.OPEN:
        this.setState({status: EntryStatus.DONE});
        break;
      case EntryStatus.DONE:
      default:
        this.setState({status: EntryStatus.OPEN});
    }
  }

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
    if(this.props.mode === EntryMode.DISPLAY) {
      return (
        <li
          onClick={this.toggleStatus}
          class={this.state.status === EntryStatus.DONE ? 'done' : ''}
        >
          {this.props.eContent}
        </li>
      );
    }

    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            class="entry"
            value={this.props.eContent}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
          />
          <input
            type="button"
            class="entry"
            value="Remove"
            onClick={this.handleRemove}
          />
        </form>
      </li>
    );
  }
}

export { Entry, EntryMode };
