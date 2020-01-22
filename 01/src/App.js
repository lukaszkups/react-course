import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">I am a react app</h1>
        <p>It's working!</p>
        <Person name="Max" age="30" />
        <Person name="Cara" age="32">My hobbies: Racing</Person>
        <Person name="Oke" age="22" />
      </div>
    );
    // the same
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-title'}, 'Welcomeee'));
  }
}

export default App;
