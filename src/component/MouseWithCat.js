import React, { PureComponent } from 'react';
import Cat from './Cat';

class MouseWithCat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
          <Cat mouse={this.state}/>
      </div>
    );
  }
}

export default MouseWithCat;
