import * as React from 'react';
import { render } from '@testing-library/react';

import { H6 } from '../H6';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H6
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

describe('<H6 />', () => {
  it('should render a <h6> tag', () => {
    const h6 = renderWithTheme();
    expect(h6.container.querySelector('h6')).toBeInTheDocument();
  });
});
