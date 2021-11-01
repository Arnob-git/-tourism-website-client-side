import React from 'react';
import Extra from './Extra/Extra';
import FlexibilitySection from './FlexibilitySection/FlexibilitySection';
import Places from './Places/Places';
import ReasonForBooking from './ReasonForBooking/ReasonForBooking';
import Slide from './Slider/Slide';

const Home = () => {
    return (
        <div id="home">
            <Slide></Slide>
            <Places></Places>
            <FlexibilitySection></FlexibilitySection>
            <ReasonForBooking></ReasonForBooking>
            <Extra></Extra>
        </div>
    );
};

export default Home;