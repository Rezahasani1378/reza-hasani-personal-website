import * as Styles from "./styles";
import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  icon,
  title,
  mainBg,
  hoverBg,
  activated,
}: {
  icon: IconDefinition;
  title?: string;
  mainBg?: string;
  hoverBg?: string;
  activated?: boolean;
}) => {
  return (
    <Styles.Button mainBg={mainBg} hoverBg={hoverBg} activated={activated}>
      <FontAwesomeIcon icon={icon} />
      {title && (
        <Styles.Title mainBg={mainBg} hoverBg={hoverBg}>
          {title}
        </Styles.Title>
      )}
    </Styles.Button>
  );
};

export default Button;
