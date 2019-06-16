import React, { PureComponent } from 'react';
import catImg from '../static/cat.png'; // Tell Webpack this JS file uses this image
class Cat extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const mouse = this.props.mouse;
    return (
        // Import result is the URL of your image
        <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export default Cat;
