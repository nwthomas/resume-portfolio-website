import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import validator from "email-validator";
import { useStateValue } from "react-conflux";
import { formContext } from "../../store/contexts";
import { HANDLE_FORM_CHANGE } from "../../store/reducers/formReducer";

const serverURL =
  process.env.SERVER_URL || "https://nathan-portfolio-backend.herokuapp.com/";

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

const ContactFormContainer = styled.div`
  margin: 50px auto 0;
  width: 100%;
  max-width: 600px;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 30px;
      height: 45px;
      border: 1px solid #2f3234;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      padding: 5px;
      font-size: 1.6rem;
      font-family: "Work Sans", sans-serif;
      background: #f7f7f7;

      ${props =>
        props.darkmode &&
        css`
          background: white;
        `}

      &:last-of-type {
        display: none !important;
      }
    }

    textarea {
      background: #f7f7f7;
      border: 1px solid #2f3234;
      width: 100%;
      padding: 5px;
      font-size: 1.6rem;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;

      ${props =>
        props.darkmode &&
        css`
          background: white;
        `}
    }

    div {
      display: flex;
      flex-direction: column;
      padding-bottom: 100px;

      @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
      }

      button {
        width: 100%;
        height: 45px;
        margin: 30px 0 0;
        border: 0;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
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
          animation: ${buttonHover} 0.2s forwards;

          ${props =>
            props.darkmode &&
            css`
              animation: ${buttonHoverDark} 0.2s forwards;
            `}
        }
      }
    }
  }
`;

const EmailValidation = styled.p`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 200;
  font-family: "Work Sans", sans-serif;
  color: #f24b6c;
  margin-left: 2%;
  line-height: 1;
`;

const ContactForm = props => {
  const [state, dispatch] = useStateValue(formContext);
  const {
    contactName,
    contactEmail,
    contactSubject,
    contactMessage,
    contact_me_by_fax_only
  } = state;
  const [isEmail, setIsEmail] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const validateEmail = emailValue => {
    // Validates email or sets value of hook isEmail to null if empty string
    if (!emailValue) {
      setIsEmail(null);
    } else {
      let validEmail = null;
      validEmail = validator.validate(emailValue);
      setIsEmail(validEmail);
    }
  };
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === "contactEmail") validateEmail(e.target.value);
    dispatch({
      type: HANDLE_FORM_CHANGE,
      payload: { name: e.target.name, value: e.target.value }
    });
  };
  const cancelForm = e => {
    props.history.push("/");
  };
  const sendEmail = e => {
    e.preventDefault();
    if (!isEmail) {
      return props.setInvalidEmailModal(true);
    } else {
      // Send email to server
      props.setEmailValues({
        ...props.emailValues,
        sending: true
      });
      const email = {
        name: contactName,
        email: contactEmail,
        subject: contactSubject,
        message: contactMessage,
        honeyField: contact_me_by_fax_only
      };
      axios
        .post(serverURL, email)
        .then(res => {
          window.scrollTo(0, 0);
          if (res.statusText === "OK") {
            props.setEmailValues({
              sending: false,
              success: true,
              displayModal: true,
              modalText: "Message sent successfully."
            });
          } else {
            props.setEmailValues({
              sending: false,
              success: false,
              displayModal: false,
              modalText: "Message did not go through."
            });
          }
        })
        .catch(err => {
          window.scrollTo(0, 0);
          props.setEmailValues({
            sending: false,
            success: false,
            displayModal: false,
            modalText: "Message did not go through."
          });
        });
    }
  };
  return (
    <ContactFormContainer darkmode={props.darkmode}>
      <h1>Get in Contact</h1>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          data-testid="nameInput"
          id="name"
          required
          autoComplete="off"
          type="text"
          name="contactName"
          value={contactName}
          onChange={handleChange}
        />
        <span>
          <label htmlFor="email">Email</label>
          {!isEmail && isEmail !== null && (
            <EmailValidation>(Invalid email)</EmailValidation>
          )}
        </span>
        <input
          data-testid="emailInput"
          id="email"
          required
          autoComplete="off"
          type="text"
          name="contactEmail"
          value={contactEmail}
          onChange={handleChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          data-testid="subjectInput"
          id="subject"
          required
          autoComplete="off"
          type="text"
          name="contactSubject"
          value={contactSubject}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          data-testid="contactInput"
          id="message"
          required
          autoComplete="off"
          rows="12"
          name="contactMessage"
          value={contactMessage}
          onChange={handleChange}
        />
        <input
          id="fax"
          type="text"
          name="contact_me_by_fax_only"
          value={contact_me_by_fax_only}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={cancelForm}>
            Cancel
          </button>
        </div>
      </form>
    </ContactFormContainer>
  );
};

ContactForm.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      contactName: PropTypes.string,
      contactEmail: PropTypes.string,
      contactSubject: PropTypes.string,
      contactMessage: PropTypes.string
    })
  ),
  setInvalidEmailModal: PropTypes.func
};

export default ContactForm;
