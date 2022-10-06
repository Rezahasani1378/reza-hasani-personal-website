import * as React from "react";
import { useState } from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import PortfolioItem from "../components/PortfolioItem";
import styled from "styled-components";
import { portfolioTabValues } from "../../utils/constants";

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px !important;
`;

const TabItem = styled.button<{ active: boolean }>`
  color: ${({ theme, active }) =>
    theme.fontColor[active ? "secondary" : "tertiary"]};
  cursor: pointer;
  list-style: none;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  font-size: 16px;
  margin: 0 15px 15px;
  font-family: Poppins, sans-serif;
  text-transform: uppercase;
  background: none;
  border: none;

  &:hover {
    color: var(--main-primary-color);
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0 15px 70px;
`;

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <AnimationContainer
      margin="auto"
      frontTitle={{ whitePart: "My", greenPart: "Portfolio" }}
      backTitle="Works"
    >
      <TabContainer>
        {portfolioTabValues.map(({ tabTitle, id }) => (
          <TabItem
            onClick={() => setSelectedTab(id)}
            active={id === selectedTab}
            key={id}
          >
            {tabTitle}
          </TabItem>
        ))}
      </TabContainer>
      <ItemsContainer>
        {portfolioTabValues[selectedTab].content.map(
          ({ title, backgroundImage, link }) => (
            <PortfolioItem
              title={title}
              backgroundImage={backgroundImage}
              link={link}
            />
          )
        )}
      </ItemsContainer>
    </AnimationContainer>
  );
};

export default Portfolio;
export const Head: HeadFC = () => <title>Portfolio - Reza Hasani</title>;
