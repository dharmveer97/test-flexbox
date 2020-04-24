import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImg});
  background-size: 100% 100% !important;
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
    @media screen and (max-width: 768px) {
      padding-top: 2rem;
    }
  }
  .hero {
    /* height: 35rem; */
    background-image: url(${props => props.bannerImg});
    background-repeat: no-repeat;
    /* margin-top: 4rem !important; */
    /* margin-top: 4rem !important;
    margin-bottom: 4rem !important; */
    background-size: 100% 100% !important;
    /* min-height:30rem; */
    display: grid !important;
    align-content: center !important;
    /* padding: 1rem 7rem !important; */
    /* background-position: center !important;
    display: grid !important;
    align-content: center !important;
    padding: 1rem 7rem !important;
    @media screen and (max-width: 600px) {
      margin-top: 0;
      margin-bottom: 0;
      padding: 1rem 2rem;
      background-size: cover;
    } */
  }

  /* .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
    line-height: 1.6;
  }
  h1 {
    padding-top: 1rem;
  } */
`;

const HomePageSection = ({
  title,
  description,
  flex,
  bgImg,
  button,
  bannerImg,
}) => (
  <Section flex={flex} bgImg={bgImg} bannerImg={bannerImg}>
    <div className="section is-block">
      <div className="columns">
        <div className="column is-7">
          <section className="hero is-medium">
            <div className="hero-body">
              {title && (
                <h1 className="title is-3 has-text-white has-text-weight-normal	is-spaced">
                  {title}
                </h1>
              )}
              {description && (
                <p className="subtitle is-5 has-text-white has-text-weight-normal">
                  {description}
                </p>
              )}
              {button && (
                <button
                  className="button is-link is-medium"
                  type="button"
                  alt="Learn More Button"
                  haswidth="50%"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomePageSection;
