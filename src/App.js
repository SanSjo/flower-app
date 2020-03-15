import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DetailPage } from './pages/DetailPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detailpage/:flowerId">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
