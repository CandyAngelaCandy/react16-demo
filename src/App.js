import React, { Component } from 'react';
import './App.css';
import ConsumeMultipleApp from "./component/consume-multiple-context";

class App extends Component {
  render() {
    return (
      <div className="App">
          <ConsumeMultipleApp/>
      </div>
    );
  }
}

export default App;
