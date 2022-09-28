import * as React from "react";
import { HeadFC } from "gatsby";
import * as Styles from "./styles";
import TextButton from "../../components/TextButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AnimationContainer from "../../layouts/AnimationContainer";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Home = () => {
  return (
    <AnimationContainer maxWidth="initial">
      <Styles.HalfBackground />
      <Styles.HomeDescriptionContainer>
        <Styles.Avatar />
        <Styles.DescriptionContainer>
          <Styles.MainTitle>
            I'M REZA HASANI.
            <br />
            <Styles.JobTitle> Front-End Engineer </Styles.JobTitle>
          </Styles.MainTitle>
          <Styles.Description>
            I'm an Iranian based front‑end developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </Styles.Description>
          <Styles.ButtonContainer>
            <TextButton
              icon={faArrowRight as IconProp}
              title="More About Me"
              onClick={() => true}
            />
          </Styles.ButtonContainer>
        </Styles.DescriptionContainer>
      </Styles.HomeDescriptionContainer>
    </AnimationContainer>
  );
};
export default Home;

export const Head: HeadFC = () => <title>Reza Hasani</title>;
