import * as React from "react";
import * as Styles from "./styles";
import Button from "./Button";
import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

const MenuButton = ({
  route,
  theme,
  toggleTheme,
}: {
  route: string;
  theme: string;
  toggleTheme: () => void;
}) => {
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
        <Button
          icon={(theme === "light" ? faMoon : faSun) as IconProp}
          onClick={toggleTheme}
          hoverBg="#656565"
        />
      </Styles.DarkToggleContainer>
      <Styles.MenuContainer>
        {buttonsData.map((data) => (
          <Button
            icon={data.icon as IconProp}
            activated={data.isActivated()}
            route={data.route}
            title={data.title}
            smallScreenBackground="#444"
          />
        ))}
      </Styles.MenuContainer>
    </Styles.Container>
  );
};

export default MenuButton;
