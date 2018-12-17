import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'
import Option from './Option.jsx'
import { store } from '../stores/MyStore.js';

export default class MyOptions extends Component {
    render() {
        return (<div class="btn-group-justified">
            {this.props.options.map(option =>
               <Option key = {option.productid}
                  {...option}/>
            )}</div>)
    }
}