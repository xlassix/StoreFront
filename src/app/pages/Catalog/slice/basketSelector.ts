import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './basketSlice';

const selectDomain = (state: RootState) => state.basket || initialState;

export const selectBasket = createSelector(
  [selectDomain],
  basketState => basketState.baskets,
);
