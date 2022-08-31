import React from "react";
import * as Styles from "./styles";

function AnimationContainer({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <Styles.Container>{children}</Styles.Container>;
}

export default AnimationContainer;
