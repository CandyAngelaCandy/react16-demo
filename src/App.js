import React, { Component } from 'react';
import './App.css';
import MouseTracker from './component/MouseTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MouseTracker/>
      </div>
    );
  }
}

export default App;
