import React from "react";
import * as Styles from "./styles";
import { AnimatedContainer } from "./styles";

function AnimationContainer({
  children,
  margin,
  maxWidth,
  menuPadding,
  frontTitle,
  backTitle,
}: {
  children: JSX.Element | JSX.Element[] | string;
  //todo: duplicate with the types in the file: src/layouts/AnimationContainer/styles.ts
  margin?: string;
  maxWidth?: string;
  menuPadding?: string;
  frontTitle?: {
    whitePart: string;
    greenPart: string;
  };
  backTitle?: string;
}) {
  return (
    <Styles.AnimatedContainer>
      {frontTitle && backTitle && (
        <Styles.TitleContainer>
          <Styles.FrontTitle>
            {frontTitle.whitePart}{" "}
            <Styles.GreenPart>{frontTitle.greenPart}</Styles.GreenPart>
          </Styles.FrontTitle>
          <Styles.BackTitle>{backTitle}</Styles.BackTitle>
        </Styles.TitleContainer>
      )}
      <Styles.ElementsContainer
        margin={margin}
        maxWidth={maxWidth}
        menuPadding={menuPadding}
      >
        {children}
      </Styles.ElementsContainer>
    </Styles.AnimatedContainer>
  );
}

export default AnimationContainer;
