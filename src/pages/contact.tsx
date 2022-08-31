import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";

const Contact = () => {
  return (
    <AnimationContainer>
      <Title
        frontTitle={{ whitePart: "Get In", greenPart: "Touch" }}
        backTitle="Contact"
      />
    </AnimationContainer>
  );
};

export default Contact;
export const Head: HeadFC = () => <title>Contact - Reza Hasani</title>;
