import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav id="main-nav" className="navbar navbar-expand-sm" role="navigation">
    <div id="nav-icon4" className="">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="container justify-content-around">
      <div className="navbar-nav ">
        <Link to="/"  className="home nav-link nav-item active">首頁</Link>
        <Link to="/menu" className="menu nav-link nav-item">美味菜單</Link>
        <Link to="/delivery" className="delivery nav-link nav-item">訂餐外送</Link>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;