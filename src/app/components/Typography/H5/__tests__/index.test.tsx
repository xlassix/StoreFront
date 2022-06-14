import * as React from 'react';
import { render } from '@testing-library/react';

import { H5 } from '../H5';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <H5
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

describe('<H5 />', () => {
  it('should render a <h5> tag', () => {
    const h5 = renderWithTheme();
    expect(h5.container.querySelector('h5')).toBeInTheDocument();
  });
});
