import { css } from "styled-components";

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  input {
    -webkit-appearance: none;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: 3.8rem;
    font-family: "Work Sans", sans-serif;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    font-family: "Work Sans", sans-serif;
    color: black;
  }
  .App {
    width: 100vw;
  }
`;
