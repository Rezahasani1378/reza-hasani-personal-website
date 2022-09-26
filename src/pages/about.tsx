import * as React from "react";
import { HeadFC } from "gatsby";
import AnimationContainer from "../layouts/AnimationContainer";
import Title from "../components/Title";
import DetailCard from "../components/DetailCard";
import styled from "styled-components";
//todo: absolute path
import { cardsData, experiences, listData } from "../../utils/constants";
import ListKeyValue from "../components/ListKeyValue";
import TextButton from "../components/TextButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Separator } from "../theme/globalStyles";
import ExperienceItem from "../components/ExperienceItem";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";

//Todo: Styles must be out of this component
const DetailsInformationContainer = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const InformationContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
  //todo: replace px with rem
  padding: 0 30px;
  max-width: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    flex: initial;
  }
`;

const DetailCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 3rem;
  }
`;

const CardContainer = styled.div`
  padding: 0 15px;
  flex: 0 0 auto;
  width: 300px;
  max-width: 100%;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    width: 50%;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  font-family: Poppins, sans-serif;
  line-height: 1.6;
  padding-bottom: 3rem;
`;

const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ul {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const AboutPage = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute("download", "Reza Hasani");
    link.href =
      "https://smallpdf-production-files.s3.eu-west-1.amazonaws.com/ade390ba5f0bd43a116bb19cf7d1867c.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3I33L6ORXDYCVYML%2F20220910%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220910T151448Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCG6cFOXpURtaKiST0bufsUBi58SFyGgPwCChJcHlQ4SQIhANW%2Bwl3h2nWRvgZxHCPJLSmC7P%2BSn8XOR%2ByoAtwoR5mPKvUDCFsQABoMNzc0OTYzNDU4OTc5IgyI%2BOjvSptXbw0yZfAq0gM5XOAiT3cBBr79pj5QsY8rNKFF1K%2FZX6I2CQdUPtZVduf9YI7X1PtWghXzrMs7mdFIqA5vhNvsigrj6s04KdNQG8VAtzSq17S4o6AoTA5Ey4aWVmTOUXq4Ae8H1LCVo14mwoqcbLtRO04m3gMJup4WbZWSaTW3E%2FRmpUhrVutQDhm52%2Bvp4l5J3T8NPF%2FGqDpnQH3LPld9F2NxndDa%2BYh3iavHX3uvCUD1n4m9pZ09gddA8bPa1vuN%2BkRsumYeHuc04NaFu2IsblHIwfNLsRKFkKomnNIcbUfZR8Wa8gX0rJF5ghAiNir72jASLDzQ0U%2FLkL5ZdFtuF87JbIaFE%2FOcfl%2FZAqtQ9JwQTdvIIzvqVzkjx8merCFPGgIuhurpXrxh%2Bvpv72VhixSy8NeaSVRiQght4R4LtwJBXtxk2vRbiCmeunhDaJ6H6jLwvNSphKk2XIvKxDMQiyvatd8PgT%2ByL1xmCzOlG6o%2B6XN4NztgYo5vjeOV8VO61VkLISb%2F%2BrE3CPUiyJGfcNu%2BEFy647wjZ07Lq7eZLo2zQPhiZOm1UoNL2W4wfoQtiVKxZeyLuesLizb%2Fn9QggvlAs5nfhGlsIirBi1oZJFLN282iGRaR13KDML%2Bu8ZgGOqQBjGc9TKRiu%2FN%2FGHmMh0lr2cq9OX1%2F%2FXx7FpfDKtzNT4tdLGWwMk95515bPM6w1gP9c0FQXvG6ffmWzhaDbWy3E%2BcIPw5WKBz7vvMRiV9g4CEWQ05XiDLHTUdFEEKKdWEZKyX4xeFR16dJlITGPZxZZWCOg8nM%2B8GiorOU%2F82EtpLOkr5dssY%2BcZ%2Fas8MEJ%2BjAI0v4wzPZ77TDo%2BhXoxZRV5aUYNk%3D&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Reza%20Hasani.pdf%22%3B%20filename%2A%3DUTF-8%27%27Reza%2520Hasani.pdf&response-content-type=application%2Fpdf&X-Amz-Signature=edbe2dd30e1f773e5a35bf5f605a6a4845819cfe8aff0c8c73ae739b2adc4107";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <AnimationContainer
      margin="auto"
      menuPadding="initial"
      frontTitle={{ whitePart: "About", greenPart: "Me" }}
      backTitle="Resume"
    >
      <DetailsInformationContainer>
        <InformationContainer>
          <ListKeyValue data={listData} title="Personal Info" />
          <TextButton
            icon={faDownload as IconProp}
            title="Download CV"
            onClick={() => downloadCV()}
          />
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
      <Separator />
      <ExperienceTitle>EXPERIENCE & EDUCATION</ExperienceTitle>
      <ExperiencesContainer>
        <ul>
          {experiences.technical.map(
            ({ icon, title, company, period, description }) => (
              <ExperienceItem
                icon={icon as IconProp}
                title={title}
                location={company}
                period={period}
                description={description}
              />
            )
          )}
        </ul>
        <ul>
          {experiences.academic.map(
            ({ icon, title, university, period, description }) => (
              <ExperienceItem
                icon={icon as IconProp}
                title={title}
                location={university}
                period={period}
                description={description}
              />
            )
          )}
        </ul>
      </ExperiencesContainer>
    </AnimationContainer>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Me - Reza Hasani</title>;
