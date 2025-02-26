import styled from "styled-components";

export const Tr = styled.tr`
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-word;
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;
