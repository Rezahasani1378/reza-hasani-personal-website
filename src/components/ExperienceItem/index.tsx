import React from "react";
import * as Styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ExperienceItem = ({ icon }: { icon: IconProp }) => {
  return (
    <Styles.Container>
      <Styles.Icon>
        <FontAwesomeIcon icon={icon as IconProp} />
      </Styles.Icon>
      <Styles.Period>2018 - Present</Styles.Period>
      <Styles.Title>
        WEB DEVELOPER
        <span>Evanto</span>
      </Styles.Title>
      <Styles.Description>
        Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit
      </Styles.Description>
    </Styles.Container>
  );
};

export default ExperienceItem;
