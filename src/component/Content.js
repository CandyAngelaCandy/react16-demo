import React, {PureComponent} from "react";
import {UserContext,ThemeContext} from "./Context";

class Content extends PureComponent{
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        (theme)=>(
                            <UserContext.Consumer>
                                {
                                    (user) => (
                                        <div>theme:{theme},user:{user.name}</div>
                                    )
                                }
                            </UserContext.Consumer>
                        )
                    }
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Content;
