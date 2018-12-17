import React, { Component } from 'react';

class DisplayProduct extends Component {
	componentDidMount()
	{
		console.log(this.props.location.state);
		var productName = this.props.location.state;
	}
    render() {
        return (this.props.location.state.myData);
    }
}

export default DisplayProduct;