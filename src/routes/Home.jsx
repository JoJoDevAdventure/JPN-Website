import React from 'react'
import About from '../components/About'
import ContactWithImage from '../components/ContactWithImage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Props from '../components/Props'
import Service from '../components/Service'
import Team from '../components/Team'

const Home = () => {
  return (
    <div className='h-[150vh]'>
        <NavBar/>
        <Header/>
        <About/>
        <Props/>
        <Service/>
        <Team/>
        <ContactWithImage/>
        <Footer/>
    </div>    
  )
}

export default Home