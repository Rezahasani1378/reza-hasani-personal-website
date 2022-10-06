import styled from "styled-components";

export const HalfBackground = styled.div`
  height: 200%;
  background-color: var(--main-primary-color);
  left: -83%;
  position: fixed;
  top: -50%;
  transform: rotate(-15deg);
  width: 100%;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HomeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin-left: 40px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    margin-left: -30px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const Avatar = styled.div`
  background-position: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  box-shadow: 0 0 7px rgb(0, 0, 0, 90%);
  height: calc(100vh - 80px);
  width: 34%;
  padding: 15px 0;
  background-image: url("https://i.postimg.cc/RZc3RWsC/image-1-1.webp");

  @media (max-width: 1200px) {
    border-radius: 0;
    min-width: 400px;
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 270px;
    width: 270px;
    min-width: initial;
    border-radius: 50%;
    background-size: 130%;
    background-position: -45px -35px;
    border: 4px solid #252525;
    padding: 0;
  }

  @media (max-width: 576px) {
    height: 230px;
    width: 230px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 550px;
  margin-left: 150px;

  //todo: adding media queries for 4K screens
  @media (max-width: 1200px) {
    max-width: 600px;
    margin-left: 75px;
  }

  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

export const MainTitle = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 51px;
  font-weight: 700;
  line-height: 62px;
  margin: 18px 0 10px;
  padding-left: 70px;
  position: relative;
  text-align: left;
  color: var(--main-primary-color);

  @media (max-width: 1200px) {
    padding: 0;
  }

  @media (max-width: 1200px) and (min-width: 992px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 992px) {
    font-size: 38px;
    line-height: 48px;
    margin: 29px 0 13px;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 29px;
    line-height: 39px;
    margin: 18px 0 13px;
  }

  &::before {
    background-color: var(--main-primary-color);
    border-radius: 10px;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    top: 29px;
    width: 40px;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const JobTitle = styled.span`
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const Description = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  line-height: 35px;
  margin: 15px 0 28px;
  color: ${({ theme }) => theme.fontColor.primary};

  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 30px;
    margin: 10px 0 23px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;
