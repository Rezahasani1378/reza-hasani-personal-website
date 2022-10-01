import React from "react";
import * as Styles from "./styles";

const DetailCard = ({
  number,
  text,
}: {
  number: number;
  text: { firstLine: string; secondLine: string };
}) => {
  return (
    <Styles.CardContainer>
      <Styles.Number>{number}</Styles.Number>
      <Styles.Text>
        {text.firstLine} <br />
        {text.secondLine}
      </Styles.Text>
    </Styles.CardContainer>
  );
};

export default DetailCard;
