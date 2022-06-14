import { Catalog } from 'types/Catalog';

export interface CatalogState {
  catalogs: Catalog[];
  loading: boolean;
}
