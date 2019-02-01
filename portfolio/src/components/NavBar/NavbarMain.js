import React from "react";
import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";

import { Logo } from "../Logo";
import moon from "../../images/moon.svg";

const hoverLink = keyframes`
  0% {
    color: black;
  }
  100% {
    color: #AD91ED;
  }
`;

const hoverLinkDark = keyframes`
  0% {
    color: white;
  }
  100% {
    color: black;
  }
`;

const hoverDarkMode = keyframes`
  0% {
    background: #474a4c;
    border: 0;
    opacity: 0.8;
  }
  100% {
    background: #35383b;
    opacity: 1;
  }
`;

const NavbarMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1100px;
  width: 100%;
  height: 180px;
  margin: 0 auto;
  padding: 0 5%;
  position: relative;
`;

const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  a {
    margin-top: 20px;

    &:hover {
      ${props =>
        props.darkmode
          ? css`
              animation: ${hoverLinkDark} 0.5s forwards;
            `
          : css`
              animation: ${hoverLink} 0.5s forwards;
            `}
    }

    ${props =>
      props.darkmode &&
      css`
        color: white;
      `}
  }
`;

const DarkModeTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  height: 60px;
  width: 55px;
  background: #474a4c;
  opacity: 0.8;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  -moz-border-bottom-right-radius: 10px;
  -moz-border-bottom-left-radius: 10px;
  -webkit-border-bottom-right-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -webkit-box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.12);

  &:hover {
    animation: ${hoverDarkMode} 0.5s forwards;
  }

  ${props =>
    props.darkmode &&
    css`
      background: black;
    `}

  div {
    width: 25px;
  }
`;

const NavbarMain = props => {
  console.log(props.darkmode);
  return (
    <NavbarMainDiv darkmode={props.darkmode}>
      <Logo darkmode={props.darkmode} />
      <NavbarLinks darkmode={props.darkmode}>
        <DarkModeTab
          darkmode={props.darkmode}
          onClick={() => props.setDarkmode(!props.darkmode)}
        >
          <div>
            <img src={moon} alt="Dark mode logo" />
          </div>
        </DarkModeTab>
        <NavLink exact to="/">
          Work
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </NavbarLinks>
    </NavbarMainDiv>
  );
};

export default NavbarMain;
