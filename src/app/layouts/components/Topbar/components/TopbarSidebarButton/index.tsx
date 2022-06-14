import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

import { ReactComponent as Hamburger } from '../../assets/menu.svg';
import { TopbarBtn } from '../TopbarBtn';
import { sidebarActions } from 'app/layouts/components/Sidebar/slice';
interface Props {}

export const TopbarSidebarButton = memo((props: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <DesktopButton
        type="button"
        onClick={() => dispatch(sidebarActions.changeSidebarVisibility())}
      >
        <TopbarIcon />
      </DesktopButton>
    </div>
  );
});

const TopbarIcon = styled(Hamburger)`
  margin: auto;
  transition: all 0.3s;
  width: 30px;
  z-index: 101;

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;

const DesktopButton = styled(TopbarBtn)``;
