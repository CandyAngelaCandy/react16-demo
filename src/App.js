import React, { Component } from 'react';
import './App.css';
import AppContext from './component/AppContext';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppContext/>
      </div>
    );
  }
}

export default App;
