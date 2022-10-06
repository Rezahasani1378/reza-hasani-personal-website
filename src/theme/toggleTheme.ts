const sharedThemes = {
  WHITE: "#ffffff",
  GOLD: "#ffb400",
  GRANIT_GRAY: "#666666",
  BRIGHT_GRAY: "#eeeeee",
  BLACK_OLIVE: "#3b3a3a",
  DARK_GUNMETAL_OPACITY: "rgba(30,37,48,0.07)",
  WHITE_OPACITY: "rgba(255,255,255,0.07)",
  CHINESE_BLACK: "#111111",
  GREEN: "#2b2a2a",
  RAISIN_BLACK: "#252525",
  GAINSBORO: "#dddddd",
};

export const lightTheme = {
  body: {
    primary: sharedThemes.WHITE,
    secondary: sharedThemes.GOLD,
  },
  fontColor: {
    primary: sharedThemes.GRANIT_GRAY,
    secondary: sharedThemes.GOLD,
    tertiary: sharedThemes.BLACK_OLIVE,
    backgroundTitle: sharedThemes.DARK_GUNMETAL_OPACITY,
  },
  button: {
    background: sharedThemes.BRIGHT_GRAY,
    activated: sharedThemes.GOLD,
    icon: {
      primary: sharedThemes.GRANIT_GRAY,
      activated: sharedThemes.WHITE,
    },
  },
  label: sharedThemes.BRIGHT_GRAY,
};

export const darkTheme = {
  body: {
    primary: sharedThemes.CHINESE_BLACK,
    secondary: sharedThemes.GOLD,
  },
  fontColor: {
    primary: sharedThemes.WHITE,
    secondary: sharedThemes.GOLD,
    tertiary: sharedThemes.BRIGHT_GRAY,
    backgroundTitle: sharedThemes.WHITE_OPACITY,
  },
  button: {
    background: sharedThemes.GREEN,
    activated: sharedThemes.GOLD,
    icon: {
      primary: sharedThemes.GAINSBORO,
      activated: sharedThemes.WHITE,
    },
  },
  label: sharedThemes.RAISIN_BLACK,
};
