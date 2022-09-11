import React from "react";
import * as Styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ExperienceItem = ({
  icon,
  period,
  title,
  location,
  description,
}: {
  icon: IconProp;
  period: { start: string; end: string };
  title: string;
  location: string;
  description: string;
}) => {
  return (
    <Styles.Container>
      <Styles.Icon>
        <FontAwesomeIcon icon={icon as IconProp} />
      </Styles.Icon>
      <Styles.Period>
        {period.start} - {period.end}
      </Styles.Period>
      <Styles.Title>
        {title}
        <span>{location}</span>
      </Styles.Title>
      <Styles.Description>{description}</Styles.Description>
    </Styles.Container>
  );
};

export default ExperienceItem;
