import React from "react";
import * as Styles from "./styles";

interface TitleProps {
  frontTitle: {
    whitePart: string;
    greenPart: string;
  };
  backTitle: string;
}

function Title({ frontTitle, backTitle }: TitleProps) {
  return (
    <Styles.Container>
      <Styles.FrontTitle>
        {frontTitle.whitePart}{" "}
        <Styles.GreenPart>{frontTitle.greenPart}</Styles.GreenPart>
      </Styles.FrontTitle>
      <Styles.BackTitle>{backTitle}</Styles.BackTitle>
    </Styles.Container>
  );
}

export default Title;
