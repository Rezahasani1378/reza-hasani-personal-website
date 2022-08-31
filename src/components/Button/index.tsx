import * as Styles from "./styles";
import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { useMemo } from "react";

const Button = ({
  icon,
  route,
  title,
  mainBg,
  hoverBg,
  activated,
}: {
  icon: IconDefinition;
  title?: string;
  route?: string;
  mainBg?: string;
  hoverBg?: string;
  activated?: boolean;
}) => {
  const renderButton = useMemo(
    () => (
      <Styles.Button mainBg={mainBg} hoverBg={hoverBg} activated={activated}>
        <FontAwesomeIcon icon={icon as IconProp} />
        {title && (
          <Styles.Title mainBg={mainBg} hoverBg={hoverBg}>
            {title}
          </Styles.Title>
        )}
      </Styles.Button>
    ),
    [activated, mainBg, hoverBg, icon, title]
  );

  return (
    <div>
      {route ? <Link to={route}>{renderButton}</Link> : <>{renderButton}</>}
    </div>
  );
};

export default React.memo(Button);
