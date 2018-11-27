import React from 'react';
import Link from 'gatsby-link';
import meetup from '../img/meetup.svg';
import logo from '../img/react-denver.svg';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBurgerExpanded: false
    };

    this.handleBurger = this.handleBurger.bind(this);
  }

  handleBurger() {
    this.setState(prevState => {
      return { isBurgerExpanded: !prevState.isBurgerExpanded };
    })
  };

  render() {
    const { isBurgerExpanded } = this.state;

    const menuStyles = {
      position: 'absolute',
      zIndex: 1,
      width: '100%'
    };

    const navStyles = {
      marginBottom: '1em'
    }

    return (
      <nav className="navbar is-transparent" style={navStyles}>
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="React Denver" width="50px" height="50px" />
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
              <Link className="navbar-item" to="/pastevents" onClick={this.handleBurger}>
                Past Events
              </Link>
              <Link className="navbar-item" to="/codeofconduct" onClick={this.handleBurger}>
                Code of Conduct
              </Link>
              <Link className="navbar-item" to="/sponsorship" onClick={this.handleBurger}>
                Sponsorship
              </Link>
              <Link className="navbar-item" to="/faq" onClick={this.handleBurger}>
                FAQ
              </Link>
              <Link className="navbar-item" to="/newsletter" onClick={this.handleBurger}>
                Newsletter
              </Link>
              <Link className="navbar-item" to="/blog" onClick={this.handleBurger}>
                Blog
              </Link>
              <Link className="navbar-item" to="/reactjobs" onClick={this.handleBurger}>
                React Jobs
              </Link>
              <Link className="navbar-item" to="/contact" onClick={this.handleBurger}>
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://www.meetup.com/ReactDenver/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.handleBurger}
              >
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
