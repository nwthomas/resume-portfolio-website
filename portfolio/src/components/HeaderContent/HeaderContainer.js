import React from "react";
import styled, { keyframes } from "styled-components";
import ahLogo from "../../images/ah-logo.png";
import lambdaLogo from "../../images/lambda-logo.png";

const hoverLink = keyframes`
  0% {
    color: ##5A22DB;
  }
  100% {
    color: #AD91ED;
  }
`;

const hoverPhoto = keyframes`
  0% {
    opacity: 0.65;
  }
  100% {
    opacity: 1;
  }
`;

const HeaderContainerDiv = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;

  p {
    font-size: 3rem;
    line-height: 1.8;

    a {
      font-size: 3rem;
      color: #6936de;

      &:hover {
        animation: ${hoverLink} 0.5s forwards;
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
      opacity: 0.65;

      &:hover {
        animation: ${hoverPhoto} 0.5s forwards;
      }
    }
  }
`;

const HeaderContainer = () => {
  return (
    <HeaderContainerDiv>
      <p>
        I'm Nathan Thomas, a{" "}
        <a href="https://github.com/nwthomas">full stack software engineer</a>{" "}
        living in the Napa Valley and currently enrolled at{" "}
        <a href="https://lambdaschool.com/">Lambda School</a>.
      </p>
      <div>
        <h4>CURRENT STUDENT:</h4>
        <div>
          <a href="https://lambdaschool.com/">
            <img src={lambdaLogo} alt="Current school logo" />
          </a>
        </div>
        <h4>PREVIOUSLY:</h4>
        <div>
          <a href="https://www.adventisthealth.org/">
            <img src={ahLogo} alt="Former employer logo" />
          </a>
        </div>
      </div>
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;
