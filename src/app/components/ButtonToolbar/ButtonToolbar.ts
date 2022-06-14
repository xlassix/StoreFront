import styled from 'styled-components/macro';
export const ButtonToolbar = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;

  & > * {
    ${p => p.theme.direction['margin-right']}: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: -10px;
  }

  &.center {
    & > * {
      margin-right: auto;
      margin-left: auto;
    }
  }
`;
