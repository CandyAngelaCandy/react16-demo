import React, {PureComponent} from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

class MouseTracker extends PureComponent {

    //only aim at PureComponent
    renderTheCat = (mouse) => {
        return (<Cat mouse={mouse}/>);
    }

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderTheCat}/>
            </div>
        );
    }
}

export default MouseTracker;
