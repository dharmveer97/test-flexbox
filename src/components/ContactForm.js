import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/hireFormBg.png');
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  .subtitle {
    color: ${props => props.theme.lightShades} !important;
  }
  .input {
    border: 1px solid ${props => props.theme.borderColor};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    ::placeholder {
      color: ${props => props.theme.borderColor} !important ;
    }
  }
`;

const ContactForm = () => (
  <Section className="section is-block is-relative">
    <div className="container">
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-7">
              <figure className="image">
                <img src="/images/icon@2x.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <div className="field">
          <div className="control">
            <input
              className="input is-medium has-text-whites"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="phone"
              className="input is-medium has-text-white"
              type="tel"
              placeholder="Your phone number"
            />
          </div>
        </div>

        <p className="subtitle is-4 has-text-centered">
          By submitting this form you agree to our contact T & C
        </p>
        <div className="has-text-centered">
          <button type="button" className="button is-danger">
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default ContactForm;
