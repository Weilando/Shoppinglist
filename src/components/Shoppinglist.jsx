import React from 'react';

class Shoppinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: Array(5).fill(null),
    };
  }

  render() {
    const entries = [ 42, 'Cheese', 3 ];
    const keys = Array(entries.length);
    for(let i=0; i<keys.length; i++) {
      keys[i] = i;
    }

    const listItems = keys.map((tmpKey) =>
      <li key={tmpKey.toString()}>
        {entries[tmpKey]}
      </li>
    );

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default Shoppinglist;
