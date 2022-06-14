import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonGroup } from '../ButtonGroup';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <ButtonGroup
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

describe('<ButtonGroup />', () => {
  it('should render a <div> tag', () => {
    const buttonGroup = renderWithTheme();
    expect(buttonGroup.container.querySelector('div')).toBeInTheDocument();
  });
});
