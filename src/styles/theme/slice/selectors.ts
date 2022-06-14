import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { themes } from '../themes';
import { isSystemDark } from '../utils';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.colors.dark : themes.colors.light;
    }
    return themes.colors[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);

export const selectDirection = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes.directions[theme.selectedDir];
  },
);

export const selectDirectionKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selectedDir,
);

export const selectBorder = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes.borderStatus[theme.selectedBorderStatus];
  },
);

export const selectBorderKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selectedBorderStatus,
);

export const selectShadow = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes.shadowStatus[theme.selectedShadowStatus];
  },
);

export const selectShadowKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selectedShadowStatus,
);
