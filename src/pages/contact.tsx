import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyInformation = styled.div``;

const InputsContainer = styled.div``;

const Contact = () => {
  return (
    <AnimationContainer margin="auto">
      <Title
        frontTitle={{ whitePart: "Get In", greenPart: "Touch" }}
        backTitle="Contact"
      />
      <Container>
        <MyInformation></MyInformation>
        <InputsContainer></InputsContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Contact;
export const Head: HeadFC = () => <title>Contact - Reza Hasani</title>;
