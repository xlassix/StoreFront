import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.sidebar || initialState;

export const selectSidebarVisibility = createSelector(
  [selectSlice],
  sidebar => sidebar.show,
);
