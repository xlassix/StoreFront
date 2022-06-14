import { css } from 'styled-components';

export const typography = css`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 0;
    color: ${p => p.theme.color.colorText};
  }

  .bold-text {
    text-align: ${p => p.theme.direction.left};
    font-weight: 700;
  }

  .text-modal {
    font-weight: 700;
  }

  .typography--inline {
    display: flex;
    flex-wrap: wrap;

    * {
      margin-top: auto;
      ${p => p.theme.direction['margin-right']}: 15px;
    }
  }
`;
