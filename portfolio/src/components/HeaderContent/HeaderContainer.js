import React from "react";
import styled from "styled-components";

const HeaderContainerDiv = styled.div`
  width: 90%;
  margin: 0 5%;
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
