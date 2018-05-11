import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { CURRENT_YEAR } from '../../config.js';



const Footer = () => {
  return(
    <div className="footer">
      <Link to="/" className="logo">
        <img src="/images/ufc.png" alt="nba logo"/>
      </Link>

      <div className="right">
        @UFC { CURRENT_YEAR } All Rights Reserved.
      </div>

    </div>
  )
}

export default Footer;
