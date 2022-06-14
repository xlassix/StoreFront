import * as React from 'react';
import { render } from '@testing-library/react';

import { TopbarSidebarButton } from '..';

describe('<TopbarSidebarButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TopbarSidebarButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
