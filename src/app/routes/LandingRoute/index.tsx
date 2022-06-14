import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage/Loadable';
import { MainView } from '../../layouts/MainView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';

interface Props {}

export const LandingRoute = memo((props: Props) => {
  return (
    <Switch>
      <Route exact path="/">
        <MainView>
          <HomePage />
        </MainView>
      </Route>
      <Route exact path="/home">
        <MainView>
          <HomePage />
        </MainView>
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
