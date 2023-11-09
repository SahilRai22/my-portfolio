// NavLink is used for internal linking giving single page smooth navigation
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div class="title-container">
        <h1 class="title">Sahil C Rai.</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li className="nav-item">
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div></div>
      <section className="section" id="home">
        Home
      </section>
      <section className="section" id="about">
        About
      </section>
      <section className="section" id="projects">
        Projects
      </section>
    </header>
  );
}

export default Navbar;
