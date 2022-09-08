import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import DetailCard from "../components/DetailCard";

const AboutPage = () => {
  return (
    <AnimationContainer>
      <Title
        frontTitle={{ whitePart: "About", greenPart: "me" }}
        backTitle="Resume"
      />
      <DetailCard
        number={3}
        text={{ firstLine: "test", secondLine: "of Ex" }}
      />
    </AnimationContainer>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Me - Reza Hasani</title>;
