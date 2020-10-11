import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './land/Login';
import Page from './land/Page';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' component={Login} exact/>
      <Route path='/page' component={Page} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
