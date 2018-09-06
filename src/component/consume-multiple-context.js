import React, { PureComponent } from 'react';
import {UserContext,ThemeContext} from "./Context";
import Content from "./Content";

class ConsumeMultipleApp extends PureComponent{
  render() {
    return (
      <div>
        <ThemeContext.Provider value={"dark"}>
          <UserContext.Provider value={{name:"admin"}}>
            <Content/>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}


export default ConsumeMultipleApp;
