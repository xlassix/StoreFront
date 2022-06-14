import * as React from 'react';
import { render } from '@testing-library/react';

import { H2 } from '../H2';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H2
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

describe('<H2 />', () => {
  it('should render a <h2> tag', () => {
    const h2 = renderWithTheme();
    expect(h2.container.querySelector('h2')).toBeInTheDocument();
  });
});
