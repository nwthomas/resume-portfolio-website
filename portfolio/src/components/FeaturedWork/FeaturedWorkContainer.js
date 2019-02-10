import React from "react";
import styled, { css } from "styled-components";
import instaSample from "../../images/instagram-macbook.png";
import tipprSample from "../../images/tippr-macbook.png";

const FeaturedWorkContainerDiv = styled.div`
  width: 100%;
  margin: 90px 0;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  p {
    display: flex;
    margin: 0 5%;
  }

  div {
    width: 100%;
    margin: 70px 0;
    position: relative;

    div {
      padding: 20px 5%;
      width: 100%;
      opacity: 1;
      transition: 0.2s;

      &:hover {
        opacity: 0.8;
        padding: 16px 5% 24px;
      }
    }
  }
`;

const FeaturedWorkContainer = props => {
  return (
    <FeaturedWorkContainerDiv darkmode={props.darkmode}>
      <p>Featured Projects</p>
      <div>
        <div>
          <a href="https://github.com/nwthomas/instagram-clone">
            <img src={tipprSample} alt="tippr portfolio samples" />
          </a>
        </div>
      </div>
      <div>
        <div>
          <a href="https://github.com/nwthomas/instagram-clone">
            <img src={instaSample} alt="Instagram portfolio samples" />
          </a>
        </div>
      </div>
    </FeaturedWorkContainerDiv>
  );
};

export default FeaturedWorkContainer;
