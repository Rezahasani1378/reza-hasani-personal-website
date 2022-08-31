import * as React from "react";
import * as Styles from "./styles";
import Button from "./Button";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const MenuButton = () => {
  return (
    <Styles.Container>
      <Styles.DarkToggleContainer>
        <Button icon={faSun as IconProp} mainBg="#4b4b4b" hoverBg="#656565" />
      </Styles.DarkToggleContainer>
      <Styles.MenuContainer>
        <Button title="Home" route="/" activated icon={faHome as IconProp} />
        <Button title="About" route="/about" icon={faUser as IconProp} />
        <Button
          title="Portfolio"
          route="/portfolio"
          icon={faBriefcase as IconProp}
        />
        <Button
          title="Contact"
          route="/contact"
          icon={faEnvelopeOpen as IconProp}
        />
      </Styles.MenuContainer>
    </Styles.Container>
  );
};

export default MenuButton;
