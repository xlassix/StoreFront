import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonToolbar } from '../ButtonToolbar';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <ButtonToolbar
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

describe('<ButtonToolbar />', () => {
  it('should render a <div> tag', () => {
    const buttonGroup = renderWithTheme();
    expect(buttonGroup.container.querySelector('div')).toBeInTheDocument();
  });
});
