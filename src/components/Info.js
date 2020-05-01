import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Section = styled.div`
  .card {
    background-color: #0a0a0a;
  }
`;

const Info = () => (
  <Wrapper className="hero is-large is-black">
    <section className="section ">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <h1 className="title is-5 has-text-centered is-spaced has-text-white">
              Title 4
            </h1>
            <p className="subtitle is-6 has-text-centered has-text-white">
              Title 5Title 5Title 5Title 5Title 5Title 5Title 5Title 5Title
              5Title 5Title 5Title 5
            </p>
          </div>
        </div>
      </div>
    </section>
    <Section className="">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-98x98">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Place"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5  has-text-white">John Smith</p>
                  <p className="subtitle is-6 has-text-white">
                    lorem pisem lorem pisem lorem pisem lorem pisem lorem pisem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-98x98">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Place"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5  has-text-white">John Smith</p>
                  <p className="subtitle is-6 has-text-white">
                    lorem pisem lorem pisem lorem pisem lorem pisem lorem pisem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns  is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-98x98">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Place"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5  has-text-white">John Smith</p>
                  <p className="subtitle is-6 has-text-white">
                    lorem pisem lorem pisem lorem pisem lorem pisem lorem pisem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Wrapper>
);

export default Info;
