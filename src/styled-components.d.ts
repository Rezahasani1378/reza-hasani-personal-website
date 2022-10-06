import { darkTheme } from "./theme/toggleTheme";

type ThemeInterface = typeof darkTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
