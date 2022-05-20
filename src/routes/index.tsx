import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
  Login,
  Loading,
  Registration
} from 'pages'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path='/loading' component={Loading} />
      <Route exact path='/register' component={Registration} />
      <Route path='*' component={Registration} />
    </Switch>
  </BrowserRouter>
)

export default Routes