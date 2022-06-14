import { lazyLoad } from 'utils/loadable';

export const SidebarContent = lazyLoad(
  () => import('./index'),
  module => module.SidebarContent,
);
