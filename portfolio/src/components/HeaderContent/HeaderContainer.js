import React from "react";
import styled, { keyframes, css } from "styled-components";
import ahLogo from "../../images/ah-logo.png";
import ahLogoWhite from "../../images/ah-logo-white.png";
import lambdaLogo from "../../images/lambda-logo.png";
import lambdaLogoWhite from "../../images/lambda-logo-white.png";

const hoverLink = keyframes`
  0% {
    color: ##5A22DB;
  }
  100% {
    color: #AD91ED;
  }
`;

const hoverLinkDarkMode = keyframes`
  0% {
    color: #b6465f;
  }
  100% {
    color: #c3677c;
  }
`;

const hoverPhoto = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.65;
  }
`;

const HeaderContainerDiv = styled.div`
  width: 100%;
  padding: 50px 5%;
  max-width: 1100px;
  margin: 0 auto;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  p {
    font-size: 3rem;
    line-height: 1.8;

    a {
      font-size: 3rem;
      color: #6936de;

      ${props =>
        props.darkmode &&
        css`
          color: #b6465f;
        `}

      &:hover {
        ${props =>
          props.darkmode
            ? css`
                animation: ${hoverLinkDarkMode} 0.5s forwards;
              `
            : css`
                animation: ${hoverLink} 0.5s forwards;
              `}
      }

      &:active {
        ${props =>
          props.darkmode
            ? css`
                color: #b6465f;
              `
            : css`
                color: #ad91ed;
              `}
      }
    }
  }

  div {
    h4 {
      letter-spacing: 4px;
      margin-top: 50px;
    }
    div {
      margin: 10px 0;
      width: 60%;
      max-width: 300px;

      &:hover {
        animation: ${hoverPhoto} 0.5s forwards;
      }
    }
  }
`;

const HeaderContainer = props => {
  return (
    <HeaderContainerDiv darkmode={props.darkmode}>
      <p darkmode={props.darkmode}>
        I'm Nathan Thomas, a{" "}
        <a href="https://github.com/nwthomas">full stack software engineer</a>{" "}
        living in the Napa Valley and currently enrolled at{" "}
        <a href="https://lambdaschool.com/">Lambda School</a>.
      </p>
      <div>
        <h4>CURRENT STUDENT:</h4>
        <div>
          <a href="https://lambdaschool.com/">
            <img
              src={props.darkmode ? lambdaLogoWhite : lambdaLogo}
              alt="Current school logo"
            />
          </a>
        </div>
        <h4>PREVIOUSLY:</h4>
        <div>
          <a href="https://www.adventisthealth.org/">
            <img
              src={props.darkmode ? ahLogoWhite : ahLogo}
              alt="Former employer logo"
            />
          </a>
        </div>
      </div>
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;
