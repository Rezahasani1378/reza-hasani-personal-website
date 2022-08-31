import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  width: 100%;
`;

export const FrontTitle = styled.h1`
  color: #fff;
  font-size: 56px;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
`;

export const GreenPart = styled.span`
  color: var(--main-primary-color);
`;

export const BackTitle = styled.span`
  color: hsla(0, 0%, 100%, 0.07);
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
`;
