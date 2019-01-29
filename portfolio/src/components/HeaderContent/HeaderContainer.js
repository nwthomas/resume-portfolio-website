import React from "react";
import styled, { keyframes } from "styled-components";

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
  margin: 40px auto;

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
`;

const HeaderContainer = () => {
  return (
    <HeaderContainerDiv>
      <p>
        I'm Nathan Thomas, a{" "}
        <a href="https://github.com/nwthomas">full stack software engineer</a>{" "}
        living in the Napa Valley and currently enrolled at{" "}
        <a href="">Lambda School</a>.
      </p>
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;
