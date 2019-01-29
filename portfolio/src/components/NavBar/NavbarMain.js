import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { Logo } from "../Logo";

const hoverLink = keyframes`
  0% {
    color: black;
  }
  100% {
    color: #ffb2b3;
  }
`;

const NavbarMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 20px auto 0;
  padding: 0 5%;
  height: 150px;
`;

const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  a {
    margin-top: 20px;

    &:hover {
      animation: ${hoverLink} 0.35s forwards;
    }
  }
`;

const NavbarMain = () => {
  return (
    <NavbarMainDiv>
      <Logo />
      <NavbarLinks>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavbarLinks>
    </NavbarMainDiv>
  );
};

export default NavbarMain;
