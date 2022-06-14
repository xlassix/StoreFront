import * as React from 'react';
import { render } from '@testing-library/react';

import { TopbarMenuLink } from '..';

describe('<TopbarMenuLink  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <TopbarMenuLink title="test" path="/" onClick={jest.fn}>
        <div>test</div>
      </TopbarMenuLink>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
