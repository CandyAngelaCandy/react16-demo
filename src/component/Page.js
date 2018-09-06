import React, { PureComponent } from 'react';
import PageLayout from './PageLayout';

class Page extends PureComponent{
    render() {
        const user = this.props.user;
        const userLink = (
            <div>
                <h4>
                    userName:{user.userName}
                </h4>
                <a href={user.link}>go to</a>
                <p>{this.props.message}</p>
            </div>
        );
        return <PageLayout userLink={userLink} />;
    }
}

export default Page;

