import React from 'react'
// import TopHeader from './TopHeader'
import Header from './Header'
import Slider from './Slider'
import "../css/home.css";
import WhyChoose from './WhyChoose';
import WhyChooseSIPVS from './WhyChooseSIPVS';
import OurCourses from './OurCourses';
import EnrollSection from './EnrollSection';
import UpcomingEvents from './UpcomingEvents';
import Gallery from './Gallery';
import CounterSection from './CounterSection';
import TestimonialSection from './TestimonialSection';  
import RegisterSection from './RegisterSection';
import OurRecruiters from './OurRecruiters';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Home = () => {

  
  return (
        <>
        {/* <TopHeader />  */}
        <Header />
        <Slider />
        <WhyChoose />
        <WhyChooseSIPVS />
        <OurCourses />
        <EnrollSection />
        <UpcomingEvents />
        <Gallery />
        <CounterSection />
        <TestimonialSection />
        <RegisterSection />
        <OurRecruiters />
        <Newsletter />
        <Footer />
        </>
  )
}

export default Home