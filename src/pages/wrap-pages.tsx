import React, { useState } from "react";
import { GlobalStyles } from "../theme/globalStyles";
import MenuButton from "../components/MenuButton";
import { useLocation } from "@reach/router";
// @ts-ignore
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import { isMobile } from "../../utils/constants";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/toggleTheme";

export function wrapPages({ element }: { element: React.Component }) {
  //todo: change to context
  //todo: it must read from the local storage to save the previous state
  const [theme, setTheme] = useState("dark");

  const location = useLocation();

  return (
    <>
      {!isMobile() && (
        <AnimatedCursor
          innerSize={10}
          outerSize={8}
          color="255, 160, 1"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={6}
          clickables={["*"]}
          outerStyle={{
            mixBlendMode: "color-dodge",
          }}
        />
      )}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Toaster />
          <MenuButton route={location.pathname} />
          {element}
        </>
      </ThemeProvider>
    </>
  );
}
