import React from 'react';
import { Link } from '@remix-run/react';
import ReactDenverLogo from '../assets/react_denver_logo.svg';
import { NodeOnDiskFile } from '@remix-run/node';

export default function NavBar() {
  const navbar_style = {
    borderBottom: '#DDDDDD 1px solid',
    height: '60px',
    paddingLeft: '5%',
    paddingRight: '5%',
    lineHeight: 'height'
  };

  const title_style = {
    fontSize: '1.8em',
    fontWeight: '400'
  };

  const list_style = {
    
    li: {
      display: 'inline',
    },
    ul: {
      listStyleType: 'none',
      margin:0,
      padding: 0,
      overflow: 'hidden',

    },
  }

  return(
    <div style={navbar_style} >
      <ul style={list_style.ul}>
        <li style={list_style.li}><img style={{maxHeight: '50px'}} src={ReactDenverLogo}/></li>
        <li><Link to='/'><div style={title_style}>React Denver</div></Link> </li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/talk'>Submit a talk</Link></li>
      </ul>
      
      

        {/* <Link to="/faq">
          FAQ
        </Link>
        <Link to="/code_of_conduct">
          Code of Conduct
        </Link> */} 
      
    </div>
  )
}