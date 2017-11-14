import React, { Component } from 'react';
import  Header from './components/Header';
import  UserInput from './components/UserInput';
import  List from './components/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: []
    }
  }
  componentDidMount() {
      fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <UserInput></UserInput>
        <List></List>
      </div>
    );
  }
}

export default App;
