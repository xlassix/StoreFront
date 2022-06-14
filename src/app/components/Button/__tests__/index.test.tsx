import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../Button';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <Button
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

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const button = renderWithTheme();
    expect(button.container.querySelector('button')).toBeInTheDocument();
  });
});
