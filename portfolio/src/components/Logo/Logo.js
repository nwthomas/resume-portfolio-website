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
  -webkit-box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);

  ${props =>
    props.darkmode &&
    css`
      background: #181818;
    `}

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
        background: #181818;
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
