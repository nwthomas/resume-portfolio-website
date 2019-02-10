import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

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
      height: 40px;
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
      justify-content: space-between;

      button {
        width: 47%;
        height: 45px;
        margin: 30px 0 120px;
        border: 0;
        border-radius: 8px;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        background: #ad91ed;
        /* #b6465f */
        color: white;
        font-size: 1.6rem;
        transition: 0.2s;
        text-transform: capitalize;

        ${props =>
          props.darkmode &&
          css`
            background: #c3677c;
          `}

        &:hover {
          opacity: 0.8;
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
