import { Catalog } from 'types/Catalog';
import { Basket } from 'types/Basket';

export interface CatalogState {
  catalogs: Catalog[];
  loading: boolean;
}

export interface BasketState {
  baskets: Basket | null;
}
