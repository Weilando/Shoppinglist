import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEntry, updateEntry, toggleStatus } from '../redux/actions';
import { EntryMode, EntryStatus } from '../enums/entry';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleStatus = this.handleToggleStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    eId: PropTypes.number.isRequired,
    eContent: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['OPEN', 'DONE']),
    mode: PropTypes.oneOf(['DISPLAY','EDIT']),
  }

  handleToggleStatus() {
    this.props.toggleStatus(this.props.eId);
  }

  handleDelete(event) {
    this.props.deleteEntry(this.props.eId);
  }

  handleChange(event) {
    this.props.updateEntry(this.props.eId, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.props.eContent === '') {
      this.props.deleteEntry(this.props.eId);
    }

    this.props.updateEntry(this.props.eId, this.props.eContent);
  }

  render() {
    if(this.props.mode === EntryMode.DISPLAY) {
      return (
        <li
          onClick={this.handleToggleStatus}
          className={this.props.status === EntryStatus.DONE ? 'doneCross' : ''}
        >
          {this.props.eContent}
        </li>
      );
    }

    return (
      <li className={this.props.status === EntryStatus.DONE ? 'done' : ''}>
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

export default connect(null, mapDispatchToProps)(Entry);
