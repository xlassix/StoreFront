import * as React from 'react';
import { render } from '@testing-library/react';

import { LandingRoute } from '..';
import { BrowserRouter } from 'react-router-dom';

describe('<LandingRoute  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <BrowserRouter>
        <LandingRoute />
      </BrowserRouter>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
