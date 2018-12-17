import todoApp from '../reducers/reducers.js';
import { createStore } from 'redux';

export let store = createStore(todoApp);