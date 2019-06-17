import * as storage from './storage';

const STORAGE_THEME_KEY = 'css-theme';
export const LIGHT_THEME_KEY = 'light';
export const DARK_THEME_KEY = 'dark';

const colors = {
  black: '#262626',
  white: '#FAFAED',
  blue: '#4B75B9',
  gold: '#F0CE3B',
};

const theme = {
  contentWidth: '900px',
  br: `0.25rem`,
};

const lightTheme = {
  bxs: '0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23)',
  bgColor: colors.white,
  offBgColor: 'white',
  textColor: colors.black,
  headingColor: colors.blue,
  linkColor: colors.blue,
  activeColor: colors.blue,
  linkHoverColor: colors.gold,
};

const darkTheme = {
  bxs: '0px 0px 2px 1px white',
  bgColor: colors.black,
  textColor: colors.white,
  headingColor: colors.white,
  linkColor: colors.gold,
  activeColor: colors.gold,
  linkHoverColor: colors.blue,
  offBgColor: 'black',
};

const themeKeyMap = {
  [LIGHT_THEME_KEY]: {
    colors: {
      ...lightTheme,
      ...colors,
    },
    ...theme,
  },
  [DARK_THEME_KEY]: {
    colors: {
      ...darkTheme,
      ...colors,
    },
    ...theme,
  },
};

export const getInitialTheme = () => {
  const themeKey = storage.get(STORAGE_THEME_KEY);
  if (themeKey) {
    return LIGHT_THEME_KEY;
  }
  return themeKey;
};

export const getTheme = themeKey => {
  return themeKeyMap[themeKey] || themeKeyMap[LIGHT_THEME_KEY];
};

export const setTheme = themeKey => {
  storage.set(STORAGE_THEME_KEY, themeKey);
};
