import React from 'react';
import Link from 'gatsby-link';

import meetup from '../img/meetup.svg';
import logo from '../img/coloradoflag2.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '75px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
      <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/pastevents">
          Past Events
        </Link>
        <Link className="navbar-item" to="/codeofconduct">
          Code of Conduct
        </Link>
        <Link className="navbar-item" to="/sponsorship">
          Sponsorship
        </Link>
        <Link className="navbar-item" to="/faq">
          FAQ
        </Link>
        <Link className="navbar-item" to="/newsletter">
          Newsletter
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://www.meetup.com/ReactDenver/" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={meetup} alt="Meetup" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
