import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useStateValue } from "react-conflux";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import moon from "../../images/moon.svg";
import sun from "../../images/sun.svg";
import PropTypes from "prop-types";
import { darkContext } from "../../store/contexts";
import { CHANGE_THEME } from "../../store/reducers/globalReducer";

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
    color: #6DBCF5;
  }
`;

const hoverDarkMode = keyframes`
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const NavbarMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  margin: 0 auto;
  position: relative;
`;

const NavbarLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 30px;

  a {
    margin-top: 20px;

    &:hover {
      ${props =>
        props.darkmode
          ? css`
              animation: ${hoverLinkDark} 0.2s forwards;
            `
          : css`
              animation: ${hoverLink} 0.2s forwards;
            `}
    }

    &:active {
      ${props =>
        props.darkmode
          ? css`
              color: black;
            `
          : css`
              color: #ad91ed;
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
  padding-bottom: 12px;
  height: 70px;
  width: 55px;
  background: black;
  opacity: 0.8;
  cursor: pointer;
  color: 111720;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  -moz-border-bottom-right-radius: 6px;
  -moz-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;

  ${props =>
    !props.darkmode &&
    css`
      -webkit-box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
      -moz-box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
      box-shadow: 8px 10px 37px -14px rgba(0, 0, 0, 0.42);
    `}

  ${props =>
    !props.darkmode &&
    css`
      &:hover {
        animation: ${hoverDarkMode} 0.2s forwards;
      }
    `}

  &:active {
    background: black;
    opacity: 1;
  }

  div {
    width: 25px;
  }
`;

const NavbarMain = props => {
  const [, dispatch] = useStateValue(darkContext);
  const setDarkMode = e => {
    e.preventDefault();
    dispatch({ type: CHANGE_THEME });
  };
  const sunImg = sun;
  const moonImg = moon;
  return (
    <NavbarMainDiv darkmode={props.darkmode}>
      <Logo darkmode={props.darkmode} />
      <NavbarLinks darkmode={props.darkmode}>
        <DarkModeTab
          darkmode={props.darkmode}
          onClick={setDarkMode}
          data-testid="darkmodeTab"
        >
          <div>
            <img src={props.darkmode ? sunImg : moonImg} alt="Dark mode logo" />
          </div>
        </DarkModeTab>
        {props.history.location.pathname === "/" ? (
          <a href="#featured-work">Work</a>
        ) : (
          <NavLink exact to="/">
            Work
          </NavLink>
        )}
        <NavLink to="/contact">Contact</NavLink>
      </NavbarLinks>
    </NavbarMainDiv>
  );
};

NavbarMain.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default NavbarMain;
