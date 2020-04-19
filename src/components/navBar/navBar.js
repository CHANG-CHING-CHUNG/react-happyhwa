import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      sideIconClicked:false,
      topFixed:"top-fixed",
      NavClass:"navbar navbar-expand-sm ",
      sideBarClass:"",
      sidebarStyle:{
        marginLeft:"0px"
      }
    }
    this.nav = React.createRef();
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset >= this.state.offsetTop) {
        this.setState({ NavClass: "navbar navbar-expand-sm top-fixed"})

      } else {
        this.setState({NavClass: "navbar navbar-expand-sm "});
      }
    }
    window.onload = () => {
      this.setState({ offsetTop: this.nav.current.offsetTop});
    }
    
  }

  sideBarControl = () => {
    if(this.state.sideIconClicked) {
      this.setState({sideIconClicked:false, sideBarClass:""})
      this.setState({sidebarStyle:{marginLeft:"0px"}})
      this.props.openSideBar();
    } else {
      this.setState({sideIconClicked:true, sideBarClass:"open"});
      this.setState({sidebarStyle:{marginLeft:"150px"}})
      this.props.openSideBar();
    }
  }



  render() {
    return (
      <nav ref={this.nav} id="main-nav" className={this.state.NavClass} role="navigation">
        <div id="nav-icon4" style={this.state.sidebarStyle} className={this.state.sideBarClass} onClick={this.sideBarControl}>
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