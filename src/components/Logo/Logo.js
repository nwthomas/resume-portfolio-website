import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

  ${props =>
    !props.darkmode &&
    css`
      -webkit-box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
      -moz-box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
      box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
    `}

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
    <Link to="/">
      <LogoDiv darkmode={props.darkmode}>
        <div>
          <p>N</p>
        </div>
      </LogoDiv>
    </Link>
  );
};

Logo.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default Logo;
