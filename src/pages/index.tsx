import * as React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import Home from "./Home";
import Contact from "./contact";
import AboutPage from "./about";
import Portfolio from "./portfolio";
import NotFoundPage from "./404";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const IndexPage = () => {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
      <RouterPage path="contact" pageComponent={<Contact />} />
      <RouterPage path="about" pageComponent={<AboutPage />} />
      <RouterPage path="portfolio" pageComponent={<Portfolio />} />
      <RouterPage path="*" pageComponent={<NotFoundPage />} />
    </Router>
  );
};

export default IndexPage;
