import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// use for react hooks:
// import React, {useState} from 'react';

// traditional version
// this is stateFUL component as it can manage state, called also SMART components or container
class App extends Component {
  // state is reserved word here
  state = {
    persons: [
      {name : 'Max', age: 28},
      {name : 'Abel', age: 31},
      {name : 'Steph', age: 19},
    ],
    oneHobby: 'Racing'
  }

  // event list you can listen: https://reactjs.org/docs/events.html#supported-events
  switchNameHandler = (newName) => {
    // DON'T DO THIS (mutate state directly):
    // this.state.persons[0].name = this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max';
    // instead do this
    this.setState({persons: [
      {name : newName, age: 28},
      {name : 'Abel', age: 31},
      {name : 'Steph', age: 19},
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name : 'Max', age: 28},
      {name : event.target.value, age: 31},
      {name : 'Steph', age: 19},
    ]})
  }

  render() {
    let style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1 className="App-title">I am a react app</h1>
        <p>It's working!</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}
        >Change names</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // this is one way of passing function as argument
            click={() => this.switchNameHandler('Maxie')}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
          >My hobbies: {this.state.oneHobby}</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            // this is other way of passing function as argument, THIS ONE IS RECOMMENDED
            click={this.switchNameHandler.bind(this, 'Max!')}
          />
      </div>
    );
    // the same
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-title'}, 'Welcomeee'));
  }
}
export default App;

// // react hooks version:
// const app = (props) => {
//   // use state returns ALWAYS an array with 2 elements - first is our state, second is ALWAYS a function that enables us to update this state
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name : 'Max', age: 28},
//       {name : 'Abel', age: 31},
//       {name : 'Steph', age: 19},
//     ],
//     oneHobby: 'Racing'
//   });

//   const switchNameHandler = () => {
//     setPersonsState({persons:
//       [
//         {name : personsState.persons[0].name === 'Max' ? 'Maximilian' : 'Max', age: 28},
//         {name : 'Abel', age: 31},
//         {name : 'Steph', age: 19},
//       ],
//       oneHobby: 'Racing' // in Hooks you must pass full state, in traditional class based solution you don't have as react automatically merges changed props with exsting one
//     });
//   }

//   return (
//     <div className="App">
//       <h1 className="App-title">I am a react app</h1>
//       <p>It's working!</p>
//       <button onClick={switchNameHandler}>Change names</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: {personsState.oneHobby}</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }
// export default app;
