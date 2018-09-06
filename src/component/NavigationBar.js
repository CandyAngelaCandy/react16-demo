import React, { PureComponent } from 'react';

class NavigationBar extends PureComponent{
    render() {
        return (
            <React.Fragment>
                {this.props.userLink}
            </React.Fragment>
        );
    }
}

export default NavigationBar;
