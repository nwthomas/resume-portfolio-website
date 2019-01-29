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
    font-family: "Work Sans", sans-serif;
  }
  h1 {
    font-size: 3.8rem;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 200;
    opacity: 0.9;
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
  img {
    width: 100%;
    height: auto;
  }
  .App {
    width: 100vw;
  }
`;
