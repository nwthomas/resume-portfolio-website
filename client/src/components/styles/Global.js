import { css } from "styled-components";

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
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
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-size: 3rem;
    line-height: 1.8;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    font-family: "Work Sans", sans-serif;
    color: black;
  }
  input,
  textarea,
  button {
    -webkit-appearance: none;
    font-family: "Work Sans", sans-serif;
  }
  label {
    font-size: 1.6rem;
    font-weight: 200;
    opacity: 0.9;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-family: "Work Sans", sans-serif;
  }
  input,
  textarea {
    color: #929292;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
