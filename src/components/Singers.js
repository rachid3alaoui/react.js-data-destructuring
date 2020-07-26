import React, { Component } from 'react';

// const Singer = ({ age, name }) => {
//   return (
//     <div>
//       <h2>Singer: {name} </h2>
//       <h3>Age : {age}</h3>
//     </div>
//   );
// };

class Singer extends Component {
  render() {
    const { age, name } = this.props;
    return (
      <div>
        <h2>Singer: {name}</h2>
        <h3>Age : {age}</h3>
      </div>
    );
  }
}

export default Singer;
