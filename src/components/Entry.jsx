import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEntry, updateEntry, toggleStatus } from '../redux/actions';

export let EntryMode = {
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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    eId: PropTypes.number.isRequired,
    eContent: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['DISPLAY','EDIT']),
  }

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

  handleDelete(event) {
    this.props.deleteEntry(this.props.eId);
  }

  handleChange(event) {

  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    if(this.props.mode === EntryMode.DISPLAY) {
      return (
        <li
          onClick={this.props.toggleStatus}
          className={this.state.status === EntryStatus.DONE ? 'done' : ''}
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
            className="entry"
            value={this.props.eContent}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
          />
          <input
            type="button"
            className="entry"
            value="Remove"
            onClick={this.handleDelete}
          />
        </form>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateEntry: (id, content) => dispatch(updateEntry(id, content)),
  deleteEntry: (id) => dispatch(deleteEntry(id)),
  toggleStatus: (id) => dispatch(toggleStatus(id)),
});

const ConnectedEntry = connect(null, mapDispatchToProps)(Entry);
export { ConnectedEntry as Entry };
