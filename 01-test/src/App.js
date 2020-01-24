import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      {id: 1, username: 'Bob', age: 23},
      {id: 2, username: 'Cloe', age: 33},
      {id: 3, username: 'Vasquez', age: 19}
    ],
    showList: false
  }

  changeName = (event, id) => {
    let usersCopy = [...this.state.users];
    usersCopy[usersCopy.findIndex((obj) => obj.id === id)].username = event.target.value;
    this.setState({users: usersCopy});
  }

  toggleList = () => {
    this.setState({showList: !this.state.showList})
  }

  deleteListEntry = (id) => {
    let usersCopy = [...this.state.users];
    usersCopy.splice(usersCopy.findIndex((obj) => obj.id === id), 1);
    this.setState({users: usersCopy});
  }

  render () {
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: 'none',
      padding: '8px',
      cursor: 'pointer'
    };

    let list = null;
    if (this.state.showList) {
      list = (
        <div>
          {this.state.users.map((user, index) => {
            return (
              <div key={user.id}>
                <UserOutput username={user.username} age={user.age}></UserOutput>
                <UserInput
                  changed={(e) => this.changeName(e, user.id)}
                  username={user.username}
                  delete={() => this.deleteListEntry(user.id)}
                ></UserInput>
              </div>
            )
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={() => this.toggleList()}
        >Toggle list</button>
        {list}
      </div>
    );
  }
}

export default App;
