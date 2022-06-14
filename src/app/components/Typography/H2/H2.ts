import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export const H2 = styled.h2`
  font-size: 30px;
  line-height: 36px;

  &.subhead {
    font-size: 24px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 32px;
  }
`;
