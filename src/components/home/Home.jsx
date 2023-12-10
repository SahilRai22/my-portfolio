import React from 'react';
import './home.css';
import sahil_bw from '../../images/sahil_bw.png';

function Home() {
  const NameHeading = 'Sahil C Rai';
  const intro = 'Software Engineer based in London, UK';

  return (
    <div>
      <section className='home-container' id='home'>
        <div className='profile-container'>
          <img className='profile-pic' src={sahil_bw} alt='Profile headshot' />
          <div className='text-container'>
            <p className='name-heading'>{NameHeading}</p>
            <p className='intro'>{intro}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
