import React, { memo, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { customMedia } from 'styles/media';
import { Button } from '../../../../../components/Button/Button';
import { ReactComponent as Search } from '../../assets/search.svg';
import { useStoreState, useStoreActions } from 'easy-peasy';

interface Props {}

export const TopbarSearch = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const inputRef = useRef(null);
  const setSearch = useStoreActions((actions: any) => actions.setSearch);
  const search = useStoreState((state: any) => state.search);
  return (
    <Form>
      <SearchIcon />
      <SearchField
        type="text"
        placeholder={t(...messages.placeholder())}
        onChange={e => setSearch(e.target.value)}
        ref={inputRef}
        value={search}
      />
      <SearchBtn className="btn btn-dark">{t(...messages.btnText())}</SearchBtn>
    </Form>
  );
});

const Form = styled.form`
  display: flex;
  margin: auto 0;
  padding: 0;
  position: relative;
  padding: 10px;
  background-color: ${p => p.theme.color.colorBackgroundBody};
  border-radius: 4px;
  height: 56px;
  width: 100%;
  align-items: center;
  max-width: 700px;

  ${customMedia.lessThan('small')`
    height: 45px;
  `};

  ${customMedia.lessThan('xsm')`
    padding: 5px;
  `}
`;

const SearchField = styled.input`
  width: 100%;
  height: 40px;
  max-width: 513px;
  min-width: 50px;
  margin-top: auto;
  margin-bottom: auto;
  ${p => p.theme.direction['margin-right']}: 20px;
  ${p => p.theme.direction['margin-left']}: 0px;
  ${p => p.theme.direction['padding-right']}: auto;
  ${p => p.theme.direction['padding-left']}: 0px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.colorText};
  font-size: 12px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #cac1c1;
    ${p => p.theme.direction['padding-right']}: 50px;
  }

  ${customMedia.lessThan('medium')`
    max-width: 150px;
  `};

  ${customMedia.lessThan('xmedium')`
    max-width: 120px;   
  `};

  ${customMedia.lessThan('small')`
    max-width: 300px;
    margin-bottom: 10px;
    height: 29px;
  `};

  ${customMedia.lessThan('xsm')`
    ${p => p.theme.direction['margin-right']}: 5px;
    margin-bottom: unset;
  `}
`;

const SearchBtn = styled(Button)`
  margin-bottom: 0;
  height: 40px;

  ${customMedia.lessThan('small')`
    height: 29px;
  `};
`;

const SearchIcon = styled(Search)`
  margin: auto 10px;
  width: 25px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }

  ${customMedia.lessThan('xsm')`
    margin: auto 5px;
    width: 15px;
  `}
`;
