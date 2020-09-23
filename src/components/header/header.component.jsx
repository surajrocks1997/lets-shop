import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/shop.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
      <Link className='option' to='/' >
          HOME
        </Link>
        <Link className='option' to='/shop' >
          SHOP
        </Link>
        <Link className='option' to='/contact' >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;