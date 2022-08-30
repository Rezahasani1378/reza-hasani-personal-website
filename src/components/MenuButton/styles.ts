import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  position: absolute;
  right: 30px;
  z-index: 1;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DarkToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;
