import * as slice from '..';
import {
  ThemeState,
  ThemeKeyType,
  DirectionKeyType,
  BorderStatusKeyType,
  ShadowStatusKeyType,
} from '../types';
import { RootState } from 'types';
import { themes } from '../../themes';
import { DefaultTheme } from 'styled-components';
import {
  selectTheme,
  selectThemeKey,
  selectDirection,
  selectDirectionKey,
  selectBorder,
  selectShadow,
  selectShadowKey,
  selectBorderKey,
} from '../selectors';

describe('theme slice', () => {
  let state: ThemeState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should change theme color', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeTheme('dark')),
    ).toEqual<ThemeState>({ ...state, selected: 'dark' });
  });

  it('should change theme direction', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeDirection('rtl')),
    ).toEqual<ThemeState>({ ...state, selectedDir: 'rtl' });
  });

  it('should change theme shadow', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeShadow('off')),
    ).toEqual<ThemeState>({ ...state, selectedShadowStatus: 'off' });
  });

  it('should change theme border', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeBorder('off')),
    ).toEqual<ThemeState>({ ...state, selectedBorderStatus: 'off' });
  });

  describe('selectors', () => {
    it('selectTheme, selectDirection, selectShadow, and selectBorder', () => {
      let state: RootState = {};
      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.light,
        direction: themes.directions.ltr,
        border: themes.borderStatus.on,
        shadow: themes.shadowStatus.on,
      });

      state = {
        theme: {
          selected: 'system',
          selectedDir: 'ltr',
          selectedBorderStatus: 'on',
          selectedShadowStatus: 'on',
        },
      };

      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.light,
        direction: themes.directions.ltr,
        border: themes.borderStatus.on,
        shadow: themes.shadowStatus.on,
      });

      state = {
        theme: {
          selected: 'dark',
          selectedDir: 'rtl',
          selectedBorderStatus: 'off',
          selectedShadowStatus: 'off',
        },
      };
      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.dark,
        direction: themes.directions.rtl,
        border: themes.borderStatus.off,
        shadow: themes.shadowStatus.off,
      });
    });

    it('selectThemeKey', () => {
      let state: RootState = {};
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        slice.initialState.selected,
      );

      state = {
        theme: {
          selected: 'system',
          selectedDir: 'ltr',
          selectedBorderStatus: 'off',
          selectedShadowStatus: 'off',
        },
      };
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        state.theme!.selected,
      );
    });

    it('selectDirectionKey', () => {
      let state: RootState = {};

      expect(selectDirectionKey(state)).toEqual<DirectionKeyType>(
        slice.initialState.selectedDir,
      );

      state = {
        theme: {
          selected: 'light',
          selectedDir: 'rtl',
          selectedBorderStatus: 'off',
          selectedShadowStatus: 'off',
        },
      };
      expect(selectDirectionKey(state)).toEqual<DirectionKeyType>(
        state.theme!.selectedDir,
      );
    });

    it('selectBorderStatusKey', () => {
      let state: RootState = {};

      expect(selectBorderKey(state)).toEqual<BorderStatusKeyType>(
        slice.initialState.selectedBorderStatus,
      );

      state = {
        theme: {
          selected: 'light',
          selectedDir: 'ltr',
          selectedBorderStatus: 'off',
          selectedShadowStatus: 'off',
        },
      };
      expect(selectBorderKey(state)).toEqual<BorderStatusKeyType>(
        state.theme!.selectedBorderStatus,
      );
    });

    it('selectShadowStatusKey', () => {
      let state: RootState = {};

      expect(selectShadowKey(state)).toEqual<ShadowStatusKeyType>(
        slice.initialState.selectedShadowStatus,
      );

      state = {
        theme: {
          selected: 'light',
          selectedDir: 'ltr',
          selectedBorderStatus: 'off',
          selectedShadowStatus: 'off',
        },
      };
      expect(selectShadowKey(state)).toEqual<ShadowStatusKeyType>(
        state.theme!.selectedShadowStatus,
      );
    });
  });
});
