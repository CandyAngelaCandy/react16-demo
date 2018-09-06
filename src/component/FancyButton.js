import React, { PureComponent } from 'react';
import {ThemeContext} from "./Fancy-context";

class FancyButton extends PureComponent{

  focus= () => {
    alert("focus");
  }

  render() {
    return (
      <div>
        FancyButton
      </div>
    );
  }

}

export default React.forwardRef((props,ref) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <FancyButton {...props} ref={ref} theme={theme}/>
        )}
    </ThemeContext.Consumer>
))