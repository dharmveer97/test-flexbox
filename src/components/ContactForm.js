import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

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

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then(data => {
        alert(data.result);
      })
      .catch(error => {
        console.log('fail', error);
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
            <figure className="image">
              <img src="/images/icon@2x.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-6">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  name="email"
                  className="input is-medium has-text-white"
                  value={email}
                  type="email"
                  placeholder="Your email"
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            {/* <div className="field">
              <div className="control">
                <input
                  name="phone"
                  className="input is-medium has-text-white"
                  type="tel"
                  value={phone}
                  placeholder="Your phone number"
                  onChange={this.handleChange}
                />
              </div>
            </div> */}
            <p className="subtitle is-4 has-text-centered">
              By submitting this form you agree to our contact T & C
            </p>
            <div className="has-text-centered">
              <button type="submit" className="button is-danger">
                DOWNLOAD
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
