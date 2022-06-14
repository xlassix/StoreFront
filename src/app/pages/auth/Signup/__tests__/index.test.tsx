import * as React from 'react';
import { render } from '@testing-library/react';

import { SignupPage } from '..';

describe('<SignupPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SignupPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
