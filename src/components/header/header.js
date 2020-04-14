import React from 'react';
import logo from '../../images/logo/黑皮驊ＬＯＧＯ.svg'

function Header() {
  return (
    <header className="header">
      <div className="container text-center title">
        <img id="logo" alt="logo" src={logo}/>
      </div>
    </header>
  );
}

export default Header;