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
        <div className="container">
          <DivName>
            <ColName>Selected Store(BamBam Store)</ColName>
            <ColName>Payment Method (Cash on Delivery)</ColName>
            <ColName>Order Total (₦0)</ColName>
            <ColName>Summary and Checkout</ColName>
            <ColName>View Product Images</ColName>
          </DivName>
        </div>
      </Row>
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
        <CatalogItems catalogList={catalogs} />
      </Row>
    </Container>
  );
};
const menuItem = styled(Row)`
  margin-bottom: 30px;
  height: 20px;
  position: relative;
  background-color: #fff;
  margin-right: 30px;
  box-sizing: border-box;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: none;
`;
const PageTitle = styled.h3`
  margin-top: 30px;
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

const ColName = styled.span`
  margin-left: 5px;
  height: 50px;
  padding: 32px;
  color: #ffffff;
  background-color: #100276;
  width: auto;
  font-size: 9px;
`;

const DivName = styled.div`
  margin-top: 30px;
`;
