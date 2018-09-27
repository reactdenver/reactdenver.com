import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import logo from '../img/reactdenverlogo.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="React Denver Meetup" />
    <Navbar />
    <div>
      <center>
        <figure className="image">
          <img src={logo} alt="Kaldi" style={{ width: '200px' }} />
        </figure>
        <h1 style={{ fontSize: '55px' }}>Welcome to React Denver Meetup!</h1>
        <p />
        <p>
          React Denver is focused on Facebook's ReactJS library and the
          technologies and architectures surrounding it.{' '}
        </p>
        <p>
          We welcome initiates, beginners, mid-level, and experts alike. This
          meetup is focused on sharing successes{' '}
        </p>
        <p>
          and failures in working with React and the backing stack. Come share
          stories, listen to talks, eat, drink, and be merry.
        </p>
        <p>Turing School of Software & Design</p>
        <p>1331 17th St 100 · Denver, CO</p>
        <p>We are on the corner of 17th and Market in the </p>
        <p> basement of the Guaranty Bank Building.</p>
      </center>
    </div>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
