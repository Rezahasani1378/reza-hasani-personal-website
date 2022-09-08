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

const MenuButton = ({ route }: { route: string }) => {
  const buttonsData = [
    {
      title: "Home",
      route: "/",
      isActivated: function () {
        return route === this.route;
      },
      icon: faHome,
    },
    {
      title: "about",
      route: "/about",
      isActivated: function () {
        return route === this.route;
      },
      icon: faUser,
    },
    {
      title: "Portfolio",
      route: "/portfolio",
      isActivated: function () {
        return route === this.route;
      },
      icon: faBriefcase,
    },
    {
      title: "Contact",
      route: "/contact",
      isActivated: function () {
        return route === this.route;
      },
      icon: faEnvelopeOpen,
    },
  ];

  return (
    <Styles.Container>
      <Styles.DarkToggleContainer>
        <Button icon={faSun as IconProp} mainBg="#4b4b4b" hoverBg="#656565" />
      </Styles.DarkToggleContainer>
      <Styles.MenuContainer>
        {buttonsData.map((data) => (
          <Button
            icon={data.icon as IconProp}
            activated={data.isActivated()}
            route={data.route}
            title={data.title}
          />
        ))}
      </Styles.MenuContainer>
    </Styles.Container>
  );
};

export default MenuButton;
