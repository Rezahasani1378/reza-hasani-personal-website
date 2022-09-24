import styled from "styled-components";

export const Container = styled.a`
  background: #2b2a2a;
  border-radius: 50%;
  color: #fff;
  font-size: 17px;
  width: 40px;
  height: 40px;
  line-height: 42px;
  text-align: center;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--main-primary-color);
  }
`;

export const Icon = styled.div``;
