import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Content from './Content.jsx'

class RouterBody extends React.Component {
    render() {
        return (<Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Content' component={Content}/>
    </Switch>);
    }
}

export default RouterBody;