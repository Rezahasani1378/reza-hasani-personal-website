import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border-radius: 35px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 0;
  text-decoration: none !important;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid var(--main-primary-color);
  margin: 0;
  box-sizing: border-box;

  &:hover&::before {
    transform: translateX(0);
  }

  &::before {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-out;
    z-index: -1;
    background-color: var(--main-primary-color);
  }
`;

export const Title = styled.h2`
  color: #fff;
  margin: 0;
  padding: 0 25px 0 30px;
  text-transform: uppercase;
  transition: all 0.3s;
  z-index: -1;
  font-size: 15px;
  border-radius: 30px 0 0 30px;
  font-weight: 600;
`;

export const ArrowContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--main-primary-color);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  font-size: 19px;
`;
