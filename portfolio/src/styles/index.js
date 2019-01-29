import { createGlobalStyle } from "styled-components";
import { Reset } from "./Reset";
import { Global } from "./Global";

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Global}
`;
