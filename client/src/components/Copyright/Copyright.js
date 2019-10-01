import React from "react";
import styled, { css } from "styled-components";

const Copyright = ({ darkmode }) => {
  return (
    <CopyrightContainer darkmode={darkmode}>
      <h4>Copyright © 2019 Nathan Thomas</h4>
    </CopyrightContainer>
  );
};

const CopyrightContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  h4 {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 80px;
    color: black;

    @media (min-width: 500px) {
      font-size: 1.6rem;
    }

    ${props =>
      props.darkmode &&
      css`
        color: white;
      `}
  }
`;

export default Copyright;
