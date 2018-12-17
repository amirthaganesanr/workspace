import React, { Component } from 'react';

class Content extends Component {
    componentWillMount() {
        console.log(this.props.location.state);
    }
    render() {
        return (<div>Content</div>);
    }
}

export default Content;