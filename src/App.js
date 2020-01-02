import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import MyComponent from './MyComponent';
import ColoredBlock from './ColoredBlock.js';

let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <Clock />
        <MyComponent />
        <ColoredBlock />
      </div>
    );
  }
}


export default App;
