import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container1 from './containers/Container1';
import FormContainer from './containers/FormContainer';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Container1} />
      <Route exact path="/myForm" component={FormContainer} />
    </Switch>
  </Router>
);

export default App;