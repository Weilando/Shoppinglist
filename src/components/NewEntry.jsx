import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addEntry } from '../redux/actions'

class NewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*static propTypes = {
    addEntry: PropTypes.func.isRequired,
  }*/

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addEntry(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            class="entry"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            class="entry"
            value="Add"
            disabled={this.state.content === ''}
          />
        </form>
      </li>
    );
  }
}

export default NewEntry;
