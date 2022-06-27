import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'; //후버효과
import TinderLogo from './tinder_logo.png';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
      </IconButton>
      <img
        className='header__logo'
        src={TinderLogo}
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  )
}

export default Header