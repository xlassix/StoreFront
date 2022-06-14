import styled from 'styled-components/macro';
import { customMedia } from '../../../../styles/media';
export const Container = styled.div`
  ${customMedia.greaterThan('medium')`
    width: 100%;
    max-width: 1630px;
  `};
`;
