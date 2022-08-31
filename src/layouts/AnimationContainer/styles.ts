import styled from "styled-components";

export const Container = styled.main`
  animation: 0.6s cubic-bezier(0, 0, 0.2, 1) 0s 1 slideInUp;
  position: relative;

  @keyframes slideInUp {
    0% {
      opacity: 0;
      top: 100px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }
`;
