import React from "react";
import { MainTitle } from "../../theme/globalStyles";
import * as Styles from "./styles";

const ListKeyValue = ({
  data,
  title,
}: {
  data: { [key: string]: string };
  title?: string;
}) => {
  return (
    <Styles.ListKeyValueContainer>
      <MainTitle>{title}</MainTitle>
      <Styles.ListContainer>
        {Object.entries(data).map(([key, value]) => (
          <Styles.ListItem>
            <Styles.ListKey>{key}: </Styles.ListKey>
            <Styles.ListValue>{value}</Styles.ListValue>
          </Styles.ListItem>
        ))}
      </Styles.ListContainer>
    </Styles.ListKeyValueContainer>
  );
};

export default ListKeyValue;
