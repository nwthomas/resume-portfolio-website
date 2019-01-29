import React from "react";
import styled, { keyframes } from "styled-components";
import ahLogo from "../../images/ah-logo.png";
import lambdaLogo from "../../images/lambda-logo.png";

const hoverLink = keyframes`
  0% {
    color: #ff9697;
  }
  100% {
    color: #ffb2b3;
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
      color: #ff9697;

      &:hover {
        animation: ${hoverLink} 0.35s forwards;
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
        <h4>CURRENTLY:</h4>
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
