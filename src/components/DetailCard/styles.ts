import styled from "styled-components";

export const CardContainer = styled.div`
  //Todo: Dynamic Colors
  border: 1px solid #252525;
  border-radius: 5px;
  padding: 20px 30px 25px 40px;
  flex: 0 0 auto;
`;

export const Number = styled.h3`
  position: relative;
  font-family: Poppins, sans-serif;
  color: var(--main-primary-color);
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  width: fit-content;

  &::after {
    content: "+";
    font-size: 33px;
    font-weight: 300;
    position: absolute;
    right: -24px;
    top: 2px;
  }
`;

export const Text = styled.p`
  position: relative;
  font-family: Open Sans, sans-serif;
  text-transform: uppercase;
  padding-left: 45px;
  margin: 0;
  line-height: 1.6;

  span {
    display: block;
  }

  &::before {
    background: #777;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 30px;
  }
`;
