import React from "react";
import { GlobalStyles } from "../theme/globalStyles";
import MenuButton from "../components/MenuButton";
import { useLocation } from "@reach/router";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import { isMobile } from "../../utils/constants";

export function wrapPages({ element }: { element: React.Component }) {
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
      <GlobalStyles />
      <Toaster />
      <MenuButton route={location.pathname} />
      {element}
    </>
  );
}
