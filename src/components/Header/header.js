import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SideNav from './sidenav';

import FontAwesome from 'react-fontawesome';

const Header = (props) => {

  const navBar = () => (
    <div className="bars">
      <FontAwesome name="bars"
        onClick={props.onShowNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
       />
    </div>
  )

  const logo = () => {
    return(
      <Link to="/" className="logo">
        <img src="/images/nba_logo.png" alt="nba logo"/>
      </Link>
    )
  }


  return(
    <header className="header">
      <SideNav {...props} />
      <div className="headerOpt">

        {navBar()}
        {logo()}


      </div>

    </header>
  )
}

export default Header;
