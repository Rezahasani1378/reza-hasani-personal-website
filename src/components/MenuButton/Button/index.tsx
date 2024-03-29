import * as Styles from "./styles";
import * as React from "react";
import { useMemo } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

const Button = ({
  icon,
  route,
  title,
  onClick,
  hoverBg,
  activated,
  smallScreenBackground,
}: {
  icon: IconProp;
  title?: string;
  onClick?: () => void;
  route?: string;
  //todo: merge these types with ButtonTypes interface in src/components/MenuButton/Button
  hoverBg?: string;
  activated?: boolean;
  smallScreenBackground?: string;
}) => {
  const renderButton = useMemo(
    () => (
      <Styles.Button
        hoverBg={hoverBg}
        activated={activated}
        smallScreenBackground={smallScreenBackground}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon as IconProp} />
        {title && <Styles.Title hoverBg={hoverBg}>{title}</Styles.Title>}
      </Styles.Button>
    ),
    [activated, hoverBg, icon, title]
  );

  return (
    <div>
      {route ? <Link to={route}>{renderButton}</Link> : <>{renderButton}</>}
    </div>
  );
};

export default Button;
