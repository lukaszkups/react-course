import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Bob', age: 23},
      {username: 'Cloe', age: 33},
      {username: 'Vasquez', age: 19}
    ],
    showList: false
  }

  changeName = (index, event) => {
    let usersCopy = [...this.state.users];
    usersCopy[index].username = event.target.value;
    this.setState({users: usersCopy});
  }

  toggleList = () => {
    this.setState({showList: !this.state.showList})
  }

  render () {
    return (
      <div className="App">
        <button onClick={() => this.toggleList()}>Toggle list</button>
        {
          this.state.showList ?
            <div>
              <UserOutput username={this.state.users[0].username} age={this.state.users[0].age}></UserOutput>
              <UserInput changed={(e) => this.changeName(0, e)} username={this.state.users[0].username}></UserInput>
              <UserOutput username={this.state.users[1].username} age={this.state.users[1].age}></UserOutput>
              <UserInput changed={(e) => this.changeName(1, e)} username={this.state.users[1].username}></UserInput>
              <UserOutput username={this.state.users[2].username} age={this.state.users[2].age}></UserOutput>
              <UserInput changed={(e) => this.changeName(2, e)} username={this.state.users[2].username}></UserInput>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
