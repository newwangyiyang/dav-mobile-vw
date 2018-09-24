import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import HomePage from './routes/HomePage/HomePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/HomePage' exact component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
