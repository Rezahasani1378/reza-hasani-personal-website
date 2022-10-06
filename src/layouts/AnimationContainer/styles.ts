import styled from "styled-components";

export const AnimatedContainer = styled.main`
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

export const TitleContainer = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  width: 100%;

  @media (max-width: 576px) {
    padding-left: 15px;
    padding-right: 15px;
    justify-content: flex-start;
  }
`;

export const FrontTitle = styled.h1`
  color: ${({ theme }) => theme.fontColor.primary};
  font-size: 56px;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 35px;
  }
`;

export const GreenPart = styled.span`
  color: var(--main-primary-color);
`;

export const BackTitle = styled.span`
  color: ${({ theme }) => theme.fontColor.backgroundTitle};
  font-size: 110px;
  font-weight: 800;
  left: 0;
  letter-spacing: 10px;
  line-height: 0.7;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  @media (max-width: 767px) {
    font-size: 45px;
    transform: translateY(-20%);
  }

  @media (max-width: 576px) {
    text-align: left;
  }
`;

export const ElementsContainer = styled.div<{
  margin?: string;
  maxWidth?: string;
  menuPadding?: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: ${({ margin }) => margin || "initial"};

  @media (max-width: 992px) {
    //for the fixed menu
    padding-bottom: ${({ menuPadding }) => menuPadding || "100px"};
  }
`;
