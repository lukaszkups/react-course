import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1 className="App-title">Welcomeee</h1>
    //   </div>
    // );
    // the same
    return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-title'}, 'Welcomeee'));
  }
}

export default App;
