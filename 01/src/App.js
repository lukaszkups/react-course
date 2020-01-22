import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // state is reserved word here
  state = {
    persons: [
      {name : 'Max', age: 28},
      {name : 'Abel', age: 31},
      {name : 'Steph', age: 19},
    ]
  }

  // event list you can listen: https://reactjs.org/docs/events.html#supported-events
  switchNameHandler = () => {
    // DON'T DO THIS (mutate state directly):
    // this.state.persons[0].name = this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max';
    this.setState({persons: [
      {name : this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max', age: 28},
      {name : 'Abel', age: 31},
      {name : 'Steph', age: 19},
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">I am a react app</h1>
        <p>It's working!</p>
        <button onClick={this.switchNameHandler}>Change names</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // the same
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-title'}, 'Welcomeee'));
  }
}

export default App;
