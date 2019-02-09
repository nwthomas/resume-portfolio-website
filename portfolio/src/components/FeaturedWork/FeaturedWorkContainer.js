import React from "react";
import styled, { css, keyframes } from "styled-components";

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
    height: 350px;
    width: 100%;
    margin: 25px 0;
    padding: 50px 0;
    border: 1px solid white;

    &:hover {
      -webkit-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
    }

    div {
    }
  }
`;

const FeaturedWorkContainer = props => {
  return (
    <FeaturedWorkContainerDiv darkmode={props.darkmode}>
      <p>Featured Projects</p>
      <div>{/* <div /> */}</div>
      <div>{/* <div /> */}</div>
    </FeaturedWorkContainerDiv>
  );
};

export default FeaturedWorkContainer;
