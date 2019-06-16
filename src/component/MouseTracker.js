import React, {PureComponent} from 'react';
import Mouse from './Mouse';
import Cat from './Cat';
import Dog from "./Dog";

class MouseTracker extends PureComponent {

    //only aim at PureComponent
    renderTheCat = (mouse) => {
        return (<Cat mouse={mouse}/>);
    }

    renderTheDog = (mouse) => {
        return (<Dog mouse={mouse}/>);
    }

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderTheCat}/>
                <Mouse render={this.renderTheDog}/>
            </div>
        );
    }
}

export default MouseTracker;
