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
    input:valid {
      background-color: #00ff7f;
    }
    border: 1px solid ${props => props.theme.borderColor};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    ::placeholder {
      color: ${props => props.theme.borderColor} !important ;
    }
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', phone: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          email: '',
          phone: '',
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, phone } = this.state;
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
            <form
              data-netlify="true"
              name="contact"
              onSubmit={this.handleSubmit}
            >
              <div className="field">
                <div className="control">
                  <input
                    name="email"
                    className="input is-medium has-text-white"
                    value={email}
                    type="email"
                    placeholder="Your email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
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
              </div>
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
  }
}

export default ContactForm;
