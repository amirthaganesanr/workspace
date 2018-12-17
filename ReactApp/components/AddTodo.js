import React, { Component, PropTypes } from 'react';
import {store} from '../stores/store.js';

export default class AddTodo extends Component {
   constructor(props)
   {
      super(props);
      this.handleClick=this.handleClick.bind(this);
   }
   handleClick(e)
   {
      const node = document.getElementById("input1");
      const text = node.value.trim();
      this.props.onAddClick(text);
      node.value='';
      console.log(store);
   }
   render() {
      return (
         <div>
            <input type = 'text' id = 'input1' />
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
         </div>
      )
   }
}
