import React, { PureComponent } from 'react';
import { themes ,ThemeContext} from "./theme-context";
import Content from "./Content";

class ThemeApp extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme:this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <div>
          <ThemeContext.Provider value={this.state}>
            <Content/>
          </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeApp;