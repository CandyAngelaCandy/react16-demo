import React, { PureComponent } from 'react';
import catImg from "../static/cat.png"
class Cat extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const mouse = this.props.mouse;
    return (
        <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export default Cat;
