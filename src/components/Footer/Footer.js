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

const hoverLinkDark = keyframes`
  0% {
    color: white;
  }
  100% {
    color: #c3677c;
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

    p:nth-child(even) {
      color: #6936de;
      display: block;
      margin: 30px 0 10px;

      @media (min-width: 800px) {
        margin: 20px 10px 0;
      }

      ${props =>
        props.darkmode &&
        css`
          color: #b6465f;
        `}
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
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
                animation: ${hoverLinkDark} 0.2s forwards;
              `
            : css`
                animation: ${hoverLink} 0.2s forwards;
              `}
      }
    }

    a:last-child {
      margin-bottom: 80px;
    }
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
          <p>Get in contact.</p>
        </div>
        <div>
          <a href="https://github.com/nwthomas">GitHub</a>
          <a href="https://www.linkedin.com/in/nathan-thomas-644b3339/">
            LinkedIn
          </a>
          <a href="https://medium.com/@nwthomas">Medium</a>
          <a href="https://twitter.com/_nwthomas">Twitter</a>
          <a href="https://www.instagram.com/nwthomas/">Instagram</a>
          <Link to="/contact">Email</Link>
        </div>
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
