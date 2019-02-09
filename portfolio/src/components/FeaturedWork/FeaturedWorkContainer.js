import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
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

    /* &:hover {
      -webkit-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
    } */

    div {
      margin: 20px 5%;
      width: 90%;
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
