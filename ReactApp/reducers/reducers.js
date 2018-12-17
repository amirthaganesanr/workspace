import { combineReducers } from 'redux'
import { ADD_TODO } from '../constants/constants.js'

function todo(state, action) {
    console.log('reducer todo');
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

function todos(state = [], action) {
    console.log('reducer todos');
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}
const todoApp = combineReducers({
    todos
})
export default todoApp;