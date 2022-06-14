import * as React from 'react';
import { render } from '@testing-library/react';

import { H4 } from '../H4';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H4
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

describe('<H4 />', () => {
  it('should render a <h4> tag', () => {
    const h4 = renderWithTheme();
    expect(h4.container.querySelector('h4')).toBeInTheDocument();
  });
});
