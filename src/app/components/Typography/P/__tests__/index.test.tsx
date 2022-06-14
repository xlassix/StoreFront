import * as React from 'react';
import { render } from '@testing-library/react';

import { P } from '../P';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <P
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

describe('<P />', () => {
  it('should render a <p> tag', () => {
    const p = renderWithTheme();
    expect(p.container.querySelector('p')).toBeInTheDocument();
  });
});
