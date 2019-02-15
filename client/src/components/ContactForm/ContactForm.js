import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import lifecycle from "react-pure-lifecycle";

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
  max-width: 1200px;

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

    h4 {
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

const componentDidMount = props => {
  window.scrollTo(0, 0);
  // fetch("/");
};

const methods = {
  componentDidMount
};

const ContactForm = props => {
  const [value, setValue] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
    contact_me_by_fax_only: "" // Filters out spam
  });
  const handleChange = e => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  const clearForm = e => {
    e.preventDefault();
    setValue({
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      contact_me_by_fax_only: ""
    });
  };
  const sendEmail = e => {
    e.preventDefault();
    const email = {
      name: value.contactName,
      email: value.contactEmail,
      subject: value.contactSubject,
      message: value.contactMessage,
      honeyField: value.contact_me_by_fax_only
    };
    axios
      .post("https://nathan-portfolio-backend.herokuapp.com/", email)
      .then(res => {
        window.scrollTo(0, 0);
        if (res.statusText === "OK") {
          props.setEmailValues({
            success: true,
            displayModal: true,
            modalText: "Message sent successfully."
          });
        } else {
          props.setEmailValues({
            success: false,
            displayModal: false,
            modalText: "Message did not go through."
          });
        }
      })
      .catch(err => {
        window.scrollTo(0, 0);
        props.setEmailValues({
          success: false,
          displayModal: false,
          modalText: "Message did not go through."
        });
      });
  };
  return (
    <ContactFormContainer darkmode={props.darkmode}>
      <h1>Get in Contact</h1>
      <form onSubmit={sendEmail}>
        <h4>Name</h4>
        <input
          required
          autoComplete="off"
          type="text"
          name="contactName"
          placeholder="Name"
          value={value.contactName}
          onChange={handleChange}
        />
        <h4>Email</h4>
        <input
          required
          autoComplete="off"
          type="text"
          name="contactEmail"
          placeholder="Email"
          value={value.contactEmail}
          onChange={handleChange}
        />
        <h4>Subject</h4>
        <input
          required
          autoComplete="off"
          type="text"
          name="contactSubject"
          placeholder="Subject"
          value={value.contactSubject}
          onChange={handleChange}
        />
        <h4>Message</h4>
        <textarea
          required
          autoComplete="off"
          rows="12"
          name="contactMessage"
          value={value.contactMessage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact_me_by_fax_only"
          value={value.faxField}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={clearForm}>
            Clear
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
  )
};

export default lifecycle(methods)(ContactForm);
