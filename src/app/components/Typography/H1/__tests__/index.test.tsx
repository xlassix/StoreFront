import * as React from 'react';
import { render } from '@testing-library/react';

import { H1 } from '../H1';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H1
      theme={
        theme || {
          color: themes.colors.light,
          direction: themes.directions.ltr,
          shadow: themes.shadowStatus.on,
          border: themes.borderStatus.on,
        }
      }
    />,
  );

describe('<H1 />', () => {
  it('should render a <h1> tag', () => {
    const h1 = renderWithTheme();
    expect(h1.container.querySelector('h1')).toBeInTheDocument();
  });
});
