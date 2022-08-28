import * as React from "react";
import * as Styles from "./styles";
import Button from "../Button";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const MenuButton = () => {
  return (
    <Styles.Container>
      <Styles.DarkToggleContainer>
        <Button
          icon={faSun as IconDefinition}
          mainBg="#4b4b4b"
          hoverBg="#656565"
        />
      </Styles.DarkToggleContainer>
      <Styles.MenuContainer>
        <Button title="Home" activated icon={faHome as IconDefinition} />
        <Button title="About" icon={faUser as IconDefinition} />
        <Button title="Portfolio" icon={faBriefcase as IconDefinition} />
        <Button title="Contact" icon={faEnvelopeOpen as IconDefinition} />
      </Styles.MenuContainer>
    </Styles.Container>
  );
};

export default MenuButton;
