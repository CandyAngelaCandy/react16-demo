import React, { Component } from 'react';
import './App.css';
import Page from './component/Page';

class App extends Component {
  render() {
    const user = {userName:"cindy",link:"www.baidu.com"};
    return (
      <div className="App">
       <Page user={user} message={"hello world"}/>
      </div>
    );
  }
}

export default App;
