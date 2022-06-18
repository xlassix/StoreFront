import React from 'react';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import StoreCard from './StoreCard';
import { EntityStore } from '../../../../types/EntityStore';
interface Props {
  stores: EntityStore[];
}

const StoreCardList = (props: Props) => {
  return (
    <Flex>
      {props.stores.length > 0 ? (
        props.stores.map(store => {
          return <StoreCard store={store} key={store.Id} />;
        })
      ) : (
        <h4>No record found</h4>
      )}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1%;
  margin: 0.5rem 1rem;

  & > div {
    max-width: 32%;
    flex-basis: 32%;
  }
  & > h4 {
    padding: 10rem 0;
    text-align: center;
    width: 100%;
  }
  ${customMedia.lessThan('medium')`
  & > div {
    max-width: 49%;
    flex-basis: 49%;
  }
`};
  ${customMedia.lessThan('small')`
    & > div {
      max-width: 90%;
      flex-basis: 90%;
      margin: 0.5rem 2rem;
    }
`};
`;

export default StoreCardList;
