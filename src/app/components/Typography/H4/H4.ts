import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export const H4 = styled.h4`
  font-size: 18px;
  line-height: 24px;

  &.subhead {
    font-size: 12px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 16px;
  }
`;
