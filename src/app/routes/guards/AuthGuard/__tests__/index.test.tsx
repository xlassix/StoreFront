import * as React from 'react';
import { render } from '@testing-library/react';

import { AuthGuard } from '..';

describe('<AuthGuard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AuthGuard />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
