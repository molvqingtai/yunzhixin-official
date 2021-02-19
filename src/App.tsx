import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home/Index'
import Notfound from './views/404/Index'

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/home']} component={Home}></Route>
        <Route component={Notfound}></Route>
      </Switch>
    </Router>
  )
}

export default App
