import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './sidenav.css';

const SideNavItmes = () => {

  const items = [
    {
      type: 'option',
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: 'option',
      icon: 'file-text-o',
      text: 'News',
      link: '/news'
    },
    {
      type: 'option',
      icon: 'play',
      text: 'Video',
      link: '/video'
    },
    {
      type: 'option',
      icon: 'sign-in',
      text: 'Sign In',
      link: '/sign-in'
    },
    {
      type: 'option',
      icon: 'sign-out',
      text: 'Sign Out',
      link: '/sign-out'
    }
  ]


  const showItems = () => {
    return items.map(( item, i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
          <FontAwesome name={item.icon} />
            {item.text}
        </Link>
        </div>

      )
    })
  }
  return(
    <div>{showItems()}</div>

  )
}

export default SideNavItmes;
