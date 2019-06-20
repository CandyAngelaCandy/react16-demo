import React, { Component } from 'react';

export function withSubscription(WrappedComponent, selectData) {
    // ...并返回另一个组件...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ...负责订阅相关的操作...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}