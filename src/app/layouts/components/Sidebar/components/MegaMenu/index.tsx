import React, { memo } from 'react';
import styled from 'styled-components/macro';
import Scrollbar from 'react-smooth-scrollbar';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { customMedia } from 'styles/media';
import { SubMenu } from '../SubMenu';
import { SidebarLink } from '../SidebarLink';
import { H5 } from '../../../../../components/Typography/H5/H5';
import { ReactComponent as LeftArrow } from '../../../../../assets/left_arrow.svg';

interface Props {
  closeMega: () => void;
  option: { title?: string };
}

export const MegaMenu = memo(({ option, closeMega }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <MenuContent>
        <MenuTitle>{option.title}</MenuTitle>
        <MobileTitle onClick={closeMega}>
          <BackIcon />
          {t(...messages.backToMain())} {option.title}
        </MobileTitle>
        <MenuWrapper>
          <SidebarScroll className="scroll">
            <InnerWrapper>
              <SubMenuContent>
                <ul>
                  <SubMenu title="Camera & Photos">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                  <SubMenu title="Accessories">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                  <SubMenu title="Security & Survellance">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                  <SubMenu title="Baby, Kids & Toys">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                  <SubMenu title="Home Theatre & Audio Systems">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                  <SubMenu title="Television & Audios">
                    <SidebarLink route="/" title="Cameras" />
                    <SidebarLink route="/" title="Accessories" />
                    <SidebarLink route="/" title="Batteries" />
                    <SidebarLink route="/" title="Cables" />
                  </SubMenu>
                </ul>
              </SubMenuContent>
            </InnerWrapper>
          </SidebarScroll>
        </MenuWrapper>
      </MenuContent>
      <BannerContent>
        <BannerImage
          alt={t(...messages.bannerAlt())}
          src="https://via.placeholder.com/300x600?text=300x600+Half+Page+Ad"
        />
      </BannerContent>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 400px;
  background-color: ${p => p.theme.color.colorBackground};
  width: calc(100vw - 500px);
  height: 100vh;
  padding: 57px 30px 30px 30px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  display: flex;
  justify-content: space-between;
  max-width: 760px;

  ${customMedia.lessThan('large')`
    left: 320px;
    padding-left: 20px;
    width: calc(100vw - 420px);
  `};

  ${customMedia.lessThan('medium')`
    left: 300px;
    padding-left: 10px;
    padding-right: 10px;
    width: calc(100vw - 350px);
  `};

  ${customMedia.lessThan('small')`
    left: 0;
    width: 300px;
    z-index: 120;
  `};
`;

const MenuContent = styled.div`
  width: 49%;
  color: ${p => p.theme.color.colorText};

  ${customMedia.lessThan('xmedium')`
    width: 100%;
  `};
`;

const MenuWrapper = styled.div`
  transition: all 0.5s ease-in;
  background: transparent;

  a {
    display: block;
  }
`;

const SidebarScroll = styled(Scrollbar)`
  width: 100%;

  & > div {
    height: calc(100vh - 60px);
  }

  .scrollbar-track {
    &.scrollbar-track-y {
      width: 2px;
      ${p => p.theme.direction['margin-right']}: 3px;
    }

    &.scrollbar-track-x {
      display: none !important;
    }
  }

  .scrollbar-thumb {
    opacity: 0.3;
    width: 5px;
  }
`;

const InnerWrapper = styled.div`
  display: block;
`;

const SubMenuContent = styled.div`
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

  ${customMedia.lessThan('large')`
    ul {
      padding-left: 5px;
    }
  `};

  ${customMedia.lessThan('medium')`
    ul {
      padding-left: 0;
    }
  `};
`;

const BannerContent = styled.div`
  width: 49%;
  color: ${p => p.theme.color.colorText};
  max-width: 300px;

  ${customMedia.lessThan('xmedium')`
    display: none;
  `};
`;

const BannerImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

const MenuTitle = styled(H5)`
  font-weight: 700;
  margin-bottom: 10px;

  ${customMedia.lessThan('medium')`
    font-weight: 500;
    font-size: 12px;
  `};

  ${customMedia.lessThan('small')`
    display: none;
  `};
`;

const MobileTitle = styled(H5)`
  font-weight: 500;
  font-size: 12px;

  ${customMedia.greaterThan('small')`
    display: none;
  `};
`;

const BackIcon = styled(LeftArrow)`
  margin-right: 10px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;
