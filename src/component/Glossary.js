import React, { Component } from 'react';

class Glossary extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {id:0,term:"add",description:"hello world"},
                {id:1,term:"multiply",description:"hello world"}
            ]
        };
    }

    render() {
        return (
            <dl>
                {this.state.items.map(item => (
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                ))}
            </dl>
        );
    }
}

export default Glossary;

