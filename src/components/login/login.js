import React from 'react';
import { NavLink } from 'react-router-dom';

class Login  extends React.Component {


  render() {
    return (
      <div id="login-box">
        <div className="navBox">
            <div className="navbar-nav login-nav">
              <NavLink exact to="/" activeClassName="active"  className="home nav-link nav-item">首頁</NavLink>
              <NavLink to="/menu"  activeClassName="active" className="menu nav-link nav-item">美味菜單</NavLink>
              <NavLink to="/delivery" activeClassName="active" className="delivery nav-link nav-item">訂餐外送</NavLink>
            </div>
          </div>
        <div id="login-wrapper">
        <h2>管理者登入</h2>
        <i className="fas fa-sign-in-alt fa-5x"></i>
          <form>
              <i className="fas fa-users fa-2x"></i>
            <div className="form-group">
              <input type="text" placeholder="使用者名稱" name="username" id="username"/>
            </div>
            <i class="fas fa-unlock fa-2x"></i>
            <div className="form-group">
              <input type="text" placeholder="密碼" name="password" id="password"/>
            </div>
          </form>
          <button className="login-btn">登入</button>
        </div>
      </div>
    )
  }
}

export default Login;