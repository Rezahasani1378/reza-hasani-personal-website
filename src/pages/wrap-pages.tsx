import React from "react";
import GlobalStyles from "../theme/globalStyles";
import MenuButton from "../components/MenuButton";
import { useLocation } from "@reach/router";
import AnimatedCursor from "react-animated-cursor";

export function wrapPages({ element }: { element: React.Component }) {
  const location = useLocation();

  return (
    <>
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
      <GlobalStyles />
      <MenuButton route={location.pathname} />
      {element}
    </>
  );
}
