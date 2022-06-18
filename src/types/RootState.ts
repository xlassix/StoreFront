import { BasketState, CatalogState } from 'app/pages/Catalog/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { SidebarState } from '../app/layouts/components/Sidebar/slice/types';

export interface RootState {
  theme?: ThemeState;
  sidebar?: SidebarState;
  catalog?: CatalogState;
  basket?: BasketState;
}
