import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyReduxApp from './MyReduxApp.jsx'
import DisplayProduct from './DisplayProduct.jsx'

class MyReduxRouterApp extends React.Component {
    render() {
        return (<Switch>
      <Route exact path='/' component={MyReduxApp}/>
      <Route path='/Display' component={DisplayProduct}/>
    </Switch>);
    }
}

export default MyReduxRouterApp;