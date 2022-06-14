import React, { memo } from 'react';
import { Redirect, Route } from 'react-router';

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const NotAuthGuard: React.FC<Props & Record<string, any>> = memo(
  ({ isAuthenticated, children, ...rest }: Props) => {
    console.log('isAuthenticated :>> ', isAuthenticated);
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return <Route {...rest}>{children}</Route>;
  },
);
