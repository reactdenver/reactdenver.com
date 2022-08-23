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
    fontWeight: '400',
    color: 'black'
  };

  const list_style = {
    
    li_left: {
      display: 'inline',
      float: 'left',
    },
    
    li_right: {
      display: 'inline',
      float: 'right',
      alightItems: 'center'
    },
    ul: {
      display: 'flex',
      listStyleType: 'none',
      margin:0,
      padding: 0,
      alignItems: 'center'
    },
    link: {
      display: 'block',
      width: '100px',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#666666',
    },
    link_title: {
      width: '200px',
      textDecoration: 'none'
    }
  }

  return(
    <div style={navbar_style} >
      <ul style={list_style.ul}>
        <li style={list_style.li_left}><Link style={list_style.link} to='/'><img style={{maxHeight: '50px'}} src={ReactDenverLogo}/></Link></li>
        <li style={list_style.li_left}><Link style={list_style.link, list_style.link_title} to='/'><div style={title_style}>React Denver</div></Link> </li>
        <li style={list_style.li_right}><Link style={list_style.link} to='/events'>Events</Link></li>
        <li style={list_style.li_right}><Link style={list_style.link} to='/talk'>Submit a talk</Link></li>
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