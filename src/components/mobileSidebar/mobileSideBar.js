import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileSideBar({ sideBarStyle }) {
  return (
    <div className="mobile-sidebar" style={ sideBarStyle }>
      <NavLink exact to="/" activeClassName="active"  className="home sidebar nav-link nav-item" >首頁</NavLink>
      <NavLink to="/menu"  activeClassName="active"  className="menu sidebar nav-link nav-item">美味菜單</NavLink>
      <NavLink to="/delivery" activeClassName="active"  className="delivery sidebar nav-link nav-item">訂餐外送</NavLink>
    </div>
  );
}

export default MobileSideBar;