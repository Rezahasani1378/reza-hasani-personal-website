import styled from "styled-components";

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
