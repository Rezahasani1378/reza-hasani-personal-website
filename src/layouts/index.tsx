import MenuButton from "../components/MenuButton";
import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { GlobalStyles } from "../theme/globalStyles";
import { darkTheme, lightTheme } from "../theme/toggleTheme";
import { ThemeProvider } from "styled-components";

export default ({ element }: { element: React.Component }) => {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <MenuButton
          route={location.pathname}
          theme={theme}
          toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {element}
      </>
    </ThemeProvider>
  );
};
