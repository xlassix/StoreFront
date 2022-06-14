import * as React from 'react';
import { render } from '@testing-library/react';

import { Blockquote } from '../Blockquote';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(
    <Blockquote
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

describe('<Blockquote />', () => {
  it('should render a <blockquote> tag', () => {
    const blockquote = renderWithTheme();
    expect(
      blockquote.container.querySelector('blockquote'),
    ).toBeInTheDocument();
  });
});
