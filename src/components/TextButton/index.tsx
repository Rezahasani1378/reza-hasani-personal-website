import * as Styles from "./styles";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const TextButton = ({
  title,
  icon,
  onClick,
}: {
  icon: IconProp;
  title: string;
  onClick: () => void;
}) => {
  return (
    <Styles.Button onClick={() => onClick()}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.ArrowContainer>
        <FontAwesomeIcon icon={icon as IconProp} />
      </Styles.ArrowContainer>
    </Styles.Button>
  );
};

export default TextButton;
