import * as Styles from "./styles";
import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TextButton = ({ title }: { icon: IconDefinition; title: string }) => {
  return (
    <Styles.Button>
      <Styles.Title>{title}</Styles.Title>
      <Styles.ArrowContainer>
        <FontAwesomeIcon icon={faArrowRight as IconDefinition} />
      </Styles.ArrowContainer>
    </Styles.Button>
  );
};

export default TextButton;
