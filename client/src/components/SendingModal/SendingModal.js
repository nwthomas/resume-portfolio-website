import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const moveTLBL = keyframes`
  0% {top: 0; left: 0;}
  50% {top: 50px; left: 50px; transform: rotate(90deg); opacity: 0.9;}
  100% {top: 100px; left: 0; transform: rotate(180deg);}
`;

const moveBRTR = keyframes`
  0% {top: 100px; left: 100px;}
  50% {top: 50px; left: 50px; transform: rotate(-90deg); opacity: 0.9;}
  100% {top: 0; left: 100px; transform: rotate(-180deg);}
`;

const moveBLTL = keyframes`
  0% {top: 100px; left: 0;}
  50% {top: 50px; left: 50px; transform: rotate(90deg); opacity: 0.9}
  100% {top: 0; left: 0; transform: rotate(180deg);}
`;

const moveTRBR = keyframes`
  0% {top: 0; left: 100px;}
  50% {top: 50px; left: 50px; transform: rotate(-90deg); opacity: 0.9}
  100% {top: 100px; left: 100px; transform: rotate(-180deg);}
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20vh 5% 0;
  background: white;
  width: 100%;
  min-height: 100vh;
  z-index: 50;

  ${props =>
    props.darkmode &&
    css`
      background: #2f3234;
    `}

  div {
    height: 140px;
    width: 140px;
    margin: 0 auto;
    position: relative;

    div {
      height: 40px;
      width: 40px;
      position: absolute;
      border-radius: 10px;
    }
  }

  p {
    margin-top: 35px;
    display: block;
    width: 100%;
    text-align: center;

    ${props =>
      props.darkmode &&
      css`
        color: white;
      `}
  }
`;

const BoxOne = styled.div`
  background: #6936de;
  z-index: 5;
  animation-name: ${moveTLBL};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;

  ${props =>
    props.darkmode &&
    css`
      background: black;
      opacity: 0.6;
    `}
`;

const BoxTwo = styled.div`
  background: #6936de;
  animation-name: ${moveBRTR};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;

  ${props =>
    props.darkmode &&
    css`
      background: black;
      opacity: 0.6;
    `}
`;

const BoxThree = styled.div`
  background: #7950e0;
  animation-name: ${moveBLTL};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;

  ${props =>
    props.darkmode &&
    css`
      background: black;
    `}
`;

const BoxFour = styled.div`
  background: #7950e0;
  animation-name: ${moveTRBR};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;

  ${props =>
    props.darkmode &&
    css`
      background: black;
    `}
`;

const SendingModal = props => {
  return (
    <Modal darkmode={props.darkmode}>
      <div>
        <BoxOne darkmode={props.darkmode} />
        <BoxTwo darkmode={props.darkmode} />
        <BoxThree darkmode={props.darkmode} />
        <BoxFour darkmode={props.darkmode} />
      </div>
      <p>Sending</p>
    </Modal>
  );
};

SendingModal.propTypes = {
  darkmode: PropTypes.bool
};

export default SendingModal;
