import * as React from 'react';
import { render } from '@testing-library/react';

import { ContainerWrap } from '../ContainerWrap';
import { themes } from 'styles/theme/themes';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <ThemeProvider
      theme={
        theme || {
          color: themes.colors.light,
          direction: themes.directions.ltr,
          shadow: themes.shadowStatus.on,
          border: themes.borderStatus.on,
        }
      }
    >
      <ContainerWrap />,
    </ThemeProvider>,
  );

describe('<ContainerWrap />', () => {
  it('should render a <div> tag', () => {
    const wrapDiv = renderWithTheme();
    expect(wrapDiv.container.querySelector('div')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const wrapDiv = renderWithTheme();
    expect(wrapDiv.container.firstChild).toHaveStyle(
      `background: ${themes.colors.light.colorBackgroundBody}`,
    );
  });
});
