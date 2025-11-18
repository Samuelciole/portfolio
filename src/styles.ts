import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Titulo = styled.h1`
  color: blue;
  font-size: 24px;
`;

export default GlobalStyle;
