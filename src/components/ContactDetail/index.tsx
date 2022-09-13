import React from "react";
import * as Styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ContactDetail = ({
  icon,
  title,
  value,
}: {
  icon: IconProp;
  title: string;
  value: string;
}) => {
  return (
    <Styles.Container>
      <Styles.IconContainer>
        <FontAwesomeIcon icon={icon as IconProp} size="2x" color="#ffb400" />
      </Styles.IconContainer>
      <Styles.DescriptionContainer>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Value>{value}</Styles.Value>
      </Styles.DescriptionContainer>
    </Styles.Container>
  );
};

export default ContactDetail;
