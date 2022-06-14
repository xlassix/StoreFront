import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export const H5 = styled.h5`
  font-size: 14px;
  line-height: 18px;

  &.subhead {
    font-size: 10px;
    color: ${StyleConstants.COLOR_ADDITIONAL};
    line-height: 12px;
  }
`;
