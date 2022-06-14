import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const TopbarBtn = memo((props: Props) => {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.children}
    </Button>
  );
});

const Button = styled.button`
  width: 60px;
  height: 100%;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  ${customMedia.greaterThan('medium')`
    display: flex;
  `};

  ${customMedia.lessThan('small')`
    // margin-left: 220px;
    margin-bottom: 15px;
  `};

  /* ${customMedia.lessThan('xxsm')`
    margin-left: 140px;
  `}; */
`;
