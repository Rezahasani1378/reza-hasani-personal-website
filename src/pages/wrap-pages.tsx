import React from "react";
import MainLayout from "../layouts/MainLayout";
import GlobalStyles from "../theme/globalStyles";
import MenuButton from "../components/MenuButton";

export function wrapPages({ element }: { element: React.Component }) {
  return (
    <>
      <GlobalStyles />
      <MenuButton />
      {element}
    </>
  );
}
