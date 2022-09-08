import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import DetailCard from "../components/DetailCard";
import styled from "styled-components";

const DetailsInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InformationContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
  padding: 0 15px;
  max-width: 100%;
`;

const DetailCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  width: 50%;
  padding: 0 15px;
  max-width: 100%;
`;

const CardContainer = styled.div`
  padding: 0 15px;
  flex: 0 0 auto;
  width: 50%;
  max-width: 100%;
`;

const AboutPage = () => {
  return (
    <AnimationContainer>
      <Title
        frontTitle={{ whitePart: "about", greenPart: "me" }}
        backTitle="Resume"
      />
      <DetailsInformationContainer>
        <InformationContainer></InformationContainer>
        <DetailCardsContainer>
          <CardContainer>
            <DetailCard
              number={3}
              text={{ firstLine: "test", secondLine: "of Ex" }}
            />
          </CardContainer>
          <CardContainer>
            <DetailCard
              number={3}
              text={{ firstLine: "test", secondLine: "of Ex" }}
            />
          </CardContainer>
          <CardContainer>
            <DetailCard
              number={3}
              text={{ firstLine: "test", secondLine: "of Ex" }}
            />
          </CardContainer>
          <CardContainer>
            <DetailCard
              number={3}
              text={{ firstLine: "test", secondLine: "of Ex" }}
            />
          </CardContainer>
        </DetailCardsContainer>
      </DetailsInformationContainer>
    </AnimationContainer>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Me - Reza Hasani</title>;
