import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import styled from "styled-components";
import { MainTitle } from "../theme/globalStyles";
import ContactDetail from "../components/ContactDetail";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { contactDetails } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyInformation = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
`;

const Description = styled.p`
  font-family: Open Sans, sans-serif;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const InputsContainer = styled.div``;

const Contact = () => {
  return (
    <AnimationContainer margin="auto">
      <Title
        frontTitle={{ whitePart: "Get In", greenPart: "Touch" }}
        backTitle="Contact"
      />
      <Container>
        <MyInformation>
          <MainTitle>DON'T BE SHY !</MainTitle>
          <Description>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </Description>
          {contactDetails.map(({ icon, title, value }) => (
            <ContactDetail
              icon={icon as IconProp}
              title={title}
              value={value}
            />
          ))}
        </MyInformation>
        <InputsContainer></InputsContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Contact;
export const Head: HeadFC = () => <title>Contact - Reza Hasani</title>;
