import React from "react";
import styled from "styled-components";

const FeaturedWorkContainerDiv = styled.div`
  width: 90%;
  margin: 90px 5%;

  div {
    height: 300px;
    width: 100%;
    margin: 25px 0;
    padding: 50px 0;
    border: 1px solid red;

    &:hover {
      -webkit-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
      box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.23);
    }

    div {
    }
  }
`;

const FeaturedWorkContainer = () => {
  return (
    <FeaturedWorkContainerDiv>
      <p>Featured Work</p>
      <div>{/* <div /> */}</div>
      <div>{/* <div /> */}</div>
    </FeaturedWorkContainerDiv>
  );
};

export default FeaturedWorkContainer;
