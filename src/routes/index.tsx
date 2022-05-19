import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
  Login,
  Loading
} from 'pages'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path='/loading' component={Loading} />
      <Route path='*' component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Routes