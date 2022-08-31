import React from "react";
import GlobalStyles from "../theme/globalStyles";
import MenuButton from "../components/MenuButton";
import { useLocation } from "@reach/router";

export function wrapPages({ element }: { element: React.Component }) {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <MenuButton route={location.pathname} />
      {element}
    </>
  );
}
