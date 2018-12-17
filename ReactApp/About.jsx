import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class About extends Component {

    constructor(props) {
        super(props);
        this.state = { data: false };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        console.log("onsubmit");
        this.setState({ data: true });
    }
    render() {
        if (this.state.data) {
            return (<Redirect push to={{pathname:'/Content', state:{myData:this.state.data}}}/>);
        }
        return (<div><p>About</p><input type="button" value="submit" onClick={this.onSubmit}/></div>);
    }
}

export default About;