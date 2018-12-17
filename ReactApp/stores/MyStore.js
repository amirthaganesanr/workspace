import todoApp from '../reducers/MyReducers.js';
import { createStore } from 'redux';

export let store = createStore(todoApp);