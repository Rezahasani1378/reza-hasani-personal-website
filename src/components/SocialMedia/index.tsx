import React from "react";
import * as Styles from "./styles";

const SocialMedia = ({ icon, href }: { icon: any; href: string }) => {
  return (
    <Styles.Container href={href} target="_blank">
      <img src={icon} alt="Social" width="16px" />
    </Styles.Container>
  );
};

export default SocialMedia;
