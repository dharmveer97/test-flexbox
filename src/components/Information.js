import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const Information = () => (
  <Section className="section">
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-3 col-md-6 bg-success"
          style="background-color:yellow;"
        >
          <div className="media">
            <img
              className="align-self-start mr-3"
              src="img_avatar1.png"
              alt="Generic"
              width="150"
              height="150"
            />
            <div className="media-body">
              <h5 className="mt-0">Top-aligned media</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra sociis natoque, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6" style="background-color:orange;">
          50%
        </div>
      </div>
    </div>
  </Section>
);

export default Information;
