import React, { PureComponent } from 'react';

class Mouse extends PureComponent {
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
          {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;
