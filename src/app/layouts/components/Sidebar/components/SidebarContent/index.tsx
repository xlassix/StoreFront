import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { messages } from './messages';
import { customMedia } from 'styles/media';
import { SidebarOption } from '../SidebarOption';

interface Props {
  selectOption: () => void;
}

export const SidebarContent = memo(({ selectOption }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Block>
        <SidebarOption
          title="Phones & Tablet"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Computer Accessories"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Home & Kitchen"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Electronics"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Baby, Kids & Toys"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Beauty & Personal Care"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Fashion"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Automotive & Industrial"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Sport & Fitness"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Furnitures"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Books & Stationery"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Gaming"
          onClick={() => {
            selectOption();
          }}
        />
        <SidebarOption
          title="Groceries"
          onClick={() => {
            selectOption();
          }}
        />
      </Block>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding-top: 15px;
  height: 100%;
  overflow: auto;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  ${customMedia.greaterThan('small')`
    padding-top: 0; 
  `};
`;

const Block = styled.ul`
  padding: 15px 0;

  ${customMedia.lessThan('large')`
    padding: 5px 0; 
  `};

  ${customMedia.lessThan('medium')`
    padding: 0; 
  `};
`;
