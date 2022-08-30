import * as React from "react";
import { HeadFC } from "gatsby";
import * as Styles from "./styles";
import TextButton from "../../components/TextButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const Home = () => {
  return (
    <Styles.HomeContainer>
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
          <TextButton
            icon={faArrowRight as IconDefinition}
            title="More About Me"
          />
        </Styles.DescriptionContainer>
      </Styles.HomeDescriptionContainer>
    </Styles.HomeContainer>
  );
};
export default Home;

export const Head: HeadFC = () => <title>Reza Hasani</title>;
