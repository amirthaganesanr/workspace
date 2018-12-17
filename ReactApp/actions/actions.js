import {ADD_TODO} from '../constants/constants.js';

let nextTodoId = 0;

export function addTodo(text) {
	console.log('action method');
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}
