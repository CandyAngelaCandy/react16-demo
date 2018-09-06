import React, { PureComponent,Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  addNumber = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <div className="root">
        <h1>number:{this.state.counter}</h1>
        <button onClick={this.addNumber}>+</button>
      </div>
    );
  }
}

export default BuggyCounter;
