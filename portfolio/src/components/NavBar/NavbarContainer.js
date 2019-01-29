import React from "react";
import styled from "styled-components";

import NavbarMain from "./NavbarMain";

const NavbarContainerDiv = styled.div`
  width: 100%;
`;

const NavbarContainer = () => {
  return (
    <NavbarContainerDiv>
      <NavbarMain />
    </NavbarContainerDiv>
  );
};

export default NavbarContainer;
