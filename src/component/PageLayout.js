import React, { PureComponent } from 'react';
import NavigationBar from './NavigationBar';

class PageLayout extends PureComponent{
    render() {
        return <NavigationBar userLink={this.props.userLink} />;
    }
}

export default PageLayout;