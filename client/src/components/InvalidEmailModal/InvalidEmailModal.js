import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const buttonHover = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
`;

const buttonHoverDark = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 5%;
  background: white;
  width: 100%;
  min-height: 100vh;
  z-index: 50;

  ${props =>
    props.darkmode &&
    css`
      background: #1b2331;
    `}

  div {
    height: 150px;
    max-width: 400px;
    width: 100%;
    margin: 30vh auto 0;
    z-index: 51;
    display: flex;
    flex-direction: column;
    background: none;

    p {
      width: 100%;
      text-align: center;
      color: black;
      margin-bottom: 35px;

      ${props =>
        props.darkmode &&
        css`
          color: white;
        `}
    }

    button {
      width: 100%;
      height: 45px;
      border: 0;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      background: #ad91ed;
      color: white;
      font-size: 1.6rem;
      text-transform: capitalize;
      cursor: pointer;

      ${props =>
        props.darkmode &&
        css`
          background: black;
        `}

      &:hover {
        animation: ${buttonHover} 0.2s forwards;

        ${props =>
          props.darkmode &&
          css`
            animation: ${buttonHoverDark} 0.2s forwards;
          `}
      }
    }
  }
`;

const InvalidEmailModal = ({ darkmode, setInvalidEmailModal }) => {
  const clickBtn = e => {
    e.preventDefault();
    setInvalidEmailModal(false);
  };
  return (
    <Modal darkmode={darkmode}>
      <div>
        <p>Enter a valid email.</p>
        <button onClick={clickBtn}>Okay</button>
      </div>
    </Modal>
  );
};

InvalidEmailModal.propTypes = {
  darkmode: PropTypes.bool,
  setInvalidEmailModal: PropTypes.func
};

export default InvalidEmailModal;
