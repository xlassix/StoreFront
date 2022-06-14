import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { MainWrapper } from '..';
import { configureAppStore } from 'store/configureStore';

const renderWrapper = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <MainWrapper>
          <div></div>
        </MainWrapper>
      </ThemeProvider>
    </Provider>,
  );

describe.only('<MainWrapper  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const wrapper = renderWrapper(store);
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
