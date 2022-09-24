import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import PortfolioItem from "../components/PortfolioItem";
import styled from "styled-components";

const ItemsContainer = styled.div`
  grid-gap: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 70px;
`;

const Portfolio = () => {
  return (
    <AnimationContainer margin="auto">
      <Title
        frontTitle={{ whitePart: "My", greenPart: "Portfolio" }}
        backTitle="Works"
      />
      <ItemsContainer>
        <PortfolioItem
          title="Test"
          backgroundImage="https://i.postimg.cc/RZc3RWsC/image-1-1.webp"
          link={""}
        />
        <PortfolioItem
          title="Test"
          backgroundImage="https://i.postimg.cc/RZc3RWsC/image-1-1.webp"
          link={""}
        />
        <PortfolioItem
          title="Test"
          backgroundImage="https://i.postimg.cc/RZc3RWsC/image-1-1.webp"
          link={""}
        />
      </ItemsContainer>
    </AnimationContainer>
  );
};

export default Portfolio;
export const Head: HeadFC = () => <title>Portfolio - Reza Hasani</title>;
