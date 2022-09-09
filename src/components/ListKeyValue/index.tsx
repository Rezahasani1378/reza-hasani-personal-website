import React from "react";
import * as Styles from "./styles";

const ListKeyValue = ({ data }: { data: { [key: string]: string } }) => {
  return (
    <Styles.ListContainer>
      {Object.entries(data).map(([key, value]) => (
        <Styles.ListItem>
          <Styles.ListKey>{key}: </Styles.ListKey>
          <Styles.ListValue>{value}</Styles.ListValue>
        </Styles.ListItem>
      ))}
    </Styles.ListContainer>
  );
};

export default ListKeyValue;
