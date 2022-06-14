import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string;
  path: string;
  onClick: () => void;
}

export const TopbarMenuLink = memo((props: Props) => {
  return (
    <MenuLink to={props.path} onClick={props.onClick}>
      <LinkIcon>{props.children}</LinkIcon>
      <LinkTitle>{props.title}</LinkTitle>
    </MenuLink>
  );
});

const MenuLink = styled(Link)`
  display: flex;
  padding: 18px 29px;
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: $color-accent;
    opacity: 0;
    transition: all 0.3s;
    ${p => p.theme.direction['left']}: 0px;
  }

  &:hover {
    background-color: ${p => p.theme.color.colorHover};

    &:before {
      opacity: 1;
    }
  }
`;

const LinkIcon = styled.span`
  font-size: 13px;
  line-height: 13px;
  ${p => p.theme.direction['margin-right']}: 10px;

  svg {
    height: 16px;
    width: 16px;
    path {
      stroke: ${p => p.theme.color.colorText};
    }
  }
`;

const LinkTitle = styled.p`
  display: flex;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;
