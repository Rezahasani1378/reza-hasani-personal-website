import React from "react";
import * as Styles from "./styles";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styles.MainContainer>
      <Styles.ModalContainer>{children}</Styles.ModalContainer>
    </Styles.MainContainer>
  );
};

export default Modal;
