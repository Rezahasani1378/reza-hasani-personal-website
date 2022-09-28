import styled from "styled-components";

export const Container = styled.li`
  margin: 0 0 50px;
  padding: 0 20px 0 60px;
  position: relative;

  &::after {
    border-left: 1px solid #333;
    bottom: 0;
    content: "";
    left: 20px;
    position: absolute;
    top: 0;
    z-index: -1;
  }
`;

export const Icon = styled.div`
  background-color: var(--main-primary-color);
  border-radius: 50%;
  color: #fff;
  height: 40px;
  left: 0;
  line-height: 40px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 40px;
`;

export const Period = styled.div`
  background-color: #252525;
  font-family: Open Sans, sans-serif;
  text-transform: uppercase;
  border-radius: 20px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
  opacity: 0.8;
  padding: 1px 10px;
`;

export const Title = styled.h5`
  font-size: 18px;
  margin: 7px 0 10px;
  font-family: Open Sans, sans-serif;

  span {
    font-size: 15px;
    font-weight: 600;
    opacity: 0.8;
    padding-left: 26px;
    position: relative;

    &::before {
      background-color: #fff;
      content: "";
      height: 2px;
      left: 7px;
      opacity: 0.8;
      position: absolute;
      top: 9px;
      width: 10px;
    }
  }
`;

export const Description = styled.p`
  font-family: Open Sans, sans-serif;
  color: #eee;
  font-size: 14px;
  margin: 0;
  //Todo: lineHeight must be global
  line-height: 1.6;
`;
