/**
 *
 * SplitView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
}

export const SplitView = memo(({ children }: Props) => {
  console.log('got here');
  return (
    <Div>
      <div className="left">
        <div className="centered">
          <img src="img_avatar2.png" alt="Avatar woman" />
          <h2>Jane Flex</h2>
          <p>Some text.</p>
        </div>
      </div>

      <div className="right">
        <div className="centered">
          <img src="img_avatar.png" alt="Avatar man" />
          <h2>John Doe</h2>
          <p>Some text here too.</p>
          {children}
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  width: 100vw;
  display: flex;

  .left {
    left: 0;
    background-color: #111;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    right: 0;
    background-color: burlywood;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .centered img {
    width: 150px;
    border-radius: 50%;
  }
`;
