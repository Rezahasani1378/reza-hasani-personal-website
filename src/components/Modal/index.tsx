import React from "react";
import * as Styles from "./styles";

const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  return (
    <Styles.MainContainer onClick={closeModal}>
      <Styles.ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </Styles.ModalContainer>
    </Styles.MainContainer>
  );
};

export default Modal;
