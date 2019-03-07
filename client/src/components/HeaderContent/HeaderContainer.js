import React from "react";
import styled, { keyframes, css } from "styled-components";
import ahLogo from "../../images/ah-logo.png";
import ahLogoWhite from "../../images/ah-logo-white.png";
import lambdaLogo from "../../images/lambda-logo.png";
import lambdaLogoWhite from "../../images/lambda-logo-white.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const hoverLink = keyframes`
  0% {
    color: #5A22DB;
  }
  100% {
    color: #AD91ED;
  }
`;

const hoverLinkDarkmode = keyframes`
  0% {
    color: #1a97f0;
  }
  100% {
    color: #6DBCF5;
  }
`;

const HeaderContainerDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 50px 0;
  margin: 0 auto;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  p {
    max-width: 1000px;
    width: 100%;

    a {
      font-size: 3rem;
      color: #6936de;

      ${props =>
        props.darkmode &&
        css`
          color: #1a97f0;
        `}

      &:hover {
        ${props =>
          props.darkmode
            ? css`
                animation: ${hoverLinkDarkmode} 0.5s forwards;
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
`;

const CurrentPreviousWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  div {
    h4 {
      letter-spacing: 4px;
      margin-top: 50px;

      @media (min-width: 800px) {
        margin-top: 100px;
      }
    }

    div {
      padding: 10px 0;
      width: 60%;
      max-width: 300px;
      opacity: 1;
      transition: 0.2s;
      margin: 0;

      @media (min-width: 800px) {
        width: 300px;
      }

      &:hover {
        opacity: 0.8;
        padding: 6px 0 14px;
      }
    }
  }

  div:first-child {
    @media (min-width: 500px) {
      padding-right: 5%;
    }

    @media (min-width: 800px) {
      padding-right: 6.5%;
    }
  }
`;

const HeaderContainer = props => {
  return (
    <HeaderContainerDiv darkmode={props.darkmode}>
      <p>
        I'm Nathan Thomas, a{" "}
        <a href="https://github.com/nwthomas">full stack software engineer</a>{" "}
        living in the Napa Valley and currently attending{" "}
        <a href="https://lambdaschool.com/">Lambda School</a>. Let's{" "}
        <Link to="/contact">talk</Link>.
      </p>
      <CurrentPreviousWork>
        <div>
          <h4>Current Student:</h4>
          <div>
            <a href="https://lambdaschool.com/">
              <img
                data-testid="schoolLogo"
                src={props.darkmode ? lambdaLogoWhite : lambdaLogo}
                alt="Current school logo"
              />
            </a>
          </div>
        </div>
        <div>
          <h4>Previously:</h4>
          <div>
            <a href="https://www.adventisthealth.org/">
              <img
                data-testid="workLogo"
                src={props.darkmode ? ahLogoWhite : ahLogo}
                alt="Former employer logo"
              />
            </a>
          </div>
        </div>
      </CurrentPreviousWork>
    </HeaderContainerDiv>
  );
};

HeaderContainer.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default HeaderContainer;
