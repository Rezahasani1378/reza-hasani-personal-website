import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";

const Portfolio = () => {
  return (
    <AnimationContainer>
      <Title
        frontTitle={{ whitePart: "My", greenPart: "Portfolio" }}
        backTitle="Works"
      />
    </AnimationContainer>
  );
};

export default Portfolio;
export const Head: HeadFC = () => <title>Portfolio - Reza Hasani</title>;
