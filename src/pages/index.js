import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ReactSlickDemo from '../components/ReactSlickDemo';
import Event from '../components/Event';
import CalendarSlider from '../components/CalendarSlider';
import Venue from '../components/Venue';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <ReactSlickDemo />
        <Event />
        <CalendarSlider />
        <Venue />
      </Layout>
    );
  }
}
