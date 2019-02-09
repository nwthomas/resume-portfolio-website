import React from "react";
import styled, { css } from "styled-components";

const LogoDiv = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  height: 130px;
  width: 130px;
  background: #845ae4;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: -1px 4px 34px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -1px 4px 34px 0px rgba(0, 0, 0, 0.18);
  box-shadow: -1px 4px 34px 0px rgba(0, 0, 0, 0.18);

  ${props =>
    props.darkmode &&
    css`
      background: black;
    `} /*  #181818   */

  div {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    height: 120px;
    width: 120px;
    background: #845ae4;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
      props.darkmode &&
      css`
        background: black;
      `}

    p {
      font-family: "Work Sans", sans-serif;
      font-size: 12rem;
      font-weight: 700;
      color: white;
    }
  }
`;

const Logo = props => {
  return (
    <LogoDiv darkmode={props.darkmode}>
      <div darkmode={props.darkmode}>
        <p>N</p>
      </div>
    </LogoDiv>
  );
};

export default Logo;
