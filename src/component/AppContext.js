import React, {PureComponent} from 'react';
import {themes, ThemeContext} from './theme-context';
import ThemedButton from './theme-button';

class AppContext extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
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
                <section>
                    <ThemeContext.Provider value={this.state.theme}>
                        <ThemedButton onClick={this.toggleTheme}>change Theme</ThemedButton>
                    </ThemeContext.Provider>
                </section>
                <section>
                    <ThemeContext.Provider value={themes}>
                        <ThemedButton/>
                    </ThemeContext.Provider>
                </section>
            </div>
        );
    }
}

export default AppContext;
