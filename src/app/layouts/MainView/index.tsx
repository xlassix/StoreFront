import React, { memo } from 'react';
import { ContainerWrap } from '../components/ContainerWrap/ContainerWrap';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

interface Props {
  children: React.ReactNode;
}

export const MainView = memo((props: Props) => {
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <Topbar />
      </div>
      <ContainerWrap className="container_wrap">{props.children}</ContainerWrap>
    </div>
  );
});
