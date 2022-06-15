import React from 'react'
import './Header.css';
import tinderLogo from './images/tinder-logo.png';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className='header__icon'/>
        </IconButton>
        <img
        className='header__logo' 
        src={tinderLogo}
        alt='tinder-logo'
        />
        <IconButton>
            <ForumIcon fontSize="large" className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header