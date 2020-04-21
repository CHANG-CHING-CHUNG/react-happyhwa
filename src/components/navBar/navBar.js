import React from 'react';
import logo from '../../images/logo/黑皮驊ＬＯＧＯ.svg'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }


  sideBarOpen = () => {
      this.props.sideBarControl();
  }



  render() {
    return (
      <nav ref={this.nav} id="main-nav" className="navbar navbar-expand-sm top-fixed" role="navigation">
        <div className="container">
        <div id="nav-icon4" onClick={this.sideBarOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <img id="logo" alt="logo" src={logo}/>
          <div className="navBox">
            <div className="navbar-nav ">
              <NavLink exact to="/" activeClassName="active"  className="home nav-link nav-item">首頁</NavLink>
              <NavLink to="/menu"  activeClassName="active" className="menu nav-link nav-item">美味菜單</NavLink>
              <NavLink to="/delivery" activeClassName="active" className="delivery nav-link nav-item">訂餐外送</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;