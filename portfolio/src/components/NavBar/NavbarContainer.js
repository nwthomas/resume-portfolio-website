import React from "react";
import styled from "styled-components";

import NavbarMain from "./NavbarMain";

const NavbarContainerDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  color: white;
  margin: 0 auto;
`;

const NavbarContainer = props => {
  return (
    <NavbarContainerDiv darkmode={props.darkmode}>
      <NavbarMain darkmode={props.darkmode} setDarkmode={props.setDarkmode} />
    </NavbarContainerDiv>
  );
};

export default NavbarContainer;
