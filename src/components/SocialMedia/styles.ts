import styled from "styled-components";

export const Container = styled.a`
  background: ${({ theme }) => theme.button.background};
  border-radius: 50%;
  font-size: 17px;
  width: 40px;
  height: 40px;
  line-height: 42px;
  text-align: center;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    filter: invert(0.4) contrast(0.9);
  }

  &:hover {
    background-color: var(--main-primary-color);
  }
`;

export const Icon = styled.div``;
