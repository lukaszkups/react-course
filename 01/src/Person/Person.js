import React from 'react' // this needs to be imported to parse jsx!

// my first functional component (no need to import {Component} from react library)
const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
