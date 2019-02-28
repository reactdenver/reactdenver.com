import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/reactdenverlogo.png";

const HeaderWrapper = styled.div`
  background: #20232a;
  margin-bottom: 1.45rem;
  display: flex;
  align-items: center;
`;

const Headline = styled.div`
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;
  h1 {
    margin: 0;
    font-weight: 500;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-left: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  textdecoration: none;
`;

const Navigation = styled.nav`
  padding: 0 1.0875rem;
  display: flex;
  margin-left: auto;
`;

const NavigationItem = styled.li`
  list-style-type: none;
  padding: 1rem;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <Logo src={logo} alt="React Denver Logo" />
    <Headline>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Headline>
    <Navigation>
      {menuLinks.map(link => (
        <NavigationItem key={link.name}>
          <StyledLink to={link.link}>{link.name}</StyledLink>
        </NavigationItem>
      ))}
    </Navigation>
  </HeaderWrapper>
);

export default Header;
