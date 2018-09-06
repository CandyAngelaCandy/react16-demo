import React, { PureComponent } from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            主题
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;
