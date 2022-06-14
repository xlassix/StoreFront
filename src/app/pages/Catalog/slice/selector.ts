import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.catalog || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  catalogState => catalogState.loading,
);

export const selectCatalogs = createSelector(
  [selectDomain],
  catalogState => catalogState.catalogs,
);
