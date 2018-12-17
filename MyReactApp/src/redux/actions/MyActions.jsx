import {SEARCH_OPTIONS} from '../constants/MyConstants.jsx';

let nextOptionId=0;

export function addOption(text) {
   return {
      type: SEARCH_OPTIONS,
      id: nextOptionId++,
      text
   };
}
