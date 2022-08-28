import * as React from "react";
import { HeadFC } from "gatsby";
import * as Styles from "./styles";

const Home = () => {
  return (
    <main>
      <Styles.HalfBackground />
    </main>
  );
};
export default Home;

export const Head: HeadFC = () => <title>Reza Hasani</title>;
