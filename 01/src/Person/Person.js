import React from 'react' // this needs to be imported to parse jsx!

// my first functional component (no need to import {Component} from react library)
// it only returns jsx, if you want additional logic e.g. use state, then need to use extends Component class way
// IT AS A stateLESS component as it doesn't manage any internal state, we should create as many as possible this kind of components
// they're called staeless, DUMB or presentational components
const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
