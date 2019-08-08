import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: this.props.contents,
    };

    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    contents: PropTypes.array,
  }

  static defaultProps = {
    contents: [ 42, 'Cheese', 3, 'Bananas', 'Potatoes', 'Coke', 'Sparling Water' ],
  }

  deleteEntry(key) {
    let oldContents = this.state.contents;
    let length = oldContents.length;

    const newContents = Array(length-1);

    if(key >= length) return null;

    for(let i=0; i<key; i++) {
      newContents[i] = oldContents[i];
    }
    for(let i=key; i<length-1; i++) {
      newContents[i] = oldContents[i+1];
    }

    this.setState({contents: newContents});
  }

  updateEntry(key, content) {
    const newContents = this.state.contents.slice();
    newContents[key] = content;
    this.setState({contents: newContents});
  }

  onChange(eId, value) {
    console.log(eId, value);
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

    let listItems = keys.map((tmpKey) =>
      <Entry
        key={tmpKey}
        eId={Number(tmpKey)}
        eContent={String(contents[tmpKey])}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default Shoppinglist;
