import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ReactSlickDemo from '../components/ReactSlickDemo';
import Event from '../components/Event';
import CalendarSlider from '../components/CalendarSlider';
import Gallery from '../components/Gallery';
import PartiesHero from '../components/PartiesHero';
import HomeHero from '../components/HomeHero';
import VenueSection from '../components/VenueSection';
import ContactForm from '../components/ContactForm';
import HireHero from '../components/HireHero';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero bgImage="/images/home/back.jpg" />
        <ReactSlickDemo />
        <Event />
        <CalendarSlider />
        <Gallery />
        <PartiesHero
          partybgImage="/images/photo@2x.png"
          title="Parties for all occasions"
        />
        <VenueSection />
        <ContactForm />
        <HireHero
          partyBgImage="/images/photo@2x.png"
          title="Parties for all occasions"
        />
      </Layout>
    );
  }
}
