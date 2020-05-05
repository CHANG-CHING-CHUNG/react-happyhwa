import React from 'react';
import { NavLink } from 'react-router-dom';

class Login  extends React.Component {


  render() {
    return (
      <div id="login-box">
        <div className="navBox">
            <div className="navbar-nav ">
              <NavLink exact to="/" activeClassName="active"  className="home nav-link nav-item">首頁</NavLink>
              <NavLink to="/menu"  activeClassName="active" className="menu nav-link nav-item">美味菜單</NavLink>
              <NavLink to="/delivery" activeClassName="active" className="delivery nav-link nav-item">訂餐外送</NavLink>
            </div>
          </div>
        <div id="login-wrapper">
          <form>
            <div className="form-group">
              <label htmlFor="username">使用者名稱</label>
              <input type="text" name="username" id="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">密碼</label>
              <input type="text" name="password" id="password"/>
            </div>
          </form>
          <button className="login-btn">登入</button>
        </div>
      </div>
    )
  }
}

export default Login;