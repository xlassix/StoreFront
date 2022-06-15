import styled, { keyframes } from 'styled-components/macro';
import { StyleConstants } from '../../../styles/StyleConstants';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 10px 25px;
  margin-bottom: 20px;
  transition: all 0.4s;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${p => p.theme.direction['margin-right']}: 15px;

  &:last-child {
    margin-right: 0;
    ${p => p.theme.direction['margin-right']}: 0;
  }

  &:before {
    position: absolute;
    height: 0;
    width: 0;
    border-radius: 50%;
    background-color: ${StyleConstants.COLOR_ACCENT2};
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
    z-index: -1;
    content: '';
    top: 0;
    transform: ${p => p.theme.direction['translate']};
    ${p => p.theme.direction['left']}: 0px;
  }

  p {
    display: flex;
    transition: all 0.3s;
    font-weight: 500;
  }

  svg {
    height: 14px;
    width: 14px;
    margin-top: 2px;
    margin-bottom: 0;
    transition: all 0.3s;
    ${p => p.theme.direction['margin-right']}: 5px;
    ${p => p.theme.direction['margin-left']}: 0px;
  }

  &:hover,
  &:focus,
  &:active,
  &:active:focus {
    outline: none;
    box-shadow: none !important;

    &:before {
      height: 500%;
      width: 225%;
    }
  }

  &:focus,
  &:active,
  &:active:focus {
    &:before {
      transition: all 0s;
    }
  }

  &.square {
    border-radius: 0;
  }

  &.rounded {
    border-radius: 30px !important;
  }

  &.icon {
    padding: 10px 15px;

    &:hover {
      p {
        color: ${p => p.theme.color.colorText};
      }

      svg {
        fill: ${p => p.theme.color.colorText};
      }
    }

    &.icon--right {
      svg {
        margin-top: 2px;
        margin-bottom: 0;
        ${p => p.theme.direction['margin-right']}: 0px;
        ${p => p.theme.direction['margin-left']}: 5px;
      }
    }
  }

  &.btn-sm {
    padding: 5px 25px;
    font-size: 14px;
  }

  &.btn-lg {
    padding: 12px 25px;
    font-size: 14px;
  }

  &.btn-secondary {
    background-color: ${StyleConstants.COLOR_LIGHT_GRAY};
    border-color: ${StyleConstants.COLOR_LIGHT_GRAY};
    color: ${StyleConstants.COLOR_GRAY};

    &:before {
      background-color: ${StyleConstants.COLOR_DARKEN_LIGHT_GRAY};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      border-color: ${StyleConstants.COLOR_DARKEN_LIGHT_GRAY};
      color: ${StyleConstants.COLOR_GRAY};
    }

    &:not([disabled]):not(.disabled):active,
    &:not([disabled]):not(.disabled).active {
      background-color: ${StyleConstants.COLOR_DUSTY_WHITE};
      border-color: ${StyleConstants.COLOR_DUSTY_WHITE};
    }
  }

  &.btn-outline-secondary {
    border-color: ${StyleConstants.COLOR_LIGHT_GRAY};

    &,
    p {
      color: ${p => p.theme.color.colorText};
    }

    svg {
      fill: ${p => p.theme.color.colorText};
    }

    &:before {
      background-color: ${StyleConstants.COLOR_LIGHT_GRAY};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      background: transparent;
      border-color: ${StyleConstants.COLOR_LIGHT_GRAY};
      color: ${StyleConstants.COLOR_GRAY};

      p {
        color: ${StyleConstants.COLOR_GRAY};
      }

      svg {
        fill: ${StyleConstants.COLOR_GRAY};
      }
    }
  }

  &.btn-primary {
    background-color: ${StyleConstants.COLOR_ACCENT};
    border-color: ${StyleConstants.COLOR_ACCENT};

    &:before {
      background-color: ${StyleConstants.COLOR_ACCENT_HOVER};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      border-color: ${StyleConstants.COLOR_ACCENT_HOVER};
    }
  }

  &.btn-outline-primary {
    color: ${StyleConstants.COLOR_ACCENT};
    border-color: ${StyleConstants.COLOR_ACCENT};

    p {
      color: ${StyleConstants.COLOR_ACCENT};
    }

    svg {
      fill: ${StyleConstants.COLOR_ACCENT};
    }

    &:before {
      background-color: ${StyleConstants.COLOR_ACCENT};
    }
  }

  &.btn-success {
    background-color: ${StyleConstants.COLOR_GREEN};
    border-color: ${StyleConstants.COLOR_GREEN};

    &:before {
      background-color: ${StyleConstants.COLOR_GREEN_HOVER};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      border-color: ${StyleConstants.COLOR_GREEN_HOVER};
    }
  }

  &.btn-outline-success {
    color: ${StyleConstants.COLOR_GREEN};
    border-color: ${StyleConstants.COLOR_GREEN};

    p {
      color: ${StyleConstants.COLOR_GREEN};
    }

    svg {
      fill: ${StyleConstants.COLOR_GREEN};
    }

    &:before {
      background-color: ${StyleConstants.COLOR_GREEN};
    }
  }

  &.btn-warning {
    background-color: ${StyleConstants.COLOR_YELLOW};
    border-color: ${StyleConstants.COLOR_YELLOW};
    color: ${StyleConstants.COLOR_WHITE};

    &:before {
      background-color: ${StyleConstants.COLOR_YELLOW_HOVER};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      border-color: ${StyleConstants.COLOR_YELLOW_HOVER};
    }
  }

  &.btn-outline-warning {
    color: ${StyleConstants.COLOR_YELLOW};
    border-color: ${StyleConstants.COLOR_YELLOW};

    p {
      color: ${StyleConstants.COLOR_YELLOW};
    }

    svg {
      fill: ${StyleConstants.COLOR_YELLOW};
    }

    &:before {
      background-color: ${StyleConstants.COLOR_YELLOW};
    }
  }

  &.btn-danger {
    background-color: ${StyleConstants.COLOR_RED};
    border-color: ${StyleConstants.COLOR_RED};

    &:before {
      background-color: ${StyleConstants.COLOR_RED_HOVER};
    }

    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      border-color: ${StyleConstants.COLOR_RED_HOVER};
    }
  }

  &.btn-outline-danger {
    color: ${StyleConstants.COLOR_RED};
    border-color: ${StyleConstants.COLOR_RED};

    p {
      color: ${StyleConstants.COLOR_RED};
    }

    svg {
      fill: ${StyleConstants.COLOR_RED};
    }

    &:before {
      background-color: ${StyleConstants.COLOR_RED};
    }
  }

  &,
  &.btn-primary,
  &.btn-danger,
  &.btn-warning,
  &.btn-success,
  &.btn-outline-secondary,
  &.btn-secondary,
  &.btn-outline-primary,
  &.btn-outline-danger,
  &.btn-outline-warning,
  &.btn-outline-success,
  &.icon,
  &.icon.btn-secondary {
    &.disabled {
      background-color: ${StyleConstants.COLOR_BACKGROUND_BODY};
      border-color: ${StyleConstants.COLOR_BACKGROUND_BODY};
      color: ${StyleConstants.COLOR_DUSTY_WHITE};
      pointer-events: none;

      p {
        color: ${StyleConstants.COLOR_DUSTY_WHITE};
      }

      svg {
        fill: ${StyleConstants.COLOR_DUSTY_WHITE};
      }
    }
  }

  &.btn-primary,
  &.btn-danger,
  &.btn-warning,
  &.btn-success {
    p {
      color: ${StyleConstants.COLOR_WHITE};
    }

    svg {
      fill: ${StyleConstants.COLOR_WHITE};
    }
  }

  &.btn-outline-primary,
  &.btn-outline-danger,
  &.btn-outline-warning,
  &.btn-outline-success {
    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      color: ${StyleConstants.COLOR_WHITE};
      background: transparent;
    }
  }

  &.btn-primary,
  &.btn-danger,
  &.btn-warning,
  &.btn-success,
  &.btn-outline-primary,
  &.btn-outline-danger,
  &.btn-outline-warning,
  &.btn-outline-success {
    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      p {
        color: ${StyleConstants.COLOR_WHITE};
      }

      svg {
        fill: ${StyleConstants.COLOR_WHITE};
      }
    }
  }

  &.expand {
    svg {
      width: 0;
      transition: all 0.3s;
    }

    &.expand--load {
      svg {
        width: 14px;
        animation: ${rotate} 2s linear infinite;
      }
    }
  }
`;

export const Customizer = styled.div`
  position: fixed;
  top: 0;
  z-index: 102;
  ${p => p.theme.direction['right']}: 0px;

  .customizer__toggle {
    span {
      ${p => p.theme.direction['margin-right']}: 10px;
      ${p => p.theme.direction['margin-left']}: 0px;
      color: ${p => p.theme.color.colorText};
    }
  }
`;
