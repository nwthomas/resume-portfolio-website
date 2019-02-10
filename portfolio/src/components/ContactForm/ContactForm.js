import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ContactFormContainer = styled.div`
  margin: 50px 5%;
  width: 90%;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  form {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 15px;
    }

    input {
      margin-bottom: 15px;
      height: 40px;
      border: 1px solid #2f3234;
      border-radius: 3px;
      padding: 5px;
      font-size: 1.4rem;
      font-family: "Work Sans", sans-serif;
    }
  }
`;

const ContactForm = props => {
  return (
    <ContactFormContainer darkmode={props.darkmode}>
      <form>
        <p>Your Name</p>
        <input required type="text" name="contactName" placeholder="Name" />
        <p>Your Email</p>
        <input required type="text" name="contactEmail" placeholder="Email" />
        <p>Subject</p>
        <input
          required
          type="text"
          name="contactSubject"
          placeholder="Subject"
        />
        <p>Your Message</p>
        <textarea required rows="10" name="contactSubject" />
        <button type="submit">SUBMIT</button>
        <button type="button">CLEAR</button>
      </form>
    </ContactFormContainer>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
