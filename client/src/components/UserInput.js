import React, { Component } from 'react';


class App extends Component {
  state = {users: []}
  componentDidMount() {
      fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));
  }
  render() {
    return (
        <div>
            <input/>
            <button className="btn btn-primary">Search</button>
        </div>
      
    );
  }
}

export default App;