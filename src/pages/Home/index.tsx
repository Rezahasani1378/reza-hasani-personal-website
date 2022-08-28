import * as React from "react";
import { HeadFC } from "gatsby";
import * as Styles from "./styles";

const Home = () => {
  return (
    <main>
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
        </Styles.DescriptionContainer>
      </Styles.HomeDescriptionContainer>
    </main>
  );
};
export default Home;

export const Head: HeadFC = () => <title>Reza Hasani</title>;
