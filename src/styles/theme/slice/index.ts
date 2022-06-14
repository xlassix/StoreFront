import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { getThemeFromStorage } from '../utils';
import {
  ThemeKeyType,
  DirectionKeyType,
  BorderStatusKeyType,
  ShadowStatusKeyType,
  ThemeState,
} from './types';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
  selectedDir: 'ltr',
  selectedBorderStatus: 'on',
  selectedShadowStatus: 'on',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
    changeDirection(state, action: PayloadAction<DirectionKeyType>) {
      state.selectedDir = action.payload;
    },
    changeBorder(state, action: PayloadAction<BorderStatusKeyType>) {
      state.selectedBorderStatus = action.payload;
    },
    changeShadow(state, action: PayloadAction<ShadowStatusKeyType>) {
      state.selectedShadowStatus = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
