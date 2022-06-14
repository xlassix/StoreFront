import * as React from 'react';
import { render } from '@testing-library/react';

import { SplitView } from '..';

describe('<SplitView  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SplitView />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
