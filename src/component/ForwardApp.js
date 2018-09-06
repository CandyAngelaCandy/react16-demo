import React, { PureComponent } from 'react';
import FancyButton from './FancyButton';
import {ThemeContext} from "./Fancy-context";

const ref = React.createRef();
class ForwardApp extends PureComponent{

  render() {
    const handleClick = () =>  {
        ref.current.focus();
    };

    return (
      <div>
          <ThemeContext.Provider value="light">
              <FancyButton ref={ref}>
              </FancyButton>
          </ThemeContext.Provider>
          <div>
            <button onClick={handleClick}>click button</button>
          </div>
      </div>
    );
  }
}

export default ForwardApp;
