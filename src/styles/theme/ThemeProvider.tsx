import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import {
  selectTheme,
  selectDirection,
  selectBorder,
  selectShadow,
} from './slice/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const colorTheme = useSelector(selectTheme);
  const directionTheme = useSelector(selectDirection);
  const borderTheme = useSelector(selectBorder);
  const shadowTheme = useSelector(selectShadow);

  return (
    <OriginalThemeProvider
      theme={{
        color: colorTheme,
        direction: directionTheme,
        shadow: shadowTheme,
        border: borderTheme,
      }}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
