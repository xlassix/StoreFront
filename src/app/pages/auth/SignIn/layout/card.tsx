import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  return (
    <CardBody>
      <img alt="company logo" src="/img/bs.gif" />
      {props.children}
    </CardBody>
  );
};

const CardBody = styled.div`
  width: 22rem;
  padding: 1.5rem 2rem;
  margin: 1rem;
  background: var(--bs-white);
  border-radius: 2rem;
`;
