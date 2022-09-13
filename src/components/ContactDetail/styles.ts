import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Open Sans, sans-serif;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  svg {
    position: relative;
    font-size: 33px;
    left: 0;
    top: 5px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 20px;
`;

export const Title = styled.span`
  font-weight: 400;
  opacity: 0.8;
  padding-bottom: 0;
  text-transform: uppercase;
  line-height: 25px;
`;

export const Value = styled.p`
  margin: 0;
  font-weight: 600;
  line-height: 25px;
`;
