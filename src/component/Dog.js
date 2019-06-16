import React, {PureComponent} from 'react';
import dogImg from '../static/dog.png';


class Dog extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const mouse = this.props.mouse;
        return (
            <img
                src={dogImg}
                style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        );
    }
}

export default Dog;
