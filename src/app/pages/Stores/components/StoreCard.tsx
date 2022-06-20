import React from 'react';
import styled from 'styled-components';
import { IoCallOutline } from 'react-icons/io5';
import { ImAddressBook } from 'react-icons/im';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import { EntityStore } from '../../../../types/EntityStore';

interface Props {
  key?: any;
  store: EntityStore;
}

const StoreCard = (props: Props) => {
  const setSelectedStore = useStoreActions(
    (state: any) => state.setSelectStore,
  );
  const history = useHistory();

  const handleChange = (store: EntityStore) => {
    setSelectedStore(store);
    history.push('/catalog');
  };
  return (
    <Card onClick={() => handleChange(props.store)}>
      <h5>{props.store.Name}</h5>
      <div className="divider"></div>
      <div>
        <p>
          <IoCallOutline /> {props.store.Phone}
        </p>
      </div>
      <div>
        <p>
          <ImAddressBook />
          {`${props.store.Address1}`}
        </p>
      </div>
      <div>
        <p>
          <b> Customer Type:</b> {props.store.ActivityStatus}
        </p>
      </div>
      <div>
        <p>
          <b>Existing Activity Status:</b>
          {props.store.ActivityStatus}
        </p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background: ${p => p.theme.color.colorBackground};
  color: var(--bs-light);
  margin: 0.2rem 0;
  width: 100%;
  display: block;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  caret-color: transparent;

  & > div {
    display: flex;
    align-items: center;
    width: 100%;

    & > p {
      margin-left: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${p => p.theme.color.colorText};
    }

    & > svg {
      height: 16px;
      width: 16px;
    }
  }

  & > h5 {
    font-weight: 900;
    font-size: 1.2rem;
  }

  & > div.divider {
    width: 100%;
    height: 1px;
    color: ${p => p.theme.color.colorText};
    margin: 0.2rem 0;
  }
`;

export default StoreCard;
