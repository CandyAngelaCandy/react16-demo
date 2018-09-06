import React, { PureComponent } from 'react';
import Mouse from "./Mouse";

function WithMouse(Component) {
    return class extends React.Component{
        render(){
            return (
                <Mouse render={(mouse) => (
                  <Component mouse={mouse}/>
                )}/>
            );
        }
    }
}

export default WithMouse;