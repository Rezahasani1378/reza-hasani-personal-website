import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  //todo: font global
  font-family: Open Sans, sans-serif;
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const ListItem = styled.li`
  padding-bottom: 20px;
  flex: 0 0 50%;
  max-width: 50%;
`;

export const ListKey = styled.span`
  opacity: 0.8;
  text-transform: capitalize;
`;

export const ListValue = styled.span`
  font-weight: 600;
`;
