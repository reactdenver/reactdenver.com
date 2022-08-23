import React from 'react';
import { Link } from '@remix-run/react';

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

  return(
    <div style={navbar_style} >
      <ul>
        <li><Link to='/'><div style={title_style}>React Denver</div></Link> </li>
        <li><Link to='/events'>Events</Link></li>
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