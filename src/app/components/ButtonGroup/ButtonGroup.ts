import styled from 'styled-components/macro';

export const ButtonGroup = styled.div`
  border-radius: 5px;
  margin-bottom: -10px;

  .btn {
    padding: 10px 15px;
    font-weight: 500;
    ${p => p.theme.direction['margin-right']}: 0px;
  }

  &.justified {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .btn {
      width: 100%;
    }
  }

  &.icons {
    .btn {
      padding: 7px 8px;
      line-height: 14px;
    }
  }

  &.open .dropdown-toggle {
    box-shadow: none;
  }
`;
