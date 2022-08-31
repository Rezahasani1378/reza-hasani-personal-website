import * as Styles from "./styles";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const TextButton = ({ title }: { icon: IconProp; title: string }) => {
  return (
    <Styles.Button>
      <Styles.Title>{title}</Styles.Title>
      <Styles.ArrowContainer>
        <FontAwesomeIcon icon={faArrowRight as IconProp} />
      </Styles.ArrowContainer>
    </Styles.Button>
  );
};

export default TextButton;
