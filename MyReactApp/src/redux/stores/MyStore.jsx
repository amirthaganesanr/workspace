import todoApp from '../reducers/MyReducers.jsx';
import { createStore } from 'redux';

export let store = createStore(todoApp);