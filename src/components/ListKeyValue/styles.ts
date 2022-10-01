import styled from "styled-components";

export const ListKeyValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  //todo: font global
  font-family: Open Sans, sans-serif;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  padding-bottom: 25px;
  flex: 0 0 50%;
  max-width: 300px;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
    line-height: 1.6;
  }
`;

export const ListKey = styled.span`
  opacity: 0.8;
  text-transform: capitalize;
`;

export const ListValue = styled.span`
  font-weight: 600;
`;
