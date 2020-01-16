const breakpoints = ['600px', '800px', '1000px', '1200px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

const colors = {
  primary: '#6fccff',

  black: '#000',
  white: '#E6E6E6',
  success: '#06D6A0',
  danger: '#D7263D',
  purple: '#7189FF',
  green: '#90FFDC',

  pureWhite: '#fff',

  transparent: 'transparent',

  overlay: 'rgba(0,0,0,.8)',

  pageBackground: '#181818',

  grays: [
    '#121212',
    '#141414',
    '#181818',
    '#222222',
    '#363636',
    '#484848',
    '#5A5A5A',
    '#6C6C6C',
    '#7E7E7E',
    '#909090',
    '#A2A2A2',
    '#B4B4B4',
    '#C6C6C6',
    '#D8D8D8',
    '#EAEAEA'
  ]
};

export default {
  colors,

  space: [
    0,
    4,
    8,
    12,
    16,
    24,
    32,
    40,
    48,
    64,
    96,
    128,
    256,
    384,
    448,
    512,
    768,
    1024
  ],

  fonts: {
    default: `Rubik,Roboto,sans-serif`,
    code: 'Menlo,Monaco,Consolas,monospace,serif'
  },

  fontSizes: [12, 14, 16, 18, 24, 36, 48, 64],

  fontWeights: [300, 400, 500, 700, 900],

  radii: [0, 4, 6, 8, 12, 16, 9999, '100%'],

  sizes: [
    8,
    12,
    16,
    24,
    32,
    40,
    48,
    64,
    96,
    128,
    256,
    384,
    448,
    512,
    768,
    1024
  ],

  borders: [`1px solid ${colors.primary}`, `3px solid ${colors.primary}`],

  shadows: [`0 2px 4px black`, `0 3px 6px black`],

  breakpoints,

  transitions: ['all 200ms ease'],

  pageWidth: 1200
};

export const labelColors = [
  '#A682FF',
  '#EB8258',
  '#FFD131',
  '#BAD4AA',
  '#9DFFF9',
  '#F2BEFC',
  '#FCFF6C',
  '#BFD7EA',
  '#D741A7'
];
