import styled from "styled-components";

export const CardAnimation = styled.div`
  opacity: 1;
  transform: translateZ(0);
  transition-timing-function: ease;
  transition-duration: 1.2s;
  border-radius: 1rem;
  height: 100%;
  width: 350px;
  margin: 10px;
`;

export const TitleContainer = styled.h3`
  align-items: center;
  background-color: var(--main-primary-color);
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 100%;
  justify-content: center;
  left: 50%;
  opacity: 0;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  visibility: hidden;
  width: 100%;
  margin: 0;
  font-family: Poppins, sans-serif;
`;

export const Title = styled.span`
  position: relative;
  transform: translateY(-20px);
  transition: 0.5s;
  font-size: 18px;
  text-transform: uppercase;
`;

export const Container = styled.a`
  cursor: pointer;
  display: flex;
  height: 229px;
  position: relative;

  &:hover ${TitleContainer} {
    opacity: 1;
    visibility: visible;
  }

  &:hover ${Title} {
    transform: translateY(0);
  }
`;

export const BackgroundImage = styled.img`
  border-radius: 0.5rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
`;
