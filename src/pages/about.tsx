import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import DetailCard from "../components/DetailCard";
import styled from "styled-components";
//todo: absolute path
import { cardsData, listData } from "../../utils/constants";
import ListKeyValue from "../components/ListKeyValue";

const DetailsInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InformationContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
  //todo: replace px with rem
  padding: 0 15px;
  max-width: 100%;
`;

const DetailCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 0 0 auto;
  width: 50%;
  max-width: 100%;
`;

const CardContainer = styled.div`
  padding: 0 15px;
  flex: 0 0 auto;
  width: 300px;
  max-width: 100%;
  margin-bottom: 30px;
`;

const AboutPage = () => {
  return (
    <AnimationContainer margin="auto">
      <Title
        frontTitle={{ whitePart: "about", greenPart: "me" }}
        backTitle="Resume"
      />
      <DetailsInformationContainer>
        <InformationContainer>
          <ListKeyValue data={listData} />
        </InformationContainer>
        <DetailCardsContainer>
          {cardsData.map(({ number, text }) => (
            <CardContainer>
              <DetailCard
                number={number}
                text={{
                  firstLine: text.firstLine,
                  secondLine: text.secondLine,
                }}
              />
            </CardContainer>
          ))}
        </DetailCardsContainer>
      </DetailsInformationContainer>
    </AnimationContainer>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Me - Reza Hasani</title>;
