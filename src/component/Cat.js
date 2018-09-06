import React, { PureComponent } from 'react';
class Cat extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
        移动
      </div>
    );
  }
}

export default Cat;
