import React from 'react';
import { NavLink } from 'react-router-dom';

class MobileSideBar extends React.Component {

  sideBarClose = () => {
    this.props.sideBarControl();
  }

  render() {
    const { sideBarStyle } = this.props
    return (
      <div className="mobile-sidebar" style={ sideBarStyle }>
        <div className="closeSideBar" onClick={this.sideBarClose}>×</div>
        <NavLink exact to="/" activeClassName="active"  className="home sidebar nav-link nav-item" >首頁</NavLink>
        <NavLink to="/menu"  activeClassName="active"  className="menu sidebar nav-link nav-item">美味菜單</NavLink>
        <NavLink to="/delivery" activeClassName="active"  className="delivery sidebar nav-link nav-item">訂餐外送</NavLink>
      </div>
    );
  }
}

export default MobileSideBar;