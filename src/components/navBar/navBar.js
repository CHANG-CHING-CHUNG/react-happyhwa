import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      onScroll:false,
      topFixed:"top-fixed"
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({ onScroll:true });
    }
  }



  render() {
    let className = "navbar navbar-expand-sm ";
    if(this.state.onScroll && window.pageYOffset > 319.933) {
      className += this.state.topFixed;
    }
    return (
        <nav id="main-nav" className={className} role="navigation">
        <div id="nav-icon4" className="">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container justify-content-around">
          <div className="navbar-nav ">
            <NavLink exact to="/" activeClassName="active"  className="home nav-link nav-item">首頁</NavLink>
            <NavLink to="/menu"  activeClassName="active" className="menu nav-link nav-item">美味菜單</NavLink>
            <NavLink to="/delivery" activeClassName="active" className="delivery nav-link nav-item">訂餐外送</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;