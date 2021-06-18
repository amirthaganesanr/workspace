import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container1 from './containers/Container1';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Container1}/>
    </Switch>
  </Router>
);

export default App;