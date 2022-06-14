import 'styled-components';
import {
  Theme as ColorTheme,
  Direction,
  BorderStatus,
  ShadowStatus,
} from './themes';

export type Theme = {
  color: ColorTheme;
  direction: Direction;
  shadow: ShadowStatus;
  border: BorderStatus;
};

export type ThemeClasses = {
  color: 'theme-dark' | 'theme-light';
  direction: 'ltr' | 'rtl';
  shadow: 'blocks-shadows-on' | 'blocks-shadows-off';
  border: 'round-borders-on' | 'round-borders-off';
};
/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
