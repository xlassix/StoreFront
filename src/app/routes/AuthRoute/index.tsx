import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from '../../pages/auth/SignIn/Loadable';
import { NotAuthGuard } from '../guards/NotAuthGuard/index';
// import { SplitView } from '../../layouts/SplitView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
// import { P } from 'app/components/Typography/P/P';

interface Props {}

export const AuthRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  const isAuthenticated = false;
  return (
    <Switch>
      <NotAuthGuard exact path="/auth/signin" isAuthenticated={isAuthenticated}>
        {/* <SplitView> */}
        <SignIn />
        {/* </SplitView> */}
      </NotAuthGuard>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
