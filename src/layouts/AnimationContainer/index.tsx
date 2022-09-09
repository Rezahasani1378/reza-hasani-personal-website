import React from "react";
import * as Styles from "./styles";

function AnimationContainer({
  children,
  margin,
  maxWidth,
}: {
  children: JSX.Element | JSX.Element[] | string;
  margin?: string;
  maxWidth?: string;
}) {
  return (
    <Styles.Container margin={margin} maxWidth={maxWidth}>
      {children}
    </Styles.Container>
  );
}

export default AnimationContainer;
