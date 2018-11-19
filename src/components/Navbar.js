import React from 'react';
import Link from 'gatsby-link';
import meetup from '../img/meetup.svg';
import logo from '../img/coloradoflag2.png';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBurgerExpanded: false
    };

    this.handleBurger = this.handleBurger.bind(this);
  }

  handleBurger() {
    this.setState({ isBurgerExpanded: !this.state.isBurgerExpanded })
  }

  render() {
    const { isBurgerExpanded } = this.state;

    const menuStyles = {
      position: 'absolute',
      zIndex: 1,
      width: '100%'
    };

    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '75px' }} />
              </figure>
            </Link>
            <span
              className={`navbar-burger burger ${isBurgerExpanded ? 'is-active' : ''}`}
              data-target="navMenu"
              onClick={this.handleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${isBurgerExpanded ? 'is-active' : ''}`}
            style={isBurgerExpanded ? menuStyles : {}}
          >
            <div className="navbar-end">
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
              <Link className="navbar-item" to="/reactjobs">
                React Jobs
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a className="navbar-item" href="https://www.meetup.com/ReactDenver/" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <img src={meetup} alt="Meetup" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
