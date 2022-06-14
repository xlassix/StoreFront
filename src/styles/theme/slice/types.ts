import { themes } from '../themes';

export type ThemeKeyType = keyof typeof themes.colors | 'system';
export type DirectionKeyType = keyof typeof themes.directions;
export type BorderStatusKeyType = keyof typeof themes.borderStatus;
export type ShadowStatusKeyType = keyof typeof themes.shadowStatus;

export interface ThemeState {
  selected: ThemeKeyType;
  selectedDir: DirectionKeyType;
  selectedBorderStatus: BorderStatusKeyType;
  selectedShadowStatus: ShadowStatusKeyType;
}
