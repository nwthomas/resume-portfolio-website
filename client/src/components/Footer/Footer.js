import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import PropTypes from "prop-types";

const hoverLink = keyframes`
  0% {
    color: black;
  }
  100% {
    color: #AD91ED;
  }
`;

const hoverLinkDarkmode = keyframes`
  0% {
    color: white;
  }
  100% {
    color: #6DBCF5;
  }
`;

const contactHover = keyframes`
  0% {
    color: #5A22DB;
  }
  100% {
    color: #AD91ED;
  }
`;

const contactHoverDarkmode = keyframes`
  0% {
    color: #1a97f0;
  }
  100% {
    color: #6DBCF5;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 70px auto 0;
  display: flex;
  flex-direction: column;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  div:first-child {
    @media (min-width: 800px) {
      display: flex;
    }

    p {
      margin-top: 20px;
    }

    a {
      color: #6936de;
      display: block;
      margin: 30px 0 10px;
      font-size: 3rem;
      line-height: 1.8;

      @media (min-width: 800px) {
        margin: 20px 10px 0;
      }

      ${props =>
        props.darkmode &&
        css`
          color: #1a97f0;
        `}

      &:hover {
        ${props =>
          props.darkmode
            ? css`
                animation: ${contactHoverDarkmode} 0.5s forwards;
              `
            : css`
                animation: ${contactHover} 0.5s forwards;
              `}
      }

      &:active {
        ${props =>
          props.darkmode
            ? css`
                color: #b6465f;
              `
            : css`
                color: #ad91ed;
              `}
      }
    }
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    display: flex;
    flex-direction: row;
  }

  a {
    margin-top: 30px;
    font-size: 1.6rem;

    @media (min-width: 800px) {
      margin: 50px 3% 120px 0;
    }

    ${props =>
      props.darkmode &&
      css`
        color: white;
      `}

    &:hover {
      ${props =>
        props.darkmode
          ? css`
              animation: ${hoverLinkDarkmode} 0.2s forwards;
            `
          : css`
              animation: ${hoverLink} 0.2s forwards;
            `}
    }
  }

  a:last-child {
    margin-bottom: 50px;
  }
`;

const Copyright = styled.div`
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

const Footer = props => {
  return (
    <>
      <FooterContainer darkmode={props.darkmode}>
        <div>
          <p>Looking to start a project?</p>
          <Link to="/contact">Get in contact.</Link>
        </div>
        <DesktopLinks darkmode={props.darkmode}>
          <a href="https://github.com/nwthomas">GitHub</a>
          <a href="https://www.linkedin.com/in/nwthomas-profile/">LinkedIn</a>
          <a href="https://medium.com/@nwthomas">Medium</a>
          <a href="https://twitter.com/nwthomas_">Twitter</a>
          <a href="https://www.instagram.com/nwthomas/">Instagram</a>
          <Link to="/contact">Email</Link>
        </DesktopLinks>
      </FooterContainer>
      <Copyright darkmode={props.darkmode}>
        <h4>Copyright © 2019 Nathan Thomas</h4>
      </Copyright>
    </>
  );
};

Footer.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default Footer;
