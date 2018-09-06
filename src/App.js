import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Glossary from './component/Glossary';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Glossary/>
        </React.Fragment>
    );
  }
}

export default App;
