import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingRoute } from '../LandingRoute/index';
import { AuthRoute } from '../AuthRoute/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';

interface Props {}

export const MainRoutes = memo((props: Props) => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      {/* Other module routes should come before the landing pages */}
      <Route path="/" component={LandingRoute} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
