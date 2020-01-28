import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Dashboard title="Hello from React webpack" />;
  }
}

export default hot(App);
