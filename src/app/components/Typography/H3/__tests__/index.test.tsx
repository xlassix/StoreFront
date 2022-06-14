import * as React from 'react';
import { render } from '@testing-library/react';

import { H3 } from '../H3';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H3
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

describe('<H3 />', () => {
  it('should render a <h3> tag', () => {
    const h3 = renderWithTheme();
    expect(h3.container.querySelector('h3')).toBeInTheDocument();
  });
});
