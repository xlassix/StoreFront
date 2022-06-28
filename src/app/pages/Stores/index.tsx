import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Container } from 'reactstrap';
import StoreCardList from './components/StoreCardList';
import { useStoreData } from '../../../utils/hooks';
import { EntityStore } from 'types/EntityStore';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const Stores = () => {
  const search = useStoreState((state: any) => state.search);
  const { stores, isLoading, error } = useStoreData();

  function filterStore(search: string): EntityStore[] {
    if (search == '' || !stores) {
      return stores;
    }
    return stores.filter(
      elem =>
        `${elem?.Id}`.includes(search) ||
        `${elem?.Phone}`.includes(search) ||
        `${elem?.Name}`.toLowerCase().includes(search.toLowerCase()) ||
        `${elem?.Address1}`.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return (
    <Container>
      <HeaderText>Stores</HeaderText>
      <StoreCardList stores={filterStore(search)} loading={isLoading} />
    </Container>
  );
};

const HeaderText = styled.h3`
  text-align: center;
  padding: 1rem 0 0.5rem;
  caret-color: transparent;
`;
