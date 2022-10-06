import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0);
  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border: ${({ theme }) => theme.border.modal};
  background: ${({ theme }) => theme.body.primary};
  width: 1205px;
  height: 80vh;
  border-radius: 10px;
  outline: none;
  overflow: scroll;
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
  animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @keyframes scaleUp {
    0% {
      transform: scale(0.8) translate(-50%, -40%);
      opacity: 0.7;
    }
    100% {
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;
