import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = (props) => {
  return (
    <header>
      <NavBar {...props} />
    </header>
  )
}

export default Header;