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
            <h1>Nightlife App</h1>
        </div>
    );
  }
}

export default App;