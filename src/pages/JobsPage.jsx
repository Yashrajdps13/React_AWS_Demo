import React from 'react';
import PropTypes from 'prop-types';
import JobListings from '../components/jobListings';
const JobsPage = () => {
    return (
        <section className='bg-blue-50 px-4 py-6'>
            <JobListings />
        </section>
    );
};

JobsPage.propTypes = {
    // Define your prop types here
};

export default JobsPage;