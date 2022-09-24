import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import PortfolioItem from "../components/PortfolioItem";
import styled from "styled-components";
import { useState } from "react";

const TabContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px !important;
`;

const TabItem = styled.li`
  color: #eee;
  cursor: pointer;
  list-style: none;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  font-size: 16px;
  margin: 0 15px 15px;
  font-family: Poppins, sans-serif;
  text-transform: uppercase;

  &:hover {
    color: var(--main-primary-color);
  }
`;

const ItemsContainer = styled.div`
  grid-gap: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 70px;
`;

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <AnimationContainer margin="auto">
      <Title
        frontTitle={{ whitePart: "My", greenPart: "Portfolio" }}
        backTitle="Works"
      />
      <TabContainer>
        <TabItem onClick={() => setSelectedTab("All")}>All</TabItem>
        <TabItem onClick={() => setSelectedTab("Websites")}>Websites</TabItem>
        <TabItem onClick={() => setSelectedTab("Logos")}>Logos</TabItem>
      </TabContainer>
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
