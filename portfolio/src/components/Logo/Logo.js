import React from "react";
import styled from "styled-components";

const LogoDiv = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  height: 150px;
  width: 150px;
  background: #845ae4;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 12px 12px 64px -16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 12px 12px 64px -16px rgba(0, 0, 0, 0.3);
  box-shadow: 12px 12px 64px -16px rgba(0, 0, 0, 0.3);

  div {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    height: 120px;
    width: 120px;
    background: #845ae4;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: "Work Sans", sans-serif;
      font-size: 13rem;
      font-weight: 700;
      color: white;
    }
  }
`;

const Logo = () => {
  return (
    <LogoDiv>
      <div>
        <p>N</p>
      </div>
    </LogoDiv>
  );
};

export default Logo;
