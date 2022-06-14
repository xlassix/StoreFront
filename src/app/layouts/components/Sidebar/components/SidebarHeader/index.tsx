import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Close } from '../../assets/x.svg';
import { ReactComponent as Avatar } from '../../../../../assets/user.svg';

import { messages } from './messages';
import { StyleConstants } from 'styles/StyleConstants';
import { Link } from 'react-router-dom';
import { H5 } from 'app/components/Typography/H5/H5';
import { customMedia } from 'styles/media';

interface Props {
  userFullname: string | undefined;
  onClick: () => void;
}

export const SidebarHeader = memo(({ userFullname, onClick }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <CloseBtn type="button" onClick={onClick}>
        <CloseIcon />
      </CloseBtn>

      {userFullname ? (
        <Profile>
          <ProfileAvatar>
            <AvatarIcon />
          </ProfileAvatar>
          <ProfileTextWrap>
            <H5>
              {t(...messages.greeting())} {userFullname}!
            </H5>
          </ProfileTextWrap>
        </Profile>
      ) : (
        <Profile>
          <ProfileAvatar>
            <AvatarIcon />
          </ProfileAvatar>
          <ProfileTextWrap>
            <H5>{t(...messages.profileName())}</H5>
          </ProfileTextWrap>
        </Profile>
      )}

      <ProfileTitleWrap>
        <ProfileTitle>{t(...messages.title())}</ProfileTitle>
        <SeeAllText to="/">{t(...messages.pageLink())}</SeeAllText>
      </ProfileTitleWrap>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: relative;
  width: 100%;
  height: 120px;
  background-color: transparent;
  margin-top: 20px;

  ${customMedia.lessThan('large')`
    height: 100px;
    margin-top: 10px;
  `};
`;

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  border: none;
  cursor: pointer;
  z-index: 102;
  ${p => p.theme.direction['right']}: 0px;
  background-color: ${p => p.theme.color.colorBackground};
`;

const CloseIcon = styled(Close)`
  width: 18px;
  height: 18px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;

const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 18%;
`;

const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: ${StyleConstants.COLOR_ACCENT};

  ${customMedia.lessThan('large')`
    height: 35px;
    width: 35px;
  `};
`;

const AvatarIcon = styled(Avatar)`
  margin: auto 0;
  height: 21px;
  width: 21px;

  path {
    stroke: ${StyleConstants.COLOR_WHITE};
  }
`;

const ProfileTextWrap = styled.div`
  ${p => p.theme.direction['margin-left']}: 10px;

  ${H5} {
    font-weight: 600;
  }

  ${customMedia.lessThan('large')`
    ${H5} {
      font-weight: 500;
      font-size: 12px;
    }
  `};
`;

const ProfileTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ProfileTitle = styled(H5)`
  font-weight: 600;

  ${customMedia.lessThan('large')`
    font-weight: 500;
    font-size: 12px;
  `};
`;
const SeeAllText = styled(Link)`
  text-decoration: none;
  color: ${StyleConstants.COLOR_LIGHT_RED};

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_RED_HOVER};
  }

  ${customMedia.lessThan('medium')`
    font-size: 10px;
  `};
`;
