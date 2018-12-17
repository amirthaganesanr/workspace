import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '' }
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (<div><input type = "text" onChange={this.updateState} value = {this.state.data}/><h1>{this.state.data}</h1></div>);
    }
}

export default SimpleForm;