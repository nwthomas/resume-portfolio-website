import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const buttonHover = keyframes`
  0% {

  }
  100% {

  }
`;

const ContactFormContainer = styled.div`
  margin: 50px auto 0;
  width: 100%;
  max-width: 1200px;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  form {
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 30px;
      height: 45px;
      border: 1px solid #2f3234;
      padding: 5px;
      font-size: 1.4rem;
      font-family: "Work Sans", sans-serif;
      background: #f7f7f7;

      ${props =>
        props.darkmode &&
        css`
          background: white;
        `}
    }

    textarea {
      background: #f7f7f7;
      border: 1px solid #2f3234;
      width: 100%;
      padding: 5px;
      font-size: 1.4rem;

      ${props =>
        props.darkmode &&
        css`
          background: white;
        `}
    }

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 120px;

      @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
      }

      button {
        width: 100%;
        height: 45px;
        margin: 30px 0 0;
        border: 0;
        border-radius: 8px;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        background: #ad91ed;
        /* #b6465f */
        color: white;
        font-size: 1.6rem;
        text-transform: capitalize;
        cursor: pointer;

        @media (min-width: 500px) {
          width: 47%;
        }

        ${props =>
          props.darkmode &&
          css`
            background: black;
          `}

        &:hover {
          opacity: 0.8;

          ${props =>
            props.darkmode &&
            css`
              background: #030303;
            `}
        }
      }
    }
  }
`;

const ContactForm = props => {
  (function onLoadSetTop() {
    window.scrollTo(0, 0);
  })();
  return (
    <ContactFormContainer darkmode={props.darkmode}>
      <form>
        <h4>Your Name</h4>
        <input required type="text" name="contactName" placeholder="Name" />
        <h4>Your Email</h4>
        <input required type="text" name="contactEmail" placeholder="Email" />
        <h4>Subject</h4>
        <input
          required
          type="text"
          name="contactSubject"
          placeholder="Subject"
        />
        <h4>Your Message</h4>
        <textarea required rows="12" name="contactSubject" />
        <div>
          <button type="submit">Submit</button>
          <button type="button">Clear</button>
        </div>
      </form>
    </ContactFormContainer>
  );
};

ContactForm.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default ContactForm;
