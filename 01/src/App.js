// import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// use for react hooks:
import React, {useState} from 'react';

// // traditional version
// class App extends Component {
//   // state is reserved word here
//   state = {
//     persons: [
//       {name : 'Max', age: 28},
//       {name : 'Abel', age: 31},
//       {name : 'Steph', age: 19},
//     ],
//     oneHobby: 'Racing'
//   }

//   // event list you can listen: https://reactjs.org/docs/events.html#supported-events
//   switchNameHandler = () => {
//     // DON'T DO THIS (mutate state directly):
//     // this.state.persons[0].name = this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max';
//     // instead do this
//     this.setState({persons: [
//       {name : this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max', age: 28},
//       {name : 'Abel', age: 31},
//       {name : 'Steph', age: 19},
//     ]})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1 className="App-title">I am a react app</h1>
//         <p>It's working!</p>
//         <button onClick={this.switchNameHandler}>Change names</button>
//           <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: {this.state.oneHobby}</Person>
//           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//     // the same
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-title'}, 'Welcomeee'));
//   }
// }
// export default App;

// react hooks version:
const app = (props) => {
  // use state returns ALWAYS an array with 2 elements - first is our state, second is ALWAYS a function that enables us to update this state
  const [personsState, setPersonsState] = useState({
    persons: [
      {name : 'Max', age: 28},
      {name : 'Abel', age: 31},
      {name : 'Steph', age: 19},
    ],
    oneHobby: 'Racing'
  });

  const switchNameHandler = () => {
    setPersonsState({persons:
      [
        {name : personsState.persons[0].name === 'Max' ? 'Maximilian' : 'Max', age: 28},
        {name : 'Abel', age: 31},
        {name : 'Steph', age: 19},
      ],
      oneHobby: 'Racing' // in Hooks you must pass full state, in traditional class based solution you don't have as react automatically merges changed props with exsting one
    });
  }

  return (
    <div className="App">
      <h1 className="App-title">I am a react app</h1>
      <p>It's working!</p>
      <button onClick={switchNameHandler}>Change names</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: {personsState.oneHobby}</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}
export default app;
