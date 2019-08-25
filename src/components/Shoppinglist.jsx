import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Entry from './Entry';
import NewEntry from './NewEntry';
import InfoBox from './InfoBox';
import MealSuggestionsBox from './MealSuggestionsBox';
import ModeForm from './ModeForm';
import { EntryMode, EntryStatus } from '../enums/entry';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: EntryMode.DISPLAY,
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.countDone = this.countDone.bind(this);
    this.getEntryList = this.getEntryList.bind(this);
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

  countDone() {
    const doneEntries = this.props.entries.filter(entry => entry.status === EntryStatus.DONE);
    return Number(doneEntries.length);
  }

  getEntryList() {
    const entries = this.props.entries;
    const keys = [...Array(entries.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((tmpKey) =>
      <Entry
        key = {tmpKey}
        eId = {Number(entries[tmpKey].id)}
        eContent = {String(entries[tmpKey].content)}
        status = {String(entries[tmpKey].status)}
        mode = {this.state.mode}
      />
    );
  }

  render() {
    let entryList = this.getEntryList();

    return (
      <div className="Shoppinglist">
        <ModeForm
          mode={this.state.mode}
          onClick={this.toggleMode}
        />

        <ul className="Shoppinglist">
          {entryList}

          <NewEntry key="-1"/>
        </ul>

        <InfoBox
          entryCount={this.props.entries.length}
          doneEntryCount={this.countDone()}
        />

        <MealSuggestionsBox />
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
