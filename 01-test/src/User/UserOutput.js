import React from 'react';
import Radium from 'radium';

const UserInput = (props) => {
  const style = {
    border: '1px solid red',
    '@media(min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="User User-output" style={style}>
      <p>Username: {props.username}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Radium(UserInput);
