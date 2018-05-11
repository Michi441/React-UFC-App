import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItmes from './sidenav_item';

const SideNavigation = (props) => {
  return(
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        onShowNav={props.onShowNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
        >
        <SideNavItmes />
        Options
      </SideNav>
    </div>
  )
}

export default SideNavigation;
