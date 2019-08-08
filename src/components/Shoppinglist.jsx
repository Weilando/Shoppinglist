import React from 'react';
import Entry from './Entry';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [ 42, 'Cheese', 3, 'Bananas', 'Potatoes', 'Coke', 'Sparling Water' ],
      //entries: Array(5).fill(null),
    };
  }

  render() {
    const { contents } = this.state;
    const keys = Array(contents.length);
    for(let i=0; i<keys.length; i++) {
      keys[i] = i;
    }

    const listItems = keys.map((tmpKey) =>
      <Entry key={tmpKey} eContent={String(contents[tmpKey])} />
    );

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default Shoppinglist;
