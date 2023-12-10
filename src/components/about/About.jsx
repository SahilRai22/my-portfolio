import React from 'react';
import './about.css';

import JobList from './JobList';
function About() {
  const about =
    'Hi I am Sahil, currently working as a software engineer on backend services using Rust.';
  const hobbies =
    'I am also a sports enthusiast particularly in football, basketball, and bouldering.';

  // let icons = [<img src alt='UoN logo'></img>];

  const jobs = [
    {
      name: 'Graduate Software Engineer',
      location: 'Ballys Interactive, London UK',

      year: 2023 + ' - present',
    },
    {
      name: 'Group Team lead',
      location: 'World Line, Nottingham UK',
      year: 2021 + ' - ' + 2022,
    },
    {
      name: 'BSc Computer Science',
      location: 'University of Nottingham, UK',
      year: 2020 + ' - ' + 2023,
    },
  ];

  return (
    <>
      <section className='about-container ' id='about'>
        <p className='title'>About</p>
        <p className='paragraph-container '>{about}</p>
        <p className='paragraph-container '>{hobbies}</p>
        <JobList jobs={jobs} />
      </section>
    </>
  );
}

export default About;
