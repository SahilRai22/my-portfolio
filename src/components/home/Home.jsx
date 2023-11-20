import React from 'react';
import './home.css';
import sahil_bw from '../../images/sahil_bw.png';

function Home() {
  const NameHeading = 'Sahil C Rai';
  const intro = 'Software Engineer based in London, UK';

  return (
    <div>
      <section className='home-container' id='home'>
        <div>
          <img class='profile-pic' src={sahil_bw} alt='Profile headshot' />{' '}
          <h2 className='name-heading'>{NameHeading}</h2>
          <p className='intro'>{intro}</p>{' '}
        </div>
      </section>
    </div>
  );
}

export default Home;
