import * as React from "react";
import GlobalStyles from "../theme/globalStyles";
import { Router } from "@reach/router";
import Home from "./Home";
import Contact from "./contact";
import AboutPage from "./about";
import Portfolio from "./portfolio";
import NotFoundPage from "./404";
import MenuButton from "../components/MenuButton";

const IndexPage = () => {
  return (
    <>
      <MenuButton />
      <Router>
        <Home path="/" />
        <Contact path="contact" />
        <AboutPage path="about" />
        <Portfolio path="portfolio" />
        <NotFoundPage path="*" />
      </Router>
      <GlobalStyles />
    </>
  );
};

export default IndexPage;
