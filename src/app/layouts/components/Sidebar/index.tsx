import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import classNames from 'classnames';
import Scrollbar from 'react-smooth-scrollbar';
import { useSelector, useDispatch } from 'react-redux';

import { SidebarContent } from './components/SidebarContent';

import { selectSidebarVisibility } from './slice/selectors';
import { useSidebarSlice } from './slice';
import { SidebarHeader } from './components/SidebarHeader';
import { MegaMenu } from './components/MegaMenu/index';
import { customMedia } from 'styles/media';
// import { customMedia } from 'styles/media';

interface Props {}

const categories = [
  {
    id: 1,
    title: 'Electronics',
    subCategories: [
      {
        id: 11,
        title: 'test 1',
      },
    ],
  },
];

export const Sidebar = memo((props: Props) => {
  const [showMega, setShowMega] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const { actions } = useSidebarSlice();
  const dispatch = useDispatch();
  const show = useSelector(selectSidebarVisibility);
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--show': show,
  });

  const closeSidebar = () => {
    if (show) {
      setShowMega(false);
      dispatch(actions.changeSidebarVisibility());
    }
  };

  const closeMega = () => setShowMega(!showMega);

  const selectOption = () => {
    setShowMega(!showMega);
    const id = 1;
    const filtered = categories.filter(cat => cat.id === id);
    setSelectedOption(filtered[0]);
  };

  return (
    <Wrapper className={sidebarClass}>
      <SidebarHeader onClick={closeSidebar} userFullname={'Oluwaseun Akande'} />
      <SidebarBack
        type="button"
        aria-label="change sidebar visibility button"
        onClick={() => {
          setShowMega(false);
          dispatch(actions.changeSidebarVisibility());
        }}
      />
      <SidebarScroll className="scroll">
        <InnerWrapper>
          <SidebarContent selectOption={selectOption} />
        </InnerWrapper>
      </SidebarScroll>
      {showMega && <MegaMenu option={selectedOption} closeMega={closeMega} />}
    </Wrapper>
  );
});

const SidebarBack = styled.button`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: none;
  background: transparent;
  border: none;
  top: 0;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 102;
  top: 0;
  height: 100vh;
  width: 400px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  padding: 20px 18px 20px 30px;
  transition: all 0.5s ease-in;
  background: ${p => p.theme.color.colorBackground};
  max-width: 400px;
  left: -400px;

  a {
    display: block;
  }

  &.sidebar--show {
    left: 0;

    ${SidebarBack} {
      display: block;
    }
  }

  ${customMedia.lessThan('large')`
    width: 320px;
    padding-left: 20px;
  `};

  ${customMedia.lessThan('medium')`
    width: 300px;
    padding-left: 10px;
  `};
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
