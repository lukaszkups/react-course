import React from 'react';
import './User.css'

const UserInput = (props) => {
  return (
    <div className="User User-input">
      <input type="text" onChange={props.changed} value={props.username} />
      <button onClick={props.delete}>Delete</button>
    </div>
  );
}

export default UserInput;
