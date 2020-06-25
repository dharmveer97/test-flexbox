/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem 3rem 1.5rem;
  .navbar {
    background-color: transparent;
  }
  .logo {
    max-height: 38px !important;
    height: auto;
    margin-left: -0.5rem;
    @media screen and (max-width: 600px) {
      max-height: 4rem !important;
    }
  }
  .navbar-end {
    margin-top: 1rem;
  }
  .navbar-item {
    font-family: ${props => props.theme.secondaryFontFamily} !important;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 1rem;
    height: 3rem;
    color: ${props => props.theme.textColorLite};
    :hover {
      color: ${props => props.theme.mainBrandColor};
      background: transparent;
    }
    :focus {
      background: transparent;
    }
  }
  .navbar-burger {
    background-color: ${props => props.theme.mainBrandColor};
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .is-flex {
    justify-content: flex-end;
  }
  .email {
    margin: 0 0 0 1.5rem;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  className="logo"
                  src="http://softlab.wgl-demo.net/wp-content/uploads/2019/02/logo_dark.png"
                  alt="site logo"
                />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive ? 'navbar-burger is-active' : 'navbar-burger'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/eventsupport" className="navbar-item">
                  Event Support
                </Link>
                <Link to="/vehicle" className="navbar-item">
                  Vehicle Branding
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/case-study" className="navbar-item">
                  case studies
                </Link>
                <Link to="/news" className="navbar-item">
                  News
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
                {/* <Link to="/" className="navbar-item">
                  <span className="icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
              </Link> */}
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
