import React from 'react';
import ReviewShow from '../../Dashboard/ReviewShow/ReviewShow';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurService from '../OurService/OurService';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurService></OurService>
            <ReviewShow></ReviewShow>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;