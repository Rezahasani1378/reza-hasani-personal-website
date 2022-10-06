import React, { useEffect, useState } from "react";
// @ts-ignore
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import { isMobile } from "../../utils/constants";
import Layout from "../layouts";

export function wrapPages({ element }: { element: React.Component }) {
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
      <Toaster />
      <Layout element={element} />
    </>
  );
}
