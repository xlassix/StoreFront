import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';
import { MainWrapper } from './layouts/MainWrapper';
import { MainRoutes } from './routes/MainRoutes';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - BetaStore"
        defaultTitle="BetaStore"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="An BetaStore application" />
      </Helmet>
      <MainWrapper>
        <main>
          <MainRoutes />
        </main>
      </MainWrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}
