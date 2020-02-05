import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/two.png');
  background-size: cover;
`;

const MainContainer = styled.div`
  background-image: url(/images/one.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .section {
    padding: 7rem 1.5rem !important;
  }
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <figure className="image">
        <img src="/images/bunt.png" alt="" />
      </figure>
      <div className="columns">
        <MainContainer className="column is-7">
          <section className="section  is-medium">
            <div className="container">
              <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced top-text">
                WEDDINGS
              </h1>
              <h1 className="subtitle is-5 has-text-white has-text-weight-normal top-text">
                Say yes to the perfect wedding venue. Have your special day at
                our event space in the Warwickshire countryside or take our
                vintage mobile venue to a location of your choosing. Whether you
                want to go traditional with silver service or festival-style
                with the best street food vendors, we can create your dream
                wedding.
              </h1>
            </div>
          </section>
        </MainContainer>

        <div className="column is-1" />
        <div className="column is-4">
          <p>sds</p>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
