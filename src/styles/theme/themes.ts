import lightLogo from '../../app/layouts/components/Topbar/assets/bs.gif';
import darkLogo from '../../app/layouts/components/Topbar/assets/bs.gif';

const lightTheme = {
  colorBackground: 'white',
  colorBackgroundBody: '#f2f4f7',
  colorHeaderDataPicker: '#6db0ff',
  colorText: '#646777',
  colorTextAdditional: '#646777',
  colorHover: '#fafbfe',
  colorFolderHover: '#f0eeee',
  colorBorder: '#eff1f5',
  colorIcon: '#dddddd',
  colorFieldsBorder: '#f2f4f7',
  colorBubble: 'rgba(242, 244, 247, 0.65)',
  colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
  colorScrollbar: '#B4BFD0',
  colorFitness: '#646777',
  colorEmoji: '#232329',
  inboxButtonBackground: '#f2f4f7',
  inboxButtonBackgroundHover: 'rgba(242, 244, 247, 0.05)',
  sidebarColor: 'aliceblue',
  logoImg: `url(${darkLogo})`,
};

const darkTheme: Theme = {
  colorBackground: '#232329',
  colorBackgroundBody: '#2a2a31',
  colorHeaderDataPicker: '#063263',
  colorText: '#dddddd',
  colorTextAdditional: '#999999',
  colorHover: '#38373f',
  colorFolderHover: '#ffffff1A',
  colorBorder: '#333246',
  colorIcon: '#605f7b',
  colorFieldsBorder: '#33333a',
  colorBubble: 'rgba(68, 79, 97, 0.65)',
  colorBubbleActive: 'rgba(92, 104, 156, 0.6)',
  colorScrollbar: '#606071',
  colorFitness: '#ffffff',
  colorEmoji: '#ffffff',
  inboxButtonBackground: '#2a2a31',
  inboxButtonBackgroundHover: 'rgba(42, 42, 49, 0.05)',
  sidebarColor: '#232329',
  logoImg: `url(${lightLogo})`,
};

const ltr = {
  direction: 'ltr',

  right: 'right',
  left: 'left',

  'margin-right': 'margin-right',
  'margin-left': 'margin-left',

  'padding-left': 'padding-left',
  'padding-right': 'padding-right',

  'border-top-left-radius': 'border-top-left-radius',
  'border-bottom-left-radius': 'border-bottom-left-radius',

  'border-top-right-radius': 'border-top-right-radius',
  'border-bottom-right-radius': 'border-bottom-right-radius',

  'border-left': 'border-left',
  'border-right': 'border-right',

  translate: 'translate(-50%, -50%);',
  mirrorY: 'scale(1, 1)',

  'border-right-color': 'border-right-color',

  'transform-sidebar': 'rotate(90deg)',

  'flex-flow': 'row nowrap',
  row: 'row',

  'sidebar-close': 'translateX(0)',
  'sidebar-no-desktop': 'translateX(calc(0%))',
  '-': '-',
};

const rtl: Direction = {
  direction: 'rtl',

  right: 'left',
  left: 'right',

  'margin-right': 'margin-left',
  'margin-left': 'margin-right',

  'padding-left': 'padding-right',
  'padding-right': 'padding-left',

  'border-top-left-radius': 'border-top-right-radius',
  'border-bottom-left-radius': 'border-bottom-right-radius',

  'border-top-right-radius': 'border-top-left-radius',
  'border-bottom-right-radius': 'border-bottom-left-radius',

  'border-left': 'border-right',
  'border-right': 'border-left',

  translate: 'translate(50%, -50%);',
  mirrorY: 'scale(1, -1)',

  'border-right-color': 'border-left-color',
  'transform-sidebar': 'rotate(-90deg)',

  'flex-flow': 'row-reverse nowrap',
  row: 'row-reverse',

  'sidebar-close': 'translateX(0)',
  'sidebar-no-desktop': 'translateX(calc(100%))',
  '-': '+',
};

const roundBordersOn = {
  borderRadius: '15px',
};

const roundBordersOff: BorderStatus = {
  borderRadius: '5px',
};

const shadowOn = {
  blocksShadows: '0 10px 30px 1px rgba(0, 0, 0, 0.06)',
};
const shadowOff: ShadowStatus = {
  blocksShadows: 'none',
};

export type Theme = typeof lightTheme;
export type Direction = typeof ltr;
export type BorderStatus = typeof roundBordersOn;
export type ShadowStatus = typeof shadowOn;
export const themes = {
  colors: {
    light: lightTheme,
    dark: darkTheme,
  },
  directions: {
    ltr: ltr,
    rtl: rtl,
  },
  borderStatus: {
    on: roundBordersOn,
    off: roundBordersOff,
  },
  shadowStatus: {
    on: shadowOn,
    off: shadowOff,
  },
};
