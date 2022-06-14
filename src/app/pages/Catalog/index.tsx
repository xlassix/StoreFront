import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CatalogItems from './components/CatalogItems';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectCatalogs } from './slice/selector';
import { catalogActions, useCatalogSlice } from './slice';
export const Catalog = () => {
  const catalogs = useSelector(selectCatalogs);
  const loading = useSelector(selectLoading);
  const { actions } = useCatalogSlice();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCatalogs());
  }, []);

  console.log(catalogs);

  // if (loading) {
  //   return <h4>Loading...</h4>;
  // }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <PageTitle onClick={() => dispatch(catalogActions.fetchCatalogs())}>
            Catalog
          </PageTitle>
          <PageSubhead>
            Use this elements, if you want to show some hints or additional
            information
          </PageSubhead>
        </Col>
      </Row>
      <Row>
        <CatalogItems/>
      </Row>
    </Container>
  );
};

const PageTitle = styled.h3`
  color: #646777;
  text-align: left;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 20px;
  line-height: 32px;
`;

const PageSubhead = styled.h3`
  font-size: 14px;
  opacity: 0.7;
  text-align: left;
  line-height: 24px;
  color: #999;
`;
