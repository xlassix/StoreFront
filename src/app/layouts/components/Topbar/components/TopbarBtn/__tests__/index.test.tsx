import * as React from 'react';
import { render } from '@testing-library/react';

import { TopbarBtn } from '..';

describe('<TopbarBtn  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <TopbarBtn type="button" onClick={jest.fn}>
        <div>Child compoent</div>
      </TopbarBtn>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
