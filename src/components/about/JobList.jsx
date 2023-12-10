import React from 'react';
import './jobList.css';

const JobList = ({ jobs }) => {
  return (
    <div className='job-list'>
      {jobs.map((job, index) => (
        <div key={index} className='job-item'>
          <div className='job-info'>
            <p className='job-name'>{job.name}</p>
            <p className='year'>{job.year}</p>
          </div>
          <p className='location'>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
