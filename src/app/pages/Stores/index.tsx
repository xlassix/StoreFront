import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Container } from 'reactstrap';
import StoreCardList from './components/StoreCardList';
import { useStoreData } from '../../../utils/hooks';
import { EntityStore } from 'types/EntityStore';

export const Stores = () => {
  const search = useStoreState((state: any) => state.search);
  const { stores, isLoading, error } = useStoreData();

  function filterStore(search: string): EntityStore[] {
    if (search == '') {
      return stores;
    }
    return stores.filter(
      elem =>
        `${elem?.Id}`.includes(search) ||
        `${elem?.Phone}`.includes(search) ||
        `${elem?.Name}`.toLowerCase().includes(search),
    );
  }
  return (
    <Container>
      <HeaderText>Stores</HeaderText>
      {!isLoading ? <StoreCardList stores={filterStore(search)} /> : null}
    </Container>
  );
};

const HeaderText = styled.h3`
  text-align: center;
  padding: 1rem 0 0.5rem;
  caret-color: transparent;
`;
