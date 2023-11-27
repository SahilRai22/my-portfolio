import React from 'react';
import './about.css';
import TimeLine from './Timeline';

function About() {
  const description =
    "I grew up in London and acquired my bachelor’s degree in computer science from the University Nottingham. I am currently working through my Graduate Software Engineering rotation at Bally's Interactive which is a leading iGaming platform world-wide. Alongside my tech interests I am a huge sports enthusiast loving the culture of football, basketball and bouldering.";

  // let icons = [<img src alt='UoN logo'></img>];

  return (
    <>
      <div>
        <section className='about-container ' id='about'>
          {' '}
          <h2 className='title'>About me</h2>
          <p className='paragraph-container '>{description}</p>
          <TimeLine />
        </section>
      </div>
    </>
  );
}

export default About;
