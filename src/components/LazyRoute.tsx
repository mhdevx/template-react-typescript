import React, { Fragment } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Fallback from './Fallback';

export interface LazyRouteProps extends RouteProps {
  component: React.ComponentType;
}

const LazyRoute: React.FC<LazyRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Fragment>
      <Route {...rest}>
        <React.Suspense fallback={<Fallback />}>
          <Component />
        </React.Suspense>
      </Route>
    </Fragment>
  );
};

export default LazyRoute;
