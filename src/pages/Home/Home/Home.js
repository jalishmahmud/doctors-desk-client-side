import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoseUs></WhyChoseUs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;