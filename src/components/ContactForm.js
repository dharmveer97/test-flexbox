import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/hire/hireFormBg.png');
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  .subtitle {
    color: ${props => props.theme.lightShades} !important;
  }
`;

const ContactForm = () => (
  <Section className="section is-block is-relative">
    <div className="container">
      <figure className=" image is-square">
        <img src="/images/icon@2x.png" alt="" />
      </figure>
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <div className="field">
          <div className="control">
            <input
              className="input is-medium has-text-white "
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium has-text-white "
              type="number"
              placeholder="Phone Number"
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
