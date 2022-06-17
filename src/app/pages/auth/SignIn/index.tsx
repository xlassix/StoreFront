import React, { memo } from 'react';
import styled from 'styled-components';
import Login from './components/login';

interface Props {}

export const SignIn = memo((props: Props) => {
  return (
    <Body>
      <Login />
    </Body>
  );
});

const Body = styled.div`
  height: 100vh;
  background-color: #183359;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
