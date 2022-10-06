const sharedThemes = {
  WHITE: "#ffffff",
  GOLD: "#ffb400",
  GRANIT_GRAY: "#666666",
  BRIGHT_GRAY: "#eeeeee",
  BLACK_OLIVE: "#3b3a3a",
  DARK_GUNMETAL_OPACITY: "rgba(30,37,48,0.07)",
  WHITE_OPACITY: "rgba(255,255,255,0.07)",
  BLACK_OPACITY: "rgba(0, 0, 0, 0.9)",
  CHINESE_BLACK: "#111111",
  GREEN: "#2b2a2a",
  RAISIN_BLACK: "#252525",
  GAINSBORO: "#dddddd",
  DARK_CHARCOAL: "#333333",
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
    description: sharedThemes.GRANIT_GRAY,
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
  border: {
    primary: `1px solid ${sharedThemes.GAINSBORO}`,
    secondary: `1px solid ${sharedThemes.GAINSBORO}`,
    modal: `2px solid ${sharedThemes.GAINSBORO}`,
  },
  input: {
    background: sharedThemes.WHITE,
    border: `1px solid ${sharedThemes.GAINSBORO}`,
  },
  boxShadow: "none",
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
    description: sharedThemes.BRIGHT_GRAY,
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
  border: {
    primary: `1px solid ${sharedThemes.RAISIN_BLACK}`,
    secondary: `1px solid ${sharedThemes.DARK_CHARCOAL}`,
    modal: `2px solid ${sharedThemes.RAISIN_BLACK}`,
  },
  input: {
    background: sharedThemes.RAISIN_BLACK,
    border: `1px solid ${sharedThemes.CHINESE_BLACK}`,
  },
  boxShadow: `0 0 7px ${sharedThemes.BLACK_OPACITY}`,
};
