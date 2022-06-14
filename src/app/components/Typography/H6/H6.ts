import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const H6 = styled.h6`
  font-size: 12px;
  line-height: 16px;

  &.subhead {
    font-size: 8px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 10px;
  }
`;
