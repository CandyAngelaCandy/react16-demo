import React, { PureComponent } from 'react';
import MouseWithCat from './MouseWithCat';

class MouseTracker extends PureComponent {

  render() {
    return (
        <div>
            <h1>Move the mouse around!</h1>
            <MouseWithCat />
        </div>
    );
  }
}

export default MouseTracker;
