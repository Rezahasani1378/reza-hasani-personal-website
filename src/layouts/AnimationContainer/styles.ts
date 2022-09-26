import styled from "styled-components";

export const Container = styled.main<{ margin?: string; maxWidth?: string }>`
  animation: 0.6s cubic-bezier(0, 0, 0.2, 1) 0s 1 slideInUp;
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: ${({ margin }) => margin || "initial"};

  @media (min-width: 992px) {
    //for the menu
    padding: 0 110px 0 30px;
  }

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
