import React, { PureComponent } from 'react';
import {withTheme} from "./WithTheme";
import Button from "./Button";
import {ThemeContext} from "./theme-context";


class AppContext extends PureComponent {

  render() {
   const ThemedButton = withTheme(Button);

    return (
      <div>
        <section>
          <ThemeContext.Provider value="light">
            <ThemedButton/>
          </ThemeContext.Provider>
        </section>
      </div>
    );
  }
}

export default AppContext;
