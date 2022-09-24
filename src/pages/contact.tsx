import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import styled from "styled-components";
import { MainTitle, TextArea, Input } from "../theme/globalStyles";
import ContactDetail from "../components/ContactDetail";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { contactDetails, socialMedias } from "../../utils/constants";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/MenuButton/Button";
import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons/faRemoveFormat";
import TextButton from "../components/TextButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

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

const SocialListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

const SocialListItem = styled.li`
  margin-right: 12px;
  list-style: none;
`;

const InputsContainer = styled.div`
  //todo: flexbox must be simpler to define
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 100%;
`;

const InputsRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

const ButtonContainer = styled.div`
  width: auto;
  margin: 15px 0 0 15px;
`;

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
          {/*todo: make these clickable*/}
          {contactDetails.map(({ icon, title, value }) => (
            <ContactDetail
              icon={icon as IconProp}
              title={title}
              value={value}
            />
          ))}
          <SocialListContainer>
            {socialMedias.map(({ icon, href }) => (
              <SocialListItem>
                <SocialMedia icon={icon} href={href} />
              </SocialListItem>
            ))}
          </SocialListContainer>
        </MyInformation>
        <InputsContainer>
          <InputsRowContainer>
            <Input placeholder="YOUR NAME" name="name" type="text" />
            <Input placeholder="YOUR EMAIL" name="email" type="email" />
          </InputsRowContainer>
          <InputsRowContainer>
            <Input placeholder="YOUR SUBJECT" name="subject" type="text" />
          </InputsRowContainer>
          <InputsRowContainer>
            <TextArea placeholder="YOUR MESSAGE" />
          </InputsRowContainer>
          <ButtonContainer>
            <TextButton
              //todo: replace with send
              icon={faSearch as IconProp}
              title="Send Message"
              onClick={() => true}
            />
          </ButtonContainer>
        </InputsContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Contact;
export const Head: HeadFC = () => <title>Contact - Reza Hasani</title>;
