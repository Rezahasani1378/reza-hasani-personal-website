import React from "react";
import * as Styles from "./styles";

const PortfolioItem = ({
  backgroundImage,
  title,
  link,
}: {
  backgroundImage: string;
  title: string;
  link: string;
}) => {
  return (
    <Styles.CardAnimation>
      <Styles.Container href={link} target="_blank">
        <Styles.BackgroundImage src={backgroundImage} alt={title} />
        <Styles.TitleContainer>
          <Styles.Title>{title}</Styles.Title>
        </Styles.TitleContainer>
      </Styles.Container>
    </Styles.CardAnimation>
  );
};

export default PortfolioItem;
