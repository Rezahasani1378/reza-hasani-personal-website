import * as Styles from "./styles";
import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  icon,
  title,
  hoverColor,
}: {
  title?: string;
  hoverColor?: string;
}) => {
  return (
    <>
      <Styles.Button>
        <FontAwesomeIcon icon={icon} />
        <Styles.Title>{title}</Styles.Title>
      </Styles.Button>
    </>
  );
};

export default Button;
