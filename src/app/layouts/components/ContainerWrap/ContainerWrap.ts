import styled from 'styled-components/macro';
import { customMedia } from '../../../../styles/media';
export const ContainerWrap = styled.div`
  padding-top: 82px;
  min-height: 100vh;
  transition: 'padding-left' 0.3s;
  ${p => p.theme.direction['padding-left']}: 0px;
  background: ${p => p.theme.color.colorBackgroundBody};

  ${customMedia.lessThan('small')`
    padding-top: 150px;
  `};
`;
