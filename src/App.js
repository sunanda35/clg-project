import React from 'react';
import './App.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Land from './land/Land';
import Page from './pages/Page'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Redirect from='/' to='/login' exact/>
      <Route path='/login' component={Land} exact/>
      <Route path='/page' component={Page} />
      <Route component={Error} path='*' exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
