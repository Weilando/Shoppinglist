import React from 'react';
import PropTypes from 'prop-types';
import { Entry, EntryMode } from './Entry';
import NewEntry from './NewEntry';
import InfoBox from './InfoBox';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: this.props.contents,
      mode: EntryMode.DISPLAY,
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    contents: PropTypes.array,
  }

  static defaultProps = {
    contents: [ 'Sparkling Water', 'Bananas', 'Cheese' ],
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

  addEntry(content) {
    const newContents = this.state.contents.slice();
    newContents.push(content);
    this.setState({contents: newContents});
  }

  deleteEntry(key) {
    const newContents = this.state.contents.slice();
    newContents.splice(key, 1);
    this.setState({contents: newContents});
  }

  updateEntry(key, content) {
    const newContents = this.state.contents.slice();
    newContents[key] = content;
    this.setState({contents: newContents});
  }

  onChange(eId, value) {
    this.updateEntry(eId, value);
  }

  onSubmit(eId, value) {
    if(value === '') {
      this.deleteEntry(eId);
    } else {
      this.updateEntry(eId, value);
    }
  }

  render() {
    const { contents } = this.state;
    const keys = Array(contents.length);
    for(let i=0; i<keys.length; i++) {
      keys[i] = i;
    }

    let entryList = keys.map((tmpKey) =>
      <Entry
        key={tmpKey}
        eId={Number(tmpKey)}
        eContent={String(contents[tmpKey])}
        mode = {this.state.mode}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );

    return (
      <div class="Shoppinglist">
        <form>
          <label htmlFor="modeButton">Switch to mode: </label>
          <input
            type="button"
            id="modeButton"
            class="entry"
            value={this.state.mode === EntryMode.DISPLAY ? "Edit" : "Display"}
            onClick={this.toggleMode}
          />
        </form>

        <ul class="Shoppinglist">
          {entryList}

          <NewEntry
            key="-1"
            addEntry={this.addEntry}
          />
        </ul>

        <InfoBox
          entryCount={contents.length}
          //doneEntryCount={}
        />
      </div>
    );
  }
}

export default Shoppinglist;
