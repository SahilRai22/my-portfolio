// NavLink is used for internal linking giving single page smooth navigation
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <nav className='nav-container'>
        <ul>
          <li className='nav-item'>
            <Link activeClass='active' smooth spy to='home'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link activeClass='active' smooth spy to='about'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link activeClass='active' smooth spy to='projects'>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}

export default Navbar;
