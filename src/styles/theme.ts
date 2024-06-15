export const theme = {
  colors: {
    gray: '#999999',
    light_gray: '#D6D7D7',
    blue: '#05A8BF',
  },
} as const;

export type Theme = typeof theme;
