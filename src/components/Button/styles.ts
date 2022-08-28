import styled from "styled-components";

interface ButtonTypes {
  hoverBg?: string;
  mainBg?: string;
}

export const Title = styled.h2<ButtonTypes>`
  border-radius: 30px;
  color: #fff;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  margin: 0;
  opacity: 0;
  padding: 0 25px 0 30px;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: 0;
  transition: all 0.3s;
  z-index: -1;
  background-color: ${({ hoverBg }) => hoverBg || `var(--main-primary-color)`};
  font-size: 15px;
`;

export const Button = styled.button<ButtonTypes>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ mainBg }) => mainBg || `var(--main-secondary-color)`};
  border: none;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.3s;
  color: var(--bs-gainsboro);

  &:hover {
    background-color: ${({ hoverBg }) =>
      hoverBg || `var(--main-primary-color)`};
    color: var(--bs-white);
  }

  &:hover ${Title} {
    border-radius: 30px 0 0 30px;
    margin: 0;
    opacity: 1;
    right: 27px;
    text-align: center;
  }
`;
