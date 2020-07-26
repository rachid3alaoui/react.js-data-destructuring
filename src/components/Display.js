import React, { Component } from 'react';
import Singer from './Singers';

class Display extends Component {
  render() {
    return (
      <div>
        <h1> Musicians : </h1>
        <Singer name="Eric Clapton" age="74" />
        <Singer name="Jimi Hendrix" age="27" />
        <Singer name="David Gilmour" age="73" />
        <Singer name="Carlos Santana" age="71" />
      </div>
    );
  }
}

export default Display;
