import {SEARCH_OFFERS, SEARCH_OPTIONS} from '../constants/MyConstants.js';

let nextTodoId = 0;
let nextOptionId=0;

export function addTodo(text) {
   return {
      type: SEARCH_OFFERS,
      id: nextTodoId++,
      text
   };
}

export function addOption(text) {
   return {
      type: SEARCH_OPTIONS,
      id: nextOptionId++,
      text
   };
}
