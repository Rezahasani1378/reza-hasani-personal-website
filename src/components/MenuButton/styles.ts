import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  position: fixed;
  right: 30px;
  z-index: 1;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 992px) {
    cursor: none;
    position: fixed;
    flex-direction: row;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: space-around;
    background: #2b2a2a;
    z-index: 2;
  }
`;

export const DarkToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;
