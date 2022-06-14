// import { H2 } from 'app/components/Typography/H2/H2';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import styled from 'styled-components';
// import { StyleConstants } from '../../../styles/StyleConstants';
import { Catalog } from '../Catalog/Loadable';
// import { OrdersList } from '../OrdersList/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A AltMall homepage" />
      </Helmet>
      {/* <RenderHomepageContentsHere /> */}
      {/* <Container>
        <Header>Homepage</Header>
        <InheritHeader>Second Header</InheritHeader> */}
      {/* <OrdersList /> */}
      {/* </Container> */}
      <Catalog />
    </>
  );
}

// const Container = styled.div`
//   background: ${StyleConstants.COLOR_YELLOW};
// `;

// const Header = styled.h1`
//   margin: 30px 0 0 30px;
// `;

// const InheritHeader = styled(H2)``;
