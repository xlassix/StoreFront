import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { messages } from './messages';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';

interface Props {
  title: string;
  onClick: () => void;
}

export const SidebarOption = memo(({ title, onClick }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Li onClick={onClick}>
      <Title>{title}</Title>
      <Chevron>{'>'}</Chevron>
    </Li>
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

  &:nth-child(1) {
    margin-top: 0px;
  }

  ${customMedia.lessThan('large')`
    margin-top: 5px;
  `};
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  position: relative;
  display: flex;
  align-items: center;

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

const Chevron = styled.span`
  color: ${p => p.theme.color.colorText};
  position: absolute;
  transition: left 0.3s;
  ${p => p.theme.direction['right']}: 0px;
`;
