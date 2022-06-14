import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export const H3 = styled.h3`
  font-size: 24px;
  line-height: 32px;

  &.subhead {
    font-size: 18px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 24px;
  }
`;
