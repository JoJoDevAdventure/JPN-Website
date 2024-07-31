import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import ContactWithImage from '../components/ContactWithImage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Props from '../components/Props';
import Service from '../components/Service';

const Home = () => {
  return (
    <div className='h-[150vh]'>
      <Helmet>
        <title>JPN - Home Page</title>
        <meta name="description" content="We provide expert services to help companies from Japan move and establish their business in the US. Bridging Japan and the US with professional solutions." />
        <meta name="keywords" content="Japan, US, business, services, relocation, international business, market entry" />
        <meta name="author" content="JPN - Entertainment" />
      </Helmet>
      <NavBar />
      <Header />
      <About />
      <Props />
      <Service />
      <ContactWithImage />
      <Footer />
    </div>
  );
};

export default Home;