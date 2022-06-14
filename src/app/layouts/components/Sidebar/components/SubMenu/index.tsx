import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { messages } from './messages';
import { Collapse } from 'reactstrap';
import classNames from 'classnames';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const SubMenu = memo(({ title, children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const categoryClass = classNames({
    'sidebar__category-wrap--open': isCollapsed,
  });

  const collapseSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <MenuButton
        className={categoryClass}
        type="button"
        onClick={collapseSidebar}
      >
        <Title>{title}</Title>
        <Chevron>{'>'}</Chevron>
      </MenuButton>
      <SubMenuCollapse isOpen={isCollapsed}>
        <SubMenuBlock>
          <div>{children}</div>
        </SubMenuBlock>
      </SubMenuCollapse>
    </div>
  );
});

const Chevron = styled.span`
  color: ${p => p.theme.color.colorText};
  position: absolute;
  transition: left 0.3s;
  opacity: 1;
  transition: opacity 0.5s 0.2s, transform 0.3s;
  ${p => p.theme.direction['right']}: 0px;
`;

const MenuButton = styled.button`
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

  &.sidebar__category-wrap--open {
    ${Chevron} {
      transform: rotate(90deg);
    }
  }

  ${customMedia.lessThan('large')`
    margin-top: 7px;
  `};

  ${customMedia.lessThan('medium')`
    margin-top: 3px;
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
  `};

  ${customMedia.lessThan('medium')`
    font-size: 10px;
  `};

  ${customMedia.lessThan('small')`
    font-size: 12px;
  `};
`;

const SubMenuCollapse = styled(Collapse)``;

const SubMenuBlock = styled.ul`
  transition: height 0.5s 0s, padding 0.5s 0s, opacity 0.4s 0.1s;
  padding: 15px 0;

  .sidebar__link {
    display: block;
    ${p => p.theme.direction['padding-left']}: 20px;

    &:hover {
      background-color: ${p => p.theme.color.colorBackground};
    }

    ${customMedia.lessThan('large')`
      ${p => p.theme.direction['padding-left']}: 10px;
    `};
  }

  ${customMedia.lessThan('large')`
    padding: 5px 0;
  `};
`;
