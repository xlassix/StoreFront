import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { CatalogState } from './types';
import { catalogSagas } from './saga';
import { Catalog } from 'types/Catalog';

// The initial state of the Homepage
export const initialState: CatalogState = {
  catalogs: [],
  loading: false,
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchCatalogs(state) {
      state.loading = true;
    },
    catalogLoaded(state, action: PayloadAction<Catalog[]>) {
      const catalogs = action.payload;
      state.catalogs = catalogs;
      state.loading = false;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: catalogActions } = slice;

export const useCatalogSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: catalogSagas });
  return { actions: slice.actions };
};
