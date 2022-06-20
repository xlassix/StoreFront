import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage/Loadable';
import { MainView } from '../../layouts/MainView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
import { Stores } from '../../pages/Stores/index';
import { SignIn } from 'app/pages/auth/SignIn/Loadable';

interface Props {}

export const LandingRoute = memo((props: Props) => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/catalog">
        <MainView>
          <HomePage />
        </MainView>
      </Route>
      <Route exact path="/store">
        <MainView>
          <Stores />
        </MainView>
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
