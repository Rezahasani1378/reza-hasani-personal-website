import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";

const AboutPage = () => {
  return <AnimationContainer>About Me</AnimationContainer>;
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Me - Reza Hasani</title>;
