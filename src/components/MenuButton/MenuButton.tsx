import * as React from "react";
import * as Styles from "./styles";
import Button from "../Button";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const MenuButton = () => {
  return (
    <Styles.Container>
      <Styles.MenuContainer>
        <Button title="Home" icon={faHome} />
        <Button title="About" icon={faUser} />
        <Button title="Portfolio" icon={faBriefcase} />
        <Button title="Contact" icon={faEnvelopeOpen} />
      </Styles.MenuContainer>
    </Styles.Container>
  );
};

export default MenuButton;
