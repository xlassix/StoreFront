import * as React from 'react';
import { render } from '@testing-library/react';

import { Container } from '../Container';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <Container
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

describe('<Container />', () => {
  it('should render a <div> tag', () => {
    const containerDiv = renderWithTheme();
    expect(containerDiv.container.querySelector('div')).toBeInTheDocument();
  });
});
