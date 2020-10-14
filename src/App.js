import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Land from './land/Land';
import Page from './pages/Page'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' component={Land} exact/>
      <Route path='/page' component={Page} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
