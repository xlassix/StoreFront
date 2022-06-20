import { BasketState, CatalogState } from 'app/pages/Catalog/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { SidebarState } from '../app/layouts/components/Sidebar/slice/types';
import { UserState } from './User';

export interface RootState {
  theme?: ThemeState;
  sidebar?: SidebarState;
  catalog?: CatalogState;
  user?: UserState;
  basket?: BasketState;
}
