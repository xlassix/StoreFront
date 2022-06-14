import * as React from 'react';
import { render } from '@testing-library/react';

import { NotAuthGuard } from '..';

describe('<NotAuthGuard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NotAuthGuard />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
