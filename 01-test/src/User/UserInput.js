import React from 'react';
import './User.css'

const UserInput = (props) => {
  return (
    <div className="User User-input">
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
}

export default UserInput;
