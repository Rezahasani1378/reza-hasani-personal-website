import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #222;
  background: #111;
  width: 1205px;
  height: 80vh;
  border-radius: 10px;
  outline: none;
  overflow: scroll;

  @media (max-width: 1200px) {
    width: 80vw;
  }
`;
