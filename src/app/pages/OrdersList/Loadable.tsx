/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const OrdersList = lazyLoad(
  () => import('./index'),
  module => module.OrdersList,
);
