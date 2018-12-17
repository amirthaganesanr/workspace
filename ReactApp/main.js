import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import App from './MyReduxRouterApp.jsx';
import { store } from './stores/MyStore.js';

let rootElement = document.getElementById('app');

render(<BrowserRouter><Provider store = {store}>
      <App />
   </Provider></BrowserRouter>,
    rootElement
)