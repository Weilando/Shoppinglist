import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Entry, EntryMode} from './Entry';
import NewEntry from './NewEntry';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: EntryMode.DISPLAY,
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  static propTypes = {
    entries: PropTypes.array,
  }

  static defaultProps = {
    entries: [],
  }

  toggleMode() {
    switch (this.state.mode) {
      case EntryMode.DISPLAY:
        this.setState({mode: EntryMode.EDIT});
        break;
      case EntryMode.EDIT:
      default:
        this.setState({mode: EntryMode.DISPLAY});
    }
  }

  render() {
    const entries = this.props.entries.slice();
    const keys = [...Array(entries.length).keys()]; // Array with keys from 0 to entries.length

    let entryList = keys.map((tmpKey) =>
      <Entry
        key={tmpKey}
        eId={Number(entries[tmpKey].id)}
        eContent={String(entries[tmpKey].content)}
        mode = {this.state.mode}
      />
    );

    return (
      <div className="Shoppinglist">
        <form>
          <label htmlFor="modeButton">Switch to mode: </label>
          <input
            type="button"
            id="modeButton"
            className="entry"
            value={this.state.mode === EntryMode.DISPLAY ? "Edit" : "Display"}
            onClick={this.toggleMode}
          />
        </form>

        <ul className="Shoppinglist">
          {entryList}

          <NewEntry
            key="-1"
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.general.entryList,
  }
}

export default connect(mapStateToProps)(Shoppinglist);
