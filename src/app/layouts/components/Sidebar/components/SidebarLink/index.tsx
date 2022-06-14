import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';

interface Props {
  route: string;
  onClick?: () => void;
  title: string;
}

export const SidebarLink = memo(({ route, onClick, title }: Props) => {
  return (
    <NavLink
      to={route}
      onClick={onClick}
      activeClassName="sidebar__link-active"
    >
      <Li className="sidebar__link">
        <Title>{title}</Title>
      </Li>
    </NavLink>
  );
});

const Li = styled.li`
  height: 36px;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 11px 20px 11px 0px;
  overflow: hidden;
  background: transparent;
  border: none;
  color: ${p => p.theme.color.colorText};
  margin-top: 15px;

  p {
    position: absolute;
    width: 180px;
    transition: left 0.3s;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    p,
    span {
      color: ${StyleConstants.COLOR_LIGHT_RED};
    }
  }

  ${customMedia.lessThan('large')`
    margin-top: 0;
  `};
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;

  ${customMedia.lessThan('large')`
    font-size: 12px;
    margin-top: 0;
  `};

  ${customMedia.lessThan('medium')`
    font-size: 10px;
  `};

  ${customMedia.lessThan('small')`
    font-size: 12px;
  `};
`;
