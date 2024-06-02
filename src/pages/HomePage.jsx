import React from 'react';
import Hero from '../components/hero.jsx'
import HomeCards from '../components/homeCards.jsx';
import JobListings from '../components/jobListings.jsx';
import ViewAllJobs from '../components/viewAllJobs.jsx';
const HomePage = () => {
    return (
        <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
        </>
    );
};

export default HomePage;