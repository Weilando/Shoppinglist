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
    const listItems = entries.map((entry) =>
      <li>{entry}</li>
    );

    //for(let i=0; i<entries.length; i++) {
    //  console.log(i)
    //}
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
