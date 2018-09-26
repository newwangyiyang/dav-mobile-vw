import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import './assets/css/reset.css';
import IndexPage from './routes/IndexPage/IndexPage';
import HomePage from './routes/HomePage/HomePage';
import ShowPage from './routes/ShowPage/ShowPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/HomePage' exact component={HomePage} />
        <Route path='/ShowPage' exact component={ShowPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
