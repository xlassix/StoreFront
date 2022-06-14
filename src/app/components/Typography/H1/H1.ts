import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export const H1 = styled.h1`
  font-size: 36px;
  line-height: 48px;

  &.subhead {
    font-size: 30px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 36px;
  }
`;
