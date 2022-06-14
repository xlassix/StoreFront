import { createGlobalStyle } from 'styled-components';

import { StyleConstants } from './StyleConstants';
import { normalize } from './normalize';
import { typography } from './typography';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}

  main {
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

  * {
    box-sizing: inherit;
  }

  ul, ol {
    // doesn't do RTL, it break a sidebar
    padding-left: 15px;
    margin-bottom: 0;
  }

  a {
    color: ${StyleConstants.COLOR_BLUE};
    transition: all 0.3s;

    &:hover {
      text-decoration: none;
      color: ${StyleConstants.COLOR_BLUE_HOVER};
    }
  }

  img {
    width: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  button, input, optgroup, select, textarea {
    font-family: 'Poppins', sans-serif; 
  }

  .scroll {

    .scrollbar-track {
      background: transparent;

      &.scrollbar-track-y {
        width: 4px;
        ${p => p.theme.direction['margin-right']}: 5px;
      }
    }

    .scrollbar-thumb {
      opacity: 0.5;
      transition: height 0.3s;
      cursor: pointer;
      background: ${p => p.theme.color.colorScrollbar};
    }
  }
`;
