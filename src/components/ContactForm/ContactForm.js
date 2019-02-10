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
      /* border-radius: 3px; */

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
        height: 50px;
        margin-top: 30px;
        border: 1px solid #b6465f;
        border-radius: 8px;
        background: #b6465f;
        color: white;
        font-size: 1.6rem;

        &:hover {
          background: white;
          color: #b6465f;
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
        <textarea required rows="10" name="contactSubject" />
        <div>
          <button type="submit">SUBMIT</button>
          <button type="button">CLEAR</button>
        </div>
      </form>
    </ContactFormContainer>
  );
};

ContactForm.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default ContactForm;
