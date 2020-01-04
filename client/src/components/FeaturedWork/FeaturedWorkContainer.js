import React from "react";
import styled, { css } from "styled-components";
import instaSample from "../../images/instagram-macbook.png";
import tipprSample from "../../images/tippr-macbook.png";
import huddleSample from "../../images/huddle-landing-page.png";
import weightLiftingSample from "../../images/weight-lifting-journal-app.png";
import confluxSample from "../../images/conflux-logo.png";
import stampdSample from "../../images/stampd-macbook.png";
import PropTypes from "prop-types";

const FeaturedWorkContainerDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 60px;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  p {
    display: flex;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 1200px) {
      justify-content: space-between;
    }

    div {
      width: 100%;
      margin: 40px 0 0;

      @media (min-width: 500px) {
        max-width: 800px;
      }

      @media (min-width: 1200px) {
        max-width: 500px;
      }

      div {
        padding: 20px 0;
        width: 100%;
        opacity: 1;
        transition: 0.2s;
        display: flex;
        align-items: center;
        flex-direction: column;

        &:hover {
          opacity: 0.8;
          padding: 16px 0 24px;
        }

        h4 {
          width: 100%;
          text-align: center;
          display: block;
          letter-spacing: 4px;
          margin-top: 20px;
        }
      }
    }
  }
`;

const FeaturedWorkContainer = props => {
  return (
    <FeaturedWorkContainerDiv darkmode={props.darkmode}>
      <p id="featured-work">Featured Projects</p>
      <div>
        <div>
          <div>
            <a href="https://github.com/labs14-stampd">
              <img
                data-testid="stampdPicture"
                src={stampdSample}
                alt="Stampd DApp sample"
              />
            </a>
            <h4>Stampd Blockchain Credentialing</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/dustinmyers/react-conflux">
              <img
                data-testid="confluxPicture"
                src={confluxSample}
                alt="Conflux state management sample"
              />
            </a>
            <h4>Conflux State Management</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/weight-lifting-journal-bw-team/back-end-nathan-thomas">
              <img
                data-testid="weightLiftingJournalPicture"
                src={weightLiftingSample}
                alt="weight lifting journal sample"
              />
            </a>
            <h4>Weight Lifting Journal</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/tippr">
              <img
                data-testid="tipprPicture"
                src={tipprSample}
                alt="tippr portfolio sample"
              />
            </a>
            <h4>tippr payment app</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/instagram-clone">
              <img
                data-testid="instagramPicture"
                src={instaSample}
                alt="Instagram portfolio sample"
              />
            </a>
            <h4>Instagram Clone</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/huddle-landing-page">
              <img
                data-testid="huddlePicture"
                src={huddleSample}
                alt="Huddle portfolio sample"
              />
            </a>
            <h4>Huddle Landing Page</h4>
          </div>
        </div>
      </div>
    </FeaturedWorkContainerDiv>
  );
};

FeaturedWorkContainer.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default FeaturedWorkContainer;
