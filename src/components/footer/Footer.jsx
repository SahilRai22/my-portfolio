import React from 'react';
import './footer.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const message = 'Thank you for stopping by, you can connect with me on:';

  return (
    <footer className='footer'>
      <p>{message}</p>
      <div className='social-icons'>
        <a
          href='https://github.com/SahilRai22'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/sahil-rai-bba761179/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='icon' />
        </a>
      </div>
      <p>&copy;2023 Sahil C Rai</p>
    </footer>
  );
}

export default Footer;
