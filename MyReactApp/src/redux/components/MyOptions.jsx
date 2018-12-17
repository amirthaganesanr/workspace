import React, { Component, PropTypes } from 'react'
import Option from './Option.jsx'
import { store } from '../stores/MyStore.jsx';

export default class MyOptions extends Component {
componentWillUpdate()
{
	confirm("bla");
}
    render() {
        return (<div class="btn-group-justified">
            {this.props.options.map(option =>
               <Option key = {option.productid}
                  {...option}/>
            )}</div>)
    }
}