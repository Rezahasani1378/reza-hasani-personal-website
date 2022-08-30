import styled from "styled-components";

export const HomeContainer = styled.main`
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

export const HalfBackground = styled.div`
  height: 200%;
  background-color: var(--main-primary-color);
  left: -83%;
  position: fixed;
  top: -50%;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
  width: 100%;
  z-index: -1;
`;

export const HomeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin-left: 40px;
`;

export const Avatar = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  box-shadow: 0 0 7px rgb(0, 0, 0, 90%);
  height: calc(100vh - 100px);
  left: 40px;
  top: 40px;
  z-index: 11;
  width: 500px;
  padding: 15px 0;
  background-image: url("https://tunis.ibthemespro.com/static/media/dark.fcd7feb934db7b81903a.jpg");
`;

export const DescriptionContainer = styled.div`
  max-width: 550px;
  margin-left: 150px;
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

  &::before {
    background-color: var(--main-primary-color);
    border-radius: 10px;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    top: 29px;
    width: 40px;
  }
`;

export const JobTitle = styled.span`
  color: var(--bs-white);
`;

export const Description = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  line-height: 35px;
  margin: 15px 0 28px;
`;
