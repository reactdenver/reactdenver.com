import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import largeFavicon from '../img/favicon-32x32.png';
import smallFavicon from '../img/favicon-16x16.png';
import appleTouchIcon from '../img/apple-touch-icon.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="React Denver Meetup"
      link={[
        { rel: 'icon', type: 'image/png', href: `${largeFavicon}` },
        { rel: 'icon', type: 'image/png', href: `${smallFavicon}` },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${appleTouchIcon}` }
      ]}
    />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
