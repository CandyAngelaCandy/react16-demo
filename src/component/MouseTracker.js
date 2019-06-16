import React, { PureComponent } from 'react';
import MouseWithCat from './MouseWithCat';
import MouseWithDog from './MouseWithDog';

class MouseTracker extends PureComponent {

  render() {
    return (
        <div>
            <h1>Move the mouse around!</h1>
            <MouseWithCat />
            <MouseWithDog />
        </div>
    );
  }
}

export default MouseTracker;
