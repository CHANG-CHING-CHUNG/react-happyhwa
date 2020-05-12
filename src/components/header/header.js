import React from 'react';
import logo from '../../images/logo/黑皮驊ＬＯＧＯ.svg'
import "./header.css";


function Header() {
  return (
    <header id="header">
      <div id="navbar" className="header-navbar">
        <img src={logo} alt=""/>
        <nav>
          <ul>
            <li><a href="#home">首頁</a></li>
            <li><a href="#icons">招牌菜</a></li>
            <li><a href="#news">最新消息</a></li>
            <li><a href="#menu">菜單</a></li>
            <li><a href="#delivery">外送</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-banner">
        <div className="header-banner-content">
          <h1>色、香、味具全</h1>
          <p>前所未有的美食饗宴</p>
        </div> 
      </div>
    </header>
  )
}

export default Header;