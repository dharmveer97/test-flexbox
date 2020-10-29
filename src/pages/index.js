import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Event from '../components/Event';
import HomePageSection from '../components/HomePageSection';
import PartiesHero from '../components/PartiesHero';
import VenueSection from '../components/VenueSection';
import ContactForm from '../components/ContactForm';
import HireHero from '../components/HireHero';
import GreyScale from '../components/GreyScale';
import Venue from '../components/Venue';
import Info from '../components/Info';
import Slider from '../components/Slider';
import Spring from '../components/Spring';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Venue
          flex
          color
          text="Deckerdence is a superb and unusual venue for your special event that can be decorated and dressed to suit any theme."
          frameBgImage="/images/basic/back-one.jpg"
          alt="alt"
          frame="/images/basic/secondFrame.png"
        />
        <HomePageSection
          title="kunal sharma"
          description="Say yes to the perfect wedding venue. Have your special day at our event space in the Warwickshire countryside or take our vintage mobile venue to a location of your choosing. Whether you want to go traditional with silver service or festival-style with the best street food vendors, we can create your dream wedding"
          flex
          bgImg="/images/basic/local.jpg"
          button="lol"
          bannerImg="/images/basic/frame.png"
        />
        <VenueSection />
        <PartiesHero
          partybgImage="/images/photo@2x.png"
          title="Parties for all occasions"
        />
        <Event />
        <ContactForm />
        <HireHero
          partyBgImage="/images/photo@2x.png"
          title="Parties for all occasions"
        />
        <GreyScale src="/images/photo-6@2x.jpg" alt="alt" />
        <Info />
        <Slider />
        <Spring />
      </Layout>
    );
  }
}
