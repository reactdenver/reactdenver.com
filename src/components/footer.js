import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/reactdenverlogo.png";
import { Meetup } from 'styled-icons/fa-brands/Meetup'
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { Github } from 'styled-icons/fa-brands/Github';
import { Youtube } from 'styled-icons/fa-brands/Youtube';


const StyledLink = styled.a`
  background-color: transparent;
  margin-left: 2vh;
  margin-right: 2vh;
`

const FooterWrapper = styled.div`
  margin-top: 2vh;
  position: fixed;
  justify-content: center;
  height: 8vh;
  width: 100%;
  background: #20232a;
  display: flex;
  align-items: center;
  bottom: 0;
  `;

const Footer = () => (
    <FooterWrapper>

        <StyledLink href="https://www.meetup.com/ReactDenver/">
            <Meetup size="30" color='white' />
        </StyledLink>

        <StyledLink href="https://twitter.com/reactdenver">
            <Twitter size="30" color='white' />
        </StyledLink>

        <StyledLink href="https://github.com/reactdenver/reactdenver.com">
            <Github size="30" color='white' />
        </StyledLink>

        <StyledLink href="https://www.youtube.com/channel/UC0l91ig1FOXYaZonnr9m1lw">
            <Youtube size="30" color='white' />
        </StyledLink>

    </FooterWrapper >
);

export default Footer;